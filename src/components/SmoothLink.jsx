import { scrollToTarget } from "../lib/smoothScroll";

export default function SmoothLink({
  href,
  children,
  onClick,
  className = "",
  ...rest
}) {
  const isHash = href?.startsWith("#");

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (isHash) {
          event.preventDefault();
          scrollToTarget(href);
        }
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
