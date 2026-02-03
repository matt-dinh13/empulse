'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ICONS_CATEGORY = {
    vouchers: ['🎫', '🎟️', '💳', '🏷️', '🎁'],
    food: ['☕', '🍕', '🍔', '🍱', '🥗', '🍰'],
    experiences: ['🎬', '🎮', '🏖️', '✈️', '🎭', '🎪'],
    wellness: ['💆', '🧘', '🏋️', '🌿', '💊'],
    tech: ['📱', '💻', '🎧', '⌚', '🖥️'],
    time: ['⏰', '📅', '🏠', '🌴', '😴'],
    charity: ['❤️', '🌍', '🤝', '🎗️', '🌱'],
    general: ['⭐', '🏆', '🎉', '💎', '🔥']
}

interface User {
    role: string
    regionId: number
}

export default function NewCatalogItemPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        pointsRequired: 50,
        rewardType: 'digital_voucher',
        icon: '🎁',
        displayValue: '',
        regionId: '',
        stockQuantity: ''
    })

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            const u = JSON.parse(storedUser)
            setUser(u)
            // If HR Admin, auto-set region
            if (u.role === 'hr_admin') {
                setFormData(prev => ({ ...prev, regionId: u.regionId }))
            } else {
                // Super Admin needs to select region, default 1 for now or fetch list
                setFormData(prev => ({ ...prev, regionId: '1' }))
            }
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch('/api/admin/catalog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.error)

            router.push('/dashboard/admin/catalog')
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Failed to create item')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="page-header">
                <Link href="/dashboard/admin/catalog" className="text-muted mb-sm block">← Back to Catalog</Link>
                <h1 className="page-title">New Reward Item</h1>
            </div>

            <div className="card" style={{ maxWidth: '800px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Item Name</label>
                        <input
                            className="form-input"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-input"
                            rows={3}
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            required
                        />
                    </div>

                    <div className="grid grid-2 gap-md">
                        <div className="form-group">
                            <label className="form-label">Points Required</label>
                            <input
                                type="number"
                                className="form-input"
                                step="10"
                                min="10"
                                value={formData.pointsRequired}
                                onChange={e => setFormData({ ...formData, pointsRequired: parseInt(e.target.value) })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Display Value (Optional)</label>
                            <input
                                className="form-input"
                                placeholder="e.g. $10"
                                value={formData.displayValue}
                                onChange={e => setFormData({ ...formData, displayValue: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-2 gap-md">
                        <div className="form-group">
                            <label className="form-label">Type</label>
                            <select
                                className="form-input"
                                value={formData.rewardType}
                                onChange={e => setFormData({ ...formData, rewardType: e.target.value })}
                            >
                                <option value="digital_voucher">Voucher</option>
                                <option value="physical_item">Physical Item</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Region ID</label>
                            <input
                                className="form-input"
                                value={formData.regionId}
                                disabled={user?.role === 'hr_admin'} // Lock for HR Admin
                                onChange={e => setFormData({ ...formData, regionId: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Icon</label>
                        <div className="card p-sm" style={{ background: 'var(--color-bg-base)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))', gap: '0.5rem' }}>
                                {Object.values(ICONS_CATEGORY).flat().map(icon => (
                                    <button
                                        key={icon}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, icon })}
                                        style={{
                                            fontSize: '1.5rem',
                                            padding: '0.5rem',
                                            border: formData.icon === icon ? '2px solid var(--color-accent)' : '1px solid transparent',
                                            borderRadius: '8px',
                                            background: formData.icon === icon ? 'rgba(74, 222, 128, 0.1)' : 'transparent',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Creating...' : 'Create Item'}
                    </button>
                </form>
            </div>
        </div>
    )
}
