import { PeelButton } from "@/components/ui";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export function Process() {
  return (
    <>
      <div className="flex justify-between items-baseline gap-4 mt-20 ">
        <span className="w-fit text-2xl font-medium uppercase tracking-wider">
          process
        </span>
        <span className="flex-1 h-full border-b-3" />
      </div>
      <div className="grid grid-cols-12 grid-rows-[repeat(6,auto)] py-8">
        <div className="col-start-1 col-end-6 row-start-1 row-end-3 space-y-5 pt-10 pl-20 pr-8 text-lg leading-6">
          <p>
            Thomas Pink has well established themselves as a luxurious,
            high-quality fashion brand. As the main designer of this case study,
            my work has to reflect and emphasize those qualities by using their
            signature icons, colours and photography. I took references from
            different high fashion editorial images, while learning how other
            eCommerce sites feature their products in an appealing, innovative
            layout. Hence, I can effectively represent Thomas Pink’s platform
            can bridge between digital and physical shopping experiences.
          </p>

          <p>
            The assets demonstrated how the new UX, strategy, and technology
            capabilities enhance the in-store and online shopping experience. I
            combined elements of the digital platform with their real-life
            products to illustrate this omnichannel connection. For instance, I
            emulated key elements from the checkout page and integrated them
            with a brand product model and shirt measurements to tell the story
            of product detail and purchase confirmation in a single, powerful
            visual.
          </p>
          <PeelButton
            href="https://www.applydigital.com/work/thomas-pink/"
            className="w-[200] h-[50] hover:cursor-pointer mt-10"
          >
            <div
              className="flex items-center justify-center gap-3 h-full w-full
          capitalize underline font-bold
          bg-[#C9C9C9] mask-[url(/ui/bg-clip1.svg)] mask-no-repeat mask-cover
          "
            >
              <span>Full case study</span>
              <span className="w-4 h-4">
                <SquareArrowOutUpRight className="w-full h-full p-0 m-0" />
              </span>
            </div>
          </PeelButton>
        </div>
        <div className="relative col-start-6 col-span-full row-start-1 row-end-2 h-[380] ml-20">
          <Image
            src="/thomas-pink/thomas.png"
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className=" relative col-start-5 col-span-full row-start-2 h-[445] w-[800] ml-auto mt-10 ">
          <Image
            src="/thomas-pink/collage.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
