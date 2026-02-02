'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SETTINGS_CATEGORIES = [
    { id: 'voting', label: 'Voting Rules', icon: '🗳️' },
    { id: 'points', label: 'Points Config', icon: '💎' },
    { id: 'redemption', label: 'Redemption', icon: '🎁' },
    { id: 'periods', label: 'Periods', icon: '📅' },
    { id: 'features', label: 'Features', icon: '🚀' },
]

export default function SystemSettingsPage() {
    const [settings, setSettings] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [activeTab, setActiveTab] = useState('voting')
    const router = useRouter()

    useEffect(() => {
        fetchSettings()
    }, [])

    const fetchSettings = async () => {
        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch('/api/admin/settings', {
                headers: { Authorization: `Bearer ${token}` }
            })
            if (res.status === 403) {
                alert('Access Denied: Super Admin only')
                router.push('/dashboard/admin')
                return
            }
            const data = await res.json()
            if (res.ok) setSettings(data.settings)
        } catch (error) {
            console.error('Failed to fetch settings', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch('/api/admin/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    settings: settings.map(s => ({ key: s.key, value: s.value }))
                })
            })
            if (res.ok) {
                alert('Settings saved successfully!')
            } else {
                throw new Error('Failed to save')
            }
        } catch (error) {
            alert('Error saving settings')
        } finally {
            setSaving(false)
        }
    }

    const handleChange = (key: string, value: any) => {
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s))
    }

    const filteredSettings = settings.filter(s => s.category === activeTab)

    return (
        <div>
            <div className="page-header flex justify-between items-center">
                <div>
                    <h1 className="page-title">⚙️ System Settings</h1>
                    <p className="page-subtitle">Configure system-wide rules and parameters</p>
                </div>
                <button onClick={handleSave} className="btn btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <div className="card p-0 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-700 bg-gray-800">
                    {SETTINGS_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            className={`p-md flex items-center gap-sm transition-colors ${activeTab === cat.id ? 'bg-gray-700 text-white border-b-2 border-accent' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
                            onClick={() => setActiveTab(cat.id)}
                            style={{ border: 'none', borderBottom: activeTab === cat.id ? '2px solid var(--color-accent)' : 'none' }}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-lg">
                    {loading ? (
                        <div className="flex justify-center"><div className="spinner"></div></div>
                    ) : (
                        <div className="grid grid-2 gap-lg">
                            {filteredSettings.map(setting => (
                                <div key={setting.key} className="form-group mb-0">
                                    <div className="flex justify-between items-start mb-sm">
                                        <label className="form-label mb-0" style={{ fontSize: '1rem' }}>{setting.label}</label>
                                        <span className="badge" style={{ background: '#333', fontSize: '0.7rem' }}>{setting.key}</span>
                                    </div>
                                    <p className="text-muted text-sm mb-sm">{setting.description}</p>

                                    {setting.type === 'boolean' ? (
                                        <div className="flex items-center gap-md">
                                            <button
                                                className={`btn ${setting.value === 'true' || setting.value === true ? 'btn-success' : 'btn-outline'}`}
                                                onClick={() => handleChange(setting.key, true)}
                                            >
                                                Enabled
                                            </button>
                                            <button
                                                className={`btn ${setting.value === 'false' || setting.value === false ? 'btn-danger' : 'btn-outline'}`}
                                                onClick={() => handleChange(setting.key, false)}
                                            >
                                                Disabled
                                            </button>
                                        </div>
                                    ) : (
                                        <input
                                            type="number"
                                            className="form-input"
                                            value={setting.value}
                                            min={setting.min}
                                            max={setting.max}
                                            onChange={e => handleChange(setting.key, e.target.value)}
                                        />
                                    )}
                                    {setting.type === 'integer' && (
                                        <div className="text-right text-xs text-muted mt-xs">
                                            Range: {setting.min} - {setting.max}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {filteredSettings.length === 0 && <p>No settings in this category.</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
