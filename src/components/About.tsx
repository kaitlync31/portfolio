import Section from "./Section";

const INTERESTS = [
  "Human-Centered AI",
  "Fintech",
  "Figma Make",
  "Adaptive UI",
  "Claude Monet",
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 sm:grid-cols-12 sm:gap-x-10">
        <div className="space-y-5 font-sans text-base leading-[1.8rem] text-stone sm:col-span-7">
          <p>
            Originally from the Bay Area, I&apos;m a rising junior at
            Northwestern studying Computer Science and Cognitive Science
            with a minor in Business Institutions. I have experience across
            product, design, software, and research, from early-stage
            startups to products serving millions of subscribers.
          </p>
          <p>
            I&apos;m particularly interested in the intersection of these
            areas and the ever-so-exciting field of AI, as I believe it
            opens up so many opportunities to improve user experiences and
            expand what we&apos;re capable of creating. I plan to continue
            building and exploring at these intersections and hope to
            pursue a career in product after graduation.
          </p>
          <div className="pt-2">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink">
              Currently interested in
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <li
                  key={interest}
                  className="border border-line px-3 py-1 font-sans text-xs text-stone"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[16rem] sm:col-span-5 sm:col-start-8 sm:mx-0 sm:max-w-none lg:self-stretch">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border border-line lg:h-full lg:w-auto">
            {/* Blurred backdrop fills the edges so the portrait can sit zoomed out */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-150 object-cover object-[50%_25%] blur-2xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt="Portrait of Kaitlyn Chen"
              className="relative h-full w-full scale-[0.86] object-cover object-[50%_25%] [mask-image:radial-gradient(closest-side,#000_88%,transparent)]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
