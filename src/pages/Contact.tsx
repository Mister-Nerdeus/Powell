import { PageContainer } from '../components/layout/PageContainer';
import { ContactInfoSection } from '../components/sections/ContactInfoSection';
import { Seo } from '../components/seo/Seo';

export default function Contact() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <Seo
        title="Contact Powell's Excavating & Septic"
        description="Call or email Powell's Excavating & Septic in Howard City for excavation, septic system work, materials delivery, storage questions, and general business inquiries."
      />
      <ContactInfoSection />
    </PageContainer>
  );
}
