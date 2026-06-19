# Production Deployment Plan

## 1. Did Preview Deployment Pass?

Partially.

The preview deployment built successfully and all routes returned HTTP `200` through authenticated Vercel access. However, normal public browser access is blocked by Vercel Authentication, so final visual browser QA should be done by an authenticated reviewer before production.

## 2. Known Issues

- Production deployment has not been approved by the user.
- Preview URL is protected by Vercel Authentication.
- Official contact details remain placeholders.
- Contact form is presentational and does not submit to a backend.
- Verified impact metrics remain placeholders.
- Team/advisor information remains placeholder content.
- Some source-derived visuals remain prototype/source material rather than rights-cleared final imagery.
- npm audit reports 2 moderate vulnerabilities.
- npm reports pending install-script approvals for `sharp` and `unrs-resolver`.

## 3. Placeholders Remaining

Known visible placeholders remain for:

- Official email.
- Official phone number.
- Official primary domain.
- Verified impact metrics.
- Partner proof.
- Student/community story.
- Team/founder/advisor details.
- Response timeline and privacy/consent note.

## 4. Mentor / Client Approval Needed

Yes. Mentor/client review is needed before production deployment.

## 5. Is Production Deployment Recommended Now?

No.

Production deployment is not recommended until:

- The user explicitly approves production deployment.
- A reviewer confirms the protected preview in a browser.
- The team decides whether visible placeholders are acceptable for production.
- Official contact/domain/form decisions are resolved or intentionally deferred.

## 6. Production Deployment Command

When approved:

```bash
npx vercel deploy --prod
```

or, if the global CLI is installed:

```bash
vercel deploy --prod
```

## 7. Rollback Plan

Do not delete deployments.

Rollback options:

1. Use the Vercel dashboard to promote a previous working production deployment.
2. Use `vercel rollback` if an immediate production rollback is needed.
3. Revert the problematic commit in Git and redeploy.
4. Push a fix branch and create a new preview deployment before promoting.
5. Keep this preview URL available for comparison.

## 8. Post-Deployment Checklist

After production deployment, verify:

- `/`
- `/about`
- `/programs`
- `/impact`
- `/contact`
- HTTPS works.
- Header/footer navigation works.
- Mobile menu works.
- Images load.
- Contact path works.
- Metadata appears reasonable.
- Placeholder content is intentionally accepted or replaced.
- No obvious console errors.
- Production domain status is documented.
