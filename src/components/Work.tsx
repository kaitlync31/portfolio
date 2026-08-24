import Section from "./Section";
import PlaceholderImage from "./PlaceholderImage";

type SupportingProject = {
  number: string;
  title: string;
  tags: string;
  description: string;
  href: string;
};

const SUPPORTING: SupportingProject[] = [
  {
    number: "02",
    title: "DTR Research",
    tags: "HCI · Research · Design",
    description:
      "A study on ambiguity in early-stage products — what happens when the thing you're designing doesn't have a name yet.",
    href: "#",
  },
  {
    number: "03",
    title: "KNN Dashboard",
    tags: "Product · Design · Engineering",
    description:
      "An internal tool nobody asked for by name, built after watching a team lose an hour a day to a problem they'd stopped noticing.",
    href: "#",
  },
  {
    number: "04",
    title: "Coverd",
    tags: "Product · User Research",
    description:
      "Early-stage product strategy and go-to-market for a startup finding out whether its first idea was the right one.",
    href: "#",
  },
];

export default function Work() {
  return (
    <Section id="work" title="Work" subtitle="Products, research, and things I've built.">
      <a href="#" className="group block">
        <PlaceholderImage
          label="WSJ Challenges"
          caption="Product walkthrough"
          className="aspect-[16/10] w-full"
        />
        <div className="mt-6 grid gap-6 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-clay">
              Product Design · Research · UX
            </p>
            <h3 className="mt-3 font-serif text-3xl italic leading-tight text-ink group-hover:text-clay transition-colors">
              Can you make reading the news a habit?
            </h3>
            <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-stone">
              Starting with an open-ended engagement problem, I researched
              consumer behavior and competitors, identified an opportunity
              around guided reading, and helped take the concept from zero →
              beta with product, design, engineering, newsroom, and
              marketing.
            </p>
          </div>
          <div className="flex items-end sm:col-span-4 sm:justify-end">
            <span className="font-sans text-sm text-ink group-hover:text-clay transition-colors">
              View case study →
            </span>
          </div>
        </div>
      </a>

      <div className="mt-20 grid gap-x-8 gap-y-14 border-t border-line pt-14 sm:grid-cols-3">
        {SUPPORTING.map((project) => (
          <a key={project.title} href={project.href} className="group block">
            <p className="font-sans text-xs text-stone-light">{project.number}</p>
            <h4 className="mt-2 font-serif text-xl text-ink group-hover:text-clay transition-colors">
              {project.title}
            </h4>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.1em] text-stone">
              {project.tags}
            </p>
            <p className="mt-4 font-sans text-sm leading-6 text-stone">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
