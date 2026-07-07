# CLAUDE.md

Operational/setup guidance for working in this repo. This file is not the
product ruleset — see [README.md](README.md) and `planning/*.md` for that.

## Project

`wasabi-site` — the Wasabi AI public marketing site. Next.js 16 (App Router),
React 19, Tailwind CSS 4, TypeScript. Deployed on Vercel
(project `wasabi-government-landing`). See
[planning/site-strategy.md](planning/site-strategy.md) for what the site must
accomplish.

## Directory map

- `app/` — Next.js App Router routes (`page.tsx` home, `about`, `contact`, `impact`, `programs`).
- `components/` — shared components: `layout/`, `sections/`, `ui/`.
- `content/` — typed content powering the pages.
- `lib/` — small shared utilities.
- `styles/globals.css` — global CSS, including the homepage `@keyframes` motion.
- `public/assets/` — logos + `extracted/` program cover images used across the site.
- `planning/` — durable product ruleset (strategy, page/component/content plans,
  accessibility, QA, deployment) plus active working plans:
  `cleanup-and-relaunch-plan.md` and `visual-excellence-strategy.md`. Read this
  before making product decisions; this file won't repeat it.

## MCP servers

Hosted OAuth MCP server — no API keys stored in-repo. The canonical, tracked
server list lives in `.vscode/mcp.json`; register the same server/URL pairs in
whichever MCP client you use (Claude Code, Codex, Cursor, etc.). Local per-tool
config (e.g. `.codex/`) is gitignored — recreate it locally.

| Server | URL | Purpose |
|---|---|---|
| figma | `https://mcp.figma.com/mcp` | Read/update the "Wasabi Website Design" Figma file; mirror the live site into Figma |

## Visual excellence direction

On-page beauty — interactive/rotatable 3D and high-craft motion — is built with
**code-driven** libraries (react-three-fiber for 3D; Framer Motion / GSAP for
motion), **not** Remotion. See
[planning/visual-excellence-strategy.md](planning/visual-excellence-strategy.md).
A prior Remotion + Higgsfield prototype ("design-x") was removed 2026-07 because
Remotion is an offline video-render / motion-graphics tool, not a live
interactive DOM/WebGL layer.

## Assets

Use real assets. Don't commit fabricated or placeholder imagery as if it were
final — flag missing assets instead of silently substituting.

## Commands

```bash
npm run dev          # local dev server
npm run lint
npm run typecheck
npm run build
```
