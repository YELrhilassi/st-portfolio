import ContactForm from "@/components/about/contact-form";
import Image from "next/image";
import { fetchAboutContent, TAbout } from "@/lib/data";
import { Separator } from "@/components/ui/separator";


export default async function AboutPage() {
  const data = await fetchAboutContent();
  const { h1, description, image, imageAlt, formFooter } = data as TAbout;

  return (
    <main className="grid grid-cols-[1fr_auto_1fr] gap-14 min-h-screen">
      {/* Left side */}
      <section className="flex flex-col pt-[12vh]">
        <div className="flex gap-4 -mb-20 z-10">
          <h1 className="text-[7vw] leading-[6vw] font-instrument-serif uppercase">{h1}</h1>
          <p className=" px-4 font-varta">{description}</p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[600px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover "
          />
        </div>
      </section>

      <Separator orientation="vertical" className="bg-primary" />

      {/* Right side */}
      <section className="flex flex-col justify-start max-w-4xl gap-12 pt-[12vh]">
        <ContactForm />
        <div>
          <h1 className="w-sm text-[5vw] leading-[5vw] font-serif uppercase">
            {formFooter}
          </h1>
        </div>
      </section>
    </main>
  );
}
