'use client'

import { useState, useCallback, createContext, useContext } from 'react'

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

    const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
        const id = nextId++
        setToasts(prev => [...prev, { id, message, type }])

        setTimeout(() => {
            setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t))
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== id))
            }, 300)
        }, 3000)
    }, [])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toasts.length > 0 && (
                <div className="toast-container">
                    {toasts.map(t => (
                        <div key={t.id} className={`toast toast-${t.type} ${t.exiting ? 'toast-exit' : ''}`}>
                            {t.message}
                        </div>
                    ))}
                </div>
            )}
        </ToastContext.Provider>
    )
}
