# Powell Asset Rules

## Phase-one source of truth

Use `public/images/current/` for imported images from the current Powell website.

## Manifest-first rule

Do not scatter raw image paths across components. Add or update entries in `src/data/images.ts` first, then consume them from components.

## Recommended categories

- `hero`
- `services`
- `materials`
- `fallback`
- `ignore`

## Recommended naming

- `hero-01.jpg`
- `service-01.jpg`
- `service-02.jpg`
- `materials-01.jpg`
- `materials-02.jpg`
- `fallback-sitework.jpg`
- `fallback-materials.jpg`

## Important note

The zip used for this build did not include the actual current-site images, so the manifest entries are ready but marked `missing`. Once you drop the real files into `public/images/current/`, the site can start using them immediately.
