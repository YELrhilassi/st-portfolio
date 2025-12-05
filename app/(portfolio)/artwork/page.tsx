import Image from "next/image";

export default function Artwork() {
  return (
    <div className="">
      <div className="mt-20 mb-10">
        <h1 className="text-center font-serif text-6xl">ARTWORK</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div className="relative w-full">
            <Image src="/artwork/artwork1.png" alt="" width={420} height={265} />
          </div>
          <div className="relative w-full">
            <Image src="/artwork/artwork2.png" alt="" width={420} height={562} />
          </div>
          <div className="relative w-full">
            <Image src="/artwork/artwork3.png" alt="" width={420} height={265} />
          </div>
        </div>
        <div className="grid gap-4">
            <div className="relative w-full">
            <Image src="/artwork/artwork2-1.png" alt="" width={420} height={562} className="w-full h-full object-cover" />
          </div>
          <div className="relative w-full">
            <Image src="/artwork/artwork2-2.png" alt="" width={420} height={562} />
          </div>
          
        </div>
        <div className="grid gap-4">
           <div className="relative">
            <Image src="/artwork/artwork3-1.png" alt="" width={420} height={420} className="w-full h-auto object-cover" />
          </div>
          <div className="relative w-full">
            <Image src="/artwork/artwork3-2.png" alt="" width={420} height={420} className="w-full h-auto object-cover"/>
          </div>
          <div className="relative w-full">
            <Image src="/artwork/artwork3-3.png" alt="" width={420} height={265} />
          </div>
        </div>
      </div>
    </div>
  );
}
