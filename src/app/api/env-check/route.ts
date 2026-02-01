import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
    const dbUrl = process.env.DATABASE_URL || 'NOT SET'
    const directUrl = process.env.DIRECT_URL || 'NOT SET'

    // Show partial URL for security (hide password)
    const maskUrl = (url: string) => {
        if (url === 'NOT SET') return url
        try {
            // Extract host and port only
            const match = url.match(/@([^:]+):(\d+)/)
            if (match) {
                return `***@${match[1]}:${match[2]}/***`
            }
            return 'INVALID FORMAT'
        } catch {
            return 'PARSE ERROR'
        }
    }

    const hasPgBouncer = dbUrl.includes('pgbouncer=true')

    return NextResponse.json({
        timestamp: new Date().toISOString(),
        DATABASE_URL: maskUrl(dbUrl),
        DIRECT_URL: maskUrl(directUrl),
        config: {
            hasPgBouncerParam: hasPgBouncer,
            isSupabasePooler: dbUrl.includes('pooler.supabase.com'),
            nodeEnv: process.env.NODE_ENV
        },
        recommendation: !hasPgBouncer && dbUrl.includes('pooler.supabase.com')
            ? 'WARNING: Supabase Transaction Pooler requires ?pgbouncer=true appended to DATABASE_URL'
            : 'Config looks OK'
    })
}
