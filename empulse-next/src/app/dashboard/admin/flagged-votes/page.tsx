'use client'

import { useEffect, useState } from 'react'
import { handleUnauthorized } from '@/lib/clientAuth'

interface VoteInfo {
    id: number
    senderName: string
    receiverName: string
    message: string
    createdAt: string
}

interface FlaggedItem {
    id: number
    flaggedAt: string
    vote: VoteInfo | null
    reciprocalVote: VoteInfo | null
}

export default function FlaggedVotesPage() {
    const [items, setItems] = useState<FlaggedItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/admin/flagged-votes', { credentials: 'include' })
                if (res.status === 401) { handleUnauthorized(); return }
                const data = await res.json()
                if (res.ok) {
                    setItems(data.items)
                } else {
                    setError(data.error || 'Failed to load flagged votes')
                }
            } catch {
                setError('Failed to load flagged votes')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return <div className="flex justify-center p-lg"><div className="spinner"></div></div>
    if (error) return <div className="text-muted">{error}</div>

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Flagged Votes</h1>
                    <p className="page-subtitle">Reciprocal votes detected by the system</p>
                </div>
            </div>

            {items.length === 0 ? (
                <div className="card text-center" style={{ padding: 'var(--spacing-2xl)' }}>
                    <p className="text-muted">No flagged votes found. The system automatically flags reciprocal voting patterns.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {items.map(item => (
                        <div key={item.id} className="card" style={{ padding: 'var(--spacing-lg)' }}>
                            <div className="flex justify-between items-center mb-md">
                                <span className="badge badge-warning">Reciprocal Vote</span>
                                <span className="text-sm text-muted">
                                    Flagged {new Date(item.flaggedAt).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                                {/* Vote A */}
                                {item.vote && (
                                    <div style={{
                                        padding: 'var(--spacing-md)',
                                        background: 'var(--color-surface-hover)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-border-light)',
                                    }}>
                                        <div className="text-sm text-muted mb-sm">Vote #{item.vote.id}</div>
                                        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                            <strong>{item.vote.senderName}</strong>
                                            <span className="text-muted"> → </span>
                                            <strong>{item.vote.receiverName}</strong>
                                        </div>
                                        <p className="text-sm text-muted" style={{ margin: 0 }}>
                                            {item.vote.message.length > 150
                                                ? `${item.vote.message.slice(0, 150)}...`
                                                : item.vote.message}
                                        </p>
                                        <div className="text-sm text-muted" style={{ marginTop: '0.5rem' }}>
                                            {new Date(item.vote.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                )}

                                {/* Vote B (reciprocal) */}
                                {item.reciprocalVote && (
                                    <div style={{
                                        padding: 'var(--spacing-md)',
                                        background: 'var(--color-warning-light)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-warning)',
                                    }}>
                                        <div className="text-sm text-muted mb-sm">Reciprocal Vote #{item.reciprocalVote.id}</div>
                                        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                            <strong>{item.reciprocalVote.senderName}</strong>
                                            <span className="text-muted"> → </span>
                                            <strong>{item.reciprocalVote.receiverName}</strong>
                                        </div>
                                        <p className="text-sm text-muted" style={{ margin: 0 }}>
                                            {item.reciprocalVote.message.length > 150
                                                ? `${item.reciprocalVote.message.slice(0, 150)}...`
                                                : item.reciprocalVote.message}
                                        </p>
                                        <div className="text-sm text-muted" style={{ marginTop: '0.5rem' }}>
                                            {new Date(item.reciprocalVote.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
