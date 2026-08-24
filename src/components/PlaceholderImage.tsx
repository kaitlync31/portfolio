export default function PlaceholderImage({
  label,
  caption,
  className = "",
  dark = false,
}: {
  label: string;
  caption?: string;
  className?: string;
  dark?: boolean;
}) {
  const stripe = dark
    ? "repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(247,243,236,0.12)_10px,rgba(247,243,236,0.12)_11px)"
    : "repeating-linear-gradient(135deg,transparent,transparent_10px,#e2dcd1_10px,#e2dcd1_11px)";

  return (
    <div
      className={`relative flex flex-col justify-end overflow-hidden border ${
        dark ? "border-cream/20" : "border-line"
      } ${className}`}
      style={{ backgroundImage: stripe }}
    >
      <span
        className={`absolute left-3 top-3 font-sans text-[10px] uppercase tracking-[0.14em] ${
          dark ? "text-cream/60" : "text-stone"
        }`}
      >
        {label}
      </span>
      {caption && (
        <span
          className={`relative px-3 py-2 font-sans text-xs italic ${
            dark ? "bg-ink/80 text-cream/70" : "bg-cream/90 text-stone"
          }`}
        >
          {caption}
        </span>
      )}
    </div>
  );
}
