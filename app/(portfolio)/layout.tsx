import type { Metadata } from "next";
import localFont from "next/font/local"
import { Varta, Instrument_Serif, EB_Garamond } from "next/font/google";
import "@/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const varta = Varta({
  subsets: ["latin"],
  variable: "--font-varta",
});

const instrument = localFont({
  src:[
    {path:'./font/instrument/regular.ttf', weight:"400"}
  ],
  variable:'--font-instrument'
})


const ui = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: {
    default: "Sophia Tam · Product Designer & Illustrator",
    template: "%s | Sophia Tam · Product Designer & Illustrator",
  },
  description:
    "Portfolio of Sophia Tam, a Vancouver-based product designer and illustrator crafting brand experiences, editorial design, and storytelling visuals.",
  keywords: [
    "Sophia Tam",
    "product design",
    "visual designer",
    "illustration",
    "branding",
    "creative direction",
    "portfolio",
    "Vancouver designer",
  ],
  authors: [{ name: "Sophia Tam" }],
  creator: "Sophia Tam",
  publisher: "Sophia Tam",
  openGraph: {
    title: "Sophia Tam · Product Designer & Illustrator",
    description:
      "Browse product design case studies, branding campaigns, and illustration work by Sophia Tam.",
    type: "website",
    url: "/",
    siteName: "Sophia Tam Portfolio",
    images: [
      {
        url: "/home/illustrator-corner.png",
        width: 1200,
        height: 630,
        alt: "Collage of Sophia Tam design and illustration work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophia Tam · Product Designer & Illustrator",
    description:
      "Product design, branding, and illustration portfolio by Sophia Tam.",
    images: ["/home/illustrator-corner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

const now = new Date();
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${varta.variable} ${instrument.variable} ${ui.variable} antialiased`}
    >
      <head>
        <meta
          name="viewport"
          content="width=1400, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>

      <body className="text-primary max-w-7xl mx-auto h-full w-[1420px]">
        <Header date={now} className="mt-8 min-h-20" />
        <main className="relative mt-6 h-full mb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
