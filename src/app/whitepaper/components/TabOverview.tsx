import Image from 'next/image'

export default function TabOverview() {
    return (
        <div className="overview-container">
            {/* Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Enterprise Grade Recognition</span>
                    </div>
                    <h1 className="hero-title">
                        Peer-to-Peer Recognition that <span className="text-gradient">Drives Engagement</span>
                    </h1>
                    <p className="hero-desc">
                        EmPulse bridges the gap between distributed teams with instant recognition, gamification, and real-world rewards.
                        Build a culture of gratitude that scales.
                    </p>
                    <div className="hero-actions">
                        <a href="/" className="btn-hero">
                            View Demo
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Visual Graphic (CSS Shapes + Blur) */}
                <div className="hero-visual">
                    <div className="visual-circle circle-1"></div>
                    <div className="visual-circle circle-2"></div>
                    <div className="visual-card">
                        <div className="card-header">
                            <div className="avatar"></div>
                            <div className="user-info">
                                <div className="line line-short"></div>
                                <div className="line line-long"></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="line line-full"></div>
                            <div className="line line-full"></div>
                            <div className="line line-medium"></div>
                        </div>
                        <div className="card-footer">
                            <span className="tag">+10 Points</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution Grid */}
            <div className="grid-2 gap-xl mt-xl">
                <div className="card-box border-red">
                    <div className="icon-box red-icon">
                        <span className="icon-text">💔</span>
                    </div>
                    <h3 className="section-title text-red">The Problem</h3>
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

                <div className="card-box border-green">
                    <div className="icon-box green-icon">
                        <span className="icon-text">💡</span>
                    </div>
                    <h3 className="section-title text-green">The Solution</h3>
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
            {/* Key Stats - White Section */}
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-value text-black">Top 1%</div>
                    <div className="stat-label text-dark-gray">Engagement Rate</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value text-green">Real ROI</div>
                    <div className="stat-label text-dark-gray">Retention & Morale</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value text-black">Global</div>
                    <div className="stat-label text-dark-gray">Multi-Region Support</div>
                </div>
            </div>

            <style jsx>{`
                .overview-container { max-width: 1200px; margin: 0 auto; }
                
                /* HERO */
                .hero-section { 
                    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; 
                    align-items: center; margin-bottom: 6rem; min-height: 500px;
                }
                .hero-content { text-align: left; }
                
                .hero-badge { 
                    display: inline-flex; align-items: center; gap: 0.5rem; 
                    padding: 0.4rem 0.8rem; border-radius: 2rem; 
                    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #00D264; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem;
                }
                .badge-dot { width: 8px; height: 8px; background: #00D264; border-radius: 50%; box-shadow: 0 0 10px #00D264; }

                .hero-title { 
                    font-size: 3.5rem; 
                    font-weight: 800; 
                    color: white;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .text-gradient { 
                    display: block;
                    background: linear-gradient(90deg, #fff, #00D264); 
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-desc { color: #9ca3af; font-size: 1.15rem; line-height: 1.6; max-width: 500px; margin-bottom: 2.5rem; }
                
                .hero-actions { display: flex; gap: 1rem; }
                .btn-hero { 
                    display: inline-flex; align-items: center; gap: 0.75rem;
                    background: #00D264; color: black; 
                    font-size: 1.1rem; font-weight: 800; 
                    padding: 1rem 2.5rem; border-radius: 99px; 
                    text-decoration: none; transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
                    box-shadow: 0 0 20px rgba(0, 210, 100, 0.4);
                }
                .btn-hero:hover { 
                    transform: translateY(-4px) scale(1.05); 
                    box-shadow: 0 10px 30px rgba(0, 210, 100, 0.6);
                    background: #00eb70;
                }

                /* HERO VISUAL */
                .hero-visual { position: relative; height: 400px; display: flex; align-items: center; justify-content: center; }
                .visual-circle { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.4; }
                .circle-1 { width: 300px; height: 300px; background: #00D264; top: 0; right: 0; }
                .circle-2 { width: 250px; height: 250px; background: #006ed2; bottom: 0; left: 0; }
                
                .visual-card { 
                    position: relative; z-index: 2; width: 320px; 
                    background: rgba(20, 20, 20, 0.8); backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.1); border-radius: 1.5rem;
                    padding: 2rem; box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                    transform: rotate(-5deg); transition: transform 0.3s;
                }
                .visual-card:hover { transform: rotate(0deg) scale(1.02); }
                
                .card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
                .avatar { width: 48px; height: 48px; background: #333; border-radius: 50%; }
                .user-info { flex: 1; }
                .line { height: 10px; background: #333; border-radius: 5px; margin-bottom: 6px; }
                .line-short { width: 60%; }
                .line-long { width: 40%; }
                .line-full { width: 100%; }
                .line-medium { width: 80%; }
                
                .card-footer { margin-top: 1.5rem; display: flex; justify-content: flex-end; }
                .tag { background: rgba(0, 210, 100, 0.2); color: #00D264; padding: 0.4rem 0.8rem; border-radius: 0.5rem; font-weight: 700; font-size: 0.9rem; }

                /* GRID */
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .card-box { 
                    padding: 2.5rem; border-radius: 1.5rem; 
                    background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); 
                    border: 1px solid rgba(255,255,255,0.05); 
                    transition: transform 0.3s;
                }
                .card-box:hover { transform: translateY(-5px); }
                
                .border-green { border-top: 4px solid #00D264; }
                .border-red { border-top: 4px solid #ef4444; }

                .icon-box { width: 3.5rem; height: 3.5rem; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
                .red-icon { background: rgba(239, 68, 68, 0.1); }
                .green-icon { background: rgba(0, 210, 100, 0.1); }
                .icon-text { font-size: 1.8rem; }
                
                .section-title { font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: white; }
                .text-green { color: #00D264; }
                .text-red { color: white; } /* Kept white for contrast, bullet handles red */
                
                .feature-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; color: #d1d5db; }
                .feature-list li { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 1.05rem; }
                .bullet { font-size: 1.2rem; line-height: 1; }
                .red-bullet { color: #ef4444; }
                .green-bullet { color: #00D264; }

                /* STATS - White Card */
                .stats-container { 
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; 
                    text-align: center; padding: 4rem 3rem; margin-top: 6rem; 
                    background: white; border-radius: 2rem;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    transform: skewY(-1deg);
                }
                .stats-container > * { transform: skewY(1deg); } /* Un-skew content */

                .stat-value { font-size: 3.5rem; font-weight: 900; line-height: 1; margin-bottom: 0.5rem; letter-spacing: -0.04em; }
                .text-black { color: #111; }
                .text-dark-gray { color: #4b5563; }
                .stat-label { font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; }

                @media (max-width: 900px) {
                    .hero-section { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
                    .hero-content { display: flex; flex-direction: column; align-items: center; }
                    .hero-desc { margin: 0 auto; }
                    .hero-visual { height: 300px; }
                    .grid-2 { grid-template-columns: 1fr; }
                    .stats-container { grid-template-columns: 1fr; gap: 3rem; }
                }
            `}</style>
        </div>
    )
}
