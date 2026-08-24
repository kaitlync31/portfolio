import Section from "./Section";

const ESSAYS = [
  {
    title: "Can you gamify journalism without cheapening it?",
    dek: "On streaks, points, and what a news product owes its readers.",
  },
  {
    title: "What choreography taught me about product.",
    dek: "Both start with a blank floor and an idea no one else can see yet.",
  },
  {
    title: "Why users don't always know what they need.",
    dek: "Asking is research. Believing the answer is the mistake.",
  },
  {
    title: "What makes an experience feel premium?",
    dek: "It's rarely the thing you'd point to first.",
  },
  {
    title: "How should AI fit into products people already trust?",
    dek: "Trust is slow to build and fast to spend.",
  },
];

export default function Thinking() {
  return (
    <Section id="thinking" title="Things I'm thinking about">
      <ul className="divide-y divide-line border-t border-line">
        {ESSAYS.map((essay) => (
          <li key={essay.title}>
            <a
              href="#"
              className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="font-serif text-xl italic text-ink transition-colors group-hover:text-clay">
                {essay.title}
              </span>
              <span className="shrink-0 font-sans text-sm text-stone sm:text-right">
                {essay.dek}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
