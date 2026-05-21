'use client'

import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="dashboard-layout">
            <Sidebar user={null} />
            <main className="main-content">
                <div className="error-page" style={{ minHeight: 'auto', padding: 'var(--spacing-xl) 0' }}>
                    <h2>Something went wrong</h2>
                    <p>{error.message || 'An unexpected error occurred in the dashboard.'}</p>
                    <div className="flex gap-md">
                        <button onClick={reset} className="btn btn-primary">
                            Try Again
                        </button>
                        <Link href="/dashboard" className="btn btn-outline">
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
