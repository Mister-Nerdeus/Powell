import type { ReviewTheme, TrustItem } from '../types/site';

export const trustItems: TrustItem[] = [
  { value: '1984', label: 'Business start shown publicly' },
  { value: '42+', label: 'Years in business shown publicly' },
  { value: 'A+', label: 'BBB rating shown publicly' },
  { value: '4.6★', label: 'Public review average shown by aggregators' },
];

export const whyChooseItems: string[] = [
  'Long public business footprint in Howard City with clear contact information and multiple public listings.',
  'Excavation, septic and drainfield support, materials delivery, and storage information arranged around how people actually shop for local help.',
  'Bigger type, simpler paths, and stronger mobile-first calls to action built around the phone number.',
];

export const reviewThemes: ReviewTheme[] = [
  {
    title: 'Quick local contact',
    body: 'Public review summaries consistently suggest that Powell’s is easy to reach and practical to work with.',
  },
  {
    title: 'Straight answers',
    body: 'The public footprint reads as direct and useful, which matters when a customer is trying to move a property job forward.',
  },
  {
    title: 'Known in the area',
    body: 'Howard City area business identity and long public history help the company feel established rather than temporary.',
  },
];

export const trustNotes = [
  'BBB publicly shows Powell’s Excavating & Septic, Inc. with an A+ rating and 42 years in business.',
  'Public review aggregators display a 4.6-star Google review average with substantial review volume.',
  'Powell’s public business identity is centered in Howard City, Michigan.',
];
