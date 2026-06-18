# Component Plan

## Why This Doc Exists

This document explains the shared UI system in terms of product behavior, not just component names. It tells developers what each component is for, what it must preserve, and what it must never imply.

## Shared Rules

- Use shared components to keep the site consistent.
- Keep CTA, verification, and content-status behavior centralized.
- Avoid introducing new component patterns when an existing one already fits.
- Keep the UI restrained and readable before decorative.

## SiteHeader

- Why: persistent orientation and trust.
- How: logo, nav, and one primary CTA only.
- Do not: add extra top-level CTAs or visual clutter.

## SiteFooter

- Why: close the page with navigation, contact, and trust notes.
- How: keep it simple and readable on the dark forest background.
- Do not: add promotional content or unsupported claims.

## HeroSection

- Why: establish the page purpose and primary action.
- How: one H1, short intro, optional secondary action, optional proof note.
- Do not: place unverified metrics in the hero.

## SectionHeader

- Why: create a reusable hierarchy pattern across the site.
- How: eyebrow, heading, description, optional dark variant.
- Do not: let descriptions sprawl or become copy blocks.

## CTAButton

- Why: make the call to action obvious and consistent.
- How: primary green, secondary outline, or text link variants only.
- Do not: allow unreadable hover states or multiple unrelated CTA styles.

## TrustStrip And StatBlock

- Why: surface proof while keeping claim status explicit.
- How: show label, value, and visible status text together.
- Do not: communicate status by color alone.

## ProgramCard

- Why: summarize one program or program category quickly.
- How: show title, audience, format, outputs, source, and status.
- Do not: mix verified and unverified claims in the same visual hierarchy.
- Important: the status chip should always sit under the title so long titles do not shift its position.

## ImpactCard

- Why: distinguish verified proof, outputs, and projected scale.
- How: pair a status badge with a clear title and supporting copy.
- Do not: let a projected metric read like achieved impact.

## StoryCard

- Why: preview human proof safely.
- How: keep stories placeholder-first until consent and rights are approved.
- Do not: use unapproved testimonials or photos.

## ImageTextSection

- Why: pair visual evidence with explanatory copy.
- How: use only rights-cleared images or explicit placeholders.
- Do not: use unapproved human imagery.

## QuoteBlock

- Why: emphasize approved brand beliefs or approved quotes.
- How: keep quote and attribution explicit.
- Do not: turn belief copy into third-party endorsement.

## FAQAccordion

- Why: answer common questions without adding long page sections.
- How: keep each answer short and review-safe.
- Do not: hide important content behind motion or complex interaction.

## ContactCTA

- Why: turn page momentum into a safe next step.
- How: keep the ask clear and low-friction.
- Do not: imply a confirmed partnership or enrollment.

## MobileNav

- Why: preserve navigation on small screens.
- How: keep open/close behavior keyboard accessible.
- Do not: introduce complicated nested navigation in version 1.

## VerificationBadge

- Why: make proof status readable everywhere it appears.
- How: use explicit text labels for verified, projected, placeholder, approved, or needs-verification states.
- Do not: let color become the only signal.
