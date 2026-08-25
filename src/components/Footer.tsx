const CONTACT_LINKS = [
  { href: "mailto:kaitlynchen2028@u.northwestern.edu", label: "Email" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://github.com/kaitlync31", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 font-sans text-xs text-stone">
        <span>Kaitlyn Chen</span>
        <ul className="flex gap-6">
          {CONTACT_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
