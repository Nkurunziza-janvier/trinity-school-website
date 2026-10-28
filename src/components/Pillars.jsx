import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    number: "01",
    title: "Hard Work",
    description:
      "We practise, persevere, and take pride in effort. Children learn that progress comes from showing up, trying again, and doing their best.",
  },
  {
    number: "02",
    title: "Vision",
    description:
      "We help learners see beyond today — setting goals, making thoughtful choices, and growing into confident young people with direction.",
  },
  {
    number: "03",
    title: "Information & Technology",
    description:
      "We introduce purposeful technology and information skills so children can explore, create, and thrive in a changing world.",
  },
];

export default function Pillars() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 text-cream-50 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(248,206,90,0.14),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full border border-cream-50/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-[300px] w-[300px] rounded-full border border-cream-50/[0.05]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <SectionHeading
            eyebrow="The Trinity way"
            title="Three roots. One growing child."
            tone="light"
          />
          <Reveal delay={120}>
            <p className="max-w-md text-pretty text-base leading-relaxed text-cream-50/65 lg:pb-2">
              Our emblem is a tree — a reminder that strong effort, clear
              direction, and modern skills grow together. These three roots
              shape everyday life at Trinity.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 120}
              className={`border-t border-cream-50/15 pt-7 md:px-8 ${
                index === 0 ? "md:pl-0" : "md:border-l md:border-cream-50/10"
              }`}
            >
              <span className="font-serif text-sm italic text-sun-300/90">
                {pillar.number}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-medium text-cream-50 sm:text-[28px]">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-50/60">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
