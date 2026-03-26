import { PageContainer } from '../components/layout/PageContainer';
import { AboutIntroSection } from '../components/sections/AboutIntroSection';
import { TrustSignalsSection } from '../components/sections/TrustSignalsSection';

export default function About() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <AboutIntroSection />
      <div className="mt-10">
        <TrustSignalsSection />
      </div>
    </PageContainer>
  );
}
