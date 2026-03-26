import { companyData } from "../../data/company";
import { PageContainer } from "../layout/PageContainer";
import { Button } from "../ui/Button";

export function ServicesPageCtaSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <div className="rounded-xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">Need Help Choosing The Right Service?</h2>
          <p className="mt-2 text-sm text-slate-200">Call to explain your property goals and current site conditions.</p>
          <Button href={companyData.phoneHref} className="mt-4" variant="secondary">
            Call {companyData.phoneDisplay}
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
