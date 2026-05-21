# Phase 2: Single-Page Layout & Section Implementation

## Overview
- **Priority:** P1 — Core redesign work
- **Status:** Pending
- **Description:** Rewrite whitepaper page as single scrollable product page with 8 sections

## Key Insights
- Current page is ~800 lines across 6 files. Target: single page component + section components
- Keep component decomposition to avoid 500+ line single file
- Reuse Icon component pattern from Sidebar.tsx
- Mermaid must load once and init diagrams lazily via IntersectionObserver
- The `style jsx` approach is fine but consolidate shared styles

## Requirements

### Functional
- Single scrollable page with 8 sections (no tabs)
- Sticky navbar with logo + "Back to Home" link
- Smooth scroll from navbar anchor links (optional, nice-to-have)
- Real screenshots embedded inline with feature descriptions
- Mermaid diagrams for architecture + ERD
- Role cards with direct demo login CTAs
- Responsive: mobile-first, breakpoints at 768px and 1024px

### Non-Functional
- `prefers-reduced-motion` support for all animations
- No emojis — all SVG inline icons
- Correct tech stack info (Next.js 16, Custom CSS, PostgreSQL, Prisma, Supabase, Vercel)
- Page should not exceed 200 lines per component

## Architecture

### Component Structure
```
src/app/whitepaper/
├── page.tsx                    # Main page: navbar, footer, mermaid loader, section composition
├── components/
│   ├── SectionHero.tsx         # Hero + primary CTA
│   ├── SectionProblemSolution.tsx  # Problem/Solution grid
│   ├── SectionShowcase.tsx     # Product screenshots with features
│   ├── SectionHowItWorks.tsx   # 3-step flow + validation rules
│   ├── SectionAdminPortal.tsx  # Admin screenshot + capabilities
│   ├── SectionTechStack.tsx    # Tech pills + architecture + ERD
│   └── SectionRoles.tsx        # Role cards with demo CTAs
```

### Data Flow
- No state management needed (static content page)
- Mermaid initialization: `page.tsx` loads script once, each section with `.mermaid` class gets auto-initialized
- IntersectionObserver in `page.tsx` watches `.mermaid` containers, calls `mermaid.init()` when visible

## Related Code Files

### Modify
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/page.tsx` — Complete rewrite

### Create
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionHero.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionProblemSolution.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionShowcase.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionHowItWorks.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionAdminPortal.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionTechStack.tsx`
- `/Users/mac/empulse/empulse-next/src/app/whitepaper/components/SectionRoles.tsx`

### Delete (Phase 3)
- Old tab components (TabOverview, TabHowItWorks, TabDataModel, TabTechStack, TabScreenshots)

## Implementation Steps

### Step 1: Main Page Shell (`page.tsx`)

Rewrite `page.tsx` as the orchestrator:

```tsx
'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionHero from './components/SectionHero'
// ... other section imports

export default function BlueprintPage() {
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        // Load Mermaid once
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js'
        script.async = true
        script.onload = () => {
            window.mermaid?.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' })
            // Lazy init via IntersectionObserver
            observerRef.current = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        window.mermaid?.init(undefined, entry.target.querySelectorAll('.mermaid'))
                        observerRef.current?.unobserve(entry.target)
                    }
                })
            }, { rootMargin: '200px' })
            document.querySelectorAll('[data-mermaid-container]').forEach(el => {
                observerRef.current?.observe(el)
            })
        }
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    }, [])

    return (
        <div className="bp-wrapper">
            {/* Navbar - kept similar but simplified */}
            <nav>...</nav>

            <main className="bp-main">
                <SectionHero />
                <SectionProblemSolution />
                <SectionShowcase />
                <SectionHowItWorks />
                <SectionAdminPortal />
                <SectionTechStack />
                <SectionRoles />
            </main>

            {/* Footer CTA */}
            <footer>...</footer>

            {/* Global + scoped styles */}
            <style jsx global>{`...`}</style>
            <style jsx>{`...`}</style>
        </div>
    )
}
```

### Step 2: SectionHero

Keep the existing hero visual (CSS blur circles + card skeleton). Content:
- Badge: "Enterprise Grade Recognition"
- Title: "Peer-to-Peer Recognition that **Drives Engagement**"
- Subtitle: Brief description
- CTA: "Try Demo →" (link to `/login`)
- Secondary: "Read Blueprint ↓" (smooth scroll to next section)

### Step 3: SectionProblemSolution

Keep existing Problem/Solution grid structure. Changes:
- Replace `💔` emoji with SVG `heartCrack` icon
- Replace `💡` emoji with SVG `lightbulb` icon
- Keep bullet points and color coding (red/green borders)

### Step 4: SectionShowcase

NEW section — the core visual proof. 3 feature blocks:

```
Feature 1: Send Recognition
[Screenshot: send-vote.png] | Title + description + bullet points

Feature 2: Track & Compete
Title + description | [Screenshot: leaderboard.png]

Feature 3: Redeem Rewards
[Screenshot: catalog.png] | Title + description
```

- Alternating left/right layout (screenshot | text, text | screenshot)
- Use Next.js `<Image>` with proper width/height and lazy loading
- Each block: screenshot on one side, feature title + 2-3 bullet points on other
- Mobile: stack vertically (screenshot above text)

### Step 5: SectionHowItWorks

Adapt from existing TabHowItWorks. Keep:
- 3-step horizontal flow (Send → Accumulate → Redeem)
- Connecting line between steps (desktop)
- Validation rules grid (4 rules with numbered items)

Changes:
- Replace emoji icons (💌→send SVG, 💰→coins SVG, 🎁→gift SVG)
- Remove admin portal highlights (moved to SectionAdminPortal)
- Remove Mermaid process flowchart (moved to SectionTechStack)

### Step 6: SectionAdminPortal

NEW section showing admin capabilities:
- Large screenshot of analytics dashboard (full-width, with subtle border)
- Below: 3-card grid of admin features (Orders, Catalog, Analytics)
- CTA: "Try as Admin →" (link to `/login`)

### Step 7: SectionTechStack ("Under the Hood")

Merge existing TabTechStack + TabDataModel:
- **Tech pills**: Horizontal flex-wrap row of tech stack items (corrected info)
  - Next.js 16, TypeScript, Custom CSS, PostgreSQL, Prisma, Supabase, Vercel
- **Architecture diagram**: Mermaid (keep existing, correct labels)
- **ERD**: Mermaid (keep existing), wrapped in collapsible `<details>` element

Mark containers with `data-mermaid-container` for lazy initialization.

### Step 8: SectionRoles

Replace existing Roles + Demo sections with interactive role cards:

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Super Admin │  │  Employee    │  │  Manager     │
│              │  │              │  │              │
│  Full portal │  │  Vote, earn, │  │  Team mgmt,  │
│  analytics,  │  │  redeem      │  │  recognition │
│  settings    │  │              │  │              │
│              │  │              │  │              │
│ [Try Demo →] │  │ [Try Demo →] │  │ [Try Demo →] │
└──────────────┘  └──────────────┘  └──────────────┘
```

Each card links to `/login` with query params for auto-fill:
- `/login?demo=admin`
- `/login?demo=employee`
- `/login?demo=manager`

**Note:** Login page already has `handleDemoLogin()` — add query param handling to auto-trigger on mount.

## Shared Styles Strategy

Global styles in `page.tsx` `<style jsx global>`:
```css
body, html { margin: 0; padding: 0; background: #000; color: white; }
/* prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

Each section component has its own `<style jsx>` block for scoped styles. Shared CSS values:
- Font: `'Inter', sans-serif` (already loaded in app)
- Accent: `#00D264`
- Muted text: `#9ca3af`
- Card bg: `rgba(255,255,255,0.03)` with `border: 1px solid rgba(255,255,255,0.1)`
- Container: `max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;`

## Todo List
- [ ] Rewrite `page.tsx` with section composition + Mermaid lazy loader
- [ ] Create SectionHero.tsx
- [ ] Create SectionProblemSolution.tsx (adapt from TabOverview)
- [ ] Create SectionShowcase.tsx (new — screenshots + features)
- [ ] Create SectionHowItWorks.tsx (adapt from TabHowItWorks)
- [ ] Create SectionAdminPortal.tsx (new — admin screenshot + cards)
- [ ] Create SectionTechStack.tsx (merge TabTechStack + TabDataModel)
- [ ] Create SectionRoles.tsx (new — role cards with demo CTAs)
- [ ] Add `?demo=` query param handling to login page
- [ ] Verify responsive at 375px, 768px, 1024px, 1440px
- [ ] Verify Mermaid diagrams render correctly
- [ ] Verify `prefers-reduced-motion` works

## Success Criteria
- Page loads as single scroll with all 8 sections
- All screenshots render with real images
- Mermaid diagrams lazy-load on scroll
- No emojis anywhere on the page
- Tech info is accurate
- Demo CTAs link to login with auto-fill
- Responsive on mobile through desktop
- Animations respect reduced-motion preference
- Build passes (`npx next build`)

## Risk Assessment
- **Risk:** `style jsx` in 8 components = large CSS payload
  - **Mitigation:** Keep styles minimal; shared values via CSS custom properties
- **Risk:** Mermaid IntersectionObserver race condition (script not loaded yet)
  - **Mitigation:** Only create observer inside `script.onload` callback
- **Risk:** Login page query param handling may conflict with existing flow
  - **Mitigation:** Only trigger `handleDemoLogin` on mount if `?demo=` param present, don't interfere with normal login

## Security Considerations
- Demo credentials are already public (login page has demo buttons)
- No new API endpoints or data exposure
- Query param for demo login is convenience only — actual auth still required

## Next Steps
- After implementation, Phase 3 handles cleanup of old files
