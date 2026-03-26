import { serviceGroups } from '../data/services';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceGroupSection } from '../components/sections/ServiceGroupSection';
import { ServicesPageCtaSection } from '../components/sections/ServicesPageCtaSection';

export default function Services() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <SectionHeading
        eyebrow="Services"
        title="Grouped clearly so customers can identify their need quickly"
        body="This page avoids mixing everything together. It groups Powell’s core work by the kinds of problems local customers are most likely trying to solve."
      />
      <div className="mt-10 space-y-6">
        {serviceGroups.map((group) => (
          <ServiceGroupSection key={group.title} group={group} />
        ))}
      </div>
      <div className="mt-10">
        <ServicesPageCtaSection />
      </div>
    </PageContainer>
  );
}
