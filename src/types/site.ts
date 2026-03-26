export type NavItem = {
  id: "home" | "services" | "materials" | "about" | "contact";
  label: string;
};

export type CompanyData = {
  name: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  addressLines: string[];
  hours: string[];
  primaryCtaLabel: string;
};

export type ServiceGroup = {
  title: string;
  intro: string;
  bullets: string[];
};

export type ServicesData = {
  heroSummary: string;
  highlightCategories: string[];
  groups: ServiceGroup[];
};

export type MaterialsData = {
  intro: string;
  items: string[];
};

export type TrustData = {
  stats: Array<{ label: string; value: string }>;
  signals: string[];
  reviews: Array<{ source: string; quote: string; author: string }>;
};
