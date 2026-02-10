# EmPulse Production Readiness Review (Phases 1–6)

Scope: Verify Phases 1–6 after recent implementation. Paths relative to `/Users/mac/empulse/empulse-next/`.

## Executive Summary
- **Fix before launch (P0):** viewport meta; feed caching; fix “View All” dead link; add missing notification triggers (order completion + quarterly warning); return `valueTags` in vote POST response.
- **Deferred / non-blocking:** CSRF tokens (SameSite=Lax, same-origin); CORS headers (same-origin app); cron retry/locking (Vercel cron, idempotent jobs); server-component migration; service worker; branded email templates/preferences; peak-time/avg-votes analytics; tax-report export (needs business spec).

## Phase 1 Findings (recap)
| # | Status | Finding | Location | Action |
|---|--------|---------|----------|--------|
| P1 | DEFER | CSRF tokens absent; SameSite=Lax cookies on same-origin mitigate CSRF for state-changing routes. | (no CSRF utilities in `src/`) | Optional unless cross-origin clients or unsafe GET mutations are introduced. |
| P2 | DEFER | CORS headers absent; same-origin app. | (no CORS headers in middleware/routes) | Leave off unless cross-origin access is required; adding CORS could widen surface if misconfigured. |
| P3 | PASS | Auth hardening (JWT secret req’d, cookies httpOnly/secure/lax). | `src/lib/auth.ts:4-105`, `src/middleware.ts:6-78` | — |
| P4 | PASS | Rate limits on auth/votes (in-memory). | `src/lib/rateLimit.ts:1-28`, `src/app/api/auth/login/route.ts:20-24`, `src/app/api/votes/route.ts:131-135` | Optional Redis for multi-instance. |
| P5 | PASS | Zod validation on inputs. | `src/lib/validations.ts:5-68`, `src/app/api/votes/route.ts:137-142` | — |
| P6 | PASS | Env guard & debug safety. | `src/lib/auth.ts:4-8`, `src/app/api/env-check/route.ts:1-45` | — |

## Phase 2 Findings (recap)
| # | Status | Finding | Location | Action |
|---|--------|---------|----------|--------|
| C1 | PASS | Vercel cron schedules defined. | `vercel.json:1-9` | — |
| C2 | PASS | Cron auth/log helper. | `src/lib/cron.ts:4-27` | — |
| C3 | PASS | Handlers authorized, transactional, log executions. | `src/app/api/cron/*/route.ts` | — |
| C4 | DEFER | No retry/backoff on cron failures. | cron handlers | Acceptable on Vercel; rerun manually if needed. |
| C5 | DEFER | No distributed locking/lease. | cron handlers | Vercel cron is single-execution; idempotent jobs suffice. |
| C6 | NOTE | Cron auth via shared secret only. | `src/lib/cron.ts:4-8` | Rotate/store secret; optional IP allowlist/signed URL. |

## Phase 3 Findings (recap)
| # | Status | Finding | Location | Action |
|---|--------|---------|----------|--------|
| E1 | P0 | Feed caching missing (spec: ~30s TTL). | `src/app/api/feed/route.ts:7-76` | Add caching (memoryCache or cache headers). |
| E2 | P0 | Dashboard feed exists; “View All” dead link; no feed page. | `src/app/dashboard/page.tsx:159-221` | Wire link to feed page or remove. |
| E3 | P0 | Notifications missing for order completion + quarterly warning cron. | `src/app/api/admin/orders/[id]/complete/route.ts:1-40`; `src/app/api/cron/quarterly-warning/route.ts:1-86` | Call `createNotification` for ORDER_COMPLETED and quarterly expiry warnings. |
| E4 | P0 | Vote POST response omits value tags; leaderboard doesn’t return tags. | `src/app/api/votes/route.ts:214-333`; `src/app/api/leaderboard/route.ts:7-135` | Include `valueTags` in vote response and (optionally) leaderboard. |
| E5 | PASS | Value tag models/seeds/GET API/UI/badges implemented. | `prisma/schema.prisma:381-407`; `prisma/seed.js:260-279`; `src/app/api/value-tags/route.ts:7-19`; `src/app/dashboard/send-vote/page.tsx:35-229`; `src/app/dashboard/page.tsx:175-214` | — |
| E6 | PASS | Leaderboard type tabs implemented. | `src/app/api/leaderboard/route.ts:7-135`; `src/app/dashboard/leaderboard/page.tsx:27-186` | — |
| E7 | PASS | Redemption confirmation dialog implemented. | `src/app/dashboard/catalog/page.tsx:27-228` | — |

## Phase 4 Findings
| # | Status | Finding | Location | Action |
|---|--------|---------|----------|--------|
| U1 | PASS | Error boundaries (global, dashboard, admin). | `src/app/global-error.tsx:3-36`; `src/app/dashboard/error.tsx:5-25`; `src/app/dashboard/admin/error.tsx:5-25` | — |
| U2 | PASS | Loading states (dashboard, leaderboard, send-vote, votes/received, votes/sent, catalog, orders, admin). | `src/app/dashboard/*/loading.tsx` | — |
| U3 | PASS | Not-found page. | `src/app/not-found.tsx:3-14` | — |
| U4 | PASS | Client fetch error handling with try/catch + inline errors/toasts. | e.g., `src/app/dashboard/page.tsx:51-222`; `send-vote/page.tsx:40-256`; `leaderboard/page.tsx:34-182`; `catalog/page.tsx:38-228`; `orders/page.tsx:31-124`; admin pages under `src/app/dashboard/admin/*` | — |
| U5 | PASS | Toast component and usage for vote/order/admin/settings actions. | `src/components/Toast.tsx`; used in `send-vote/page.tsx`, `catalog/page.tsx`, `admin/orders/page.tsx`, `admin/settings/page.tsx` | — |
| U6 | PASS | Skeleton CSS present. | `src/app/globals.css:1366-1405` | — |

## Phase 5 Findings
| # | Status | Finding | Location | Action |
|---|--------|---------|----------|--------|
| A1 | DEFER | Admin analytics lacks avg votes/user and peak time metrics; UI has no charts for these. | `src/app/api/admin/analytics/dashboard/route.ts:27-172`; `src/app/dashboard/admin/analytics/page.tsx:85-297` | P2/P3 enhancement if needed. |
| A2 | PASS | Manager team dashboard (API + UI + sidebar link). | `src/app/api/manager/team/route.ts:8-107`; `src/app/dashboard/my-team/page.tsx:39-204`; `src/components/Sidebar.tsx:27-111` | — |
| A3 | DEFER | Exports missing `tax-report`; UI lacks button. | `src/app/api/admin/export/[type]/route.ts:34-145`; `src/app/dashboard/admin/analytics/page.tsx:85-127` | Needs business spec (rates/formula/period). |

## Phase 6 Findings
| # | Status | Finding | Location | Action |
|---|--------|---------|----------|--------|
| I1 | PASS | Slack webhook integration (fire-and-forget on vote). | `src/lib/slack.ts`; `src/app/api/votes/route.ts` | — |
| I2 | PARTIAL | PWA: manifest present; **meta viewport missing** (P0); **service worker absent** (defer). Responsive sidebar exists. | `public/manifest.json`; `src/app/layout.tsx`; `src/components/Sidebar.tsx` | Add viewport meta now; service worker optional later. |
| I3 | DEFER | Server component migration not done (pages still `'use client'`). | `src/app/dashboard/page.tsx`; `.../leaderboard/page.tsx`; `.../catalog/page.tsx`; `.../dashboard/admin/analytics/page.tsx` | Optional performance work later. |
| I4 | DEFER | Email enhancements missing (no branded templates, no preferences UI/logic). | `src/lib/email.ts` | Nice-to-have; current helper works for low volume. |
| I5 | PASS | Reciprocal vote admin view/tab exists. | `src/app/dashboard/admin/flagged-votes/page.tsx`; `src/app/dashboard/admin/layout.tsx`; audit logs from `src/app/api/votes/route.ts:293-318` | — |

## Recommended Fix Order (P0 before launch)
1) Add viewport meta tag to `src/app/layout.tsx`.
2) Add feed caching (~30s TTL) to `/api/feed`.
3) Fix “View All” dead link (wire to feed page or remove).
4) Add missing in-app notification triggers (order completion + quarterly warning cron).
5) Include `valueTags` in vote POST response (and optionally leaderboard).

## Post-launch (P2–P3)
- Tax-report export (needs business spec for formulas/periods).
- Avg votes/user and peak time analytics + charts.
- Branded email templates; email preference management.
- Service worker/offline/push support.
- Server component migration.

## Skip / Not applicable for launch
- CSRF tokens (SameSite=Lax, same-origin).
- CORS headers (same-origin app, no cross-origin consumers).
- Cron retry/backoff and distributed locking (Vercel cron single-execution; jobs are idempotent).

## Verification Checklist (revised)
**Before launch:**
- [ ] Viewport meta tag added to `src/app/layout.tsx`
- [ ] `/api/feed` uses `memoryCache` with ~30s TTL
- [ ] “View All” feed link either removed or wired to a feed page
- [ ] In-app notifications fire on order completion and quarterly warning cron
- [ ] Vote POST response includes `valueTags`

**Post-launch (P2–P3):**
- [ ] `tax-report` export available via API and UI (requires business spec)
- [ ] Admin analytics includes avg votes/user and peak time metrics/charts
- [ ] Branded email templates; email preferences page
- [ ] Service worker for offline/push notification support

## Notes
- Ensure migrations for InAppNotification/ValueTag/VoteValueTag are applied in deployed environments.
- Keep `enable_public_wall` respected after adding feed caching/page.
