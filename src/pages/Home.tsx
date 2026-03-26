import { HeroSection } from '../components/sections/HeroSection';
import { TrustStatsSection } from '../components/sections/TrustStatsSection';
import { ServicesOverviewSection } from '../components/sections/ServicesOverviewSection';
import { MaterialsHighlightSection } from '../components/sections/MaterialsHighlightSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ReviewHighlightsSection } from '../components/sections/ReviewHighlightsSection';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';
import { Seo } from '../components/seo/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Powell's Excavating & Septic | Excavation, Materials Delivery, Storage"
        description="Powell's Excavating & Septic serves Howard City with excavation, septic and drainfield work, grading, driveways, materials delivery, and storage information."
      />
      <HeroSection />
      <TrustStatsSection />
      <ServicesOverviewSection />
      <MaterialsHighlightSection />
      <WhyChooseSection />
      <ReviewHighlightsSection />
      <ContactCtaSection />
    </>
  );
}
