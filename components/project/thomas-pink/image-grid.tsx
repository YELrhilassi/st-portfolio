import Image from "next/image";
import { childrenWraper } from "@/components/utils";
import Link from "next/link";

export function ImageGrid({ children }: { children: React.ReactNode }) {
  const elements = childrenWraper(children);
  const preview = elements.getComponentByType(ImagePreview);
  const thumbnails = elements.getComponentsByType(ImageThumbnail);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 h-full w-full overflow-hidden">
      <div className="relative col-span-full row-span-2 overflow-hidden">
        {preview}
      </div>
      {thumbnails.map((thumbnail, i) => (
        <div key={i} className="relative">
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
    <Link href={`?preview=${encodeURIComponent(src)}`} scroll={false} replace>
      <Image
        src={src}
        alt=""
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </Link>
  );
}
