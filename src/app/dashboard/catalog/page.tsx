'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface CatalogItem {
    id: number
    name: string
    description: string
    pointsRequired: number
    displayValue: string
    rewardType: string
}

interface Wallet {
    balance: number
}

export default function CatalogPage() {
    const [catalog, setCatalog] = useState<CatalogItem[]>([])
    const [wallet, setWallet] = useState<Wallet | null>(null)
    const [loading, setLoading] = useState(true)
    const [ordering, setOrdering] = useState<number | null>(null)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
            router.push('/login')
            return
        }
        fetchData(token)
    }, [router])

    const fetchData = async (token: string) => {
        try {
            const [catalogRes, walletRes] = await Promise.all([
                fetch('/api/catalog', { headers: { Authorization: `Bearer ${token}` } }),
                fetch('/api/wallets', { headers: { Authorization: `Bearer ${token}` } })
            ])

            const catalogData = await catalogRes.json()
            const walletData = await walletRes.json()

            if (catalogRes.ok) setCatalog(catalogData.catalog)
            if (walletRes.ok) setWallet(walletData.rewardWallet)
        } catch (err) {
            console.error('Failed to fetch data:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleRedeem = async (itemId: number) => {
        setOrdering(itemId)
        setError('')
        setSuccess('')

        try {
            const token = localStorage.getItem('accessToken')
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ catalogId: itemId })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to create order')
            }

            setSuccess('Order placed successfully! 🎉')
            // Refresh wallet balance
            const walletRes = await fetch('/api/wallets', {
                headers: { Authorization: `Bearer ${token}` }
            })
            const walletData = await walletRes.json()
            if (walletRes.ok) setWallet(walletData.rewardWallet)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to redeem')
        } finally {
            setOrdering(null)
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
                    <Link href="/dashboard/votes/sent" className="sidebar-link">📤 Votes Sent</Link>
                    <Link href="/dashboard/catalog" className="sidebar-link active">🎁 Rewards Catalog</Link>
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
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="page-title">🎁 Rewards Catalog</h1>
                            <p className="page-subtitle">Redeem your points for amazing rewards!</p>
                        </div>
                        {wallet && (
                            <div className="stat-card" style={{ padding: 'var(--spacing-md)' }}>
                                <div className="stat-label">Your Points</div>
                                <div className="stat-value accent">{wallet.balance}</div>
                            </div>
                        )}
                    </div>
                </div>

                {error && <div className="login-error mb-md">{error}</div>}
                {success && <div style={{ background: 'var(--color-success-light)', color: 'var(--color-success)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-lg)' }}>{success}</div>}

                {loading ? (
                    <div className="flex justify-center"><div className="spinner"></div></div>
                ) : catalog.length === 0 ? (
                    <div className="card text-center">
                        <p className="text-muted">No rewards available for your region.</p>
                    </div>
                ) : (
                    <div className="grid grid-3">
                        {catalog.map(item => (
                            <div key={item.id} className="card">
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>
                                    {item.rewardType === 'voucher' ? '🎫' : '📦'}
                                </div>
                                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{item.name}</h3>
                                <p className="text-sm text-muted mb-md">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="badge badge-success">{item.pointsRequired} pts</span>
                                    <button
                                        className="btn btn-primary"
                                        disabled={ordering === item.id || (wallet?.balance || 0) < item.pointsRequired}
                                        onClick={() => handleRedeem(item.id)}
                                    >
                                        {ordering === item.id ? 'Processing...' : 'Redeem'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
