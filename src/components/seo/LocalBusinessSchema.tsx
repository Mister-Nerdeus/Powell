import { company } from '../../data/company';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    url: company.websiteUrl,
    telephone: company.phoneDisplay,
    email: company.email,
    image: `${company.websiteUrl}images/generated/hero-earth.jpg`,
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
