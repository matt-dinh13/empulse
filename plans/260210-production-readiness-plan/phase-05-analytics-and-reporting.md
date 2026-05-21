# Phase 5: Analytics & Reporting

**Priority:** P2 - Medium
**Status:** Pending
**Depends on:** Phase 3 (value tags needed for tag analytics)

## Overview

Give admins and managers the data they need to measure engagement and manage the program.

---

## 5.1 Enhanced Admin Analytics Dashboard

**Current state:** `GET /api/admin/analytics/dashboard` exists but likely has basic stats.

### Expand with:

1. **Engagement metrics:**
   - Total votes this month / trend vs last month
   - Active voters % (users who sent at least 1 vote / total users)
   - Average votes per user
   - Peak voting days/hours

2. **Value tag distribution** (requires Phase 3.3):
   - Which tags are most used
   - Tag trends over time

3. **Regional breakdown:**
   - VN vs CZ activity comparison
   - Redemption volume by region

4. **Redemption metrics:**
   - Total points redeemed this month
   - Most popular catalog items
   - Average time from order to completion
   - Pending orders count / aging

### Files to modify:
- `src/app/api/admin/analytics/dashboard/route.ts` - add new queries
- `src/app/dashboard/admin/analytics/page.tsx` - display new charts

---

## 5.2 Manager Team Dashboard

**Problem:** Managers can't see their team's recognition patterns.

### New API Endpoint

**New:** `GET /api/manager/team`
- File: `src/app/api/manager/team/route.ts`
- Auth: any authenticated user with subordinates (check managerId references)
- Returns:
  - Team members list with vote counts (sent/received this month)
  - Team total votes given/received
  - Team members who haven't voted yet this month
  - Team recognition feed (votes within the team)

### New Page

**New:** `src/app/dashboard/my-team/page.tsx`
- Add "My Team" link to Sidebar (only visible if user has subordinates)
- Show team member cards with engagement indicators
- Highlight members who haven't been active

---

## 5.3 HR Export / Reports

### New API Endpoint

**New:** `GET /api/admin/export/[type]`
- File: `src/app/api/admin/export/[type]/route.ts`
- Types:
  - `votes` - All votes for a date range (CSV)
  - `redemptions` - All orders for a date range (CSV)
  - `tax-report` - Monthly gross-up report per CONTEXT.md (CSV)
  - `engagement` - User activity summary (CSV)

### Query params:
- `startDate`, `endDate`
- `regionId` (optional, HR admin auto-filtered)
- `format=csv` (only CSV for MVP)

### Frontend:
- Add "Export" buttons to admin analytics and orders pages
- Download triggers browser CSV download

---

## Todo

- [ ] Expand analytics dashboard API with new metrics
- [ ] Add chart visualizations to admin analytics page
- [ ] Create manager team API endpoint
- [ ] Create "My Team" dashboard page
- [ ] Add team link to Sidebar (conditional on subordinates)
- [ ] Create export API endpoint for CSV downloads
- [ ] Add export buttons to admin pages
