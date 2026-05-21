'use client'

import { useEffect, useState } from 'react'

interface PageTransitionProps {
    children: React.ReactNode
    loading?: boolean
    skeleton?: React.ReactNode
}

/**
 * Wraps page content with a fade-in animation.
 * Shows skeleton while loading, then reveals content with smooth transition.
 */
export default function PageTransition({ children, loading = false, skeleton }: PageTransitionProps) {
    const [visible, setVisible] = useState(!loading)

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => setVisible(true), 50)
            return () => clearTimeout(timer)
        }
        return undefined
    }, [loading])

    if (loading) {
        if (!visible) {
            // Will be reset when loading becomes false
        }
        return skeleton ? <div className="animate-fade-in">{skeleton}</div> : null
    }

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
        >
            {children}
        </div>
    )
}
