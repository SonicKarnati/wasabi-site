# Design-X Accessibility Notes

## Implemented

- `/design-x` uses semantic sections and a single H1.
- The generated hero image has descriptive alt text.
- Decorative cursor glow, orbs, and noise are not the only source of information.
- CTAs are normal links with visible text.
- Reduced-motion media query disables major motion.
- The page works without generated videos.
- Proof placeholders remain visible as text.
- No flashing or strobing effects were added.

## Needs Browser Review

- Keyboard tab order through magnetic links and cards.
- Contrast over the generated hero image on all viewports.
- Mobile system-map readability.
- Whether the kinetic marquee is too intense for review audiences.
- Whether hover tilt feels disorienting.

## Production Caution

This route is intentionally more animated than the likely production site. Any production reuse should prioritize:

- Readability.
- Reduced motion.
- Lower media weight.
- Fewer simultaneous effects.
- Clear pause/no-autoplay behavior if videos are added.
