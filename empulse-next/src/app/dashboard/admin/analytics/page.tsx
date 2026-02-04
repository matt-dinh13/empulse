'use client'

import { useEffect, useState } from 'react'
import { buildAuthHeaders, handleUnauthorized } from '@/lib/clientAuth'

interface Stats {
    totalUsers: number
    totalVotes: number
    pendingOrders: number
    pointsRedeemed: number
}

interface LeaderboardUser {
    id: number
    fullName: string
    email: string
    team?: { name: string }
    voteCount: number
}

export default function AnalyticsPage() {
    const [stats, setStats] = useState<Stats | null>(null)
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const headers = buildAuthHeaders()
                if (!headers) {
                    handleUnauthorized()
                    return
                }
                const res = await fetch('/api/admin/analytics/dashboard', {
                    headers
                })
                if (res.status === 401) {
                    handleUnauthorized()
                    return
                }
                const data = await res.json()
                if (res.ok) {
                    setStats(data.stats)
                    setLeaderboard(data.leaderboard)
                } else {
                    setError(data?.error || 'Failed to load analytics')
                }
            } catch (err) {
                console.error('Failed to fetch analytics', err)
                setError('Failed to load analytics')
            } finally {
                setLoading(false)
            }
        }
        fetchAnalytics()
    }, [])

    if (loading) return <div>Loading analytics...</div>
    if (error) return <div className="text-muted">{error}</div>

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Analytics Dashboard</h1>
                <p className="page-subtitle">Overview of system activity and performance</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid grid-4 mb-xl">
                <div className="stat-card">
                    <div className="stat-label">Total Users</div>
                    <div className="stat-value">{stats?.totalUsers}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Total Votes</div>
                    <div className="stat-value text-accent">{stats?.totalVotes}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Points Redeemed</div>
                    <div className="stat-value">{stats?.pointsRedeemed}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Pending Orders</div>
                    <div className="stat-value" style={{ color: stats?.pendingOrders ? 'var(--color-warning)' : 'inherit' }}>
                        {stats?.pendingOrders}
                    </div>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="card">
                <h3 className="mb-md">🏆 Top Receivers (Leaderboard)</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--color-text-muted)' }}>Rank</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--color-text-muted)' }}>Employee</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--color-text-muted)' }}>Team</th>
                                <th style={{ textAlign: 'right', padding: '1rem', color: 'var(--color-text-muted)' }}>Votes Received</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((user, index) => (
                                <tr key={user.id} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                    <td style={{ padding: '1rem' }}>
                                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div className="font-bold">{user.fullName}</div>
                                        <div className="text-sm text-muted">{user.email}</div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{user.team?.name || '-'}</td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <span className="badge badge-success">{user.voteCount}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
