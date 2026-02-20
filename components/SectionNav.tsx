const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
];

export function SectionNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/10 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <a href="#home" className="font-display text-base tracking-[0.2em] text-amber-200 md:text-lg">
          HECUBA 555
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-zinc-300 md:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-amber-200 focus-visible:text-amber-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
