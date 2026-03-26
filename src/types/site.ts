export type NavItem = {
  label: string;
  href: string;
};

export type TrustItem = {
  label: string;
  value: string;
  note?: string;
};

export type ReviewTheme = {
  title: string;
  body: string;
};

export type ServiceGroup = {
  title: string;
  intro: string;
  bullets: string[];
  imageKey?: string;
};

export type MaterialItem = {
  name: string;
  description: string;
  imageKey?: string;
};

export type StorageUnit = {
  size: string;
  monthlyRate: string;
  note?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ImageCategory = 'hero' | 'services' | 'materials' | 'storage' | 'land' | 'fallback' | 'ignore';
export type ImageStatus = 'ready' | 'placeholder' | 'missing' | 'ignore';

export type ImageManifestItem = {
  key: string;
  path: string;
  category: ImageCategory;
  preferredUsage: string;
  alt: string;
  status: ImageStatus;
};
