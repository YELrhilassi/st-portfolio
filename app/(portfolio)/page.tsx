import GridWrapper from "@/components/layout/grid-wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <GridWrapper className="grid-cols-12 h-full gap-4 mt-15">
      <div className="col-span-3 pt-4 border-t">
        <div className="relative w-full h-[256]">
          <Image
            className="w-full object-cover"
            src="/home/illustrator-corner.png"
            alt="illustartor corner"
            height={256}
            width={308}
          />
        </div>
        <div className="pt-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl uppercase">the Illustrator corner</h2>
            <span className="font-bold text-gray-500 tracking-wider uppercase">
              paintings | commissions
            </span>
          </div>
          <div className="pt-4">
            <p className="max-h-64 overflow-hidden text-lg text-ellipsis line-clamp-9">
              In October 2025, I am commissioned to be the Event Illustrator of
              the social cake event hosted by the Josh & Cynthia, aka the
              Vancouver Cookbook Club. This on-site commission was an exciting
              learning experience where I practiced simultaneously managing my
              time and engaging with event attendees. I am asked to deliver one
              painting that captures the cakes, plus four personalized painting
              postcards as
            </p>
            <div className="group flex gap-4 font-bold mt-3 w-fit hover:cursor-pointer">
              <span className="capitalize">continue reading</span>
              <ArrowRight className="w-5  group-hover:translate-x-2 transition-all ease-in-out" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-4 col-span-9 grid grid-cols-subgrid gap-10 pt-4 border-t">
        <div className="col-span-5">
          <Link href="/project/thomas-pink">
            <figure className="w-full h-full">
              <div className="relative w-[534] h-[551]">
                <Image
                  className=" h-full w-full object-cover"
                  src="/home/pink.png"
                  alt="thomas-pink"
                  width={534}
                  height={551}
                />
              </div>
              <figcaption className="pt-4 w-full">
                <h2 className="flex justify-between uppercase ">
                  <span className=" flex-1 text-8xl">01</span>
                  <span className="flex-1 text-5xl leading-12">
                    Thomas pink Case study
                  </span>
                </h2>
              </figcaption>
            </figure>
          </Link>
        </div>
        <div className="col-span-4 relative flex flex-col w-full divide-y">
          <Link href="/project/the-edge">
            <figure className="flex flex-row-reverse justify-between w-full pb-4">
              <div className="h-full w-[196]">
                <Image
                  src="/home/the-edge.png"
                  alt="the edge newsletter"
                  width={196}
                  height={260}
                />
              </div>
              <figcaption className="flex-2 flex flex-col justify-between">
                <h2 className="flex flex-col justify-between h-full mb-4 uppercase">
                  <span className="text-7xl">02</span>
                  <span className="text-[30px] leading-9">
                    the edge newsletter
                  </span>
                </h2>
                <span className="font-bold text-gray-500 tracking-wider uppercase">
                  a Branding campaign
                </span>
              </figcaption>
            </figure>
          </Link>

          <div className=" w-full h-full pt-4">
            <Link href="#">
              <figure className="h-full flex flex-col justify-around">
                <figcaption className="h-fit flex items-start gap-5">
                  <span className="text-7xl leading-16 font-serif">03</span>
                  <h2 className="flex flex-col gap-1 uppercase">
                    <span className="text-[30px] leading-9">
                      Personalization Report
                    </span>
                    <span className="max-w-[80%] font-sans font-bold text-gray-500 leading-5 tracking-wider uppercase">
                      AI | Data | and the Future of Customer Experience
                    </span>
                  </h2>
                </figcaption>
                <div className="w-full">
                  <Image
                    src="/home/report.png"
                    alt="report"
                    width={420}
                    height={106}
                  />
                </div>
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </GridWrapper>
  );
}
