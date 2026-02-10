'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { handleUnauthorized } from '@/lib/clientAuth'

const Icon = ({ d, size = 18 }: { d: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d={d} />
    </svg>
)

// Lucide-style SVG path data
const icons = {
    bell: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
    barChart: 'M12 20V10M18 20V4M6 20v-4',
    trophy: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 22V9M14 22V9M8 2h8l-1 7H9L8 2z',
    target: 'M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0',
    inbox: 'M22 12h-6l-2 3H10l-2-3H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
    send: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
    gift: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
    package: 'M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
    settings: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z',
    users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
}

interface SidebarUser {
    fullName?: string
    role?: string
}

interface SidebarProps {
    user: SidebarUser | null
}

export default function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleLogout = async () => {
        await handleUnauthorized()
    }

    const isActive = (path: string) => pathname === path ? 'active' : ''

    const [unreadCount, setUnreadCount] = useState(0)
    const [hasTeam, setHasTeam] = useState(false)

    const closeSidebar = useCallback(() => setMobileOpen(false), [])

    useEffect(() => {
        const fetchUnreadCount = async () => {
            try {
                const res = await fetch('/api/notifications/count', { credentials: 'include' })
                if (res.ok) {
                    const data = await res.json()
                    setUnreadCount(data.unreadCount ?? 0)
                }
            } catch {
                // silently fail
            }
        }

        const checkTeam = async () => {
            try {
                const res = await fetch('/api/manager/team', { credentials: 'include' })
                if (res.ok) setHasTeam(true)
            } catch {
                // silently fail
            }
        }

        fetchUnreadCount()
        checkTeam()
        const interval = setInterval(fetchUnreadCount, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {/* Mobile header */}
            <div className="mobile-header">
                <button className="hamburger-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                    &#9776;
                </button>
                <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                    <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
                </span>
            </div>

            {/* Mobile overlay */}
            <div
                className={`sidebar-overlay ${mobileOpen ? 'sidebar-overlay-visible' : ''}`}
                onClick={closeSidebar}
            />

            <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-logo-text" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', padding: '0 0.5rem', marginBottom: '1rem', display: 'inline-block' }}>
                    <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
                </div>

                <nav className="sidebar-nav" onClick={closeSidebar}>
                    <Link href="/dashboard/notifications" className={`sidebar-link ${isActive('/dashboard/notifications')}`} style={{ position: 'relative' }}>
                        <Icon d={icons.bell} /> Notifications
                        {unreadCount > 0 && (
                            <span style={{
                                marginLeft: '0.5rem',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                background: '#ef4444',
                                color: '#fff',
                                borderRadius: '9999px',
                                padding: '0.1rem 0.45rem',
                                minWidth: '1.2rem',
                                textAlign: 'center',
                                display: 'inline-block',
                                lineHeight: '1.3',
                            }}>
                                {unreadCount > 99 ? '99+' : unreadCount}
                            </span>
                        )}
                    </Link>
                    <Link href="/dashboard" className={`sidebar-link ${isActive('/dashboard')}`}>
                        <Icon d={icons.barChart} /> Dashboard
                    </Link>
                    <Link href="/dashboard/leaderboard" className={`sidebar-link ${isActive('/dashboard/leaderboard')}`}>
                        <Icon d={icons.trophy} /> Leaderboard
                    </Link>
                    <Link href="/dashboard/send-vote" className={`sidebar-link ${isActive('/dashboard/send-vote')}`}>
                        <Icon d={icons.target} /> Send Vote
                    </Link>
                    <Link href="/dashboard/votes/received" className={`sidebar-link ${isActive('/dashboard/votes/received')}`}>
                        <Icon d={icons.inbox} /> Votes Received
                    </Link>
                    <Link href="/dashboard/votes/sent" className={`sidebar-link ${isActive('/dashboard/votes/sent')}`}>
                        <Icon d={icons.send} /> Votes Sent
                    </Link>
                    <Link href="/dashboard/catalog" className={`sidebar-link ${isActive('/dashboard/catalog')}`}>
                        <Icon d={icons.gift} /> Rewards Catalog
                    </Link>
                    <Link href="/dashboard/orders" className={`sidebar-link ${isActive('/dashboard/orders')}`}>
                        <Icon d={icons.package} /> My Orders
                    </Link>
                    <Link href="/dashboard/settings" className={`sidebar-link ${isActive('/dashboard/settings')}`}>
                        <Icon d={icons.settings} /> Settings
                    </Link>

                    {hasTeam && (
                        <Link href="/dashboard/my-team" className={`sidebar-link ${isActive('/dashboard/my-team')}`}>
                            <Icon d={icons.users} /> My Team
                        </Link>
                    )}

                    {(user?.role === 'super_admin' || user?.role === 'hr_admin' || user?.role === 'admin') && (
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <Link href="/dashboard/admin" className={`sidebar-link ${isActive('/dashboard/admin')}`}>
                                <Icon d={icons.shield} /> Admin Portal
                            </Link>
                        </div>
                    )}
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>{user?.fullName}</div>
                    <button onClick={handleLogout} className="btn" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', marginBottom: '1.5rem' }}>
                        Logout
                    </button>

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.6 }}>
                        <Image
                            src="/embedit-logo.svg"
                            alt="EmbedIT"
                            width={100}
                            height={24}
                            style={{ height: '20px', width: 'auto', marginBottom: '0.5rem', filter: 'brightness(0) invert(1)' }}
                        />
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>© 2026 EmbedIT.</div>
                    </div>
                </div>
            </aside>
        </>
    )
}
