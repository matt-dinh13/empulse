'use client'

import { useEffect, useCallback, CSSProperties, ReactNode } from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
    size?: 'sm' | 'md' | 'lg'
    className?: string
    style?: CSSProperties
}

const sizeMap = {
    sm: '420px',
    md: '560px',
    lg: '720px',
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    className = '',
    style,
}: ModalProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        },
        [onClose]
    )

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, handleKeyDown])

    if (!isOpen) return null

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-lg)',
            }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(4px)',
                    animation: 'fadeIn 0.2s ease forwards',
                }}
            />

            {/* Content */}
            <div
                className={`card ${className}`}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: sizeMap[size],
                    maxHeight: '90vh',
                    overflow: 'auto',
                    animation: 'scaleIn 0.2s var(--transition-smooth) forwards',
                    padding: 'var(--spacing-xl)',
                    boxShadow: 'var(--shadow-xl)',
                    ...style,
                }}
            >
                {/* Header */}
                {title && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 'var(--spacing-lg)',
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</h3>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                color: 'var(--color-text-muted)',
                                cursor: 'pointer',
                                padding: '0.25rem',
                                lineHeight: 1,
                                borderRadius: 'var(--radius-sm)',
                                transition: 'all var(--transition-fast)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'
                                e.currentTarget.style.color = 'var(--color-text)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = 'var(--color-text-muted)'
                            }}
                        >
                            ×
                        </button>
                    </div>
                )}

                {children}
            </div>
        </div>
    )
}
