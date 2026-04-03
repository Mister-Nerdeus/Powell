import type { ReviewTheme, TrustItem } from '../types/site';

export const trustItems: TrustItem[] = [
  { value: '1984', label: 'Business start shown publicly' },
  { value: '42+', label: 'Years in business shown publicly' },
  { value: 'A+', label: 'BBB rating shown publicly' },
  { value: '4.6★', label: 'Public review average shown by aggregators' },
];

export const whyChooseItems: string[] = [
  'Long public business footprint in Howard City with clear contact information and multiple public listings.',
  'Excavation, septic and drainfield support, materials delivery, storage, and property questions all tied to one local office number.',
  'A cleaner, easier-to-call site presentation built around the jobs customers usually need solved first.',
];

export const reviewThemes: ReviewTheme[] = [
  {
    title: 'Friendly local service',
    body: 'Public review summaries consistently point to helpful people, direct answers, and a business that feels known in the area.',
  },
  {
    title: 'Useful material selection',
    body: 'Public review sources repeatedly mention mulch, gravel, asphalt millings, and other materials as a reason people stop in or call.',
  },
  {
    title: 'Established reputation',
    body: 'The public footprint suggests Powell’s benefits from long-term local familiarity rather than feeling like a lead-generation shell.',
  },
];

export const trustNotes = [
  'BBB publicly shows Powell’s Excavating & Septic, Inc. with an A+ rating and 42 years in business.',
  'Public review aggregators display a 4.6-star Google review average with substantial review volume.',
  'Powell’s public business identity is centered in Howard City, Michigan.',
];
