// User data is stored in localStorage for display purposes only.
// Auth tokens are handled via httpOnly cookies (automatic with fetch).

export function getStoredUser(): { id: number; email: string; fullName: string; role: string } | null {
    if (typeof window === 'undefined') return null
    const userStr = localStorage.getItem('user')
    if (!userStr) return null
    try {
        return JSON.parse(userStr)
    } catch {
        return null
    }
}

export function setStoredUser(user: { id: number; email: string; fullName: string; role: string }) {
    if (typeof window === 'undefined') return
    localStorage.setItem('user', JSON.stringify(user))
}

export function clearAuthStorage() {
    if (typeof window === 'undefined') return
    localStorage.removeItem('user')
}

export function redirectToLogin() {
    if (typeof window === 'undefined') return
    window.location.href = '/login'
}

export async function handleUnauthorized() {
    clearAuthStorage()
    // Clear server-side cookies
    try {
        await fetch('/api/auth/logout', { method: 'POST' })
    } catch {
        // Ignore - redirect will happen anyway
    }
    redirectToLogin()
}
