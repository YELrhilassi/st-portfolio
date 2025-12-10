import Image, { ImageProps } from "next/image";
import { childrenWraper } from "@/components/utils";
import Link from "next/link";



type TImage = Omit<ImageProps, "alt" | "src"> & { src: string };
export function ImagePreview({ src, ...rest }: TImage) {
  return <Image src={src} alt=""  {...rest} />;
}

export function ImageThumbnail({ src, ...rest }: TImage) {
  return (
    <Link
      href={`?preview=${encodeURIComponent(src)}`}
      scroll={false}
      replace
    >
      <Image src={src} alt="" {...rest} />
    </Link>
  );
}
