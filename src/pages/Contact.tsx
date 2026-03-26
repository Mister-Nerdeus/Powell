import { PageContainer } from '../components/layout/PageContainer';
import { ContactInfoSection } from '../components/sections/ContactInfoSection';

export default function Contact() {
  return (
    <PageContainer className="py-14 sm:py-16">
      <ContactInfoSection />
    </PageContainer>
  );
}
