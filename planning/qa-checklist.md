# QA Checklist

## Visual QA

| Check | Status | Notes |
| --- | --- | --- |
| Layout consistency | Pass | Sections use consistent containers and spacing. |
| Spacing consistency | Pass | Phase 5 kept the existing spacing rhythm. |
| Typography consistency | Pass | Cormorant display and DM Sans body usage is consistent. |
| Color consistency | Pass | Forest, wasabi, cream, ink, and terracotta tokens are used consistently. |
| Button consistency | Pass | Primary CTA behavior is shared; contact placeholder button matches it. |
| Card consistency | Pass | Program, impact, story, and stat cards use restrained borders/radius. |
| Image treatment consistency | Pass | Transparent logo assets are used; no unapproved photos are shown. |
| No broken layouts | Pass | No overflow found during breakpoint checks. |

## Responsive QA

| Breakpoint | Status | Notes |
| --- | --- | --- |
| 375px | Pass | Mobile nav, stacked cards, form, and CTAs are usable. |
| 768px | Pass | Tablet layout remains readable with no overflow. |
| 1024px | Pass | Desktop grids work without overflow. |
| 1440px | Pass | Layout stays contained and readable. |

## Accessibility QA

| Check | Status | Notes |
| --- | --- | --- |
| Keyboard navigation | Pass | Skip link, nav, mobile menu, FAQ, CTAs, and form fields are reachable. |
| Focus states | Pass | Global focus ring is visible; skip link appears on focus. |
| Semantic structure | Pass | Header, nav, main, footer, sections, articles, and form are semantic. |
| Heading order | Pass | One H1 per page; section headings follow page flow. |
| Alt text | Pass | Logo images have descriptive alt text; no unapproved content images are used. |
| Color contrast | Pass | Text and CTA contrast are readable in browser checks. |
| Reduced motion | Pass | Global reduced-motion CSS is present. |
| Form labels | Pass | All form controls have visible labels. |
| Error messaging | Future work | Real error messaging requires a submission workflow. |

## Content QA

| Check | Status | Notes |
| --- | --- | --- |
| No unsupported claims | Pass | Sensitive proof remains placeholder/status-labeled. |
| Placeholders visible | Pass | Missing content is visibly labeled. |
| No fake metrics | Pass | Stat values remain `[Placeholder]`. |
| No fake testimonials | Pass | Stories remain placeholder-only. |
| No fake partners | Pass | No partner logos or unsupported partner claims are displayed. |
| Tone matches brand | Pass | Copy remains human, institutional, and build-first. |
| CTA language is clear | Pass | CTAs route to Programs or Contact without implying confirmed enrollment/partnership. |

## Technical QA

| Check | Status | Notes |
| --- | --- | --- |
| Lint passes | Pass | `npm run lint` passed. |
| Typecheck passes | Pass | `npm run typecheck` passed. |
| Build passes | Pass | `npm run build` passed. |
| No console errors | Pass | Browser error check reported none. |
| No broken internal links | Pass | All primary routes loaded successfully. |
| No missing assets | Pass | Logo assets render from `public/assets/`. |
| No dependency bloat | Pass | No new dependency was added in Phase 5. |
| No committed build artifacts | Pass | `.next/` and build artifacts remain ignored. |
