import { company } from '../../data/company';
import { primaryNavItems, secondaryNavItems } from '../../data/nav';
import { PageContainer } from './PageContainer';
import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-stone-950/95 py-14">
      <PageContainer>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <h2 className="text-xl font-semibold text-white">{company.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-400">{company.intro}</p>
            <div className="mt-4 grid gap-1 text-sm text-stone-300">
              <div>{company.phoneDisplay}</div>
              <div>{company.email}</div>
              <div>{company.addressLine1}</div>
              <div>{company.cityStateZip}</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Main pages</div>
            <div className="mt-4 grid gap-3 text-sm text-stone-300">
              {primaryNavItems.map((item) => (
                <Link key={item.href} to={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">More Powell’s</div>
            <div className="mt-4 grid gap-3 text-sm text-stone-300">
              {secondaryNavItems.map((item) => (
                <Link key={item.href} to={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-stone-500">
              Storage and land are real Powell business lines, but the core funnel still leads with excavation, property work, and delivered materials.
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
