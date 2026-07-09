---
name: verify
description: Build, run, and visually verify the wasabi-site marketing site (Next.js 16)
---

# Verifying wasabi-site

## Build + serve

```bash
npm run lint && npm run typecheck && npm run build
npm run start -- -p 3199        # production server (background it)
```

All 6 routes are static (`/`, `/about`, `/contact`, `/impact`, `/programs`, `/_not-found`).

## Drive + capture

```bash
curl -sI http://localhost:3199/          # security headers set in next.config.ts
npx -y playwright screenshot --channel chrome --viewport-size=1440,900 \
  --wait-for-timeout 6000 http://localhost:3199/ out.png
```

Flows worth driving: homepage network-hero animation (screenshot at ~1.2s for
mid-draw, ~6s for settled), /about classroom image section, /contact inquiry
wizard (front-end only, no network submission).

## Gotchas

- **Do not use** `chrome --headless=new --virtual-time-budget=N --screenshot`:
  React hydration never runs under virtual time, so framer-motion elements stay
  at their SSR `opacity:0` state — a false "broken animation" signal. Playwright
  with a real `--wait-for-timeout` works.
- `npm run start` spawns a child; `kill %1` may leave it. Free the port with
  `lsof -ti tcp:3199 | xargs kill`.
- Reduced-motion: NetworkHero skips all animation when
  `prefers-reduced-motion` is set (SSR markup is the fully-drawn state).
