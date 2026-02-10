export default function DashboardLoading() {
    return (
        <div className="main-content">
            <div className="page-header">
                <div>
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" style={{ width: '40%' }} />
                </div>
            </div>
            <div className="stats-grid">
                {[1, 2, 3].map(i => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton skeleton-text" style={{ width: '50%' }} />
                        <div className="skeleton" style={{ height: '2.5rem', width: '60%' }} />
                    </div>
                ))}
            </div>
            <div className="skeleton-card">
                <div className="skeleton skeleton-text" style={{ width: '30%' }} />
                <div className="flex gap-md">
                    <div className="skeleton" style={{ height: '2.5rem', width: '120px' }} />
                    <div className="skeleton" style={{ height: '2.5rem', width: '120px' }} />
                </div>
            </div>
        </div>
    )
}
