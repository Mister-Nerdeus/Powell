import { trustData } from "../../data/trust";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function TrustSignalsSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading title="Grounded Trust Signals" />
        <ul className="grid gap-3 md:grid-cols-3">
          {trustData.signals.map((signal) => (
            <li key={signal} className="rounded-md bg-white px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
              {signal}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
