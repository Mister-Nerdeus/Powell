import { trustData } from "../../data/trust";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function TrustStatsSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading
          title="Built For Straightforward Jobsite Outcomes"
          description="Clear communication, practical scheduling, and work that supports the next phase of your project."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {trustData.stats.map((stat) => (
            <article key={stat.label} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
