# Powell Asset Rules

## Source of truth

Use `public/images/current/` for current Powell imagery.

## Manifest-first rule

Do not scatter raw image paths across components. Add or update entries in `src/data/images.ts` first, then consume them from components.

## Current usage categories

- `hero`
- `services`
- `materials`
- `storage`
- `land`
- `fallback`
- `ignore`

## Asset goals

- Use real Powell images where possible
- Keep alt text descriptive and business-oriented
- Avoid user-facing placeholder instructions

## Current note

The current repo already contains usable Powell imagery under `public/images/current/published/`, and the image manifest now points to those files for visible site sections.
