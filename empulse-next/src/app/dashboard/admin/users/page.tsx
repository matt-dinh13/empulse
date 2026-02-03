'use client'

import { useEffect, useState } from 'react'

interface User {
    id: number
    fullName: string
    email: string
    role: string
    isActive: boolean
    team?: { name: string }
    region?: { name: string }
}

export default function AdminUsersPage() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const token = localStorage.getItem('accessToken')
        try {
            const res = await fetch('/api/admin/users', {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (res.ok) setUsers(data.users)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const filteredUsers = users.filter(u =>
        u.fullName.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">User Management</h1>
                    <p className="page-subtitle">Manage employees, roles, and status</p>
                </div>
                <button className="btn btn-primary" onClick={() => alert('Create User Modal - Coming Soon')}>
                    + Add New User
                </button>
            </div>

            <div className="card">
                <div className="mb-lg">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th style={{ textAlign: 'left', padding: '1rem' }}>User</th>
                                <th style={{ textAlign: 'left', padding: '1rem' }}>Role</th>
                                <th style={{ textAlign: 'left', padding: '1rem' }}>Team / Region</th>
                                <th style={{ textAlign: 'left', padding: '1rem' }}>Status</th>
                                <th style={{ textAlign: 'right', padding: '1rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan={5} className="text-center p-4">Loading...</td></tr>
                            ) : filteredUsers.map(user => (
                                <tr key={user.id} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div className="font-bold">{user.fullName}</div>
                                        <div className="text-sm text-muted">{user.email}</div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span className={`badge ${user.role === 'super_admin' ? 'badge-warning' : 'badge-success'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div>{user.team?.name || '-'}</div>
                                        <div className="text-sm text-muted">{user.region?.name}</div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {user.isActive ? (
                                            <span style={{ color: 'var(--color-success)', fontWeight: 500 }}>Active</span>
                                        ) : (
                                            <span style={{ color: 'var(--color-error)', fontWeight: 500 }}>Inactive</span>
                                        )}
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>Edit</button>
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
