'use client'

interface ProgressRingProps {
    value: number
    max: number
    size?: number
    strokeWidth?: number
    color?: string
    trackColor?: string
    showLabel?: boolean
    className?: string
}

export default function ProgressRing({
    value,
    max,
    size = 80,
    strokeWidth = 6,
    color = 'var(--color-primary)',
    trackColor = 'var(--color-border-light)',
    showLabel = true,
    className = '',
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const percent = max > 0 ? Math.min(value / max, 1) : 0
    const offset = circumference - percent * circumference

    return (
        <div
            className={className}
            style={{
                position: 'relative',
                width: size,
                height: size,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                {/* Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                {/* Progress */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                />
            </svg>
            {showLabel && (
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: size * 0.22,
                            fontWeight: 700,
                            color: 'var(--color-text)',
                            lineHeight: 1,
                        }}
                    >
                        {value}
                    </span>
                    <span
                        style={{
                            fontSize: size * 0.13,
                            color: 'var(--color-text-muted)',
                            lineHeight: 1,
                            marginTop: '2px',
                        }}
                    >
                        / {max}
                    </span>
                </div>
            )}
        </div>
    )
}
