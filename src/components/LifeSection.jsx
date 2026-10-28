import { useState } from "react";
import ScrollSequence from "./ScrollSequence";

const phases = [
  {
    title: "Hard Work",
    description:
      "We practise, persevere, and take pride in effort — because progress comes from showing up and trying again.",
  },
  {
    title: "Vision",
    description:
      "We help every learner look beyond today, set goals, and grow into a confident young person with direction.",
  },
  {
    title: "Information & Technology",
    description:
      "We explore, question, and build the skills children need to learn, create, and thrive in a changing world.",
  },
];

export default function LifeSection() {
  const [phase, setPhase] = useState(0);

  return (
    <section id="life" className="relative bg-forest-950">
      <ScrollSequence onPhaseChange={setPhase}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-forest-950/45" />

        <div className="relative flex h-full flex-col justify-between px-6 pb-14 pt-28 sm:pb-16 lg:px-14 lg:pb-20 lg:pt-32">
          <div className="flex items-center justify-between gap-6">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-cream-50/85">
              <span className="h-px w-8 bg-sun-400" />
              Life at Trinity
            </p>

            <div className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/45 sm:flex">
              <span>Our school in motion</span>
              <span className="relative h-8 w-px overflow-hidden bg-cream-50/20">
                <span className="animate-cue-drift absolute inset-x-0 top-0 h-3 bg-sun-300" />
              </span>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="grid">
              {phases.map((item, index) => {
                const active = index === phase;
                return (
                  <div
                    key={item.title}
                    aria-hidden={!active}
                    className={`col-start-1 row-start-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-5 opacity-0"
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sun-300">
                      0{index + 1} / 03
                    </p>
                    <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-cream-50 sm:text-5xl lg:text-6xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-cream-50/70 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                {phases.map((item, index) => (
                  <span
                    key={item.title}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === phase
                        ? "w-9 bg-sun-400"
                        : "w-2.5 bg-cream-50/35"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream-50/45">
                Scroll to continue
              </p>
            </div>
          </div>
        </div>
      </ScrollSequence>
    </section>
  );
}
