# Powell Site Handoff

## Update common business content
- Edit `src/data/company.ts`
- Edit service, material, storage, FAQ, and trust data under `src/data/`

## Replace or improve images
- Add or swap files in `public/images/current/`
- Update `src/data/images.ts`

## Build and preview
```bash
npm install
npm run verify
npm run preview
```

## Static deployment
The site is static-host friendly and can be served from any Vite-compatible static host or through the included Docker/Nginx setup.
