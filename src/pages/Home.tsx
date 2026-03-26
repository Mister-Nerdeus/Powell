import { ContactCtaSection } from "../components/sections/ContactCtaSection";
import { HeroSection } from "../components/sections/HeroSection";
import { MaterialsHighlightSection } from "../components/sections/MaterialsHighlightSection";
import { ReviewHighlightsSection } from "../components/sections/ReviewHighlightsSection";
import { ServicesOverviewSection } from "../components/sections/ServicesOverviewSection";
import { TrustStatsSection } from "../components/sections/TrustStatsSection";
import { WhyChooseSection } from "../components/sections/WhyChooseSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustStatsSection />
      <ServicesOverviewSection />
      <WhyChooseSection />
      <ReviewHighlightsSection />
      <MaterialsHighlightSection />
      <ContactCtaSection />
    </>
  );
}
