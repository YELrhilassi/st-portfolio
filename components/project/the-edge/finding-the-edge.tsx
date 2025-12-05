import Image from "next/image";

export function FindingTheEdge() {
  return (
    <>
      <div className="flex justify-between items-baseline gap-4 mt-20 ">
        <span className="w-fit text-2xl font-medium uppercase tracking-wider">
          finding the edge
        </span>
        <span className="flex-1 border-b-3" />
      </div>
      <div className="grid grid-cols-12 grid-rows-[repeat(2,auto)] mt-5">
        <div className="col-start-1 col-end-5 bg-gray-100 bg-[url(/paper_fibers.png)] mask-[url(/the-edge/bg-mask.svg)] mask-right bg-blend-multiply">
          <div className="flex flex-col w-full py-12 px-12">
            <p className="text-lg leading-6 pr-14">
              The team and I started the brand development process by defining
              the Edge as these key attributes: Empowered, Unique, Confident,
              Guided Journey, and Visionary. Initially, the blue-coloured glow
              was highly considered to represent the tech nature of the content.
              However, guided by the above attributes, the newsletter branding
              eventually settled with using AD's branded black and white tone.
              Not only does it express Apply's expertise, the minimum colouring
              also gives more design freedom to the highlighted content to
              shine.
            </p>
            <div>
              <Image
                src="/the-edge/image2.png"
                alt=""
                width={220}
                height={370}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-start-5 col-span-full content-center pl-10">
          <Image
            src="/the-edge/image3.png"
            alt=""
            width={890}
            height={811}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
