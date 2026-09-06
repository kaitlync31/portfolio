const DISCIPLINES = [
  { label: "Dance & choreography" },
  { label: "Writing", href: "https://gunnoracle.com/staff_name/kaitlyn-chen/" },
  {
    label: "Design & visual experiments",
    href: "https://goofy-pen-616.notion.site/The-Oracle-Layout-Designs-259935e69d9a80c69c7ee24f1e24cd87?pvs=143",
  },
];

export default function Creative() {
  return (
    <section id="creative" className="scroll-mt-20 border-t border-line bg-ink py-24 text-cream">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream/70">
          Creative
        </h2>
      </div>

      <div className="relative mt-10 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/creative/dance-hero.jpg"
          alt="Three dancers mid-performance on stage under blue lighting, including Kaitlyn Chen"
          className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 grid gap-10 sm:grid-cols-12">
          <p className="font-serif text-3xl italic leading-tight sm:col-span-6">
            The lighting, the costumes, the choreography&hellip;
          </p>
          <p className="font-sans text-lg leading-8 text-cream/70 sm:col-span-6 sm:col-start-7">
            Dance has always been my outlet for creative expression.
            I&apos;ve been dancing for over seventeen years, and have
            choreographed over 50 dances for competitive teams, high school
            spirit weeks, and college showcases.
          </p>
        </div>

        <div className="mt-20 border-t border-cream/15 pt-14">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.14em] text-cream/50">
            A selection of my creative work
          </p>
          <div className="divide-y divide-cream/15">
            {DISCIPLINES.map((d) => {
              const content = (
                <>
                  <p className="font-serif text-2xl italic text-cream transition-colors group-hover:text-cream/70">
                    {d.label}
                  </p>
                  <span className="font-sans text-lg text-cream/40 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </>
              );
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6"
                >
                  {content}
                </a>
              ) : (
                <div key={d.label} className="group flex items-center justify-between py-6">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
