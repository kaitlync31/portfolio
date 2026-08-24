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

const FACTS = [
  "17 years dancing",
  "Former student journalist",
  "Loves finding the exact right word",
  "Currently learning / building something",
];

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A little more about me">
      <div className="grid gap-12 sm:grid-cols-12">
        <div className="space-y-5 font-sans text-base leading-8 text-stone sm:col-span-7">
          <p>
            Journalism kid, then CS + cognitive science student, now a
            product person in progress. The through-line has stayed the
            same the whole way — I want to know how people think, and I
            want to build the thing that meets them there.
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
          <Currently />
        </div>
        <ul className="space-y-4 border-l border-line pl-8 font-serif text-lg italic text-ink sm:col-span-4 sm:col-start-9">
          {FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
