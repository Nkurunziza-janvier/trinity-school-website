import Logo from "./Logo";
import SmoothLink from "./SmoothLink";
import { ArrowUpRight, MapPin } from "./icons";
import { scrollToTop } from "../lib/smoothScroll";

const explore = [
  { label: "About Trinity", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Life at Trinity", href: "#life" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Mayange+Sector,+Bugesera,+Rwanda";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(248,206,90,0.1),transparent_38%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <Logo
              showWordmark
              light
              imageClassName="h-14 w-14"
              className="items-start"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-50/60">
              A community school in Mayange Sector, nurturing curious minds and
              confident hearts from nursery through primary.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Hard work", "Vision", "Information & technology"].map(
                (value) => (
                  <span
                    key={value}
                    className="rounded-full border border-cream-50/15 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-cream-50/55"
                  >
                    {value}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-300">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {explore.map((link) => (
                <li key={link.href}>
                  <SmoothLink
                    href={link.href}
                    className="text-sm text-cream-50/65 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-300">
              Visit
            </h3>
            <div className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-cream-50/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-300" />
              <p>
                Mayange Sector
                <br />
                Bugesera District
                <br />
                Rwanda
              </p>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cream-50/80 transition-colors hover:text-sun-300"
            >
              Get directions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <div className="mt-7 rounded-xl border border-cream-50/10 bg-cream-50/[0.03] p-4">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-cream-50/40">
                Curriculum
              </p>
              <p className="mt-1.5 text-xs text-cream-50/70">
                MINEDUC · Nursery & Primary
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-50/10 pt-7 text-[11px] text-cream-50/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Trinity Nursery & Primary School. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="hidden text-cream-50/35 sm:block">
              Small steps. Big dreams. Bright futures.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="font-semibold text-cream-50/70 transition-colors hover:text-sun-300"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
