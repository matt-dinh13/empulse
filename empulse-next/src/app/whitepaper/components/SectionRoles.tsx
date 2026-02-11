import Link from 'next/link'

const Icon = ({ d, size = 24 }: { d: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
)

const ICONS = {
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    target: 'M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0',
    arrow: 'M5 12h14M12 5l7 7-7 7',
}

const roles = [
    {
        icon: ICONS.shield,
        title: 'Super Admin',
        desc: 'Full admin portal access: analytics dashboard, system settings, user management, catalog and order operations.',
        demo: 'admin',
        accent: '#00D264',
    },
    {
        icon: ICONS.target,
        title: 'Employee',
        desc: 'Send recognition votes, earn points, browse the rewards catalog, and redeem for real vouchers.',
        demo: 'employee',
        accent: '#3b82f6',
    },
    {
        icon: ICONS.users,
        title: 'Manager',
        desc: 'All employee features plus team management view and cross-department recognition insights.',
        demo: 'manager',
        accent: '#a855f7',
    },
]

export default function SectionRoles() {
    return (
        <section className="bp-roles">
            <h2 className="roles-heading">Try Every Role</h2>
            <p className="roles-sub">Experience the platform from different perspectives</p>

            <div className="roles-grid">
                {roles.map(r => (
                    <div key={r.title} className="role-card" style={{ borderTop: `3px solid ${r.accent}` }}>
                        <div className="role-icon" style={{ color: r.accent, background: `${r.accent}15` }}>
                            <Icon d={r.icon} />
                        </div>
                        <h3 className="role-title">{r.title}</h3>
                        <p className="role-desc">{r.desc}</p>
                        <Link href={`/login?demo=${r.demo}`} className="role-btn" style={{ borderColor: `${r.accent}40`, color: r.accent }}>
                            Try Demo
                            <Icon d={ICONS.arrow} size={16} />
                        </Link>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .bp-roles { padding: 5rem 0; }
                .roles-heading { font-size: 2.5rem; font-weight: 800; text-align: center; color: white; margin-bottom: 0.75rem; }
                .roles-sub { text-align: center; color: #9ca3af; font-size: 1.1rem; margin-bottom: 3rem; }
                .roles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
                .role-card {
                    padding: 2rem; border-radius: 1rem;
                    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
                    display: flex; flex-direction: column; align-items: center; text-align: center;
                    transition: transform 0.2s;
                }
                .role-card:hover { transform: translateY(-4px); }
                .role-icon {
                    width: 3rem; height: 3rem; border-radius: 0.75rem;
                    display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;
                }
                .role-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 0.75rem; }
                .role-desc { font-size: 0.9rem; color: #9ca3af; line-height: 1.6; margin-bottom: 1.5rem; flex: 1; }
                .role-btn {
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    font-size: 0.9rem; font-weight: 700;
                    padding: 0.6rem 1.5rem; border-radius: 99px;
                    text-decoration: none; border: 1px solid;
                    background: transparent; transition: all 0.2s;
                }
                .role-btn:hover { background: rgba(255,255,255,0.05); }

                @media (max-width: 768px) {
                    .roles-grid { grid-template-columns: 1fr; }
                    .roles-heading { font-size: 2rem; }
                }
            `}</style>
        </section>
    )
}
