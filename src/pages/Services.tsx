import { serviceGroups } from '../data/services';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceGroupSection } from '../components/sections/ServiceGroupSection';
import { ServicesPageCtaSection } from '../components/sections/ServicesPageCtaSection';
import { Seo } from '../components/seo/Seo';

export default function Services() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="Services | Powell's Excavating & Septic"
        description="Explore Powell's excavation, septic and drainfield work, driveways, grading, ponds, and property support services in Howard City and surrounding communities."
      />
      <SectionHeading
        eyebrow="Services"
        title="Excavation and property services grouped by the problems customers are trying to solve"
        body="Powell’s keeps the services page practical: excavation, septic systems, drainfields, grading, driveways, ponds, and cleanup support all in one place."
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
