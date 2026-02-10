'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { getStoredUser, handleUnauthorized } from '@/lib/clientAuth'
import { useToast } from '@/components/Toast'

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
    const modalRef = useRef<HTMLDivElement>(null)

    const closeModal = useCallback(() => setConfirmItem(null), [])

    // Focus trap and ESC key for modal
    useEffect(() => {
        if (!confirmItem) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal()
                return
            }
            if (e.key === 'Tab' && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault()
                    last?.focus()
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault()
                    first?.focus()
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        // Auto-focus the modal
        const timer = setTimeout(() => {
            const firstBtn = modalRef.current?.querySelector<HTMLElement>('button')
            firstBtn?.focus()
        }, 50)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            clearTimeout(timer)
        }
    }, [confirmItem, closeModal])

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
                    <div className="flex justify-between items-center gap-lg">
                        <div>
                            <h1 className="page-title">Rewards Catalog</h1>
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

                {loading ? (
                    <div className="grid grid-3">
                        <div className="skeleton-card"><div className="skeleton-line skeleton-title" /><div className="skeleton-line" /><div className="skeleton-line skeleton-short" /></div>
                        <div className="skeleton-card"><div className="skeleton-line skeleton-title" /><div className="skeleton-line" /><div className="skeleton-line skeleton-short" /></div>
                        <div className="skeleton-card"><div className="skeleton-line skeleton-title" /><div className="skeleton-line" /><div className="skeleton-line skeleton-short" /></div>
                    </div>
                ) : catalog.length === 0 ? (
                    <div className="card text-center">
                        <p className="text-muted">No rewards available for your region.</p>
                    </div>
                ) : (
                    <div className="grid grid-3">
                        {catalog.map(item => (
                            <div key={item.id} className="card">
                                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{item.name}</h3>
                                <p className="text-sm text-muted mb-md">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="badge badge-success">{item.pointsRequired} pts</span>
                                    <button
                                        className="btn btn-primary"
                                        disabled={ordering === item.id || (wallet?.balance || 0) < item.pointsRequired}
                                        onClick={() => setConfirmItem(item)}
                                    >
                                        {ordering === item.id ? 'Processing...' : 'Redeem'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {confirmItem && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                        }}
                        onClick={closeModal}
                    >
                        <div
                            ref={modalRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="confirm-modal-title"
                            className="card"
                            style={{
                                maxWidth: '420px',
                                width: '90%',
                                padding: 'var(--spacing-lg)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 id="confirm-modal-title" style={{ marginBottom: 'var(--spacing-md)' }}>Confirm Redemption</h3>
                            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <strong>Item:</strong> {confirmItem.name}
                            </p>
                            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <strong>Cost:</strong> {confirmItem.pointsRequired} pts
                            </p>
                            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <strong>Current Balance:</strong> {wallet?.balance ?? 0} pts
                            </p>
                            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <strong>Remaining Balance:</strong>{' '}
                                {(wallet?.balance ?? 0) - confirmItem.pointsRequired} pts
                            </p>
                            <div className="flex justify-between" style={{ gap: 'var(--spacing-sm)' }}>
                                <button
                                    className="btn"
                                    style={{ flex: 1 }}
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    style={{ flex: 1 }}
                                    onClick={() => handleRedeem(confirmItem.id)}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

