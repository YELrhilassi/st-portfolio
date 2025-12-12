import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sophia Tam, a Vancouver-based product designer and illustrator focused on brand storytelling, visual systems, and collaborative creative work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sophia Tam",
    description:
      "Product designer and illustrator with a passion for brand storytelling and collaborative design.",
    url: "/about",
    images: [
      {
        url: "/home/illustrator-corner.png",
        width: 1200,
        height: 900,
        alt: "Portrait illustration and collage of Sophia Tam's work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sophia Tam",
    description:
      "Product designer and illustrator focused on brand storytelling and visual systems.",
    images: ["/home/illustrator-corner.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
