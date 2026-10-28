import logo from "../assets/logo.jpeg";

export default function Logo({
  imageClassName = "h-11 w-11",
  showWordmark = false,
  light = false,
  className = "",
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo}
        alt="Trinity Nursery & Primary School logo"
        className={`${imageClassName} shrink-0 rounded-xl bg-white object-contain p-0.5 shadow-sm ring-1 ring-forest-900/10`}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-[21px] font-semibold tracking-tight ${
              light ? "text-cream-50" : "text-forest-950"
            }`}
          >
            Trinity
          </span>
          <span
            className={`mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.2em] ${
              light ? "text-cream-50/65" : "text-forest-700/75"
            }`}
          >
            Nursery & Primary School
          </span>
        </span>
      )}
    </span>
  );
}
