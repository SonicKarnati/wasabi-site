# Phase 5X Animation Plan

## 1. Landing Page Story Arc

1. Premium first impression: Wasabi as a human-capability AI studio, not a generic AI startup.
2. Why it matters: AI access is not enough; people need confidence, judgment, and real outputs.
3. What Wasabi does: build-first programs for students, schools, SHG ecosystems, public-sector communities, and young builders.
4. Human/educational mission: people become capable by creating.
5. Credibility: proof stays labeled, projected metrics stay projected, placeholders stay visible.
6. Final CTA: invite institutions, schools, and communities to start a serious conversation.

## 2. Sections To Animate

- Hero: layered animated background, staged text entrance, floating extracted brochure visuals, CTA hover emphasis.
- Problem/opportunity: sticky storytelling cards with sequential reveal.
- Programs: animated card grid with icons and hover lift.
- Source visuals: image-rich rail using extracted brochure thumbnails, all marked temporary/source-derived.
- Trust/proof: animated placeholder/projection cards without fake counting.
- Final CTA: large purpose statement with subtle motion and strong action.

## 3. React Bits Components Considered

- BlurText and SplitText were considered for the hero headline.
- Decision: not installed for this branch because the same effect can be implemented with project-owned CSS and no dependency overhead.

## 4. shadcn Components Needed

- None for this pass.
- Existing local components already cover the needed button, card, badge, and layout behavior.

## 5. Lucide Icons Needed

Use `lucide-react` sparingly for program and proof cards:

- `Sparkles`
- `School`
- `UsersRound`
- `Building2`
- `Rocket`
- `ShieldCheck`
- `ArrowRight`
- `FileCheck2`

## 6. Other Animation Libraries Considered

- Framer Motion was considered but not selected. CSS and small React-free interactions are enough for this exploratory landing page.
- React Bits/Cult UI/Animate UI remain reference inspiration only.

## 7. Images / Assets To Extract Or Use

- Use existing transparent Wasabi logos.
- Extract selected PDF cover thumbnails from `assets/raw/` into `public/assets/extracted/`.
- Use extracted visuals only as temporary/prototype source material, not as verified proof or final approved imagery.

## 8. Risks

- Extracted brochure visuals may include projected numbers, partner-style marks, or campaign-specific claims.
- Some visuals are brochure composites rather than rights-cleared final website photography.
- Heavy animation may feel too energetic for the final government/institutional version.
- CSS view/scroll effects need reduced-motion fallback.

## 9. What Will Remain Experimental

- Animated gradient/field treatment.
- Floating brochure visual stack.
- High-energy card hover effects.
- Sticky storytelling rhythm.
- Any use of extracted brochure visuals as homepage imagery.
