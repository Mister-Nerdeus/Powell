import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const classes = {
  primary: 'bg-amber-400 text-stone-950 shadow-[0_18px_45px_rgba(0,0,0,0.22)] hover:bg-amber-300',
  secondary: 'border border-amber-200/15 bg-stone-900/75 text-stone-100 hover:bg-stone-800/85',
};

export function Button({ children, href, to, variant = 'primary', className = '' }: Props) {
  const base = `inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${classes[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={base}>
      {children}
    </a>
  );
}
