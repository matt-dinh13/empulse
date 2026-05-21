'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { handleUnauthorized } from '@/lib/clientAuth'

interface User {
    id: number
    fullName: string
    role: string
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [mobileOpen, setMobileOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const closeSidebar = useCallback(() => setMobileOpen(false), [])

    useEffect(() => {
        const storedUser = localStorage.getItem('user')

        if (!storedUser) {
            handleUnauthorized()
            return
        }

        const parsedUser = JSON.parse(storedUser)
        // Verify Role
        if (parsedUser.role !== 'super_admin' && parsedUser.role !== 'hr_admin' && parsedUser.role !== 'admin') {
            router.push('/dashboard') // Redirect unauthorized to employee dashboard
            return
        }

        const validateSession = async () => {
            try {
                const res = await fetch('/api/auth/me', { credentials: 'include' })
                if (res.status === 401) {
                    handleUnauthorized()
                    return
                }
                if (res.ok) {
                    const data = await res.json()
                    localStorage.setItem('user', JSON.stringify(data.user))
                    setUser(data.user)
                } else {
                    setUser(parsedUser)
                }
            } catch {
                setUser(parsedUser)
            } finally {
                setLoading(false)
            }
        }

        validateSession()
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
            {/* Mobile header */}
            <div className="mobile-header">
                <button className="hamburger-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                    &#9776;
                </button>
                <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                    <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
                </span>
                <span className="badge badge-warning" style={{ marginLeft: 'auto' }}>ADMIN</span>
            </div>

            {/* Mobile overlay */}
            <div
                className={`sidebar-overlay ${mobileOpen ? 'sidebar-overlay-visible' : ''}`}
                onClick={closeSidebar}
            />

            <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-logo-text" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', padding: '0 0.5rem', marginBottom: '1rem', display: 'inline-block' }}>
                    <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
                </div>

                <div className="mb-md px-md">
                    <span className="badge badge-warning">ADMIN PORTAL</span>
                </div>

                <nav className="sidebar-nav" onClick={closeSidebar}>
                    <Link href="/dashboard/admin/analytics" className={`sidebar-link ${pathname.includes('analytics') ? 'active' : ''}`}>
                        Analytics
                    </Link>
                    <Link href="/dashboard/admin/users" className={`sidebar-link ${pathname.includes('users') ? 'active' : ''}`}>
                        Users & Teams
                    </Link>
                    <Link href="/dashboard/admin/orders" className={`sidebar-link ${pathname.includes('orders') ? 'active' : ''}`}>
                        Order Approvals
                    </Link>
                    <Link href="/dashboard/admin/catalog" className={`sidebar-link ${pathname.includes('catalog') ? 'active' : ''}`}>
                        Reward Catalog
                    </Link>
                    <Link href="/dashboard/admin/flagged-votes" className={`sidebar-link ${pathname.includes('flagged-votes') ? 'active' : ''}`}>
                        Flagged Votes
                    </Link>
                    {(user?.role === 'super_admin' || user?.role === 'admin') && (
                        <Link href="/dashboard/admin/settings" className={`sidebar-link ${pathname.includes('settings') ? 'active' : ''}`}>
                            System Settings
                        </Link>
                    )}

                    <div style={{ margin: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}></div>

                    <Link href="/dashboard" className="sidebar-link">
                        Employee View
                    </Link>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>{user?.fullName}</div>
                    <button onClick={() => {
                        handleUnauthorized()
                    }} className="btn" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', marginBottom: '1.5rem' }}>
                        Logout
                    </button>

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.6 }}>
                        <Image
                            src="/embedit-logo.svg"
                            alt="EmbedIT"
                            width={100}
                            height={24}
                            style={{ height: '20px', width: 'auto', marginBottom: '0.5rem', filter: 'brightness(0) invert(1)' }}
                        />
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>© 2026 EmbedIT.</div>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    )
}


