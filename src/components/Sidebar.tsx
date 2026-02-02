'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarProps {
    user: any
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
            <Image src="/logo.svg" alt="EmPulse" width={120} height={40} className="sidebar-logo" priority />

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

                {(user?.role === 'admin' || user?.role === 'hr_admin') && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <Link href="/dashboard/admin" className={`sidebar-link ${isActive('/dashboard/admin')}`}>
                            🛡️ Admin Portal
                        </Link>
                    </div>
                )}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>{user?.fullName}</div>
                <button onClick={handleLogout} className="btn" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none' }}>
                    Logout
                </button>
            </div>
        </aside>
    )
}
