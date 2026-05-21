# Phase 3: Polish, Verify & Cleanup

## Overview
- **Priority:** P2 — Cleanup and verification
- **Status:** Pending
- **Description:** Delete old tab components, verify build, update landing page links, final QA

## Requirements

### Functional
- Remove all old tab component files
- Verify landing page link to `/whitepaper` still works
- Verify middleware allows public access to `/whitepaper`
- Update any references to old tab component names
- Final build verification

### Non-Functional
- Zero build warnings related to whitepaper page
- No orphaned imports or dead code

## Related Code Files

### Delete
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/TabOverview.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/TabHowItWorks.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/TabDataModel.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/TabTechStack.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/TabScreenshots.tsx`

### Verify
- `/Users/mac/empulse/empulse-next/src/app/page.tsx` — Landing page links to `/whitepaper` ("Blueprint" nav link)
- `/Users/mac/empulse/empulse-next/src/middleware.ts` — `/whitepaper` in PUBLIC_PATHS
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/page.tsx` — No imports from deleted files

### Possibly Modify
- `/Users/mac/empulse/empulse-next/src/app/login/page.tsx` — Add `?demo=` query param handling (if not done in Phase 2)

## Implementation Steps

1. **Delete old tab components** — Remove all 5 `Tab*.tsx` files
2. **Grep for old imports** — Ensure no file references deleted components
3. **Verify landing page** — Confirm "Blueprint" link in nav still points to `/whitepaper`
4. **Verify middleware** — Confirm `/whitepaper` is in public paths
5. **Build** — Run `npx next build` and verify zero errors
6. **Visual QA** — Check page on production URL after deploy:
   - All sections render
   - Screenshots load
   - Mermaid diagrams render on scroll
   - Mobile responsive
   - Demo CTAs work
7. **Commit & push**

## Todo List
- [ ] Delete 5 old Tab*.tsx files
- [ ] Grep for stale imports/references
- [ ] Verify landing page "Blueprint" link
- [ ] Verify middleware public paths
- [ ] Run build — zero errors
- [ ] Visual QA on desktop + mobile
- [ ] Commit and push

## Success Criteria
- Build passes with zero errors
- No dead code or orphaned files
- Page accessible at `/whitepaper` without auth
- All sections render correctly on production

## Next Steps
- Consider screenshot auto-capture script (Puppeteer) for future UI changes
- Consider adding OpenGraph/meta tags for social sharing
