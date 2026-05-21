'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { Badge, EmptyState, PageTransition } from '@/components/ui'

interface Notification {
    id: number
    type: string
    title: string
    message: string
    isRead: boolean
    metadata: Record<string, unknown> | null
    createdAt: string
}

interface UiUser {
    fullName?: string
    role?: string
}

const TYPE_CONFIG: Record<string, { icon: string; color: string; variant: 'success' | 'warning' | 'error' | 'info' | 'accent' }> = {
    VOTE_RECEIVED: { icon: '🎉', color: 'var(--color-success)', variant: 'success' },
    ORDER_APPROVED: { icon: '✅', color: 'var(--color-success)', variant: 'success' },
    ORDER_REJECTED: { icon: '❌', color: 'var(--color-error)', variant: 'error' },
    ORDER_COMPLETED: { icon: '📦', color: 'var(--color-primary)', variant: 'info' },
    QUARTERLY_WARNING: { icon: '⏰', color: 'var(--color-warning)', variant: 'warning' },
}

function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'just now'
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    if (days < 7) return `${days}d ago`
    return new Date(dateStr).toLocaleDateString('vi-VN')
}

export default function NotificationsPage() {
    const [user, setUser] = useState<UiUser | null>(null)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
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
            if (storedUser) setUser(storedUser as UiUser)
        }
        checkAuth()
    }, [router])

    useEffect(() => {
        fetchNotifications()
    }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchNotifications = async () => {
        try {
            const res = await fetch(`/api/notifications?page=${page}&limit=20`, {
                credentials: 'include',
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            const data = await res.json()
            if (res.ok) {
                setNotifications(data.notifications)
                setTotalPages(data.pagination.totalPages)
            }
        } catch (err) {
            console.error('Failed to fetch notifications:', err)
        } finally {
            setLoading(false)
        }
    }

    const markAllRead = async () => {
        try {
            const res = await fetch('/api/notifications', {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ markAllRead: true }),
            })
            if (res.ok) {
                setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
            }
        } catch (err) {
            console.error('Failed to mark all read:', err)
        }
    }

    const markOneRead = async (id: number) => {
        try {
            const res = await fetch('/api/notifications', {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids: [id] }),
            })
            if (res.ok) {
                setNotifications(prev =>
                    prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
                )
            }
        } catch (err) {
            console.error('Failed to mark read:', err)
        }
    }

    const unreadCount = notifications.filter(n => !n.isRead).length

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <div className="page-header">
                    <div className="flex justify-between items-center" style={{ width: '100%' }}>
                        <div>
                            <h1 className="page-title">🔔 Notifications</h1>
                            <p className="page-subtitle">
                                Stay updated on recognition and orders
                                {unreadCount > 0 && (
                                    <Badge variant="error" size="sm" style={{ marginLeft: 'var(--spacing-sm)' }}>
                                        {unreadCount} unread
                                    </Badge>
                                )}
                            </p>
                        </div>
                        {unreadCount > 0 && (
                            <button
                                className="btn btn-outline"
                                onClick={markAllRead}
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                ✓ Mark all read
                            </button>
                        )}
                    </div>
                </div>

                <PageTransition loading={loading} skeleton={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="card" style={{ padding: 'var(--spacing-md)' }}>
                                <div className="skeleton-line skeleton-title" />
                                <div className="skeleton-line" />
                            </div>
                        ))}
                    </div>
                }>
                    {notifications.length === 0 ? (
                        <EmptyState
                            icon="🔔"
                            title="All caught up!"
                            description="No notifications to show. You'll be notified when someone recognizes you."
                        />
                    ) : (
                        <>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {notifications.map((n, index) => {
                                    const config = TYPE_CONFIG[n.type] || { icon: '🔔', color: 'var(--color-primary)', variant: 'info' as const }

                                    return (
                                        <div
                                            key={n.id}
                                            className={`card animate-slide-up stagger-${Math.min(index + 1, 6)}`}
                                            style={{
                                                opacity: 0,
                                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                                borderLeft: n.isRead ? '3px solid transparent' : `3px solid ${config.color}`,
                                                cursor: n.isRead ? 'default' : 'pointer',
                                                transition: 'all 0.2s ease',
                                                background: n.isRead ? 'var(--color-surface)' : 'var(--color-surface-hover)',
                                            }}
                                            onClick={() => !n.isRead && markOneRead(n.id)}
                                            onMouseEnter={(e) => {
                                                if (!n.isRead) {
                                                    e.currentTarget.style.transform = 'translateX(4px)'
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateX(0)'
                                            }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-md" style={{ flex: 1, minWidth: 0 }}>
                                                    <span
                                                        style={{
                                                            fontSize: '1.5rem',
                                                            width: '40px',
                                                            height: '40px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: 'var(--radius-md)',
                                                            background: `${config.color}15`,
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        {config.icon}
                                                    </span>
                                                    <div style={{ minWidth: 0 }}>
                                                        <p style={{
                                                            fontWeight: n.isRead ? 400 : 600,
                                                            marginBottom: '0.15rem',
                                                            fontSize: '0.9rem',
                                                        }}>
                                                            {n.title}
                                                        </p>
                                                        <p className="text-sm text-muted" style={{
                                                            margin: 0,
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}>
                                                            {n.message}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', flexShrink: 0 }}>
                                                    {!n.isRead && (
                                                        <div style={{
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '50%',
                                                            background: config.color,
                                                            animation: 'pulse 2s infinite',
                                                        }} />
                                                    )}
                                                    <span className="text-sm text-muted" style={{ whiteSpace: 'nowrap' }}>
                                                        {timeAgo(n.createdAt)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {totalPages > 1 && (
                                <div className="flex justify-center gap-sm" style={{ marginTop: '1.5rem' }}>
                                    <button
                                        className="btn btn-outline"
                                        disabled={page <= 1}
                                        onClick={() => setPage(p => p - 1)}
                                    >
                                        ← Previous
                                    </button>
                                    <span className="flex items-center text-sm text-muted">
                                        Page {page} of {totalPages}
                                    </span>
                                    <button
                                        className="btn btn-outline"
                                        disabled={page >= totalPages}
                                        onClick={() => setPage(p => p + 1)}
                                    >
                                        Next →
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </PageTransition>
            </main>
        </div>
    )
}
