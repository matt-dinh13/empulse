import { Resend } from 'resend'
import prisma from '@/lib/prisma'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@empulse.embedit.com'

export async function sendEmail(
    to: string,
    subject: string,
    html: string,
    userId?: number,
    notificationType: string = 'general'
) {
    try {
        await resend.emails.send({
            from: EMAIL_FROM,
            to,
            subject,
            html,
        })

        await prisma.notificationLog.create({
            data: {
                userId,
                notificationType,
                channel: 'email',
                subject,
                contentPreview: html.substring(0, 200),
                status: 'sent',
                sentAt: new Date(),
            },
        })
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'

        await prisma.notificationLog.create({
            data: {
                userId,
                notificationType,
                channel: 'email',
                subject,
                contentPreview: html.substring(0, 200),
                status: 'failed',
                errorMessage: errorMsg,
            },
        })
    }
}
