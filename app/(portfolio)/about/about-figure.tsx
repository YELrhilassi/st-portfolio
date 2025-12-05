import Image from "next/image";

export default function AboutFigure() {
  return (
    <figure className="relative h-full w-full">
      <Image
        src="/about-profile.png"
        alt="profile ilustraion"
        quality={100}
        style={{ objectFit: "cover" }}
        fill
      />
    </figure>
  );
}
