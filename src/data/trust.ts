import type { ReviewTheme, TrustItem } from '../types/site';

export const trustItems: TrustItem[] = [
  { value: '1984', label: 'Business start shown publicly' },
  { value: '42+', label: 'Years in business shown publicly' },
  { value: 'A+', label: 'BBB rating shown publicly' },
  { value: '4.6★', label: 'Public review average shown by aggregators' },
];

export const whyChooseItems: string[] = [
  'One Howard City office anchors excavation, materials, storage, and broader property questions instead of sending customers through multiple businesses.',
  'Powell’s publicly presents the practical jobs property owners actually call about: driveways, grading, drainfields, site prep, and delivered materials.',
  'The company already has the public history and familiarity. The website should make that feel immediate and easy to trust.',
];

export const reviewThemes: ReviewTheme[] = [
  {
    title: 'Friendly local help',
    body: 'Public review summaries repeatedly suggest Powell’s feels approachable, direct, and easier to work with than a faceless lead source.',
  },
  {
    title: 'More than one reason to call',
    body: 'Review and listing signals point to materials, property work, and practical support that go beyond a single narrow service line.',
  },
  {
    title: 'Established in the area',
    body: 'The public footprint reads like a known local operation with history, a yard, an office, and repeat familiarity in the community.',
  },
];

export const trustNotes = [
  'BBB publicly shows Powell’s Excavating & Septic, Inc. with an A+ rating and 42 years in business.',
  'Public review aggregators display a 4.6-star Google review average with substantial review volume.',
  'Powell’s public business identity is centered in Howard City, Michigan.',
];
