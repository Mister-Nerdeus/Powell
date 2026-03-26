import { trustData } from "../../data/trust";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyChooseSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading
          title="Why Choose Powell's"
          description="Conservative, practical support for property owners who need heavy work done right."
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {trustData.signals.map((signal) => (
            <li key={signal} className="rounded-xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
              {signal}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
