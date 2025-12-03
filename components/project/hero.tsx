import {
  ImageGrid,
  ImagePreview,
  ImageThumbnail,
} from "@/components/project/image-grid";

//
//
//

export default async function Hero({ searchParams }: { searchParams: any }) {
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
    <div className="grid grid-cols-3 grid-rows-2 mt-20">
      <div className="col-start-1 row-span-1 flex flex-col divide-y-2">
        <h1 className="text-8xl pb-15! uppercase">thomas pink</h1>
        <div className="flex gap-4 divide-x-2 mt-8">
          <span className=" pr-4 font-bold text-lg tracking-wider uppercase">
            case study
          </span>
          <span className=" pr-4 font-bold text-lg tracking-wider uppercase">
            visualizing web experience
          </span>
        </div>
      </div>
      <div className="col-start-2 col-span-2 row-span-full pl-20">
        <ImageGrid>
          <ImagePreview src={previewSrc} />
          {thumbnails.map((src) => (
            <ImageThumbnail key={src} src={src} />
          ))}{" "}
        </ImageGrid>
      </div>
      <div>
        <div className="text-lg pt-6">
          Thomas Pink is a luxury shirt retailer with global name recognition.
          The objective for this project is to design compelling assets,
          including hero images, cover pictures, infographics with stats and
          more, highlighting Apply Digital’s contribution to the noticeable
          improvement of the customer web experience and sales. This case study
          was designed during the time when Apply Digital was rebranding, as one
          of the first few published case studies, fortunately this piece has
          successfully stood out and being taken as design inspiration for the
          other case studies that follow later.
        </div>
      </div>
    </div>
  );
}
