import { Hero } from "@/components/project/personalization-report";
import { cn } from "@/components/utils";
import Image from "next/image";

const sections = [
  {
    title: "Executive Summary",
    description:
      "Conveys a sense of anticipation and optimism about AI-driven personalization, while acknowledging some uncertainty about privacy concerns.",
    items: [
      "Bright azure blue transitioning to soft violet - Representing optimism about AI advancement",
      " while acknowledging thoughtful consideration of privacy concerns",
    ],
    color: "#D4EFFF",
  },
  {
    title: "Unpacking the Personalization Landscape",
    description:
      'Evokes a mix of wonder and slight disorientation - describing personalization as both "sublime" and potentially inducing "vertigo" in consumers, leaving them between "fulfilled and baffled".',
    items: [
      'Deep purple merging with electric blue - Capturing both the "sublime" feeling',
      'and slight "vertigo" described in this section',
    ],
    color: "#D1C3E0",
  },
  {
    title: "Consumer Expectations",
    description:
      "Projects tension between desire and caution - while consumers show enthusiasm for personalization, there's underlying anxiety about data privacy and security.",
    items: [
      "Amber transitioning to steel blue - Reflecting the balance between consumer enthusiasm (61% willing to share data) and their privacy concerns",
    ],
    color: "#FFE669",
  },
  {
    title: "Rise of AI-Powered Personalization",
    description:
      "Conveys excitement and momentum, with businesses showing strong confidence in AI investments.",
    items: [
      "Vibrant emerald green brightening to gold - Representing growth and investment",
      " highlighting the 82% of leaders increasing personalization spending ",
    ],

    color: "#78ED95",
  },
  {
    title: "Challenges",
    description:
      "Expresses concern and pragmatism about technical limitations and implementation hurdles.",
    items: [
      "Deep coral softening to sage green - Acknowledging difficulties while showing path to solutions",
    ],
    color: "#ED9878",
  },
  {
    title: "Final Word",
    description:
      "Concludes with a sense of balanced optimism - acknowledging both the opportunities and responsibilities in the future of personalization.",
    items: [
      "Harmonious blend of deep blue and soft gold Symbolizing the balanced perspective between opportunity and responsibility",
    ],
  },
];

export default async function ({ searchParams }: { searchParams: any }) {
  const search = await searchParams;

  return (
    <div className="">
      <Hero searchParams={search} />
      <div>
        <div className="flex justify-between items-baseline gap-4 mt-20 ">
          <span className="w-fit text-2xl font-medium uppercase tracking-wider">
            utilizing ai as a tool
          </span>
          <span className="flex-1 h-full border-b-3" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 h-full space-y-8">
            <h2 className="py-2! text-center text-lg font-sans! font-bold uppercase tracking-wider bg-gray-400/70">
              design development
            </h2>
            <div className="flex gap-3 h-full">
              <div className="relative space-y-5 w-[238] h-full ">
                <div className="border-b">
                  <h3 className="py-1.5! font-sans! font-bold text-center uppercase tracking-wider">
                    initial design direction
                  </h3>
                </div>
                <div className=" relative">
                  <Image
                    src="/report/section-image1.png"
                    alt=""
                    fill
                    quality={100}
                    className="object-containz relative!"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-5">
                <div className="border-b">
                  <h3 className="py-1.5! font-sans! font-bold text-center uppercase tracking-wider">
                    colour design suggested by AI
                  </h3>
                </div>
                <div className="p-2 bg-white font-sans text-[10px] leading-3 text-prett">
                  <ul className="space-y-1.5">
                    {sections.map((section, i) => (
                      <div key={i} className="">
                        <h4 className="font-sans! font-extrabold capitalize">
                          {section.title}
                        </h4>

                        <p>{section.description}</p>
                        <li className="space-x-0.5 list-disc ml-5 list-outside ">
                          <span style={{ backgroundColor: section.color }}>
                            {section.items[0]}
                          </span>
                          <span>{section.items[1]}</span>
                        </li>
                      </div>
                    ))}
                  </ul>
                  <p className="mt-2">
                    These emotional themes could be represented through your orb
                    motif by transitioning between colors that reflect these
                    feelings - perhaps moving from bright, optimistic tones
                    through more complex, nuanced shades, and ending with
                    balanced, harmonious colors that represent the synthesis of
                    opportunities and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 space-y-8">
            <h2 className="py-2! text-center text-lg font-sans! font-bold uppercase tracking-wider bg-blue-300/70">
              final orbs and motifs
            </h2>
            <div className="pt-8 px-8">
              <p className="text-sm border-b pb-2">
                Orbs represent consumer throughout the report. Colours represent
                the emotions being explored during each section.
              </p>
              <div className="grid grid-cols-1 grid-rows-4 text-sm mt-6">
                <div className="flex items-center w-full ">
                  <div className="relative h-full w-[120]">
                    <Image
                      src="/report/orb1.png"
                      alt=""
                      fill
                      className="object-coverrelative!"
                    />
                  </div>
                  <div className="bg-gray-400/50 px-2">
                    <span>
                      <b>Intro and Outro pages: </b>
                      Apply Digital Blues to support brand voice
                    </span>
                  </div>
                </div>
                <div className="flex items-center w-full ">
                  <div className="relative h-full w-[120]">
                    <Image
                      src="/report/orb1.png"
                      alt=""
                      fill
                      className="object-cover relative!"
                    />
                  </div>
                  <div className="flex-1 bg-gray-400/50 px-2">
                    <span>
                      <b>Intro and Outro pages: </b>
                      Bright azure blue transitioning to soft violet -
                      representing optimism about AI advancement while
                      acknowledging thoughtful consideration of privacy concerns
                    </span>
                  </div>
                </div>
                <div className="flex items-center w-full ">
                  <div className="relative h-full w-[120]">
                    <Image
                      src="/report/orb1.png"
                      alt=""
                      fill
                      className="object-cover relative!"
                    />
                  </div>
                  <div className="bg-gray-400/50 px-2">
                    <span>
                      <b>Intro and Outro pages: </b>
                      Apply Digital Blues to support brand voice
                    </span>
                  </div>
                </div>
                <div className="flex items-center w-full ">
                  <div className="relative h-full w-[120]">
                    <Image
                      src="/report/orb1.png"
                      alt=""
                      fill
                      className="object-cover relative!"
                    />
                  </div>
                  <div className="bg-gray-400/50 px-2">
                    <span>
                      <b>Intro and Outro pages: </b>
                      Apply Digital Blues to support brand voice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
