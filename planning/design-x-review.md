# Design-X Review

## 1. What Was Attempted

Created an experimental cinematic motion prototype for Wasabi at:

`/design-x`

The route explores a high-energy, scroll-driven story using a Higgsfield-generated hero still, kinetic typography, cursor-reactive glow, magnetic CTAs, sticky narrative panels, animated cards, and an SVG system map.

## 2. Higgsfield CLI Status

Installed and authenticated.

CLI version:

`higgsfield 0.2.3`

Account:

`saunak.karnati@gmail.com — free plan, 10 credits`

## 3. Assets Generated

- `public/assets/design-x/higgsfield/stills/hero-classroom-still.jpeg`

Model:

`cinematic_studio_2_5`

Job:

`7b63fa81-ba40-49c5-aef1-e113af9a160e`

Cost estimate:

`2 credits`

## 4. Assets That Failed

No generation failed after correcting CLI parameter names.

First attempt used `--aspect-ratio`, which the CLI rejected. Correct parameter is `--aspect_ratio`.

## 5. Commands Run

- `higgsfield --version`
- `higgsfield model list`
- `higgsfield account status`
- `higgsfield model get cinematic_studio_3_0`
- `higgsfield model get cinematic_studio_2_5`
- `higgsfield generate cost cinematic_studio_2_5 ...`
- `higgsfield generate create cinematic_studio_2_5 ...`
- `higgsfield generate wait 7b63fa81-ba40-49c5-aef1-e113af9a160e --json`
- `curl -L [result_url] -o public/assets/design-x/higgsfield/stills/hero-classroom-still.jpeg`

Validation commands:

- `npm run lint`: PASS
- `npm run typecheck`: PASS
- `npm run build`: PASS after rerunning with network access for `next/font` Google Font fetches

## 6. Models Used

Generated:

- `cinematic_studio_2_5`

Inspected but not used:

- `cinematic_studio_3_0`

## 7. Credit / Cost Notes

The account is on a free plan with 10 credits. One 1k image generation cost was estimated at 2 credits. Video generation was not attempted to avoid consuming the remaining credits without user approval.

## 8. Frontend Route Created

`app/design-x/page.tsx`

## 9. Animation Systems Used

- CSS masked headline reveals.
- CSS kinetic marquee.
- Cursor-reactive radial highlight through a client wrapper.
- Magnetic CTA hover transform.
- Floating signal cards.
- Hover tilt program cards.
- Animated card border strokes.
- SVG line drawing for the curriculum/system map.
- Reduced-motion CSS fallbacks.

## 10. Dependencies Added

None.

The implementation uses existing Next.js, React, Tailwind CSS, CSS animations, and `lucide-react`.

## 11. Performance Notes

See `planning/design-x-performance-notes.md`.

Primary asset size:

- Hero still: 692K

## 12. Accessibility Notes

See `planning/design-x-accessibility-notes.md`.

## 13. Known Issues

- Only one Higgsfield asset was generated.
- No Higgsfield video loops are present yet.
- The hero image is generated and needs human approval before any production use.
- The page is intentionally intense and may be too animated for the stable institutional site.
- Initial sandboxed `npm run build` failed because `next/font` could not reach Google Fonts. The same build passed with network access.
- The unrelated generated `next-env.d.ts` route-type pointer change existed before implementation and should not be committed as part of this phase.

## 14. What Feels Strongest

- The generated hero still fits the classroom/prototype story well.
- The headline + image pairing immediately feels more cinematic than the stable site.
- The kinetic bridge and system-map animation give the route a demo-reel rhythm.
- Program cards remain claim-safe while feeling more energetic.

## 15. What Feels Too Chaotic

- The cursor glow, marquee, floating cards, and hover tilt together may be too much for production.
- The final production site should likely keep only one or two of these effects.

## 16. What Should Be Kept For Production

- The documentary hero direction.
- Subtle CTA shine/magnetic feel if toned down.
- Proof labels staying visible even in an expressive layout.
- The system-map idea, simplified.

## 17. What Should Be Removed

- Constant kinetic marquee if it distracts from reading.
- Strong hover tilt on institutional cards.
- Any heavy background video unless performance and accessibility are verified.

## 18. Recommended Next Step

Review `/design-x` and mark each section:

- Keep
- Tone down
- Remove
- Needs rewrite
- Needs better asset
