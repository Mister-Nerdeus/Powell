import type { ReviewTheme, TrustItem } from '../types/site';

export const trustItems: TrustItem[] = [
  { value: '1984', label: 'Business start shown publicly' },
  { value: '42+', label: 'Years in business shown publicly' },
  { value: 'A+', label: 'BBB rating shown publicly' },
  { value: '4.6★', label: 'Public review average shown by review aggregators' },
];

export const whyChooseItems: string[] = [
  'Clear contact paths for service work, materials delivery, storage, and general questions.',
  'Large, readable mobile-first layout that keeps the phone number within reach.',
  'Service-first structure built around excavation, septic and drainfield work, grading, and delivered materials.',
];

export const reviewThemes: ReviewTheme[] = [
  {
    title: 'Fast response',
    body: 'Public review summaries repeatedly point to quick help and practical turnaround for local jobs.',
  },
  {
    title: 'Straight answers',
    body: 'Powell’s public reputation reads as direct, useful, and grounded in real property work.',
  },
  {
    title: 'Local familiarity',
    body: 'Howard City area customers consistently describe the business as known, established, and easy to reach.',
  },
];

export const trustNotes = [
  'BBB publicly shows Powell’s Excavating & Septic, Inc. with an A+ rating and 42 years in business.',
  'Public review aggregators display a 4.6-star Google review average with substantial review volume.',
  'Powell’s public contact and business identity are centered in Howard City, Michigan.',
];
