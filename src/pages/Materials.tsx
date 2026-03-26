import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MaterialsGridSection } from '../components/sections/MaterialsGridSection';
import { DeliveryCtaSection } from '../components/sections/DeliveryCtaSection';
import { Seo } from '../components/seo/Seo';

export default function Materials() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="Materials Delivery | Powell's Excavating & Septic"
        description="Call Powell's for road gravel, topsoil, sand, stone, mulch, crushed concrete, and millings in Howard City and surrounding communities."
      />
      <SectionHeading
        eyebrow="Materials"
        title="Road gravel, topsoil, stone, mulch, and other delivered materials"
        body="This page is built for quick understanding and a fast phone call. Use it to see what Powell’s handles, then call to talk through delivery, quantity, and project fit."
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
