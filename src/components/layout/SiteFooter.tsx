import { companyData } from "../../data/company";
import { PageContainer } from "./PageContainer";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 py-10 text-slate-100">
      <PageContainer>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">{companyData.name}</p>
            <p className="mt-2 text-sm text-slate-300">Excavation, septic / drainfield, and material delivery support.</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">Contact</p>
            <a href={companyData.phoneHref} className="mt-2 block text-sm text-slate-200 hover:text-white">
              {companyData.phoneDisplay}
            </a>
            <a href={`mailto:${companyData.email}`} className="block text-sm text-slate-200 hover:text-white">
              {companyData.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">Address</p>
            {companyData.addressLines.map((line) => (
              <p key={line} className="mt-1 text-sm text-slate-300">
                {line}
              </p>
            ))}
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
