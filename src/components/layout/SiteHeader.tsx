import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/nav';
import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { PageContainer } from './PageContainer';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
      <PageContainer>
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link to="/" className="min-w-0">
            <div className="truncate text-base font-bold text-white sm:text-lg">{company.name}</div>
            <div className="truncate text-xs text-stone-400">Howard City, Michigan</div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-amber-300' : 'text-stone-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button href={company.phoneHref} className="px-4 py-2">
              {company.phoneDisplay}
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-amber-400/10 text-amber-300' : 'bg-white/5 text-stone-200 hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button href={company.phoneHref}>{company.phoneDisplay}</Button>
            </div>
          </div>
        ) : null}
      </PageContainer>
    </header>
  );
}
