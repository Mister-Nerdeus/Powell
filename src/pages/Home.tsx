import { HeroSection } from '../components/sections/HeroSection';
import { TrustStatsSection } from '../components/sections/TrustStatsSection';
import { ServicesOverviewSection } from '../components/sections/ServicesOverviewSection';
import { MaterialsHighlightSection } from '../components/sections/MaterialsHighlightSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ReviewHighlightsSection } from '../components/sections/ReviewHighlightsSection';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';
import { GalleryPreviewSection } from '../components/sections/GalleryPreviewSection';
import { Seo } from '../components/seo/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Powell's Excavating & Septic | Excavation, materials delivery, and direct local contact"
        description="Powell's Excavating & Septic serves Howard City with excavation, septic and drainfield support, grading, driveways, delivered materials, and a simpler direct-call path."
      />
      <HeroSection />
      <TrustStatsSection />
      <ServicesOverviewSection />
      <GalleryPreviewSection />
      <MaterialsHighlightSection />
      <WhyChooseSection />
      <ReviewHighlightsSection />
      <ContactCtaSection />
    </>
  );
}
