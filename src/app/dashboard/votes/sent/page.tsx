'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Vote {
    id: number
    message: string
    pointsAwarded: number
    createdAt: string
    receiver: { fullName: string; email: string }
}

export default function VotesSentPage() {
    const [votes, setVotes] = useState<Vote[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            router.push('/login')
            return
        }
        fetchVotes(token)
    }, [router])

    const fetchVotes = async (token: string) => {
        try {
            const res = await fetch('/api/votes?type=sent', {
                headers: { Authorization: `Bearer ${token}` }
            })
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
            <aside className="sidebar">
                <Image src="/logo.svg" alt="EmPulse" width={120} height={40} className="sidebar-logo" />
                <nav className="sidebar-nav">
                    <Link href="/dashboard" className="sidebar-link">📊 Dashboard</Link>
                    <Link href="/dashboard/send-vote" className="sidebar-link">🎯 Send Vote</Link>
                    <Link href="/dashboard/votes/received" className="sidebar-link">📥 Votes Received</Link>
                    <Link href="/dashboard/votes/sent" className="sidebar-link active">📤 Votes Sent</Link>
                    <Link href="/dashboard/catalog" className="sidebar-link">🎁 Rewards Catalog</Link>
                    <Link href="/dashboard/orders" className="sidebar-link">📦 My Orders</Link>
                </nav>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <button onClick={() => {
                        localStorage.removeItem('accessToken')
                        localStorage.removeItem('user')
                        window.location.href = '/login'
                    }} className="btn" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none' }}>
                        Logout
                    </button>
                </div>
            </aside>

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">📤 Votes Sent</h1>
                    <p className="page-subtitle">Recognition you have given to colleagues</p>
                </div>

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : votes.length === 0 ? (
                    <div className="card text-center">
                        <p className="text-muted">You haven&apos;t sent any votes yet.</p>
                        <Link href="/dashboard/send-vote" className="btn btn-primary mt-md">🎯 Send Your First Vote</Link>
                    </div>
                ) : (
                    <div className="grid" style={{ gap: 'var(--spacing-md)' }}>
                        {votes.map(vote => (
                            <div key={vote.id} className="card">
                                <div className="flex justify-between items-center mb-sm">
                                    <span className="font-bold">To: {vote.receiver.fullName}</span>
                                    <span className="badge badge-neutral">{vote.pointsAwarded} pts</span>
                                </div>
                                <p style={{ marginBottom: 'var(--spacing-sm)' }}>{vote.message}</p>
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
