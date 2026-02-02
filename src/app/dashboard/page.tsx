'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface User {
    id: number
    email: string
    fullName: string
    role: string
    quotaWallet?: { balance: number }
    rewardWallet?: { balance: number }
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        const storedUser = localStorage.getItem('user')

        if (!token || !storedUser) {
            router.push('/login')
            return
        }

        setUser(JSON.parse(storedUser))
        setLoading(false)
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
        router.push('/login')
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}>
                <div className="spinner"></div>
            </div>
        )
    }

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <Image src="/logo.svg" alt="EmPulse" width={120} height={40} className="sidebar-logo" />

                <nav className="sidebar-nav">
                    <Link href="/dashboard" className="sidebar-link active">
                        📊 Dashboard
                    </Link>
                    <Link href="/dashboard/send-vote" className="sidebar-link">
                        🎯 Send Vote
                    </Link>
                    <Link href="/dashboard/votes/received" className="sidebar-link">
                        📥 Votes Received
                    </Link>
                    <Link href="/dashboard/votes/sent" className="sidebar-link">
                        📤 Votes Sent
                    </Link>
                    <Link href="/dashboard/catalog" className="sidebar-link">
                        🎁 Rewards Catalog
                    </Link>
                    <Link href="/dashboard/orders" className="sidebar-link">
                        📦 My Orders
                    </Link>
                    {(user?.role === 'admin' || user?.role === 'hr_admin') && (
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <Link href="/dashboard/admin" className="sidebar-link">
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

            {/* Main Content */}
            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">Dashboard</h1>
                    <p className="page-subtitle">Welcome back, {user?.fullName}!</p>
                </div>

                {/* Stats */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-label">Voting Quota Left</div>
                        <div className="stat-value accent">{user?.quotaWallet?.balance || 0}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Reward Points</div>
                        <div className="stat-value">{user?.rewardWallet?.balance || 0}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Role</div>
                        <div className="stat-value" style={{ fontSize: '1.25rem', textTransform: 'capitalize' }}>
                            {user?.role}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card">
                    <h3 className="mb-md">Quick Actions</h3>
                    <div className="flex gap-md">
                        <Link href="/dashboard/send-vote" className="btn btn-primary">
                            🎯 Send a Vote
                        </Link>
                        <Link href="/dashboard/catalog" className="btn btn-secondary">
                            🎁 Browse Rewards
                        </Link>
                    </div>
                </div>

                {/* DEBUG SECTION */}
                <div className="card" style={{ marginTop: '2rem', border: '1px dashed #666' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: '#888' }}>Debug Tools</h3>
                    <p style={{ marginBottom: '1rem' }}>If you are the admin but cannot see the Admin Portal, click below:</p>
                    <div className="flex gap-md">
                        <button
                            className="btn btn-outline"
                            onClick={async () => {
                                const token = localStorage.getItem('accessToken')
                                try {
                                    const res = await fetch('/api/debug/promote', {
                                        method: 'POST',
                                        headers: { Authorization: `Bearer ${token}` }
                                    })
                                    const data = await res.json()
                                    alert(data.message || data.error)
                                    if (res.ok) {
                                        handleLogout() // Auto logout to force refresh
                                    }
                                } catch (e) {
                                    alert('Failed to promote')
                                }
                            }}
                        >
                            🔑 Enable Admin Mode
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={async () => {
                                const token = localStorage.getItem('accessToken')
                                try {
                                    const res = await fetch('/api/debug/seed', {
                                        method: 'POST',
                                        headers: { Authorization: `Bearer ${token}` }
                                    })
                                    const data = await res.json()
                                    alert(data.message)
                                    window.location.reload()
                                } catch (e) {
                                    alert('Failed to seed')
                                }
                            }}
                        >
                            🌱 Seed Data
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
