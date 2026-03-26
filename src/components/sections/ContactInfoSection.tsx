import { companyData } from "../../data/company";
import { PageContainer } from "../layout/PageContainer";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactInfoSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading title="Contact Powell's" description="Call or email for excavation, septic, and materials delivery requests." />
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Phone</h3>
            <a href={companyData.phoneHref} className="mt-2 block text-lg font-bold text-slate-900 hover:text-slate-700">
              {companyData.phoneDisplay}
            </a>
          </article>

          <article className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Email</h3>
            <a
              href={`mailto:${companyData.email}`}
              className="mt-2 block break-all text-base font-semibold text-slate-900 hover:text-slate-700"
            >
              {companyData.email}
            </a>
          </article>

          <article className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Address</h3>
            {companyData.addressLines.map((line) => (
              <p key={line} className="mt-2 text-sm text-slate-800">
                {line}
              </p>
            ))}
          </article>
        </div>

        <article className="mt-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Hours</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-800">
            {companyData.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
          <Button href={companyData.phoneHref} className="mt-4">
            {companyData.primaryCtaLabel}
          </Button>
        </article>
      </PageContainer>
    </section>
  );
}
