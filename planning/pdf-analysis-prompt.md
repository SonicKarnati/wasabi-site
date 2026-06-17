# Prompt for GPT PDF / Image-Based PDF Analysis

Use this prompt with a GPT model that can inspect uploaded PDFs visually, including scanned PDFs, image-heavy brochures, and documents where normal text extraction is incomplete.

```md
You are analyzing source materials for the Wasabi AI website planning project.

Your job is to inspect the uploaded PDF visually and textually. Some PDFs may be image-heavy, compressed, scanned, or have poor text extraction. Do not rely only on embedded text. Look at the actual page images, layout, logos, screenshots, photos, diagrams, QR codes, contact blocks, headings, and visual hierarchy.

Important constraints:

- Do not invent facts.
- Do not infer partnerships, outcomes, awards, or statistics unless they are visible in the PDF.
- If a claim appears in the PDF but may be marketing language rather than verified proof, mark it as `Needs verification`.
- If text is unreadable, say exactly what is unreadable and where.
- Preserve numbers, names, dates, URLs, phone numbers, email addresses, program names, and organization names exactly as shown.
- If a PDF contains repeated decorative text, ignore duplicates unless the repetition changes meaning.
- If a PDF uses aspirational language such as "targeted", "expected", "projected", "aligned with", or "trusted by", preserve that qualifier.
- Distinguish between confirmed past proof and future/planned goals.
- Distinguish between Wasabi's own claims and third-party quotes or references.

Return the analysis in this exact structure:

# PDF Analysis: [PDF filename]

## 1. Extraction Confidence

Rate confidence for each category:

- Text readability: High / Medium / Low
- Visual readability: High / Medium / Low
- Data/stat extraction confidence: High / Medium / Low
- Contact information confidence: High / Medium / Low
- Overall confidence: High / Medium / Low

Add 2-4 sentences explaining any extraction limitations.

## 2. One-Paragraph Summary

Summarize what this PDF is for in one clear paragraph.

Include:

- Document type, such as brochure, concept note, campaign deck, event flyer, program deck, partnership note, or brand asset.
- Main audience.
- Main purpose.
- Whether it appears to describe an existing program, a proposed program, a campaign, or a future event.

## 3. Source Content Inventory

Extract all reusable content that could matter for website planning.

Use this table:

| Item type | Exact or close text | Page | Notes / verification status |
| --- | --- | --- | --- |

Include:

- Headlines
- Taglines
- Program names
- Campaign names
- Event names
- Important paragraphs
- Mission/vision language
- Audience descriptions
- Program descriptions
- Service descriptions
- Module names
- Deliverables
- Outcomes
- Calls to action
- FAQ content
- Repeated phrases
- Contact details
- URLs
- QR code destination if visible or readable

## 4. Programs, Campaigns, or Initiatives Mentioned

For each program/campaign/initiative, provide:

### [Name]

- Source page(s):
- Status: Existing / Proposed / Future / Unclear
- Audience:
- Format:
- Duration:
- Delivery mode:
- Location or geography:
- What participants do:
- What participants leave with:
- Wasabi's role:
- Partner or institution mentioned:
- Claims made:
- Needs verification:

If a field is absent, write `Missing from PDF`.

## 5. Metrics, Numbers, and Claims

Extract every number or measurable claim.

Use this table:

| Claim / number | Exact wording | Page | Past, current, projected, or unclear? | Verification risk |
| --- | --- | --- | --- | --- |

Examples of things to capture:

- Students trained
- Projects built
- Schools represented
- Target schools
- Expected attendees
- Partners
- Program duration
- Cohort sizes
- Pricing
- Dates
- Locations
- Awards
- Advisor credentials
- Social proof
- Platform/user counts

Important: If the PDF says "targeted", "expected", or "projected", do not rewrite it as achieved.

## 6. Credibility Material

List all credibility signals.

Use these categories:

- Partnerships or named institutions:
- Government or public-sector references:
- Advisors:
- Mentors:
- Founder/team information:
- Awards:
- Metrics:
- Testimonials:
- Case studies / student stories:
- Media/news mentions:
- Certifications:
- Alignment with policies/missions:
- Contact details:

For each item, include page number and whether it is `Confirmed by PDF`, `Claimed in PDF`, or `Needs external verification`.

## 7. Audience Clues

Identify every audience implied or directly named.

For each audience:

- Who they are:
- What the PDF wants them to believe:
- What proof they would need:
- What concern/skepticism they may have:
- What action the PDF asks them to take:
- Page references:

Consider:

- Government visitors
- Institutional partners
- Schools
- Parents
- Students
- SHG women
- EFC leaders
- SCBC communities
- Persons with disability
- International visitors
- Donors/sponsors
- Media
- General public

Only include audiences actually supported by the PDF.

## 8. Visual Identity and Design Observations

Analyze the PDF visually.

Include:

- Logo usage:
- Color usage:
- Typography style:
- Image/photo style:
- Illustration style:
- Layout patterns:
- Icon or graphic motifs:
- CTA treatment:
- Use of QR codes:
- Any deviation from the Wasabi design system:
- Any visual elements worth preserving for the website:
- Any visual elements to avoid:

Do not judge final design quality unless it affects website planning.

## 9. Voice and Tone Observations

Identify how the PDF sounds.

Include:

- Formality level:
- Emotional tone:
- Institutional tone:
- Student/parent tone:
- Government-facing tone:
- Repeated words or phrases:
- Words or claims that may conflict with the brand voice guide:
- Copy that is strong enough to reuse:
- Copy that should be rewritten before website use:

## 10. Website-Relevant Takeaways

List what this PDF contributes to the future website.

Use these categories:

- Homepage:
- About page:
- Programs / Work page:
- Impact page:
- Contact page:
- Possible case study:
- Possible proof strip:
- Possible FAQ:
- Possible CTA:

For each item, include the source page and whether the material is ready to use or needs verification.

## 11. Missing or Risky Information

List what is unclear, missing, contradictory, or risky.

Include:

- Unsupported claims
- Vague stats
- Unclear partner status
- Unclear dates
- Unclear program status
- Missing photo rights
- Missing contact details
- Missing impact verification
- Missing testimonial consent
- Any text that may overpromise

## 12. Recommended Updates to Planning Files

Recommend specific updates for:

- `planning/brand.md`
- `planning/phase1-review.md`
- `planning/site-strategy.md`
- `planning/page-plan.md`
- Wireframes

Use this format:

| File | Recommended update | Source page | Confidence |
| --- | --- | --- | --- |

## 13. Short Reviewer Notes

Write 5-10 concise bullets for a human reviewer explaining what they should verify before this PDF is used as website source material.
```

## Suggested Batch Instruction

When analyzing multiple PDFs, run the prompt once per PDF. Do not merge PDFs into one analysis unless asked. After all PDFs are analyzed, ask GPT for a cross-document synthesis using this follow-up:

```md
Using the PDF analyses above, create a cross-document synthesis for Wasabi AI website planning.

Return:

1. Confirmed programs and initiatives
2. Proposed or future programs and initiatives
3. Confirmed metrics
4. Projected or target metrics
5. Credibility signals that can be used now
6. Credibility signals that need verification
7. Audiences supported by the source materials
8. Contact details found across sources
9. Strong reusable website copy
10. Claims to avoid until verified
11. Updates needed in `planning/brand.md`
12. Updates needed for Phase 2 strategy and wireframes

Keep everything source-grounded. Include PDF filename and page number for every important claim.
```
