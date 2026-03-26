# Powell Website

This repository contains a static React + TypeScript marketing site for Powell's Excavating & Septic.

The site is organized around the public business lines that matter most online:
- excavation and site work
- septic system work and drainfields
- driveways, grading, ponds, and related property services
- delivered materials
- storage-unit inquiries
- contact-first conversion on desktop and mobile

## Repository map

- `src/` — React + TypeScript site source
- `src/data/` — structured business content and route data
- `public/images/current/` — Powell imagery used across the site
- `docs/content-sources.md` — internal provenance notes for sourced public claims
- `docs/assets.md` — asset manifest rules and naming guidance
- `tools/image-downloader/` — supporting Python utility for collecting current-site images

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run verify
```

This runs:
- production build
- customer-facing content scan for banned meta/demo wording
- asset manifest validation for `ready` image paths

## Production build

```bash
npm run build
```

## Docker website server

Build image:

```bash
docker build -t powell-site:latest .
```

Run container:

```bash
docker run --rm -p 8080:80 powell-site:latest
```

Open:

```text
http://localhost:8080
```

## Content and asset updates

- Update business facts in `src/data/`
- Keep image references manifest-driven through `src/data/images.ts`
- Update contact details, hours, and service language in data files first

## Supporting tool

The downloader utility has been preserved under:

```text
tools/image-downloader/
```
