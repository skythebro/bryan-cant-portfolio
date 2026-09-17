# Bryan Cant, portfolio

Static personal site for **Bryan Cant** (Sky / SkyBreeze), junior software engineer in Stabroek, Belgium. Next.js App Router, TypeScript, Tailwind CSS, `output: 'export'`. No backend, no paid services.

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43127](http://127.0.0.1:43127)

```bash
npm run build    # writes ./out
npm run lint
```

## Design

Tokens (color, type, motion) live in [DESIGN.md](./DESIGN.md). Content is factual only. See `lib/content.ts`. Metrics marked `~` come from Bryan’s brief (Nexus unique downloads / Thunderstore). Links that could not be verified are omitted, not invented.

Portrait: `public/skythebro.png` is the public skythebro avatar (GitHub-style character), not the CV photo.

FoA gallery shots live in `public/foa/` (Nexus images from therealskybro). Featured UI cards — Better UI, Avalon Mod Manager, Avalon Atlas — plus Wyrd Sight, Better Mounts, and Better Movement open them in a lightbox. Better UI ships rarity-color inventory + potion subcategory shots; AMM ships the Options→MODS list plus the native setting tooltip.

## Deploy — Cloudflare Pages (simplest)

1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect git.
3. Build command: `npm run build`
4. Output directory: `out`
5. Framework preset: Next.js (static) or None.

No `basePath` needed on a custom domain or `*.pages.dev`.

## Deploy — GitHub Pages (user or repo)

The workflow in `.github/workflows/pages.yml` builds the static export and publishes it.

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` (or run the workflow).
3. If this is a **project site** (`https://skythebro.github.io/<repo>/`), the workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo>`.
4. If this is a **user site** (`https://skythebro.github.io/` from a repo named `skythebro.github.io`), `basePath` stays empty.

Manual project-pages build:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

`public/.nojekyll` is copied into `out/` so GitHub does not ignore `_next`.

## Project pages vs custom domain

| Host | `NEXT_PUBLIC_BASE_PATH` |
| --- | --- |
| Cloudflare Pages / custom domain | unset |
| `username.github.io` | unset |
| `username.github.io/repo` | `/repo` |

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4 + shadcn/ui
- Framer Motion, Lucide
- Static HTML in `out/`
