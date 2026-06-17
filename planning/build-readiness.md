# Build Readiness

## 1. Is the Project Ready for Implementation?

Not fully. The project is ready for Phase 4 implementation planning or a prototype plan, but not yet ready for a production website build.

## 2. Decisions Still Missing

- Official domain, email, and public contact routing.
- Which programs appear in version 1.
- Which CTAs are primary: partnership, enrollment, contact, or mixed.
- Which metrics are verified and approved.
- Which partner/advisor/story assets are approved.
- Production-ready logo assets.
- Rights-cleared photography.
- Privacy, consent, safeguarding, and accessibility text.

## 3. Content Needed Before Build

- Final homepage copy.
- Program status for each listed initiative.
- Verified proof inventory.
- Approved contact information.
- Approved stories/testimonials or decision to launch without them.
- Approved partner/advisor list or decision to omit.
- FAQ content by audience.

## 4. Visual Decisions Requiring Mentor Approval

- Whether the main site should lean more institutional or student-friendly.
- How much campaign visual language should appear inside program cards.
- Whether to use real photos, line illustrations, or both in version 1.
- Whether KASC / Adda247 / Manus / Startup campaign visuals should appear at all.
- Final treatment for placeholders and proof-status badges.

## 5. What Can Safely Be Implemented in Phase 4

- Static site structure.
- Header/footer/navigation.
- Page templates for five pages.
- Placeholder-safe program cards.
- Contact page structure without live backend.
- Accessibility-focused typography, spacing, and color tokens.
- Review-only proof/status components.

## 6. Recommended Tech Stack for Phase 4

If Phase 4 begins implementation, a conservative stack would be:

- Next.js App Router.
- TypeScript.
- CSS modules or Tailwind after visual approval.
- Static Markdown/JSON content models first.
- No CMS until content ownership is clear.
- No animation library unless a specific interaction need emerges.

This is a recommendation, not a Phase 3 implementation decision.

## 7. Suggested Phase 4 Build Order

1. Confirm final content and contact decisions.
2. Create static app scaffold.
3. Add design tokens and typography.
4. Build header/footer and page shell.
5. Build core components: HeroSection, SectionHeader, CTAButton, ProgramCard, StatBlock, ContactCTA.
6. Build pages with placeholders.
7. Add accessibility checks.
8. Add contact form only after privacy/routing decisions.
9. Replace placeholders with approved proof.
10. Run mentor review before launch polish.
