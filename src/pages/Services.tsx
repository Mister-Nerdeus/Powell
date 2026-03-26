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
        description="Explore Powell's excavation, septic and drainfield support, driveways, grading, ponds, and property-support services in Howard City and surrounding communities."
      />
      <SectionHeading
        eyebrow="Services"
        title="Excavation and property services presented around customer job types instead of internal categories"
        body="The service page should sound like a confident local contractor: what Powell’s handles, who each category fits best, and what kinds of questions belong in the phone call."
      />
      <div className="mt-10 space-y-6">
        {serviceGroups.map((group, index) => (
          <ServiceGroupSection key={group.title} group={group} index={index} />
        ))}
      </div>
      <div className="mt-10">
        <ServicesPageCtaSection />
      </div>
    </PageContainer>
  );
}
