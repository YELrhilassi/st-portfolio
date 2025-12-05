import type { Metadata } from "next";
import { Varta, Instrument_Serif, EB_Garamond } from "next/font/google";
import "@/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const varta = Varta({
  subsets: ["latin"],
  variable: "--font-varta",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const ui = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: "Sophia's portfolio",
  description: "Welcome to my portfolio",
};

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
        <main className="relative mt-6 h-full mb-40">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

