export default function TabOverview() {
    return (
        <div className="max-w-4xl mx-auto space-y-16">
            {/* Hero */}
            <section className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent pb-2">
                    Peer-to-Peer Recognition that Drives Engagement
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    EmPulse enables instant recognition with real-world rewards, bridging the gap between distributed teams and fostering a culture of gratitude.
                </p>
            </section>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                        <span className="text-2xl">💔</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3">
                            <span className="text-red-500">•</span>
                            <span>Employees feel disconnected in hybrid/remote setups.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-500">•</span>
                            <span>Recognition is infrequent and often top-down only.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-500">•</span>
                            <span>"Kudos" channels on Slack get lost and lack tangible value.</span>
                        </li>
                    </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                        <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3">
                            <span className="text-emerald-500">•</span>
                            <span>Democratized recognition: Anyone can reward anyone.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-emerald-500">•</span>
                            <span>Tangible Rewards: Points convert to Vouchers & Merch.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-emerald-500">•</span>
                            <span>Gamification: Leaderboards and Badges drive participation.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 text-center py-12 border-y border-white/10">
                <div>
                    <div className="text-4xl font-bold text-white mb-2">8</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Votes / Month</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-white mb-2">10</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Points / Vote</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-white mb-2">2</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Regions (VN/CZ)</div>
                </div>
            </div>
        </div>
    )
}
