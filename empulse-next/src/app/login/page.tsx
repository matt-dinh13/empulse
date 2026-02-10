'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { setStoredUser } from '@/lib/clientAuth'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const doLogin = async (loginEmail: string, loginPassword: string) => {
        setError('')
        setLoading(true)

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Login failed')
            }

            setStoredUser(data.user)
            router.push('/dashboard')
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.'
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        doLogin(email, password)
    }

    const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
        setEmail(demoEmail)
        setPassword(demoPassword)
        doLogin(demoEmail, demoPassword)
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <div className="login-logo text-center mb-6">
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>
                            <span style={{ color: '#00D264' }}>&lt;</span>em<span style={{ color: '#00D264' }}>/</span>pulse<span style={{ color: '#00D264' }}>&gt;</span>
                        </div>
                    </div>
                    <p className="login-subtitle">P2P Reward & Recognition System</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">Welcome back</h2>
                    <p className="login-desc">Sign in to your account to continue</p>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary login-btn"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner" style={{ width: 16, height: 16 }}></span>
                                Signing in...
                            </>
                        ) : 'Sign in'}
                    </button>

                </form>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '0.75rem' }}>
                        Quick demo access
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            className="btn"
                            style={{ flex: 1, fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                            disabled={loading}
                            onClick={() => handleDemoLogin('admin@empulse.com', 'password123')}
                        >
                            Admin
                        </button>
                        <button
                            className="btn"
                            style={{ flex: 1, fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                            disabled={loading}
                            onClick={() => handleDemoLogin('nguyen@empulse.com', 'password123')}
                        >
                            Employee
                        </button>
                        <button
                            className="btn"
                            style={{ flex: 1, fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                            disabled={loading}
                            onClick={() => handleDemoLogin('petra@empulse.com', 'password123')}
                        >
                            Manager
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
