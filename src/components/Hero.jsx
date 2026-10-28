import classroom from "../assets/classroom.jpg";
import logo from "../assets/logo.jpeg";
import Button from "./Button";
import Reveal from "./Reveal";
import { Check } from "./icons";

const assurances = [
  "MINEDUC curriculum",
  "Nursery to Primary",
  "A caring community",
];

const values = [
  "MINEDUC curriculum",
  "Nursery & Primary",
  "Mayange Sector · Bugesera",
  "Hard work · Vision · Technology",
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[460px] rounded-full bg-sun-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 bottom-10 h-[380px] w-[380px] rounded-full bg-forest-100/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-forest-900/10 bg-white/70 px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-forest-800 shadow-sm backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
                  Mayange Sector · Bugesera, Rwanda
                </p>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-7 text-balance font-serif text-[clamp(2.9rem,7vw,5.4rem)] font-medium leading-[0.97] tracking-[-0.035em] text-forest-950">
                  Small steps.
                  <span className="block text-forest-600 italic">
                    Big dreams.
                  </span>
                  <span className="block">Bright futures.</span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-forest-900/70 sm:text-lg sm:leading-8">
                  Trinity Nursery & Primary School is a warm, community-rooted
                  school where curious young minds are known, encouraged, and
                  challenged to grow — from their very first classroom to their
                  next big step.
                </p>
              </Reveal>

              <Reveal delay={270}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button href="#admissions">Apply for admission</Button>
                  <Button href="#about" variant="outline">
                    Explore our school
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <ul className="mt-10 flex max-w-lg flex-wrap gap-x-6 gap-y-3 border-t border-forest-900/10 pt-6">
                  {assurances.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-forest-900/70"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={180} className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-forest-300/50 sm:block"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-8 hidden h-28 w-28 rounded-full bg-sun-300/70 blur-2xl sm:block"
              />

              <div className="relative overflow-hidden rounded-[2.25rem] border-[6px] border-white bg-cream-100 shadow-[0_30px_80px_-40px_rgba(7,35,19,0.55)]">
                <img
                  src={classroom}
                  alt="A teacher guiding a young learner in a warm classroom at Trinity Nursery & Primary School"
                  className="aspect-[4/3] h-full w-full object-cover sm:aspect-[5/4] lg:aspect-[6/7]"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/25 via-transparent to-transparent" />

                <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-forest-900 shadow-lg backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-500" />
                  </span>
                  Now enrolling
                </div>
              </div>

              <div className="relative -mt-12 ml-4 mr-4 rounded-2xl border border-white/70 bg-cream-50/95 p-4 shadow-[0_20px_50px_-25px_rgba(7,35,19,0.5)] backdrop-blur sm:absolute sm:-bottom-8 sm:left-6 sm:right-auto sm:mt-0 sm:w-[310px] sm:p-5">
                <div className="flex items-center gap-3.5">
                  <img
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain ring-1 ring-forest-900/10"
                  />
                  <div>
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                      Our promise
                    </p>
                    <p className="mt-1 text-[13px] font-medium leading-snug text-forest-950">
                      Hard work. Vision. Information & technology.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-y border-forest-900/10 bg-cream-100/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 lg:px-10">
          {values.map((value, index) => (
            <div key={value} className="contents">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden h-1 w-1 rounded-full bg-forest-300 sm:block"
                />
              )}
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-800/70">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
