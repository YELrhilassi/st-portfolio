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

export default function ColorDesignSection() {
  return (
    <div className="flex-1 space-y-5">
      <div className="border-b">
        <h3 className="py-1.5! font-sans! font-bold text-center uppercase tracking-wider">
          colour design suggested by AI
        </h3>
      </div>
      <div className="p-2 bg-white font-sans text-[10px] leading-3 max-h-[253] overflow-auto">
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
          These emotional themes could be represented through your orb motif by
          transitioning between colors that reflect these feelings - perhaps
          moving from bright, optimistic tones through more complex, nuanced
          shades, and ending with balanced, harmonious colors that represent the
          synthesis of opportunities and challenges.
        </p>
      </div>
    </div>
  );
}
