import Image from 'next/image'
import Link from 'next/link'

const Icon = ({ d, size = 20 }: { d: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
)

const ICONS = {
    package: 'M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
    gift: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
    barChart: 'M12 20V10M18 20V4M6 20v-4',
}

const cards = [
    { icon: ICONS.package, title: 'Orders & Approvals', desc: 'Review and approve redemption requests. Region-scoped for HR admins.' },
    { icon: ICONS.gift, title: 'Catalog Management', desc: 'Manage rewards, voucher stock, and fulfillment pipeline.' },
    { icon: ICONS.barChart, title: 'Analytics & Settings', desc: 'Monitor KPIs, configure system rules, and manage users.' },
]

export default function SectionAdminPortal() {
    return (
        <section className="bp-admin">
            <h2 className="admin-heading">Admin Portal</h2>
            <p className="admin-sub">Full control over your recognition program</p>

            <div className="admin-screenshot">
                <Image
                    src="/screenshot-admin-orders.png"
                    alt="EmPulse admin orders dashboard"
                    width={1024}
                    height={575}
                    style={{ width: '100%', height: 'auto', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}
                    loading="lazy"
                />
            </div>

            <div className="admin-cards">
                {cards.map(c => (
                    <div key={c.title} className="admin-card">
                        <div className="card-icon">
                            <Icon d={c.icon} />
                        </div>
                        <h4 className="card-title">{c.title}</h4>
                        <p className="card-desc">{c.desc}</p>
                    </div>
                ))}
            </div>

            <div className="admin-cta">
                <Link href="/login?demo=admin" className="btn-admin">
                    Try as Admin
                    <Icon d="M5 12h14M12 5l7 7-7 7" />
                </Link>
            </div>

            <style jsx>{`
                .bp-admin { padding: 5rem 0; }
                .admin-heading { font-size: 2.5rem; font-weight: 800; text-align: center; color: white; margin-bottom: 0.75rem; }
                .admin-sub { text-align: center; color: #9ca3af; font-size: 1.1rem; margin-bottom: 3rem; }
                .admin-screenshot { margin-bottom: 3rem; }
                .admin-cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }
                .admin-card {
                    padding: 1.5rem; border-radius: 1rem;
                    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
                    transition: transform 0.2s;
                }
                .admin-card:hover { transform: translateY(-3px); }
                .card-icon { color: #00D264; margin-bottom: 1rem; }
                .card-title { font-size: 1.1rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
                .card-desc { font-size: 0.9rem; color: #9ca3af; line-height: 1.5; }
                .admin-cta { text-align: center; }
                .btn-admin {
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    background: rgba(0, 210, 100, 0.1); color: #00D264;
                    font-size: 1rem; font-weight: 700;
                    padding: 0.8rem 2rem; border-radius: 99px;
                    text-decoration: none; border: 1px solid rgba(0, 210, 100, 0.3);
                    transition: all 0.2s;
                }
                .btn-admin:hover { background: rgba(0, 210, 100, 0.2); border-color: #00D264; }

                @media (max-width: 768px) {
                    .admin-cards { grid-template-columns: 1fr; }
                    .admin-heading { font-size: 2rem; }
                }
            `}</style>
        </section>
    )
}
