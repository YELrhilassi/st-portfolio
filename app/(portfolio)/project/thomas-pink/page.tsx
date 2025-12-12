import type { Metadata } from "next";
import { Hero, Process } from "@/components/project/thomas-pink";

export const metadata: Metadata = {
  title: "Thomas Pink Case Study",
  description:
    "End-to-end visual system for Thomas Pink, including research, interaction flows, and final product design.",
  alternates: { canonical: "/project/thomas-pink" },
  openGraph: {
    title: "Thomas Pink Case Study",
    description:
      "Visual system and product design case study led by Sophia Tam for Thomas Pink.",
    url: "/project/thomas-pink",
    images: [
      {
        url: "/home/pink.png",
        width: 1200,
        height: 900,
        alt: "Thomas Pink case study hero artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Pink Case Study",
    description:
      "Visual system and product design work for the Thomas Pink brand.",
    images: ["/home/pink.png"],
  },
};

export default async function ThomasPink({
  searchParams,
}: {
  searchParams: any;
}) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero searchParams={search} />
      
      <Process />
    </div>
  );
}
