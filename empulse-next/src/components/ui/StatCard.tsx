'use client'

import { CSSProperties, ReactNode } from 'react'

interface StatCardProps {
    label: string
    value: string | number
    icon?: string
    trend?: {
        value: string
        direction: 'up' | 'down' | 'neutral'
    }
    gradient?: string
    accentColor?: string
    children?: ReactNode
    className?: string
    style?: CSSProperties
}

export default function StatCard({
    label,
    value,
    icon,
    trend,
    gradient,
    accentColor,
    children,
    className = '',
    style,
}: StatCardProps) {
    const trendColor = trend?.direction === 'up'
        ? 'var(--color-success)'
        : trend?.direction === 'down'
        ? 'var(--color-error)'
        : 'var(--color-text-muted)'

    const trendIcon = trend?.direction === 'up' ? '↑' : trend?.direction === 'down' ? '↓' : '→'

    return (
        <div
            className={`${className} animate-slide-up`}
            style={{
                background: gradient || 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-smooth)',
                position: 'relative',
                overflow: 'hidden',
                ...style,
            }}
        >
            {/* Accent top border */}
            {accentColor && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: accentColor,
                    }}
                />
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <p
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'var(--color-text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            marginBottom: '0.5rem',
                        }}
                    >
                        {label}
                    </p>
                    <p
                        style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            color: 'var(--color-black)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {value}
                    </p>
                    {trend && (
                        <p
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                color: trendColor,
                                marginTop: '0.35rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.2rem',
                            }}
                        >
                            <span>{trendIcon}</span> {trend.value}
                        </p>
                    )}
                </div>
                {icon && (
                    <span
                        style={{
                            fontSize: '2rem',
                            opacity: 0.8,
                            lineHeight: 1,
                        }}
                    >
                        {icon}
                    </span>
                )}
            </div>

            {/* Slot for extra content like ProgressRing */}
            {children && (
                <div style={{ marginTop: '1rem' }}>{children}</div>
            )}
        </div>
    )
}
