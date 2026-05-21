import { Resend } from 'resend'
import prisma from '@/lib/prisma'

let resend: Resend | null = null
function getResend() {
    if (!resend) {
        resend = new Resend(process.env.RESEND_API_KEY || '')
    }
    return resend
}
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@empulse.embedit.com'

function wrapInTemplate(subject: string, bodyHtml: string): string {
    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">
  <tr><td style="background:#0a0a0a;padding:24px 32px;border-radius:12px 12px 0 0">
    <span style="font-size:1.4rem;font-weight:800;color:#fff">&lt;<span style="color:#00D264">em/</span>pulse&gt;</span>
  </td></tr>
  <tr><td style="background:#ffffff;padding:32px;border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7">
    <h2 style="margin:0 0 16px;color:#18181b;font-size:1.1rem">${subject}</h2>
    ${bodyHtml}
  </td></tr>
  <tr><td style="background:#fafafa;padding:20px 32px;border-radius:0 0 12px 12px;border:1px solid #e4e4e7;border-top:none;text-align:center">
    <p style="margin:0;font-size:0.75rem;color:#a1a1aa">
      Powered by <strong>em/pulse</strong> &mdash; P2P Recognition Platform<br>
      &copy; 2026 EmbedIT. All rights reserved.
    </p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

export async function sendEmail(
    to: string,
    subject: string,
    html: string,
    userId?: number,
    notificationType: string = 'general'
) {
    try {
        // Check user's email notification preference
        if (userId) {
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: { emailNotifications: true },
            })
            if (user && !user.emailNotifications) {
                await prisma.notificationLog.create({
                    data: {
                        userId,
                        notificationType,
                        channel: 'email',
                        subject,
                        contentPreview: html.substring(0, 200),
                        status: 'skipped',
                    },
                })
                return
            }
        }

        const brandedHtml = wrapInTemplate(subject, html)

        await getResend().emails.send({
            from: EMAIL_FROM,
            to,
            subject: `em/pulse — ${subject}`,
            html: brandedHtml,
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
