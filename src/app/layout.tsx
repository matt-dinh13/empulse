import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmPulse - P2P Reward & Recognition System',
  description: 'Employee recognition and reward platform',
  openGraph: {
    images: ['/cover.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
