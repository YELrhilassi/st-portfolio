# Sophia Tam · Portfolio

Hi, welcome! This is the cozy little corner where Sophia Tam keeps her favorite product design, branding, and illustration stories. Think polished grids, editorial vibes, and a sprinkle of whimsy.

## Stack (the friendly bits)
- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 + normalize.css to keep things tidy
- Custom type pairing: Instrument, Varta, and EB Garamond
- Lucide icons; GSAP-ready if we want motion magic

## Quickstart
1) Install goodies  
```bash
npm install
```
2) Start the creative engine  
```bash
npm run dev
```
Then visit `http://localhost:3000` and browse away.

### Handy scripts
- `npm run dev` – local dev server
- `npm run build` – production build
- `npm run start` – run the built site
- `npm run lint` – Biome checks
- `npm run format` – Biome format (writes changes)

## Tour of the repo
- `app/(portfolio)/layout.tsx` – shell with metadata, fonts, header + footer
- `app/(portfolio)/page.tsx` – home grid of featured work
- `globals.css` – global styles + tokens
- `public/` – images, SVG textures, icons, and other delights

## Little notes
- Fixed viewport width for a print-inspired, gallery feel.
- OpenGraph/Twitter cards are set for pretty shares.
- Keep the local fonts in `app/(portfolio)/font/` so the typography stays just right.

