import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'AVLOK AI - Automate Smart. Scale Fast.',
  description: 'AI Automations & Consulting for Modern Businesses. Transform your workflow with intelligent automation solutions.',
  keywords: 'AI automation, business consulting, workflow optimization, AI agents, process automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} lenis lenis-smooth`}>
      <body className="bg-avlok-bg text-avlok-text antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
