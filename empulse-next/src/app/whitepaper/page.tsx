'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionHero from './components/SectionHero'
import SectionProblemSolution from './components/SectionProblemSolution'
import SectionShowcase from './components/SectionShowcase'
import SectionHowItWorks from './components/SectionHowItWorks'
import SectionAdminPortal from './components/SectionAdminPortal'
import SectionTechStack from './components/SectionTechStack'
import SectionRoles from './components/SectionRoles'

type MermaidApi = {
    initialize: (opts: Record<string, unknown>) => void
    run: (opts: { nodes?: NodeListOf<Element> | Element[]; querySelector?: string; suppressErrors?: boolean }) => Promise<void>
}

type MermaidWindow = Window & { mermaid?: MermaidApi }

export default function BlueprintPage() {
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'
        script.async = true
        script.onload = () => {
            const mermaid = (window as MermaidWindow).mermaid
            if (!mermaid) return

            mermaid.initialize({
                startOnLoad: false,
                theme: 'dark',
                securityLevel: 'loose',
                flowchart: { useMaxWidth: false, htmlLabels: true, curve: 'basis' },
                er: { useMaxWidth: false },
            })

            // Render visible diagrams via IntersectionObserver
            observerRef.current = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Only render diagrams not inside a closed <details>
                        const diagrams = Array.from(entry.target.querySelectorAll('.mermaid'))
                            .filter(el => !el.closest('details:not([open])'))
                        if (diagrams.length > 0) {
                            mermaid.run({ nodes: diagrams })
                        }
                        observerRef.current?.unobserve(entry.target)
                    }
                })
            }, { rootMargin: '200px' })

            document.querySelectorAll('[data-mermaid-container]').forEach(el => {
                observerRef.current?.observe(el)
            })

            // Render diagrams inside <details> only when opened (visible)
            document.querySelectorAll('details[data-mermaid-details]').forEach(details => {
                details.addEventListener('toggle', () => {
                    if ((details as HTMLDetailsElement).open) {
                        const diagrams = details.querySelectorAll('.mermaid:not([data-processed])')
                        if (diagrams.length > 0) {
                            mermaid.run({ nodes: diagrams })
                        }
                    }
                }, { once: true })
            })
        }
        document.body.appendChild(script)

        return () => {
            observerRef.current?.disconnect()
            if (script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="bp-wrapper">
            <nav className="bp-navbar">
                <div className="bp-container nav-content">
                    <Link href="/" className="logo">
                        <span className="text-white">&lt;</span>
                        <span className="text-white">em</span>
                        <span className="text-emerald">/</span>
                        <span className="text-white">pulse</span>
                        <span className="text-white">&gt;</span>
                        <span className="badge">Blueprint</span>
                    </Link>

                    <div className="actions">
                        <Link href="/" className="back-link">
                            <span>Back to Home</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="bp-container bp-main">
                <SectionHero />
                <SectionProblemSolution />
                <SectionShowcase />
                <SectionHowItWorks />
                <SectionAdminPortal />
                <SectionTechStack />
                <SectionRoles />
            </main>

            <footer className="bp-footer">
                <div className="bp-container footer-content">
                    <h3 className="footer-title">Ready to build a culture of appreciation?</h3>
                    <div className="footer-buttons">
                        <Link href="/login" className="btn btn-white">
                            Try Demo
                        </Link>
                        <a href="mailto:contact@empulse.com" className="btn btn-outline">
                            Contact Team
                        </a>
                    </div>

                    <div className="footer-brand">
                        <div className="brand-logo">
                            <img src="/embedit-logo.svg" alt="EmbedIT" className="embedit-logo" />
                        </div>
                        <p className="copyright">&copy; 2026 EmbedIT.</p>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                body, html {
                    margin: 0; padding: 0; background: #000 !important;
                    color: white !important; font-family: 'Satoshi', 'Inter', sans-serif;
                }
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        transition-duration: 0.01ms !important;
                    }
                }
                .mermaid svg {
                    max-width: 100% !important;
                    width: 100% !important;
                    height: auto !important;
                }
            `}</style>

            <style jsx>{`
                .bp-wrapper { min-height: 100vh; background-color: #000; color: white; display: flex; flex-direction: column; }
                .bp-container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }

                .bp-navbar {
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    position: sticky; top: 0; z-index: 1000;
                    background: rgba(0,0,0,0.85); backdrop-filter: blur(16px);
                    height: 5rem; display: flex; align-items: center; width: 100%;
                }
                .nav-content {
                    max-width: 1400px;
                    display: flex; justify-content: space-between; align-items: center;
                    width: 100%; height: 100%;
                }
                .logo {
                    display: flex; align-items: center; text-decoration: none;
                    position: relative; z-index: 1002;
                }
                .logo:hover { opacity: 0.9; }
                .text-white { color: white; font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; }
                .text-emerald { color: #00D264; font-weight: 800; font-size: 1.5rem; }
                .badge {
                    margin-left: 0.8rem; padding: 0.25rem 0.75rem;
                    font-size: 0.7rem;
                    background: rgba(0, 210, 100, 0.1);
                    border: 1px solid rgba(0, 210, 100, 0.25);
                    border-radius: 99px; color: #00D264;
                    font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
                }
                .actions { display: flex; align-items: center; }
                .back-link {
                    display: flex; align-items: center; gap: 0.5rem;
                    font-size: 0.9rem; color: white; text-decoration: none;
                    transition: all 0.2s; font-weight: 600;
                    padding: 0.6rem 1.25rem; border-radius: 99px;
                    border: 1px solid rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.05);
                }
                .back-link:hover { background: white; color: black; border-color: white; }

                .bp-main { padding-top: 2rem; padding-bottom: 4rem; flex: 1; }

                .bp-footer { border-top: 1px solid rgba(255,255,255,0.1); padding: 4rem 0; margin-top: 2rem; background: #000; }
                .footer-content { display: flex; flex-direction: column; align-items: center; gap: 2rem; }
                .footer-title { font-size: 2rem; font-weight: 800; color: white; margin-bottom: 0.5rem; text-align: center; }
                .footer-buttons { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; justify-content: center; }
                .btn { padding: 0.8rem 2rem; font-weight: 700; border-radius: 99px; text-decoration: none; transition: 0.2s; display: inline-block; font-size: 1rem; cursor: pointer; }
                .btn-white { background: white; color: black; border: 1px solid white; }
                .btn-white:hover { background: #e5e7eb; transform: translateY(-2px); }
                .btn-outline { border: 1px solid rgba(255,255,255,0.3); color: white; background: transparent; }
                .btn-outline:hover { border-color: white; background: rgba(255,255,255,0.1); transform: translateY(-2px); }
                .footer-brand { display: flex; flex-direction: column; align-items: center; gap: 1rem; opacity: 0.8; }
                .brand-logo { height: 32px; display: flex; align-items: center; }
                .embedit-logo { height: 32px; width: auto; object-fit: contain; filter: brightness(0) invert(1); }
                .copyright { color: #666; font-size: 0.875rem; font-weight: 500; }

                @media (max-width: 768px) {
                    .bp-navbar { height: auto; padding: 0.75rem 0; }
                    .back-link span { display: none; }
                    .footer-title { font-size: 1.5rem; }
                }
            `}</style>
        </div>
    )
}
