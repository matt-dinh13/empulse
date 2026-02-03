'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarUser {
    fullName?: string
    role?: string
}

interface SidebarProps {
    user: SidebarUser | null
}

export default function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
        router.push('/login')
    }

    const isActive = (path: string) => pathname === path ? 'active' : ''

    return (
        <aside className="sidebar">
            <div className="sidebar-logo-text" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', padding: '0 0.5rem', marginBottom: '1rem', display: 'inline-block' }}>
                <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
            </div>

            <nav className="sidebar-nav">
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
