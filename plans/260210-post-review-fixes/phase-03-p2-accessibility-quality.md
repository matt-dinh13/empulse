# Phase 3 — P2 Accessibility + Code Quality

> **Priority**: P2 — Should fix before wide rollout
> **Status**: Pending
> **Estimated Files**: 6
> **Depends on**: Phase 2 complete

---

## Task 1: Add ARIA Attributes to Toast Component

### Problem
`src/components/Toast.tsx` lacks accessibility attributes. Screen readers won't announce toast messages.

### Fix
Add ARIA attributes to the toast container:
```tsx
<div
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    className={`toast toast-${toast.type} ${exiting ? 'toast-exit' : ''}`}
>
```

Also add a close button (accessible dismissal):
```tsx
<button
    onClick={() => removeToast(toast.id)}
    aria-label="Dismiss notification"
    className="toast-close"
>
    &times;
</button>
```

Add pause-on-hover behavior:
```tsx
const [paused, setPaused] = useState(false)

// In useEffect timer:
if (!paused) {
    timer = setTimeout(() => { ... }, 3000)
}

// On the toast div:
onMouseEnter={() => setPaused(true)}
onMouseLeave={() => setPaused(false)}
```

### Files to modify
- `src/components/Toast.tsx` — Add ARIA attrs, close button, pause-on-hover
- `src/app/globals.css` — Add `.toast-close` styles

---

## Task 2: Add Focus Trap + Keyboard Handling to Catalog Modal

### Problem
Catalog confirmation modal (`src/app/dashboard/catalog/page.tsx:171-228`) lacks:
- Focus trap (tab cycles outside modal)
- ESC key to close
- `aria-modal="true"` and `role="dialog"`
- Auto-focus on open

### Fix
Add keyboard handler and ARIA:
```tsx
{confirmItem && (
    <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        style={{ /* overlay styles */ }}
        onClick={() => setConfirmItem(null)}
        onKeyDown={(e) => {
            if (e.key === 'Escape') setConfirmItem(null)
        }}
    >
        <div /* inner card */ onClick={(e) => e.stopPropagation()}>
            <h3 id="confirm-title">Confirm Redemption</h3>
            {/* ... */}
            <button ref={cancelRef} /* auto-focus on mount */>Cancel</button>
        </div>
    </div>
)}
```

Use a `useEffect` to focus the Cancel button on mount and trap tab:
```tsx
useEffect(() => {
    if (confirmItem) {
        cancelRef.current?.focus()
    }
}, [confirmItem])
```

### Files to modify
- `src/app/dashboard/catalog/page.tsx` — Lines 171-228

---

## Task 3: Fix Mobile Landing Page Navigation

### Problem
`src/app/page.tsx:422` hides nav links on mobile with no hamburger menu alternative:
```css
@media (max-width: 900px) {
    .nav-links { display: none; }
}
```

### Fix
Add a hamburger toggle button and mobile menu. In `page.tsx`:
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// In the navbar:
<button
    className="mobile-menu-toggle"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    aria-label="Toggle navigation menu"
    aria-expanded={mobileMenuOpen}
>
    <span className="hamburger-line" />
    <span className="hamburger-line" />
    <span className="hamburger-line" />
</button>

{mobileMenuOpen && (
    <div className="mobile-nav">
        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
        <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Try Demo</Link>
    </div>
)}
```

Add CSS for hamburger and mobile nav in `globals.css`:
```css
.mobile-menu-toggle {
    display: none;
    /* ... hamburger styles */
}

@media (max-width: 900px) {
    .mobile-menu-toggle { display: flex; }
    .nav-links { display: none; }
    .mobile-nav {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        /* ... slide-down styles */
    }
}
```

### Files to modify
- `src/app/page.tsx` — Navbar section (lines 42-54)
- `src/app/globals.css` — Add mobile menu styles

---

## Task 4: Replace Emojis with SVG Icons in Sidebar

### Problem
All 11 sidebar navigation links use emojis as icons (e.g., `📊 Dashboard`, `🎯 Send Vote`). This is unprofessional and renders inconsistently across platforms.

### Fix
Create a simple inline SVG icon set or use Heroicons (already common in Next.js projects). Since the project has no icon library, use simple inline SVGs to avoid adding dependencies.

Create `src/components/Icons.tsx` with minimal SVG icons:
```tsx
export function DashboardIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    )
}
// ... similar for Bell, Trophy, Target, Inbox, Send, Gift, Package, Settings, Users, Shield
```

Update Sidebar.tsx to import and use these icons instead of emojis.

Also update other pages that use emojis in headings:
- `dashboard/page.tsx`: "🎯 Send a Vote", "🎁 Browse Rewards"
- `dashboard/send-vote/page.tsx`: "🎯 Send a Vote"
- `dashboard/catalog/page.tsx`: "🎁 Rewards Catalog"

### Files to modify
- `src/components/Icons.tsx` — New file, ~100 lines
- `src/components/Sidebar.tsx` — Replace emoji prefixes with icon components
- `src/app/dashboard/page.tsx` — Quick action button text
- `src/app/dashboard/send-vote/page.tsx` — Page title
- `src/app/dashboard/catalog/page.tsx` — Page title

---

## Success Criteria

- [ ] Toast has role="alert", aria-live, close button, pause-on-hover
- [ ] Modal has role="dialog", aria-modal, ESC key, focus management
- [ ] Landing page has working mobile hamburger menu
- [ ] No emojis used as navigation icons
- [ ] Build passes
- [ ] All pages render correctly on mobile (375px)
