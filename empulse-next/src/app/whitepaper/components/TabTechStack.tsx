'use client'

import { useEffect } from 'react'

type MermaidApi = {
    init: (config: unknown, nodes: NodeListOf<Element>) => void
}

type MermaidWindow = Window & { mermaid?: MermaidApi }

export default function TabTechStack() {
    useEffect(() => {
        const mermaid = (window as MermaidWindow).mermaid
        if (typeof window !== 'undefined' && mermaid) {
            mermaid.init(undefined, document.querySelectorAll('.mermaid'))
        }
    }, [])

    return (
        <div className="tech-container">
            <section className="section">
                <h2 className="title">Technology Stack</h2>
                <div className="tech-grid">
                    {[
                        { name: 'Next.js 14', cat: 'Frontend', style: 'bg-white' },
                        { name: 'TypeScript', cat: 'Language', style: 'bg-blue' },
                        { name: 'Tailwind CSS', cat: 'Styling', style: 'bg-cyan' },
                        { name: 'PostgreSQL', cat: 'Database', style: 'bg-lightblue' },
                        { name: 'Prisma', cat: 'ORM', style: 'bg-slate' },
                        { name: 'Supabase', cat: 'Backend', style: 'bg-green' },
                        { name: 'Vercel', cat: 'Hosting', style: 'bg-black' },
                    ].map((tech) => (
                        <div key={tech.name} className={`tech-card ${tech.style}`}>
                            <span className="tech-name">{tech.name}</span>
                            <span className="tech-cat">{tech.cat}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2 className="title">System Architecture</h2>
                <div className="diagram-box">
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

            <style jsx>{`
                .tech-container { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem; }
                .title { font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 2rem; color: white; }
                
                .tech-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
                
                .tech-card { padding: 0.75rem 1.5rem; border-radius: 0.75rem; display: flex; flex-direction: column; align-items: center; border: 1px solid rgba(255,255,255,0.1); }
                .tech-name { font-weight: 700; font-size: 1.1rem; color: white; }
                .tech-cat { font-size: 0.75rem; text-transform: uppercase; margin-top: 0.25rem; opacity: 0.8; color: rgba(255,255,255,0.8); }

                /* Custom Colors reflecting original Tailwind intent */
                .bg-white { background: rgba(255,255,255,0.1); } /* kept subtle for dark mode */
                .bg-white .tech-name, .bg-white .tech-cat { color: white; }
                
                .bg-blue { background: rgba(37, 99, 235, 0.4); } 
                .bg-cyan { background: rgba(6, 182, 212, 0.4); }
                .bg-lightblue { background: rgba(96, 165, 250, 0.4); }
                .bg-slate { background: rgba(71, 85, 105, 0.6); }
                .bg-green { background: rgba(22, 163, 74, 0.4); }
                .bg-black { background: #000; border-color: rgba(255,255,255,0.2); }

                .diagram-box { 
                    background: rgba(255,255,255,0.05); 
                    padding: 2rem; 
                    border-radius: 1rem; 
                    border: 1px solid rgba(255,255,255,0.1); 
                    overflow-x: auto; 
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
