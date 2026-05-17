'use client'

import { CSSProperties, ReactNode } from 'react'

interface EmptyStateProps {
    icon?: string
    title: string
    description?: string
    action?: ReactNode
    className?: string
    style?: CSSProperties
}

export default function EmptyState({
    icon = '📭',
    title,
    description,
    action,
    className = '',
    style,
}: EmptyStateProps) {
    return (
        <div
            className={`${className} animate-fade-in`}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-3xl) var(--spacing-lg)',
                textAlign: 'center',
                ...style,
            }}
        >
            <div
                style={{
                    fontSize: '3.5rem',
                    marginBottom: 'var(--spacing-lg)',
                    lineHeight: 1,
                    animation: 'popIn 0.5s var(--transition-spring) forwards',
                }}
            >
                {icon}
            </div>
            <h3
                style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--spacing-sm)',
                }}
            >
                {title}
            </h3>
            {description && (
                <p
                    style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '400px',
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </p>
            )}
            {action && (
                <div style={{ marginTop: 'var(--spacing-lg)' }}>{action}</div>
            )}
        </div>
    )
}
