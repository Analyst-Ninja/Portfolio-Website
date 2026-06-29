# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build

There is no test, lint, or typecheck setup in this project (`devDependencies` is empty, no ESLint/TS config).

## Architecture

Single-page Next.js 15 portfolio site (App Router, React 19, plain JavaScript/JSX — no TypeScript).

The entire site is **data-driven from one file**. To change site content (projects, experience, stack, metrics, contact links), edit `src/data/portfolioData.js` — do not hardcode content into components. It exports named constants (`profile`, `highlights`, `metrics`, `experience`, `totalExperience`, `stackGroups`, `projects`, `signals`, `consolePreview`) that `app/page.jsx` imports and renders.

Layout:
- `app/layout.jsx` — root layout + page `metadata`; imports `app/globals.css`.
- `app/page.jsx` — the whole page, a `"use client"` component. Holds the only client state: dark/light theme persisted to `localStorage` and applied via `document.documentElement.dataset.theme`. All sections (`#home`, `#about`, `#projects`, `#stack`, `#contact`) live here.
- `src/components/` — presentational components only: `ProjectCard` (renders one `projects[]` entry; uses `project.accent` to build CSS class modifiers `project-card--<accent>` / `status-pill--<accent>`) and `SectionTitle` (eyebrow/title/body header).

Styling is global CSS, not modules. `app/globals.css` is a one-line file that `@import`s **`src/styles.css`** — that imported file holds all the real styles (variables, layout, components, and the `@media (max-width: 1080px)` / `720px` responsive rules). Edit `src/styles.css` for any styling change. Theming works through `[data-theme]` on `<html>` plus BEM-ish class names (e.g. `project-card__top`, `status-pill--<accent>`). When adding a project accent or status, the matching CSS class must exist in `src/styles.css`.

Static assets (resume PDF, profile photo) live in `public/assets/` and are referenced by root-absolute paths in `portfolioData.js` (e.g. `/assets/...`).

## Notes / gotchas

- `dist/` is a stale artifact from a previous (Vite) build of this site and is gitignored. (Note: `src/styles.css` is NOT stale — it is the active stylesheet, imported via `app/globals.css`.)
- `.gitignore` covers `node_modules` and `dist` but **not** `.next/` — the build cache is currently tracked in git. Avoid committing `.next/` changes.
- Two different emails appear: `profile.email` in `portfolioData.js` is the public contact (`r.kumar01@hotmail.com`); the git/account email differs.
