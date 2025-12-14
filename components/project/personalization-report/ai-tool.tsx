import Image from "next/image";
import ColorDesignSection from "./color-design";
import InitialDesignSection from "./initialDesignSection";
import OrbsSection from "./orbs";

export function AiToolSection() {
  return (
    <div>
      <div className="flex justify-between items-baseline gap-4 mt-20 ">
        <span className="w-fit text-2xl font-medium uppercase tracking-wider">
          utilizing ai as a tool
        </span>
        <span className="flex-1 h-full border-b-3" />
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="relative col-start-2 col-span-7 space-y-8 ml-auto ">
          <h2 className="py-2! text-center text-lg font-sans! font-bold uppercase tracking-wider bg-[#C9C9C9]">
            design development
          </h2>
          <div className="flex gap-3 ">
            <InitialDesignSection />
            <ColorDesignSection />
          </div>
          <div className="grid grid-cols-2 gap-10 text-lg leading-5">
            <div className="space-y-8">
              <p>
                During the initial design exploration, I was inspired by the
                idea of using morphic, colourful spheres. This visual fluidity
                directly mirrored the subject matter—AI—which currently has a
                significant technological debate. I also incorporated a glass
                effect, introducing a sense of unclarity, visually linking the
                design back to the fundamental tension that the report is
                tackling about AI.
              </p>
              <p>
                To solidify our design directions, the team and I utilized AI
                tools, such as Gemini and ChatGPT, to create the report’s colour
                schemes. We prompted AI to analyze the report's themes and
                suggest distinctive colour combinations that might represent
                particular points of view and its associated emotions (e.g.,
                trust, concerns, enthusiasm etc ). We then used the AI's
                analysis as our starting point, and modified the best fitting
                options to the report's narrative, as well as the brand
                identity.
              </p>
            </div>
            <div className="space-y-8">
              <p>
                Eventually, the conceptual work led us to our final four
                distinct coloured orbs With the first blue orb carrying the
                Apply Digital’s brand colour, establishing immediate brand
                recognition in the opening and closing sections. Then, a
                Purple-Blue Orb represented AI advancement. A Yellow-Blue orb
                conveyed the tension of AI enthusiasm and concerns. And lastly,
                the Orange-Green orb acknowledged the future difficulties and
                challenges in AI development .
              </p>
              <p>
                This initial research and brainstorming stage critically defined
                the design direction for the entire report. Not only it extended
                the company's established branding, but more importantly,
                created a clear, unified visual guideline for each chapter. The
                foundational colour guideline ensured all following graphic
                elements and imagery across the report remained consistent,
                cohesive, and easily attributable to its specific thematic
                section.
              </p>
            </div>
          </div>
        </div>
        <OrbsSection />
      </div>
    </div>
  );
}
