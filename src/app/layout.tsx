import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scrabble Scorer',
  description: 'A website that will assist in scoring Scrabble games.',
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
