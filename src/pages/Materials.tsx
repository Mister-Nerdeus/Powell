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
        title="Road gravel, topsoil, stone, mulch, millings, and other delivered materials"
        body="Use this page to quickly confirm what Powell’s handles, then call with the material, rough quantity, and delivery location so the office can point you in the right direction."
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
