'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'

interface UiUser {
    fullName?: string
    role?: string
}

export default function SettingsPage() {
    const [user, setUser] = useState<UiUser | null>(null)
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const router = useRouter()
    const { showToast } = useToast()

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

            fetchPreferences()
        }
        checkAuth()
    }, [router])

    const fetchPreferences = async () => {
        try {
            const res = await fetch('/api/user/preferences', { credentials: 'include' })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (res.ok) {
                const data = await res.json()
                setEmailNotifications(data.emailNotifications)
            }
        } catch (err) {
            console.error('Failed to fetch preferences:', err)
        } finally {
            setLoading(false)
        }
    }

    const savePreferences = async () => {
        setSaving(true)
        try {
            const res = await fetch('/api/user/preferences', {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailNotifications }),
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (res.ok) {
                showToast('Preferences saved', 'success')
            } else {
                const data = await res.json().catch(() => ({}))
                showToast(data.error || 'Failed to save', 'error')
            }
        } catch {
            showToast('Failed to save preferences', 'error')
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">Settings</h1>
                    <p className="page-subtitle">Manage your notification preferences</p>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : (
                    <div className="card" style={{ maxWidth: '600px' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Email Notifications</h3>

                        <label
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-md)',
                                cursor: 'pointer',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--radius-md)',
                                background: 'var(--color-surface-hover)',
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                                style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                            />
                            <div>
                                <div style={{ fontWeight: 600 }}>Receive email notifications</div>
                                <div className="text-sm text-muted">
                                    Get notified by email when you receive votes, order updates, and quarterly reminders.
                                </div>
                            </div>
                        </label>

                        <button
                            className="btn btn-primary mt-lg"
                            onClick={savePreferences}
                            disabled={saving}
                        >
                            {saving ? 'Saving...' : 'Save Preferences'}
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}
