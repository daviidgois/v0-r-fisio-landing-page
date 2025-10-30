import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.FISIO - Fisioterapia e Osteopatia",
  description: "Serviços profissionais de fisioterapia, osteopatia e exercício clínico",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  robots: "noimageindex, noarchive, nosnippet",
  openGraph: {
    type: "website",
    url: "https://rfisio.com",
    title: "",
    description: "",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "",
    description: "",
    images: [],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
