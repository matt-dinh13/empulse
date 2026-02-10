# Brainstorm: EmPulse Full Project Review

**Date:** 2026-02-10
**Status:** Completed
**Scope:** Technical + Business Flow review of EmPulse MVP

---

## Problem Statement

EmPulse is an internal P2P reward & recognition platform (MVP complete, internal demo stage). Needs review across technical foundations, business flow, and UX to prepare for production launch with ~50-200 employees across VN + CZ regions.

---

## Findings & Recommendations

### A. Critical Technical Issues (Must Fix)

1. **Auth tokens in localStorage** - XSS vulnerable. Move to httpOnly cookies
2. **No middleware route protection** - Manual auth checks per route. Add `middleware.ts`
3. **Scheduled jobs not implemented** - Quota reset, quarterly reset, FIFO processor, SLA checker all missing. Business logic breaks without these
4. **Email notifications not implemented** - Planned but not built. Users unaware of votes received, order updates, point expiry
5. **Debug endpoints exposed** - `/api/debug/*` could allow privilege escalation in production
6. **No input validation library** - Ad-hoc validation, no zod schemas
7. **No rate limiting** - Login brute force, API abuse possible

### B. Technical Quality Improvements

8. **All pages client-rendered** - No SSR/Server Components. Slower initial loads, waterfall fetches
9. **No error boundaries** - White screen on crash. Need `error.tsx` + `global-error.tsx`
10. **No loading states** - No `loading.tsx` skeleton UI
11. **Monolithic CSS** - Single `globals.css`. Consider CSS Modules or Tailwind
12. **No unit/integration tests** - Only smoke tests exist

### C. Business Flow Gaps

13. **No recognition feed/wall** - #1 engagement driver missing. Voting feels transactional
14. **No in-app notifications** - No bell icon, no inbox
15. **No value tags on votes** - Can't track which company values are most recognized (key HR metric)
16. **Leaderboard only shows receivers** - Add sender leaderboard, team leaderboard
17. **No manager team dashboard** - Managers can't see team recognition patterns
18. **No redemption confirmation step** - Accidental redemptions possible

### D. Feature Priorities

| Priority | Feature | Category |
|----------|---------|----------|
| P0 | Scheduled jobs (cron) | Technical |
| P0 | Debug endpoints security | Technical |
| P0 | Auth hardening (httpOnly cookies) | Technical |
| P1 | Recognition feed / wall | Business |
| P1 | Email + in-app notifications | Business |
| P1 | Middleware auth | Technical |
| P1 | Input validation (zod) | Technical |
| P2 | Value tags on votes | Business |
| P2 | Manager team dashboard | Business |
| P2 | Server Components migration | Technical |
| P2 | Error boundaries + loading states | UX |
| P3 | Slack/Teams integration | Business |
| P3 | Mobile PWA | UX |
| P3 | HR export/reporting | Business |

### E. Strengths

- Solid anti-gaming rules (weekly/monthly limits, cooldowns, same-team caps)
- Clean DB schema with audit logging
- Dual-region redemption (VN automated, CZ manual) well-designed
- Configurable system_settings (not hardcoded)
- Clear employee/admin route separation

---

## Decision

User wants comprehensive implementation plan covering all areas in prioritized phases.

## Next Steps

Create detailed implementation plan via `/plan` with phased approach.
