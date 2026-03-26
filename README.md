# Powell Marketing Site Demo

Static frontend marketing demo for Powell's Site & Septic.

## Project intent

This repo is a frontend-only Vite + React + TypeScript + Tailwind demo focused on:
- Excavation
- Septic / drainfield
- Gravel and material delivery

No backend, API routes, database, auth, CMS, or SSR are included.

## Install

```bash
npm install
```

## Dev

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment notes

Use any static host (Netlify, Vercel static output, GitHub Pages, Cloudflare Pages).

1. Run `npm run build`
2. Deploy the generated `dist/` directory
3. Share the hosted URL

No live form submission behavior is implemented.

## Media conventions

Place images under `public/images`:
- `public/images/hero/`
- `public/images/services/`
- `public/images/materials/`
- `public/images/current/`

Asset replacement rule:
- Keep stable filenames when swapping demo assets for production assets to avoid changing component imports/paths.
- Prefer web-friendly dimensions and use responsive rendering (`object-cover`) to avoid distortion.
