import { companyData } from "../../data/company";
import { PageContainer } from "../layout/PageContainer";
import { Button } from "../ui/Button";

export function DeliveryCtaSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Need Delivery Scheduled?</h2>
          <p className="mt-2 text-sm text-slate-700">Share location, quantity, and timing for a direct quote.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button href={companyData.phoneHref}>Call {companyData.phoneDisplay}</Button>
            <Button href={`mailto:${companyData.email}`} variant="secondary">
              Email For Delivery Quote
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
