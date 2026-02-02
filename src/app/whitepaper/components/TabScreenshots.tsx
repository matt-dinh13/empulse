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
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Application Visuals</h2>
            <p className="text-center text-gray-400 mb-12">
                A glimpse into the user interface and experience.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {screens.map((screen, idx) => (
                    <div key={idx} className={`group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 ${idx === 0 ? 'md:col-span-2' : ''}`}>
                        <div className="aspect-video bg-gray-800 relative flex items-center justify-center">
                            {/* Placeholder because we might not have actual images yet */}
                            <div className="text-gray-500 font-mono text-sm">
                                [ Screenshot: {screen.src} ]
                                <br />
                                (Image Pending Capture)
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{screen.title}</h3>
                                <p className="text-sm text-gray-300">{screen.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
