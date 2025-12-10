import { ImagePreview, ImageThumbnail } from "@/components/ui";
import { SquareArrowOutDownRight, SquareArrowOutUpRight } from "lucide-react";

export async function Hero({ searchParams }: { searchParams: any }) {
  const previewSrc = searchParams.preview || "/report/image1.png";

  const images = [
    "/report/image1.png",
    "/report/image2.png",
    "/report/image3.png",
    "/report/image4.png",
  ];

  const thumbnails = images.filter((src) => src !== previewSrc);

  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(2,auto)] mt-20">
      <div className="col-start-1 col-span-2 row-span-1 flex flex-col w-full">
        <div className=" w-full space-y-2">
          <h1 className="text-[90px] uppercase leading-24">
            Personalization Report 2025:
          </h1>
          <div className="border-b pb-20 max-w-[70%]">
            <h2 className="text-4xl uppercase italic  ">
              AI, Data, and the Future of Customer Experience
            </h2>
          </div>
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
      <div className="col-start-3 col-span-2 row-span-full h-full">
        <div className="grid grid-cols-3 gap-6 w-full pt-5">
          <div className="relative col-span-full">
            <ImagePreview
              src={previewSrc}
              width={608}
              height={350}
              className="object-cover w-full"
            />
          </div>
          {thumbnails.map((thumbnail, i) => (
            <div key={i} className="relative w-full">
              <ImageThumbnail
                src={thumbnail}
                width={185}
                height={102}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-start-1 col-span-2 pr-20 pt-5">
        <p className="text-lg pt-6 leading-6">
          <b>
            Reports are of of the long-form content offer dive deep discussions
            of current trendy topics.
          </b>{" "}
          In this report, the tech leaders give insights into the surge of AI
          use in digital platform, supported with comprehensive statistics, case
          studies and researches. From design perspective, we also elevated
          design by learning and using new tools, such as: incorporating AI in
          brainstorming stage, utilizing colours and motifs to convey emotions,
          and studying deeper about data design, introducing the apply digital
          brand to a new elements.
        </p>
        <button className="flex items-center justify-between gap-2 capitalize border py-3 px-10">
          <span className="leading-0 pt-0.5">full report</span>
          <span className="w-4 h-4">
            <SquareArrowOutUpRight className="w-full h-full p-0 m-0" />
          </span>
        </button>
      </div>
    </div>
  );
}
