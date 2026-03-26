import { company } from '../../data/company';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    telephone: company.phoneDisplay,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.addressLine1,
      addressLocality: 'Howard City',
      addressRegion: 'MI',
      postalCode: '49329',
      addressCountry: 'US',
    },
    areaServed: company.serviceArea,
    description: company.intro,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
