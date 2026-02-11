const Icon = ({ d, size = 32 }: { d: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
)

const ICONS = {
    send: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
    coins: 'M12 20V10M18 20V4M6 20v-4',
    gift: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
}

const steps = [
    { icon: ICONS.send, title: '1. Send Vote', desc: 'Select a colleague, write a recognition message (min 20 chars), and award 10 points.' },
    { icon: ICONS.coins, title: '2. Accumulate', desc: 'Points deduct from Sender\'s Quota Wallet and add to Receiver\'s Reward Wallet instantly.' },
    { icon: ICONS.gift, title: '3. Redeem', desc: 'Browse the region-specific catalog and exchange points for vouchers or merchandise.' },
]

const rules = [
    { num: '01', text: 'Cannot vote for self or direct manager.' },
    { num: '02', text: 'Limit: 2 votes per week to encourage steady engagement.' },
    { num: '03', text: 'Limit: 2 votes per person/month (prevents spamming friends).' },
    { num: '04', text: 'Same-team limit: Max 50% of monthly quota can go to teammates.' },
]

export default function SectionHowItWorks() {
    return (
        <section className="bp-how">
            <h2 className="how-heading">How It Works</h2>

            <div className="flow-wrapper">
                <div className="connecting-line" />
                <div className="steps-grid">
                    {steps.map(s => (
                        <div key={s.title} className="step-item">
                            <div className="icon-circle">
                                <Icon d={s.icon} />
                            </div>
                            <h3 className="step-title">{s.title}</h3>
                            <p className="step-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="validation-box">
                <h3 className="box-title">Validation Rules</h3>
                <div className="rules-grid">
                    {rules.map(r => (
                        <div key={r.num} className="rule-item">
                            <span className="rule-num">{r.num}</span>
                            <span>{r.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .bp-how { padding: 5rem 0; }
                .how-heading { font-size: 2.5rem; font-weight: 800; text-align: center; color: white; margin-bottom: 3rem; }
                .flow-wrapper { position: relative; margin-bottom: 3rem; }
                .connecting-line { display: none; }
                .steps-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
                .step-item { text-align: center; position: relative; z-index: 2; }
                .icon-circle {
                    width: 5rem; height: 5rem; margin: 0 auto 1.25rem;
                    background: #000; border: 2px solid #00D264; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 0 30px rgba(0, 210, 100, 0.2);
                    color: #00D264; transition: transform 0.3s;
                }
                .step-item:hover .icon-circle { transform: scale(1.1); }
                .step-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: white; }
                .step-desc { font-size: 0.95rem; color: #9ca3af; line-height: 1.6; max-width: 300px; margin: 0 auto; }
                .validation-box { padding: 2rem; border-radius: 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); }
                .box-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; color: white; }
                .rules-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
                .rule-item { display: flex; gap: 1rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem; font-size: 0.9rem; color: #9ca3af; align-items: center; }
                .rule-num { color: #00D264; font-family: monospace; font-weight: 700; }

                @media (min-width: 768px) {
                    .connecting-line {
                        display: block; position: absolute; top: 2.5rem; left: 10%; width: 80%; height: 2px;
                        background: linear-gradient(90deg, rgba(0,210,100,0.2), #00D264, rgba(0,210,100,0.2));
                        z-index: 1;
                    }
                    .steps-grid { grid-template-columns: 1fr 1fr 1fr; gap: 2rem; }
                    .rules-grid { grid-template-columns: 1fr 1fr; }
                }
            `}</style>
        </section>
    )
}
