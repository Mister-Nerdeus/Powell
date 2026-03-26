import { PageContainer } from '../components/layout/PageContainer';
import { AboutIntroSection } from '../components/sections/AboutIntroSection';
import { TrustSignalsSection } from '../components/sections/TrustSignalsSection';
import { Seo } from '../components/seo/Seo';

export default function About() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="About Powell's | Howard City Excavation and Property Services"
        description="Learn more about Powell's Excavating & Septic, a Howard City business publicly associated with excavation, septic and drainfield work, materials delivery, storage, and property support."
      />
      <AboutIntroSection />
      <div className="mt-10">
        <TrustSignalsSection />
      </div>
    </PageContainer>
  );
}
