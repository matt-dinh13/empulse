'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'
import { Avatar, Badge, Card, PageTransition } from '@/components/ui'

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
    const [pageLoading, setPageLoading] = useState(true)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [uiUser, setUiUser] = useState<UiUser | null>(null)
    const [valueTags, setValueTags] = useState<ValueTag[]>([])
    const [selectedTagIds, setSelectedTagIds] = useState<number[]>([])
    const [showSuccess, setShowSuccess] = useState(false)
    const [sentTo, setSentTo] = useState('')
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

            await Promise.all([fetchUsers(), fetchValueTags()])
            setPageLoading(false)
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

        if (message.length < 20) {
            setError('Message must be at least 20 characters')
            return
        }

        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/votes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ receiverId: selectedUser, message, valueTagIds: selectedTagIds })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send vote')
            }

            const recipientName = users.find(u => u.id === selectedUser)?.fullName || ''
            setSentTo(recipientName)
            setShowSuccess(true)
            showToast(`Vote sent to ${recipientName}! 🎉`, 'success')
            setSelectedUser(null)
            setMessage('')
            setSearch('')
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

    const selectedUserData = users.find(u => u.id === selectedUser)
    const charCount = message.length
    const charColor = charCount === 0 ? 'var(--color-text-muted)' : charCount < 20 ? 'var(--color-error)' : charCount > 350 ? 'var(--color-warning)' : 'var(--color-accent)'
    const isFormValid = selectedUser && message.length >= 20 && message.length <= 400

    const skeleton = (
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="skeleton" style={{ height: '32px', width: '200px', marginBottom: '8px' }} />
            <div className="skeleton" style={{ height: '16px', width: '300px', marginBottom: '32px' }} />
            <div className="skeleton" style={{ height: '400px', borderRadius: 'var(--radius-lg)' }} />
        </div>
    )

    // Success state
    if (showSuccess) {
        return (
            <div className="dashboard-layout">
                <Sidebar user={uiUser} />
                <main className="main-content">
                    <div className="animate-scale-in" style={{
                        maxWidth: '520px',
                        margin: '80px auto',
                        textAlign: 'center',
                        padding: 'var(--spacing-2xl)',
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-lg)' }}>🎉</div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>
                            Recognition Sent!
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)' }}>
                            Your appreciation has been sent to <strong>{sentTo}</strong>. They'll receive +10 points!
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowSuccess(false)}
                                style={{ padding: 'var(--spacing-sm) var(--spacing-xl)' }}
                            >
                                🎯 Send Another
                            </button>
                            <button
                                className="btn"
                                onClick={() => router.push('/dashboard')}
                                style={{
                                    padding: 'var(--spacing-sm) var(--spacing-xl)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-surface)',
                                }}
                            >
                                ← Dashboard
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="dashboard-layout">
            <Sidebar user={uiUser} />

            <main className="main-content">
                <PageTransition loading={pageLoading} skeleton={skeleton}>
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--spacing-xl)',
                    }}>
                        <div>
                            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '4px' }}>
                                🏆 Send Recognition
                            </h1>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Appreciate a colleague for their great work
                            </p>
                        </div>
                    </div>

                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        {/* Error banner */}
                        {error && (
                            <div className="animate-slide-up" style={{
                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                borderRadius: 'var(--radius-md)',
                                background: 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.04))',
                                border: '1px solid rgba(239,68,68,0.2)',
                                color: 'var(--color-error)',
                                marginBottom: 'var(--spacing-lg)',
                                fontSize: '0.9rem',
                            }}>
                                ⚠️ {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            {/* Step 1: Select Colleague */}
                            <Card style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-lg)' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)',
                                    marginBottom: 'var(--spacing-md)',
                                }}>
                                    <span style={{
                                        background: 'var(--gradient-stat-1)',
                                        color: 'white',
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                    }}>1</span>
                                    <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>Select Colleague</span>
                                </div>

                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="🔍 Search by name or email..."
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value)
                                        setSelectedUser(null)
                                        setShowSuccess(false)
                                    }}
                                    style={{
                                        marginBottom: 'var(--spacing-sm)',
                                        padding: 'var(--spacing-sm) var(--spacing-md)',
                                    }}
                                />

                                {/* Selected user preview */}
                                {selectedUserData && (
                                    <div className="animate-fade-in" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-md)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'linear-gradient(135deg, rgba(0,210,100,0.06), rgba(0,110,210,0.04))',
                                        border: '1px solid rgba(0,210,100,0.2)',
                                    }}>
                                        <Avatar name={selectedUserData.fullName} size={40} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600 }}>{selectedUserData.fullName}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                {selectedUserData.email}
                                                {selectedUserData.team && ` · ${selectedUserData.team.name}`}
                                            </div>
                                        </div>
                                        <Badge variant="success" size="sm">Selected ✓</Badge>
                                    </div>
                                )}

                                {/* User list (only show when searching and no selection) */}
                                {search && !selectedUser && (
                                    <div style={{
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)',
                                    }}>
                                        {filteredUsers.length === 0 ? (
                                            <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                                                No colleagues found
                                            </div>
                                        ) : (
                                            filteredUsers.map(user => (
                                                <div
                                                    key={user.id}
                                                    onClick={() => {
                                                        setSelectedUser(user.id)
                                                        setSearch(user.fullName)
                                                    }}
                                                    style={{
                                                        padding: 'var(--spacing-sm) var(--spacing-md)',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 'var(--spacing-sm)',
                                                        borderBottom: '1px solid var(--color-border-light)',
                                                        transition: 'background var(--transition-fast)',
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-surface-hover)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                                >
                                                    <Avatar name={user.fullName} size={32} />
                                                    <div>
                                                        <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{user.fullName}</div>
                                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                                            {user.email}
                                                            {user.team && ` · ${user.team.name}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </Card>

                            {/* Step 2: Value Tags */}
                            {valueTags.length > 0 && (
                                <Card style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-lg)' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-sm)',
                                        marginBottom: 'var(--spacing-md)',
                                    }}>
                                        <span style={{
                                            background: 'var(--gradient-stat-2)',
                                            color: 'white',
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                        }}>2</span>
                                        <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>Company Values</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>(optional)</span>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {valueTags.map(tag => {
                                            const isSelected = selectedTagIds.includes(tag.id)
                                            return (
                                                <button
                                                    key={tag.id}
                                                    type="button"
                                                    onClick={() => toggleTagSelection(tag.id)}
                                                    style={{
                                                        padding: '6px 16px',
                                                        borderRadius: '20px',
                                                        border: isSelected ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                                                        background: isSelected
                                                            ? 'linear-gradient(135deg, rgba(0,210,100,0.1), rgba(0,210,100,0.05))'
                                                            : 'var(--color-surface)',
                                                        color: isSelected ? 'var(--color-accent)' : 'var(--color-text)',
                                                        fontWeight: isSelected ? 600 : 400,
                                                        cursor: 'pointer',
                                                        fontSize: '0.875rem',
                                                        transition: 'all 0.2s ease',
                                                        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                                                    }}
                                                >
                                                    {tag.emoji ? `${tag.emoji} ` : ''}{tag.name}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </Card>
                            )}

                            {/* Step 3: Message */}
                            <Card style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-lg)' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 'var(--spacing-md)',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{
                                            background: 'var(--gradient-stat-3)',
                                            color: 'white',
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                        }}>3</span>
                                        <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>Recognition Message</span>
                                    </div>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: charColor,
                                        fontVariantNumeric: 'tabular-nums',
                                    }}>
                                        {charCount} / 400
                                    </span>
                                </div>

                                <textarea
                                    className="form-input"
                                    rows={5}
                                    placeholder="Tell them why they deserve this recognition... ✨ (min 20 characters)"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    maxLength={400}
                                    style={{
                                        resize: 'vertical',
                                        minHeight: '120px',
                                        lineHeight: 1.6,
                                    }}
                                />

                                {/* Character progress bar */}
                                <div style={{
                                    marginTop: '8px',
                                    height: '3px',
                                    borderRadius: '2px',
                                    background: 'var(--color-border)',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${Math.min(100, (charCount / 400) * 100)}%`,
                                        background: charColor,
                                        borderRadius: '2px',
                                        transition: 'width 0.2s ease, background 0.3s ease',
                                    }} />
                                </div>
                            </Card>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading || !isFormValid}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-md) var(--spacing-xl)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: 'none',
                                    background: isFormValid
                                        ? 'linear-gradient(135deg, var(--color-accent), #00B856)'
                                        : 'var(--color-border)',
                                    color: isFormValid ? 'white' : 'var(--color-text-muted)',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                                    transition: 'all 0.3s ease',
                                    transform: isFormValid ? 'translateY(0)' : 'none',
                                    boxShadow: isFormValid ? '0 4px 15px rgba(0,210,100,0.3)' : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (isFormValid) {
                                        e.currentTarget.style.transform = 'translateY(-2px)'
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,210,100,0.4)'
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = isFormValid ? '0 4px 15px rgba(0,210,100,0.3)' : 'none'
                                }}
                            >
                                {loading ? (
                                    <span>⏳ Sending...</span>
                                ) : (
                                    <span>🎉 Send Recognition (+10 points)</span>
                                )}
                            </button>
                        </form>
                    </div>
                </PageTransition>
            </main>
        </div>
    )
}
