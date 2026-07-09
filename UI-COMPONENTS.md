# UI Components

Shared reference for UI component sourcing in this repo. Both Claude Code and
Open Code should reference this file when working with components.

## Setup

- **Framework**: Next.js 16 (App Router), React 19, Tailwind CSS 4
- **Registry access**: shadcn CLI with two external registries, configured in
  `components.json` (`@vengeanceui`, `@skiper-ui`)

```bash
# Vengeance UI
npx shadcn@latest add https://www.vengenceui.com/r/<component-name>.json

# Skiper UI
npx shadcn@latest add @skiper-ui/skiper<number>
```

The `shadcn` CLI runs via `npx` — it is not (and should not be) a runtime
dependency in `package.json`.

## Current state (2026-07-08)

`components/ui/` contains the site's hand-rolled primitives
(CTAButton, SectionHeader, VerificationBadge, ProgramCard, ImpactCard,
FAQAccordion, QuoteBlock, StatBlock, StoryCard) plus adapted registry
components that are now used on live pages.

Installed and adapted 2026-07-08:

- `@skiper-ui/skiper19` -> `components/ui/skiper-ui/skiper19.tsx`
  Used on `/about` as a Wasabi capability-path scroll drawing section.
- `@skiper-ui/skiper30` -> `components/ui/skiper-ui/skiper30.tsx`
  Used on `/programs` as a source-material parallax rail.
- `agent-bento-grid`
  Reworked as a Wasabi capability-system grid on the homepage.
- `testimonials-card`
  Reused as a source-visual carousel, not as testimonials.
- `spotlight-navbar`
  Used in the desktop header via `components/layout/SiteSpotlightNav.tsx`.
- `faq-accordion`
  Used on `/contact` with review-safe FAQ content.
- `kinetic-text-loader`
  Used as motion text in the homepage final CTA.
- `line-hover-link`
  Used for footer navigation links.
- `perspective-grid`
  Used as a subtle homepage hero background layer.
- `social-flip-button`
  Used on `/contact` for official contact/inquiry paths.

The registry files were intentionally restyled to match the Wasabi palette
and content rules. Do not overwrite them with a fresh registry install unless
you are prepared to reapply the local adaptations.

## Policy: when a registry component earns a place

Install a registry component only when all of these hold:

1. A live page section needs it now — no speculative installs.
2. It fits the trust strategy (no testimonial/logo/count-up patterns until
   claims are verified).
3. It can be themed to the site palette (cream/forest/wasabi/terracotta)
   without fighting its own defaults.
4. It doesn't pull in a dependency the repo doesn't already use, unless that
   dependency is justified on its own.

After installing, re-check `package.json` for what the component added and
document the install here.

## Motion dependencies in use

- `framer-motion` — section-level entrances and interactive motion
- `animejs` — scoped to `components/sections/NetworkHero.tsx` (SVG network
  choreography); approved exception, see CLAUDE.md
