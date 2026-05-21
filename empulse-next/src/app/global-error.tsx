'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', minHeight: '100vh', textAlign: 'center',
                    fontFamily: 'Inter, -apple-system, sans-serif', padding: '2rem',
                    background: '#F4F6F8',
                }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Something went wrong</h2>
                    <p style={{ color: '#64748B', marginBottom: '1.5rem', maxWidth: '400px' }}>
                        {error.message || 'An unexpected error occurred.'}
                    </p>
                    <button
                        onClick={reset}
                        style={{
                            padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: 600,
                            background: '#006ED2', color: 'white', border: 'none',
                            borderRadius: '0.5rem', cursor: 'pointer',
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    )
}
