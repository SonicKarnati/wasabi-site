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

`components/ui/` contains only the site's own hand-rolled components
(CTAButton, SectionHeader, VerificationBadge, ProgramCard, ImpactCard,
FAQAccordion, QuoteBlock, StatBlock, StoryCard). No registry components are
currently installed.

A previous batch of 10 pre-installed registry components (agent-bento-grid,
testimonials-card, spotlight-navbar, faq-accordion, kinetic-text-loader,
line-hover-link, perspective-grid, social-flip-button, skiper19, skiper30)
was removed 2026-07-08: none were imported anywhere, and none fit the
content strategy — the site publishes no testimonials or partner logos
(trust rules in `planning/site-strategy.md`), has no loading states, no
social links, and already has a settled burger-nav pattern.

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
