'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'

interface User {
    id: number
    email: string
    fullName: string
    team?: { name: string }
}

interface ValueTag {
    id: number
    name: string
    emoji?: string
}

interface UiUser {
    fullName?: string
    role?: string
}

export default function SendVotePage() {
    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<number | null>(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [uiUser, setUiUser] = useState<UiUser | null>(null)
    const [valueTags, setValueTags] = useState<ValueTag[]>([])
    const [selectedTagIds, setSelectedTagIds] = useState<number[]>([])
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
            if (storedUser) setUiUser(storedUser as UiUser)

            fetchUsers()
            fetchValueTags()
        }
        checkAuth()
    }, [router])

    const fetchValueTags = async () => {
        try {
            const res = await fetch('/api/value-tags', { credentials: 'include' })
            if (res.ok) {
                const data = await res.json()
                setValueTags(data.tags || data.valueTags || data)
            }
        } catch (err) {
            console.error('Failed to fetch value tags:', err)
        }
    }

    const toggleTagSelection = (tagId: number) => {
        setSelectedTagIds(prev =>
            prev.includes(tagId)
                ? prev.filter(id => id !== tagId)
                : [...prev, tagId]
        )
    }

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/users', {
                credentials: 'include'
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            const data = await res.json()
            if (res.ok) {
                setUsers(data.users)
            }
        } catch (err) {
            console.error('Failed to fetch users:', err)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedUser || !message.trim()) {
            setError('Please select a user and enter a message')
            return
        }

        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/votes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ receiverId: selectedUser, message, valueTagIds: selectedTagIds })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send vote')
            }

            showToast('Vote sent successfully!', 'success')
            setSelectedUser(null)
            setMessage('')
            setSelectedTagIds([])
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send vote')
        } finally {
            setLoading(false)
        }
    }

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="dashboard-layout">
            <Sidebar user={uiUser} />

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">🎯 Send a Vote</h1>
                    <p className="page-subtitle">Recognize a colleague for their great work!</p>
                </div>

                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {error && <div className="login-error">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Search Colleague</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Search by name or email..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setSelectedUser(null) // Clear selection when typing
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Select Colleague</label>
                            {/* Only show list if searching and not selected yet, or always show but filtered? User said dropdown. Let's keep existing logic but update UI */}
                            <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                {filteredUsers.map(user => (
                                    <div
                                        key={user.id}
                                        onClick={() => {
                                            setSelectedUser(user.id)
                                            setSearch(user.fullName) // Update input with name
                                        }}
                                        style={{
                                            padding: 'var(--spacing-sm) var(--spacing-md)',
                                            cursor: 'pointer',
                                            background: selectedUser === user.id ? 'var(--color-accent-light)' : 'transparent',
                                            borderBottom: '1px solid var(--color-border-light)'
                                        }}
                                    >
                                        <div style={{ fontWeight: 500 }}>{user.fullName}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{user.email}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {valueTags.length > 0 && (
                            <div className="form-group">
                                <label className="form-label">Value Tags</label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                                    {valueTags.map(tag => (
                                        <button
                                            key={tag.id}
                                            type="button"
                                            onClick={() => toggleTagSelection(tag.id)}
                                            style={{
                                                padding: 'var(--spacing-xs) var(--spacing-md)',
                                                borderRadius: 'var(--radius-full, 9999px)',
                                                border: selectedTagIds.includes(tag.id)
                                                    ? '2px solid var(--color-primary)'
                                                    : '1px solid var(--color-border)',
                                                background: selectedTagIds.includes(tag.id)
                                                    ? 'var(--color-accent-light)'
                                                    : 'var(--color-bg-subtle)',
                                                color: selectedTagIds.includes(tag.id)
                                                    ? 'var(--color-primary)'
                                                    : 'var(--color-text)',
                                                fontWeight: selectedTagIds.includes(tag.id) ? 600 : 400,
                                                cursor: 'pointer',
                                                fontSize: '0.875rem',
                                                transition: 'all 0.15s ease',
                                            }}
                                        >
                                            {tag.emoji ? `${tag.emoji} ` : ''}{tag.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">
                                Recognition Message
                                <span style={{ float: 'right', fontSize: '0.8rem', color: (message.length < 20 || message.length > 400) ? 'red' : 'green' }}>
                                    {message.length} / 400 chars
                                </span>
                            </label>
                            <textarea
                                className="form-input"
                                rows={4}
                                placeholder="Tell them why they deserve this recognition... (min 20, max 400 chars)"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                minLength={20}
                                maxLength={400}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary login-btn"
                            disabled={loading || message.length < 20 || message.length > 400}
                            style={{ opacity: (message.length < 20 || message.length > 400) ? 0.5 : 1 }}
                        >
                            {loading ? 'Sending...' : '🎯 Send Vote (+10 points)'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
