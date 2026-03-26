import { servicesData } from "../../data/services";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesOverviewSection() {
  return (
    <section className="py-12">
      <PageContainer>
        <SectionHeading title="Services At A Glance" description="Fast way to understand what we handle most often." />
        <div className="grid gap-4 md:grid-cols-3">
          {servicesData.groups.map((group) => (
            <article key={group.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{group.intro}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
