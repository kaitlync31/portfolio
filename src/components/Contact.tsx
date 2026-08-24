const LINKS = [
  { label: "Email", href: "mailto:kaitlynchen2028@u.northwestern.edu" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com/kaitlync31" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-line px-6 py-24">
      <h2 className="font-serif text-4xl italic leading-tight text-ink sm:text-5xl">
        Want to build something?
      </h2>
      <p className="mt-5 max-w-md font-sans text-lg leading-8 text-stone">
        I&apos;m always happy to talk product, technology, research, dance,
        or anything interesting.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-sans text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:text-clay hover:decoration-clay"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
