# Visual Polish Plan (Phase 1 of visual-excellence)

> Durable task list for the 2026-07-06 visual/UX polish pass. Captures the user's
> feedback verbatim-in-intent with diagnosed root causes so no nuance is lost.
> Sibling of [visual-excellence-strategy.md](visual-excellence-strategy.md); this is
> the concrete Phase-1 execution. Implement one by one; deploy; then mirror to Figma.

## Guardrails
- The homepage animated look is the master — enhance, don't regress it.
- `prefers-reduced-motion` is already globally honored (globals.css:29) — keep it that way;
  ambient/hover motion must degrade to static.
- Git→Vercel auto-deploy is now connected: pushing `main` deploys to prod.

## Tasks (with diagnosed root cause + fix)

### 1. Fill `[Placeholder: …]` content by inferring from planning docs  → SUB-AGENT
Locations: `content/site.ts` (officialContact email/phone/domain/location),
`content/impact.ts` (4× proofStats `value`, plannedScale title/description, 3× story titles),
`content/contact.ts:22` (Media/Sponsor desc), `content/programs.ts:8` (monthly guidance terms).
Page-level placeholders handled by main line: `app/about/page.tsx:52-53` (team),
`components/sections/ImageTextSection.tsx:16` (rights-cleared image caption).
Rule: infer from `planning/*` + brand; use `connect@wasabiai.org` / `wasabiai.org` (from footer);
DO NOT fabricate numbers/phone not grounded in docs — soften to honest phrasing instead.
Keep the VerificationBadge/proof-label system (intentional brand honesty).

### 2. Mobile nav: "Menu" text → animated burger icon
`components/layout/MobileNav.tsx:42-45` renders a `<button>Menu</button>`. Replace with a
hamburger icon (lucide `Menu`/`X`, we already depend on lucide-react) that toggles to an X
when open. Keep aria-expanded/controls, Escape handling, and the panel. Add aria-label.

### 3. Mobile hero first-section cutoff
`app/page.tsx:95` uses `min-h-[calc(100vh-73px)]`. Mobile `100vh` includes the retracting
URL bar → the hero overshoots the visible viewport and scrolls/clips awkwardly. Fix: use
`100svh`/`100dvh` and relax the forced full-height on small screens (min-height auto/greatly
reduced under `md`). Ensure `.demo-visual-stack` (min-height 620px) doesn't overflow on mobile.

### 4. "What Wasabi does" gradient: mouse-follow → ambient ebbing
`.demo-dark-band` (globals.css:265-273) reads `--mouse-x/--mouse-y` set by
`components/sections/MouseGradientSection.tsx` on pointermove → on mobile every tap snaps it.
Fix: remove the JS pointer coupling; animate the glow with a slow keyframe (drifting position
+ gentle opacity "ebb") so it stays alive but never reacts to input. Replace the
`MouseGradientSection` wrapper on the homepage with a plain `<section>`; delete the now-unused
component. Reduced-motion → static.

### 5. Custom scrollbars — kill native (user: "native scrollbars are never the play")
`.demo-image-rail` (globals.css:295-303) is `overflow-x:auto` → native bar, ugly on Windows,
worse when <4 cards. Fix: add a themed custom scrollbar (webkit `::-webkit-scrollbar*` +
Firefox `scrollbar-width/color`) on the rail (thin, rounded, wasabi/terracotta). Add a subtle
global custom scrollbar too. (React Bits-style; CSS-only is robust cross-browser, no JS.)

### 6. Section flow — remove harsh cutoffs; blend light↔dark
Hard edges: hero `border-b border-line` (page.tsx:92) between two light sections; and the
cream→forest hard edges around `.demo-dark-band` and `.demo-final-cta`. Fix: remove the hero
border; add gradient transition zones (top/bottom fades on dark bands blending to cream) so
panels melt into each other instead of reading as separate slides. Keep a whisper of a page
gradient for depth.

### 7. About (+ inner pages) depth
`app/about/page.tsx` is flat "paper" vs the homepage's gradients/glows/shadows. Fix: add an
ambient gradient + soft glows (reuse the hero gradient recipe) — ideally via the shared
`HeroSection`/a page-background utility so about, programs, impact, contact all gain depth.
Give plain `bg-white/45` cards the same shadow language as homepage cards.

### 8. "Time to animate" — consistent transitions, nothing instant
Root cause: `.demo-proof-card` is NOT in the transition rule (globals.css:251 gives transition
only to `.demo-story-card`), yet it IS in the hover rule (256-259) → proof cards snap
instantly. Fix: add `.demo-proof-card` (and audit ALL interactive elements) to have a
consistent `transition` (≈180-220ms, matching the existing easing). No instant state changes
anywhere (hover, toggle, focus).

### 9. Remove "Experimental branch" pill + dev-facing meta copy
`app/page.tsx:279-282` "Experimental branch" pill → delete. Replace dev-facing meta prose:
:104 "This experimental branch pushes the visual storytelling…", :273 "This branch is
intentionally more animated…", :276 CTA "Review the prototype" → real marketing copy.

### 10. Responsive QA + deploy
Test mobile (375) + awkward widths (500/700/900) + desktop; build/lint/typecheck green;
push `main` (auto-deploys). Hand interactive/visual confirm to Claude-in-Chrome.

### 11. Figma mirror (after deploy) → SUB-AGENT
Mirror the FINAL live site's actual elements into Figma file `tauCD0NcX2DAAq8eBbIKIJ`
(flat frames per page: home, about, programs, impact, contact).

---

## Progress log — 2026-07-06

**Tasks 1–10 DONE and deployed to production** (commit `82e23c0`, live at
wasabi-government-landing.vercel.app, HTTP 200 verified):
- Placeholders filled from planning docs (honest, no fabricated numbers); proof
  statuses promoted from "placeholder" → "needs verification"; footer trust note + CTA
  meta copy de-devified.
- Mobile nav → animated burger/X; hero uses `100svh` (cutoff fixed).
- `.demo-dark-band` mouse-follow → ambient drifting `demo-ebb` glow (`.demo-band-glow`);
  `MouseGradientSection` deleted.
- Global + rail custom scrollbars (webkit + firefox); no native bars.
- Section flow: removed hard borders; soft cream edge-fades on dark bands; fixed body
  gradient for depth.
- Inner-page depth via `.page-hero`, card shadows, gradient image panel.
- Consistent transitions: proof cards + nav/footer links; removed "Experimental branch"
  pill + dev meta copy.
- Verified responsively at 375/900/1440 + burger-open + wizard via headless Chromium.

**Task 11 (Figma mirror):** in progress — dispatched to sub-agent against file
`tauCD0NcX2DAAq8eBbIKIJ`.
