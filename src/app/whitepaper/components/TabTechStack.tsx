'use client'

import { useEffect } from 'react'

export default function TabTechStack() {
    useEffect(() => {
        // Re-init mermaid if switching tabs, though usually loaded by parent/layout if global.
        // Since we load it in DataModel, we might need it here too if User navigates directly.
        // For simplicity, we assume DataModel handles the load or we duplicate logic if specific independent loading needed.
        // Actually, let's just use CSS pills here and maybe another diagram if needed.
        if (typeof window !== 'undefined' && (window as any).mermaid) {
            (window as any).mermaid.init(undefined, document.querySelectorAll('.mermaid'))
        }
    }, [])

    return (
        <div className="max-w-5xl mx-auto space-y-16">
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { name: 'Next.js 14', cat: 'Frontend', color: 'bg-white text-black' },
                        { name: 'TypeScript', cat: 'Language', color: 'bg-blue-600' },
                        { name: 'Tailwind CSS', cat: 'Styling', color: 'bg-cyan-500' },
                        { name: 'PostgreSQL', cat: 'Database', color: 'bg-blue-400' },
                        { name: 'Prisma', cat: 'ORM', color: 'bg-slate-600' },
                        { name: 'Supabase', cat: 'Backend', color: 'bg-green-600' },
                        { name: 'Vercel', cat: 'Hosting', color: 'bg-black border border-white/20' },
                    ].map((tech) => (
                        <div key={tech.name} className={`px-6 py-3 rounded-xl font-bold flex flex-col items-center shadow-lg ${tech.color} bg-opacity-90`}>
                            <span className="text-lg">{tech.name}</span>
                            <span className="text-xs opacity-80 font-normal uppercase mt-1">{tech.cat}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 overflow-hidden text-center">
                    <div className="mermaid">
                        {`
graph TD
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
    API -.-> Mail
                        `}
                    </div>
                </div>
            </section>
        </div>
    )
}
