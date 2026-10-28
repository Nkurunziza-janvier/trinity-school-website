import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import SmoothLink from "./SmoothLink";
import { ArrowRight, CloseIcon, MapPin, MenuIcon } from "./icons";
import {
  pauseSmoothScroll,
  resumeSmoothScroll,
  scrollToTarget,
  scrollToTop,
} from "../lib/smoothScroll";

const links = [
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Life at Trinity", href: "#life" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef(null);
  const closeRef = useRef(null);

  const closeAndGo = (href) => {
    setOpen(false);
    window.setTimeout(() => scrollToTarget(href), 60);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    pauseSmoothScroll();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      resumeSmoothScroll();
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="bg-forest-900 text-cream-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5 lg:px-10">
          <p className="flex items-center gap-2.5 text-[11px] font-medium tracking-wide text-cream-50/85 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-400" />
            Admissions are open — new learners are always welcome.
          </p>
          <SmoothLink
            href="#admissions"
            className="hidden items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sun-300 transition-colors hover:text-sun-200 sm:inline-flex"
          >
            Start here
            <ArrowRight className="h-3.5 w-3.5" />
          </SmoothLink>
        </div>
      </div>

      <header className="sticky top-0 z-50">
        <div
          className={`border-b transition-all duration-300 ${
            scrolled
              ? "border-forest-900/10 bg-cream-50/90 shadow-[0_10px_40px_-24px_rgba(7,35,19,0.35)] backdrop-blur-xl"
              : "border-transparent bg-cream-50/70 backdrop-blur-md"
          }`}
        >
          <nav
            className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10"
            aria-label="Main navigation"
          >
            <a
              href="#top"
              className="rounded-xl"
              aria-label="Trinity Nursery and Primary School — home"
              onClick={(event) => {
                event.preventDefault();
                scrollToTop();
              }}
            >
              <Logo showWordmark />
            </a>

            <ul className="hidden items-center gap-0.5 xl:flex">
              {links.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <SmoothLink
                      href={link.href}
                      className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                        isActive
                          ? "text-forest-950"
                          : "text-forest-900/60 hover:text-forest-950"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-forest-600 transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </SmoothLink>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2.5">
              <div className="hidden sm:block">
                <Button href="#admissions" size="sm" className="text-[13px]">
                  Apply now
                </Button>
              </div>
              <button
                ref={toggleRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/15 bg-white/60 text-forest-950 transition-colors hover:bg-white xl:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className="animate-menu-in fixed inset-0 z-[60] flex h-dvh flex-col bg-cream-50 xl:hidden"
        >
          <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-forest-900/10 px-6">
            <Logo showWordmark />
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-950"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-8"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      closeAndGo(link.href);
                    }}
                    className="flex items-center justify-between border-b border-forest-900/10 py-4 font-serif text-3xl font-medium text-forest-950 transition-colors hover:text-forest-600"
                  >
                    {link.label}
                    <span className="text-xs font-sans font-semibold tracking-[0.2em] text-forest-400">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-5">
              <Button
                onClick={() => closeAndGo("#admissions")}
                className="w-full"
              >
                Apply for admission
              </Button>
              <p className="flex items-center gap-2 text-xs text-forest-800/70">
                <MapPin className="h-4 w-4 text-forest-600" />
                Mayange Sector, Bugesera, Rwanda
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
