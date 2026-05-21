/**
 * Add Manager Demo User to Production DB
 * Run: node scripts/add-manager-user.js
 * 
 * Requires DATABASE_URL in .env.local or as environment variable.
 * Usage with inline env: DATABASE_URL="postgresql://..." node scripts/add-manager-user.js
 */

require('dotenv').config({ path: '.env.local' })

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    console.log('🔧 Adding manager demo user...')

    const passwordHash = await bcrypt.hash('password123', 12)

    // Current period dates
    const now = new Date()
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    const quarter = Math.floor(now.getMonth() / 3)
    const quarterStart = new Date(now.getFullYear(), quarter * 3, 1)
    const quarterEnd = new Date(now.getFullYear(), (quarter + 1) * 3, 0)

    // Find Engineering team (fallback to first team)
    let team = await prisma.team.findFirst({ where: { name: 'Engineering' } })
    if (!team) team = await prisma.team.findFirst()
    if (!team) {
        console.error('❌ No teams found. Run full seed first.')
        process.exit(1)
    }

    // Find VN region (fallback to first region)
    let region = await prisma.region.findFirst({ where: { code: 'VN' } })
    if (!region) region = await prisma.region.findFirst()
    if (!region) {
        console.error('❌ No regions found. Run full seed first.')
        process.exit(1)
    }

    // Create or update Manager user
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
                create: {
                    balance: 8,
                    periodStart,
                    periodEnd,
                },
            },
            rewardWallet: {
                create: {
                    balance: 60,
                    quarterStart,
                    quarterEnd,
                },
            },
        },
    })
    console.log(`✅ Manager user created/updated: ${managerUser.email} (id: ${managerUser.id})`)

    // Link existing employees as subordinates
    const nguyen = await prisma.user.findUnique({ where: { email: 'nguyen.van.a@empulse.com' } })
    if (nguyen) {
        await prisma.user.update({
            where: { id: nguyen.id },
            data: { managerId: managerUser.id },
        })
        console.log(`✅ Linked ${nguyen.email} -> manager ${managerUser.email}`)
    }

    const tran = await prisma.user.findUnique({ where: { email: 'tran.thi.b@empulse.com' } })
    if (tran) {
        await prisma.user.update({
            where: { id: tran.id },
            data: { managerId: managerUser.id },
        })
        console.log(`✅ Linked ${tran.email} -> manager ${managerUser.email}`)
    }

    console.log('🎉 Manager demo user setup complete!')
}

main()
    .catch((e) => {
        console.error('❌ Failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
