# Phase 4 — P3 Polish

> **Priority**: P3 — Nice to have, improves user experience
> **Status**: Pending
> **Estimated Files**: 5
> **Depends on**: Phase 3 complete

---

## Task 1: Add Loading Skeletons

### Problem
All pages use a generic `<div className="spinner"></div>` during loading. Skeletons provide better perceived performance and prevent layout shift.

### Fix
Create reusable skeleton components in `src/components/Skeleton.tsx`:
```tsx
export function SkeletonCard() {
    return (
        <div className="skeleton-card">
            <div className="skeleton-line skeleton-title" />
            <div className="skeleton-line" />
            <div className="skeleton-line skeleton-short" />
        </div>
    )
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
    return (
        <div className="skeleton-table">
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="skeleton-row">
                    <div className="skeleton-cell" />
                    <div className="skeleton-cell" />
                    <div className="skeleton-cell skeleton-short" />
                </div>
            ))}
        </div>
    )
}
```

Add CSS animations in `globals.css`:
```css
.skeleton-line {
    height: 1rem;
    background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 75%);
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s infinite;
    border-radius: var(--radius-sm);
}

@keyframes skeleton-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

Replace spinners in key pages:
- Dashboard: Use SkeletonCard for stats + feed
- Leaderboard: Use SkeletonTable
- Catalog: Use SkeletonCard grid
- Votes received/sent: Use SkeletonTable

### Files to modify
- `src/components/Skeleton.tsx` — New file
- `src/app/globals.css` — Skeleton animation styles
- `src/app/dashboard/page.tsx` — Replace spinner
- `src/app/dashboard/leaderboard/page.tsx` — Replace spinner
- `src/app/dashboard/catalog/page.tsx` — Replace spinner

---

## Task 2: Add prefers-reduced-motion Media Query

### Problem
Users with motion sensitivity get no accommodation. Toast animations, skeleton shimmer, and page transitions play regardless.

### Fix
Add to `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Files to modify
- `src/app/globals.css` — Add at the end of the file

---

## Task 3: Extract Common Inline Styles to CSS Classes

### Problem
Many React components use inline `style={{}}` props for common patterns:
- Feed items use `rgba(255,255,255,0.05)` backgrounds
- Value tag badges use repeated padding/border-radius/color combos
- Flex layouts with justify-content/align-items repeated
- Sidebar uses inline styles for logo, footer, badge

### Fix
Add utility classes to `globals.css`:
```css
/* Feed items */
.feed-item {
    padding: 0.75rem 1rem;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
}

/* Value tag badges */
.value-tag {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
    border-radius: 9999px;
    background: rgba(0,210,100,0.15);
    color: #00D264;
    border: 1px solid rgba(0,210,100,0.25);
}

/* Timestamp */
.timestamp {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
    white-space: nowrap;
}

/* Notification badge */
.notification-badge {
    font-size: 0.7rem;
    font-weight: 700;
    background: #ef4444;
    color: #fff;
    border-radius: 9999px;
    padding: 0.1rem 0.45rem;
    min-width: 1.2rem;
    text-align: center;
    display: inline-block;
    line-height: 1.3;
}
```

Then replace inline styles in:
- `dashboard/page.tsx` — Feed items, value tags, timestamps
- `components/Sidebar.tsx` — Logo, notification badge, footer
- `dashboard/votes/received/page.tsx` — Value tags
- `dashboard/votes/sent/page.tsx` — Value tags

### Files to modify
- `src/app/globals.css` — Add utility classes
- `src/app/dashboard/page.tsx` — Replace inline styles with classes
- `src/components/Sidebar.tsx` — Replace inline styles with classes

---

## Success Criteria

- [ ] Loading states use skeleton animations instead of spinners
- [ ] Animations respect prefers-reduced-motion
- [ ] Repeated inline style patterns extracted to CSS classes
- [ ] Build passes
- [ ] No visual regressions on desktop and mobile
