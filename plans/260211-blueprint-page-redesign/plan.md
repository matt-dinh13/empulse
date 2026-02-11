---
title: "Blueprint Page Full Redesign"
description: "Redesign /whitepaper from 5-tab whitepaper to single scrollable product page with real screenshots and demo CTAs"
status: pending
priority: P1
effort: 6h
branch: main
tags: [frontend, redesign, ui-ux]
created: 2026-02-11
---

# Blueprint Page Full Redesign

## Overview

Convert the current 5-tab whitepaper page (`/whitepaper`) into a single scrollable product page optimized for two audiences: technical evaluators (architecture/data model) and demo explorers (screenshots/CTAs).

## Current State

- 5 tab components: TabOverview, TabHowItWorks, TabDataModel, TabTechStack, TabScreenshots
- Main page: `src/app/whitepaper/page.tsx` (229 lines + ~140 lines style jsx)
- Components: `src/app/whitepaper/components/` (5 files, ~570 lines total)
- Real screenshots exist in `/public/` (5 files, 50-66KB each)
- Tab code marks all screenshots as `isReal: false` (stale code)
- Emojis used as icons throughout
- Mermaid loaded redundantly per tab
- Tech info outdated (says Next.js 14, Tailwind — actually Next.js 16, custom CSS)
- Demo credentials in plain text

## Phases

| # | Phase | Status | Link |
|---|-------|--------|------|
| 1 | Capture screenshots & prepare assets | Pending | [phase-01](./phase-01-screenshot-capture.md) |
| 2 | Build single-page layout & sections | Pending | [phase-02](./phase-02-page-implementation.md) |
| 3 | Polish, verify, cleanup old files | Pending | [phase-03](./phase-03-polish-and-cleanup.md) |

## Dependencies

- Real screenshots must be captured before page implementation (Phase 1 → 2)
- Existing screenshots in `/public/` may be usable if recent enough
- Mermaid.js CDN dependency for diagrams
- SVG icon patterns from `src/components/Sidebar.tsx` (Icon component + path data)

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Page structure | Single scroll | Tabs hide content; scroll performs better for both audiences |
| CSS approach | Scoped `style jsx` | Consistent with current page; self-contained |
| Mermaid | Single load, lazy init via IntersectionObserver | Prevents duplicate scripts + faster initial load |
| Icons | Inline SVG (Lucide paths) | Consistent with app; no emojis on public page |
| Screenshots | Real captures from production | Authenticity > mockups |
| Business model | Remove | Wrong audience for product page |
| Demo access | Role cards with direct login links | Interactive > static credentials |
| Tech info | Correct to actual stack | Accuracy = credibility |
