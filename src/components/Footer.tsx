const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#creative", label: "Creative" },
  { href: "/#about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 font-sans text-xs text-stone">
        <span>Kaitlyn Chen</span>
        <ul className="flex gap-6 uppercase tracking-[0.08em]">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
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
