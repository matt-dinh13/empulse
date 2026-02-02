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
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Navbar */}
            <nav className="border-b border-white/10 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition">
                        <span className="text-white">&lt;</span>
                        <span className="text-white">Em</span>
                        <span className="text-emerald-500">/</span>
                        <span className="text-white">Pulse</span>
                        <span className="text-white">&gt;</span>
                        <span className="ml-2 px-2 py-0.5 text-xs bg-white/10 rounded text-gray-400 font-normal">Whitepaper</span>
                    </Link>

                    <div className="flex gap-1 overflow-x-auto no-scrollbar">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${activeTab === tab.name
                                        ? 'bg-white text-black'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex">
                        <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="container mx-auto px-6 py-12 animate-fade-in">
                <ActiveComponent />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 mt-12 bg-zinc-950">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to build a culture of appreciation?</h3>
                    <div className="flex justify-center gap-4">
                        <Link href="/" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
                            View Demo
                        </Link>
                        <a href="mailto:contact@empulse.com" className="px-6 py-3 border border-white/20 rounded-lg hover:border-white transition">
                            Contact Team
                        </a>
                    </div>
                    <p className="mt-8 text-gray-600 text-sm">© 2026 EmPulse. Internal Documentation.</p>
                </div>
            </footer>

            <style jsx global>{`
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
        </div>
    )
}
