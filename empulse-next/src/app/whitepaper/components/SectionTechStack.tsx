'use client'

const techStack = [
    { name: 'Next.js 16', cat: 'Framework' },
    { name: 'TypeScript', cat: 'Language' },
    { name: 'Custom CSS', cat: 'Styling' },
    { name: 'PostgreSQL', cat: 'Database' },
    { name: 'Prisma', cat: 'ORM' },
    { name: 'Supabase', cat: 'Backend' },
    { name: 'Vercel', cat: 'Hosting' },
]

const architectureDiagram = `graph TD
    Client[Browser / Client] -->|HTTPS| Vercel[Vercel Edge Network]

    subgraph "Vercel Infrastructure"
        Vercel -->|Router| NextApp[Next.js App Server]
        NextApp -->|API Routes| API[Backend Logic]
        NextApp -->|SSR/RSC| Pages[React Components]
    end

    API -->|Prisma Client| DB[(PostgreSQL Database)]

    subgraph "External Services"
        Auth[Auth Service / JWT]
        Mail[Email Service]
    end

    API -.-> Auth
    API -.-> Mail`

const erdDiagram = `erDiagram
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
    }`

export default function SectionTechStack() {
    return (
        <section className="bp-tech" data-mermaid-container>
            <h2 className="tech-heading">Under the Hood</h2>
            <p className="tech-sub">Built with modern, production-grade technologies</p>

            <div className="tech-pills">
                {techStack.map(t => (
                    <div key={t.name} className="tech-pill">
                        <span className="pill-name">{t.name}</span>
                        <span className="pill-cat">{t.cat}</span>
                    </div>
                ))}
            </div>

            <h3 className="sub-heading">System Architecture</h3>
            <div className="diagram-box">
                <div className="mermaid">{architectureDiagram}</div>
            </div>

            <details className="erd-details">
                <summary className="erd-summary">
                    <span>Entity Relationship Diagram (ERD)</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <div className="diagram-box" style={{ marginTop: '1rem' }}>
                    <div className="mermaid">{erdDiagram}</div>
                </div>
            </details>

            <style jsx>{`
                .bp-tech { padding: 5rem 0; }
                .tech-heading { font-size: 2.5rem; font-weight: 800; text-align: center; color: white; margin-bottom: 0.75rem; }
                .tech-sub { text-align: center; color: #9ca3af; font-size: 1.1rem; margin-bottom: 3rem; }
                .tech-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-bottom: 4rem; }
                .tech-pill {
                    padding: 0.6rem 1.25rem; border-radius: 0.75rem;
                    display: flex; flex-direction: column; align-items: center;
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    transition: border-color 0.2s;
                }
                .tech-pill:hover { border-color: #00D264; }
                .pill-name { font-weight: 700; font-size: 1rem; color: white; }
                .pill-cat { font-size: 0.7rem; text-transform: uppercase; margin-top: 0.15rem; color: #9ca3af; letter-spacing: 0.05em; }
                .sub-heading { font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 2rem; color: white; }
                .diagram-box {
                    background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 1rem;
                    border: 1px solid rgba(255,255,255,0.1); text-align: center;
                    overflow-x: auto; -webkit-overflow-scrolling: touch;
                }
                .erd-details { margin-top: 3rem; }
                .erd-summary {
                    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
                    font-size: 1.25rem; font-weight: 700; color: white; cursor: pointer;
                    padding: 1rem; border-radius: 0.75rem;
                    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
                    list-style: none; transition: background 0.2s;
                }
                .erd-summary::-webkit-details-marker { display: none; }
                .erd-summary:hover { background: rgba(255,255,255,0.06); }
                .erd-details[open] .erd-summary svg { transform: rotate(180deg); }
                .erd-summary svg { transition: transform 0.2s; }
            `}</style>
        </section>
    )
}
