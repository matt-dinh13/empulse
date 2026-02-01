import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <Image src="/logo.svg" alt="EmPulse" width={200} height={80} style={{ marginBottom: '2rem' }} />

      <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
        EmPulse
      </h1>

      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px' }}>
        P2P Reward & Recognition System - Empower your team with peer recognition
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link
          href="/login"
          className="btn btn-primary"
          style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}
