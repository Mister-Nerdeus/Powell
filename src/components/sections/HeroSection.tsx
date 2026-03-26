import { companyData } from "../../data/company";
import { servicesData } from "../../data/services";
import { Button } from "../ui/Button";
import { PageContainer } from "../layout/PageContainer";

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16">
      <PageContainer>
        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[1.2fr_1fr] lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Local Site Work Contractor</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Excavation, Septic / Drainfield, And Gravel Delivery Without The Runaround
            </h1>
            <p className="mt-4 text-base text-slate-700">{servicesData.heroSummary}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={companyData.phoneHref}>Call {companyData.phoneDisplay}</Button>
              <Button href={`mailto:${companyData.email}`} variant="secondary">
                Email For A Quote
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-slate-100 p-5">
            <p className="text-sm font-semibold text-slate-900">Core Work Categories</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {servicesData.highlightCategories.map((item) => (
                <li key={item} className="rounded-md bg-white px-3 py-2 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
