import "@/app/globals.css"
import { Inter, Instrument_Serif, Varta } from "next/font/google"
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
  variable: "--font-varta"
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
        <div className="flex flex-col min-h-[103vh] w-full max-w-[min(90vw,2000px)] mx-auto ">
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
