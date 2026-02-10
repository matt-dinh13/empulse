'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'

const SETTINGS_CATEGORIES = [
    { id: 'voting', label: 'Voting Rules' },
    { id: 'points', label: 'Points Config' },
    { id: 'redemption', label: 'Redemption' },
    { id: 'periods', label: 'Periods' },
    { id: 'features', label: 'Features' },
]

interface SystemSetting {
    key: string
    value: string | number | boolean
    label: string
    description: string
    type: string
    category: string
    min?: number
    max?: number
}

export default function SystemSettingsPage() {
    const [settings, setSettings] = useState<SystemSetting[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [activeTab, setActiveTab] = useState('voting')
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const { showToast } = useToast()

    useEffect(() => {
        fetchSettings()
    }, [])

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/admin/settings', {
                credentials: 'include'
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (res.status === 403) {
                showToast('Access Denied: Admin only', 'error')
                router.push('/dashboard/admin')
                return
            }
            const data = await res.json()
            if (res.ok) {
                setSettings(data.settings)
                setError(null)
            } else {
                setError(data?.error || 'Failed to load settings')
            }
        } catch (error) {
            console.error('Failed to fetch settings', error)
            setError('Failed to load settings')
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            const res = await fetch('/api/admin/settings', {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    settings: settings.map(s => ({ key: s.key, value: s.value }))
                })
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (res.ok) {
                showToast('Settings saved successfully!', 'success')
            } else {
                throw new Error('Failed to save')
            }
        } catch (error) {
            showToast('Error saving settings', 'error')
        } finally {
            setSaving(false)
        }
    }

    const handleChange = (key: string, value: SystemSetting['value']) => {
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s))
    }

    const filteredSettings = settings.filter(s => s.category === activeTab)

    return (
        <div>
            <div className="page-header flex justify-between items-center">
                <div>
                    <h1 className="page-title">System Settings</h1>
                    <p className="page-subtitle">Configure system-wide rules and parameters</p>
                </div>
                <button onClick={handleSave} className="btn btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <div className="card p-0 overflow-hidden">
                {/* Tabs */}
                <div className="tabs-nav">
                    {SETTINGS_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-lg">
                    {loading ? (
                        <div className="flex justify-center"><div className="spinner"></div></div>
                    ) : error ? (
                        <div className="text-muted">{error}</div>
                    ) : (
                        <div className="grid grid-2 gap-lg">
                            {filteredSettings.map(setting => (
                                <div key={setting.key} className="form-group mb-0">
                                    <div className="flex justify-between items-start mb-sm">
                                        <label className="form-label mb-0" style={{ fontSize: '1rem' }}>{setting.label}</label>
                                        <span className="badge" style={{
                                            background: 'var(--color-surface-hover)',
                                            border: '1px solid var(--color-border)',
                                            color: 'var(--color-text-muted)',
                                            fontFamily: 'monospace',
                                            fontSize: '0.75rem'
                                        }}>{setting.key}</span>
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
                                            value={setting.value as string | number}
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
