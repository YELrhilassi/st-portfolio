import GridWrapper from "@/components/layout/grid-wrapper";
import AboutBio from "./about-bio";
import AboutForm from "./about-form";

export default function About() {
  return (
    <GridWrapper className="grid-rows-[repeat(2,auto)]">
      <div className="col-span-full flex p-8 py-12 mt-10 min-h-[550]">
        <AboutBio />
        <div className="flex-1 ml-14 p-8">
          <AboutForm />
        </div>
      </div>
      <div className="col-span-full">bottom grid</div>
    </GridWrapper>
  );
}
