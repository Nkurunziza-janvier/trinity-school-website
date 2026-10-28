import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Reveal>
        <p
          className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${
            centered ? "justify-center" : ""
          } ${light ? "text-sun-300" : "text-forest-600"}`}
        >
          <span
            className={`h-px w-8 ${light ? "bg-sun-400/70" : "bg-forest-400"}`}
          />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-5 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl ${
            light ? "text-cream-50" : "text-forest-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-pretty text-base leading-relaxed sm:text-[17px] ${
              light ? "text-cream-50/65" : "text-forest-900/65"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
