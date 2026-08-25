export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
      <p className="mb-6 font-sans text-xs uppercase tracking-[0.16em] text-stone">
        Product · Research · Design · Engineering
      </p>
      <h1 className="max-w-3xl font-serif text-[2.75rem] italic leading-[1.1] tracking-tight text-ink sm:text-6xl">
        I like bringing the vision to life.
      </h1>
      <p className="mt-7 max-w-lg font-sans text-lg leading-8 text-stone">
        I&apos;m a computer science + cognitive science student exploring the
        intersection of technology, human behavior, and product.
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
