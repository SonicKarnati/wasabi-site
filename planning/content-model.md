# Content Model

## Why This Doc Exists

This document defines the content types the site is allowed to render. It exists so page components can stay simple while claim status, source traceability, and approval logic remain explicit.

## Core Principle

Content is not public truth unless it is verified or approved. Everything else must be labeled as placeholder, projected, needs verification, or do not publish.

## Model: Page

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| slug | string | yes | `programs` | Stable URL segment. |
| title | string | yes | `Programs / Work` | Page title. |
| navLabel | string | yes | `Programs` | Header label can be shorter. |
| metaDescription | string | yes | `[Placeholder: SEO description]` | Needs final copy. |
| hero | reference | yes | HeroSection content | One hero per page. |
| sections | array | yes | Program cards, trust strip, CTA | Ordered content blocks. |
| status | enum | yes | `draft` | Draft / review / approved. |
| sourceNotes | array | optional | `planning/page-plan.md` | Internal traceability. |

Use this model for route-level content only. It should describe page purpose and structure, not design decisions.

## Model: NavigationItem

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| label | string | yes | `Impact` | Visible label. |
| href | string | yes | `/impact` | Internal or external URL. |
| priority | number | yes | `4` | Controls order. |
| isPrimaryCTA | boolean | yes | `false` | Only one primary CTA in header. |
| external | boolean | optional | `false` | For external links. |

Navigation should stay small and stable so the header can remain simple and accessible.

## Model: Program

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| id | string | yes | `ai-learner` | Stable identifier. |
| name | string | yes | `AI Learner / Student Programs` | Source-supported category. |
| sourceName | string | optional | `AI Learner - Weekend Bootcamp` | Exact PDF name if used. |
| audience | array | yes | `Class 6-12 students, schools, parents` | Source-supported. |
| status | enum | yes | `[Placeholder: active/proposed/completed]` | Must be confirmed. |
| format | string | yes | `2-day live online bootcamp` | Source-supported but confirm current terms. |
| duration | string | optional | `2 days, 2.5 hours/day` | Use only if current. |
| deliveryMode | string | optional | `Live online` | Source-supported. |
| outputs | array | yes | `3-4 projects`, `certificate` | Avoid measured outcomes unless verified. |
| proofStatus | enum | yes | `needs verification` | verified / needs verification / projected / placeholder. |
| cta | reference | optional | `Ask about AI Learner` | Link needs final routing. |
| source | string | yes | `assets/raw/AI Learner Program - Wasabi AI _compressed.pdf` | Required for traceability. |

Program records should always make it obvious what the program is, who it is for, and whether the published language is approved.

## Model: ImpactMetric

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| label | string | yes | `[Placeholder: verified metric label]` | Needs verified metric. |
| value | string | yes | `[Placeholder: verified value]` | Do not invent number. |
| status | enum | yes | `placeholder` | verified / projected / target / needs verification / placeholder. |
| source | string | yes | `[Placeholder: source record]` | Must cite source. |
| publicApproved | boolean | yes | `false` | Defaults false. |
| notes | string | optional | `KASC values are projected only` | Clarify claim safety. |

Impact metrics must never be presented without a source trail and status label.

## Model: Partner

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| name | string | yes | `[Placeholder: partner name]` | Do not publish until confirmed. |
| relationshipType | string | yes | `[Placeholder: relationship type]` | Partner, collaborator, source reference, alignment, etc. |
| logo | asset | optional | `[Placeholder: approved logo]` | Requires permission. |
| permissionStatus | enum | yes | `needs permission` | approved / needs permission / do not publish. |
| source | string | yes | `[Placeholder: source]` | Required. |
| notes | string | optional | `Adda247 and Manus need verification` | Internal review. |

Partner records are permission-sensitive. A name in the data model does not mean it is safe to publish.

## Model: TestimonialOrStory

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| title | string | yes | `[Placeholder: approved student story]` | Must be consented. |
| personName | string | optional | `[Placeholder: approved name]` | Do not publish without permission. |
| roleContext | string | optional | `Class 12 student` | Source-supported only with consent. |
| summary | text | yes | `[Placeholder: approved story summary]` | Needs approval. |
| quote | text | optional | `[Placeholder: approved quote]` | Exact wording required. |
| image | asset | optional | `[Placeholder: rights-cleared image]` | Rights required. |
| consentStatus | enum | yes | `needs consent` | approved / needs consent / do not publish. |
| source | string | yes | `[Placeholder: source]` | Required. |
| publicApproved | boolean | yes | `false` | Defaults false. |

Stories require both approval and rights handling before they can appear on the site.

## Model: CTA

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| label | string | yes | `Partner with Wasabi` | Keep action-focused. |
| href | string | yes | `/contact` | Final routing required. |
| audience | enum | optional | `institutional` | government / school / parent / student / general. |
| style | enum | yes | `primary` | primary / secondary / text. |
| trackingName | string | optional | `partner_cta_home` | Future analytics. |
| requiresVerification | boolean | yes | `false` | True if linking to external/enrollment flow. |

CTAs should reflect the user journey honestly. A CTA can invite inquiry, but not imply a confirmed outcome.

## Model: FAQ

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| question | string | yes | `Do I need to know coding to join?` | AI Learner source-supported. |
| answer | text | yes | `No. Programs are designed for beginners.` | Rewrite for final tone. |
| audience | enum | yes | `student` | student / parent / school / government / partner. |
| source | string | optional | `assets/raw/AI Learner Program - Wasabi AI _compressed.pdf` | Required if source-specific. |
| status | enum | yes | `draft` | draft / approved / needs verification. |

FAQs are useful only when they answer real questions the target audience will have. Keep them short and grounded.

## Model: ContactInfo

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| primaryEmail | string | yes | `[Placeholder: official email]` | Must be confirmed. |
| primaryPhone | string | optional | `[Placeholder: official phone]` | Must be confirmed. |
| domain | string | yes | `[Placeholder: official domain]` | Resolve domain conflict. |
| location | string | optional | `[Placeholder: official location]` | Publish only if approved. |
| inquiryTypes | array | yes | `Government`, `Schools`, `Partnership` | Source-supported from page plan. |
| privacyNote | text | yes | `[Placeholder: privacy/consent note]` | Needed before form build. |
| responseExpectation | text | optional | `[Placeholder: response timing]` | Optional but useful. |

Contact info is treated as public product data. Do not publish mixed or partial contact details without a routing decision.

## Model: VerificationStatus

| Field | Type | Required | Example | Notes |
| --- | --- | --- | --- | --- |
| status | enum | yes | `needs verification` | verified / needs verification / projected / target / placeholder / approved / do not publish. |
| reviewer | string | optional | `[Placeholder: reviewer]` | Human owner. |
| source | string | yes | `[Placeholder: source]` | Required. |
| lastReviewed | date | optional | `[Placeholder: date]` | Useful for Phase 4. |
| notes | text | optional | `Partner/logo permission pending` | Internal only if needed. |

Status values should be used consistently across content and UI so the site never implies a stronger claim than the source supports.
