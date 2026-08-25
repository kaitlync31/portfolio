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
      "Leading office hours and code reviews to help 90+ students learn programming in C/C++.",
  },
  {
    title: "VP Professional Development",
    org: "Ascend Consulting Group",
    theme: "Training",
    description:
      "Designed a six-week training program for 40+ new members to prepare them for real client engagements.",
  },
  {
    title: "Junior Board Member",
    org: "Northwestern Women in Computing",
    theme: "Building community",
    description:
      "Planning events to build community and support for women in tech on campus.",
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
            <p className="mt-4 font-sans text-lg text-ink">{role.description}</p>
            <p className="mt-4 font-sans text-sm text-stone">
              {role.title} · {role.org}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
