import Link from 'next/link'

const Icon = ({ d, size = 20 }: { d: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
)

export default function SectionHero() {
    return (
        <section className="bp-hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot" />
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
                    <Link href="/login" className="btn-hero">
                        Try Demo
                        <Icon d="M5 12h14M12 5l7 7-7 7" />
                    </Link>
                    <a href="#showcase" className="btn-secondary">
                        See Product
                        <Icon d="M12 5v14M19 12l-7 7-7-7" />
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="visual-circle circle-1" />
                <div className="visual-circle circle-2" />
                <div className="visual-card">
                    <div className="card-header">
                        <div className="avatar" />
                        <div className="user-info">
                            <div className="line line-short" />
                            <div className="line line-long" />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="line line-full" />
                        <div className="line line-full" />
                        <div className="line line-medium" />
                    </div>
                    <div className="card-footer">
                        <span className="tag">+10 Points</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bp-hero {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;
                    align-items: center; min-height: 500px; padding: 2rem 0 4rem;
                }
                .hero-content { text-align: left; }
                .hero-badge {
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    padding: 0.4rem 0.8rem; border-radius: 2rem;
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    color: #00D264; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem;
                }
                .badge-dot { width: 8px; height: 8px; background: #00D264; border-radius: 50%; box-shadow: 0 0 10px #00D264; }
                .hero-title {
                    font-size: 3.5rem; font-weight: 800; color: white;
                    margin-bottom: 1.5rem; line-height: 1.1; letter-spacing: -0.02em;
                }
                .text-gradient {
                    display: block;
                    background: linear-gradient(90deg, #fff, #00D264);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }
                .hero-desc { color: #9ca3af; font-size: 1.15rem; line-height: 1.6; max-width: 500px; margin-bottom: 2.5rem; }
                .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
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
                .btn-secondary {
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    color: white; font-size: 1rem; font-weight: 600;
                    padding: 1rem 2rem; border-radius: 99px;
                    text-decoration: none; border: 1px solid rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.05); transition: all 0.2s;
                }
                .btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

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

                @media (max-width: 900px) {
                    .bp-hero { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
                    .hero-content { display: flex; flex-direction: column; align-items: center; }
                    .hero-desc { margin-left: auto; margin-right: auto; }
                    .hero-title { font-size: 2.5rem; }
                    .hero-visual { height: 300px; }
                    .hero-actions { justify-content: center; }
                }
            `}</style>
        </section>
    )
}
