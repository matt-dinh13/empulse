'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface User {
    id: number
    email: string
    fullName: string
    team?: { name: string }
}

export default function SendVotePage() {
    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<number | null>(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [search, setSearch] = useState('')
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            router.push('/login')
            return
        }
        fetchUsers(token)
    }, [router])

    const fetchUsers = async (token: string) => {
        try {
            const res = await fetch('/api/users', {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (res.ok) {
                setUsers(data.users)
            }
        } catch (err) {
            console.error('Failed to fetch users:', err)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedUser || !message.trim()) {
            setError('Please select a user and enter a message')
            return
        }

        setLoading(true)
        setError('')
        setSuccess('')

        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch('/api/votes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ receiverId: selectedUser, message })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send vote')
            }

            setSuccess('Vote sent successfully! 🎉')
            setSelectedUser(null)
            setMessage('')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send vote')
        } finally {
            setLoading(false)
        }
    }

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <Image src="/logo.svg" alt="EmPulse" width={120} height={40} className="sidebar-logo" />
                <nav className="sidebar-nav">
                    <Link href="/dashboard" className="sidebar-link">📊 Dashboard</Link>
                    <Link href="/dashboard/send-vote" className="sidebar-link active">🎯 Send Vote</Link>
                    <Link href="/dashboard/votes/received" className="sidebar-link">📥 Votes Received</Link>
                    <Link href="/dashboard/votes/sent" className="sidebar-link">📤 Votes Sent</Link>
                    <Link href="/dashboard/catalog" className="sidebar-link">🎁 Rewards Catalog</Link>
                    <Link href="/dashboard/orders" className="sidebar-link">📦 My Orders</Link>
                </nav>
            </aside>

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">🎯 Send a Vote</h1>
                    <p className="page-subtitle">Recognize a colleague for their great work!</p>
                </div>

                <div className="card" style={{ maxWidth: '600px' }}>
                    {error && <div className="login-error">{error}</div>}
                    {success && <div style={{ background: 'var(--color-success-light)', color: 'var(--color-success)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-lg)' }}>{success}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Search Colleague</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Search by name or email..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Select Colleague</label>
                            <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                {filteredUsers.map(user => (
                                    <div
                                        key={user.id}
                                        onClick={() => setSelectedUser(user.id)}
                                        style={{
                                            padding: 'var(--spacing-sm) var(--spacing-md)',
                                            cursor: 'pointer',
                                            background: selectedUser === user.id ? 'var(--color-accent-light)' : 'transparent',
                                            borderBottom: '1px solid var(--color-border-light)'
                                        }}
                                    >
                                        <div style={{ fontWeight: 500 }}>{user.fullName}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{user.email}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Recognition Message</label>
                            <textarea
                                className="form-input"
                                rows={4}
                                placeholder="Tell them why they deserve this recognition..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
                            {loading ? 'Sending...' : '🎯 Send Vote (+10 points)'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
