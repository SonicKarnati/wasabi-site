# Component Plan

This is a planning document for the eventual website build. It does not define or implement React components.

## Component: SiteHeader

Purpose: Provide persistent navigation and brand orientation.
Where used: All pages.
Content fields: Logo asset, navigation items, primary CTA label/link, mobile menu label.
Variants: Default light, dark-on-forest, compact scroll state.
States: Default, scrolled, mobile open, active page, focus, hover.
Accessibility: Semantic `nav`, visible focus, keyboard-operable mobile menu, descriptive logo alt text.
Dependencies: Final navigation labels, approved logo asset, official CTA.
V1 priority: High.
Notes: One primary nav CTA maximum.

## Component: SiteFooter

Purpose: Close pages with contact, navigation, trust notes, and legal placeholders.
Where used: All pages.
Content fields: Logo, short description, links, contact details, social links, legal links, review status notes.
Variants: Forest dark footer, minimal footer.
States: Link hover/focus.
Accessibility: Semantic footer, readable contrast, clear link text.
Dependencies: Official contact details, legal/privacy links.
V1 priority: High.
Notes: Use forest dark with white/cream text.

## Component: HeroSection

Purpose: Establish page purpose and primary action.
Where used: Home, About, Programs, Impact, Contact.
Content fields: Eyebrow, heading, subheading, primary CTA, secondary CTA, proof note, optional image/visual.
Variants: Home hero, page intro hero, dark hero, minimal hero.
States: CTA hover/focus, image loading/fallback.
Accessibility: Single H1 per page, no text over busy image, accessible CTA labels.
Dependencies: Final page copy, approved imagery if used.
V1 priority: High.
Notes: Do not include unsupported metrics in hero.

## Component: SectionHeader

Purpose: Introduce a section with clear hierarchy.
Where used: All pages.
Content fields: Eyebrow, heading, description, optional proof-status label.
Variants: Default, centered for rare hero-like sections, dark background.
States: None beyond responsive wrapping.
Accessibility: Proper heading level order.
Dependencies: Section copy.
V1 priority: High.
Notes: Keep descriptions short.

## Component: CTAButton

Purpose: Provide clear user action.
Where used: Header, hero, CTA bands, cards, forms.
Content fields: Label, href/action, icon optional, aria label optional.
Variants: Primary green, secondary outline, text link, destructive/warning not planned.
States: Default, hover, focus, active, disabled, loading if form-related.
Accessibility: Minimum touch target, visible focus, clear label.
Dependencies: Final CTA taxonomy and links.
V1 priority: High.
Notes: Terracotta CTA should be rare and require approval.

## Component: CTAGroup

Purpose: Pair primary and secondary actions without clutter.
Where used: Hero, CTA sections, program sections.
Content fields: Primary CTA, secondary CTA, optional note.
Variants: Horizontal desktop, stacked mobile, dark background.
States: Child button states.
Accessibility: Logical tab order.
Dependencies: CTAButton.
V1 priority: High.
Notes: Avoid more than two actions in main CTA groups.

## Component: TrustStrip

Purpose: Give fast credibility signals while preserving claim safety.
Where used: Home, Programs, Impact.
Content fields: Items with label, value, status, source note.
Variants: Metric strip, proof placeholders, partner-proof strip.
States: Placeholder, verified, needs verification, projected.
Accessibility: Do not encode status by color alone.
Dependencies: Verified metrics and proof approvals.
V1 priority: High.
Notes: Must distinguish verified from projected.

## Component: StatBlock

Purpose: Display a metric or placeholder clearly.
Where used: Home proof strip, Impact, program sections.
Content fields: Value, label, source, status, notes.
Variants: Verified, projected, placeholder, compact, dark.
States: None.
Accessibility: Value and label readable together; status text visible.
Dependencies: Impact verification.
V1 priority: High.
Notes: No metric should ship without source/status.

## Component: ProgramCard

Purpose: Summarize one program or program category.
Where used: Home, Programs / Work.
Content fields: Title, audience, format, outputs, status, proof status, CTA, source note.
Variants: Student, school, community, public-sector, builder/event, co-branded.
States: Default, hover, focus, placeholder proof.
Accessibility: Entire card should not be the only clickable target unless semantic link/card pattern is implemented accessibly.
Dependencies: Program model, approved status, CTA path.
V1 priority: High.
Notes: Include program status or proof status where sensitive.

## Component: ImpactCard

Purpose: Show proof, planned scale, or output examples.
Where used: Impact, Home impact preview.
Content fields: Title, type, description, metric optional, status, source.
Variants: Verified impact, projected scale, program output, needs verification.
States: None.
Accessibility: Status text explicit.
Dependencies: ImpactMetric model.
V1 priority: High.
Notes: Projected metrics must be visually and textually labeled.

## Component: StoryCard

Purpose: Present a human story or case-study preview.
Where used: Home, Impact, Programs.
Content fields: Person/org name, role/context, summary, image, consent status, source, CTA.
Variants: Student story, SHG/community story, school/institution story, placeholder.
States: Placeholder, approved, image missing.
Accessibility: Alt text, no image-only meaning.
Dependencies: Consent, image rights, story approval.
V1 priority: Medium.
Notes: Do not publish unapproved stories.

## Component: PartnerLogoStrip

Purpose: Show approved partners or institutional proof.
Where used: Home, Impact, Programs.
Content fields: Partner name, logo, relationship type, permission status, source.
Variants: Approved logos, text-only proof, placeholder.
States: Placeholder, approved.
Accessibility: Logo alt text includes partner name; avoid logo-only proof.
Dependencies: Legal/brand permission.
V1 priority: Low until permissions are confirmed.
Notes: Avoid fake or inferred partner relationships.

## Component: ImageTextSection

Purpose: Pair a visual with explanatory copy.
Where used: Home, About, Programs.
Content fields: Image, alt text, heading, body, CTA, caption/source.
Variants: Image left, image right, dark background, line/photo treatment.
States: Image loading, missing image.
Accessibility: Meaningful alt text or decorative empty alt.
Dependencies: Rights-cleared imagery.
V1 priority: Medium.
Notes: Do not use unapproved student/community photos.

## Component: QuoteBlock

Purpose: Highlight approved belief statements or testimonials.
Where used: About, Impact, Home.
Content fields: Quote, attribution, status, source.
Variants: Brand belief, testimonial, placeholder.
States: Verified, needs permission.
Accessibility: Use semantic quote markup where appropriate.
Dependencies: Quote permission and source.
V1 priority: Medium.
Notes: Third-party quotes require permission/context.

## Component: FAQAccordion

Purpose: Answer common questions without overwhelming page flow.
Where used: Programs, Contact, later program pages.
Content fields: Question, answer, audience, source, status.
Variants: Student FAQ, school FAQ, government FAQ, contact FAQ.
States: Expanded, collapsed, focus, hover.
Accessibility: Keyboard accessible, proper aria state, no animation-dependent content.
Dependencies: Approved FAQ content.
V1 priority: Medium.
Notes: Good for AI Learner and program concerns.

## Component: ContactCTA

Purpose: Invite users to the next step.
Where used: Page bottoms, program sections, impact.
Content fields: Heading, body, primary CTA, secondary CTA, audience note.
Variants: Partnership, enrollment, pilot, general inquiry.
States: Button states.
Accessibility: Clear action label.
Dependencies: Final contact routing.
V1 priority: High.
Notes: Should not imply enrollment confirmation.

## Component: ContactForm

Purpose: Capture structured inquiries.
Where used: Contact page.
Content fields: Name, organization, email, phone, inquiry type, message, consent checkbox.
Variants: General inquiry, program inquiry, partnership inquiry.
States: Empty, focus, validation error, submitting, success, failure.
Accessibility: Labels, errors tied to fields, keyboard support, no placeholder-only labels.
Dependencies: Form backend, privacy policy, routing rules.
V1 priority: High for build planning, implementation pending.
Notes: Phase 3 plans only; no implementation.

## Component: PageIntro

Purpose: Provide concise page setup below header.
Where used: About, Programs, Impact, Contact.
Content fields: Eyebrow, title, intro, optional CTA.
Variants: Default, dark, with proof note.
States: None.
Accessibility: H1/H2 order.
Dependencies: Page copy.
V1 priority: High.
Notes: Can share structure with HeroSection but should be calmer.

## Component: Breadcrumbs

Purpose: Help orientation if the site grows beyond five pages.
Where used: Not required for five-page v1; future program/detail pages.
Content fields: Label, href, current page.
Variants: Light, dark.
States: Hover/focus.
Accessibility: Semantic breadcrumb nav.
Dependencies: Deeper information architecture.
V1 priority: Low.
Notes: Not needed unless Phase 4 adds detail pages.

## Component: MobileNav

Purpose: Provide accessible navigation on small screens.
Where used: All pages via SiteHeader.
Content fields: Nav items, CTA, open/close labels.
Variants: Slide panel, full-screen simple menu.
States: Open, closed, active page, focus trap.
Accessibility: Keyboard accessible, escape closes, focus returned to trigger.
Dependencies: Navigation model.
V1 priority: High.
Notes: Avoid complex nested nav in v1.

## Component: VerificationBadge

Purpose: Mark proof status for metrics, partnerships, stories, or claims.
Where used: TrustStrip, ImpactCard, ProgramCard, StoryCard, internal review displays.
Content fields: Status, label, source note.
Variants: Verified, needs verification, projected, placeholder, approved.
States: None.
Accessibility: Text label required; color alone is insufficient.
Dependencies: Claim review workflow.
V1 priority: High.
Notes: This is important for avoiding overclaiming.

## Component: ProgramTimeline

Purpose: Show program sequence or learning journey.
Where used: Programs page, future program detail pages.
Content fields: Steps, duration, description, outputs.
Variants: AI Learner schedule, SHG phased journey, SCBC 6-hour format, startup series.
States: Mobile stacked.
Accessibility: Ordered list semantics.
Dependencies: Program model.
V1 priority: Medium.
Notes: Useful for making program structure concrete.
