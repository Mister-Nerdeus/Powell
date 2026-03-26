import { PageContainer } from '../components/layout/PageContainer';
import { AboutIntroSection } from '../components/sections/AboutIntroSection';
import { TrustSignalsSection } from '../components/sections/TrustSignalsSection';
import { GalleryPreviewSection } from '../components/sections/GalleryPreviewSection';
import { Seo } from '../components/seo/Seo';

export default function About() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="About Powell's | Howard City excavation and property support"
        description="Learn more about Powell's Excavating & Septic, a long-established Howard City business handling excavation, drainfield support, materials delivery, and related property work."
      />
      <AboutIntroSection />
      <div className="mt-10">
        <TrustSignalsSection />
      </div>
      <div className="mt-10">
        <GalleryPreviewSection />
      </div>
    </PageContainer>
  );
}
