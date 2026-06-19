# Wasabi AI Website

This repository contains the Wasabi AI public website, its source-backed content model, and the product rules that keep the site credible, accessible, and review-safe.

## What Lives Here

- `app/` Next.js routes and root layout
- `components/` shared layout, section, and UI components
- `content/` typed content that powers pages and status labels
- `styles/` global CSS and design tokens
- `public/assets/` web assets used at runtime
- `assets/` source documents and raw/processed evidence assets
- `docs/` extracted source material and analysis
- `wireframes/` low-fidelity page structure
- `planning/` strategy, rules, readiness, QA, and owner-facing phase reviews

## How The Repo Is Organized

Use the docs in `planning/` as the durable product ruleset:

- `planning/site-strategy.md` explains what the site must accomplish and why the page set exists.
- `planning/page-plan.md` explains why each page exists and what belongs on it.
- `planning/component-plan.md` explains how the shared UI should behave.
- `planning/content-model.md` explains what content can be published and how claim statuses work.
- `planning/accessibility-and-trust.md` explains the accessibility and credibility rules the site must keep.
- `planning/build-readiness.md` explains what is safe to build now and what must wait.
- `planning/deployment-readiness.md` explains the deployment assumptions.
- `planning/qa-checklist.md` explains how to verify the site before merge or release.

The `planning/phase*.md` files are owner-facing history and decision records. They explain how the project got here, but they are not the developer-facing source of truth for implementation.

## Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

This project is deployed on Vercel.

### Local validation

```bash
npm run lint
npm run typecheck
npm run build
```

### Preview deployment

```bash
npx vercel deploy
```

### Production deployment

```bash
npx vercel deploy --prod
```

Production deployment should only happen after preview QA passes and the owner approves production release.

## Rules To Preserve

- Do not publish unsupported claims.
- Keep placeholders visible until they are verified and approved.
- Keep verification status explicit in UI and content.
- Keep accessibility and readable contrast intact on mobile and desktop.
- Keep source material separate from final public copy.

## Lockfile Policy

This is an npm project. Commit `package-lock.json` so dependency versions stay reproducible across local development, PRs, and deployment.
