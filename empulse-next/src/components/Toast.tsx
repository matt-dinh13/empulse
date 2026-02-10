'use client'

import { useState, useCallback, useRef, createContext, useContext } from 'react'

interface ToastItem {
    id: number
    message: string
    type: 'success' | 'error' | 'info'
    exiting?: boolean
}

interface ToastContextType {
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function useToast() {
    const ctx = useContext(ToastContext)
    if (!ctx) throw new Error('useToast must be used within ToastProvider')
    return ctx
}

let nextId = 0

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([])
    const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map())

    const dismissToast = useCallback((id: number) => {
        const timer = timersRef.current.get(id)
        if (timer) clearTimeout(timer)
        timersRef.current.delete(id)
        setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t))
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, 300)
    }, [])

    const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
        const id = nextId++
        setToasts(prev => [...prev, { id, message, type }])

        const timer = setTimeout(() => {
            dismissToast(id)
        }, 3000)
        timersRef.current.set(id, timer)
    }, [dismissToast])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toasts.length > 0 && (
                <div className="toast-container" role="status" aria-live="polite" aria-atomic="true">
                    {toasts.map(t => (
                        <div key={t.id} className={`toast toast-${t.type} ${t.exiting ? 'toast-exit' : ''}`}>
                            <span>{t.message}</span>
                            <button
                                className="toast-close"
                                onClick={() => dismissToast(t.id)}
                                aria-label="Dismiss notification"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </ToastContext.Provider>
    )
}
