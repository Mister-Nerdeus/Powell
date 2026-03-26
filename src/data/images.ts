import type { ImageManifestItem } from '../types/site';

export const imageManifest: ImageManifestItem[] = [
  {
    key: 'hero-current-1',
    path: '/images/current/published/wesite-header_19.jpg',
    category: 'hero',
    preferredUsage: 'Homepage hero image',
    alt: 'Powell site work and materials scene',
    status: 'ready',
  },
  {
    key: 'service-current-1',
    path: '/images/current/published/wesite-header_15.jpg',
    category: 'services',
    preferredUsage: 'Septic or excavation service card image',
    alt: 'Powell excavation and septic service image',
    status: 'ready',
  },
  {
    key: 'service-current-2',
    path: '/images/current/published/wesite-header_10.jpg',
    category: 'services',
    preferredUsage: 'Driveway, grading, or pond section image',
    alt: 'Powell driveway and grading service image',
    status: 'ready',
  },
  {
    key: 'materials-current-1',
    path: '/images/current/published/millings.jpeg',
    category: 'materials',
    preferredUsage: 'Road gravel or aggregate card image',
    alt: 'Millings and aggregate material',
    status: 'ready',
  },
  {
    key: 'materials-current-2',
    path: '/images/current/published/4a-stone.jpeg',
    category: 'materials',
    preferredUsage: 'Stone or driveway material image',
    alt: '4A stone material',
    status: 'ready',
  },
  {
    key: 'storage-current-1',
    path: '/images/current/published/unit-10.jpg',
    category: 'storage',
    preferredUsage: 'Storage page image',
    alt: 'Powell storage unit exterior',
    status: 'ready',
  },
  {
    key: 'land-current-1',
    path: '/images/current/published/stone-land-ii.jpg',
    category: 'land',
    preferredUsage: 'Land and property page image',
    alt: 'Powell land and property image',
    status: 'ready',
  },
  {
    key: 'fallback-sitework',
    path: '/images/current/published/img-2767.jpg',
    category: 'fallback',
    preferredUsage: 'Fallback card image for service sections',
    alt: 'Powell site work image',
    status: 'ready',
  },
  {
    key: 'fallback-materials',
    path: '/images/current/published/peastone.jpeg',
    category: 'fallback',
    preferredUsage: 'Fallback image for materials sections',
    alt: 'Pea stone material',
    status: 'ready',
  },
  {
    key: 'ignore-duplicate-logo',
    path: '/images/current/editor/logo2021.jpg',
    category: 'ignore',
    preferredUsage: 'Ignore unless needed for branding cleanup',
    alt: 'Small legacy logo',
    status: 'ignore',
  },
];

export const findImageByKey = (key?: string): ImageManifestItem | undefined =>
  imageManifest.find((item) => item.key === key);
