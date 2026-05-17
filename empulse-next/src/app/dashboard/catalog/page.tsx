'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'
import { Badge, EmptyState, Modal, PageTransition } from '@/components/ui'

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

interface UiUser {
    fullName?: string
    role?: string
}

const REWARD_ICONS: Record<string, string> = {
    digital_voucher: '🎟️',
    physical_gift: '🎁',
    experience: '🌟',
    donation: '❤️',
}

export default function CatalogPage() {
    const [catalog, setCatalog] = useState<CatalogItem[]>([])
    const [wallet, setWallet] = useState<Wallet | null>(null)
    const [loading, setLoading] = useState(true)
    const [ordering, setOrdering] = useState<number | null>(null)
    const [error, setError] = useState('')
    const [uiUser, setUiUser] = useState<UiUser | null>(null)
    const [confirmItem, setConfirmItem] = useState<CatalogItem | null>(null)
    const router = useRouter()
    const { showToast } = useToast()

    const closeModal = useCallback(() => setConfirmItem(null), [])

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/me', { credentials: 'include' })
                if (!res.ok) {
                    router.push('/login')
                    return
                }
            } catch {
                router.push('/login')
                return
            }

            const storedUser = getStoredUser()
            if (storedUser) setUiUser(storedUser as UiUser)

            fetchData()
        }
        checkAuth()
    }, [router])

    const fetchData = async () => {
        try {
            const [catalogRes, walletRes] = await Promise.all([
                fetch('/api/catalog', { credentials: 'include' }),
                fetch('/api/wallets', { credentials: 'include' })
            ])

            if (catalogRes.status === 401 || walletRes.status === 401) {
                handleUnauthorized()
                return
            }

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
        setConfirmItem(null)
        setOrdering(itemId)
        setError('')

        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ catalogId: itemId })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Failed to create order')
            }

            showToast('Order placed successfully! Awaiting approval.', 'success')
            // Refresh wallet balance
            const walletRes = await fetch('/api/wallets', {
                credentials: 'include'
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
                    <div className="flex justify-between items-center gap-lg" style={{ width: '100%' }}>
                        <div>
                            <h1 className="page-title">🎁 Rewards Catalog</h1>
                            <p className="page-subtitle">Redeem your points for amazing rewards!</p>
                        </div>
                        {wallet && (
                            <div
                                style={{
                                    padding: 'var(--spacing-sm) var(--spacing-lg)',
                                    background: 'var(--gradient-stat-green)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid rgba(0, 210, 100, 0.2)',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                                    Your Balance
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-success)' }}>
                                    {wallet.balance} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>pts</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {error && <div className="login-error mb-md">{error}</div>}

                <PageTransition loading={loading} skeleton={
                    <div className="grid grid-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="skeleton-card">
                                <div className="skeleton-line skeleton-title" />
                                <div className="skeleton-line" />
                                <div className="skeleton-line skeleton-short" />
                            </div>
                        ))}
                    </div>
                }>
                    {catalog.length === 0 ? (
                        <EmptyState
                            icon="🎁"
                            title="No rewards available"
                            description="Check back later — new rewards are added regularly!"
                        />
                    ) : (
                        <div className="grid grid-3">
                            {catalog.map((item, index) => {
                                const canAfford = (wallet?.balance || 0) >= item.pointsRequired
                                const rewardIcon = REWARD_ICONS[item.rewardType] || '🎁'

                                return (
                                    <div
                                        key={item.id}
                                        className={`card animate-scale-in`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            border: '1px solid var(--color-border-light)',
                                            transition: 'all 0.25s ease',
                                            cursor: canAfford ? 'pointer' : 'default',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-primary)'
                                            e.currentTarget.style.transform = 'translateY(-4px)'
                                            e.currentTarget.style.boxShadow = 'var(--shadow-xl)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-border-light)'
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = ''
                                        }}
                                    >
                                        <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--spacing-sm)' }}>
                                            <span style={{ fontSize: '1.5rem' }}>{rewardIcon}</span>
                                            <h3 style={{ margin: 0, fontSize: '1rem' }}>{item.name}</h3>
                                        </div>

                                        <p className="text-sm text-muted" style={{ flex: 1, marginBottom: 'var(--spacing-md)', lineHeight: 1.5 }}>
                                            {item.description}
                                        </p>

                                        <div style={{
                                            padding: 'var(--spacing-sm)',
                                            background: 'var(--color-surface-hover)',
                                            borderRadius: 'var(--radius-md)',
                                            marginBottom: 'var(--spacing-md)',
                                            textAlign: 'center',
                                        }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Value: </span>
                                            <span style={{ fontWeight: 700 }}>{item.displayValue}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <Badge variant={canAfford ? 'success' : 'warning'} size="sm">
                                                {item.pointsRequired} pts
                                            </Badge>
                                            <button
                                                className="btn btn-primary"
                                                disabled={ordering === item.id || !canAfford}
                                                onClick={() => setConfirmItem(item)}
                                                style={{
                                                    background: canAfford ? 'var(--gradient-accent)' : undefined,
                                                    border: canAfford ? 'none' : undefined,
                                                    opacity: canAfford ? 1 : 0.5,
                                                    fontSize: '0.85rem',
                                                }}
                                            >
                                                {ordering === item.id ? 'Processing...' : canAfford ? 'Redeem 🎉' : 'Not enough pts'}
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </PageTransition>

                {/* Confirm Modal */}
                <Modal isOpen={!!confirmItem} onClose={closeModal} title="Confirm Redemption" size="sm">
                    {confirmItem && (
                        <div>
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: 'var(--spacing-md)',
                                    background: 'var(--color-surface-hover)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-lg)',
                                }}
                            >
                                <span style={{ fontSize: '2.5rem' }}>{REWARD_ICONS[confirmItem.rewardType] || '🎁'}</span>
                                <h3 style={{ marginTop: 'var(--spacing-sm)', marginBottom: 0 }}>{confirmItem.name}</h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
                                <div className="flex justify-between">
                                    <span className="text-muted">Cost</span>
                                    <strong>{confirmItem.pointsRequired} pts</strong>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted">Current Balance</span>
                                    <strong>{wallet?.balance ?? 0} pts</strong>
                                </div>
                                <div
                                    className="flex justify-between"
                                    style={{
                                        paddingTop: 'var(--spacing-sm)',
                                        borderTop: '1px solid var(--color-border-light)',
                                    }}
                                >
                                    <span className="text-muted">Remaining</span>
                                    <strong style={{ color: 'var(--color-success)' }}>
                                        {(wallet?.balance ?? 0) - confirmItem.pointsRequired} pts
                                    </strong>
                                </div>
                            </div>

                            <div className="flex" style={{ gap: 'var(--spacing-sm)' }}>
                                <button
                                    className="btn btn-outline"
                                    style={{ flex: 1 }}
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    style={{ flex: 1, background: 'var(--gradient-accent)', border: 'none' }}
                                    onClick={() => handleRedeem(confirmItem.id)}
                                >
                                    Confirm ✓
                                </button>
                            </div>
                        </div>
                    )}
                </Modal>
            </main>
        </div>
    )
}
