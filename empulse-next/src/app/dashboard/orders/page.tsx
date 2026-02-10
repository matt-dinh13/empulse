'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'

interface Order {
    id: number
    pointsSpent: number
    status: string
    createdAt: string
    catalog: {
        name: string
        rewardType: string
    }
}

interface UiUser {
    fullName?: string
    role?: string
}

export default function OrdersPage() {
    const [user, setUser] = useState<UiUser | null>(null)
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
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

            fetchOrders()
        }
        checkAuth()
    }, [router])

    const fetchOrders = async () => {
        try {
            const res = await fetch('/api/orders', {
                credentials: 'include'
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            const data = await res.json()
            if (res.ok) {
                setOrders(data.orders)
            }
        } catch (err) {
            console.error('Failed to fetch orders:', err)
        } finally {
            setLoading(false)
        }
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed': return 'badge-success'
            case 'pending': return 'badge-warning'
            case 'cancelled': return 'badge-error'
            default: return 'badge-neutral'
        }
    }

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">📦 My Orders</h1>
                    <p className="page-subtitle">Track your reward redemptions</p>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : orders.length === 0 ? (
                    <div className="card text-center">
                        <p className="text-muted mb-md">You haven&apos;t redeemed any rewards yet.</p>
                        <Link href="/dashboard/catalog" className="btn btn-primary">🎁 Browse Catalog</Link>
                    </div>
                ) : (
                    <div className="grid" style={{ gap: 'var(--spacing-md)' }}>
                        {orders.map(order => (
                            <div key={order.id} className="card">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div style={{ fontSize: '1.25rem', marginRight: 'var(--spacing-sm)', display: 'inline' }}>
                                            {order.catalog.rewardType === 'digital_voucher' || order.catalog.rewardType === 'voucher' ? '🎫' : '📦'}
                                        </div>
                                        <span className="font-bold">{order.catalog.name}</span>
                                    </div>
                                    <span className={`badge ${getStatusBadge(order.status)}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="flex justify-between mt-sm text-sm text-muted">
                                    <span>Points spent: {order.pointsSpent}</span>
                                    <span>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}

