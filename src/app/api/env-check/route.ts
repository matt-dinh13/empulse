import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

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

    return NextResponse.json({
        timestamp: new Date().toISOString(),
        DATABASE_URL: maskUrl(dbUrl),
        DIRECT_URL: maskUrl(directUrl),
        expected: {
            DATABASE_URL: '***@aws-1-ap-south-1.pooler.supabase.com:6543/***',
            DIRECT_URL: '***@db.unxqqidmcjfcvmbzlnav.supabase.co:5432/***'
        }
    })
}
