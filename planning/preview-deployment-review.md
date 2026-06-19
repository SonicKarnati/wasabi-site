# Preview Deployment Review

## 1. Preview Deployment URL

`https://wasabi-government-landing-bul1ulj5a-sonickarnatis-projects.vercel.app`

Inspector URL:

`https://vercel.com/sonickarnatis-projects/wasabi-government-landing/2tVdg2DeDRkkcWSWxwT2VtssArJF`

Deployment ID:

`dpl_2tVdg2DeDRkkcWSWxwT2VtssArJF`

## 2. Deployment Command Used

```bash
npx vercel deploy --yes
```

## 3. Build Status

Vercel status:

READY.

Vercel target:

Preview.

Remote build result:

PASS.

Routes generated:

- `/`
- `/_not-found`
- `/about`
- `/contact`
- `/impact`
- `/programs`

## 4. Warnings

- Preview deployment is protected by Vercel Authentication.
- Normal unauthenticated HTTP requests return `401 Authentication Required`.
- Authenticated `npx vercel curl` can access the preview.
- Browser QA with a normal unauthenticated URL is blocked unless the reviewer signs in or a protection bypass is configured.
- npm reports 2 moderate audit findings.
- npm reports pending install-script approvals for `sharp` and `unrs-resolver`.

## 5. Errors

No build or deployment errors.

## 6. Vercel Project Name

`wasabi-government-landing`

## 7. Environment Variables Required

No environment variables are required for the current app.

## 8. Preview Route QA

Authenticated route checks used `npx vercel curl`.

| Route | Status | Notes |
| --- | ---: | --- |
| `/` | 200 | Home rendered with header, footer, `main-content`, one H1, nav links, source visuals, and visible proof labels. |
| `/about` | 200 | About rendered with header, footer, `main-content`, one H1, placeholder team/advisor content visible. |
| `/programs` | 200 | Programs rendered with header, footer, `main-content`, one H1, verification/status labels visible. |
| `/impact` | 200 | Impact rendered with header, footer, `main-content`, one H1, placeholder metrics and story labels visible. |
| `/contact` | 200 | Contact rendered with header, footer, `main-content`, one H1, labeled form fields, required fields, and visible privacy/response placeholder. |

## 9. Asset QA

Authenticated asset checks used `npx vercel curl`.

| Asset | Status | Notes |
| --- | ---: | --- |
| Logo image through Next image optimizer | 200 | Returned `image/png`. |
| AI Learner extracted cover through Next image optimizer | 200 | Returned `image/png`. |

## 10. Accessibility Quick Pass

Confirmed from deployed markup:

- Skip link exists.
- `main` has `id="main-content"`.
- Each checked route has one H1.
- Header and footer landmarks render.
- Primary nav links render.
- Mobile menu button renders with `aria-expanded` and `aria-controls`.
- Contact form has labels, required fields, `aria-label`, and `aria-describedby`.

Not fully verified on preview due Vercel Authentication blocking normal browser access:

- Visual responsive layout at 375px, 768px, 1024px, and 1440px.
- Keyboard tab order in an actual browser session.
- Mobile menu open/close behavior on the protected preview URL.
- Console error status in a normal browser session.

## 11. Preview Ready For Review?

Yes, with an important access note: reviewers must be able to pass Vercel Authentication or use a configured deployment-protection bypass.
