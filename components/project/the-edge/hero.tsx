import Image from "next/image";

export function Hero() {
  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(2,auto)] mt-20">
      <div className="col-start-1 row-span-1 flex flex-col divide-y-2 ">
        <h1 className="text-8xl pb-15! uppercase">
          The <br /> edge
        </h1>
        <div className="flex gap-4 divide-x-2 mt-8">
          <span className=" pr-4 font-bold text-lg tracking-wider uppercase">
            newsletter
          </span>
          <span className=" pr-4 font-bold text-lg tracking-wider uppercase">
            Branding campaign
          </span>
        </div>
      </div>
      <div className="relative col-start-2 col-span-2 row-span-full pl-28">
        <Image
          src="/the-edge/image1.png"
          alt=""
          width={760}
          height={531}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="">
        <p className="text-lg pt-6 leading-6">
          The Edge is a monthly newsletter that offers the latest updates, news
          and thought leadership from Apply Digital (AD). While the Edge as a
          sub-brand to AD should maintain the parent branding’s aesthetics, its
          independent identity is important to differentiate themselves from its
          competitors. With a strong, visually striking design, it expanded
          Apply Digital's exposure and positions the company as an expert of the
          tech field.
        </p>
      </div>
    </div>
  );
}
