'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'

interface TeamMember {
    id: number
    fullName: string
    email: string
    team: string
    votesSent: number
    votesReceived: number
    isActive: boolean
}

interface TeamSummary {
    totalMembers: number
    totalSent: number
    totalReceived: number
    inactiveCount: number
}

interface FeedItem {
    id: number
    senderName: string
    receiverName: string
    message: string
    values?: string[]
    createdAt: string
}

interface UiUser {
    fullName?: string
    role?: string
}

export default function MyTeamPage() {
    const [uiUser, setUiUser] = useState<UiUser | null>(null)
    const [summary, setSummary] = useState<TeamSummary | null>(null)
    const [members, setMembers] = useState<TeamMember[]>([])
    const [feed, setFeed] = useState<FeedItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/me', { credentials: 'include' })
                if (!res.ok) { router.push('/login'); return }
            } catch { router.push('/login'); return }

            const storedUser = getStoredUser()
            if (storedUser) setUiUser(storedUser as UiUser)

            fetchTeam()
        }
        checkAuth()
    }, [router])

    const fetchTeam = async () => {
        try {
            const res = await fetch('/api/manager/team', { credentials: 'include' })
            if (res.status === 401) { handleUnauthorized(); return }
            if (res.status === 404) {
                setError('You have no team members assigned.')
                setLoading(false)
                return
            }
            const data = await res.json()
            if (res.ok) {
                setSummary(data.summary)
                setMembers(data.members)
                setFeed(data.feed)
            } else {
                setError(data.error || 'Failed to load team data')
            }
        } catch (err) {
            console.error(err)
            setError('Failed to load team data')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="dashboard-layout">
            <Sidebar user={uiUser} />

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">My Team</h1>
                    <p className="page-subtitle">Track your team&apos;s recognition activity this month</p>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : error ? (
                    <div className="card text-center">
                        <p className="text-muted">{error}</p>
                    </div>
                ) : (
                    <>
                        {/* Summary Stats */}
                        <div className="stats-grid" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div className="stat-card">
                                <div className="stat-label">Team Members</div>
                                <div className="stat-value">{summary?.totalMembers}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-label">Votes Sent</div>
                                <div className="stat-value accent">{summary?.totalSent}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-label">Votes Received</div>
                                <div className="stat-value">{summary?.totalReceived}</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-label">Inactive This Month</div>
                                <div className="stat-value" style={{ color: summary?.inactiveCount ? 'var(--color-warning)' : 'var(--color-success)' }}>
                                    {summary?.inactiveCount}
                                </div>
                            </div>
                        </div>

                        {/* Team Members Table */}
                        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)', borderBottom: '1px solid var(--color-border)' }}>
                                <h3>Team Members</h3>
                            </div>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'var(--color-surface-hover)', borderBottom: '1px solid var(--color-border)' }}>
                                        <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Employee</th>
                                        <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Team</th>
                                        <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Sent</th>
                                        <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Received</th>
                                        <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map(member => (
                                        <tr key={member.id} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                            <td style={{ padding: 'var(--spacing-md)' }}>
                                                <div style={{ fontWeight: 600 }}>{member.fullName}</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{member.email}</div>
                                            </td>
                                            <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-muted)' }}>{member.team}</td>
                                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 600 }}>{member.votesSent}</td>
                                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 600 }}>{member.votesReceived}</td>
                                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                                <span className={`badge ${member.isActive ? 'badge-success' : 'badge-warning'}`}>
                                                    {member.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Team Feed */}
                        {feed.length > 0 && (
                            <div className="card">
                                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Recent Team Recognition</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                    {feed.map(item => (
                                        <div key={item.id} style={{
                                            padding: 'var(--spacing-sm) var(--spacing-md)',
                                            background: 'var(--color-surface-hover)',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border-light)',
                                        }}>
                                            <div style={{ fontSize: '0.9rem' }}>
                                                <strong>{item.senderName}</strong>
                                                <span className="text-muted"> recognized </span>
                                                <strong>{item.receiverName}</strong>
                                            </div>
                                            {item.message && (
                                                <p className="text-sm text-muted" style={{ margin: '0.25rem 0' }}>
                                                    {item.message.length > 120 ? `${item.message.slice(0, 120)}...` : item.message}
                                                </p>
                                            )}
                                            {item.values && item.values.length > 0 && (
                                                <div className="flex gap-xs" style={{ marginTop: '0.25rem', flexWrap: 'wrap' }}>
                                                    {item.values.map(val => (
                                                        <span key={val} className="badge badge-success" style={{ fontSize: '0.7rem' }}>{val}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}
