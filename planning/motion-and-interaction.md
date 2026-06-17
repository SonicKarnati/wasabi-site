# Motion and Interaction Rules

## 1. Motion Philosophy

Motion should support clarity, trust, and orientation. It should not distract, create a generic AI-startup feeling, or make credibility feel performative. The website can feel modern through restraint, hierarchy, and thoughtful interaction rather than spectacle.

## 2. Allowed Motion

- Subtle fade-in on section entrance.
- Slight card hover lift or border emphasis.
- Smooth anchor scrolling.
- Header state change on scroll.
- Accordion expand/collapse.
- Form validation feedback.
- Mobile navigation open/close.
- Focus transitions that improve visibility.

All motion should be short, calm, and optional through reduced-motion support.

## 3. Avoided Motion

- Constant background animation.
- Excessive parallax.
- Random floating blobs or decorative orbs.
- Aggressive scroll-jacking.
- Futuristic AI glow effects.
- Hologram/circuit animation language.
- Animated metrics that imply false precision.
- Animations that carry information unavailable to keyboard or screen-reader users.
- Motion that blocks reading or slows institutional users.

## 4. Interaction Map

### Home

- Header navigation.
- Primary and secondary hero CTAs.
- Program cards with hover/focus affordance.
- Trust strip may link to Impact when verified proof exists.
- Story placeholder/card links to approved case study only when available.
- Final contact CTA.

### About

- Header navigation.
- Principle cards can be static.
- Team/advisor placeholders should not be interactive until approved profiles exist.
- CTA to Programs / Work.

### Programs / Work

- Program cards can expand or link to future detail pages.
- ProgramTimeline can support stacked mobile flow.
- FAQAccordion can be introduced if final program FAQ is approved.
- CTAs route to Contact with inquiry type context in a future build.

### Impact

- StatBlock interactions should be minimal.
- Verification labels should be static and readable.
- Case-study cards should link only after stories are approved.
- Projected/target labels must remain visible in all states.

### Contact

- Inquiry path cards should behave like clear selectable routes or anchor links.
- Contact form requires validation states.
- Success and error states must be explicit.
- Form should not imply enrollment confirmation unless that workflow exists.

## 5. Accessibility Constraints

- Respect `prefers-reduced-motion`.
- No animation-dependent information.
- All interactive elements keyboard accessible.
- Visible focus states for links, buttons, cards, accordions, and form fields.
- Touch targets should be at least 44px high/wide where possible.
- Mobile navigation must trap focus when open and return focus when closed.
- Accordion controls must expose expanded/collapsed state.
- Form errors must be tied to fields and announced clearly.
- Smooth scrolling should not interfere with browser/user preferences.

## 6. Interaction Tone

Interactions should feel precise, quiet, and useful. Institutional users should feel the site is dependable. Student/parent users should feel the site is approachable. Government visitors should never feel that motion is masking weak proof.
