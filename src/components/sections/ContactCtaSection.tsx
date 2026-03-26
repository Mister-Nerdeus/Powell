import { companyData } from "../../data/company";
import { PageContainer } from "../layout/PageContainer";
import { Button } from "../ui/Button";

export function ContactCtaSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-bold">Ready To Talk Through Your Site Work?</h2>
          <p className="mt-3 text-sm text-slate-200">Call or email to review scope, timing, and access details.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={companyData.phoneHref} variant="secondary">
              Call {companyData.phoneDisplay}
            </Button>
            <Button href={`mailto:${companyData.email}`}>Email {companyData.email}</Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
