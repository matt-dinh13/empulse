'use client'

import { useEffect, useRef, useState, CSSProperties } from 'react'

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    debounceMs?: number
    className?: string
    style?: CSSProperties
}

export default function SearchInput({
    value,
    onChange,
    placeholder = 'Search...',
    debounceMs = 300,
    className = '',
    style,
}: SearchInputProps) {
    const [localValue, setLocalValue] = useState(value)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        setLocalValue(value)
    }, [value])

    const handleChange = (newValue: string) => {
        setLocalValue(newValue)
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            onChange(newValue)
        }, debounceMs)
    }

    return (
        <div
            className={className}
            style={{
                position: 'relative',
                ...style,
            }}
        >
            <span
                style={{
                    position: 'absolute',
                    left: '0.875rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-text-light)',
                    fontSize: '1rem',
                    pointerEvents: 'none',
                }}
            >
                🔍
            </span>
            <input
                type="text"
                value={localValue}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholder}
                className="form-input"
                style={{
                    paddingLeft: '2.5rem',
                    ...style,
                }}
            />
        </div>
    )
}
