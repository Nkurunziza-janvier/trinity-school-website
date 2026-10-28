import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmoothLink from "./SmoothLink";
import { ArrowRight, Check } from "./icons";

const programmes = [
  {
    stage: "Nursery · Ages 3-6",
    title: "Play, wonder & first friendships",
    description:
      "Learning through play, story, song, and exploration. Children build language, early numeracy, confidence, and friendships in a safe, joyful setting.",
    points: [
      "Play-based learning",
      "Early literacy & numeracy",
      "Social & emotional growth",
    ],
    badge: "bg-sun-200/60 text-sun-600",
  },
  {
    stage: "Lower Primary · P1-P3",
    title: "Confident foundations",
    description:
      "Strong foundations in literacy, numeracy, and inquiry. Guided support helps every child find their feet and discover the joy of learning.",
    points: [
      "Reading & writing fluency",
      "Number sense & problem-solving",
      "Guided inquiry & creativity",
    ],
    badge: "bg-forest-100 text-forest-700",
  },
  {
    stage: "Upper Primary · P4-P6",
    title: "Ready for what comes next",
    description:
      "Deeper knowledge, independent thinking, and responsibility. Learners are prepared academically and personally for secondary school.",
    points: [
      "Independent study habits",
      "Leadership & responsibility",
      "Exam readiness & transition",
    ],
    badge: "bg-river-500/10 text-river-600",
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Learning at Trinity"
          title="A pathway for every stage of growth."
          description="Our programmes follow the Rwandan national curriculum and pair academic rigour with warmth, play, and personal attention."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
          {programmes.map((programme, index) => (
            <Reveal
              key={programme.title}
              delay={index * 120}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-[1.75rem] border border-forest-900/10 bg-white p-7 shadow-[0_20px_50px_-40px_rgba(7,35,19,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-forest-900/15 hover:shadow-[0_28px_60px_-35px_rgba(7,35,19,0.4)] sm:p-8">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl font-serif text-lg ${programme.badge}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                  {programme.stage}
                </p>
                <h3 className="mt-2.5 text-balance font-serif text-[26px] font-medium leading-tight text-forest-950">
                  {programme.title}
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-forest-900/65">
                  {programme.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-forest-900/10 pt-6">
                  {programme.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13px] font-medium text-forest-900/75"
                    >
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <SmoothLink
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-forest-800 transition-colors hover:text-forest-600"
                  >
                    Enquire about this stage
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </SmoothLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-xs text-forest-900/55">
            Curriculum aligned with the Ministry of Education (MINEDUC), Rwanda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
