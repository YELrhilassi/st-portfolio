"use client";
import GridWrapper from "@/components/layout/grid-wrapper";
import AboutBio from "./about-bio";
import AboutForm from "./about-form";
import FlayerTab from "./flayer-tab";
import AboutFigure from "./about-figure";
import { Facebook, Instagram, Linkedin, Scissors } from "lucide-react";
import { useEffect, useState } from "react";
import {
  LargeStaticPeel,
  MediumStaticPeel,
  SmallStaticPeel,
} from "./static-tab";

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

const peels = [LargeStaticPeel, MediumStaticPeel, SmallStaticPeel];

export default function About() {
  const [peelAssignments, setPeelAssignments] = useState<
    (React.ComponentType<any> | null)[]
  >(() => items.map(() => null));
  useEffect(() => {
    setPeelAssignments(
      items.map((item) =>
        item.isStatic ? peels[Math.floor(Math.random() * peels.length)] : null,
      ),
    );
  }, []);
  return (
    <GridWrapper className="grid-rows-[repeat(2,auto)] mt-20">
      <div className="col-span-full p-4 bg-red-100 bg-[url(/paper_fibers.png)] bg-blend-multiply shadow-lg">
        <div className="flex p-8 py-12 bg-[url(/paper_fibers.png)] bg-repeat">
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
      <div className="relative col-span-full h-fit">
        <div className="flex justify-center items-center gap-4 h-12 border-b-2 border-dashed border-gray-400 bg-red-100 bg-paper bg-blend-multiply">
          <Scissors className="w-4 p-0 -translate-y-px " />
          <span className="uppercase tracking-wider font-bold">
            Tear a Tab to Connect
          </span>
          <Scissors className="w-4 p-0 -translate-px" />
        </div>
        <div
          className="relative grid lg:grid-cols-11 xl:grid-cols-12 lg md:grid-cols-8 gap-y-4 h-[265]"
          style={{ clipPath: "inset(-200px 0 0 -200px)" }}
        >
          {items.map((item, index) => {
            if (!item.isStatic) {
              return (
                <div className="relative" key={index}>
                  <FlayerTab
                    key={index}
                    handle={item.handle}
                    icon={item.icon}
                  />
                </div>
              );
            }
            const PeelComponent = peelAssignments[index];

            if (!PeelComponent)
              return <div key={index} className="relative"></div>;

            return (
              <div className="relative" key={index}>
                <PeelComponent handle={item.handle} icon={item.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </GridWrapper>
  );
}
