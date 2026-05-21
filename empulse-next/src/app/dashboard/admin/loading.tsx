export default function AdminLoading() {
    return (
        <div style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-text" style={{ width: '40%' }} />
            </div>
            <div className="stats-grid">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton skeleton-text" style={{ width: '50%' }} />
                        <div className="skeleton" style={{ height: '2.5rem', width: '60%' }} />
                    </div>
                ))}
            </div>
            <div className="skeleton-card" style={{ marginTop: 'var(--spacing-lg)' }}>
                <div className="skeleton" style={{ height: '3rem', marginBottom: 'var(--spacing-md)' }} />
                {[1, 2, 3].map(i => (
                    <div key={i} className="skeleton skeleton-text" style={{ marginBottom: 'var(--spacing-sm)' }} />
                ))}
            </div>
        </div>
    )
}
