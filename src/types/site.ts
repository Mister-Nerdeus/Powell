export type NavItem = {
  label: string;
  href: string;
};

export type TrustItem = {
  label: string;
  value: string;
  note?: string;
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

export type ImageCategory = 'hero' | 'services' | 'materials' | 'fallback' | 'ignore';
export type ImageStatus = 'ready' | 'placeholder' | 'missing' | 'ignore';

export type ImageManifestItem = {
  key: string;
  path: string;
  category: ImageCategory;
  preferredUsage: string;
  alt: string;
  status: ImageStatus;
};
