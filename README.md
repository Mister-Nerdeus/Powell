# Powell Website Demo

This repository is now structured around a **demo-first marketing website** for Powell's Excavating & Septic.

The goal is to create a cleaner, more modern web presence focused on:
- excavation
- septic and drainfields
- gravel and material delivery
- clear contact paths on desktop and mobile

## Repository map

- `src/` — React + TypeScript site source
- `public/images/current/` — imported images from the current Powell site
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

## Current limitation

The zip used for this update did **not** include the actual `public/images/current` image files. The site is already prepared for them through `src/data/images.ts`, and placeholder panels will automatically be replaced once the real images are dropped into place.

## Supporting tool

The downloader utility from the earlier repo state has been preserved under:

```text
tools/image-downloader/
```

Use it to help gather public Powell website imagery for the demo.
