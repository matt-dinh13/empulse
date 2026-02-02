'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface User {
    id: number
    fullName: string
    role: string
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        const storedUser = localStorage.getItem('user')

        if (!token || !storedUser) {
            router.push('/login')
            return
        }

        const parsedUser = JSON.parse(storedUser)
        // Verify Role
        if (parsedUser.role !== 'admin' && parsedUser.role !== 'hr_admin') {
            router.push('/dashboard') // Redirect unauthorized to employee dashboard
            return
        }

        setUser(parsedUser)
        setLoading(false)
    }, [router])

    if (loading) {
        return (
            <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}>
                <div className="spinner"></div>
            </div>
        )
    }

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <Image src="/logo.svg" alt="EmPulse" width={120} height={40} className="sidebar-logo" />

                <div className="mb-md px-md">
                    <span className="badge badge-warning">ADMIN PORTAL</span>
                </div>

                <nav className="sidebar-nav">
                    <Link href="/dashboard/admin/analytics" className={`sidebar-link ${pathname.includes('analytics') ? 'active' : ''}`}>
                        📈 Analytics
                    </Link>
                    <Link href="/dashboard/admin/users" className={`sidebar-link ${pathname.includes('users') ? 'active' : ''}`}>
                        👥 Users & Teams
                    </Link>
                    <Link href="/dashboard/admin/orders" className={`sidebar-link ${pathname.includes('orders') ? 'active' : ''}`}>
                        📋 Order Approvals
                    </Link>
                    <Link href="/dashboard/admin/catalog" className={`sidebar-link ${pathname.includes('catalog') ? 'active' : ''}`}>
                        🎁 Reward Catalog
                    </Link>
                    {user?.role === 'admin' && (
                        <Link href="/dashboard/admin/settings" className={`sidebar-link ${pathname.includes('settings') ? 'active' : ''}`}>
                            ⚙️ System Settings
                        </Link>
                    )}

                    <div style={{ margin: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}></div>

                    <Link href="/dashboard" className="sidebar-link">
                        ⬅️ Employee View
                    </Link>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>{user?.fullName}</div>
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
                {children}
            </main>
        </div>
    )
}
