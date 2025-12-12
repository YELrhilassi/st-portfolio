import Image from "next/image";

export default function OrbsSection() {
  return (
    <div className="col-span-4 space-y-8">
      <h2 className="py-2! text-center text-lg font-sans! font-bold uppercase tracking-wider bg-blue-300/70">
        final orbs and motifs
      </h2>
      <div className="pt-8 pl-8 space-y-4">
        <p className="text-sm  pb-2 border-b">
          Orbs represent consumer throughout the report. Colours represent the
          emotions being explored during each section.
        </p>
        <div className="grid grid-cols-1 gap-4 text-xs mt-6">
          <div className="flex items-center w-full ">
            <div className="relative flex-1">
              <Image
                src="/report/orb1.png"
                alt=""
                fill
                className="object-cover relative!"
              />
            </div>
            <div className="flex-3 bg-[#C9C9C9] p-4 rounded-lg ">
              <span>
                <b>Intro and Outro pages: </b>
                Apply Digital Blues to support brand voice
              </span>
            </div>
          </div>
          <div className="flex items-center w-full ">
            <div className="relative flex-1">
              <Image
                src="/report/orb2.png"
                alt=""
                fill
                className="object-cover relative!"
              />
            </div>
            <div className="flex-3 bg-[#C9C9C9] p-4 rounded-lg">
              <span>
                <b>Intro and Outro pages: </b>
                Bright azure blue transitioning to soft violet - representing
                optimism about AI advancement while acknowledging thoughtful
                consideration of privacy concerns
              </span>
            </div>
          </div>
          <div className="flex items-center w-full ">
            <div className="relative flex-1">
              <Image
                src="/report/orb3.png"
                alt=""
                fill
                className="object-cover relative!"
              />
            </div>
            <div className="flex-3 bg-[#C9C9C9] p-4 rounded-lg">
              <span>
                <b>The current moment:</b> Amber transitioning to steel blue -
                reflecting the balance between consumer enthusiasm (61% willing
                to share data) and their privacy concerns
              </span>
            </div>
          </div>
          <div className="flex items-center w-full ">
            <div className="relative flex-1">
              <Image
                src="/report/orb4.png"
                alt=""
                fill
                className="object-cover relative!"
              />
            </div>
            <div className="flex-3 bg-[#C9C9C9] p-4 rounded-lg">
              <span>
                <b>Navigating challenges to effective personalization:</b> Deep
                coral softening to sage green - acknowledging difficulties while
                showing path to solutions
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm pb-2 border-b">
            These blurred shutters ("tech stacks") represent business throughout
            the report.
          </p>
          <div className="relative mt-3">
            <Image
              src="/report/shutters.png"
              alt=""
              width={130}
              height={130}
              className="mx-auto border mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
