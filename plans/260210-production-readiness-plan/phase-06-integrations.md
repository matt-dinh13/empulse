# Phase 6: Integrations & Nice-to-haves

**Priority:** P3 - Low (post-launch improvements)
**Status:** Pending
**Depends on:** Phase 3, Phase 4

## Overview

Post-launch enhancements to expand reach and improve experience. Only pursue after core platform is stable and adopted.

---

## 6.1 Slack / Teams Integration

**Why:** Employees spend most time in Slack/Teams. Meet them where they are.

### Minimal viable integration:
- **Incoming webhook:** When a vote is sent, post a message to a designated Slack channel
  - "🎉 Alice recognized Bob: 'Great work on the redesign!' +10 points"
- **No Slack bot / commands** for MVP (complex, requires Slack app review)

### Implementation:
- Add `SLACK_WEBHOOK_URL` env var
- Create `src/lib/slack.ts` with `postToSlack(message)` helper
- Call from `POST /api/votes` after successful vote (non-blocking, fire-and-forget)

### Teams alternative:
- Same pattern, use Teams Incoming Webhook connector

---

## 6.2 Mobile-Optimized PWA

**Why:** Some employees may want to recognize peers from phone.

### Changes:
- Add `manifest.json` for PWA (app name, icons, theme color)
- Add `<meta name="viewport">` (likely already present)
- Add service worker for offline caching of static assets
- Test responsive layout on mobile viewports (sidebar becomes hamburger menu)

### Scope:
- NOT a native app. Just make the web app work well on mobile.
- Sidebar should collapse to hamburger menu on small screens
- Forms and cards should stack vertically

---

## 6.3 Server Components Migration

**Why:** Performance improvement. Reduce client-side JS, faster initial loads.

### Candidates for Server Components (remove `'use client'`):
- Dashboard page (fetch data server-side)
- Leaderboard page
- Catalog browsing page
- Admin pages that are mostly read-only

### Keep as Client Components:
- Send Vote form (interactive)
- Admin order actions (approve/reject buttons)
- Notification panel (real-time state)
- Settings page (form interactions)

### Approach:
- Convert one page at a time
- Replace `fetch()` + `useEffect` with direct Prisma calls in Server Components
- Use `Suspense` + `loading.tsx` for streaming

---

## 6.4 Email Notifications Enhancement

**Post Phase 2 email foundation:**
- Add email templates with em/pulse branding
- HTML emails with logo, colors, CTA buttons
- Email preferences page (let users opt out of specific notification types)

---

## 6.5 Reciprocal Vote Admin View

**Current:** Reciprocal votes are flagged in audit_log but no admin UI to review them.

### New:
- Add "Flagged Votes" tab in admin analytics
- Query audit_log WHERE action = 'RECIPROCAL_VOTE_DETECTED'
- Show sender, receiver, both vote messages, dates
- Allow admin to dismiss flag or investigate

---

## Todo

- [ ] Create Slack webhook integration
- [ ] Add PWA manifest and service worker
- [ ] Test and fix mobile responsive layout
- [ ] Convert suitable pages to Server Components
- [ ] Create branded email templates
- [ ] Add email preferences for users
- [ ] Build reciprocal vote admin review UI

## Notes

These features should be prioritized based on actual user feedback after launch. Don't build Slack integration if nobody asks for it. Don't optimize for mobile if everyone uses desktop. Listen to users first.
