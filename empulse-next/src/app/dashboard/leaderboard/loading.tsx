export default function LeaderboardLoading() {
    return (
        <div className="main-content">
            <div className="page-header">
                <div>
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" style={{ width: '40%' }} />
                </div>
            </div>
            <div className="skeleton-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="skeleton" style={{ height: '3rem', borderRadius: 0 }} />
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center gap-md" style={{ padding: 'var(--spacing-md)', borderBottom: '1px solid var(--color-border-light)' }}>
                        <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                        <div style={{ flex: 1 }}>
                            <div className="skeleton skeleton-text" style={{ width: '40%' }} />
                            <div className="skeleton skeleton-text" style={{ width: '25%' }} />
                        </div>
                        <div className="skeleton" style={{ width: '60px', height: '1rem' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}
