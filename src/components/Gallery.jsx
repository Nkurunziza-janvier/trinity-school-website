import team from "../assets/team.jpg";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const images = [
  {
    src: team,
    alt: "Trinity teaching team standing together outside the administration office",
    label: "Our people",
  },
  {
    src: "/ezgif-frame-045.jpg",
    alt: "Learners taking part in morning assembly at Trinity",
    label: "Morning assembly",
  },
  {
    src: "/ezgif-frame-120.jpg",
    alt: "Trinity pupils practising a group routine together",
    label: "Learning together",
  },
  {
    src: "/ezgif-frame-210.jpg",
    alt: "Children moving together during a school activity",
    label: "Movement & play",
  },
  {
    src: "/ezgif-frame-285.jpg",
    alt: "The Trinity school community gathered on the campus grounds",
    label: "School community",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative border-y border-forest-900/10 bg-cream-100/60 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Life at Trinity"
            title="Real moments. Real community."
            description="A glimpse of everyday life on our campus in Mayange — from morning assembly to the small, everyday moments that make Trinity feel like home."
          />
          <Reveal delay={160}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-600">
              Mayange Sector · Bugesera
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[210px]">
          <Reveal className="col-span-2 lg:row-span-2">
            <figure className="group relative h-full min-h-[260px] overflow-hidden rounded-2xl bg-forest-100 lg:min-h-full">
              <img
                src={images[0].src}
                alt={images[0].alt}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/60 via-forest-950/0 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-xs font-semibold text-cream-50">
                {images[0].label}
              </figcaption>
            </figure>
          </Reveal>

          {images.slice(1).map((image, index) => (
            <Reveal key={image.src} delay={(index + 1) * 90}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest-100 lg:aspect-auto lg:h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/60 via-forest-950/0 to-transparent" />
                <figcaption className="absolute bottom-3.5 left-3.5 text-[11px] font-semibold text-cream-50">
                  {image.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
