import {
  AiToolSection,
  Hero,
} from "@/components/project/personalization-report";
import { cn } from "@/components/utils";
import Image from "next/image";

export default async function ({ searchParams }: { searchParams: any }) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero searchParams={search} />
      <AiToolSection />
      <div>
        <div className="flex justify-between items-baseline gap-4 mt-20 ">
          <span className="w-fit text-2xl font-medium uppercase tracking-wider">
            from numbers to graphics
          </span>
          <span className="flex-1 h-full border-b-3" />
        </div>
        <div className="grid grid-cols-13 gap-4 mt-10 ">
          <div className="col-start-2 col-span-4 space-y-4 text-lg pr-8 leading-5">
            <p>
              Another main highlights of this report is the thorough researched
              datas. A challenge for us designers is to transform complex
              quantitative data into scannable, digestible infographics while
              maintaining readability. To achieve such goal, I took initiative
              to research and learning on data and infographics through
              different channels: first, I had to familiarize myself about
              characteristics of different data charts; Second, I talked to
              experienced senior data designers and asked for feedbacks; Lastly,
              I proactively look for inspirational examples on sites like Data
              Viz Project , to widen my knowledge on the varieties of data
              visuals.
            </p>
            <p>
              This side-research is an invaluable opportunity to expand my
              design skills. I learned that Data Design is far more than simply
              styling numbers; it is a problem-solving mindset that requires
              thoroughly understanding the raw data and its underlying meaning,
              and efficiently converting those meanings in to easily
              understandable graphics that communicate the core insight at a
              glance. The teamwork and investment have contributed to the
              success, receiving positive responses from Subject Matter Experts,
              and the new design elements were adopted into other media
              projects.
            </p>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <div className="pb-3 pt-4 bg-[#C9C9C9] font-bold text-lg text-center uppercase tracking-wider">
              design development
            </div>
            <div className="flex flex-col justify-around gap-4 h-full p-8 bg-[#c9c9c9]">
              <div className="">
                <h4 className="p-1.5! border-t font-sans! text-sm text-center font-bold uppercase tracking-wider">
                  data infographic research / inspiration
                </h4>
                <div className="relative flex gap-2 ">
                  <div className="relative h-full w-[33%]">
                    <img
                      src="/report/info1.jpg"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="relative h-full w-[33%]">
                    <img
                      src="/report/info2.jpg"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="relative h-full w-[33%]">
                    <img
                      src="/report/info3.jpg"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <h4 className="p-1.5! border-t font-sans! text-sm text-center font-bold uppercase tracking-wider">
                  draft 1
                </h4>
                <div className="relative flex gap-2 ">
                  <div className="relative h-full w-full">
                    <img
                      src="/report/info4.png"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <h4 className="p-1.5! border-t font-sans! text-sm text-center font-bold uppercase tracking-wider">
                  draft 2
                </h4>
                <div className="relative flex gap-2 ">
                  <div className="relative h-full w-full">
                    <img
                      src="/report/info5.png"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <div className="pb-3 pt-4 bg-[#ADCBFD] font-bold text-lg text-center uppercase tracking-wider">
              final drafts
            </div>
            <div className="grid grid-cols-2 gap-2 h-full">
              <div>
                <img src="/report/draft3.png" />
              </div>
              <div>
                <img src="/report/draft4.png" />
              </div>
              <div className="col-span-full ">
                <img src="/report/draft5.png" className="h-full" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
