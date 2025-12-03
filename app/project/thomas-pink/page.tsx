import Hero from "@/components/project/hero";
import Image from "next/image";

//
//
//

export default async function ThomasPink({
  searchParams,
}: {
  searchParams: any;
}) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero searchParams={search} />
      <div className="flex justify-between items-baseline gap-4 mt-20 ">
        <span className="text-2xl font-bold uppercase tracking-wider">
          process
        </span>
        <span className="w-full h-full border-b-3" />
      </div>
      <div className="grid grid-cols-12 border">
        <div className="col-start-2 col-end-6 space-y-5 pt-10">
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
        </div>
        <div className="border-red-600 border col-start-7 col-span-full relative">
          <Image src="/home/pink.png" fill alt="" />
        </div>
      </div>
    </div>
  );
}
