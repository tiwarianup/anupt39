import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anup Tiwari | AI & Software Development Consultant',
  description: 'Experienced software developer and generative AI engineer specializing in end-to-end Gen AI applications using Django and Azure. Book a consultation today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark text-dark dark:text-light`}>
        {children}
      </body>
    </html>
  )
} 