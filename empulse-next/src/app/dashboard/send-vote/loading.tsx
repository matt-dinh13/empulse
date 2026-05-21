export default function SendVoteLoading() {
    return (
        <div className="main-content">
            <div className="page-header">
                <div>
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" style={{ width: '50%' }} />
                </div>
            </div>
            <div className="skeleton-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="skeleton skeleton-text" style={{ width: '30%', marginBottom: 'var(--spacing-md)' }} />
                <div className="skeleton" style={{ height: '2.5rem', marginBottom: 'var(--spacing-lg)' }} />
                <div className="skeleton skeleton-text" style={{ width: '25%', marginBottom: 'var(--spacing-md)' }} />
                <div className="skeleton" style={{ height: '120px', marginBottom: 'var(--spacing-lg)' }} />
                <div className="skeleton skeleton-text" style={{ width: '20%', marginBottom: 'var(--spacing-md)' }} />
                <div className="skeleton" style={{ height: '100px', marginBottom: 'var(--spacing-lg)' }} />
                <div className="skeleton" style={{ height: '2.5rem', width: '200px' }} />
            </div>
        </div>
    )
}
