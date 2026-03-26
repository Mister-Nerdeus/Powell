import type { ImageManifestItem } from '../types/site';

export const imageManifest: ImageManifestItem[] = [
  {
    key: 'hero-current-1',
    path: '/images/current/hero-01.jpg',
    category: 'hero',
    preferredUsage: 'Homepage hero background or side image',
    alt: 'Powell current-site hero image placeholder',
    status: 'missing',
  },
  {
    key: 'service-current-1',
    path: '/images/current/service-01.jpg',
    category: 'services',
    preferredUsage: 'Septic or excavation service card image',
    alt: 'Powell service image placeholder',
    status: 'missing',
  },
  {
    key: 'service-current-2',
    path: '/images/current/service-02.jpg',
    category: 'services',
    preferredUsage: 'Driveway, grading, or pond section image',
    alt: 'Powell grading or site-work image placeholder',
    status: 'missing',
  },
  {
    key: 'materials-current-1',
    path: '/images/current/materials-01.jpg',
    category: 'materials',
    preferredUsage: 'Road gravel or aggregate card image',
    alt: 'Powell materials image placeholder',
    status: 'missing',
  },
  {
    key: 'materials-current-2',
    path: '/images/current/materials-02.jpg',
    category: 'materials',
    preferredUsage: 'Topsoil or delivery section image',
    alt: 'Powell delivery materials image placeholder',
    status: 'missing',
  },
  {
    key: 'fallback-sitework',
    path: '/images/current/fallback-sitework.jpg',
    category: 'fallback',
    preferredUsage: 'Fallback card image for service sections',
    alt: 'Fallback Powell site-work image placeholder',
    status: 'missing',
  },
  {
    key: 'fallback-materials',
    path: '/images/current/fallback-materials.jpg',
    category: 'fallback',
    preferredUsage: 'Fallback image for materials sections',
    alt: 'Fallback Powell materials image placeholder',
    status: 'missing',
  },
  {
    key: 'ignore-duplicate-logo',
    path: '/images/current/logo-small.png',
    category: 'ignore',
    preferredUsage: 'Ignore unless needed for branding cleanup',
    alt: 'Small legacy logo',
    status: 'ignore',
  },
];

export const findImageByKey = (key?: string): ImageManifestItem | undefined =>
  imageManifest.find((item) => item.key === key);
