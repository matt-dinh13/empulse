'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { SkeletonCard } from '@/components/Skeleton'
import { getStoredUser } from '@/lib/clientAuth'
import { StatCard, ProgressRing, Avatar, Badge, EmptyState } from '@/components/ui'

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

function getGreeting(): string {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
}

function getRelativeTime(dateStr: string): string {
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

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [feed, setFeed] = useState<FeedItem[]>([])
    const [feedLoading, setFeedLoading] = useState(true)
    const router = useRouter()

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
                    const items = (data.feed || []).map(
                        (v: {
                            id: number
                            sender: { fullName: string }
                            receiver: { fullName: string }
                            message: string
                            valueTags?: { name: string; icon: string }[]
                            createdAt: string
                        }) => ({
                            id: v.id,
                            senderName: v.sender.fullName,
                            receiverName: v.receiver.fullName,
                            message: v.message,
                            values: v.valueTags?.map((t: { icon: string; name: string }) => `${t.icon} ${t.name}`),
                            createdAt: v.createdAt,
                        })
                    )
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
                        <SkeletonCard />
                    </div>
                </main>
            </div>
        )
    }

    const quotaBalance = user?.quotaWallet?.balance || 0
    const quotaMax = 8 // default monthly quota
    const rewardPoints = user?.rewardWallet?.balance || 0

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                {/* Greeting Header */}
                <div className="page-header" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="animate-fade-in">
                        <h1 className="page-title">
                            {getGreeting()}, {user?.fullName?.split(' ')[0]}! 👋
                        </h1>
                        <p className="page-subtitle">
                            Keep up the great work recognizing your colleagues
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <StatCard
                        label="Voting Quota"
                        value={`${quotaBalance}/${quotaMax}`}
                        icon="🎯"
                        gradient="var(--gradient-stat-blue)"
                        accentColor="var(--color-primary)"
                    >
                        <ProgressRing
                            value={quotaBalance}
                            max={quotaMax}
                            size={64}
                            strokeWidth={5}
                            color="var(--color-primary)"
                        />
                    </StatCard>

                    <StatCard
                        label="Reward Points"
                        value={rewardPoints}
                        icon="💰"
                        gradient="var(--gradient-stat-green)"
                        accentColor="var(--color-success)"
                        trend={
                            rewardPoints > 0
                                ? { value: `${rewardPoints} pts earned`, direction: 'up' }
                                : undefined
                        }
                    />

                    <StatCard
                        label="Role"
                        value={user?.role === 'super_admin' ? 'Admin' : user?.role === 'hr_admin' ? 'HR Admin' : 'Employee'}
                        icon={user?.role === 'employee' ? '👤' : '🛡️'}
                        gradient="var(--gradient-stat-purple)"
                        accentColor="#8B5CF6"
                    />

                    <StatCard
                        label="Status"
                        value="Active"
                        icon="✨"
                        gradient="var(--gradient-stat-amber)"
                        accentColor="var(--color-warning)"
                    />
                </div>

                {/* Quick Actions */}
                <div
                    className="card animate-slide-up stagger-2"
                    style={{ opacity: 0 }}
                >
                    <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem' }}>
                        ⚡ Quick Actions
                    </h3>
                    <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
                        <Link
                            href="/dashboard/send-vote"
                            className="btn btn-primary"
                            style={{
                                background: 'var(--gradient-accent)',
                                border: 'none',
                                padding: '0.85rem 1.75rem',
                                fontSize: '0.95rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-glow-green)',
                            }}
                        >
                            🎉 Send Recognition
                        </Link>
                        <Link
                            href="/dashboard/catalog"
                            className="btn btn-primary"
                            style={{
                                background: 'var(--gradient-primary)',
                                border: 'none',
                                padding: '0.85rem 1.75rem',
                                fontSize: '0.95rem',
                                borderRadius: 'var(--radius-lg)',
                            }}
                        >
                            🎁 Browse Rewards
                        </Link>
                        <Link
                            href="/dashboard/leaderboard"
                            className="btn btn-outline"
                            style={{
                                padding: '0.85rem 1.75rem',
                                fontSize: '0.95rem',
                                borderRadius: 'var(--radius-lg)',
                            }}
                        >
                            📊 Leaderboard
                        </Link>
                    </div>
                </div>

                {/* Recognition Feed */}
                <div
                    className="card animate-slide-up stagger-3"
                    style={{ marginTop: 'var(--spacing-lg)', opacity: 0 }}
                >
                    <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>🔔 Recent Recognition</h3>
                        <Link href="/dashboard/notifications" className="text-sm" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                            View all →
                        </Link>
                    </div>

                    {feedLoading ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }} className="text-muted">
                            <div className="spinner" style={{ margin: '0 auto 0.5rem' }} />
                            Loading feed...
                        </div>
                    ) : feed.length === 0 ? (
                        <EmptyState
                            icon="🎉"
                            title="No recognitions yet"
                            description="Be the first to recognize a colleague for their great work!"
                            action={
                                <Link href="/dashboard/send-vote" className="btn btn-primary">
                                    Send First Recognition
                                </Link>
                            }
                        />
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {feed.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}
                                    style={{
                                        padding: '1rem 1.25rem',
                                        background: 'var(--color-surface-hover)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--color-border-light)',
                                        transition: 'all var(--transition-smooth)',
                                        opacity: 0,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)'
                                        e.currentTarget.style.transform = 'translateX(4px)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border-light)'
                                        e.currentTarget.style.transform = 'translateX(0)'
                                    }}
                                >
                                    <div className="flex" style={{ gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                                        <Avatar name={item.senderName} size={36} />
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                                                <div style={{ fontSize: '0.9rem' }}>
                                                    <strong>{item.senderName}</strong>
                                                    <span className="text-muted" style={{ fontWeight: 400 }}> → </span>
                                                    <strong>{item.receiverName}</strong>
                                                </div>
                                                <span
                                                    className="text-muted"
                                                    style={{ fontSize: '0.75rem', whiteSpace: 'nowrap', flexShrink: 0 }}
                                                >
                                                    {getRelativeTime(item.createdAt)}
                                                </span>
                                            </div>
                                            {item.message && (
                                                <p
                                                    className="text-muted"
                                                    style={{
                                                        fontSize: '0.85rem',
                                                        margin: '0.35rem 0 0',
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    &ldquo;{item.message.length > 120 ? `${item.message.slice(0, 120)}...` : item.message}&rdquo;
                                                </p>
                                            )}
                                            {item.values && item.values.length > 0 && (
                                                <div className="flex gap-sm" style={{ marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                                    {item.values.map((val) => (
                                                        <Badge key={val} variant="success" size="sm">
                                                            {val}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
