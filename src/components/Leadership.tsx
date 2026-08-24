import Section from "./Section";

type Role = {
  title: string;
  org: string;
  theme: string;
  description: string;
};

const ROLES: Role[] = [
  {
    title: "Undergraduate Teaching Assistant",
    org: "CS 211",
    theme: "Teaching",
    description:
      "Helping students make sense of difficult programming concepts.",
  },
  {
    title: "VP Professional Development",
    org: "Kappa Theta Pi",
    theme: "Building community",
    description: "Training 40+ members for real client engagements.",
  },
  {
    title: "Junior Board",
    org: "Women in Computing",
    theme: "Making space",
    description:
      "Building a place where women in tech at Northwestern find each other early.",
  },
];

export default function Leadership() {
  return (
    <Section
      id="leadership"
      title="Leadership"
      subtitle="I like building with people — and helping them become better at it."
    >
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-3">
        {ROLES.map((role) => (
          <div key={role.title}>
            <p className="font-serif text-xl italic text-clay">{role.theme}</p>
            <p className="mt-4 font-sans text-lg text-ink">
              &ldquo;{role.description}&rdquo;
            </p>
            <p className="mt-4 font-sans text-sm text-stone">
              {role.title} · {role.org}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
