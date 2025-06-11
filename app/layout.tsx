import "@/app/globals.css"
import { Inter, Instrument_Serif,Varta } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
})

const varta = Varta({
  subsets: ['latin'],
  variable:"--font-varta"
})
  
export const metadata = {
  title: "Portfolio | Sophia Tam",
  description: "Portfolio website showcasing artwork and projects",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${varta.variable} bg-paper h-full`}
      >
          <Navbar />
          <main className="flex flex-col min-h-[calc(100vh-19vh)]">{children}</main>
          <Footer />
      </body>
    </html>
  )
}

