# Wasabi AI Website

Version 1 website planning and implementation for Wasabi AI.

This repository contains the phased planning record, source materials, WireMD wireframes, structured content, and a Next.js implementation for the public Wasabi website.

## Current Scope

- Brand foundation and review notes
- Site strategy and WireMD wireframes
- Visual system and component planning
- Next.js, TypeScript, and Tailwind CSS implementation
- Placeholder-safe content for unverified claims, metrics, contacts, testimonials, and partner-sensitive material

## Project Structure

```txt
app/                 Next.js App Router pages and root layout
components/          Reusable layout, section, and UI components
content/             Typed site content used by pages and components
lib/                 Shared implementation utilities
public/assets/       Public web assets used by the site
styles/              Global CSS and design tokens
planning/            Phase reviews, strategy, brand, design, and build planning
wireframes/          WireMD page wireframes
docs/source/         Source-grounded extracted material and review inputs
docs/generated/      Generated or derived analysis outputs
assets/raw/          Original source assets and documents
assets/processed/    Processed assets that may be used after review
```

## Development

```bash
npm install
npm run dev
```

The app runs locally with Next.js. Use `npm run build` before merge when production readiness matters.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Lockfile Policy

This is an npm project. Commit `package-lock.json` so dependency versions are reproducible across local development, pull requests, and deployment.

## Claim Safety

Do not publish unsupported government, institutional, partner, impact, testimonial, award, or outcome claims.

Use visible placeholders for missing or unverified content, for example:

```txt
[Placeholder: verified impact metric needed]
```

Before replacing a placeholder, confirm the source in `docs/source/`, `assets/raw/`, `assets/processed/`, or the relevant planning review file.

## Phase Reviews

The phase review files in `planning/` are part of the project record. Read the latest relevant review before changing strategy, content, visual direction, or implementation scope.
