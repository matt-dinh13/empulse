import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmPulse - P2P Reward & Recognition System',
  description: 'Employee recognition and reward platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
