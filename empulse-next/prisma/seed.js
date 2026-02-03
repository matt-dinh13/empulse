/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Database Seed Script for EmPulse
 * Run: npx ts-node prisma/seed.ts
 * Or: npm run seed
 */

require('dotenv').config({ path: '.env.local' })

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting seed...')

    // Create Regions
    const vnRegion = await prisma.region.upsert({
        where: { code: 'VN' },
        update: {},
        create: {
            code: 'VN',
            name: 'Vietnam',
            currency: 'VND',
            timezone: 'Asia/Ho_Chi_Minh',
            locale: 'vi-VN',
        },
    })

    await prisma.region.upsert({
        where: { code: 'CZ' },
        update: {},
        create: {
            code: 'CZ',
            name: 'Czech Republic',
            currency: 'CZK',
            timezone: 'Europe/Prague',
            locale: 'cs-CZ',
        },
    })

    console.log('✅ Regions created')

    // Create Teams
    const engineeringTeam = await prisma.team.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Engineering',
            regionId: vnRegion.id,
        },
    })

    const marketingTeam = await prisma.team.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Marketing',
            regionId: vnRegion.id,
        },
    })

    console.log('✅ Teams created')

    // Create System Settings
    await prisma.systemSetting.upsert({
        where: { settingKey: 'quota_per_month' },
        update: {},
        create: {
            settingKey: 'quota_per_month',
            settingValue: '8',
            dataType: 'integer',
            description: 'Monthly voting quota per user',
        },
    })

    await prisma.systemSetting.upsert({
        where: { settingKey: 'points_per_vote' },
        update: {},
        create: {
            settingKey: 'points_per_vote',
            settingValue: '10',
            dataType: 'integer',
            description: 'Points awarded per vote received',
        },
    })

    console.log('✅ System settings created')

    // Hash password
    const passwordHash = await bcrypt.hash('password123', 12)

    // Current period dates
    const now = new Date()
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    const quarter = Math.floor(now.getMonth() / 3)
    const quarterStart = new Date(now.getFullYear(), quarter * 3, 1)
    const quarterEnd = new Date(now.getFullYear(), (quarter + 1) * 3, 0)

    // Create Admin User
    await prisma.user.upsert({
        where: { email: 'admin@empulse.com' },
        update: {},
        create: {
            email: 'admin@empulse.com',
            passwordHash,
            fullName: 'Admin User',
            role: 'super_admin',
            regionId: vnRegion.id,
            teamId: engineeringTeam.id,
            quotaWallet: {
                create: {
                    balance: 8,
                    periodStart,
                    periodEnd,
                },
            },
            rewardWallet: {
                create: {
                    balance: 100,
                    quarterStart,
                    quarterEnd,
                },
            },
        },
    })

    // Create HR Admin User
    await prisma.user.upsert({
        where: { email: 'hr.admin@empulse.com' },
        update: {},
        create: {
            email: 'hr.admin@empulse.com',
            passwordHash,
            fullName: 'HR Admin',
            role: 'hr_admin',
            regionId: vnRegion.id,
            teamId: marketingTeam.id,
            quotaWallet: {
                create: {
                    balance: 8,
                    periodStart,
                    periodEnd,
                },
            },
            rewardWallet: {
                create: {
                    balance: 80,
                    quarterStart,
                    quarterEnd,
                },
            },
        },
    })

    // Create Regular Users
    await prisma.user.upsert({
        where: { email: 'nguyen.van.a@empulse.com' },
        update: {},
        create: {
            email: 'nguyen.van.a@empulse.com',
            passwordHash,
            fullName: 'Nguyen Van A',
            role: 'employee',
            regionId: vnRegion.id,
            teamId: engineeringTeam.id,
            quotaWallet: {
                create: {
                    balance: 8,
                    periodStart,
                    periodEnd,
                },
            },
            rewardWallet: {
                create: {
                    balance: 50,
                    quarterStart,
                    quarterEnd,
                },
            },
        },
    })

    await prisma.user.upsert({
        where: { email: 'tran.thi.b@empulse.com' },
        update: {},
        create: {
            email: 'tran.thi.b@empulse.com',
            passwordHash,
            fullName: 'Tran Thi B',
            role: 'employee',
            regionId: vnRegion.id,
            teamId: marketingTeam.id,
            quotaWallet: {
                create: {
                    balance: 8,
                    periodStart,
                    periodEnd,
                },
            },
            rewardWallet: {
                create: {
                    balance: 30,
                    quarterStart,
                    quarterEnd,
                },
            },
        },
    })

    console.log('✅ Users created')

    // Create Reward Catalog
    await prisma.rewardCatalog.upsert({
        where: { id: 1 },
        update: {},
        create: {
            regionId: vnRegion.id,
            name: 'Grab Voucher 50K',
            description: 'Voucher Grab trị giá 50,000 VND',
            pointsRequired: 50,
            displayValue: '50,000 VND',
            rewardType: 'digital_voucher',
            sortOrder: 1,
        },
    })

    await prisma.rewardCatalog.upsert({
        where: { id: 2 },
        update: {},
        create: {
            regionId: vnRegion.id,
            name: 'Grab Voucher 100K',
            description: 'Voucher Grab trị giá 100,000 VND',
            pointsRequired: 100,
            displayValue: '100,000 VND',
            rewardType: 'digital_voucher',
            sortOrder: 2,
        },
    })

    await prisma.rewardCatalog.upsert({
        where: { id: 3 },
        update: {},
        create: {
            regionId: vnRegion.id,
            name: 'Coffee Shop Voucher',
            description: 'Voucher The Coffee House 100K',
            pointsRequired: 80,
            displayValue: '100,000 VND',
            rewardType: 'digital_voucher',
            sortOrder: 3,
        },
    })

    console.log('✅ Reward catalog created')

    console.log('🎉 Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
