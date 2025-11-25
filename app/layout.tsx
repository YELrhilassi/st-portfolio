import type { Metadata } from "next";
import { Varta, Instrument_Serif } from "next/font/google";
import "@/globals.css";

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
      className={`${varta.variable} ${instrument.variable} antialiased`}
    >
      <body className="relative w-lvw h-dvh bg-[#e8e8e8]">{children}</body>
    </html>
  );
}
