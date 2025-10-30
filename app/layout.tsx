import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.FISIO - Fisioterapia e Osteopatia",
  description: "Serviços profissionais de fisioterapia, osteopatia e exercício clínico",
  generator: "v0.app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <GoogleTagManager gtmId="GTM-N82Q7QRC" />
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
