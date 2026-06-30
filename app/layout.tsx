import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import GsapAnimations from '@/components/GsapAnimations'

export const metadata: Metadata = {
  title: 'ArcticOrvex Technologies — We Build and Teach Robust Infrastructure',
  description:
    'Production-grade AWS deployment, enterprise Linux administration, and IT consultancy that keeps systems online. Registered MSME, Ministry of MSME, Government of India.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&f[]=satoshi@700,500,400&f[]=jetbrains-mono@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <GsapAnimations />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
