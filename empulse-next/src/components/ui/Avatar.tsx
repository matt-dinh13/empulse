'use client'

import { CSSProperties } from 'react'
import Image from 'next/image'

interface AvatarProps {
    src?: string | null
    name: string
    size?: number
    status?: 'online' | 'offline' | 'away' | null
    className?: string
    style?: CSSProperties
}

const statusColors: Record<string, string> = {
    online: 'var(--color-success)',
    offline: 'var(--color-text-light)',
    away: 'var(--color-warning)',
}

function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
}

function getColorFromName(name: string): string {
    const colors = [
        '#6366F1', '#8B5CF6', '#EC4899', '#F43F5E',
        '#F97316', '#EAB308', '#22C55E', '#14B8A6',
        '#06B6D4', '#3B82F6', '#6D28D9', '#DB2777',
    ]
    let hash = 0
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
}

export default function Avatar({
    src,
    name,
    size = 40,
    status,
    className = '',
    style,
}: AvatarProps) {
    const bgColor = getColorFromName(name)

    return (
        <div
            className={className}
            style={{
                position: 'relative',
                width: size,
                height: size,
                flexShrink: 0,
                ...style,
            }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    width={size}
                    height={size}
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
            ) : (
                <div
                    style={{
                        width: size,
                        height: size,
                        borderRadius: '50%',
                        backgroundColor: bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: size * 0.38,
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                    }}
                >
                    {getInitials(name)}
                </div>
            )}
            {status && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: size * 0.28,
                        height: size * 0.28,
                        borderRadius: '50%',
                        backgroundColor: statusColors[status],
                        border: '2px solid white',
                    }}
                />
            )}
        </div>
    )
}
