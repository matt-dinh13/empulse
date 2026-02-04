'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { buildAuthHeaders, handleUnauthorized } from '@/lib/clientAuth'

interface Order {
    id: number
    status: string
    pointsSpent: number
    createdAt: string
    user: { fullName: string, email: string, team: { name: string } }
    catalog: { name: string, rewardType: string }
}

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('PENDING_APPROVAL')
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        fetchOrders()
    }, [filter])

    const fetchOrders = async () => {
        setLoading(true)
        try {
            const headers = buildAuthHeaders()
            if (!headers) {
                handleUnauthorized()
                return
            }
            const res = await fetch(`/api/admin/orders?status=${filter}`, {
                headers
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            const data = await res.json()
            if (res.ok) {
                setOrders(data.orders)
                setError(null)
            } else {
                setError(data?.error || 'Failed to load orders')
            }
        } catch (err) {
            console.error(err)
            setError('Failed to load orders')
        } finally {
            setLoading(false)
        }
    }

    const handleAction = async (id: number, action: 'approve' | 'reject') => {
        if (!confirm(`Are you sure you want to ${action} this order?`)) return

        const endpoint = action === 'approve'
            ? `/api/admin/orders/${id}/approve`
            : `/api/admin/orders/${id}/reject`

        try {
            const headers = buildAuthHeaders()
            if (!headers) {
                handleUnauthorized()
                return
            }
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify({ reason: action === 'reject' ? 'Admin rejection' : undefined })
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (res.ok) {
                alert(`Order ${action}d successfully`)
                fetchOrders() // Refresh
            }
        } catch (err) {
            alert('Action failed')
        }
    }

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Order Approvals</h1>
                <p className="page-subtitle">Review and manage redemption requests</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-md mb-lg">
                {['PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'COMPLETED'].map(status => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`btn ${filter === status ? 'btn-primary' : 'btn-outline'}`}
                    >
                        {status.replace('_', ' ')}
                    </button>
                ))}
            </div>

            <div className="grid grid-2">
                {error ? (
                    <div className="text-muted">{error}</div>
                ) : loading ? (
                    <div>Loading orders...</div>
                ) : orders.length === 0 ? (
                    <div>No orders found.</div>
                ) : orders.map(order => (
                    <div key={order.id} className="card">
                        <div className="flex justify-between mb-sm">
                            <span className="badge badge-warning">{order.status}</span>
                            <span className="text-sm text-muted">{new Date(order.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h3 className="mb-xs">{order.catalog.name}</h3>
                        <div className="text-accent font-bold mb-md">{order.pointsSpent} Points</div>

                        <div className="mb-md p-md bg-surface border rounded">
                            <div className="text-sm font-bold">Requested by:</div>
                            <div>{order.user.fullName}</div>
                            <div className="text-sm text-muted">{order.user.email} • {order.user.team?.name}</div>
                        </div>

                        {order.status === 'PENDING_APPROVAL' && (
                            <div className="flex gap-sm">
                                <button
                                    className="btn btn-primary"
                                    style={{ flex: 1, backgroundColor: 'var(--color-success)' }}
                                    onClick={() => handleAction(order.id, 'approve')}
                                >
                                    Approve
                                </button>
                                <button
                                    className="btn btn-outline"
                                    style={{ flex: 1, color: 'var(--color-error)', borderColor: 'var(--color-error)' }}
                                    onClick={() => handleAction(order.id, 'reject')}
                                >
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
