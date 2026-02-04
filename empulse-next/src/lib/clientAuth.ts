export function getAccessToken(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('accessToken')
}

export function buildAuthHeaders(): Record<string, string> | null {
    const token = getAccessToken()
    if (!token) return null
    return { Authorization: `Bearer ${token}` }
}

export function clearAuthStorage() {
    if (typeof window === 'undefined') return
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
}

export function redirectToLogin() {
    if (typeof window === 'undefined') return
    window.location.href = '/login'
}

export function handleUnauthorized() {
    clearAuthStorage()
    redirectToLogin()
}
