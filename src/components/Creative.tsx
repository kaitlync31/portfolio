import PlaceholderImage from "./PlaceholderImage";

const DISCIPLINES = [
  {
    label: "Dance & choreography",
    copy: "Seventeen years of dancing, most of them spent choreographing — building work on other people's bodies before it ever touches a stage.",
  },
  {
    label: "Writing",
    copy: "Started as a student journalist. Still happiest with a draft that's three revisions deep, looking for the exact right word.",
  },
  {
    label: "Design & visual experiments",
    copy: "Small, unshipped things — layout studies, typography tests, ideas that exist mostly to be looked at.",
  },
];

export default function Creative() {
  return (
    <section id="creative" className="scroll-mt-20 border-t border-line bg-ink py-24 text-cream">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream/70">
            Creative
          </h2>
          <p className="font-sans text-xs italic text-cream/40">Coming soon</p>
        </div>
      </div>

      <div className="relative mt-10 w-full">
        <PlaceholderImage
          label="Dance — full bleed"
          dark
          className="aspect-[16/9] w-full border-none sm:aspect-[21/9]"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 grid gap-10 sm:grid-cols-12">
          <p className="font-serif text-3xl italic leading-tight sm:col-span-6">
            I&apos;ve been dancing since I was three. I&apos;ve been
            choreographing almost as long.
          </p>
          <p className="font-sans text-lg leading-8 text-cream/70 sm:col-span-5 sm:col-start-8">
            I love the moment when something that only existed in my head
            becomes real on stage.
          </p>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-12 border-t border-cream/15 pt-14 sm:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <div key={d.label}>
              <p className="font-serif text-xl italic text-cream">{d.label}</p>
              <p className="mt-3 font-sans text-sm leading-6 text-cream/60">
                {d.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
