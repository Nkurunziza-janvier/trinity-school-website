import { ArrowRight } from "./icons";
import { scrollToTarget } from "../lib/smoothScroll";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none";

const sizes = {
  md: "px-6 py-3.5",
  sm: "px-5 py-2.5",
};

const variants = {
  primary:
    "bg-forest-800 text-cream-50 shadow-[0_12px_30px_-14px_rgba(11,47,28,0.7)] hover:-translate-y-0.5 hover:bg-forest-700",
  sun: "bg-sun-400 text-forest-950 shadow-[0_12px_30px_-14px_rgba(239,183,46,0.8)] hover:-translate-y-0.5 hover:bg-sun-300",
  outline:
    "border border-forest-900/15 bg-white/60 text-forest-900 backdrop-blur hover:-translate-y-0.5 hover:border-forest-900/25 hover:bg-white",
  ghost: "text-forest-900 hover:bg-forest-900/5",
  light:
    "bg-cream-50 text-forest-950 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  arrow = true,
  onClick,
  type = "button",
  ...props
}) {
  const classes = `${base} ${sizes[size] ?? sizes.md} ${
    variants[variant] ?? variants.primary
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const isHash = href.startsWith("#");

    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => {
          if (isHash) {
            event.preventDefault();
            scrollToTarget(href);
          }
          onClick?.(event);
        }}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
