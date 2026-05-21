'use client'

import { CSSProperties } from 'react'

interface BadgeProps {
    children: React.ReactNode
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'accent'
    size?: 'sm' | 'md'
    className?: string
    style?: CSSProperties
}

const variantStyles: Record<string, CSSProperties> = {
    default: {
        backgroundColor: 'var(--color-surface-hover)',
        color: 'var(--color-text-muted)',
        border: '1px solid var(--color-border)',
    },
    success: {
        backgroundColor: 'var(--color-success-light)',
        color: '#059669',
    },
    warning: {
        backgroundColor: 'var(--color-warning-light)',
        color: '#D97706',
    },
    error: {
        backgroundColor: 'var(--color-error-light)',
        color: 'var(--color-error)',
    },
    info: {
        backgroundColor: 'var(--color-info-light)',
        color: 'var(--color-info)',
    },
    accent: {
        background: 'var(--gradient-accent)',
        color: 'white',
    },
}

export default function Badge({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    style,
}: BadgeProps) {
    return (
        <span
            className={className}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: size === 'sm' ? '0.15rem 0.5rem' : '0.25rem 0.75rem',
                fontSize: size === 'sm' ? '0.7rem' : '0.75rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                lineHeight: 1.4,
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
                ...variantStyles[variant],
                ...style,
            }}
        >
            {children}
        </span>
    )
}
