'use client'

import Link from 'next/link'

export default function AdminError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="error-page">
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
    )
}
