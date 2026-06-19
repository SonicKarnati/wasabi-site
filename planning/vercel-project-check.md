# Vercel Project Check

## 1. CLI Capability

Global `vercel` command was not installed.

`npx vercel --version` result:

`Vercel CLI 54.14.2`

`npx vercel whoami` result:

`sonickarnati`

## 2. Vercel Account / Team

Account/team used:

`sonickarnati's projects`

CLI scope:

`sonickarnatis-projects`

Only one Vercel team/account was listed.

## 3. Existing Project Check

Existing projects were inspected before linking. Relevant existing project:

`wasabi-government-landing`

The project was created previously and has a matching Next.js configuration:

- Framework preset: Next.js
- Root directory: `.`
- Node.js version: `24.x`
- Build command: `npm run build` or `next build`
- Output directory: Next.js default
- Install command: Vercel default package-manager install command

## 4. Link Status

The repo was not linked at the start of Phase 7 because `.vercel/` did not exist.

Linked with:

```bash
npx vercel link --yes --project wasabi-government-landing --scope sonickarnatis-projects
```

Local `.vercel/project.json` now exists and contains:

- Project ID: present
- Org/team ID: present

Raw IDs are not repeated in this document.

## 5. Environment Variables

`npx vercel env ls` result:

No environment variables found for `sonickarnatis-projects/wasabi-government-landing`.

Local source search found no `process.env`, `NEXT_PUBLIC_`, or `VERCEL_` application usage outside ignored/generated directories.

## 6. Deployment Protection

The preview URL is protected by Vercel Authentication. Normal unauthenticated `curl` requests return `401 Authentication Required`.

Authenticated `npx vercel curl` works and returns the deployed site with HTTP `200`.

## 7. Production Readiness

Project configuration is suitable for preview deployment. Production deployment remains pending user approval and content/domain review.
