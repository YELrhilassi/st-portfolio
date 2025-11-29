import GridWrapper from "@/components/layout/grid-wrapper";
import Image from "next/image";

export default async function Home() {
  return (
    <GridWrapper className="gap-4 mt-15">
      <figure className="col-start-3 col-span-2 relative w-full pt-4 border-t-2">
        <div className="relative border">
          <Image
            className="w-full h-full object-cover"
            src="/home/thomas-pink.png"
            alt="thomas-pink"
            width={423}
            height={551}
          />
          <span className="absolute top-8 left-6 max-w-24 text-white uppercase ">
            visualizing ecommerce experience
          </span>
        </div>
        <figcaption className="pt-4">
          <h2 className="flex justify-between gap-4 text-[40px] leading-12 uppercase">
            <span className="flex-1 text-8xl">01</span>
            <span className="flex-1">Thomas pink Case study</span>
          </h2>
        </figcaption>
      </figure>
      <div className="col-span-2 relative flex flex-col w-full pt-4 divide-y border-t-2">
        <figure className="flex flex-row-reverse justify-between w-full pb-4">
          <div className="h-[260] w-[196] border">
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
              <span className="text-[30px] leading-9">the edge newsletter</span>
            </h2>
            <span className="font-bold text-gray-500 uppercase">
              a Branding campaign
            </span>
          </figcaption>
        </figure>
        <figure className="w-full h-full">
          <div className="h-full "></div>
          <figcaption></figcaption>
        </figure>
      </div>
    </GridWrapper>
  );
}
