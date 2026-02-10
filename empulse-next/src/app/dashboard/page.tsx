'use client'
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { SkeletonCard } from '@/components/Skeleton'
import { getStoredUser } from '@/lib/clientAuth'

interface User {
    id: number
    email: string
    fullName: string
    role: string
    quotaWallet?: { balance: number }
    rewardWallet?: { balance: number }
}

interface FeedItem {
    id: number
    senderName: string
    receiverName: string
    message: string
    values?: string[]
    createdAt: string
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [feed, setFeed] = useState<FeedItem[]>([])
    const [feedLoading, setFeedLoading] = useState(true)
    const router = useRouter()

    const getRelativeTime = (dateStr: string): string => {
        const now = new Date()
        const date = new Date(dateStr)
        const diffMs = now.getTime() - date.getTime()
        const diffSec = Math.floor(diffMs / 1000)
        const diffMin = Math.floor(diffSec / 60)
        const diffHr = Math.floor(diffMin / 60)
        const diffDay = Math.floor(diffHr / 24)

        if (diffSec < 60) return 'just now'
        if (diffMin < 60) return `${diffMin}m ago`
        if (diffHr < 24) return `${diffHr}h ago`
        if (diffDay < 7) return `${diffDay}d ago`
        return date.toLocaleDateString()
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/me', { credentials: 'include' })
                if (!res.ok) {
                    router.push('/login')
                    return
                }
            } catch {
                router.push('/login')
                return
            }

            const storedUser = getStoredUser()
            if (!storedUser) {
                router.push('/login')
                return
            }

            setUser(storedUser as User)
            setLoading(false)
        }
        checkAuth()
    }, [router])

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const res = await fetch('/api/feed?limit=5', { credentials: 'include' })
                if (res.ok) {
                    const data = await res.json()
                    const items = (data.feed || []).map((v: { id: number; sender: { fullName: string }; receiver: { fullName: string }; message: string; valueTags?: { name: string; icon: string }[]; createdAt: string }) => ({
                        id: v.id,
                        senderName: v.sender.fullName,
                        receiverName: v.receiver.fullName,
                        message: v.message,
                        values: v.valueTags?.map((t: { icon: string; name: string }) => `${t.icon} ${t.name}`),
                        createdAt: v.createdAt,
                    }))
                    setFeed(items)
                }
            } catch {
                // silently fail — feed is non-critical
            } finally {
                setFeedLoading(false)
            }
        }
        if (!loading) {
            fetchFeed()
        }
    }, [loading])

    if (loading) {
        return (
            <div className="dashboard-layout">
                <Sidebar user={null} />
                <main className="main-content">
                    <div className="page-header">
                        <div className="skeleton-line skeleton-title" style={{ marginBottom: '0.5rem' }} />
                        <div className="skeleton-line skeleton-short" />
                    </div>
                    <div className="stats-grid">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            {/* Sidebar */}
            <Sidebar user={user} />

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
                            Send a Vote
                        </Link>
                        <Link href="/dashboard/catalog" className="btn btn-secondary">
                            Browse Rewards
                        </Link>
                    </div>
                </div>

                {/* Recent Recognition Feed */}
                <div className="card" style={{ marginTop: '1.5rem' }}>
                    <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3>Recent Recognition</h3>
                    </div>
                    {feedLoading ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }} className="text-muted">
                            Loading recognition feed...
                        </div>
                    ) : feed.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }} className="text-muted">
                            No recent recognitions yet. Be the first to recognize a colleague!
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {feed.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        padding: '0.75rem 1rem',
                                        background: 'var(--color-surface-hover)',
                                        borderRadius: '8px',
                                        border: '1px solid var(--color-border-light)',
                                    }}
                                >
                                    <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                                            {item.senderName} <span className="text-muted" style={{ fontWeight: 400 }}>recognized</span> {item.receiverName}
                                        </div>
                                        <span style={{ fontSize: '0.75rem', whiteSpace: 'nowrap', marginLeft: '0.5rem' }} className="text-muted">
                                            {getRelativeTime(item.createdAt)}
                                        </span>
                                    </div>
                                    {item.message && (
                                        <p className="text-muted" style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}>
                                            {item.message.length > 100 ? `${item.message.slice(0, 100)}...` : item.message}
                                        </p>
                                    )}
                                    {item.values && item.values.length > 0 && (
                                        <div className="flex gap-sm" style={{ marginTop: '0.35rem', flexWrap: 'wrap' }}>
                                            {item.values.map((val) => (
                                                <span
                                                    key={val}
                                                    style={{
                                                        fontSize: '0.7rem',
                                                        padding: '0.15rem 0.5rem',
                                                        borderRadius: '9999px',
                                                        background: 'rgba(0,210,100,0.15)',
                                                        color: '#00D264',
                                                        border: '1px solid rgba(0,210,100,0.25)',
                                                    }}
                                                >
                                                    {val}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </main>
        </div>
    )
}
