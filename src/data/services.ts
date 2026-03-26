import type { ServiceGroup } from '../types/site';

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Excavation, site prep, and general property work',
    intro: 'Powell’s is positioned for the practical jobs that move a property project forward: prep work, grading, access, cleanup support, and job-ready site work.',
    fit: 'Best fit for property owners who need earthmoving, prep, grading, or help getting a site ready to use.',
    bullets: ['General excavation', 'Site prep', 'Driveway and access support', 'Dozer work and property cleanup support'],
    imageKey: 'service-sitework',
  },
  {
    title: 'Septic systems, drainfields, and line-related support',
    intro: 'Powell’s public business footprint consistently includes septic system work, drainfields, and related water and sewer line support for property owners.',
    fit: 'Best fit for septic system work, drainfield questions, and related property-support jobs rather than tank pumping.',
    bullets: ['Septic system work', 'Drainfield work', 'Water line repairs', 'Sewer line repairs'],
    imageKey: 'service-sitework',
  },
  {
    title: 'Driveways, roads, grading, ponds, and land improvement',
    intro: 'For access, grading, and general land-improvement needs, Powell’s presents the kind of local property work homeowners and landowners often ask about first.',
    fit: 'Best fit for driveway refreshes, road work, grading, pond questions, and practical site improvement.',
    bullets: ['Driveways and road work', 'Grading and drainage support', 'Ponds', 'General land-improvement work'],
    imageKey: 'land-current-1',
  },
  {
    title: 'Materials delivery and support work around the job',
    intro: 'Powell’s also supports local projects with road gravel, stone, topsoil, sand, millings, and other bulk-material conversations tied to the work.',
    fit: 'Best fit for customers who already know the material they need and want to talk through delivery and quantity.',
    bullets: ['Road gravel and bulk materials', 'Stone and millings', 'Topsoil and sand', 'Property-support materials tied to active jobs'],
    imageKey: 'service-materials',
  },
];
