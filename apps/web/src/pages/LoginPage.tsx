import { useState, FormEvent, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ErrorMessage } from '../components/ErrorMessage';
import { getBackoffRemaining } from '../lib/rateLimitManager';
import { AUTH_ERROR_CODES } from '@hearthcore/shared-types';
import { getAuthErrorCode, getAuthErrorMessage, getAuthErrorPayload } from '../lib/authErrorMapping';
import { applyPreferredStoreFromAuthState, type AuthRedirectStoreState } from '../lib/authStoreRedirect';
import { emitSacredFunnelEvent, SACRED_FUNNEL_EVENTS } from '../lib/sacredFunnelAnalytics';
import './LoginPage.css';
import { PageHeader } from '../components/ux/PageHeader';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lockoutInfo, setLockoutInfo] = useState<{ lockedUntil: string; minutesRemaining: number; suggestedActions?: string[] } | null>(null);
  // P0: Rate limit countdown state (429 errors)
  const [rateLimitInfo, setRateLimitInfo] = useState<{ retryAfter: number; suggestedActions?: string[] } | null>(null);
  const [rateLimitCountdown, setRateLimitCountdown] = useState<number>(0);

  const redirectState = location.state as ({ from?: { pathname?: string } } & AuthRedirectStoreState) | null;
  const from = redirectState?.from?.pathname || '/recipes';
  const invalidCredentialsNextStep = 'Check your credentials and try again.';

  // P0: Update rate limit countdown every second
  useEffect(() => {
    if (rateLimitInfo) {
      const interval = setInterval(() => {
        const remaining = getBackoffRemaining('/auth/login');
        const secondsRemaining = Math.max(0, Math.ceil(remaining / 1000));
        
        if (secondsRemaining <= 0) {
          setRateLimitInfo(null);
          setRateLimitCountdown(0);
        } else {
          setRateLimitCountdown(secondsRemaining);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [rateLimitInfo]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLockoutInfo(null);
    setRateLimitInfo(null); // P0: Clear rate limit info on new attempt
    setIsSubmitting(true);
    emitSacredFunnelEvent(SACRED_FUNNEL_EVENTS.AUTH_STARTED, {
      funnelStage: 'auth',
      payload: { auth_mode: 'login' },
    });

    try {
      await login(email, password);
      emitSacredFunnelEvent(SACRED_FUNNEL_EVENTS.AUTH_COMPLETED, {
        funnelStage: 'auth',
        payload: { auth_mode: 'login', auth_result: 'success' },
      });
      try {
        await applyPreferredStoreFromAuthState(redirectState);
      } catch {
        // Non-blocking: login should succeed even if store preference persistence fails.
      }
      navigate(from, { replace: true });
    } catch (err) {
      console.error('[LOGIN ERROR]', err);
      
      // Provide user-friendly error messages based on error type
      if (err instanceof Error) {
        const apiError = err as Error & {
          status?: number;
          data?: {
            hint?: unknown;
            lockedUntil?: unknown;
            minutesRemaining?: unknown;
            retryAfter?: unknown;
            retryAfterSeconds?: unknown;
            suggestedActions?: unknown;
          };
          message?: string;
        };
        const authCode = getAuthErrorCode(apiError);
        const authPayload = getAuthErrorPayload(apiError);
        emitSacredFunnelEvent(SACRED_FUNNEL_EVENTS.AUTH_COMPLETED, {
          funnelStage: 'auth',
          payload: {
            auth_mode: 'login',
            auth_result: 'failure',
            error_code: authCode ?? 'UNKNOWN',
          },
        });
        emitSacredFunnelEvent(SACRED_FUNNEL_EVENTS.STEP_ERROR, {
          funnelStage: 'auth',
          payload: {
            auth_mode: 'login',
            error_code: authCode ?? 'UNKNOWN',
          },
        });

        if (authCode === AUTH_ERROR_CODES.AUTH_INVALID_CREDENTIALS) {
          const baseMessage = getAuthErrorMessage(authCode) ?? 'Invalid email or password.';
          setError(`${baseMessage} ${invalidCredentialsNextStep}`);
        } else if (authCode === AUTH_ERROR_CODES.AUTH_LOCKED) {
          const lockedUntil = typeof authPayload.lockedUntil === 'string' ? authPayload.lockedUntil : '';
          const minutesRemaining = typeof authPayload.minutesRemaining === 'number' ? authPayload.minutesRemaining : 0;
          if (lockedUntil && minutesRemaining > 0) {
            setLockoutInfo({
              lockedUntil,
              minutesRemaining,
              suggestedActions: Array.isArray(authPayload.suggestedActions) ? authPayload.suggestedActions as string[] : [],
            });
          }
          setError('Account temporarily locked due to repeated failed login attempts. Wait until lockout ends before trying again.');
        } else if (authCode === AUTH_ERROR_CODES.AUTH_RATE_LIMIT) {
          const retryAfterSeconds = typeof authPayload.retryAfterSeconds === 'number'
            ? authPayload.retryAfterSeconds
            : typeof authPayload.retryAfter === 'number'
              ? authPayload.retryAfter
              : 0;

          const remaining = getBackoffRemaining('/auth/login');
          const secondsRemaining = Math.ceil(remaining / 1000);
          const effectiveRetry = Math.max(retryAfterSeconds, secondsRemaining);

          if (effectiveRetry > 0) {
            setRateLimitInfo({
              retryAfter: effectiveRetry,
              suggestedActions: Array.isArray(authPayload.suggestedActions) ? authPayload.suggestedActions as string[] : [],
            });
            setRateLimitCountdown(effectiveRetry);
          }
          setError('Too many authentication attempts. Wait for the countdown, then retry.');
        } else if (authCode === AUTH_ERROR_CODES.AUTH_ACCOUNT_DISABLED) {
          setError('Your account has been disabled. Contact support.');
        } else if (apiError.status === 0 || apiError.message?.includes('reach the API')) {
          setError('Unable to connect to the server. Ensure the API is running, then try again.');
        } else {
          setError(`Login failed. ${invalidCredentialsNextStep}`);
        }
      } else {
        emitSacredFunnelEvent(SACRED_FUNNEL_EVENTS.AUTH_COMPLETED, {
          funnelStage: 'auth',
          payload: {
            auth_mode: 'login',
            auth_result: 'failure',
            error_code: 'UNKNOWN',
          },
        });
        emitSacredFunnelEvent(SACRED_FUNNEL_EVENTS.STEP_ERROR, {
          funnelStage: 'auth',
          payload: { auth_mode: 'login', error_code: 'UNKNOWN' },
        });
        setError(`An unexpected error occurred. ${invalidCredentialsNextStep}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // P1-01: Format lockout time for display
  const formatLockoutTime = (lockedUntil: string): string => {
    try {
      const unlockTime = new Date(lockedUntil);
      return unlockTime.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return 'shortly';
    }
  };

  return (
    <div className="auth-page login-page">
      <section className="auth-value-panel login-value-panel" aria-label="Product overview">
        <div className="auth-hero-media">
          <img
            src="/images/auth/login-hero.webp"
            alt="HearthCoreOS meal planning and store deals shown across tablet and phone on a kitchen table."
            className="auth-hero-image"
          />
          <div className="auth-hero-overlay" aria-hidden="true" />
          <div className="auth-hero-copy">
            <p className="auth-eyebrow">Welcome back</p>
            <h1>Plan meals with a real-world store view.</h1>
            <p>
              Move from weekly planning to store-aware shopping without losing the thread between meals, lists, and deals.
            </p>
          </div>
        </div>

        <div className="auth-value-content">
          <ul className="auth-value-list">
            <li>See the week and the shopping impact together</li>
            <li>Keep dinner planning light without starting over each day</li>
            <li>Carry saved preferences and store context forward after sign-in</li>
          </ul>
          <div className="auth-trust-strip" aria-label="Trust signals">
            <span>Secure login</span>
            <span>Dark mode ready</span>
            <span>Profile and preferences synced</span>
          </div>
        </div>
      </section>

      <div className="card card-shadow-sm auth-form-shell login-card">
        <PageHeader
          title="Login"
          description="Sign in to continue planning, shopping, and saved meal flows."
        />

        {error && <div id="login-error"><ErrorMessage message={error} /></div>}

        {/* P1-01: Lockout information display */}
        {lockoutInfo && (
          <div className="auth-state-panel auth-state-panel-danger">
            <div className="auth-state-title">
              🔒 Account Temporarily Locked
            </div>
            <div className="auth-state-copy">
              Please try again at <strong>{formatLockoutTime(lockoutInfo.lockedUntil)}</strong>
            </div>
            <div className="auth-state-meta">
              ({lockoutInfo.minutesRemaining} {lockoutInfo.minutesRemaining === 1 ? 'minute' : 'minutes'} remaining)
            </div>
            
            {/* P1: Suggested actions from backend */}
            {lockoutInfo.suggestedActions && lockoutInfo.suggestedActions.length > 0 && (
              <div className="auth-state-hints">
                <div className="auth-state-hint-title">
                  While you wait:
                </div>
                {lockoutInfo.suggestedActions.includes('resetPassword') && (
                  <div className="auth-state-hint-item">
                    📧 Or <a href="/reset-password" className="auth-inline-link">reset your password</a> if you forgot it
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* P0: Rate limit information display (429 errors with countdown) */}
        {rateLimitInfo && rateLimitCountdown > 0 && (
          <div className="auth-state-panel auth-state-panel-warning">
            <div className="auth-state-title">
              ⏳ Rate Limit: Too Many Requests
            </div>
            <div className="auth-state-copy">
              Please wait <strong>{rateLimitCountdown}</strong> second{rateLimitCountdown !== 1 ? 's' : ''} before trying again.
            </div>
            <div className="auth-state-meta">
              This helps keep sign-in secure.
            </div>
            
            {/* P1: Suggested actions from backend */}
            {rateLimitInfo.suggestedActions && rateLimitInfo.suggestedActions.length > 0 && (
              <div className="auth-state-hints">
                <div className="auth-state-hint-title">
                  While you wait:
                </div>
                {rateLimitInfo.suggestedActions.includes('resetPassword') && (
                  <div className="auth-state-hint-item">
                    📧 Or <a href="/reset-password" className="auth-inline-link">reset your password</a> if you forgot it
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} aria-label="Login form" className="auth-form">
          <div className="auth-field">
            <label htmlFor="email" className="auth-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              aria-required="true"
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'login-error' : undefined}
              className="auth-input"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password" className="auth-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="current-password"
              minLength={8}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
              }}
              aria-required="true"
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'login-error' : undefined}
              className="auth-input"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !!lockoutInfo || (!!rateLimitInfo && rateLimitCountdown > 0)}
            aria-busy={isSubmitting}
            aria-label={
              lockoutInfo 
                ? 'Account locked - please wait' 
                : (rateLimitInfo && rateLimitCountdown > 0)
                  ? `Rate limited - wait ${rateLimitCountdown} seconds`
                  : isSubmitting 
                    ? 'Logging in, please wait' 
                    : 'Login to your account'
            }
            className={`login-submit-button ${(isSubmitting || !!lockoutInfo || (!!rateLimitInfo && rateLimitCountdown > 0)) ? 'is-disabled' : ''}`}
          >
            {lockoutInfo 
              ? 'Account Locked' 
              : (rateLimitInfo && rateLimitCountdown > 0)
                ? `Wait ${rateLimitCountdown}s...`
              : isSubmitting 
                  ? 'Logging in...' 
                  : 'Login'}
          </button>
        </form>

        <div className="auth-secondary-cta">
          <p className="auth-secondary-copy">New to HearthCoreOS?</p>
          <Link
            to="/register"
            state={{ from: location.state?.from }}
            className="auth-secondary-link"
          >
            Create your account
          </Link>
        </div>
      </div>
    </div>
  );
}
