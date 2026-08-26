const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#creative", label: "Creative" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="/" className="font-serif text-lg tracking-tight text-ink">
          Kaitlyn Chen
        </a>
        <ul className="flex items-center gap-7 font-sans text-[13px] uppercase tracking-[0.08em] text-stone">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
