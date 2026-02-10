'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

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
    const [period, setPeriod] = useState<'month' | 'all'>('month')
    const [type, setType] = useState<LeaderboardType>('receivers')
    const [data, setData] = useState<LeaderboardEntry[]>([])

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUser(JSON.parse(storedUser) as UiUser)
        fetchLeaderboard()
    }, [period, type])

    const fetchLeaderboard = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/leaderboard?period=${period}&type=${type}`)
            const json = await res.json()
            if (json.leaderboard) setData(json.leaderboard)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1: return '🥇'
            case 2: return '🥈'
            case 3: return '🥉'
            default: return `#${rank}`
        }
    }

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />

            <main className="main-content">
                <div className="page-header items-center">
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

                <div className="tabs-nav" style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <button
                        className={`tab-btn ${type === 'receivers' ? 'active' : ''}`}
                        onClick={() => setType('receivers')}
                    >
                        Top Recognized
                    </button>
                    <button
                        className={`tab-btn ${type === 'senders' ? 'active' : ''}`}
                        onClick={() => setType('senders')}
                    >
                        Top Recognizers
                    </button>
                    <button
                        className={`tab-btn ${type === 'teams' ? 'active' : ''}`}
                        onClick={() => setType('teams')}
                    >
                        Top Teams
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center p-xl"><div className="spinner"></div></div>
                ) : (
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)' }}>
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
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={type === 'teams' ? 3 : 4} style={{ padding: 'var(--spacing-lg)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                                            No data available yet.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((entry) => (
                                        <tr key={entry.userId ?? entry.teamId ?? entry.rank} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                                {getRankIcon(entry.rank)}
                                            </td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>
                                                {type === 'teams' ? (
                                                    <div style={{ fontWeight: 600 }}>{entry.name}</div>
                                                ) : (
                                                    <div className="flex items-center gap-md">
                                                        <div style={{
                                                            width: '40px', height: '40px', borderRadius: '50%',
                                                            background: 'var(--color-bg-subtle)', overflow: 'hidden',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: '1.2rem'
                                                        }}>
                                                            {entry.avatar ? (
                                                                <Image src={entry.avatar} alt={entry.name} width={40} height={40} />
                                                            ) : (
                                                                '👤'
                                                            )}
                                                        </div>
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
                                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                                {type === 'senders'
                                                    ? `${entry.voteCount ?? entry.votesGiven ?? entry.points}`
                                                    : `${entry.points} pts`
                                                }
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    )
}
