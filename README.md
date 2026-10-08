# Lalit Singh — Product Engineer Portfolio

> ## Status: 🟢 Completed
>
> <progress value="95" max="100"></progress>
> **Progress: 95%** — the full site works: 43/43 tests pass, typecheck is clean, the production build succeeds with 12 pages, and the production server returns 200 on the home and project pages. Remaining: a leftover template handle in the structured data and a few lint warnings.

<p align="center">
  <img src="docs/banner.webp" alt="Lalit Singh portfolio banner" width="100%" />
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

## What it is

A personal portfolio site for Lalit, a product engineer from India ([lalitsingh.me](https://lalitsingh.me)). Built with Next.js 16: a home page (intro, experience, awards, stack, vault, hobbies, clients) and per-project case-study pages generated from content constants (`/projects/[slug]`), plus a component showcase section (analog stick, card hover, liquid-glass blob, paper shred, polaroid stack, theme toggle, timezone, video loop, …) served through a small API route. Content lives in `constants/`, styling is Tailwind CSS 4 with Motion animations.

## What works (verified)

- ✅ `npm install` — 471 packages install cleanly
- ✅ `npx vitest run` — 13 test files, 43 tests, all pass (verified 2026-10-08)
- ✅ `npm run typecheck` (`tsc --noEmit`) — clean, no errors
- ✅ `npm run lint` (oxlint) — 0 errors, 7 warnings (all `<img>`-vs-`next/image` hints)
- ✅ `npm run build` — succeeds; 12 pages generated: `/`, `/projects/[slug]` × 6, `/api/showcase-prompts/[promptId]`, `robots.txt`, `sitemap.xml`
- ✅ `npm start` — production server returns HTTP 200 on `/` and `/projects/scorecast`

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, tw-animate-css |
| UI | Base UI, shadcn, Hugeicons, Motion |
| State/data | Content constants in `constants/`, luxon, sonner |
| Analytics | Vercel Analytics |
| Quality | Vitest + Testing Library, oxlint, Prettier |

## How to run

All commands below were tested (Node v24).

```bash
npm install
npm run build
npm start        # production build on http://localhost:3000
```

Other useful scripts (present in `package.json`):

```bash
npm run dev      # local dev server
npm test         # vitest run (43 tests)
npm run check    # lint + typecheck + test
```

## Screenshots

Existing screenshot in the repo:

![Home page](docs/screenshots/home.png)

## What you can add more

- [ ] Fix structured-data leftovers — `app/page.tsx`'s schema.org block still references "diip3sh" social handles instead of Lalit's
- [ ] Address the 7 oxlint warnings — switch raw `<img>` elements to `next/image`
- [ ] Add CI — no GitHub Actions runs exist for this repo; add a workflow running `npm run check` (lint + typecheck + test) on push

## Project structure

```
app/                 Next.js routes: page.tsx, projects/[slug], api/showcase-prompts/[promptId],
                     layout.tsx, not-found.tsx, robots.ts, sitemap.ts, globals.css
components/          home/ (intro, experience, awards, stack, vault, hobbies, clients)
                     portfolio/ (project cards, galleries, navigation)
                     project/    (case-study page sections)
                     showcase/   (analog stick, liquid-glass blob, paper shred, polaroid, …)
                     ui/ motion-primitives/ svgs/ theme-provider.tsx wheel-picker.tsx
constants/           content data: home/, portfolio/, projects/
lib/                 seo.ts, utils
hooks/               shared React hooks
public/              images, fonts, videos, og-image.png, grid backgrounds
sounds/              click-soft.ts
docs/                home.md, projects.md, 404.md, screenshots/ (+ banner)
```

---
*README written after code audit on 2026-10-08.*
