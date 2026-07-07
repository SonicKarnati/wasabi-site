# Cleanup & Relaunch Plan

> Durable working plan for the July 2026 cleanup + relaunch effort. This is the
> single source of truth for the tasks below — keep it updated as work lands.
> Author: Claude Code session, 2026-07-06.

## Context & decisions (locked with the user)

- **The local site at `localhost:3000` is the master.** The homepage on the
  current branch (`phase/design-x-higgsfield-cinematic`) is enhanced vs. `main`
  and that enhancement is what ships.
- **design-x code → delete, keep the knowledge.** Remove the `/design-x` route,
  `components/design-x/`, `remotion/`, remotion deps, and `planning/design-x-*.md`.
  Distill any lasting insight into the beauty/motion strategy doc (WS-D).
- **Beauty deliverable → a strategy/spec doc only** (no build in that task).
- **Form → rebuild as a step-by-step, full-screen-on-focus interactive wizard**,
  one simple answer at a time, email *or* phone, front-end only (fake submit,
  no backend/SMS/email wiring).
- **Branches → delete everything stale, keep only `main`** (local + origin).

## Critical nuance — DO NOT break the animated homepage

The current branch vs. `origin/main` differs in these **clean, deployable**
marketing files (no Remotion / no design-x imports — verified by grep):

- `app/page.tsx` (+314 lines) — animated homepage
- `components/sections/MouseGradientSection.tsx` (new, interactive mouse gradient)
- `components/ui/CTAButton.tsx` (minor)
- `styles/globals.css` (+1151 lines of `@keyframes` — **the live homepage uses these**)
- `public/assets/...` extracted covers + `higgsfield/stills/hero-classroom-still.jpeg`

**These MUST be preserved and deployed.** `globals.css` keyframes power the live
homepage, so do NOT strip them even though CLAUDE.md calls them "design-x's
motion." Only the `/design-x` *route* + `components/design-x/` + `remotion/` are
the broken, deletable experimental layer.

## Ground truth captured 2026-07-06

- Marketing site imports of design-x/remotion/three: **none** (safe to delete).
- `origin/main` (7afaf83) is 3 commits ahead of local `main`; it has **no**
  design-x and **no** remotion deps — it's the older, un-animated marketing site.
- The current design-x branch already contains origin/main's content (9337d11,
  0132be9) plus the animated-homepage + design-x work.
- Vercel project: `wasabi-government-landing` (org `sonickarnatis-projects`),
  authed as `sonickarnati`. Last **Production** deploy is 25d old and shows
  `Ready` (build did NOT fail) → "not displaying" is likely a **runtime crash or
  stale/misconfigured production alias**, NOT a build break. Must load the prod
  URL to confirm during WS-C.
- GitHub: `SonicKarnati/wasabi-site`; token has `delete_repo` + `repo` scope.
- **Figma MCP is unauthorized and cannot be authorized from this session**
  (non-interactive OAuth). WS-F is blocked until the user runs `/mcp` interactively.

## Branch inventory (for pruning — WS-B)

Delete on both local + origin, keep only `main`:
`docs/doc-refactor`, `phase/2-site-strategy-wireframes`, `phase/5-qa-polish-deploy`
(origin only), `phase/5x-1-figma-design-translation`, `phase/5x-animation-demo-reel`,
`phase/7-vercel-deployment`, `phase/design-x-higgsfield-cinematic`,
`revert-2-phase/2-site-strategy-wireframes` (origin only).

---

## Workstreams

### WS-A — Repo cleanup (main line) ✅ gate: build/lint/typecheck green
1. From the current branch content, delete: `app/design-x/`, `components/design-x/`,
   `remotion/`, `remotion.config.ts`, `planning/design-x-*.md`, unused `public/assets/design-x/`.
2. Remove remotion deps from `package.json` (`remotion`, `@remotion/*`, `@remotion/cli`);
   drop `remotion:*` scripts; regenerate `package-lock.json`.
3. Keep `CLAUDE.md` (new, useful operational doc).
4. Verify NO dangling imports to deleted paths; `npm run build && npm run lint && npm run typecheck`.
5. Manually confirm homepage animations + MouseGradientSection still render (WS-C verify covers live).

### WS-B — Git & branch pruning (main line)
1. Land the WS-A clean state on `main` (clean commit on top of `origin/main`; keep the
   animated homepage). Push `main`.
2. Delete all stale local + origin branches (see inventory). Leave only `main`.
3. Sanity: `git branch -a` shows just `main` + `origin/main`.

### WS-C — Vercel fix + relaunch (main line) ✅ gate: prod URL renders correctly
1. Load current production URL; capture the actual failure (blank? crash? 404?).
   Pull `get_deployment_build_logs` / runtime logs for the failing deploy.
2. Check project prod-branch + build settings; fix misconfig if any.
3. Deploy clean `main` to production (`vercel --prod` or git-push auto-deploy).
4. Verify the live site displays and the homepage animations work.
   (User will also cross-check via "Claude in Chrome" for max assurance.)

### WS-D — Beauty/motion strategy doc (DISPATCH TO SUB-AGENT) — deliverable
- One `.md` file. Analyze what makes Manus-generated sites beautiful: rotatable/
  interactive **3D** + **stunning motion**. Recommend the stack to achieve it *here*
  (e.g. react-three-fiber + drei for 3D; Framer Motion / GSAP for on-page motion —
  explicitly replacing the failed Remotion approach for in-page effects). Give a
  concrete, phased plan to bring that beauty into the live marketing site. Planning
  only — no build. Delegated to keep main context clean.

### WS-E — Multi-step interactive intake form (build)
- Rebuild the intake/contact form as a step-by-step wizard: one simple question per
  step, goes **full-screen when the user starts interacting**, progress indicator,
  smooth transitions. Collect: name, then email **or** phone (user's choice),
  then the qualifying questions. Front-end only — fake a success state on submit; no
  backend/SMS/email. Respect the `/design-x` boundary is N/A here (this is live site).
  Candidate for sub-agent build with review in main line.

### WS-F — Figma population (BLOCKED — needs MCP auth)
- Once the user authorizes the `figma` MCP server (`/mcp` interactively), populate the
  "Wasabi Website Design" Figma file with the **actual on-page elements** (a flat
  laid-out mirror of the live website), not just backgrounds/colors/styles. Dispatch
  to a sub-agent with the Figma skills once unblocked.

## Execution order & delegation
1. WS-A → WS-B → WS-C (sequential; get the clean site live first). Main line.
2. WS-D in parallel via sub-agent (independent; no shared state).
3. WS-E after the site is live (build; sub-agent + review).
4. WS-F whenever Figma auth lands.

---

## Progress log

- **2026-07-06 — WS-A DONE.** Based clean state on `origin/main`; grafted the
  animated homepage (`app/page.tsx` 287 lines), `MouseGradientSection`, `CTAButton`,
  `globals.css` keyframes, and `public/assets/extracted/*`. Removed the `/design-x`
  route, `components/design-x/`, `remotion/`, remotion deps + scripts, and
  `public/assets/design-x/`. Regenerated a clean lockfile (0 remotion refs).
  Refreshed `CLAUDE.md` (dropped dead design-x/remotion/higgsfield rules) and
  `.gitignore` (ignore `.codex/`, track `.vscode/mcp.json`). **build ✓ lint ✓ typecheck ✓**,
  routes = `/ about contact impact programs` (no design-x).
- **2026-07-06 — WS-D DONE.** `planning/visual-excellence-strategy.md` written
  (Manus-beauty analysis, Remotion post-mortem, react-three-fiber + Motion/GSAP +
  Lenis stack, phased plan, salvaged design-x direction).
- **2026-07-06 — Animate UI evaluated.** MIT/free, shadcn-CLI distribution on
  Motion+Tailwind, animated Lucide icons → on-theme via `currentColor`. Adopt in
  Phase 1. (See strategy-doc addendum.)
- **2026-07-06 — WS-B DONE.** Committed clean state (`b9319be`) to `main`, pushed
  (`7afaf83..b9319be`). Deleted all stale branches: 6 local + 8 origin. `git branch -a`
  now = `main` + `origin/main` only.
- **2026-07-06 — WS-C DONE.** Diagnosed: prod domain `wasabi-government-landing.vercel.app`
  was serving a 25d-old (pre-animation) deploy; deployment-specific URLs 302 to Vercel SSO
  (that's the "not displaying"). Git auto-deploy is NOT connected. Deployed clean `main` to
  production via `vercel --prod` → `dpl_GXJ...` (awp9a9xxk), aliased to the prod domain.
  Verified: HTTP 200 public, serving the animated homepage (assets/extracted + demo-* markers).
  TODO for user: optionally connect GitHub→Vercel Git integration so `main` pushes auto-deploy.
- **2026-07-06 — WS-E DONE (pending live Chrome check).** Replaced the monolithic
  `/contact` form with `components/sections/InquiryWizard.tsx`: an inline entry that
  expands to a **full-screen focused overlay on first interaction**; one question per
  step (name → organization → intent cards → email|phone toggle → optional message)
  with a progress bar, Back/Continue, Enter-to-advance, Esc-to-close, body-scroll lock,
  focus management, `prefers-reduced-motion`, and a simulated success screen (no
  backend). Motion is CSS-only for now; Framer Motion polish is a Phase-1 follow-up.
  build/lint/typecheck green; SSR verified on :3111 (200, wizard entry present, old
  form gone).
- **2026-07-06 — WS-F PENDING USER INPUT.** Figma MCP authorized (Saunak Karnati,
  starter tier). Blocker: need the target Figma file URL/key ("Wasabi Website Design")
  — not referenced anywhere in the repo. Once provided, dispatch a sub-agent using the
  figma-generate-design + figma-use skills to mirror the live pages (home, about,
  programs, impact, contact) as flat frames with the ACTUAL elements (text, buttons,
  cards, sections), not just colors/styles. Alternatively create a fresh mirror file.
