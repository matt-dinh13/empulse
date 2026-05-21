# Phase 1: Screenshot Capture & Asset Preparation

## Overview
- **Priority:** P1 — Screenshots are the visual backbone of the redesign
- **Status:** Pending
- **Description:** Capture real screenshots from production app, prepare SVG icons, verify existing assets

## Key Insights
- 5 real screenshots already exist in `/public/` at 1024x575 resolution
- Missing screenshots: Admin Analytics, System Settings
- Need to check if existing screenshots reflect current UI (post-review fixes changed layout)
- Screenshots should be captured at consistent viewport (1280x720 recommended for 16:9)

## Requirements

### Functional
- Capture 7 screenshots total from production (`https://empulse-delta.vercel.app`)
- Each screenshot at 1280x720 viewport, PNG format
- Screenshots needed:
  1. `screenshot-dashboard.png` — Employee dashboard with feed
  2. `screenshot-leaderboard.png` — Leaderboard table view
  3. `screenshot-send-vote.png` — Send vote form
  4. `screenshot-catalog.png` — Rewards catalog grid
  5. `screenshot-admin-orders.png` — Admin orders table (newly converted)
  6. `screenshot-admin-analytics.png` — Admin analytics dashboard (NEW)
  7. `screenshot-admin-settings.png` — System settings page (NEW)

### Non-Functional
- Images optimized (under 100KB each if possible)
- Consistent viewport and scaling across all captures

## Related Code Files
- **Modify:** None in this phase
- **Create:** 2 new screenshot files in `/public/`
- **Verify:** 5 existing screenshot files in `/public/`

## Implementation Steps

1. **Check existing screenshots** — View each existing screenshot to verify it reflects current UI
2. **Capture missing screenshots** using browser automation or manual capture:
   - Login as admin (`admin@empulse.com / password123`)
   - Navigate to `/dashboard/admin/analytics` → capture
   - Navigate to `/dashboard/admin/settings` → capture
3. **Re-capture outdated screenshots** if they don't match current UI
4. **Prepare SVG icon paths** — Collect Lucide icon paths needed for the blueprint page:
   - `heartCrack` (problem section)
   - `lightbulb` (solution section)
   - `mail` / `send` (vote step)
   - `coins` (accumulate step)
   - `gift` (redeem step)
   - `shield` (validation rules)
   - `layout` / `barChart` (admin portal)
   - `server` / `database` / `code` (tech stack)

## Todo List
- [ ] Verify 5 existing screenshots match current UI
- [ ] Capture admin analytics screenshot
- [ ] Capture admin settings screenshot
- [ ] Re-capture any outdated screenshots
- [ ] Compile list of SVG icon paths needed

## Success Criteria
- All 7 screenshots exist in `/public/` at consistent resolution
- Screenshots reflect current UI (post-review fixes)
- SVG icon path data collected for Phase 2

## Risk Assessment
- **Risk:** Production app may not have data for analytics screenshot
  - **Mitigation:** Use demo data already seeded
- **Risk:** Screenshots may be too large for initial page load
  - **Mitigation:** Use Next.js `<Image>` with `priority` for above-fold, lazy loading for below-fold

## Next Steps
- Phase 2 depends on screenshots being ready
- Icon paths feed directly into Phase 2 section components
