# Deployment Readiness

## Why This Doc Exists

This document describes the deployment assumptions for the current build. It tells developers what is safe to deploy now and what still blocks a production launch.

## Deployment Target

Vercel is the default deployment target because the site is a Next.js App Router build with static routes and no backend dependency yet.

## Runtime Assumptions

- No environment variables are required for the current version.
- No API routes or server actions are required yet.
- The contact form is presentational until a backend or service is approved.

## Build Command

```bash
npm run build
```

## What The Build Should Produce

- `/`
- `/about`
- `/programs`
- `/impact`
- `/contact`

## Known Deployment Risks

- Contact details may still be placeholders.
- Impact metrics and stories may still be status-labeled.
- Rights-cleared imagery may still be incomplete.
- Form submission may not be wired to a backend.
- Claim safety still depends on the content model being followed.

## Before Deploying

- Confirm public contact routing.
- Confirm which placeholders can become public.
- Confirm privacy/consent language if forms are active.
- Run lint, typecheck, and build.
- Review the preview on mobile and desktop.

## After Deploying

- Verify all routes load.
- Verify navigation and mobile menu behavior.
- Verify placeholders are still visibly labeled.
- Verify there are no console errors.

## What Not To Do

- Do not treat deployment as proof approval.
- Do not publish live form handling without privacy and routing decisions.
