# Deployment Readiness

## 1. Deployment Target Recommendation

Recommended target: Vercel.

This is a Next.js App Router site with static routes and no backend dependency, so Vercel is the lowest-friction deployment target.

## 2. Environment Variables Needed

No environment variables are currently required.

Future form submission, analytics, CMS, or email service work may introduce environment variables.

## 3. Build Command

```bash
npm run build
```

## 4. Output Behavior

`next build` generates static routes for:

- `/`
- `/about`
- `/programs`
- `/impact`
- `/contact`

The site currently has no API routes, server actions, database, authentication, or backend runtime dependency.

## 5. Known Deployment Risks

- Contact form is presentational only and will not submit anywhere.
- Contact details are placeholders.
- Impact metrics, testimonials, team/advisor details, and partner-sensitive claims are placeholders or status-labeled.
- Final privacy/consent language is missing.
- Final rights-cleared imagery beyond the logo is missing.
- Dependency audit items previously reported by npm should be reviewed before final production launch.

## 6. Pre-Deployment Checklist

- [ ] Confirm public domain and official contact details.
- [ ] Replace or approve all high-priority placeholders.
- [ ] Confirm privacy/consent language before enabling form submission.
- [ ] Review all partner-sensitive references.
- [ ] Confirm image rights for any additional visual assets.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Review the deployment preview on mobile and desktop.

## 7. Post-Deployment Checklist

- [ ] Verify all five public routes load.
- [ ] Verify header/footer navigation.
- [ ] Verify mobile navigation.
- [ ] Verify no placeholders are unintentionally published as final content.
- [ ] Verify contact form behavior or clearly disable submission until backend is connected.
- [ ] Verify metadata and social preview after final assets are approved.
- [ ] Check browser console for deployment-only errors.

## 8. Review Before Sharing Live URL

Before sharing a live URL with mentors, clients, government visitors, institutional partners, or international visitors, review:

- Homepage first viewport and CTA clarity.
- Programs page wording and status labels.
- Impact page placeholders and projected/verified separation.
- Contact page placeholders and form limitations.
- Mobile layout at 375px.
- Any remaining visible placeholder language.

## 9. Deployment Status

Not deployed by this phase.
