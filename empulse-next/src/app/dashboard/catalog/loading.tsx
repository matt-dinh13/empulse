export default function CatalogLoading() {
    return (
        <div className="main-content">
            <div className="page-header">
                <div>
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" style={{ width: '40%' }} />
                </div>
            </div>
            <div className="grid grid-3">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton" style={{ height: '160px', marginBottom: 'var(--spacing-md)' }} />
                        <div className="skeleton skeleton-text" style={{ width: '60%' }} />
                        <div className="skeleton skeleton-text" style={{ width: '40%' }} />
                        <div className="skeleton" style={{ height: '2.5rem', width: '100%', marginTop: 'var(--spacing-md)' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}
