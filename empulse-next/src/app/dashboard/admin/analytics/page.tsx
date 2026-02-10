'use client'

import { useEffect, useState } from 'react'
import { handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'

interface Stats {
    totalUsers: number
    totalVotes: number
    votesThisMonth: number
    voteTrend: number
    activeVotersPct: number
    pendingOrders: number
    pointsRedeemed: number
    pointsRedeemedThisMonth: number
}

interface LeaderboardUser {
    fullName: string
    email: string
    team?: { name: string }
    voteCount: number
}

interface ValueTagStat {
    name: string
    icon: string
    count: number
}

interface RegionStat {
    code: string
    name: string
    votes: number
    pointsRedeemed: number
}

interface PopularItem {
    name: string
    icon: string
    orderCount: number
    totalPoints: number
}

export default function AnalyticsPage() {
    const [stats, setStats] = useState<Stats | null>(null)
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([])
    const [valueTagStats, setValueTagStats] = useState<ValueTagStat[]>([])
    const [regionalBreakdown, setRegionalBreakdown] = useState<RegionStat[]>([])
    const [popularItems, setPopularItems] = useState<PopularItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { showToast } = useToast()

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await fetch('/api/admin/analytics/dashboard', {
                    credentials: 'include'
                })
                if (res.status === 401) {
                    handleUnauthorized()
                    return
                }
                const data = await res.json()
                if (res.ok) {
                    setStats(data.stats)
                    setLeaderboard(data.leaderboard)
                    setValueTagStats(data.valueTagStats ?? [])
                    setRegionalBreakdown(data.regionalBreakdown ?? [])
                    setPopularItems(data.popularItems ?? [])
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

    const handleExport = async (type: string) => {
        try {
            const res = await fetch(`/api/admin/export/${type}`, { credentials: 'include' })
            if (!res.ok) {
                showToast('Export failed', 'error')
                return
            }
            const blob = await res.blob()
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${type}-export.csv`
            a.click()
            URL.revokeObjectURL(url)
            showToast('Export downloaded', 'success')
        } catch {
            showToast('Export failed', 'error')
        }
    }

    if (loading) return <div className="flex justify-center p-lg"><div className="spinner"></div></div>
    if (error) return <div className="text-muted">{error}</div>

    const maxTagCount = valueTagStats.length > 0 ? Math.max(...valueTagStats.map(t => t.count)) : 1

    return (
        <div>
            <div className="page-header flex justify-between items-center">
                <div>
                    <h1 className="page-title">Analytics Dashboard</h1>
                    <p className="page-subtitle">Overview of system activity and performance</p>
                </div>
                <div className="flex gap-sm">
                    <button className="btn btn-outline" onClick={() => handleExport('votes')}>
                        Export Votes
                    </button>
                    <button className="btn btn-outline" onClick={() => handleExport('redemptions')}>
                        Export Orders
                    </button>
                    <button className="btn btn-outline" onClick={() => handleExport('engagement')}>
                        Export Engagement
                    </button>
                </div>
            </div>

            {/* Core Stats */}
            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 'var(--spacing-lg)' }}>
                <div className="stat-card">
                    <div className="stat-label">Total Users</div>
                    <div className="stat-value">{stats?.totalUsers}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Votes This Month</div>
                    <div className="stat-value text-accent">{stats?.votesThisMonth}</div>
                    {stats?.voteTrend !== undefined && stats.voteTrend !== 0 && (
                        <div style={{ fontSize: '0.8rem', color: stats.voteTrend > 0 ? 'var(--color-success)' : 'var(--color-error)', marginTop: '0.25rem' }}>
                            {stats.voteTrend > 0 ? '+' : ''}{stats.voteTrend}% vs last month
                        </div>
                    )}
                </div>
                <div className="stat-card">
                    <div className="stat-label">Active Voters</div>
                    <div className="stat-value">{stats?.activeVotersPct}%</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                        of total users this month
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Pending Orders</div>
                    <div className="stat-value" style={{ color: stats?.pendingOrders ? 'var(--color-warning)' : 'inherit' }}>
                        {stats?.pendingOrders}
                    </div>
                </div>
            </div>

            {/* Second Row Stats */}
            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 'var(--spacing-lg)' }}>
                <div className="stat-card">
                    <div className="stat-label">Total Votes (All Time)</div>
                    <div className="stat-value">{stats?.totalVotes}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Points Redeemed (All Time)</div>
                    <div className="stat-value">{stats?.pointsRedeemed}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Points Redeemed (This Month)</div>
                    <div className="stat-value text-accent">{stats?.pointsRedeemedThisMonth}</div>
                </div>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                {/* Value Tag Distribution */}
                <div className="card">
                    <h3 className="mb-md">Value Tag Distribution</h3>
                    {valueTagStats.length === 0 ? (
                        <p className="text-muted text-sm">No value tag data yet.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {valueTagStats.map(tag => (
                                <div key={tag.name}>
                                    <div className="flex justify-between mb-xs">
                                        <span style={{ fontSize: '0.875rem' }}>{tag.icon} {tag.name}</span>
                                        <span className="text-sm text-muted">{tag.count}</span>
                                    </div>
                                    <div style={{ height: '8px', background: 'var(--color-border-light)', borderRadius: 'var(--radius-full)' }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${(tag.count / maxTagCount) * 100}%`,
                                            background: 'var(--color-accent)',
                                            borderRadius: 'var(--radius-full)',
                                            transition: 'width 0.3s ease',
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Regional Breakdown */}
                <div className="card">
                    <h3 className="mb-md">Regional Breakdown</h3>
                    {regionalBreakdown.length === 0 ? (
                        <p className="text-muted text-sm">No regional data yet.</p>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Region</th>
                                    <th style={{ textAlign: 'right', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Votes</th>
                                    <th style={{ textAlign: 'right', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Points Redeemed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {regionalBreakdown.map(r => (
                                    <tr key={r.code} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                        <td style={{ padding: '0.5rem' }}>
                                            <span className="font-bold">{r.code}</span>
                                            <span className="text-muted text-sm"> {r.name}</span>
                                        </td>
                                        <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>{r.votes}</td>
                                        <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>{r.pointsRedeemed}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
                {/* Top Receivers */}
                <div className="card">
                    <h3 className="mb-md">Top Receivers</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Rank</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Employee</th>
                                <th style={{ textAlign: 'right', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((user, index) => (
                                <tr key={user.email} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                    <td style={{ padding: '0.5rem' }}>
                                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                                    </td>
                                    <td style={{ padding: '0.5rem' }}>
                                        <div className="font-bold">{user.fullName}</div>
                                        <div className="text-sm text-muted">{user.team?.name || '-'}</div>
                                    </td>
                                    <td style={{ padding: '0.5rem', textAlign: 'right' }}>
                                        <span className="badge badge-success">{user.voteCount}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Popular Rewards */}
                <div className="card">
                    <h3 className="mb-md">Popular Rewards</h3>
                    {popularItems.length === 0 ? (
                        <p className="text-muted text-sm">No redemption data yet.</p>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Item</th>
                                    <th style={{ textAlign: 'right', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Orders</th>
                                    <th style={{ textAlign: 'right', padding: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {popularItems.map(item => (
                                    <tr key={item.name} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                        <td style={{ padding: '0.5rem' }}>
                                            <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                                            {item.name}
                                        </td>
                                        <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>{item.orderCount}</td>
                                        <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>{item.totalPoints}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}
