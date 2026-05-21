'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { SkeletonTable } from '@/components/Skeleton'
import { Avatar, Badge, EmptyState, PageTransition } from '@/components/ui'

interface LeaderboardEntry {
    rank: number
    userId?: number
    teamId?: number
    name: string
    avatar: string | null
    role: string
    department: string
    points: number
    votesGiven?: number
    voteCount?: number
}

type LeaderboardType = 'receivers' | 'senders' | 'teams'

interface UiUser {
    fullName?: string
    role?: string
}

export default function LeaderboardPage() {
    const [user, setUser] = useState<UiUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [period, setPeriod] = useState<'month' | 'all'>('month')
    const [type, setType] = useState<LeaderboardType>('receivers')
    const [data, setData] = useState<LeaderboardEntry[]>([])

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUser(JSON.parse(storedUser) as UiUser)
        fetchLeaderboard()
    }, [period, type]) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchLeaderboard = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`/api/leaderboard?period=${period}&type=${type}`)
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                setError(data.error || 'Failed to load leaderboard')
                return
            }
            const json = await res.json()
            if (json.leaderboard) setData(json.leaderboard)
        } catch (err) {
            console.error(err)
            setError('Failed to load leaderboard')
        } finally {
            setLoading(false)
        }
    }

    const podiumColors = ['#FFD700', '#C0C0C0', '#CD7F32']
    const podiumEmojis = ['👑', '⭐', '🔥']

    const top3 = data.slice(0, 3)
    const rest = data.slice(3)

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <div className="page-header" style={{ flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <div className="flex justify-between items-center" style={{ width: '100%' }}>
                        <div>
                            <h1 className="page-title">🏆 Leaderboard</h1>
                            <p className="page-subtitle">Recognizing our top contributors</p>
                        </div>
                        <div className="tabs-nav" style={{ border: 'none', background: 'transparent' }}>
                            <button
                                className={`tab-btn ${period === 'month' ? 'active' : ''}`}
                                onClick={() => setPeriod('month')}
                            >
                                This Month
                            </button>
                            <button
                                className={`tab-btn ${period === 'all' ? 'active' : ''}`}
                                onClick={() => setPeriod('all')}
                            >
                                All Time
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tabs-nav" style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <button
                        className={`tab-btn ${type === 'receivers' ? 'active' : ''}`}
                        onClick={() => setType('receivers')}
                    >
                        🏅 Top Recognized
                    </button>
                    <button
                        className={`tab-btn ${type === 'senders' ? 'active' : ''}`}
                        onClick={() => setType('senders')}
                    >
                        💪 Top Recognizers
                    </button>
                    <button
                        className={`tab-btn ${type === 'teams' ? 'active' : ''}`}
                        onClick={() => setType('teams')}
                    >
                        👥 Top Teams
                    </button>
                </div>

                <PageTransition loading={loading} skeleton={
                    <div className="card" style={{ padding: 'var(--spacing-lg)' }}><SkeletonTable rows={5} /></div>
                }>
                    {error ? (
                        <EmptyState
                            icon="⚠️"
                            title="Failed to load"
                            description={error}
                            action={<button className="btn btn-primary" onClick={fetchLeaderboard}>Retry</button>}
                        />
                    ) : data.length === 0 ? (
                        <EmptyState
                            icon="🏆"
                            title="No data yet"
                            description="Start recognizing your colleagues to see them on the leaderboard!"
                        />
                    ) : (
                        <>
                            {/* Podium - Top 3 */}
                            {type !== 'teams' && top3.length > 0 && (
                                <div
                                    className="animate-fade-in"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        gap: 'var(--spacing-md)',
                                        marginBottom: 'var(--spacing-xl)',
                                        padding: 'var(--spacing-lg) 0',
                                    }}
                                >
                                    {/* Reorder: 2nd, 1st, 3rd */}
                                    {[top3[1], top3[0], top3[2]].filter(Boolean).map((entry, i) => {
                                        const actualRank = entry.rank
                                        const heights = [120, 160, 100]
                                        const displayOrder = top3.length === 1 ? [1] : top3.length === 2 ? [1, 0] : [1, 0, 2]
                                        const height = heights[displayOrder[i]] || 100

                                        return (
                                            <div
                                                key={entry.userId ?? entry.rank}
                                                className="animate-scale-in"
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    animationDelay: `${i * 0.15}s`,
                                                    flex: '0 1 160px',
                                                }}
                                            >
                                                <div style={{ position: 'relative', marginBottom: 'var(--spacing-sm)' }}>
                                                    <Avatar name={entry.name} src={entry.avatar || undefined} size={actualRank === 1 ? 72 : 56} />
                                                    <span
                                                        style={{
                                                            position: 'absolute',
                                                            top: -8,
                                                            right: -8,
                                                            fontSize: actualRank === 1 ? '1.4rem' : '1rem',
                                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                                        }}
                                                    >
                                                        {podiumEmojis[actualRank - 1]}
                                                    </span>
                                                </div>
                                                <span style={{ fontWeight: 700, fontSize: '0.9rem', textAlign: 'center' }}>
                                                    {entry.name}
                                                </span>
                                                <Badge
                                                    variant={actualRank === 1 ? 'accent' : 'info'}
                                                    size="sm"
                                                    style={{ marginTop: 'var(--spacing-xs)' }}
                                                >
                                                    {type === 'senders'
                                                        ? `${entry.voteCount ?? entry.votesGiven ?? entry.points} votes`
                                                        : `${entry.points} pts`
                                                    }
                                                </Badge>
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        height: `${height}px`,
                                                        marginTop: 'var(--spacing-sm)',
                                                        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                                                        background: `linear-gradient(180deg, ${podiumColors[actualRank - 1]}40, ${podiumColors[actualRank - 1]}15)`,
                                                        border: `2px solid ${podiumColors[actualRank - 1]}60`,
                                                        borderBottom: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '2rem',
                                                        fontWeight: 800,
                                                        color: podiumColors[actualRank - 1],
                                                        textShadow: `0 2px 8px ${podiumColors[actualRank - 1]}30`,
                                                    }}
                                                >
                                                    #{actualRank}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}

                            {/* Table - Remaining entries */}
                            {(type === 'teams' ? data : rest).length > 0 && (
                                <div className="card animate-slide-up" style={{ padding: 0, overflow: 'hidden', opacity: 0 }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ background: 'var(--color-surface-hover)', borderBottom: '1px solid var(--color-border)' }}>
                                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', width: '80px' }}>Rank</th>
                                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>
                                                    {type === 'teams' ? 'Team' : 'Employee'}
                                                </th>
                                                {type !== 'teams' && (
                                                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>Department</th>
                                                )}
                                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                                                    {type === 'senders' ? 'Votes Given' : 'Points'}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(type === 'teams' ? data : rest).map((entry) => (
                                                <tr
                                                    key={entry.userId ?? entry.teamId ?? entry.rank}
                                                    style={{
                                                        borderBottom: '1px solid var(--color-border-light)',
                                                        transition: 'background var(--transition-fast, 0.15s ease)',
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-surface-hover)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                                >
                                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>
                                                        #{entry.rank}
                                                    </td>
                                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                                        {type === 'teams' ? (
                                                            <div style={{ fontWeight: 600 }}>{entry.name}</div>
                                                        ) : (
                                                            <div className="flex items-center gap-md">
                                                                <Avatar name={entry.name} src={entry.avatar || undefined} size={36} />
                                                                <div>
                                                                    <div style={{ fontWeight: 600 }}>{entry.name}</div>
                                                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{entry.role}</div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </td>
                                                    {type !== 'teams' && (
                                                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-text-muted)' }}>
                                                            {entry.department}
                                                        </td>
                                                    )}
                                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                                                        <Badge variant="success" size="sm">
                                                            {type === 'senders'
                                                                ? `${entry.voteCount ?? entry.votesGiven ?? entry.points} votes`
                                                                : `${entry.points} pts`
                                                            }
                                                        </Badge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}
                </PageTransition>
            </main>
        </div>
    )
}
