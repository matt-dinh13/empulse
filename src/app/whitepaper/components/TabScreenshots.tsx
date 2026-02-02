import Image from 'next/image'

export default function TabScreenshots() {
    const screens = [
        { title: 'Vote Feed (Dashboard)', src: '/screenshots/dashboard.png', desc: 'Real-time feed of employee recognition.' },
        { title: 'Leaderboard', src: '/screenshots/leaderboard.png', desc: 'Top contributors and ranking.' },
        { title: 'Send Vote', src: '/screenshots/send-vote.png', desc: 'Intuitive interface to recognize colleagues.' },
        { title: 'Catalog', src: '/screenshots/catalog.png', desc: 'Rewards redemption center.' },
        { title: 'Admin Orders', src: '/screenshots/admin-orders.png', desc: 'Order management and approval workflow.' },
    ]

    return (
        <div className="screens-container">
            <h2 className="title">Application Visuals</h2>
            <p className="subtitle">
                A glimpse into the user interface and experience.
            </p>

            <div className="grid-screens">
                {screens.map((screen, idx) => (
                    <div key={idx} className={`screen-card ${idx === 0 ? 'full-width' : ''}`}>
                        <div className="image-placeholder">
                            <div className="placeholder-text">
                                [ Screenshot: {screen.src} ]
                                <br />
                                (Image Pending Capture)
                            </div>
                        </div>
                        <div className="card-overlay">
                            <div>
                                <h3 className="card-title">{screen.title}</h3>
                                <p className="card-desc">{screen.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .screens-container { max-width: 1200px; margin: 0 auto; }
                .title { font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 1rem; color: white; }
                .subtitle { text-align: center; color: #9ca3af; margin-bottom: 3rem; }

                .grid-screens { display: grid; grid-template-columns: 1fr; gap: 2rem; }
                
                .screen-card { 
                    position: relative; 
                    border-radius: 1rem; 
                    overflow: hidden; 
                    border: 1px solid rgba(255,255,255,0.1); 
                    background: rgba(255,255,255,0.05);
                }
                
                .image-placeholder { 
                    aspect-ratio: 16/9; 
                    background: #1f2937; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                }
                .placeholder-text { font-family: monospace; color: #6b7280; font-size: 0.9rem; text-align: center; }

                .card-overlay { 
                    position: absolute; 
                    inset: 0; 
                    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); 
                    display: flex; 
                    align-items: flex-end; 
                    padding: 1.5rem; 
                    opacity: 0; 
                    transition: opacity 0.3s;
                }
                .screen-card:hover .card-overlay { opacity: 1; }

                .card-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 0.25rem; }
                .card-desc { font-size: 0.9rem; color: #d1d5db; }

                @media (min-width: 768px) {
                    .grid-screens { grid-template-columns: 1fr 1fr; }
                    .full-width { grid-column: span 2; }
                }
            `}</style>
        </div>
    )
}
