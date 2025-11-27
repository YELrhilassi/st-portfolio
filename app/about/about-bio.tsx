import Image from "next/image";

export default function AboutBio() {
  return (
    <>
      <figure className="relative w-[300] h-[440]">
        <Image
          src="/about-profile.png"
          alt="profile ilustraion"
          quality={100}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </figure>
      <div className="flex flex-col gap-4 w-[33%] h-fit mt-18 ">
        <h1 className="text-6xl w-full mb-6 font-bold font-serif uppercase">
          Hi, I'm sophia,
        </h1>
        <div className="space-y-4 text-lg">
          <p>
            a Visual Designer. I believe visuals are one of the most impactful
            ways of storytelling, whether they are personal stories, or holistic
            brands’ stories. From experiences, a successful story comes from
            teamwork. As I partner closely with multi-disciplinary teams, the
            work results to be powerful and cohesive across various
            touch-points.
          </p>
          <p>If you have a story tell, let’s connect!</p>
        </div>
      </div>
    </>
  );
}
