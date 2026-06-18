# QA Checklist

## Why This Doc Exists

This document defines the minimum checks required before merge or release. It is the final guardrail for readability, accessibility, claim safety, and basic technical correctness.

## Visual QA

- Layout should feel consistent across pages.
- Spacing and typography should stay aligned with the established system.
- Buttons should remain readable in default and hover states.
- Cards should keep a restrained border/radius language.
- Logo assets should not introduce visible white boxes.

## Responsive QA

- Check mobile, tablet, desktop, and wide desktop widths.
- Confirm no horizontal overflow.
- Confirm nav, CTAs, and cards remain usable on small screens.

## Accessibility QA

- One H1 per page.
- Keyboard access for nav, menus, CTAs, accordions, and form fields.
- Visible focus states.
- Semantic landmarks and form labels.
- Reduced-motion support.
- Color contrast that remains readable.

## Content QA

- No unsupported claims.
- Placeholders remain visibly labeled.
- No fake metrics, testimonials, or partner claims.
- CTA language should match the actual user action.

## Technical QA

- Lint passes.
- Typecheck passes.
- Build passes.
- No obvious console errors.
- No broken internal links.
- No committed build artifacts.

## Acceptance Rule

Do not merge if any public-facing content implies stronger proof than the source supports.
