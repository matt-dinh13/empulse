export default function VotesSentLoading() {
    return (
        <div className="main-content">
            <div className="page-header">
                <div>
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" style={{ width: '40%' }} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {[1, 2, 3].map(i => (
                    <div key={i} className="skeleton-card">
                        <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-sm)' }}>
                            <div className="skeleton" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                            <div className="skeleton skeleton-text" style={{ width: '30%', marginBottom: 0 }} />
                        </div>
                        <div className="skeleton skeleton-text" style={{ width: '80%' }} />
                        <div className="skeleton skeleton-text" style={{ width: '60%' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}
