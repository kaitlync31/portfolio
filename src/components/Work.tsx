import Link from "next/link";
import Section from "./Section";
import PlaceholderImage from "./PlaceholderImage";

type SupportingProject = {
  number: string;
  title: string;
  tags: string;
  description: string;
  href?: string;
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
  },
  {
    number: "05",
    title: "AI Safety Research",
    tags: "Research · AI",
    description: "Case study coming soon.",
  },
];

const MORE_PROJECTS = [
  "On Task",
  "Group Dining",
  "Japanese Quiz Generator",
  "Careon",
];

function SupportingCard({ project }: { project: SupportingProject }) {
  const content = (
    <>
      <p className="font-sans text-xs text-stone-light">{project.number}</p>
      <h4 className="mt-2 font-serif text-xl text-ink transition-colors group-hover:text-clay">
        {project.title}
      </h4>
      <p className="mt-1 font-sans text-xs uppercase tracking-[0.1em] text-stone">
        {project.tags}
      </p>
      <p className="mt-4 font-sans text-sm leading-6 text-stone">
        {project.description}
      </p>
    </>
  );

  if (project.href) {
    return (
      <Link href={project.href} className="group block">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}

export default function Work() {
  return (
    <Section id="work" title="Work" subtitle="Products, research, and things I've built.">
      <Link href="/work/wsj-challenges" className="group block">
        <PlaceholderImage
          label="WSJ Challenges"
          caption="Product walkthrough"
          className="aspect-[16/7] w-full"
        />
        <div className="mt-6 grid gap-6 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-clay">
              Product Design · Research · UX
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-tight text-ink group-hover:text-clay transition-colors">
              WSJ Challenges
            </h3>
            <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-stone">
              Starting with an open-ended engagement problem, I researched
              consumer behavior and competitors, identified an opportunity
              around guided reading, and led the concept from zero → beta in
              collaboration with product, design, engineering, newsroom, and
              data analytics.
            </p>
          </div>
          <div className="flex items-end sm:col-span-4 sm:justify-end">
            <span className="font-sans text-sm text-ink group-hover:text-clay transition-colors">
              View case study →
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-20 grid gap-x-12 gap-y-14 border-t border-line pt-14 sm:grid-cols-2">
        {SUPPORTING.map((project) => (
          <SupportingCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-14">
        <p className="mb-2 font-sans text-xs uppercase tracking-[0.14em] text-stone">
          More projects
        </p>
        <ul className="divide-y divide-line">
          {MORE_PROJECTS.map((title) => (
            <li
              key={title}
              className="flex items-baseline justify-between gap-8 py-4 font-serif text-lg text-ink"
            >
              <span>{title}</span>
              <span className="font-sans text-xs italic text-stone-light">
                details coming
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
