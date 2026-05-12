import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand text-white/80">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/erbrecht-grundlagen" className="hover:text-accent transition-colors">Erbrecht Grundlagen</Link></li>
              <li><Link href="/erbschaftsteuer" className="hover:text-accent transition-colors">Erbschaftsteuer</Link></li>
              <li><Link href="/testament-formen" className="hover:text-accent transition-colors">Testament & Formen</Link></li>
              <li><Link href="/erbschein" className="hover:text-accent transition-colors">Erbschein beantragen</Link></li>
              <li><Link href="/nachlassabwicklung" className="hover:text-accent transition-colors">Nachlassabwicklung</Link></li>
              <li><Link href="/ratgeber" className="hover:text-accent transition-colors">Ratgeber</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-accent transition-colors">Datenschutzerklärung</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Über uns
            </h3>
            <p className="text-sm leading-relaxed">
              erbeportal.de informiert unabhängig über Erbrecht, Testament
              und Nachlassabwicklung — verständlich für alle, die erben oder
              vorsorgen möchten.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-white/40 text-center border-t border-white/10 pt-4 pb-2">
          Die Inhalte auf dieser Website dienen der allgemeinen Information und ersetzen keine Rechtsberatung.
        </p>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 erbeportal.de – Alle Rechte vorbehalten.</p>
          <a
            href="https://eritaj.de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Featured by ERITAJ
          </a>
        </div>
      </div>
    </footer>
  );
}
