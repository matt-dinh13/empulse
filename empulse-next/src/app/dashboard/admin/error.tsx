'use client'

import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

export default function AdminError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="dashboard-layout">
            <Sidebar user={{ role: 'admin' }} />
            <main className="main-content">
                <div className="error-page" style={{ minHeight: 'auto', padding: 'var(--spacing-xl) 0' }}>
                    <h2>Something went wrong</h2>
                    <p>{error.message || 'An unexpected error occurred in the admin portal.'}</p>
                    <div className="flex gap-md">
                        <button onClick={reset} className="btn btn-primary">
                            Try Again
                        </button>
                        <Link href="/dashboard/admin" className="btn btn-outline">
                            Go to Admin Portal
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
