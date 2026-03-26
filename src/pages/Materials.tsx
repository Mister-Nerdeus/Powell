import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MaterialsGridSection } from '../components/sections/MaterialsGridSection';
import { DeliveryCtaSection } from '../components/sections/DeliveryCtaSection';

export default function Materials() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <SectionHeading
        eyebrow="Materials"
        title="Road gravel, topsoil, stone, mulch, and other delivered materials"
        body="This page is built for quick comprehension and a fast phone call. It is intentionally not a fake ecommerce catalog."
      />
      <div className="mt-10">
        <MaterialsGridSection />
      </div>
      <div className="mt-10">
        <DeliveryCtaSection />
      </div>
    </PageContainer>
  );
}
