# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build

There is no test, lint, or typecheck setup in this project (no ESLint/TS config). Runtime dep: `framer-motion` (animations).

## Architecture

Single-page Next.js 15 portfolio site (App Router, React 19, plain JavaScript/JSX — no TypeScript). Visual theme is "Living Pipeline": dark-default (with light toggle), refined cyan accent, big editorial type, and an animated data-flow hero.

The entire site is **data-driven from one file**. To change site content (projects, experience, stack, metrics, contact links), edit `src/data/portfolioData.js` — do not hardcode content into components. It exports named constants (`profile`, `highlights`, `metrics`, `experience`, `totalExperience`, `stackGroups`, `projects`, `signals`, `consolePreview`) that the section components import.

Structure:
- `app/layout.jsx` — root layout, `metadata`, and fonts via `next/font/google` (Space Grotesk = `--font-display`, Inter = `--font-body`, JetBrains Mono = `--font-mono`). Contains a small pre-paint inline script that reads `localStorage.theme` and sets `<html data-theme>` to avoid a theme flash.
- `app/page.jsx` — thin **server** component composing the section components in `src/components/`.
- `src/components/` — one component per section: `Nav`, `Hero`, `PipelineFlow` (the animated SVG signature), `Projects`/`ProjectCard`, `StackSection`, `About`, `Timeline`, `Contact`, plus `SectionTitle` and `Reveal` helpers. Only the pieces that need the browser are `"use client"`: `ThemeToggle`, `PipelineFlow`, `Reveal` (all framer-motion / state). Everything else is a server component.
- Theme: `ThemeToggle.jsx` owns the toggle (writes `localStorage.theme` + `<html data-theme>`); the pre-paint script in `layout.jsx` sets the initial value. Motion is gated on `prefers-reduced-motion` via framer-motion's `useReducedMotion` plus a CSS `* { animation: none }` fallback.

Styling is global CSS, not modules. `app/globals.css` is a one-line file that `@import`s **`src/styles.css`** — that imported file holds everything: the `:root` / `[data-theme="dark"|"light"]` token system (colors, `--shadow`), base styles, and all section styles, organized top-down with responsive `@media (max-width: 900px|640px)` blocks at the end. Edit `src/styles.css` for any styling change. Per-project accent colors are driven by `.project-card[data-accent="..."] { --card: <hsl triplet> }` and consumed as `hsl(var(--card))` — add a new entry here when adding a project `accent`.

Static assets (resume PDF, profile photo) live in `public/assets/` and are referenced by root-absolute paths in `portfolioData.js` (e.g. `/assets/...`).

## Notes / gotchas

- `dist/` is a stale artifact from a previous (Vite) build of this site and is gitignored. (Note: `src/styles.css` is NOT stale — it is the active stylesheet, imported via `app/globals.css`.)
- `.gitignore` covers `node_modules`, `dist`, `.next`, and `.DS_Store`. `.next/` was previously tracked; it has been untracked.
- Two different emails appear: `profile.email` in `portfolioData.js` is the public contact (`r.kumar01@hotmail.com`); the git/account email differs.
- There are two `package-lock.json` files (this repo + `~/`), so `next dev` prints a harmless "inferred workspace root" warning.
