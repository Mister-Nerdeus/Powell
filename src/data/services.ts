import type { ServiceGroup } from '../types/site';

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Excavation & Site Work',
    intro: 'Core earthmoving and prep work presented first because it is one of the clearest public Powell service lines.',
    bullets: ['Site prep', 'Basements, crawlspaces, and slabs', 'General excavation', 'Dozer work'],
    imageKey: 'hero-current-1',
  },
  {
    title: 'Septic & Drainfield',
    intro: 'Septic systems and drainfields are a core part of the Powell business identity and deserve dedicated emphasis.',
    bullets: ['Septic system work', 'Drainfield work', 'Water and sewer line repairs', 'Property support for rural service needs'],
    imageKey: 'service-current-1',
  },
  {
    title: 'Driveways, Grading & Ponds',
    intro: 'These are practical, high-interest local service categories that help homeowners quickly see where Powell fits.',
    bullets: ['Driveways and road work', 'Grading', 'Ponds', 'General property improvement'],
    imageKey: 'service-current-2',
  },
  {
    title: 'Property Cleanup & Support Work',
    intro: 'Secondary but still relevant services that support the broader excavation and property-improvement story.',
    bullets: ['Stump removal', 'Tree-related clearing support', 'Material handling', 'Job-site cleanup support'],
    imageKey: 'fallback-sitework',
  },
];
