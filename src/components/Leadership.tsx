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
    org: "Ascend Consulting Group",
    theme: "Training",
    description:
      "Designed a six-week training program for 40+ new members, then kept them growing through mentorship and professional events.",
  },
  {
    title: "Junior Board Member",
    org: "Northwestern Women in Computing",
    theme: "Making space",
    description:
      "Planning workshops, speaker series, and networking nights that make tech feel less unfamiliar for the women pursuing it.",
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
