import type { ServiceGroup } from '../types/site';

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Excavation & Site Prep',
    intro: 'Powell’s handles practical earthmoving and prep work for property owners, builders, and new-project sites.',
    bullets: ['General excavation', 'Site prep', 'Basements, crawlspaces, and slabs', 'Dozer work'],
    imageKey: 'hero-current-1',
  },
  {
    title: 'Septic Systems & Drainfields',
    intro: 'Powell’s public service footprint consistently includes septic system work, drainfields, and related property support.',
    bullets: ['Septic system work', 'Drainfield work', 'Water line repairs', 'Sewer line repairs'],
    imageKey: 'service-current-1',
  },
  {
    title: 'Driveways, Roads, Grading & Ponds',
    intro: 'For access, drainage, and land improvement, Powell’s covers several of the local jobs homeowners ask about most.',
    bullets: ['Driveways and road work', 'Grading', 'Ponds', 'General property improvement'],
    imageKey: 'service-current-2',
  },
  {
    title: 'Property Cleanup & Support Work',
    intro: 'Powell’s also supports cleanup and improvement work that often comes with larger site and land projects.',
    bullets: ['Stump removal', 'Tree-related clearing support', 'Material handling', 'Job-site cleanup support'],
    imageKey: 'fallback-sitework',
  },
];
