import Image from "next/image";
import { childrenWraper } from "@/components/utils";
import Link from "next/link";

export function ImageGrid({ children }: { children: React.ReactNode }) {
  const elements = childrenWraper(children);
  const preview = elements.getComponentByType(ImagePreview);
  const thumbnails = elements.getComponentsByType(ImageThumbnail);

  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(2,auto)] gap-8 w-full">
      <div className="relative col-span-full h-[437]">
        {preview}
      </div>
      {thumbnails.map((thumbnail, i) => (
        <div key={i} className="relative  h-[172]">
          {thumbnail}
        </div>
      ))}
    </div>
  );
}

export function ImagePreview({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      fill
      style={{
        objectFit: "cover",
      }}
    />
  );
}
export function ImageThumbnail({ src }: { src: string }) {
  return (
    <Link href={`?preview=${encodeURIComponent(src)}`} scroll={false} replace className="">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover" 
      />
    </Link>
  );
}
