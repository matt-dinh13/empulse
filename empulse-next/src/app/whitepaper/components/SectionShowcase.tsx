import Image from 'next/image'

const features = [
    {
        title: 'Send Recognition',
        desc: 'Recognize colleagues with meaningful messages and reward points instantly.',
        bullets: ['Search by name or email', 'Write personalized messages (min 20 chars)', 'Award 10 points per vote'],
        image: '/screenshot-send-vote.png',
        alt: 'EmPulse send vote interface',
    },
    {
        title: 'Track & Compete',
        desc: 'See who\'s leading in giving and receiving recognition across the organization.',
        bullets: ['Real-time leaderboard rankings', 'Filter by team or department', 'Monthly and all-time views'],
        image: '/screenshot-leaderboard.png',
        alt: 'EmPulse leaderboard view',
    },
    {
        title: 'Redeem Rewards',
        desc: 'Exchange earned points for real vouchers and merchandise from the rewards catalog.',
        bullets: ['Region-specific catalog items', 'Digital vouchers and physical merch', 'Order tracking and approval flow'],
        image: '/screenshot-catalog.png',
        alt: 'EmPulse rewards catalog',
    },
]

export default function SectionShowcase() {
    return (
        <section id="showcase" className="bp-showcase">
            <h2 className="showcase-heading">See It in Action</h2>
            <p className="showcase-sub">Real screenshots from the live application</p>

            <div className="showcase-features">
                {features.map((f, i) => (
                    <div key={f.title} className={`feature-block ${i % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="feature-image">
                            <Image
                                src={f.image}
                                alt={f.alt}
                                width={640}
                                height={360}
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="feature-text">
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                            <ul className="feature-bullets">
                                {f.bullets.map(b => (
                                    <li key={b}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D264" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .bp-showcase { padding: 5rem 0; }
                .showcase-heading { font-size: 2.5rem; font-weight: 800; text-align: center; color: white; margin-bottom: 0.75rem; }
                .showcase-sub { text-align: center; color: #9ca3af; font-size: 1.1rem; margin-bottom: 4rem; }
                .showcase-features { display: flex; flex-direction: column; gap: 5rem; }
                .feature-block { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
                .feature-block.reverse { direction: rtl; }
                .feature-block.reverse > * { direction: ltr; }
                .feature-text { }
                .feature-title { font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 0.75rem; }
                .feature-desc { color: #9ca3af; font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem; }
                .feature-bullets { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
                .feature-bullets li { display: flex; align-items: center; gap: 0.75rem; color: #d1d5db; font-size: 0.95rem; }

                @media (max-width: 768px) {
                    .feature-block, .feature-block.reverse { grid-template-columns: 1fr; direction: ltr; }
                    .feature-block.reverse > * { direction: ltr; }
                    .showcase-heading { font-size: 2rem; }
                }
            `}</style>
        </section>
    )
}
