import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Inter } from 'next/font/google'
import './globals.css'

import "@maptiler/sdk/dist/maptiler-sdk.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelBuddyAI',
  description: 'Traveling somewhere for vacation? Well we have got you cleared.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
