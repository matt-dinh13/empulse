'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

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
    const [uiUser, setUiUser] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        const storedUser = localStorage.getItem('user')
        if (storedUser) setUiUser(JSON.parse(storedUser))

        if (!token) {
            router.push('/login')
            return
        }
        const userStr = localStorage.getItem('user')
        if (userStr) setUiUser(JSON.parse(userStr))

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
            <Sidebar user={uiUser} />

            <main className="main-content">
                <div className="page-header">
                    <div className="flex justify-between items-center gap-lg">
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
