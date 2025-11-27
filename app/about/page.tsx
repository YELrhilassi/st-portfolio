import GridWrapper from "@/components/layout/grid-wrapper";
import AboutBio from "./about-bio";
import AboutForm from "./about-form";
import FlayerTab from "./flayer-tab";
import AboutFigure from "./about-figure";
import { Facebook, Instagram, Linkedin, Scissors } from "lucide-react";

const items = [
  { icon: <Linkedin />, handle: "@username", isStatic: false },
  { icon: <Instagram />, handle: "@username", isStatic: false },
  { icon: <Linkedin />, handle: "@username", isStatic: true },
  { icon: <Instagram />, handle: "@username", isStatic: false },
  { icon: <Facebook />, handle: "@username", isStatic: false },
  { icon: <Linkedin />, handle: "@username", isStatic: false },
  { icon: <Facebook />, handle: "@username", isStatic: true },
  { icon: <Instagram />, handle: "@username", isStatic: true },
  { icon: <Facebook />, handle: "@username", isStatic: false },
  { icon: <Linkedin />, handle: "@username", isStatic: true },
  { icon: <Instagram />, handle: "@username", isStatic: true },
  { icon: <Facebook />, handle: "@username", isStatic: true },
];

export default function About() {
  return (
    <GridWrapper className="grid-rows-[repeat(2,auto)]">
      <div
        className=" 
          col-span-full p-4 
          bg-pink-200 bg-[url(/paper_fibers.png)] bg-blend-multiply
        shadow-lg
          "
      >
        <div
          className=" 
          flex p-8 py-12 
          bg-[url(/paper_fibers.png)] bg-repeat
          "
          style={{
            background: "url(/paper_fibers.png)",
          }}
        >
          <div className="w-[300] h-[440]">
            <AboutFigure />
          </div>
          <div className="flex flex-col gap-4 w-[33%] h-fit mt-18 ">
            <AboutBio />
          </div>

          <div className="flex-1 ml-14 p-8">
            <AboutForm />
          </div>
        </div>
      </div>
      <div className="col-span-full h-fit">
        <div
          className="
            flex justify-center items-center gap-4 h-12 
            border-b-2 border-dashed border-gray-400 
            bg-pink-200 bg-[url(/paper_fibers.png)] bg-blend-multiply
            "
        >
          <Scissors className="w-4 p-0 -translate-y-px " />
          <span className="uppercase tracking-wider font-bold">
            Tear a Tab to Connect
          </span>
          <Scissors className="w-4 p-0 -translate-px" />
        </div>
        <div className="relative grid lg:grid-cols-11 xl:grid-cols-12 lg md:grid-cols-8 gap-y-4 h-[265]  overflow-clip">
          {items.map((item, index) => (
            <FlayerTab
              key={index}
              handle={item.handle}
              icon={item.icon}
              isStatic={item.isStatic}
            />
          ))}
        </div>
      </div>
    </GridWrapper>
  );
}
