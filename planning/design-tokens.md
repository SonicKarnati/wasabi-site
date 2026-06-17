# Design Tokens

These tokens are planning guidance only. They are not production CSS and should be reviewed before implementation.

## Color

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `color.forest` | `#11241F` | Source-confirmed | Deep Forest Dark. |
| `color.green` | `#2D6A4F` | Source-confirmed | Wasabi Green, primary brand color. |
| `color.terracotta` | `#E5784A` | Source-confirmed | Accent only. |
| `color.cream` | `#FFF4E3` | Source-confirmed | Main background. |
| `color.white` | `#FFFFFF` | Source-confirmed | Utility/text on dark. |
| `color.ink` | `#1A1A1A` | Source-confirmed | Body text on light. |
| `color.gray` | `#6B6B6B` | Source-confirmed | Captions/metadata. |
| `color.border.greenSubtle` | `[Provisional: rgba from Wasabi Green]` | Provisional | Implementation should derive from `#2D6A4F`. |

## Typography

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `font.display` | `Cormorant Garamond` | Source-confirmed | Headlines/display. |
| `font.body` | `DM Sans` | Source-confirmed | Body/interface. |
| `font.displayFallback` | `Georgia, serif` | Recommendation | Fallback. |
| `font.bodyFallback` | `Arial, system-ui, sans-serif` | Recommendation | Fallback. |
| `text.display` | `64-80px / 1.1` | Source-confirmed range | Use carefully on web. |
| `text.h1` | `48-56px / 1.15` | Source-confirmed range | Adjust responsively without viewport scaling. |
| `text.h2` | `36-40px / 1.2` | Source-confirmed range | Section headers. |
| `text.h3` | `22-24px / 1.3` | Source-confirmed range | DM Sans bold. |
| `text.body` | `16-18px / 1.6` | Source-confirmed range | Long-form web copy. |
| `text.small` | `12-14px / 1.5` | Source-confirmed range | Captions/metadata. |

## Spacing

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `space.xs` | `8px` | Source-confirmed | Tight related elements. |
| `space.s` | `16px` | Source-confirmed | Small groups. |
| `space.m` | `24px` | Source-confirmed | Card internal spacing. |
| `space.l` | `40px` | Source-confirmed | Section inner rhythm. |
| `space.xl` | `80px` | Source-confirmed | Major section spacing. |
| `space.xxl` | `120px` | Source-confirmed | Hero/chapter-level spacing. |

## Radius

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `radius.card` | `8px` | Recommendation | Matches design guidance for modest cards. |
| `radius.button` | `6px` | Recommendation | Needs visual approval. |
| `radius.input` | `6px` | Recommendation | Needs visual approval. |

## Shadow

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `shadow.none` | `none` | Source-aligned | Avoid heavy shadows. |
| `shadow.subtle` | `[Provisional: very soft elevation]` | Provisional | Use only if needed; no text shadows. |

## Border

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `border.default` | `1px solid [greenSubtle]` | Provisional | Derive from Wasabi Green. |
| `border.dark` | `1px solid [forest subtle]` | Provisional | Needs contrast review. |

## Motion

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `motion.fast` | `120-160ms` | Recommendation | Hover/focus feedback. |
| `motion.standard` | `180-240ms` | Recommendation | Accordion/nav. |
| `motion.ease` | `[Provisional: ease-out]` | Recommendation | Keep subtle. |

## Layout

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `layout.columns` | `12` | Recommendation | Desktop planning grid. |
| `layout.container` | `[Provisional: 1120-1200px]` | Recommendation | Needs design approval. |
| `layout.mobileBreakpoint` | `[Provisional]` | Provisional | Decide during implementation. |

## Z-Index

| Token | Value | Status | Notes |
| --- | --- | --- | --- |
| `z.header` | `[Provisional]` | Provisional | Define in Phase 4. |
| `z.mobileNav` | `[Provisional]` | Provisional | Define in Phase 4. |
| `z.modal` | `[Provisional]` | Provisional | Only if modals are introduced. |
