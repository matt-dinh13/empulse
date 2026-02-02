'use client'

import { useState } from 'react'
import Link from 'next/link'
import TabOverview from './components/TabOverview'
import TabHowItWorks from './components/TabHowItWorks'
import TabDataModel from './components/TabDataModel'
import TabTechStack from './components/TabTechStack'
import TabScreenshots from './components/TabScreenshots'

export default function WhitepaperPage() {
    const [activeTab, setActiveTab] = useState('Overview')

    const tabs = [
        { name: 'Overview', component: TabOverview },
        { name: 'How It Works', component: TabHowItWorks },
        { name: 'Data Model', component: TabDataModel },
        { name: 'Tech Stack', component: TabTechStack },
        { name: 'Screenshots', component: TabScreenshots },
    ]

    const ActiveComponent = tabs.find(t => t.name === activeTab)?.component || TabOverview

    return (
        <div className="main-wrapper">
            {/* Navbar */}
            <nav className="navbar">
                <div className="container nav-content">
                    <Link href="/" className="logo">
                        <span className="text-white">&lt;</span>
                        <span className="text-white">Em</span>
                        <span className="text-emerald">/</span>
                        <span className="text-white">Pulse</span>
                        <span className="text-white">&gt;</span>
                        <span className="badge">Whitepaper</span>
                    </Link>

                    <div className="tabs-bar no-scrollbar">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`tab-btn ${activeTab === tab.name ? 'active' : ''}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="actions">
                        <Link href="/" className="back-link">
                            <span>Exit Whitepaper</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="container main-content animate-fade-in">
                <ActiveComponent />
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <h3 className="footer-title">Ready to build a culture of appreciation?</h3>
                    <div className="footer-buttons">
                        <Link href="/" className="btn btn-white">
                            View Demo
                        </Link>
                        <a href="mailto:contact@empulse.com" className="btn btn-outline">
                            Contact Team
                        </a>
                    </div>
                    <p className="copyright">© 2026 EmPulse. Internal Documentation.</p>
                </div>
            </footer>

            <style jsx global>{`
                body, html { 
                    margin: 0; padding: 0; background: #000 !important; 
                    color: white !important; font-family: 'Satoshi', sans-serif;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <style jsx>{`
                .main-wrapper { min-height: 100vh; background-color: #000; color: white; display: flex; flex-direction: column; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }
                
                /* Navbar */
                .navbar { 
                    border-bottom: 1px solid rgba(255,255,255,0.1); 
                    position: sticky; top: 0; z-index: 1000; /* Increased z-index */
                    background: rgba(0,0,0,0.85); backdrop-filter: blur(16px); 
                    height: 5rem; display: flex; align-items: center; width: 100%;
                }
                .nav-content { 
                    max-width: 1400px;
                    display: grid; grid-template-columns: auto 1fr auto; gap: 2rem;
                    align-items: center; 
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
                    border-radius: 99px; 
                    color: #00D264; 
                    font-weight: 700; 
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .tabs-bar { 
                    display: flex; gap: 0.5rem; justify-content: center;
                    position: relative; z-index: 1001;
                }
                .tab-btn { 
                    padding: 0.6rem 1.5rem; font-size: 0.9rem; font-weight: 600; 
                    border-radius: 9999px; border: 1px solid transparent; 
                    cursor: pointer; white-space: nowrap; transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
                    background: transparent; color: #9ca3af;
                }
                .tab-btn:hover { color: white; background: rgba(255,255,255,0.08); }
                .tab-btn.active { 
                    background: #00D264; 
                    color: black; 
                    border-color: #00D264;
                    box-shadow: 0 4px 20px rgba(0, 210, 100, 0.3);
                    transform: translateY(-1px);
                }

                .actions { display: flex; align-items: center; }
                .back-link { 
                    display: flex; align-items: center; gap: 0.5rem;
                    font-size: 0.9rem; color: white; text-decoration: none; 
                    transition: all 0.2s; font-weight: 600;
                    padding: 0.6rem 1.25rem;
                    border-radius: 99px;
                    border: 1px solid rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.05);
                }
                .back-link:hover { 
                    background: white; color: black; border-color: white;
                    transform: translateX(2px);
                }

                /* Main */
                .main-content { padding-top: 4rem; padding-bottom: 4rem; flex: 1; }

                /* Footer */
                .footer { border-top: 1px solid rgba(255,255,255,0.1); padding: 4rem 0; margin-top: 5rem; background: #050505; }
                .footer-buttons { gap: 1.5rem; }
                .copyright { opacity: 0.5; }

                @media (max-width: 1024px) {
                    .nav-content { display: flex; justify-content: space-between; gap: 1rem; }
                    .tabs-bar { display: none; } /* Consider mobile menu for tabs later */
                    .back-link span { display: none; } /* Hide text on mobile */
                }
            `}</style>
        </div>
    )
}
