import type { ServiceGroup } from '../types/site';

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Excavation, site prep, and general property work',
    intro: 'Powell’s handles the practical work that gets a property moving: site prep, access work, grading support, cleanup support, and the dirt-moving jobs that need a local crew.',
    fit: 'Best fit for property owners who need earthmoving, prep, grading, or help getting a site ready to use.',
    bullets: ['General excavation', 'Site prep', 'Driveway and access support', 'Dozer work and property cleanup support'],
    imageKey: 'service-property',
  },
  {
    title: 'Septic systems, drainfields, and line-related support',
    intro: 'Powell’s public business footprint consistently includes septic system work, drainfields, and related water and sewer line support for property owners who need a practical next call.',
    fit: 'Best fit for septic system work, drainfield questions, and related property-support jobs rather than tank pumping.',
    bullets: ['Septic system work', 'Drainfield work', 'Water line repairs', 'Sewer line repairs'],
    imageKey: 'service-sitework',
  },
  {
    title: 'Driveways, roads, grading, ponds, and land improvement',
    intro: 'For access, drainage, grading, and land-improvement questions, Powell’s lines up with the kind of jobs local homeowners and landowners usually need solved first.',
    fit: 'Best fit for driveway refreshes, road work, grading, pond questions, and practical site improvement.',
    bullets: ['Driveways and road work', 'Grading and drainage support', 'Ponds', 'General land-improvement work'],
    imageKey: 'service-land2',
  },
  {
    title: 'Materials delivery and support work around the job',
    intro: 'Powell’s also supports local projects with road gravel, stone, topsoil, sand, millings, and other bulk-material questions tied to the work customers are already doing.',
    fit: 'Best fit for customers who already know the material they need and want to talk through delivery and quantity.',
    bullets: ['Road gravel and bulk materials', 'Stone and millings', 'Topsoil and sand', 'Property-support materials tied to active jobs'],
    imageKey: 'service-materials',
  },
];
