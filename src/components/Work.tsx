import Link from "next/link";
import Section from "./Section";

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
    title: "Nonprofit Data Dashboard",
    tags: "Product · Engineering · Leadership",
    description:
      "An interactive dashboard for Kentucky Nonprofit Network to help visualize the economic impact of the nonprofit sector.",
    href: "/work/knn-dashboard",
  },
  {
    number: "03",
    title: "DTR Research",
    tags: "HCI · Research · Innovation",
    description:
      "Ongoing undergraduate research on why experts abandon disruptive innovations and how AI can help them overcome their fears.",
    href: "/work/dtr-research",
  },
  {
    number: "04",
    title: "Coverd",
    tags: "Product · User Research",
    description:
      "A deep dive into finance apps, gambling, and the fine line between a startup and a scam in the eyes of money-conscious college users.",
    href: "/work/coverd",
  },
  {
    number: "05",
    title: "AI Safety Research",
    tags: "Research · NLP · ML",
    description:
      "An intensive learning experience on machine learning models, data processing, and AI safety through assisting a PhD student in his research.",
    href: "/work/ai-safety-research",
  },
];

const MORE_PROJECTS = [
  "CareOn Platform",
  "OnTask",
  "Group Dining Recommender",
  "Japanese Quiz Generator",
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
        <div className="aspect-[16/7] w-full overflow-hidden border border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/work/wsj-challenges-hero.png"
            alt="Three WSJ Beta app screens: the Get to Know WSJ challenge entry point, the daily checklist, and the completion screen"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-clay">
              Product · UX · Strategy
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-tight text-ink group-hover:text-clay transition-colors">
              WSJ Challenges
            </h3>
            <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-stone">
              Starting with an open-ended engagement problem, I researched
              consumer behavior and competitors, identified an opportunity
              around guided reading, and drove the concept from zero → beta
              in collaboration with product, design, engineering, newsroom,
              and data analytics.
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
                coming soon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
