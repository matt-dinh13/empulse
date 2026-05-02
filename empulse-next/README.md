# EmPulse - P2P Reward & Recognition System

EmPulse is a production-grade Peer-to-Peer (P2P) employee recognition and rewards platform. It allows employees to send recognition votes to their colleagues based on core value tags, driving a positive and collaborative company culture.

## System Architecture
- **Framework:** Next.js 16 (App Router, Server Actions, API Routes)
- **Database:** Supabase PostgreSQL with Prisma ORM
- **Authentication:** Custom JWT-based stateless auth strictly utilizing `HttpOnly` cookies (preventing XSS).
- **Caching & Rate Limiting:** Upstash Redis for serverless-ready multi-instance caching (with an in-memory fallback mechanism).
- **Observability:** Structured JSON Logging integrated into all API routes.
- **Deployment:** Vercel (Edge/Serverless optimized)

## Core Features
- **Role-Based Access Control (RBAC):** Super Admin, HR Admin, Manager, and Employee tiers.
- **Recognition Quotas:** Monthly/Weekly dynamic quotas restricting vote spam.
- **Rewards Catalog & Orders:** Employees can convert recognition points into physical/digital rewards.
- **Admin Analytics:** Comprehensive reporting, user management, and configuration system.
- **Leaderboards & Realtime Feeds:** Fast, cached API endpoints serving dynamic organizational data.

## Recent Audit & Production Hardening (May 2026)
The project recently underwent a comprehensive Production Hardening phase:
1. **Security:** Implementation of strict Security Headers (CSP, HSTS, X-Frame-Options) and complete removal of Authorization header token fallbacks.
2. **Performance:** Migration from synchronous `Map` objects to asynchronous `@upstash/redis` to fully support Vercel serverless horizontal scaling.
3. **Observability:** Replacement of standard `console.error` with a custom `Logger` class for ELK/Datadog log shipping compatibility.
4. **Reliability:** Connection poolers (IPv4) configured for Supabase. Zero dead code. Passed 47/47 API Integration Tests.

> **Audit Logs:** Historical audit reports (`PRODUCTION_ASSESSMENT.md`, `TEST_REPORT.md`, `REPORT.md`) have been archived in the `/docs/audit/` directory.

## Getting Started Locally

1. Install dependencies:
```bash
npm install
```
2. Configure `.env` (requires Supabase IPv4 Pooler URL and optionally Upstash Redis).
3. Generate Prisma client:
```bash
npx prisma generate
```
4. Run development server:
```bash
npm run dev
```
