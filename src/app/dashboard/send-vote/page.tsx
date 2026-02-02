'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

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
    const [uiUser, setUiUser] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            router.push('/login')
            return
        }
        const userStr = localStorage.getItem('user')
        if (userStr) setUiUser(JSON.parse(userStr))

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
            <Sidebar user={uiUser} />

            <main className="main-content">
                <div className="page-header">
                    <h1 className="page-title">🎯 Send a Vote</h1>
                    <p className="page-subtitle">Recognize a colleague for their great work!</p>
                </div>

                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
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
