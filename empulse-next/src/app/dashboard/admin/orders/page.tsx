'use client'

import { useEffect, useState } from 'react'
import { handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'
import { SkeletonTable } from '@/components/Skeleton'

interface Order {
    id: number
    status: string
    pointsSpent: number
    createdAt: string
    user: { fullName: string, email: string, team: { name: string } }
    catalog: { name: string, rewardType: string }
}

const STATUS_BADGE: Record<string, string> = {
    PENDING_APPROVAL: 'badge-warning',
    APPROVED: 'badge-success',
    REJECTED: 'badge-error',
    COMPLETED: 'badge-success',
}

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('PENDING_APPROVAL')
    const [error, setError] = useState<string | null>(null)
    const { showToast } = useToast()

    useEffect(() => {
        fetchOrders()
    }, [filter])

    const fetchOrders = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/admin/orders?status=${filter}`, {
                credentials: 'include'
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
            const res = await fetch(endpoint, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reason: action === 'reject' ? 'Admin rejection' : undefined })
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (res.ok) {
                showToast(`Order ${action}d successfully`, 'success')
                fetchOrders()
            }
        } catch (err) {
            showToast('Action failed', 'error')
        }
    }

    const formatStatus = (status: string) => status.replace(/_/g, ' ')

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Order Approvals</h1>
                <p className="page-subtitle">Review and manage redemption requests</p>
            </div>

            <div className="tabs-nav" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {['PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'COMPLETED'].map(status => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`tab-btn ${filter === status ? 'active' : ''}`}
                    >
                        {formatStatus(status)}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <SkeletonTable rows={5} />
                </div>
            ) : error ? (
                <div className="card text-center">
                    <p className="text-muted">{error}</p>
                    <button className="btn btn-outline mt-md" onClick={fetchOrders}>Retry</button>
                </div>
            ) : (
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: 'var(--color-surface-hover)', borderBottom: '1px solid var(--color-border)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Reward</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Requested By</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Team</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>Points</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Status</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Date</th>
                                {filter === 'PENDING_APPROVAL' && (
                                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Actions</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan={filter === 'PENDING_APPROVAL' ? 7 : 6} style={{ padding: 'var(--spacing-lg)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                                        No orders found.
                                    </td>
                                </tr>
                            ) : (
                                orders.map(order => (
                                    <tr key={order.id} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                        <td style={{ padding: 'var(--spacing-md)' }}>
                                            <div style={{ fontWeight: 600 }}>{order.catalog.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{order.catalog.rewardType === 'digital_voucher' ? 'Voucher' : 'Physical'}</div>
                                        </td>
                                        <td style={{ padding: 'var(--spacing-md)' }}>
                                            <div style={{ fontWeight: 500 }}>{order.user.fullName}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{order.user.email}</div>
                                        </td>
                                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-muted)' }}>
                                            {order.user.team?.name || '-'}
                                        </td>
                                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                            {order.pointsSpent}
                                        </td>
                                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                            <span className={`badge ${STATUS_BADGE[order.status] || ''}`}>
                                                {formatStatus(order.status)}
                                            </span>
                                        </td>
                                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </td>
                                        {filter === 'PENDING_APPROVAL' && (
                                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                                <div className="flex gap-sm" style={{ justifyContent: 'center' }}>
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', backgroundColor: 'var(--color-success)' }}
                                                        onClick={() => handleAction(order.id, 'approve')}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        className="btn btn-outline"
                                                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', color: 'var(--color-error)', borderColor: 'var(--color-error)' }}
                                                        onClick={() => handleAction(order.id, 'reject')}
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
