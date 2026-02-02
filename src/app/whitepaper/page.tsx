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
                            Back to Home
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
                    position: sticky; top: 0; z-index: 100; 
                    background: rgba(0,0,0,0.8); backdrop-filter: blur(12px); 
                    height: 4.5rem; display: flex; align-items: center; width: 100%;
                }
                .nav-content { 
                    max-width: 1400px;
                    display: flex; items-center; justify-content: space-between; 
                    width: 100%; height: 100%;
                }
                
                .logo { 
                    display: flex; items-center; text-decoration: none; 
                    flex-shrink: 0; margin-right: 2rem;
                }
                .logo:hover { opacity: 0.8; }
                .text-white { color: white; font-weight: 800; font-size: 1.5rem; }
                .text-emerald { color: #00D264; font-weight: 800; font-size: 1.5rem; }
                
                .badge { 
                    margin-left: 0.8rem; padding: 0.2rem 0.6rem; 
                    font-size: 0.75rem; 
                    background: rgba(0, 210, 100, 0.1); 
                    border: 1px solid rgba(0, 210, 100, 0.2);
                    border-radius: 0.25rem; 
                    color: #00D264; 
                    font-weight: 600; 
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .tabs-bar { 
                    display: flex; gap: 0.5rem; overflow-x: auto; 
                    flex: 1; justify-content: center;
                    padding: 0 1rem;
                }
                .tab-btn { 
                    padding: 0.5rem 1.25rem; font-size: 0.9rem; font-weight: 600; 
                    border-radius: 9999px; border: 1px solid transparent; 
                    cursor: pointer; white-space: nowrap; transition: all 0.2s;
                    background: transparent; color: #9ca3af;
                }
                .tab-btn:hover { color: white; background: rgba(255,255,255,0.1); }
                .tab-btn.active { 
                    background: #00D264; 
                    color: black; 
                    box-shadow: 0 0 15px rgba(0, 210, 100, 0.4);
                }

                .actions { display: flex; align-items: center; flex-shrink: 0; }
                .back-link { 
                    font-size: 0.9rem; color: #9ca3af; text-decoration: none; 
                    transition: 0.2s; font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                }
                .back-link:hover { color: white; background: rgba(255,255,255,0.05); }

                /* Main */
                .main-content { padding-top: 3rem; padding-bottom: 3rem; flex: 1; }

                /* Footer */
                .footer { border-top: 1px solid rgba(255,255,255,0.1); padding: 3rem 0; margin-top: 3rem; background: #09090b; }
                .footer-content { text-align: center; }
                .footer-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white; }
                
                .footer-buttons { display: flex; justify-content: center; gap: 1rem; display: flex; flex-wrap: wrap; }
                .btn { padding: 0.75rem 1.5rem; font-weight: 700; border-radius: 0.5rem; text-decoration: none; transition: 0.2s; display: inline-block; }
                .btn-white { background: white; color: black; }
                .btn-white:hover { background: #e5e7eb; }
                .btn-outline { border: 1px solid rgba(255,255,255,0.2); color: white; }
                .btn-outline:hover { border-color: white; }
                
                .copyright { margin-top: 2rem; color: #4b5563; font-size: 0.875rem; }

                @media (min-width: 768px) {
                    .actions { display: block; }
                }
            `}</style>
        </div>
    )
}
