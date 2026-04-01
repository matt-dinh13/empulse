import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Temporary one-time API to seed the manager demo user.
 * Call: GET /api/seed-manager
 * Remove this file after successful seeding.
 */
export async function GET() {
    try {
        const passwordHash = await bcrypt.hash('password123', 12)

        const now = new Date()
        const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
        const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)
        const quarter = Math.floor(now.getMonth() / 3)
        const quarterStart = new Date(now.getFullYear(), quarter * 3, 1)
        const quarterEnd = new Date(now.getFullYear(), (quarter + 1) * 3, 0)

        // Find team and region
        let team = await prisma.team.findFirst({ where: { name: 'Engineering' } })
        if (!team) team = await prisma.team.findFirst()
        if (!team) {
            return NextResponse.json({ error: 'No teams found. Run full seed first.' }, { status: 400 })
        }

        let region = await prisma.region.findFirst({ where: { code: 'VN' } })
        if (!region) region = await prisma.region.findFirst()
        if (!region) {
            return NextResponse.json({ error: 'No regions found. Run full seed first.' }, { status: 400 })
        }

        // Create/update Manager user
        const managerUser = await prisma.user.upsert({
            where: { email: 'petra.novak@empulse.com' },
            update: {
                passwordHash,
                fullName: 'Petra Novak',
                isActive: true,
            },
            create: {
                email: 'petra.novak@empulse.com',
                passwordHash,
                fullName: 'Petra Novak',
                role: 'employee',
                regionId: region.id,
                teamId: team.id,
                quotaWallet: {
                    create: { balance: 8, periodStart, periodEnd },
                },
                rewardWallet: {
                    create: { balance: 60, quarterStart, quarterEnd },
                },
            },
        })

        // Link existing employees as subordinates
        const results: string[] = [`Manager: ${managerUser.email} (id: ${managerUser.id})`]

        const nguyen = await prisma.user.findUnique({ where: { email: 'nguyen.van.a@empulse.com' } })
        if (nguyen) {
            await prisma.user.update({ where: { id: nguyen.id }, data: { managerId: managerUser.id } })
            results.push(`Linked ${nguyen.email} -> manager`)
        }

        const tran = await prisma.user.findUnique({ where: { email: 'tran.thi.b@empulse.com' } })
        if (tran) {
            await prisma.user.update({ where: { id: tran.id }, data: { managerId: managerUser.id } })
            results.push(`Linked ${tran.email} -> manager`)
        }

        // Also ensure nguyen.van.a has correct password
        if (nguyen) {
            await prisma.user.update({ where: { id: nguyen.id }, data: { passwordHash, isActive: true } })
            results.push(`Updated password for ${nguyen.email}`)
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Manager demo user seeded successfully',
            results 
        })
    } catch (error) {
        console.error('Seed manager error:', error)
        return NextResponse.json({ error: 'Failed to seed manager user', details: String(error) }, { status: 500 })
    }
}
