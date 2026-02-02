'use client'

import { useState, useEffect, use } from 'react'
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

export default function EditCatalogItemPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        pointsRequired: 50,
        rewardType: 'voucher',
        icon: '🎁',
        displayValue: '',
        regionId: '',
        isActive: true
    })

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUser(JSON.parse(storedUser))

        fetchItem()
    }, [])

    const fetchItem = async () => {
        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch(`/api/admin/catalog/${resolvedParams.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (res.ok) {
                setFormData({
                    name: data.item.name,
                    description: data.item.description || '',
                    pointsRequired: data.item.pointsRequired,
                    rewardType: data.item.rewardType,
                    icon: data.item.icon || '🎁',
                    displayValue: data.item.displayValue || '',
                    regionId: String(data.item.regionId),
                    isActive: data.item.isActive
                })
            } else {
                alert(data.error)
                router.push('/dashboard/admin/catalog')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)

        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch(`/api/admin/catalog/${resolvedParams.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.error)

            alert('Item updated successfully')
            router.push('/dashboard/admin/catalog')
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Failed to update item')
        } finally {
            setSaving(false)
        }
    }

    if (loading) return <div className="flex justify-center p-lg"><div className="spinner"></div></div>

    return (
        <div>
            <div className="page-header">
                <Link href="/dashboard/admin/catalog" className="text-muted mb-sm block">← Back to Catalog</Link>
                <div className="flex justify-between items-center">
                    <h1 className="page-title">Edit Item</h1>
                    <div className="flex items-center gap-md">
                        <label className="flex items-center gap-sm cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.isActive}
                                onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                            />
                            <span>Active</span>
                        </label>
                    </div>
                </div>
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
                            <label className="form-label">Display Value</label>
                            <input
                                className="form-input"
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
                                <option value="voucher">Voucher</option>
                                <option value="physical">Physical Item</option>
                                <option value="experience">Experience</option>
                                <option value="donation">Donation</option>
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

                    <div className="flex gap-md">
                        <button type="submit" className="btn btn-primary" disabled={saving}>
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                        <Link href="/dashboard/admin/catalog" className="btn btn-outline">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
