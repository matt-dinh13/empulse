const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

export async function postToSlack(text: string) {
    if (!SLACK_WEBHOOK_URL) return

    try {
        await fetch(SLACK_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        })
    } catch (err) {
        console.error('Slack webhook error:', err)
    }
}
