import type { Metadata } from "next";
import { Hero, FindingTheEdge } from "@/components/project/the-edge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Edge Newsletter Campaign",
  description:
    "Branding and visual system for The Edge newsletter, expanding into CTA design and ABM ads.",
  alternates: { canonical: "/project/the-edge" },
  openGraph: {
    title: "The Edge Newsletter Campaign",
    description:
      "Branding system for The Edge newsletter with CTA and ABM asset design.",
    url: "/project/the-edge",
    images: [
      {
        url: "/the-edge/image4.png",
        width: 1200,
        height: 900,
        alt: "The Edge campaign visuals with glowing gradients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Edge Newsletter Campaign",
    description:
      "Branding, CTA, and ABM design work for The Edge newsletter campaign.",
    images: ["/the-edge/image4.png"],
  },
};

export default async function TheEdge({
  searchParams,
}: {
  searchParams: any;
}) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero />
      <FindingTheEdge />
      <>
        <div className="flex justify-between items-baseline gap-4 mt-20 ">
          <span className="w-fit text-2xl font-medium uppercase tracking-wider">
            Over the Edge & beyond
          </span>
          <span className="flex-1 h-full border-b-3" />
        </div>
        <div className="grid grid-cols-12  py-8">
          <div className="col-start-1 col-end-6 space-y-5 pt-10 pl-20 pr-8 text-lg leading-6">
            <p>
              Beyond the newsletter, the campaign extended the branding to the
              website call-to-action (CTA) and a set of Account-Based Marketing
              (ABM) ads.
            </p>

            <p>
              To attract attention and connect with new audiences, the assets
              utilized a range of blue colors designed to contrast effectively
              with both light and dark backgrounds. Complementing different
              taglines and messages, I used various design concepts: some
              featured dramatic glowing light effects, while others had a human
              touch to represent the users.
            </p>
            <p>
              This effort was highly collaborative—involving brainstorming with
              the Email Specialist, adjusting messages with copywriters, and
              tweaking designs based on feedback from the campaign coordinator.
              This teamwork eventually paid off, resulting in positive growth
              for the campaign.
            </p>
          </div>
          <div className="relative col-start-6 col-span-full row-start-1 justify-self-end content-end">
            <Image
              src="/the-edge/image4.png"
              width={584}
              height={560}
              alt="The Edge campaign visuals showing CTA and ABM creative"
              className="object-fill"
            />
          </div>
         
        </div>
      </>
    </div>
  );
}
