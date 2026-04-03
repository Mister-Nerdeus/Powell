import { HeroSection } from '../components/sections/HeroSection';
import { TrustStatsSection } from '../components/sections/TrustStatsSection';
import { ServicesOverviewSection } from '../components/sections/ServicesOverviewSection';
import { MaterialsHighlightSection } from '../components/sections/MaterialsHighlightSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ReviewHighlightsSection } from '../components/sections/ReviewHighlightsSection';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';
import { GalleryPreviewSection } from '../components/sections/GalleryPreviewSection';
import { ServiceAreaBandSection } from '../components/sections/ServiceAreaBandSection';
import { StoragePromoSection } from '../components/sections/StoragePromoSection';
import { Seo } from '../components/seo/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Powell's Excavating & Septic | Howard City excavation, delivered materials, and direct local contact"
        description="Powell's Excavating & Septic serves Howard City with excavation, septic and drainfield support, driveways, grading, delivered materials, storage units, and a stronger direct-call path."
      />
      <HeroSection />
      <ServiceAreaBandSection />
      <TrustStatsSection />
      <ServicesOverviewSection />
      <GalleryPreviewSection />
      <MaterialsHighlightSection />
      <StoragePromoSection />
      <WhyChooseSection />
      <ReviewHighlightsSection />
      <ContactCtaSection />
    </>
  );
}
