import { useEffect } from 'react'

export default function TabHowItWorks() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js'
        script.async = true
        script.onload = () => {
            const mermaid = (window as any).mermaid
            if (mermaid) {
                mermaid.initialize({ startOnLoad: true, theme: 'dark', securityLevel: 'loose' })
                mermaid.init(undefined, document.querySelectorAll('.mermaid'))
            }
        }
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    }, [])

    return (
        <div className="how-container">
            <h2 className="main-title">Business Flow</h2>

            <div className="flow-wrapper">
                {/* Connecting Line (Desktop) */}
                <div className="connecting-line"></div>

                <div className="steps-grid">
                    {/* Step 1 */}
                    <div className="step-item group">
                        <div className="icon-circle">
                            <span className="icon-emoji">💌</span>
                        </div>
                        <h3 className="step-title">1. Send Vote</h3>
                        <p className="step-desc">
                            Select a colleague from the directory. Currently supports searching by name/email.
                            <br />
                            <span className="highlight-green">Min message length: 20 chars</span>
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="step-item group">
                        <div className="icon-circle delay-1">
                            <span className="icon-emoji">💰</span>
                        </div>
                        <h3 className="step-title">2. Accumulate</h3>
                        <p className="step-desc">
                            Points are deducted from Sender's <span className="highlight-white">Quota Wallet</span> and added to Receiver's <span className="highlight-white">Reward Wallet</span> instantly.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="step-item group">
                        <div className="icon-circle delay-2">
                            <span className="icon-emoji">🎁</span>
                        </div>
                        <h3 className="step-title">3. Redeem</h3>
                        <p className="step-desc">
                            Employees browse the Catalog (Region-specific) and exchange points for Vouchers or Merchandise.
                        </p>
                    </div>
                </div>
            </div>

            <div className="validation-box">
                <h3 className="box-title">Validation Rules</h3>
                <div className="rules-grid">
                    <div className="rule-item">
                        <span className="rule-num">01</span>
                        <span>Cannot vote for self or direct manager.</span>
                    </div>
                    <div className="rule-item">
                        <span className="rule-num">02</span>
                        <span>Limit: 2 votes per week to encourage steady engagement.</span>
                    </div>
                    <div className="rule-item">
                        <span className="rule-num">03</span>
                        <span>Limit: 2 votes per person/month (prevents spamming friends).</span>
                    </div>
                    <div className="rule-item">
                        <span className="rule-num">04</span>
                        <span>Same-team limit: Max 50% of monthly quota can go to teammates.</span>
                    </div>
                </div>
            </div>

            <div className="diagram-section">
                <h3 className="sub-title">System Process Flow</h3>
                <div className="diagram-box">
                    <div className="mermaid">
                        {`flowchart TD
    A[Employee Login] --> B{Monthly Quota Left?}
    B -->|No| C[Wait for Monthly Reset]
    B -->|Yes| D{Weekly Limit Reached?}
    D -->|Yes| E[Wait for Weekly Reset]
    D -->|No| F[Select Colleague]
    F --> G[Write Recognition Message]
    G --> H{Length >= 20 chars?}
    H -->|No| G
    H -->|Yes| I[Submit Vote +10 Points]
    I --> J[Recipient Gets Points]
    J --> K{Enough Points?}
    K -->|Yes| L[Redeem Reward]
    K -->|No| M[Continue Earning]
    L --> N[Admin Approves Order]`}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .how-container { max-width: 1000px; margin: 0 auto; }
                .main-title { font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 3rem; color: white; }
                .sub-title { font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 2rem; color: white; margin-top: 4rem; }
                
                .diagram-section { margin-top: 5rem; margin-bottom: 5rem; }
                .diagram-box { 
                    background: rgba(255,255,255,0.03); 
                    padding: 2rem; 
                    border-radius: 1rem; 
                    border: 1px solid rgba(255,255,255,0.1); 
                    text-align: center;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }
                
                .flow-wrapper { position: relative; margin-bottom: 5rem; }
                .connecting-line { display: none; }
                
                .steps-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
                
                .step-item { text-align: center; position: relative; z-index: 2; }
                .icon-circle { 
                    width: 6rem; height: 6rem; margin: 0 auto 1.5rem; 
                    background: #000; border: 2px solid #10b981; border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 0 30px rgba(16,185,129,0.3);
                    transition: transform 0.3s;
                }
                .step-item:hover .icon-circle { transform: scale(1.1); }
                .icon-emoji { font-size: 2.5rem; }
                
                .step-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: white; }
                .step-desc { font-size: 0.95rem; color: #9ca3af; line-height: 1.6; max-width: 300px; margin: 0 auto; }
                
                .highlight-green { color: #10b981; font-size: 0.8rem; display: block; margin-top: 0.5rem; }
                .highlight-white { color: white; font-weight: 600; }

                .validation-box { padding: 2rem; border-radius: 1rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
                .box-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; color: white; }
                .rules-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
                .rule-item { display: flex; gap: 1rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem; font-size: 0.9rem; color: #9ca3af; align-items: center; }
                .rule-num { color: #10b981; font-family: monospace; font-weight: 700; }

                @media (min-width: 768px) {
                    .connecting-line { 
                        display: block; position: absolute; top: 3rem; left: 0; width: 100%; height: 2px; 
                        background: linear-gradient(90deg, rgba(16,185,129,0.2), #10b981, rgba(16,185,129,0.2)); 
                        z-index: 1; 
                    }
                    .steps-grid { grid-template-columns: 1fr 1fr 1fr; gap: 2rem; }
                    .rules-grid { grid-template-columns: 1fr 1fr; }
                }
            `}</style>
        </div>
    )
}
