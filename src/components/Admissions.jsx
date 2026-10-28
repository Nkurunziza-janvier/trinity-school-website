import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import logo from "../assets/logo.jpeg";
import { Clock, MapPin } from "./icons";

const steps = [
  {
    title: "Visit the school",
    description:
      "Meet our team, walk through the classrooms, and ask us anything. Seeing Trinity in person is the best way to begin.",
  },
  {
    title: "Complete the application",
    description:
      "Share your child's details and any previous school records. Our office will guide you through what is needed.",
  },
  {
    title: "Meet, confirm & begin",
    description:
      "We will confirm placement, welcome your family, and help your child settle confidently into their new class.",
  },
];

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-sun-200/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Admissions"
              title="Joining Trinity is a simple next step."
              description="We would love to meet you and your child. Visit us in Mayange, ask questions, and see our classrooms in action."
            />

            <ol className="mt-10">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 100}>
                  <li className="grid grid-cols-[auto_1fr] gap-5 border-t border-forest-900/10 py-6">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-forest-900/15 font-serif text-sm text-forest-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-forest-950">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-forest-900/65">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={320}>
              <div className="mt-7">
                <Button href="#contact">Book a school visit</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-cream-50 shadow-[0_40px_90px_-45px_rgba(7,35,19,0.75)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-cream-50/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-sun-400/10 blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 rounded-lg bg-white object-contain p-0.5 ring-1 ring-white/20"
                  />
                  <div>
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-sun-300">
                      Admissions open
                    </p>
                    <p className="mt-1 text-xs text-cream-50/60">
                      Nursery · Lower Primary · Upper Primary
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 max-w-sm text-balance font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-[34px]">
                  Every great journey starts with a visit.
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-50/65">
                  Come and meet our teachers, see the learning spaces, and get a
                  feel for the Trinity community. We will take it from there.
                </p>

                <div className="mt-8 space-y-4 border-t border-cream-50/15 pt-7">
                  <p className="flex items-start gap-3 text-sm text-cream-50/75">
                    <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-sun-300" />
                    Mayange Sector, Bugesera District, Rwanda
                  </p>
                  <p className="flex items-start gap-3 text-sm text-cream-50/75">
                    <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-sun-300" />
                    School days · 7:30 - 17:00
                  </p>
                </div>

                <div className="mt-8">
                  <Button href="#contact" variant="sun" className="w-full">
                    Arrange a visit
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
