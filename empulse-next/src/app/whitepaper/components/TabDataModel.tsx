'use client'

import { useEffect } from 'react'

type MermaidApi = {
    initialize: (opts: { startOnLoad: boolean; theme: string }) => void
    init: (config: unknown, nodes: NodeListOf<Element>) => void
}

type MermaidWindow = Window & { mermaid?: MermaidApi }

export default function TabDataModel() {
    useEffect(() => {
        // Dynamically load mermaid
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js'
        script.async = true
        script.onload = () => {
            const mermaid = (window as MermaidWindow).mermaid
            if (mermaid) {
                mermaid.initialize({ startOnLoad: true, theme: 'dark' })
                mermaid.init(undefined, document.querySelectorAll('.mermaid'))
            }
        }
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="data-container">
            <h2 className="title">Entity Relationship Diagram (ERD)</h2>
            <p className="subtitle">
                The core data structure supporting multi-region users, wallets, and voting transactions.
            </p>

            <div className="diagram-box">
                <div className="mermaid">
                    {`
erDiagram
    User ||--o{ Vote : sends
    User ||--o{ Vote : receives
    User ||--o{ RedemptionOrder : places
    User ||--|| QuotaWallet : has
    User ||--|| RewardWallet : has
    
    Vote {
        int id
        int pointsAwarded
        string message
        datetime createdAt
    }

    User {
        int id
        string email
        string fullName
        string role
        boolean isActive
    }

    RewardCatalog ||--o{ RedemptionOrder : contains
    RewardCatalog {
        int id
        string name
        int pointsRequired
        string region
    }

    RedemptionOrder {
        int id
        string status
        int pointsSpent
        string voucherCode
    }
                    `}
                </div>
            </div>

            <h2 className="title" style={{ marginTop: '5rem' }}>System Use Cases</h2>
            <div className="diagram-box">
                <div className="mermaid">
                    {`graph LR
    subgraph Actors
        Employee((Employee))
        Admin((Admin))
    end

    subgraph "EmPulse System"
        UC1[Send Vote]
        UC2[View Leaderboard]
        UC3[Redeem Points]
        UC4[View Feed]
        UC5[Approve Orders]
        UC6[Manage Users]
        UC7[View Analytics]
    end

    Employee --> UC1
    Employee --> UC2
    Employee --> UC3
    Employee --> UC4

    Admin --> UC5
    Admin --> UC6
    Admin --> UC7
    Admin --> UC2`}
                </div>
            </div>

            <div className="info-grid">
                <div className="info-card">
                    <h4 className="info-title">User & Wallets</h4>
                    <p className="info-text">
                        Separation of <strong>Quota Wallet</strong> (Giving Power) and <strong>Reward Wallet</strong> (Earning Power) ensures budget control.
                    </p>
                </div>
                <div className="info-card">
                    <h4 className="info-title">Vote Transaction</h4>
                    <p className="info-text">
                        Atomic transactions ensure points are never lost. Every vote is linked to both Sender and Receiver.
                    </p>
                </div>
                <div className="info-card">
                    <h4 className="info-title">Rewards</h4>
                    <p className="info-text">
                        Region-specific catalogs allow VN users to see Vouchers and CZ users to see different options.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .data-container { max-width: 1200px; margin: 0 auto; }
                .title { font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 1rem; color: white; }
                .subtitle { text-align: center; color: #9ca3af; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto; }
                
                .diagram-box { 
                    background: rgba(255,255,255,0.05); 
                    padding: 2rem; 
                    border-radius: 1rem; 
                    border: 1px solid rgba(255,255,255,0.1); 
                    overflow-x: auto; 
                    text-align: center;
                    margin-bottom: 3rem;
                }
                
                .info-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
                
                .info-card { padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.1); }
                .info-title { color: #10b981; font-weight: 700; margin-bottom: 0.5rem; font-size: 1.1rem; }
                .info-text { font-size: 0.9rem; color: #9ca3af; line-height: 1.5; }
                .info-text strong { color: white; }

                @media (min-width: 768px) {
                    .info-grid { grid-template-columns: 1fr 1fr 1fr; }
                }
            `}</style>
        </div>
    )
}
