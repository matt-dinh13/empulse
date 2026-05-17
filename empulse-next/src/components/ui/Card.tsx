'use client'

import { CSSProperties, ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
    variant?: 'default' | 'glass' | 'elevated' | 'interactive'
    padding?: 'none' | 'sm' | 'md' | 'lg'
    onClick?: () => void
}

const paddingMap = {
    none: '0',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
}

export default function Card({
    children,
    className = '',
    style,
    variant = 'default',
    padding = 'lg',
    onClick,
}: CardProps) {
    const variantStyles: Record<string, CSSProperties> = {
        default: {},
        glass: {
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        elevated: {
            boxShadow: 'var(--shadow-lg)',
            border: 'none',
        },
        interactive: {
            cursor: 'pointer',
        },
    }

    return (
        <div
            className={`card ${className}`}
            style={{
                padding: paddingMap[padding],
                ...variantStyles[variant],
                ...style,
            }}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
