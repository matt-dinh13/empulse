export function SkeletonCard() {
    return (
        <div className="skeleton-card">
            <div className="skeleton-line skeleton-title" />
            <div className="skeleton-line" />
            <div className="skeleton-line skeleton-short" />
        </div>
    )
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
    return (
        <div className="skeleton-table">
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="skeleton-row">
                    <div className="skeleton-cell" />
                    <div className="skeleton-cell" />
                    <div className="skeleton-cell skeleton-short" />
                </div>
            ))}
        </div>
    )
}
