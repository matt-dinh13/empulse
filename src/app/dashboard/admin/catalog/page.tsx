'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CatalogListPage() {
    const [items, setItems] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [showInactive, setShowInactive] = useState(false)
    const [user, setUser] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUser(JSON.parse(storedUser))
        fetchCatalog()
    }, [showInactive])

    const fetchCatalog = async () => {
        setLoading(true)
        const token = localStorage.getItem('accessToken')
        try {
            const query = showInactive ? '' : '?isActive=true'
            const res = await fetch(`/api/admin/catalog${query}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (res.ok) setItems(data.items)
        } catch (error) {
            console.error('Failed to fetch catalog', error)
        } finally {
            setLoading(false)
        }
    }

    const deleteItem = async (id: number) => {
        if (!confirm('Are you sure you want to deactivate this item?')) return

        const token = localStorage.getItem('accessToken')
        try {
            const res = await fetch(`/api/admin/catalog/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            })
            if (res.ok) {
                fetchCatalog()
            } else {
                alert('Failed to delete')
            }
        } catch (error) {
            alert('Error deleting item')
        }
    }

    return (
        <div>
            <div className="page-header flex justify-between items-center">
                <div>
                    <h1 className="page-title">🎁 Reward Catalog</h1>
                    <p className="page-subtitle">Manage rewards and vouchers</p>
                </div>
                <div className="flex gap-md">
                    <button
                        className={`btn ${showInactive ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setShowInactive(!showInactive)}
                    >
                        {showInactive ? 'Hide Inactive' : 'Show Inactive'}
                    </button>
                    <Link href="/dashboard/admin/catalog/new" className="btn btn-primary">
                        + Add New Item
                    </Link>
                </div>
            </div>

            <div className="card">
                {loading ? (
                    <div className="flex justify-center p-md"><div className="spinner"></div></div>
                ) : (
                    <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
                                <th className="p-sm">Icon</th>
                                <th className="p-sm">Name</th>
                                <th className="p-sm">Type</th>
                                <th className="p-sm">Points</th>
                                <th className="p-sm">Region</th>
                                <th className="p-sm">Status</th>
                                <th className="p-sm text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                    <td className="p-sm" style={{ fontSize: '1.5rem' }}>{item.icon || '🎁'}</td>
                                    <td className="p-sm">
                                        <div style={{ fontWeight: 500 }}>{item.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#888' }}>{item.displayValue}</div>
                                    </td>
                                    <td className="p-sm capitalize">{item.rewardType}</td>
                                    <td className="p-sm font-bold text-accent">{item.pointsRequired}</td>
                                    <td className="p-sm">{item.region?.code}</td>
                                    <td className="p-sm">
                                        {item.isActive ? (
                                            <span className="badge badge-success">Active</span>
                                        ) : (
                                            <span className="badge badge-danger">Inactive</span>
                                        )}
                                    </td>
                                    <td className="p-sm text-right">
                                        <Link href={`/dashboard/admin/catalog/${item.id}/edit`} className="btn-sm btn-outline mr-sm">
                                            ✏️ Edit
                                        </Link>
                                        {item.isActive && (
                                            <button onClick={() => deleteItem(item.id)} className="btn-sm btn-outline text-danger">
                                                🗑️
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="p-md text-center text-muted">No items found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
