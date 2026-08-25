import Section from "./Section";
import Currently from "./Currently";

const INTERESTS = [
  "AI",
  "HCI",
  "Fintech",
  "Productivity",
  "Information",
  "Human behavior",
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
          <Currently />
        </div>
        <div className="border-l border-line pl-8 sm:col-span-4 sm:col-start-9">
          <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink">
            Currently interested in
          </p>
          <p className="mt-3 font-sans text-xs uppercase tracking-[0.1em] leading-6 text-stone">
            {INTERESTS.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
