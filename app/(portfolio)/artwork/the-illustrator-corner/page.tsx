import type { Metadata } from "next";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Illustrator Corner",
  description:
    "Event illustration commission for Vancouver Cookbook Club, featuring live paintings and postcard giveaways.",
  alternates: { canonical: "/artwork/the-illustrator-corner" },
  openGraph: {
    title: "The Illustrator Corner",
    description:
      "Live event illustration for Vancouver Cookbook Club by Sophia Tam.",
    url: "/artwork/the-illustrator-corner",
    images: [
      {
        url: "/corner/image1.png",
        width: 1200,
        height: 900,
        alt: "Event illustration collage from The Illustrator Corner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Illustrator Corner",
    description:
      "Live event illustration commission by Sophia Tam for Vancouver Cookbook Club.",
    images: ["/corner/image1.png"],
  },
};

export default function IllustratorCorner() {
  return (
    <div className="grid grid-cols-[repeat(2,auto)] mt-20 text-lg">
      <div className="grid grid-cols-4 gap-10">
        <div className="col-start-1 col-end-4  pb-10 border-b">
          <h1 className="text-7xl tracking-tight uppercase">
            the Illustrator corner
          </h1>
          <div className="flex gap-4 w-full divide-x-2 mt-8">
            <span className="pr-4 font-bold text-md tracking-wider uppercase">
              artwork
            </span>
            <span className="pr-4 font-bold text-md tracking-wider uppercase">
              event illustration
            </span>
          </div>
        </div>
        <aside className="-col-start-1 -col-end-2 row-start-1 row-span-4 flex flex-col gap-2 items-center p-8 w-full bg-gray-500/20">
          <span className="uppercase font-semibold text-[16px] tracking-wider">
            other artwork
          </span>
          <div className=" h-full w-full grid gap-8">
            <Link href="/artwork" className="relative">
              <Image
                src="/artwork/artwork2-1.png"
                alt="Portrait illustration thumbnail"
                fill
                className="object-cover"
              />
            </Link>
            <Link href="/artwork" className="relative">
              <Image
                src="/artwork/artwork3-1.png"
                alt="Colorful abstract portrait thumbnail"
                fill
                className="object-cover"
              />
            </Link>
            <Link href="/artwork" className="relative">
              <Image
                src="/artwork/artwork1.png"
                alt="Illustration collage thumbnail"
                fill
                className="object-cover"
              />
            </Link>
            <Link href="/artwork" className="relative">
              <Image
                src="/artwork/artwork3-3.png"
                alt="Painting postcard thumbnail"
                fill
                className="object-cover"
              />
            </Link>
          </div>
          <div className="flex items-center justify-end w-full pt-4 mt-4 border-t ">
            <Link href="/artwork">
              <MoveRight className="w-20 h-10 p-0 m-0 " />
            </Link>
          </div>
        </aside>
        <div className=" col-span-3 grid grid-cols-2 gap-8">
          <figure className="relative col-span-full h-full">
            <Image
              src="/corner/image1.png"
              alt="Event illustration capturing dessert table and guests"
              width={869}
              height={459}
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="space-y-4">
            <figure>
              <Image
                src="/corner/image2.png"
                alt="Sophia Tam illustrating at the Vancouver Cookbook Club event"
                width={417}
                height={388}
                className="w-full"
              />
              <figcaption className="space-x-1 mt-1 text-sm">
                <span>Picture captured by</span>
                <Link
                  className="underline"
                  href="https://www.joshandcynthia.ca/event-gallery/october---cake-garden-2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vancouver Cookbook Club
                </Link>
              </figcaption>
            </figure>
            <p>
              In October 2025, I am comissioned to be the Event Illustrator of
              the social cake event hosted by the Josh & Cynthia, aka the
              Vancouver Cookbook Club. This on-site commission was an exciting
              learning experience where I practiced simultaneously managing my
              time and engaging with event attendees. I am asked to deliver one
              painting that captures the cakes, plus four personalized painting
              postcards as memorable prizes for event winners.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Fortunately, the paintings are well received by the crowds. It
              also became a natural ice breaker to start interacting with the
              attendees, exchanging creative ideas on cakes and artwork. I was
              also very honoured to paint for the event's special guest:{" "}
              <Link
                href="https://www.instagram.com/tessahuffbooks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Tessa Huff, </b>
              </Link>{" "}
              a social media personality who specializes in baking. The
              commission was a resounding success that allowed me to merge my
              artistic skills with invaluable networking, making it a truly
              rewarding debut.
            </p>
            <figure>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="col-span-full">
                  <Image
                    src="/corner/image3.png"
                    alt="Event attendee receiving illustrated postcard"
                    width={420}
                    height={246}
                    className="w-full"
                  />
                </div>
                <div className="col-span-full flex justify-between gap-3 h-[153]">
                  <Image
                    src="/corner/image4.png"
                    alt="Painting postcard featuring cake illustration"
                    width={131}
                    height={153}
                    className="w-full h-full object-cover"
                  />
                  <Image
                    src="/corner/image5.png"
                    alt="Painting postcard with floral motif"
                    width={131}
                    height={153}
                    className="w-full h-full object-cover"
                  />
                  <Image
                    src="/corner/image6.png"
                    alt="Painting postcard gifted to event guest"
                    width={131}
                    height={153}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <figcaption className="space-x-1 mt-1 text-sm">
                <span>Photo gallery of</span>
                <Link
                  className="underline"
                  href="https://www.instagram.com/tessahuffbooks/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tessa Huff,
                </Link>
                <span>
                  special guest of the event, and the 3 painting postcards
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
