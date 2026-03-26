import { useState } from "react";
import { companyData } from "../../data/company";
import { navItems } from "../../data/nav";
import { Button } from "../ui/Button";
import { PageContainer } from "./PageContainer";

type SiteHeaderProps = {
  activePage: string;
  onNavigate: (id: string) => void;
};

export function SiteHeader({ activePage, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const onSelect = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <PageContainer>
        <div className="flex min-h-16 items-center justify-between gap-3 py-2">
          <button
            type="button"
            onClick={() => onSelect("home")}
            className="text-left text-sm font-bold uppercase tracking-wide text-slate-900"
          >
            Powell's Site & Septic
          </button>

          <button
            type="button"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav id="primary-navigation" className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  item.id === activePage ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button href={companyData.phoneHref} className="ml-2">
              Call {companyData.phoneDisplay}
            </Button>
          </nav>
        </div>

        {menuOpen ? (
          <nav className="border-t border-slate-200 py-3 md:hidden" aria-label="Mobile Primary">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(item.id)}
                    className={`w-full rounded-md px-3 py-3 text-left text-base font-medium ${
                      item.id === activePage ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button href={companyData.phoneHref} className="mt-3 w-full">
              Call {companyData.phoneDisplay}
            </Button>
          </nav>
        ) : null}
      </PageContainer>
    </header>
  );
}
