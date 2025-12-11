import { ImagePreview, ImageThumbnail } from "@/components/ui";

export async function Hero({ searchParams }: { searchParams: any }) {
  const previewSrc = searchParams.preview || "/thomas-pink/image1.png";

  // All images
  const images = [
    "/thomas-pink/image1.png",
    "/thomas-pink/image2.png",
    "/thomas-pink/image3.png",
    "/thomas-pink/image4.png",
  ];

  // Put preview first, then the rest as thumbnails
  const thumbnails = images.filter((src) => src !== previewSrc);

  return (
    <div className="grid grid-cols-5 grid-rows-[repeat(3,auto)] mt-20">
      <div className="col-start-1 col-span-2 flex flex-col w-full row-start-1 h-fit ">
        <div className=" w-full space-y-2">
          <h1 className="text-8xl uppercase ">
            thomas <br /> pink
          </h1>
          <div className="border-b pb-15 max-w-[70%]" />
        </div>

        <div className="flex gap-4 divide-x mt-8">
          <span className=" pr-4 font-bold text-md tracking-wider uppercase">
            Report
          </span>
          <span className=" pr-4 font-bold text-md tracking-wider uppercase">
            thought leadershipcase study
          </span>
        </div>
      </div>
      <div className="col-start-3 col-span-4 row-span-full h-full r">
        <div className="grid grid-cols-3 gap-6 w-full pt-5 ">
          <div className="relative col-span-full w-[758] h-[407]">
            <ImagePreview
              src={previewSrc}
              fill
              className="object-cover w-full"
            />
          </div>
          {thumbnails.map((thumbnail, i) => (
            <div key={i} className="relative h-[172] w-[237]">
              <ImageThumbnail
                src={thumbnail}
                fill
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-start-1 col-span-2 row-start-2 pr-20 pt-15 space-y-4 text-lg leading-6 ">
        <p >
          Thomas Pink is a luxury shirt retailer with global name recognition.
          The objective for this project is to design compelling assets,
          including hero images, cover pictures, infographics with stats and
          more, highlighting Apply Digital’s contribution to the noticeable
          improvement of the customer web experience and sales.
        </p>
        <p>
          This case study was designed during the time when Apply Digital was
          rebranding, as one of the first few published case studies,
          fortunately this piece has successfully stood out and being taken as
          design inspiration for the other case studies that follow later.
        </p>
      </div>
    </div>
  );
}
