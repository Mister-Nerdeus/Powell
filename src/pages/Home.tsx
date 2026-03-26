import { HeroSection } from '../components/sections/HeroSection';
import { TrustStatsSection } from '../components/sections/TrustStatsSection';
import { ServicesOverviewSection } from '../components/sections/ServicesOverviewSection';
import { MaterialsHighlightSection } from '../components/sections/MaterialsHighlightSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ReviewHighlightsSection } from '../components/sections/ReviewHighlightsSection';
import { ContactCtaSection } from '../components/sections/ContactCtaSection';

export default function Home() {
  return (
    <>
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
