# Visual Excellence Strategy — Reaching "Manus-level" Beauty on the Wasabi Site

Status: planning / recommendation only. This document does **not** authorize code
changes. It exists to (1) name concretely what makes generator-grade sites feel
premium, (2) diagnose why the Remotion-in-page attempt failed and draw the line
between pre-rendered video and live DOM/WebGL, (3) recommend the actual stack for
this repo (Next.js 16 App Router, React 19, Tailwind v4, TS), (4) give a phased
plan grounded in the files that exist today, and (5) preserve the durable creative
intent from the now-deleted `design-x` prototype.

Scope note: unlike `design-x`, the target of this work is the **live marketing
site** (`app/page.tsx` and shared `components/`). The `design-x` boundary rule in
`CLAUDE.md` applied to the experimental route; this document is about bringing the
*lessons* of that experiment into production, carefully.

---

## 0. TL;DR — the recommended stack

| Need | Tool | Package (React 19 / Next 16 compatible line) | Where it runs |
|---|---|---|---|
| Scroll-triggered reveals, stagger, spring hovers, layout transitions | **Motion (formerly Framer Motion)** | `motion@^12` → `import { motion } from "motion/react"` | Client components (`"use client"`) |
| Scroll choreography: pin, scrub, timeline sync | **GSAP + ScrollTrigger** | `gsap@^3.13` + `@gsap/react@^2` (`useGSAP`) | Client components |
| Buttery smooth-scroll substrate | **Lenis** | `lenis@^1.1` → `lenis/react` `<ReactLenis>` | One client provider near root |
| Interactive, rotatable 3D hero | **react-three-fiber + drei** | `three@^0.176`, `@react-three/fiber@^9`, `@react-three/drei@^10` | Client-only, `dynamic(..., { ssr:false })` |
| Ambient loops, entrance timing, simple state transitions | **Plain CSS keyframes / transitions** (already in `globals.css`) | none | Anywhere, including RSC output |
| Photographic/AI video content | **Remotion, rendered offline → `<video>`** | keep `remotion` as a build-time devDependency only | Not in the live React tree |

Guiding principle: **CSS for ambient + entrance, Motion for reactive DOM, GSAP for
scroll-linked sequences, R3F for one genuine 3D moment, Remotion for offline video
only.** Pick the lightest tool that does the job; never load a runtime for an effect
CSS can do.

Pin exact patch versions at install time — the point here is the **major line**
that supports React 19 / Next 16, not a specific patch.

---

## 1. What actually makes "Manus-style" generated sites feel beautiful

The beauty is not one trick; it is a *stack of small, correct decisions*. Concretely:

**1.1 Interactive / rotatable 3D as the hero focal point.** A single real 3D object
(product, abstract form, globe, particle field) that the visitor can drag to rotate,
that reacts to pointer with damped inertia, sits under real lighting/environment
reflections, and casts a soft contact shadow. The craft signals: *momentum + damping*
(it keeps spinning a little after you let go, then eases to rest), *constrained
rotation* (it never flips to an ugly angle), and *depth cues* (parallax between the
object and its shadow/background). One such element does more than ten flat animations.

**1.2 Scroll choreography, not scroll decoration.** Content is *authored against the
scroll position*, not merely faded in on load. Techniques:
- **Reveal-on-enter** with real thresholds (element animates when it crosses ~15–25%
  into the viewport, once), with **staggered children** (60–120ms apart).
- **Pinned sections + scrub**: a section "sticks" while its internal content advances
  as you scroll (the classic pin-and-scrub). The current homepage *fakes* this with a
  `position: sticky` heading; the real version drives the story cards off scroll progress.
- **Scroll-linked transforms**: opacity/translate/scale/blur mapped to a scroll range
  (e.g., a headline that de-blurs and settles between 0–200px).

**1.3 Depth and parallax.** Foreground, midground, background move at different rates.
Blurred gradient "orbs" drift slowly; a hero object translates opposite to card
layers; section backgrounds shift hue as you pass. This manufactures the sense of a
built *space* rather than a stacked document.

**1.4 Micro-interactions with physics.** Buttons and cards respond with *spring*
easing, not linear transitions. Signature moves: **magnetic buttons** (the label
nudges toward the cursor and springs back), **hover tilt** (subtle `rotateX/rotateY`
toward the pointer with perspective), **shine sweeps**, icon nudges on hover. The
tell of quality is the *release*: spring settle, not an abrupt snap.

**1.5 Easing and timing craft.** Amateur motion uses `ease` / `linear` and one
duration. Premium motion uses a small, consistent set: an "out-expo"-ish
`cubic-bezier(0.16, 1, 0.3, 1)` for entrances, ~500–800ms for large elements,
~150–220ms for hover, staggered offsets, and *spring* (stiffness/damping) for
anything the user directly manipulates. Consistency across the whole page is what
reads as "designed."

**1.6 Cursor / pointer effects.** A radial glow that follows the cursor over dark
sections (this repo already ships `MouseGradientSection`), spotlight masks, cursor-reactive
gradient borders. Subtle, dark-section-only, never on text-heavy light areas.

**1.7 Masked / kinetic typography.** Headlines revealed line-by-line from behind a
mask (`clip-path: inset(100% 0 0)` → `inset(0)` with a translate), word-by-word
staggers, occasional variable-font weight shifts. The repo's `design-x-mask-up`
keyframe is exactly this.

**1.8 Material honesty.** Restrained glassmorphism (backdrop-blur) *only* on floating
UI, soft grain/noise overlays, fine grid textures masked to fade out, generous
shadows with correct color (tinted to the brand, not pure black). Depth via layered
soft shadows, not borders.

**1.9 Performance that preserves the illusion.** 60fps, transform/opacity-only
animations (never animate layout properties), GPU compositing, lazy-mounting of heavy
elements, and instant `prefers-reduced-motion` fallbacks. Jank destroys the premium
feeling faster than any missing effect.

The homepage today has **1.4 (hover), 1.5 (partial), 1.6, 1.7, 1.8** in embryonic
form but is missing the two things that most read as "generated-site premium":
**genuine scroll choreography (1.2/1.3)** and **interactive 3D (1.1)**. Everything on
`app/page.tsx` animates *on load* (`demo-reveal`, `demo-headline span`) regardless of
whether it's in view, and loops ambiently (`demo-drift`, `demo-card-float`) — there is
zero coupling to scroll or pointer beyond the one dark band. That is the gap to close.

---

## 2. Why the Remotion approach failed, and what Remotion is/isn't for

### 2.1 What Remotion actually is
Remotion is a **video production framework**: you describe frames declaratively in
React, and its toolchain renders them — via headless Chromium, offline — into an
`.mp4`/`.webm`. `@remotion/player` is a *playback/preview surface* for those same
compositions (a timeline-driven stage), not a general-purpose animation runtime for
your live UI.

### 2.2 Concretely why the in-page attempt didn't display
The abandoned prototype embedded compositions live via `@remotion/player` inside
`DesignXKineticBridge.tsx` and `DesignXSystemMap.tsx`. The most probable failure
causes, from the code as written:

1. **Collapsed height.** `<Player style={{ width:"100%", height:"100%" }}/>` sat inside
   `.design-x-kinetic` / `.design-x-map-wrap`, whose height came only from
   `aspect-ratio` plus `max-height: 70vh` and `overflow: hidden`. The Player needs a
   parent with a *resolved, definite* height; when the parent's height is derived
   indirectly (or clamped/clipped), the Player's internal stage resolves to 0 and you
   get a blank box. This is the single most common "Remotion Player shows nothing" bug.
2. **Client-only first paint + hydration fragility.** The Player renders essentially
   nothing during SSR (its stage is client-only). It was correctly behind `"use client"`,
   but any hydration mismatch or thrown error in that subtree means the client never
   takes over and the blank SSR output is what remains. It was also imported *statically*
   rather than via `dynamic(..., { ssr:false })`, so a throw at import/mount takes the
   section down silently.
3. **The "cinematic" video never existed.** The three genuinely photographic slots
   (`HeroClassroomLoop`, `ProjectBuildMontage`, `FinalCTALoop`) were **blocked** —
   Higgsfield free-plan credits were exhausted, so no source clips were ever generated
   (see `remotion/README.md` and the salvaged capability check). What actually shipped
   as "motion" was one still JPEG plus two code-only `@remotion/player` compositions. So
   most of the intended motion was absent, and the parts that were present were the
   fragile embedded Players.
4. **Wrong tool for the job anyway.** Even with all bugs fixed, `@remotion/player` is a
   poor fit for in-page UI motion: it renders into an isolated fixed-composition stage
   (design-time `1920×1080`) that doesn't flow with your responsive layout, it ships a
   heavy runtime, and it gives you a **frame timeline** — not scroll-, pointer-, or
   state-driven interactivity. Kinetic type and an animated system map are trivially and
   more cheaply done with CSS/SVG/Motion directly in the DOM.

### 2.3 The line: pre-rendered video vs. live DOM/WebGL

| Use pre-rendered video (Remotion → `<video>`) | Use live DOM/CSS/Motion/GSAP | Use live WebGL (R3F) |
|---|---|---|
| Photographic / AI-generated footage, color-graded and composited | Anything reactive to user: hover, scroll, pointer, state | Interactive 3D: drag-to-rotate, real depth/lighting |
| Frame-perfect motion-graphics that are identical every visit | Text reveals, staggers, layout transitions | Shader effects, particle fields, environment reflections |
| Film-like intro loops with real imagery | Parallax, pinned scroll sequences, micro-interactions | Anything the visitor manipulates in 3D space |
| Output: an `.mp4`/`.webm` file, played in a plain `<video>` | Output: DOM nodes with transforms | Output: a `<canvas>` you own |

**Rule for this repo:** Remotion stays a **build-time devDependency**. If we ever have
real Higgsfield footage, we render it to a file offline (`npm run remotion:render`) and
drop the resulting `<video>` into the page. We do **not** ship `@remotion/player` in the
live bundle, and we do **not** use Remotion for interactive motion. Kinetic typography
and the system-map diagram move from Remotion compositions to plain CSS/SVG + Motion.

---

## 3. The recommended stack, justified for Next 16 / React 19

### 3.1 Motion (Framer Motion) — the reactive DOM workhorse
- Package: **`motion@^12`**, imported as `import { motion, useScroll, useTransform,
  useReducedMotion } from "motion/react"`. (Framer Motion was renamed to `motion`; the
  v11+/v12 line targets React 19 and is the correct choice on this repo.)
- Use for: scroll-in reveals (`whileInView` + `viewport={{ once:true, amount:0.2 }}`),
  staggered children (`variants` + `staggerChildren`), spring hovers (`whileHover`),
  magnetic buttons, hover tilt, and scroll-linked transforms (`useScroll` +
  `useTransform`).
- **RSC boundary:** any file using `motion.*` must be `"use client"`. Keep those
  components leaf-level and small so the rest of the page stays a Server Component.
  Prefer a tiny generic `<Reveal>` / `<Stagger>` wrapper in `components/motion/` that
  pages compose, rather than converting whole pages to client.
- **SSR/hydration:** Motion renders the initial (pre-animation) state as real DOM on the
  server, so there is no blank-flash or hydration mismatch. Give reveal wrappers a sane
  initial style so content is readable even if JS never loads.
- **Bundle:** import only from `motion/react`; the `m` component + `LazyMotion` pattern
  can shave the bundle further if needed. It is a fraction of Remotion's weight.
- **Accessibility:** Motion's `useReducedMotion()` hook lets a component collapse to no
  transform when the user prefers reduced motion — pair it with the existing global CSS
  `@media (prefers-reduced-motion: reduce)` guard in `globals.css`.

### 3.2 GSAP + ScrollTrigger — scroll choreography
- Packages: **`gsap@^3.13`** + **`@gsap/react@^2`** (`useGSAP` hook). GSAP is framework-
  agnostic and now fully free (including ScrollTrigger and all plugins).
- Use for: **pinning** a section while its content scrubs (the "why it matters" story
  sequence), scroll-scrubbed timelines, and horizontal scroll galleries. This is the one
  thing Motion does less ergonomically than GSAP; use GSAP where you need a pinned,
  scrubbed *timeline*, and Motion for everything else.
- **React 19 / cleanup:** always drive GSAP through `useGSAP(() => {...}, { scope: ref })`
  — it handles context creation and reverts all tweens/ScrollTriggers on unmount, which
  matters under React 19 Strict Mode double-invocation. Register plugins client-side only:
  `gsap.registerPlugin(ScrollTrigger)` inside the client component.
- **SSR:** ScrollTrigger touches `window`; keep it in `"use client"` files and register
  in an effect/`useGSAP`, never at module top level in shared code.
- **Interop with Lenis:** drive ScrollTrigger off Lenis's scroll so pin math stays exact
  (see 3.4).
- **Decision rule:** if it reacts to *entering the viewport*, use Motion `whileInView`.
  If it must *pin and scrub*, use GSAP ScrollTrigger. Don't run both engines on the same
  element.

### 3.3 When plain CSS keyframes are still correct
Do **not** reach for a JS library when CSS suffices. Keep CSS for:
- Ambient infinite loops (`demo-drift`, `demo-card-float`, glow pulses) — already present
  and cheap; a JS rAF loop here would be strictly worse.
- One-shot entrance animations that are *fine* firing on load (though most should become
  scroll-triggered — see Phase 1).
- Hover shines, gradient transitions, focus rings, the cursor-gradient variable updates.
- Anything that must run inside Server-Component output with no client JS.

CSS keyframes are the *default*; Motion/GSAP are for when you need scroll/pointer/state
coupling or spring physics that CSS can't express.

### 3.4 Lenis — smooth-scroll substrate
- Package: **`lenis@^1.1`**, `import { ReactLenis } from "lenis/react"`.
- Mount **one** `<ReactLenis root>` in a small client wrapper placed inside
  `app/layout.tsx` around `{children}` (a `"use client"` `SmoothScroll` component, so the
  layout itself stays a Server Component).
- It normalizes wheel/trackpad inertia and is what makes scroll-linked motion feel
  "expensive." Feed its scroll value into ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`
  and drive `lenis.raf` from `gsap.ticker`) so both agree on scroll position.
- **Accessibility:** disable/soften when `prefers-reduced-motion` is set; keep native
  anchor jumps working. Provide an escape hatch (Lenis can be paused). Note this repo
  currently sets `html { scroll-behavior: smooth }` — Lenis supersedes that; remove the
  CSS smooth-scroll where Lenis is active to avoid double-smoothing.

### 3.5 react-three-fiber + drei — the interactive 3D moment
- Packages: **`three@^0.176`**, **`@react-three/fiber@^9`** (the v9 line is the React 19
  release; v8 is React 18 only — do **not** install v8), **`@react-three/drei@^10`**.
- **Client-only + dynamic import:** the whole 3D scene lives in a `"use client"`
  component, and the page imports it via
  `const Hero3D = dynamic(() => import("@/components/three/Hero3D"), { ssr:false, loading: () => <HeroStill/> })`.
  `ssr:false` is mandatory — three.js touches `window`/WebGL and must never run on the
  server. The `loading` fallback should be the **existing static hero image**, so there is
  never a blank hole and non-WebGL clients still get a real visual.
- **Lazy mount:** don't create the WebGL context until the hero is near the viewport. Gate
  the dynamic import behind an IntersectionObserver, and set the canvas `frameloop="demand"`
  (or pause on `document.hidden` / when scrolled away) so it isn't burning GPU off-screen.
- **Interactivity from drei:** `OrbitControls` (with `enableZoom={false}`, `enablePan={false}`,
  `enableDamping`, and polar-angle limits) or, better for a hero, `PresentationControls`
  (drag-to-rotate with snap-back and configured spring) wrapping a `Float` object; add
  `Environment` (a bundled/inlined HDRI preset) for reflections and `ContactShadows` for
  grounding. `Suspense` around any `useLoader`/`useGLTF` asset, with the still as fallback.
- **Bundle:** three + fiber + drei is the heaviest dependency here (~150KB+ gzipped for a
  modest scene). It must be code-split (the `dynamic` import does this) and loaded on **one
  page, below/around the hero only**. Budget for it deliberately; it is the "showcase," not
  a default.
- **Asset policy:** geometry can be code-authored (a lathe/torus/icosahedron of brand-green
  glass) needing no external asset. If a GLTF model is used, keep it small (draco-compressed)
  and self-hosted under `public/`. Per repo policy, do not fabricate *photographic* assets;
  procedural 3D geometry is authored code, not a stand-in for planned Higgsfield media.

### 3.6 Cross-cutting: SSR, hydration, bundle, a11y
- **RSC discipline:** keep `app/page.tsx` and section shells as Server Components. Push
  interactivity into small `"use client"` leaves (`components/motion/*`, `components/three/*`).
  This keeps the server-rendered HTML rich (good SEO/first paint) and the client JS minimal.
- **No hydration flash:** every animated element must render a readable, correctly-laid-out
  initial state on the server; animation only enhances it. Never gate *content* behind
  animation state (a reveal that starts at `opacity:0` must still be reachable/visible with
  JS disabled — pair with a `no-js`/reduced-motion safe default).
- **Bundle budget:** Motion + GSAP + Lenis together are modest; R3F is the outlier and must
  be code-split. Target: shared client JS stays small; 3D loads only where used.
- **Accessibility, non-negotiable:** honor `prefers-reduced-motion` everywhere (the global
  CSS guard already exists — extend it, and use `useReducedMotion()` in JS components so
  they don't even attach scroll/pointer listeners). No autoplaying audio, no strobing, no
  motion that traps keyboard focus, maintain contrast over any moving background, and keep
  all controls operable without the fancy motion. Respect the salvaged accessibility notes
  (§6) as the standing checklist.

---

## 4. Phased plan for the live site (grounded in current files)

The homepage (`app/page.tsx` + `styles/globals.css`) has six sections: hero
(`.demo-hero`), "why it matters" (sticky heading + `.demo-story-card`s), the dark
programs band (`MouseGradientSection` → `.demo-program-card`s), the source-visual rail
(`.demo-image-rail`), the proof grid (`.demo-proof-card`s), and the final CTA
(`.demo-final-cta`). Today every reveal fires on load; nothing is scroll- or 3D-driven.
The phases below add exactly the missing layers, cheapest first.

### Phase 1 — Motion polish (quick wins, low risk) — **Motion + CSS**
Goal: make the motion that already exists feel intentional and *scroll-aware*, and add
spring physics to interactions. No new heavy runtime; `motion` only.

1. **Scroll-triggered reveals.** Replace the on-load CSS reveals
   (`.demo-reveal`, `.demo-headline span`, `.demo-reveal-card`, and the delay classes) with
   a reusable `<Reveal>` / `<Stagger>` client wrapper using Motion `whileInView` +
   `viewport={{ once:true, amount:0.2 }}`. Effect: headline lines, hero CTAs/chips, story
   cards, program cards, and proof cards animate *as each enters the viewport*, staggered —
   not all at once on load. This alone closes most of the perceived gap.
   - Files: new `components/motion/Reveal.tsx` (+ `Stagger.tsx`); apply in `app/page.tsx`
     around the hero copy block, `storyBeats.map`, `programs.map`, `sourceVisuals.map`,
     and `proofStats.map`. Retire the corresponding `demo-*` entrance keyframes from
     `globals.css` (keep ambient loops).
2. **Magnetic primary CTA + spring hover.** Fold the salvaged `MagneticButton` behavior
   into a client enhancement of `CTAButton` (pointer-follow translate with spring snap-back;
   the existing `.shine-button` sweep stays). Cards (`.demo-story-card`, `.demo-program-card`,
   `.demo-proof-card`) get `whileHover` spring lift + subtle pointer-tilt (`rotateX/rotateY`)
   instead of the current linear `transform` transition.
   - Files: `components/ui/CTAButton.tsx` (add a `"use client"` magnetic variant), a shared
     `components/motion/Tilt.tsx`.
3. **Easing/timing tokens.** Standardize on one entrance curve
   (`cubic-bezier(0.16, 1, 0.3, 1)`), one hover curve, and a spring config, defined once and
   reused. Kills the "every animation feels slightly different" tell.
4. **Reduced-motion parity.** Adopt the salvaged `useReducedMotion.ts` hook (or Motion's)
   in every new client component so listeners aren't even attached when the user opts out;
   keep the global CSS guard.

Deliverable feel: same layout, but content arrives *with* the scroll and interactions have
physics. Ships with only `motion` added.

### Phase 2 — Scroll choreography (medium) — **GSAP + ScrollTrigger + Lenis**
Goal: author the page against scroll — depth, pinning, parallax.

1. **Smooth-scroll substrate.** Add a `"use client"` `SmoothScroll` wrapper (`<ReactLenis root>`)
   inside `app/layout.tsx` around `{children}`; wire Lenis→ScrollTrigger; remove the CSS
   `scroll-behavior: smooth` to avoid double-smoothing. Disabled under reduced-motion.
2. **Hero parallax depth.** The three `.demo-float-card`s in `.demo-visual-stack` and the two
   `.demo-glow` orbs move at *different* scroll rates (Motion `useScroll`+`useTransform`, or a
   GSAP scrub). Foreground cards translate faster than the glow behind them → real depth.
   - Files: extract `.demo-visual-stack` into a `components/sections/HeroVisualStack.tsx`
     client component.
3. **Pinned story sequence.** Turn the "why it matters" section — currently a fake
   `position: sticky` heading (`.demo-sticky-copy`) beside `.demo-story-card`s — into a real
   GSAP `ScrollTrigger` **pin + scrub**: the heading pins while the three story beats advance
   (Access → Practice → Proof) as the user scrolls, each stepping forward/highlighting in turn.
   This is the single most "premium" upgrade in Phase 2.
   - Files: new `components/sections/StorySequence.tsx` (client); replaces the sticky/stack
     markup in `app/page.tsx`.
4. **Section transitions + rail.** Optionally convert the `.demo-image-rail` (currently manual
   `scroll-snap` horizontal scroll) into a scroll-linked horizontal move (GSAP pin + x-scrub).
   Add scroll-progress-driven background hue shifts between sections for continuity. Keep the
   `MouseGradientSection` cursor glow as-is — it's already good.

Deliverable feel: the page reads as a *composed space* with depth and a narrated middle.
Ships with `gsap`, `@gsap/react`, `lenis` added.

### Phase 3 — One interactive 3D hero (showcase) — **react-three-fiber + drei**
Goal: the "generated-site" wow — a single rotatable 3D object as the hero focal point.

1. **Replace the static hero collage with a 3D object.** Swap `.demo-visual-stack`'s image
   cards for one interactive object in a `<Canvas>`: e.g., a slowly-rotating brand-green glass
   form / faceted "capability" solid / small cluster of floating program tokens, under an
   `Environment` preset with `ContactShadows`, wrapped in `PresentationControls` (or damped,
   constrained `OrbitControls`) so visitors can drag to rotate with spring snap-back and
   inertia. The floating "signal cards" idea from `design-x` can orbit the object as HTML via
   drei `<Html>` billboards.
   - Files: `components/three/Hero3D.tsx` (`"use client"`, the scene); imported into the hero
     via `dynamic(() => import(...), { ssr:false, loading: () => <existing hero image> })`.
2. **Guardrails:** IntersectionObserver-gated mount, `frameloop="demand"`/pause off-screen,
   procedural geometry or a small self-hosted draco GLTF (no external CDN — matches the site's
   self-contained posture), static-image fallback for reduced-motion / no-WebGL / mobile-low-power.
   Keep it to **one** page. Measure Lighthouse before/after.

Deliverable feel: a hero you can grab and spin, with real light and depth — the headline
"Manus-level" quality — without compromising first paint (the still renders instantly; the
canvas hydrates in behind it).

> Sequencing rationale: Phases are independently shippable and additive. Phase 1 delivers ~70%
> of the perceived polish for ~10% of the risk and can ship alone. Phase 3 is the only phase
> that adds meaningful bundle weight, so it comes last and stays isolated to the hero.

---

## 5. Salvaged from design-x (knowledge that must survive the code deletion)

The `design-x` route/components/compositions are being deleted. Its durable value:

### 5.1 Creative direction (keep)
- **Concept:** a cinematic, scroll-driven journey — *raw potential → hands-on creation →
  visible proof → invitation to build*. More intense than the institutional baseline, but the
  core story ("people become capable by creating") stays legible.
- **Visual language:** earthy cream base, forest-green institutional grounding, terracotta as
  *motion/accent energy only*, deep charcoal text. "Electric" comes from motion and glow, **not
  neon**. Documentary imagery + animated UI overlays + projector-light atmosphere + kinetic
  type + soft grain/grid texture. Glass used *only* on floating signal cards.
- **Motion language:** fast but intentional; masked headline reveals; cursor-reactive glow;
  sticky split-layout storytelling; parallax floating signal cards; hover-reactive program
  cards with animated top-border strokes; an SVG line-drawing "system map"; magnetic CTAs;
  reduced-motion fallback for *every* major effect.
- **Story arc worth preserving:** hero → kinetic mission transition (Learn · Build · Evolve ·
  Human capability) → problem/gap (access ≠ capability) → hands-on learning → programs as
  animated cards with visible claim status → student/project proof (placeholders stay visible)
  → honest impact horizon → partnership CTA.

### 5.2 Motion ideas worth porting (and how, without Remotion)
- **Masked line-by-line headline reveal** — the `design-x-mask-up` keyframe
  (`clip-path: inset(100% 0 0)` → `inset(0)` + translateY, staggered per line). Port as CSS or
  Motion; use in the homepage hero. **Best single idea to carry over.**
- **Magnetic buttons** — `MagneticButton.tsx` logic (pointer offset × ~0.1–0.16, snap back on
  leave, guarded by reduced-motion). Fold into `CTAButton` (Phase 1).
- **Cursor-reactive glow** — `MotionShell` set `--design-x-cursor-x/y` on pointer-move; the live
  site already has the equivalent in `MouseGradientSection`. Keep the pattern, don't duplicate.
- **Hover-tilt program cards + animated gradient top-border** (`design-x-program-card` +
  `::before` scaleX sweep). Port to Motion `whileHover` tilt (Phase 1).
- **Kinetic typography mission bridge** — was a live `@remotion/player` composition
  (`KineticTypeReveal`); **re-implement as CSS/SVG or Motion staggered text in the DOM**, not
  Remotion. Same visual, far lighter, actually reliable.
- **Curriculum "system map"** — was `CurriculumSystemMap` (SVG nodes + path line-drawing via
  Remotion `interpolate`). **Re-implement as a plain animated SVG** (stroke-dashoffset draw +
  staggered node springs, triggered on scroll-in). No Remotion, no `@remotion/player`.
- **Floating parallax "signal cards"** and **scroll cue bob** — pure CSS/Motion; reuse as the
  orbiting HTML labels around the Phase 3 hero object.

### 5.3 Hard-won lessons (the reason this doc exists)
- **Remotion `@remotion/player` in-page was the wrong call.** It's for previewing offline video
  compositions, not driving live UI. The code-only compositions (kinetic type, system map)
  should always have been DOM/SVG/Motion. Reserve Remotion for *offline* rendering of real
  footage → `<video>`, if/when real footage exists.
- **The photographic video slots were never real.** Higgsfield free plan = 10 credits; one
  still cost 2; video was never generated. Any "cinematic loop" plan must first confirm the
  Higgsfield MCP credit balance (see `CLAUDE.md` asset policy) — **do not** design around video
  that doesn't exist, and **never** fabricate a stand-in for a planned real asset.
- **Too many simultaneous effects read as chaotic.** The prototype's own review flagged that
  cursor glow + kinetic marquee + floating cards + hover tilt together were too much. Production
  should keep *one or two* signature effects per section, not all of them.
- **Keep for production:** the documentary hero direction, a *toned-down* magnetic/shine CTA,
  proof labels staying visible even in expressive layouts, and the system-map idea *simplified*.
- **Remove/avoid:** a constant kinetic marquee that competes with reading, strong hover tilt on
  institutional cards, and any heavy background video unless performance + a11y are verified.

### 5.4 Performance & accessibility checklist (standing rules, salvaged)
- Keep at most **one** hero motion/still asset; lazy-load anything lower on the page
  (`preload="none"`/`"metadata"`); never autoplay more than one video above the fold; compress
  media hard; measure real Lighthouse before shipping any of this.
- Backdrop-blur and cursor-reactive glow are expensive on low-end devices — use sparingly.
- `prefers-reduced-motion` must disable: headline entrance, scroll reveals, kinetic/marquee
  motion, SVG line-drawing, scroll cue, floating cards, hover transforms. Semantic sections,
  single H1, descriptive alt text, decorative layers never the sole information source, CTAs as
  real text links, no strobing, contrast maintained over moving/gradient backgrounds.
- Verify in-browser: keyboard tab order through magnetic links/cards, contrast over any hero
  image at all viewports, mobile readability of any node-graph, and that no effect feels
  disorienting.

---

## 6. What not to do (guardrails)
- Don't ship `@remotion/player` in the live bundle; don't use Remotion for interactive motion.
- Don't convert whole pages to Client Components — push interactivity to small `"use client"` leaves.
- Don't animate layout properties (width/height/top/left); transform + opacity only.
- Don't run two scroll engines on one element (Motion `whileInView` *or* GSAP ScrollTrigger, not both).
- Don't let animation gate content visibility with JS disabled or reduced-motion on.
- Don't add the 3D bundle to more than the one hero, and never without an `ssr:false` dynamic
  import + static-image fallback.
- Don't fabricate photographic/video assets; confirm Higgsfield credits first, or use procedural
  3D / CSS / SVG (which are authored, not stand-ins for planned real media).
- Don't outshine trust: proof labels and honest claims win over spectacle (the prototype's own
  closing note).

---

## Addendum — Animated icons: Animate UI (evaluated 2026-07-06)

**Verdict: adopt for icon micro-interactions.** [Animate UI](https://github.com/imskyleen/animate-ui)
is **MIT-licensed and free** — no paid tier. It is a **shadcn-CLI distribution**,
not an npm runtime dependency: `npx shadcn add ...` copies each component/icon's
source into our repo, so we own and can theme it. Built on **Motion (Framer
Motion) + Tailwind + React/TS** — the exact stack this doc already recommends, so
it introduces no new runtime philosophy.

- **On-theme by default.** Its animated icons are animated **Lucide** icons, and
  we already depend on `lucide-react`. They render as SVG using `currentColor`,
  so they inherit our palette through Tailwind text classes (`text-forest`,
  `text-terracotta`, `text-cream`) with no recolor work.
- **How to adopt.** Add the `motion` dep (already Phase 1), then pull specific
  animated icons from the Animate UI registry into `components/ui/icons/`. Use
  hover/tap-triggered variants on interactive elements (CTAs, program cards, nav)
  — not everywhere, to avoid motion noise.
- **Guardrail.** Gate the animation behind `prefers-reduced-motion` (fall back to
  the static Lucide glyph), consistent with the accessibility checklist above.
