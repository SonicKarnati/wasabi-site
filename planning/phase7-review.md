# Phase 7 Review

## 1. Branch Name

`phase/7-vercel-deployment`

## 2. Commit Hash

Phase 7 started from:

`aff9739`

The final Phase 7 documentation commit will be visible in the pull request history.

## 3. Vercel CLI Version

Global `vercel` command was not installed.

`npx vercel --version`:

`54.14.2`

## 4. Vercel Account / Team Used

- Account: `sonickarnati`
- Team/scope: `sonickarnatis-projects`

## 5. Project Name

`wasabi-government-landing`

## 6. Was Project Already Linked?

No. `.vercel/` was absent at the start of Phase 7.

The repo was linked to the existing Vercel project:

```bash
npx vercel link --yes --project wasabi-government-landing --scope sonickarnatis-projects
```

`.vercel/` is ignored and was not committed.

## 7. Environment Variables Required

No.

No application env-var usage was found, and Vercel currently has no env vars configured for the project.

## 8. Validation Commands And Results

| Command | Result |
| --- | --- |
| `npm install` | PASS |
| `npm run lint` | PASS |
| `npm run typecheck` | PASS |
| `npm run build` | PASS |

Notes:

- `npm audit` reports 2 moderate vulnerabilities.
- npm reports pending install-script approvals for `sharp` and `unrs-resolver`.

## 9. Preview Deployment URL

`https://wasabi-government-landing-bul1ulj5a-sonickarnatis-projects.vercel.app`

Inspector:

`https://vercel.com/sonickarnatis-projects/wasabi-government-landing/2tVdg2DeDRkkcWSWxwT2VtssArJF`

Deployment ID:

`dpl_2tVdg2DeDRkkcWSWxwT2VtssArJF`

## 10. Preview QA Results

Authenticated route checks passed for:

- `/`
- `/about`
- `/programs`
- `/impact`
- `/contact`

Confirmed:

- Routes return HTTP `200` through `npx vercel curl`.
- Header, footer, main landmark, and primary nav render in deployed markup.
- Each checked route has one H1.
- Placeholders and proof-status labels remain visible.
- Contact form labels, required fields, and descriptive note render.
- Logo and extracted AI Learner cover image load through the Next image optimizer.

Limitation:

- Vercel Authentication protects the preview. Normal unauthenticated browser access returns `401`, so browser-based responsive QA requires an authenticated reviewer or deployment-protection bypass.

## 11. Production Deployment Status

Not deployed.

Production deployment is pending user approval and final preview review.

## 12. Production URL

Existing latest production URL shown by Vercel:

`https://wasabi-government-landing.vercel.app`

This Phase 7 pass did not deploy or promote production.

## 13. Domain Status

No custom domain was configured in this phase.

Current Vercel production domain:

`wasabi-government-landing.vercel.app`

Official custom domain remains an open decision.

## 14. Known Issues

- Preview is protected by Vercel Authentication.
- Visible placeholders remain.
- Contact form is presentational only.
- Official contact/domain/privacy decisions are still pending.
- Production deployment is not approved.
- Browser-based responsive QA on the preview was limited by deployment protection.
- npm audit reports 2 moderate vulnerabilities.

## 15. Rollback Notes

Do not delete deployments.

Rollback options:

1. Promote a previous working deployment in the Vercel dashboard.
2. Use `vercel rollback` if production is deployed and needs immediate rollback.
3. Revert the problematic Git commit and redeploy.
4. Push a fix branch, create a new preview, and compare against the previous preview URL.

## 16. What To Review First

1. Preview URL access and Vercel Authentication settings.
2. Homepage visual behavior.
3. Contact page and visible placeholders.
4. `planning/preview-deployment-review.md`.
5. `planning/production-deployment-plan.md`.

## 17. Recommended Next Step

Review the protected preview in a browser. If approved, decide whether to keep protection, replace/accept placeholders, configure the official domain/contact path, and then run:

```bash
npx vercel deploy --prod
```
