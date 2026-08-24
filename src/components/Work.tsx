import Link from "next/link";
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
    title: "KNN Dashboard",
    tags: "Product · Leadership · Execution",
    description:
      "Inherited a stalled nonprofit-data project with eight weeks left. Rebuilt how the team worked, learned a new stack, and shipped an interactive dashboard covering 21,000+ organizations.",
    href: "/work/knn-dashboard",
  },
  {
    number: "03",
    title: "DTR Research",
    tags: "HCI · Research · AI",
    description:
      "Why do experts abandon disruptive ideas? Ongoing research into the emotional — not just cognitive — barriers to innovation, and three LLM-powered systems built to test the difference.",
    href: "/work/dtr-research",
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
      <Link href="/work/wsj-challenges" className="group block">
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
      </Link>

      <div className="mt-20 grid gap-x-8 gap-y-14 border-t border-line pt-14 sm:grid-cols-3">
        {SUPPORTING.map((project) => (
          <Link key={project.title} href={project.href} className="group block">
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
          </Link>
        ))}
      </div>
    </Section>
  );
}
