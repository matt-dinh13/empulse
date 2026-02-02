export default function TabOverview() {
    return (
        <div className="overview-container">
            {/* Hero */}
            <section className="hero-section">
                <h1 className="hero-title">
                    Peer-to-Peer Recognition that Drives Engagement
                </h1>
                <p className="hero-desc">
                    EmPulse enables instant recognition with real-world rewards, bridging the gap between distributed teams and fostering a culture of gratitude.
                </p>
            </section>

            {/* Problem & Solution Grid */}
            <div className="grid-2 gap-lg mt-xl">
                <div className="card-box">
                    <div className="icon-box red-icon">
                        <span className="icon-text">💔</span>
                    </div>
                    <h3 className="section-title">The Problem</h3>
                    <ul className="feature-list">
                        <li>
                            <span className="bullet red-bullet">•</span>
                            <span>Employees feel disconnected in hybrid/remote setups.</span>
                        </li>
                        <li>
                            <span className="bullet red-bullet">•</span>
                            <span>Recognition is infrequent and often top-down only.</span>
                        </li>
                        <li>
                            <span className="bullet red-bullet">•</span>
                            <span>"Kudos" channels on Slack get lost and lack tangible value.</span>
                        </li>
                    </ul>
                </div>

                <div className="card-box">
                    <div className="icon-box green-icon">
                        <span className="icon-text">💡</span>
                    </div>
                    <h3 className="section-title">The Solution</h3>
                    <ul className="feature-list">
                        <li>
                            <span className="bullet green-bullet">•</span>
                            <span>Democratized recognition: Anyone can reward anyone.</span>
                        </li>
                        <li>
                            <span className="bullet green-bullet">•</span>
                            <span>Tangible Rewards: Points convert to Vouchers & Merch.</span>
                        </li>
                        <li>
                            <span className="bullet green-bullet">•</span>
                            <span>Gamification: Leaderboards and Badges drive participation.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Key Stats */}
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-value">8</div>
                    <div className="stat-label">Votes / Month</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">10</div>
                    <div className="stat-label">Points / Vote</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">2</div>
                    <div className="stat-label">Regions (VN/CZ)</div>
                </div>
            </div>

            <style jsx>{`
                .overview-container { max-width: 900px; margin: 0 auto; }
                
                .hero-section { text-align: center; margin-bottom: 4rem; }
                .hero-title { 
                    font-size: 3.5rem; 
                    font-weight: 800; 
                    background: linear-gradient(to bottom, #ffffff, #888888); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }
                .hero-desc { color: #9ca3af; font-size: 1.25rem; max-width: 700px; margin: 0 auto; line-height: 1.6; }

                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .card-box { padding: 2rem; border-radius: 1rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
                
                .icon-box { width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
                .red-icon { background: rgba(239, 68, 68, 0.1); }
                .green-icon { background: rgba(16, 185, 129, 0.1); }
                .icon-text { font-size: 1.5rem; }
                
                .section-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: white; }
                
                .feature-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; color: #9ca3af; }
                .feature-list li { display: flex; gap: 0.75rem; align-items: flex-start; }
                .bullet { font-size: 1.2rem; line-height: 1; }
                .red-bullet { color: #ef4444; }
                .green-bullet { color: #10b981; }

                .stats-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center; padding: 3rem 0; margin-top: 4rem; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); }
                .stat-value { font-size: 2.5rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
                .stat-label { font-size: 0.875rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }

                @media (max-width: 768px) {
                    .hero-title { font-size: 2.5rem; }
                    .grid-2 { grid-template-columns: 1fr; }
                    .stats-container { grid-template-columns: 1fr; gap: 2rem; }
                }
            `}</style>
        </div>
    )
}
