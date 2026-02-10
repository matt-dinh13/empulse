import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="error-page" style={{ minHeight: '100vh' }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h2>
            <p style={{ fontSize: '1.125rem' }}>
                The page you are looking for does not exist.
            </p>
            <Link href="/dashboard" className="btn btn-primary">
                Go to Dashboard
            </Link>
        </div>
    )
}
