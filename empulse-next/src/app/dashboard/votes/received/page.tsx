'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'

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
            const data = await res.json()
            if (res.ok) {
                setVotes(data.votes)
            }
        } catch (err) {
            console.error('Failed to fetch votes:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">📥 Votes Received</h1>
                    <p className="page-subtitle">Recognition you have received from colleagues</p>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : votes.length === 0 ? (
                    <div className="card text-center">
                        <p className="text-muted">No votes received yet. Keep up the great work! 💪</p>
                    </div>
                ) : (
                    <div className="grid" style={{ gap: 'var(--spacing-md)' }}>
                        {votes.map(vote => (
                            <div key={vote.id} className="card">
                                <div className="flex justify-between items-center mb-sm">
                                    <span className="font-bold">{vote.sender.fullName}</span>
                                    <span className="badge badge-success">+{vote.pointsAwarded} pts</span>
                                </div>
                                <p style={{ marginBottom: 'var(--spacing-sm)' }}>{vote.message}</p>
                                {vote.valueTags && vote.valueTags.length > 0 && (
                                    <div className="flex gap-sm" style={{ marginBottom: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                        {vote.valueTags.map(vt => (
                                            <span
                                                key={vt.valueTag.id}
                                                style={{
                                                    fontSize: '0.7rem',
                                                    padding: '0.15rem 0.5rem',
                                                    borderRadius: '9999px',
                                                    background: 'rgba(0,210,100,0.15)',
                                                    color: '#00D264',
                                                    border: '1px solid rgba(0,210,100,0.25)',
                                                }}
                                            >
                                                {vt.valueTag.icon} {vt.valueTag.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <p className="text-sm text-muted">
                                    {new Date(vote.createdAt).toLocaleDateString('vi-VN')}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
