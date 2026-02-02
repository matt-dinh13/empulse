'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

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

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            router.push('/login')
            return
        }
        fetchOrders(token)
    }, [router])

    const fetchOrders = async (token: string) => {
        try {
            const res = await fetch('/api/orders', {
                headers: { Authorization: `Bearer ${token}` }
            })
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
            <aside className="sidebar">
                <Image src="/logo.svg" alt="EmPulse" width={120} height={40} className="sidebar-logo" />
                <nav className="sidebar-nav">
                    <Link href="/dashboard" className="sidebar-link">📊 Dashboard</Link>
                    <Link href="/dashboard/send-vote" className="sidebar-link">🎯 Send Vote</Link>
                    <Link href="/dashboard/votes/received" className="sidebar-link">📥 Votes Received</Link>
                    <Link href="/dashboard/votes/sent" className="sidebar-link">📤 Votes Sent</Link>
                    <Link href="/dashboard/catalog" className="sidebar-link">🎁 Rewards Catalog</Link>
                    <Link href="/dashboard/orders" className="sidebar-link active">📦 My Orders</Link>
                </nav>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <button onClick={() => {
                        localStorage.removeItem('accessToken')
                        localStorage.removeItem('user')
                        window.location.href = '/login'
                    }} className="btn" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none' }}>
                        Logout
                    </button>
                </div>
            </aside>

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
                                            {order.catalog.rewardType === 'voucher' ? '🎫' : '📦'}
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
