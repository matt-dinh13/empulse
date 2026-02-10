'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'

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

const TYPE_ICONS: Record<string, string> = {
    VOTE_RECEIVED: '🎉',
    ORDER_APPROVED: '✅',
    ORDER_REJECTED: '❌',
    ORDER_COMPLETED: '📦',
    QUARTERLY_WARNING: '⏰',
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
    }, [page])

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
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="page-title">Notifications</h1>
                            <p className="page-subtitle">Stay updated on recognition and orders</p>
                        </div>
                        {unreadCount > 0 && (
                            <button className="btn btn-outline" onClick={markAllRead}>
                                Mark all read
                            </button>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : notifications.length === 0 ? (
                    <div className="card text-center">
                        <p className="text-muted">No notifications yet.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid" style={{ gap: '0.5rem' }}>
                            {notifications.map(n => (
                                <div
                                    key={n.id}
                                    className="card"
                                    style={{
                                        opacity: n.isRead ? 0.6 : 1,
                                        borderLeft: n.isRead ? 'none' : '3px solid var(--primary)',
                                        cursor: n.isRead ? 'default' : 'pointer',
                                    }}
                                    onClick={() => !n.isRead && markOneRead(n.id)}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-sm">
                                            <span style={{ fontSize: '1.2rem' }}>
                                                {TYPE_ICONS[n.type] || '🔔'}
                                            </span>
                                            <div>
                                                <p className="font-bold" style={{ marginBottom: '0.15rem' }}>
                                                    {n.title}
                                                </p>
                                                <p className="text-sm text-muted" style={{ margin: 0 }}>
                                                    {n.message}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-muted" style={{ whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                                            {timeAgo(n.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex justify-center gap-sm" style={{ marginTop: '1.5rem' }}>
                                <button
                                    className="btn btn-outline"
                                    disabled={page <= 1}
                                    onClick={() => setPage(p => p - 1)}
                                >
                                    Previous
                                </button>
                                <span className="flex items-center text-sm text-muted">
                                    Page {page} of {totalPages}
                                </span>
                                <button
                                    className="btn btn-outline"
                                    disabled={page >= totalPages}
                                    onClick={() => setPage(p => p + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}
