'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { Avatar, Badge, Card, PageTransition, EmptyState } from '@/components/ui'

interface ValueTag {
    valueTag: { id: number; name: string; icon: string }
}

interface Vote {
    id: number
    message: string
    pointsAwarded: number
    createdAt: string
    sender: { fullName: string; email: string }
    valueTags?: ValueTag[]
}

interface UiUser {
    fullName?: string
    role?: string
}

export default function VotesReceivedPage() {
    const [user, setUser] = useState<UiUser | null>(null)
    const [votes, setVotes] = useState<Vote[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

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

            fetchVotes()
        }
        checkAuth()
    }, [router])

    const fetchVotes = async () => {
        try {
            const res = await fetch('/api/votes?type=received', {
                credentials: 'include'
            })
            if (res.status === 401) {
                handleUnauthorized()
                return
            }
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                setError(data.error || 'Failed to load votes')
                return
            }
            const data = await res.json()
            if (res.ok) {
                setVotes(data.votes)
            }
        } catch (err) {
            console.error('Failed to fetch votes:', err)
            setError('Failed to load votes')
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr)
        const now = new Date()
        const diffMs = now.getTime() - date.getTime()
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

        if (diffDays === 0) return 'Today'
        if (diffDays === 1) return 'Yesterday'
        if (diffDays < 7) return `${diffDays} days ago`
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const skeleton = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {[1, 2, 3].map(i => (
                <div key={i} className="skeleton" style={{ height: '120px', borderRadius: 'var(--radius-lg)' }} />
            ))}
        </div>
    )

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <PageTransition loading={loading} skeleton={skeleton}>
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '4px' }}>
                            🎁 Votes Received
                        </h1>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Recognition you have received from colleagues
                        </p>
                    </div>

                    {error ? (
                        <Card style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-md)' }}>{error}</p>
                            <button className="btn btn-outline" onClick={() => { setError(null); setLoading(true); fetchVotes() }}>Retry</button>
                        </Card>
                    ) : votes.length === 0 ? (
                        <EmptyState
                            icon="🎁"
                            title="No votes received yet"
                            description="Keep up the great work! Recognition from your colleagues will appear here."
                        />
                    ) : (
                        <>
                            {/* Summary stat */}
                            <div style={{
                                display: 'flex',
                                gap: 'var(--spacing-lg)',
                                marginBottom: 'var(--spacing-xl)',
                            }}>
                                <Card style={{
                                    padding: 'var(--spacing-md) var(--spacing-lg)',
                                    background: 'linear-gradient(135deg, rgba(0,210,100,0.08), rgba(0,210,100,0.02))',
                                    border: '1px solid rgba(0,210,100,0.15)',
                                    flex: 1,
                                    maxWidth: '200px',
                                }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '2px' }}>
                                        Total Received
                                    </div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                                        {votes.length}
                                    </div>
                                </Card>
                                <Card style={{
                                    padding: 'var(--spacing-md) var(--spacing-lg)',
                                    background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02))',
                                    border: '1px solid rgba(99,102,241,0.15)',
                                    flex: 1,
                                    maxWidth: '200px',
                                }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '2px' }}>
                                        Total Points
                                    </div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#6366f1' }}>
                                        +{votes.reduce((sum, v) => sum + v.pointsAwarded, 0)}
                                    </div>
                                </Card>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                {votes.map((vote, idx) => (
                                    <Card
                                        key={vote.id}
                                        className={`animate-slide-up stagger-${Math.min(idx + 1, 5)}`}
                                        style={{ padding: 'var(--spacing-lg)' }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 'var(--spacing-md)',
                                        }}>
                                            <Avatar name={vote.sender.fullName} size={40} />
                                            <div style={{ flex: 1 }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '6px',
                                                }}>
                                                    <div>
                                                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                                                            {vote.sender.fullName}
                                                        </span>
                                                        <span style={{
                                                            color: 'var(--color-text-muted)',
                                                            fontSize: '0.8rem',
                                                            marginLeft: '8px',
                                                        }}>
                                                            {formatDate(vote.createdAt)}
                                                        </span>
                                                    </div>
                                                    <Badge variant="success" size="sm">+{vote.pointsAwarded} pts</Badge>
                                                </div>
                                                <p style={{
                                                    margin: '0 0 8px 0',
                                                    lineHeight: 1.5,
                                                    color: 'var(--color-text)',
                                                    fontSize: '0.9rem',
                                                }}>
                                                    {vote.message}
                                                </p>
                                                {vote.valueTags && vote.valueTags.length > 0 && (
                                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                                        {vote.valueTags.map(vt => (
                                                            <Badge key={vt.valueTag.id} variant="info" size="sm">
                                                                {vt.valueTag.icon} {vt.valueTag.name}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </PageTransition>
            </main>
        </div>
    )
}
