# Deployment Checklist

## 1. Local Project Inspection

Working directory:

`/Users/smbp/projects/wasabi-ai`

Project type:

Next.js App Router application.

Detected files/directories:

- `package.json`
- `package-lock.json`
- `next.config.ts`
- `app/`
- `components/`
- `content/`
- `public/`
- `styles/`

No `vercel.json` file is present.

## 2. Package Scripts

From `package.json`:

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint .`
- `typecheck`: `tsc --noEmit`

No script changes were required.

## 3. Environment Variables

No application environment variable usage was found.

No `.env`, `.env.local`, `.env.production`, or `.env.development` files were found at the repo root.

`.gitignore` already includes:

- `.env`
- `.env.*`
- `!.env.example`
- `.vercel/`
- `.next/`
- `node_modules`

## 4. Dependency Install

Command:

```bash
npm install
```

Result:

PASS.

Notes:

- Dependency tree was already up to date.
- `npm audit` reports 2 moderate vulnerabilities.
- npm reported pending install-script approvals for `sharp` and `unrs-resolver`.

## 5. Local Validation

| Command | Result | Notes |
| --- | --- | --- |
| `npm run lint` | PASS | ESLint completed successfully. |
| `npm run typecheck` | PASS | `tsc --noEmit` completed successfully. |
| `npm run build` | PASS | Next.js 16.2.9 build completed successfully. |

Build output routes:

- `/`
- `/_not-found`
- `/about`
- `/contact`
- `/impact`
- `/programs`

## 6. Deployment Decision

Preview deployment is allowed.

Production deployment is not approved in this phase and remains pending review.
