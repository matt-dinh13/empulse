'use client'

import { useEffect } from 'react'

export default function TabDataModel() {
    useEffect(() => {
        // Dynamically load mermaid
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js'
        script.async = true
        script.onload = () => {
            // @ts-ignore
            window.mermaid.initialize({ startOnLoad: true, theme: 'dark' })
            // @ts-ignore
            window.mermaid.init(undefined, document.querySelectorAll('.mermaid'))
        }
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Entity Relationship Diagram (ERD)</h2>
            <p className="text-center text-gray-400 mb-12">
                The core data structure supporting multi-region users, wallets, and voting transactions.
            </p>

            <div className="bg-white/5 p-8 rounded-xl border border-white/10 overflow-x-auto text-center">
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

            <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-emerald-500 font-bold mb-2">User & Wallets</h4>
                    <p className="text-sm text-gray-400">
                        Separation of <strong>Quota Wallet</strong> (Giving Power) and <strong>Reward Wallet</strong> (Earning Power) ensures budget control.
                    </p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-emerald-500 font-bold mb-2">Vote Transaction</h4>
                    <p className="text-sm text-gray-400">
                        Atomic transactions ensure points are never lost. Every vote is linked to both Sender and Receiver.
                    </p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-emerald-500 font-bold mb-2">Rewards</h4>
                    <p className="text-sm text-gray-400">
                        Region-specific catalogs allow VN users to see Vouchers and CZ users to see different options.
                    </p>
                </div>
            </div>
        </div>
    )
}
