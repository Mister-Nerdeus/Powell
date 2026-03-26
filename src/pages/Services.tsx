import { PageContainer } from "../components/layout/PageContainer";
import { ServiceGroupSection } from "../components/sections/ServiceGroupSection";
import { ServicesPageCtaSection } from "../components/sections/ServicesPageCtaSection";
import { servicesData } from "../data/services";

export function Services() {
  return (
    <>
      <section className="py-12">
        <PageContainer>
          <h1 className="text-3xl font-bold text-slate-900">Services</h1>
          <p className="mt-3 max-w-3xl text-slate-700">{servicesData.heroSummary}</p>
        </PageContainer>
      </section>
      {servicesData.groups.map((group) => (
        <ServiceGroupSection key={group.title} group={group} />
      ))}
      <ServicesPageCtaSection />
    </>
  );
}
