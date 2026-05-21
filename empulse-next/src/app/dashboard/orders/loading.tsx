export default function OrdersLoading() {
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
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="skeleton skeleton-text" style={{ width: '200px' }} />
                                <div className="skeleton skeleton-text" style={{ width: '120px' }} />
                            </div>
                            <div className="skeleton" style={{ width: '80px', height: '1.5rem', borderRadius: 'var(--radius-full)' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
