import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="login-page" style={{ background: 'var(--color-background)' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        width: '100%'
      }}>
        <Image src="/logo.svg" alt="EmPulse" width={200} height={80} style={{ marginBottom: '2rem' }} />

        <h1 style={{
          color: 'var(--color-primary)',
          fontSize: '3.5rem',
          fontWeight: 800,
          marginBottom: '1rem',
          lineHeight: 1.2
        }}>
          EmPulse
        </h1>

        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '1.25rem',
          marginBottom: '2.5rem',
          maxWidth: '600px',
          lineHeight: 1.6
        }}>
          P2P Reward & Recognition System - Empower your team with peer recognition and celebrate success together.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link
            href="/login"
            className="btn btn-primary"
            style={{
              padding: '1rem 3rem',
              fontSize: '1.125rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            Sign In to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
