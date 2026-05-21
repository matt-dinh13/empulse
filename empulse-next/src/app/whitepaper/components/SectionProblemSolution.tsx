const Icon = ({ d, size = 28 }: { d: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
)

const ICONS = {
    heartCrack: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z M12 13l-1-1 2-2-3-3',
    lightbulb: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5 M9 18h6 M10 22h4',
}

export default function SectionProblemSolution() {
    return (
        <section className="bp-problem-solution">
            <div className="ps-grid">
                <div className="ps-card border-red">
                    <div className="icon-box red-icon">
                        <Icon d={ICONS.heartCrack} />
                    </div>
                    <h3 className="ps-title">The Problem</h3>
                    <ul className="ps-list">
                        <li>
                            <span className="bullet red">&#8226;</span>
                            <span>Employees feel disconnected in hybrid/remote setups.</span>
                        </li>
                        <li>
                            <span className="bullet red">&#8226;</span>
                            <span>Recognition is infrequent and often top-down only.</span>
                        </li>
                        <li>
                            <span className="bullet red">&#8226;</span>
                            <span>&quot;Kudos&quot; channels on Slack get lost and lack tangible value.</span>
                        </li>
                    </ul>
                </div>

                <div className="ps-card border-green">
                    <div className="icon-box green-icon">
                        <Icon d={ICONS.lightbulb} />
                    </div>
                    <h3 className="ps-title">The Solution</h3>
                    <ul className="ps-list">
                        <li>
                            <span className="bullet green">&#8226;</span>
                            <span>Democratized recognition: Anyone can reward anyone.</span>
                        </li>
                        <li>
                            <span className="bullet green">&#8226;</span>
                            <span>Tangible Rewards: Points convert to Vouchers &amp; Merch.</span>
                        </li>
                        <li>
                            <span className="bullet green">&#8226;</span>
                            <span>Gamification: Leaderboards and Badges drive participation.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .bp-problem-solution { padding: 4rem 0; }
                .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                .ps-card {
                    padding: 2.5rem; border-radius: 1.5rem;
                    background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.3s;
                }
                .ps-card:hover { transform: translateY(-5px); }
                .border-green { border-top: 4px solid #00D264; }
                .border-red { border-top: 4px solid #ef4444; }
                .icon-box {
                    width: 3.5rem; height: 3.5rem; border-radius: 1rem;
                    display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;
                }
                .red-icon { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
                .green-icon { background: rgba(0, 210, 100, 0.1); color: #00D264; }
                .ps-title { font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: white; }
                .ps-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; color: #d1d5db; }
                .ps-list li { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 1.05rem; }
                .bullet { font-size: 1.2rem; line-height: 1; }
                .bullet.red { color: #ef4444; }
                .bullet.green { color: #00D264; }

                @media (max-width: 768px) {
                    .ps-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    )
}
