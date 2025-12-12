import Image from "next/image";

export default function InitialDesignSection() {
  return (
    <div className="relative space-y-5 w-[238] h-full ">
      <div className="border-b">
        <h3 className="py-1.5! font-sans! font-bold text-center uppercase tracking-wider">
          initial design direction
        </h3>
      </div>
      <div className="w-[238] h-[253] relative">
        <Image
          src="/report/section-image1.png"
          alt=""
          fill
          quality={100}
          className=" "
        />
      </div>
    </div>
  );
}
