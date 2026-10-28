import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import {
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  Sprout,
} from "./icons";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Mayange+Sector,+Bugesera,+Rwanda";

const fieldClass =
  "w-full rounded-xl border border-forest-900/12 bg-cream-50/70 px-4 py-3 text-sm text-forest-950 placeholder:text-forest-900/35 transition focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-forest-500/10";

const labelClass =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-800/70";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    setFirstName(name.split(" ")[0] || "");
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-forest-900/10 bg-cream-100/60 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Come and say hello."
              description="Whether you are exploring admission, already part of the Trinity family, or simply curious, our school office is always happy to help."
            />

            <div className="mt-10 space-y-4">
              <Reveal>
                <div className="flex items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                      Visit us
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-forest-950">
                      Mayange Sector, Bugesera District
                      <br />
                      Rwanda
                    </p>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 transition-colors hover:text-forest-500"
                    >
                      Open in maps
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sun-200/70 text-sun-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                      School office
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-forest-950">
                      Monday – Friday
                    </p>
                    <p className="mt-0.5 text-xs text-forest-900/55">
                      7:30 – 17:00 · during school terms
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-river-500/10 text-river-600">
                    <Sprout className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                      Part of the community
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-forest-900/70">
                      A MINEDUC-aligned nursery and primary school, rooted in
                      Mayange.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={140}>
            <div className="rounded-[2rem] border border-forest-900/10 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(7,35,19,0.45)] sm:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-forest-950">
                    Thank you{firstName ? `, ${firstName}` : ""}.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-forest-900/65">
                    Your message is on its way to our school office. We look
                    forward to speaking with you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-forest-700 underline decoration-forest-300 decoration-2 underline-offset-4 transition-colors hover:text-forest-500"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                      Send an enquiry
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-forest-950">
                      How can we help?
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone <span className="normal-case">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+250"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="topic" className={labelClass}>
                        I would like to ask about
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        defaultValue="admissions"
                        className={fieldClass}
                      >
                        <option value="admissions">Admissions</option>
                        <option value="visit">Booking a visit</option>
                        <option value="programmes">Programmes</option>
                        <option value="general">A general enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className={labelClass}>
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Tell us a little about your child or what you would like to know."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    arrow={false}
                    className="mt-6 w-full"
                  >
                    Send message
                  </Button>

                  <p className="mt-3 text-center text-[11px] leading-relaxed text-forest-900/45">
                    Our school office will get back to you during school hours.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
