# Post-Review Fixes Plan

> **Date**: 2026-02-10
> **Status**: Ready for Implementation
> **Source**: Code Review (23 issues) + UI/UX Review
> **Project**: /Users/mac/empulse/empulse-next

---

## Overview

Prioritized fix plan based on code security review and UI/UX audit. 4 phases ordered by severity.

| Phase | Priority | Focus | Files |
|-------|----------|-------|-------|
| [Phase 1](./phase-01-p0-critical-security.md) | P0 | Critical Security | 4 |
| [Phase 2](./phase-02-p1-security-and-production.md) | P1 | Security High + Production Blockers | 8 |
| [Phase 3](./phase-03-p2-accessibility-quality.md) | P2 | Accessibility + Code Quality | 6 |
| [Phase 4](./phase-04-p3-polish.md) | P3 | UX Polish | 5 |

---

## Phase Summary

### Phase 1 — P0 Critical Security (3 tasks)
- [ ] Fix race conditions in votes + orders (move balance checks inside transactions with row locking)
- [ ] Block role escalation in registration endpoint
- [ ] Remove debug endpoints and debug UI section from production

### Phase 2 — P1 Security + Production Blockers (6 tasks)
- [ ] Remove hardcoded demo passwords from login page
- [ ] Harden login error handling (generic messages, remove stack traces)
- [ ] Tighten cookie security (sameSite strict)
- [ ] Add rate limiting to registration endpoint
- [ ] Fix cron endpoint middleware (verify CRON_SECRET before passing through)
- [ ] Fix TypeScript error in notifications.ts

### Phase 3 — P2 Accessibility + Code Quality (4 tasks)
- [ ] Add ARIA attributes to Toast component
- [ ] Add focus trap + keyboard handling to catalog confirmation modal
- [ ] Fix mobile landing page navigation (hamburger menu)
- [ ] Replace emojis with SVG icons in Sidebar

### Phase 4 — P3 Polish (3 tasks)
- [ ] Add loading skeletons to replace spinners
- [ ] Add prefers-reduced-motion media query
- [ ] Extract common inline styles to CSS classes

---

## Dependencies

```
Phase 1 (P0) → Phase 2 (P1) → Phase 3 (P2) → Phase 4 (P3)
```

Each phase should be built, smoke-tested, and committed before proceeding to the next.
