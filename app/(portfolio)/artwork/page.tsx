import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Artwork Gallery",
  description:
    "Illustration and painting highlights from Sophia Tam, including event commissions and personal works.",
  alternates: { canonical: "/artwork" },
  openGraph: {
    title: "Artwork Gallery",
    description:
      "Explore illustration and painting highlights by Sophia Tam.",
    url: "/artwork",
    images: [
      {
        url: "/artwork/artwork1.png",
        width: 1200,
        height: 900,
        alt: "Collage of Sophia Tam illustration work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artwork Gallery",
    description:
      "Illustrations and paintings by Sophia Tam, including event commissions and personal pieces.",
    images: ["/artwork/artwork1.png"],
  },
};

export default function Artwork() {
  return (
    <div className="">
      <div className="mt-20 mb-10">
        <h1 className="text-center font-serif text-6xl">ARTWORK</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div className="relative w-full">
            <Image
              src="/artwork/artwork1.png"
              alt="Abstract illustration with warm palette"
              width={420}
              height={265}
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/artwork/artwork2.png"
              alt="Detailed portrait-style illustration"
              width={420}
              height={562}
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/artwork/artwork3.png"
              alt="Event illustration depicting cake celebration"
              width={420}
              height={265}
            />
          </div>
        </div>
        <div className="grid gap-4">
            <div className="relative w-full">
            <Image
              src="/artwork/artwork2-1.png"
              alt="Monochrome portrait illustration"
              width={420}
              height={562}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/artwork/artwork2-2.png"
              alt="Surreal illustration with intricate patterns"
              width={420}
              height={562}
            />
          </div>
          
        </div>
        <div className="grid gap-4">
           <div className="relative">
            <Image
              src="/artwork/artwork3-1.png"
              alt="Colorful abstract portrait artwork"
              width={420}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/artwork/artwork3-2.png"
              alt="Illustration focused on floral patterns"
              width={420}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/artwork/artwork3-3.png"
              alt="Painting postcard created for an event"
              width={420}
              height={265}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
