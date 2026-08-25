import Section from "./Section";
import PlaceholderImage from "./PlaceholderImage";

const INTERESTS = [
  "Human-Centered AI",
  "Fintech",
  "Productivity",
  "Figma Make",
  "Adaptive UI",
  "Excel Shortcuts",
];

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A little more about me">
      <div className="grid gap-12 sm:grid-cols-12">
        <div className="space-y-5 font-sans text-base leading-8 text-stone sm:col-span-7">
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
        <div className="sm:col-span-4 sm:col-start-9">
          <PlaceholderImage
            label="Portrait"
            className="aspect-[4/5] w-full"
          />
        </div>
      </div>
    </Section>
  );
}
