import assembly from "../assets/assembly.jpg";
import campus from "../assets/campus.jpg";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Check } from "./icons";

const points = [
  "A nurturing, child-centred approach",
  "Strong foundations in literacy and numeracy",
  "Values that guide life beyond the classroom",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative pb-14 sm:pb-20 lg:pb-10">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-8 hidden h-44 w-44 rounded-full bg-sun-200/60 blur-2xl sm:block"
            />

            <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-white shadow-[0_35px_80px_-45px_rgba(7,35,19,0.55)]">
              <img
                src={assembly}
                alt="Trinity learners gathered for morning assembly on the school grounds"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/15 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-2 right-0 hidden w-52 overflow-hidden rounded-2xl border-[5px] border-cream-50 shadow-xl sm:block lg:-bottom-4 lg:w-60">
              <img
                src={campus}
                alt="Children and teachers lined up on the Trinity school campus"
                className="aspect-square w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -left-4 bottom-28 hidden rounded-xl bg-forest-900 px-4 py-3 text-cream-50 shadow-lg lg:block">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-50/60">
                Proudly rooted in
              </p>
              <p className="mt-1 font-serif text-lg">Mayange Sector</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome to Trinity"
              title="Rooted in community. Growing with purpose."
            />

            <Reveal delay={140}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-forest-900/70">
                Trinity Nursery & Primary School serves families in Mayange
                Sector with a simple belief: every child deserves a strong
                start and a school that truly believes in them.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-forest-900/70">
                From early play and discovery in nursery to confident,
                capable learners in primary, our teachers create a warm and
                structured environment where children feel safe to ask
                questions, make mistakes, and grow.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-8 space-y-3.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm font-medium text-forest-900/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                      <Check className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <blockquote className="mt-9 border-l-2 border-sun-400 pl-5">
                <p className="font-serif text-xl italic leading-relaxed text-forest-800">
                  “Every child is known by name and encouraged to grow at their
                  own pace.”
                </p>
                <footer className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-600">
                  The Trinity team
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-9">
                <Button href="#programmes" variant="outline">
                  Explore our programmes
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
