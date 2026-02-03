# EmPulse Blueprint Guide (AI Handoff)

## Context
Project: EmPulse (P2P Reward and Recognition system).
Primary stack decision: Next.js full-stack in `empulse-next`.
Priority order: Demo -> Production -> Cleanup.
Demo scope: Employee core + Admin core + Whitepaper.
Demo timeline: 1 week.
Deployment: deploy directly (no separate envs for concept).

## Goals
- Deliver a working public demo within 1 week.
- Keep production-readiness tasks queued after demo.
- Cleanup redundant stacks after demo if production proceeds.

## Non-Goals (for demo phase)
- Full security hardening.
- Exhaustive test coverage.
- Migration of Express/Vite to production.

## Key Decisions (Do Not Change)
- Use Next.js app as the source of truth.
- Keep demo scope to Employee core + Admin core + Whitepaper.
- Deploy directly (no staging/prod split).

## Repo Map (Primary Paths)
- Next app: `empulse-next/`
- API routes (Next): `empulse-next/src/app/api/`
- Auth helpers: `empulse-next/src/lib/auth.ts`
- Prisma schema: `empulse-next/prisma/schema.prisma`
- Seed script: `empulse-next/prisma/seed.js`
- Whitepaper UI: `empulse-next/src/app/whitepaper/`
- Send Vote UI: `empulse-next/src/app/dashboard/send-vote/page.tsx`
- Legacy stacks (not for demo): `backend/`, `frontend/`

## Current Known Mismatches
- Role values mismatch: `admin` vs `super_admin`/`hr_admin`.
- Reward type mismatch: seed uses `voucher`, schema expects `digital_voucher` or `physical_item`.
- Debug endpoints exist and are unsafe for public deployment.

## Phase 1 (Demo in 1 Week)

### Task Table
| ID | Task | Steps | Files | Definition of Done |
| --- | --- | --- | --- | --- |
| D1 | Align role enums | Standardize roles to `employee`, `hr_admin`, `super_admin`. Update seed admin role and any checks. | `empulse-next/prisma/seed.js`, `empulse-next/src/lib/auth.ts`, admin pages if needed | Admin user can access admin pages, non-admin cannot. |
| D2 | Fix rewardType enum | Update seed catalog to use `digital_voucher` and `physical_item` only. | `empulse-next/prisma/seed.js`, `empulse-next/prisma/schema.prisma` | Catalog loads without errors; redeem flow works. |
| D3 | Protect debug endpoints | Add guard (e.g. `DEMO_DEBUG_KEY`) or disable debug routes for public deploy. | `empulse-next/src/app/api/debug/*`, `empulse-next/src/app/api/env-check/route.ts` | Debug endpoints require secret or are removed. |
| D4 | Seed demo data | Ensure regions, teams, users, wallets, catalog, vouchers exist. | `empulse-next/prisma/seed.js` | After seed, login and demo flows succeed. |
| D5 | Stabilize Send Vote flow | Validate quota update, weekly tracking, and UI errors. | `empulse-next/src/app/dashboard/send-vote/page.tsx`, vote APIs | Vote sends, quota decrements, UI updates. |
| D6 | Admin core screens | Ensure users list, orders list, analytics dashboard load data. | `empulse-next/src/app/api/admin/*` | Admin screens show data without errors. |
| D7 | Whitepaper completion | Finalize content for Overview, How it Works, Data Model tabs. | `empulse-next/src/app/whitepaper/**` | `/whitepaper` renders cleanly. |
| D8 | Deploy demo | Deploy Next app to Vercel with direct env values. | Vercel project settings | Demo URL live and stable. |

### Phase 1 DoD (All Must Pass)
1. Demo URL loads landing and whitepaper.
2. Login works with seeded accounts.
3. Employee can send vote, see sent/received, redeem reward.
4. Admin can view users, orders, analytics.

## Phase 2 (Production Hardening After Demo)
| ID | Task | Steps | Files | Definition of Done |
| --- | --- | --- | --- | --- |
| P1 | Remove debug endpoints | Delete or fully lock `/api/debug/*` and `/api/env-check`. | `empulse-next/src/app/api/debug/**`, `empulse-next/src/app/api/env-check/route.ts` | No public debug access. |
| P2 | Secret management | Rotate secrets and enforce required envs on boot. | `.env`, `empulse-next/src/lib/auth.ts` | App fails fast if secrets missing. |
| P3 | Voucher/order integrity | Normalize voucher relations and ensure refund/rollback. | `empulse-next/prisma/schema.prisma`, order APIs | Orders never leave inventory inconsistent. |
| P4 | Logging and monitoring | Add error logging and structured logs. | API routes | Errors are visible and traceable. |

## Phase 3 (Cleanup)
| ID | Task | Steps | Files | Definition of Done |
| --- | --- | --- | --- | --- |
| C1 | Archive or remove legacy stacks | Remove or move `backend/` and `frontend/` out of primary flow. | Repo root | Only Next.js remains as active stack. |
| C2 | Single schema source | Remove duplicate schemas and document source of truth. | `empulse-next/prisma/schema.prisma` | One schema, one migration path. |
| C3 | Docs update | Update README and deployment notes. | `README.md` | Docs reflect Next-only architecture. |

## Phase 4 (Optional Enhancements)
- Add caching for catalog and analytics.
- Improve UI polish and animations.
- Add CI for lint and smoke tests.

## Demo Accounts (Seeded)
- Admin: `admin@empulse.com` / `password123`
- User: `nguyen.van.a@empulse.com` / `password123`

## Quick Start (Demo)
1. Install deps: `npm install` in `empulse-next`.
2. Seed DB: `npm run seed`.
3. Run dev: `npm run dev`.
4. Deploy to Vercel: connect repo and set envs directly.

## Smoke Test Checklist
1. Login as admin, open admin users list.
2. Login as user, send vote to another user.
3. Check quota decrement and points increment.
4. Redeem catalog item and see order status.
5. Open `/whitepaper` and verify all tabs.

## Risks and Mitigations
- Public demo with debug endpoints: lock or remove them.
- Seed mismatch breaks UI: fix enum values first.
- Role mismatch breaks admin access: standardize roles.

## Handoff Notes
- Follow Phase 1 tasks in order for demo stability.
- Do not modify legacy stacks during demo unless needed.
