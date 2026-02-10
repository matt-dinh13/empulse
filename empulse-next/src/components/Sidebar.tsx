'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { handleUnauthorized } from '@/lib/clientAuth'

interface SidebarUser {
    fullName?: string
    role?: string
}

interface SidebarProps {
    user: SidebarUser | null
}

export default function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname()

    const handleLogout = async () => {
        await handleUnauthorized()
    }

    const isActive = (path: string) => pathname === path ? 'active' : ''

    const [unreadCount, setUnreadCount] = useState(0)
    const [hasTeam, setHasTeam] = useState(false)

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
        <aside className="sidebar">
            <div className="sidebar-logo-text" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', padding: '0 0.5rem', marginBottom: '1rem', display: 'inline-block' }}>
                <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
            </div>

            <nav className="sidebar-nav">
                <Link href="/dashboard/notifications" className={`sidebar-link ${isActive('/dashboard/notifications')}`} style={{ position: 'relative' }}>
                    🔔 Notifications
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
                    📊 Dashboard
                </Link>
                <Link href="/dashboard/leaderboard" className={`sidebar-link ${isActive('/dashboard/leaderboard')}`}>
                    🏆 Leaderboard
                </Link>
                <Link href="/dashboard/send-vote" className={`sidebar-link ${isActive('/dashboard/send-vote')}`}>
                    🎯 Send Vote
                </Link>
                <Link href="/dashboard/votes/received" className={`sidebar-link ${isActive('/dashboard/votes/received')}`}>
                    📥 Votes Received
                </Link>
                <Link href="/dashboard/votes/sent" className={`sidebar-link ${isActive('/dashboard/votes/sent')}`}>
                    📤 Votes Sent
                </Link>
                <Link href="/dashboard/catalog" className={`sidebar-link ${isActive('/dashboard/catalog')}`}>
                    🎁 Rewards Catalog
                </Link>
                <Link href="/dashboard/orders" className={`sidebar-link ${isActive('/dashboard/orders')}`}>
                    📦 My Orders
                </Link>

                {hasTeam && (
                    <Link href="/dashboard/my-team" className={`sidebar-link ${isActive('/dashboard/my-team')}`}>
                        👥 My Team
                    </Link>
                )}

                {(user?.role === 'super_admin' || user?.role === 'hr_admin' || user?.role === 'admin') && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <Link href="/dashboard/admin" className={`sidebar-link ${isActive('/dashboard/admin')}`}>
                            🛡️ Admin Portal
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
    )
}
