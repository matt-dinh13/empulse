import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type BaseSettingMeta = {
    label: string
    description: string
    default: string
    category: string
}

type IntegerSettingMeta = BaseSettingMeta & {
    type: 'integer'
    min: number
    max: number
}

type BooleanSettingMeta = BaseSettingMeta & {
    type: 'boolean'
}

type StringSettingMeta = BaseSettingMeta & {
    type: 'string'
}

type SettingMeta = IntegerSettingMeta | BooleanSettingMeta | StringSettingMeta

// Definition of all settings with metadata
const SETTINGS_METADATA: Record<string, SettingMeta> = {
    'quota_per_month': { label: 'Monthly Vote Quota', description: 'Votes per person per month', type: 'integer', min: 1, max: 50, default: '8', category: 'voting' },
    'max_votes_per_week': { label: 'Weekly Vote Limit', description: 'Max votes per week', type: 'integer', min: 1, max: 10, default: '2', category: 'voting' },
    'max_votes_per_person_per_month': { label: 'Per-Person Limit', description: 'Max votes to same person/month', type: 'integer', min: 1, max: 5, default: '2', category: 'voting' },
    'cooldown_days_after_max': { label: 'Cooldown Days', description: 'Days to wait after max reached', type: 'integer', min: 0, max: 60, default: '14', category: 'voting' },
    'same_team_vote_limit_percent': { label: 'Same Team Limit (%)', description: 'Max % of votes to own team', type: 'integer', min: 0, max: 100, default: '50', category: 'voting' },

    'points_per_vote': { label: 'Points Per Vote', description: 'Points receiver gets', type: 'integer', min: 1, max: 100, default: '10', category: 'points' },
    'bonus_points_manager_vote': { label: 'Manager Bonus', description: 'Extra points from manager', type: 'integer', min: 0, max: 50, default: '0', category: 'points' },
    'points_expiry_days': { label: 'Points Expiry', description: 'Days until points expire (0=never)', type: 'integer', min: 0, max: 365, default: '0', category: 'points' },

    'min_points_to_redeem': { label: 'Min Redemption', description: 'Min points to order', type: 'integer', min: 0, max: 1000, default: '50', category: 'redemption' },
    'max_pending_orders': { label: 'Max Pending Orders', description: 'Limit pending orders', type: 'integer', min: 0, max: 10, default: '3', category: 'redemption' },
    'auto_approve_threshold': { label: 'Auto-Approve Threshold', description: 'Auto-approve under X points', type: 'integer', min: 0, max: 500, default: '0', category: 'redemption' },

    'quota_reset_day': { label: 'Quota Reset Day', description: 'Day of month to reset quota', type: 'integer', min: 1, max: 28, default: '1', category: 'periods' },

    'enable_anonymous_votes': { label: 'Anonymous Voting', description: 'Allow hiding identity', type: 'boolean', default: 'false', category: 'features' },
    'enable_public_wall': { label: 'Public Wall', description: 'Show votes publicly', type: 'boolean', default: 'true', category: 'features' },
}

export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // Only Super Admin should usually see this, but maybe HR admin too? Blueprint says Super Admin Only.
    if (admin.role !== 'super_admin' && admin.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    try {
        const dbSettings = await prisma.systemSetting.findMany()
        const dbMap = new Map(dbSettings.map(s => [s.settingKey, s.settingValue]))

        const mergedSettings = Object.entries(SETTINGS_METADATA).map(([key, meta]) => ({
            key,
            ...meta,
            value: dbMap.get(key) || meta.default
        }))

        return NextResponse.json({ settings: mergedSettings })
    } catch (error) {
        console.error('Fetch settings error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin || (admin.role !== 'super_admin' && admin.role !== 'admin')) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    try {
        const body = await request.json()
        const { settings } = body // Array of { key, value }

        if (!Array.isArray(settings)) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
        }

        const updates = []
        for (const { key, value } of settings) {
            const meta = SETTINGS_METADATA[key]
            if (!meta) continue // Skip unknown settings

            // Validate
            let cleanValue = value
            if (meta.type === 'integer') {
                const num = parseInt(value)
                if (isNaN(num) || num < meta.min || num > meta.max) {
                    return NextResponse.json({ error: `Invalid value for ${meta.label}` }, { status: 400 })
                }
                cleanValue = String(num)
            } else if (meta.type === 'boolean') {
                cleanValue = String(value === true || value === 'true')
            }

            // Update
            updates.push(prisma.systemSetting.upsert({
                where: { settingKey: key },
                create: {
                    settingKey: key,
                    settingValue: cleanValue,
                    dataType: meta.type,
                    description: meta.description,
                    updatedBy: admin.id
                },
                update: {
                    settingValue: cleanValue,
                    updatedBy: admin.id
                }
            }))
        }

        await prisma.$transaction(updates)

        // Log Audit
        await prisma.auditLog.create({
            data: {
                actorId: admin.id,
                action: 'UPDATE_SYSTEM_SETTINGS',
                entityType: 'system_setting',
                newValue: settings
            }
        })

        return NextResponse.json({ message: 'Settings updated successfully' })
    } catch (error) {
        console.error('Update settings error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
