# Design-X Performance Notes

## 1. Video Asset Sizes

No video files were generated or committed in this pass.

Generated still:

- `public/assets/design-x/higgsfield/stills/hero-classroom-still.jpeg`
- Size: 692K
- Dimensions: 1376x768

## 2. Lazy-Loading Behavior

- The hero still is loaded with Next Image priority because it is above the fold on `/design-x`.
- No non-hero Higgsfield media is loaded because additional videos were not generated.
- Future video slots should use `preload="none"` or `preload="metadata"` unless above the fold.

## 3. Mobile Behavior

- The hero grid collapses to one column.
- Program and proof card grids collapse from three columns to two and then one.
- Floating signal cards become normal stacked cards on small screens.
- The system map becomes a tall stacked node layout on small screens.

## 4. Reduced-Motion Behavior

Reduced motion disables:

- Headline entrance animation.
- Scroll reveal animation.
- Kinetic marquee.
- SVG line drawing.
- Scroll cue animation.
- Floating signal cards.
- Hover transform effects.

## 5. Known Performance Risks

- Future MP4 backgrounds may increase load substantially.
- Cursor-reactive glow and backdrop blur can be expensive on low-end devices.
- Multiple animated cards can become noisy if more sections are added.
- The generated JPEG should be compressed further before production use.

## 6. Production Recommendations

- Keep one hero motion/still asset only.
- Convert heavy videos to compressed MP4/WebM with poster frames.
- Avoid autoplaying more than one video above the fold.
- Lazy-load lower-page video assets.
- Measure real Lighthouse performance before considering any Design-X ideas for production.
