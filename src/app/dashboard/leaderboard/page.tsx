'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar' // Assuming I refactor Sidebar
import Image from 'next/image'

interface LeaderboardEntry {
    rank: number
    userId: number
    name: string
    avatar: string | null
    role: string
    department: string
    points: number
}

/* Custom CSS for animations */
const headerStyles = `
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
@keyframes popIn { 0% { transform: scale(0); opacity: 0; } 80% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }
.podium-1 { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards; opacity: 0; transform: scale(0); }
.podium-2 { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards; opacity: 0; transform: scale(0); }
.podium-3 { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards; opacity: 0; transform: scale(0); }
`

export default function LeaderboardPage() {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [period, setPeriod] = useState<'month' | 'all'>('month')
    const [data, setData] = useState<LeaderboardEntry[]>([])

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUser(JSON.parse(storedUser))
        fetchLeaderboard()
    }, [period])

    const fetchLeaderboard = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/leaderboard?period=${period}`)
            const json = await res.json()
            if (json.leaderboard) setData(json.leaderboard)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    // Top 3
    const top1 = data.find(x => x.rank === 1)
    const top2 = data.find(x => x.rank === 2)
    const top3 = data.find(x => x.rank === 3)
    const rest = data.filter(x => x.rank > 3)

    return (
        <div className="dashboard-layout">
            <style dangerouslySetInnerHTML={{ __html: headerStyles }} />
            {user && <Sidebar user={user} />}

            <main className="main-content">
                <div className="page-header items-center">
                    <div>
                        <h1 className="page-title">🏆 Hall of Fame</h1>
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

                {loading ? (
                    <div className="flex justify-center p-xl"><div className="spinner"></div></div>
                ) : (
                    <>
                        {/* PODIUM SECTION */}
                        <div className="podium-container" style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                            gap: '2rem', marginBottom: '4rem', minHeight: '300px'
                        }}>
                            {/* 2nd Place */}
                            {top2 && (
                                <div className="podium-card podium-2" style={{ textAlign: 'center', width: '200px' }}>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <div style={{
                                            width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden',
                                            border: '4px solid silver', margin: '0 auto 1rem'
                                        }}>
                                            <Image src={top2.avatar || '/default-avatar.png'} alt={top2.name} width={100} height={100} />
                                        </div>
                                        <div style={{
                                            position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)',
                                            background: 'silver', color: 'black', fontWeight: 'bold',
                                            width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>2</div>
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{top2.name}</h3>
                                    <p className="text-muted text-sm">{top2.role}</p>
                                    <div className="badge badge-warning mt-sm" style={{ background: 'silver', color: 'black' }}>
                                        {top2.points} pts
                                    </div>
                                </div>
                            )}

                            {/* 1st Place */}
                            {top1 && (
                                <div className="podium-card podium-1" style={{ textAlign: 'center', width: '240px', transform: 'translateY(-20px)' }}>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <div style={{ fontSize: '3rem', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', animation: 'float 3s infinite ease-in-out' }}>👑</div>
                                        <div style={{
                                            width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden',
                                            border: '6px solid gold', margin: '0 auto 1rem', boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)'
                                        }}>
                                            <Image src={top1.avatar || '/default-avatar.png'} alt={top1.name} width={140} height={140} />
                                        </div>
                                        <div style={{
                                            position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)',
                                            background: 'gold', color: 'black', fontWeight: 'bold', fontSize: '1.2rem',
                                            width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                        }}>1</div>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.2rem', color: '#000' }}>{top1.name}</h3>
                                    <p className="text-muted">{top1.role}</p>
                                    <div className="badge badge-warning mt-sm" style={{ background: 'gold', color: 'black', fontSize: '1rem', padding: '0.5rem 1rem' }}>
                                        ⭐ {top1.points} PTS
                                    </div>
                                </div>
                            )}

                            {/* 3rd Place */}
                            {top3 && (
                                <div className="podium-card podium-3" style={{ textAlign: 'center', width: '200px' }}>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <div style={{
                                            width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden',
                                            border: '4px solid #cd7f32', margin: '0 auto 1rem'
                                        }}>
                                            <Image src={top3.avatar || '/default-avatar.png'} alt={top3.name} width={100} height={100} />
                                        </div>
                                        <div style={{
                                            position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)',
                                            background: '#cd7f32', color: 'white', fontWeight: 'bold',
                                            width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>3</div>
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{top3.name}</h3>
                                    <p className="text-muted text-sm">{top3.role}</p>
                                    <div className="badge badge-warning mt-sm" style={{ background: '#cd7f32', color: 'white' }}>
                                        {top3.points} pts
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* LIST SECTION */}
                        {rest.length > 0 && (
                            <div className="card">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ background: 'var(--color-background)' }}>
                                            <th className="p-md text-center text-muted">#</th>
                                            <th className="p-md text-muted">Employee</th>
                                            <th className="p-md text-muted">Role</th>
                                            <th className="p-md text-right text-muted">Total Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rest.map(user => (
                                            <tr key={user.userId} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                                <td className="p-md text-center font-bold text-muted">{user.rank}</td>
                                                <td className="p-md flex items-center gap-md">
                                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', background: '#eee' }}>
                                                        <Image src={user.avatar || '/default-avatar.png'} alt={user.name} width={40} height={40} />
                                                    </div>
                                                    <span className="font-medium">{user.name}</span>
                                                </td>
                                                <td className="p-md text-muted">{user.role}</td>
                                                <td className="p-md text-right font-bold text-accent">{user.points}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {data.length === 0 && (
                            <div className="text-center p-xl text-muted">
                                No votes recorded yet in this period.
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}
