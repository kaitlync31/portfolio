export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
      <h1 className="max-w-3xl font-serif text-[2.75rem] italic leading-[1.1] tracking-tight text-ink sm:text-6xl">
        Bringing the vision to{" "}
        <span className="relative inline-block">
          <span className="sr-only">life</span>
          <span aria-hidden="true">
            {"life".split("").map((letter, i) => (
              <span
                key={i}
                className="life-letter"
                style={{ "--i": i } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            className="life-underline pointer-events-none absolute -bottom-1 left-0 h-3 w-full overflow-visible"
          >
            <path
              d="M2 8 C 20 2, 40 12, 60 6 S 90 4, 98 7"
              pathLength={100}
              fill="none"
              stroke="var(--clay)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </span>
        .
      </h1>
      <p className="mt-7 max-w-lg font-sans text-lg leading-8 text-stone">
        I&apos;m a Computer Science + Cognitive Science student at
        Northwestern University fascinated by the intersections of people,
        information, art, and technology.
      </p>
      <a
        href="#collage"
        className="mt-12 inline-flex items-center gap-2 font-sans text-sm text-ink transition-colors hover:text-clay"
      >
        Explore my work
        <span className="animate-bounce">↓</span>
      </a>
    </section>
  );
}
