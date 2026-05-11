"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/erbrecht-grundlagen", label: "Erbrecht" },
  { href: "/erbschaftsteuer", label: "Erbschaftsteuer" },
  { href: "/testament-formen", label: "Testament" },
  { href: "/erbschein", label: "Erbschein" },
  { href: "/nachlassabwicklung", label: "Nachlassabwicklung" },
  { href: "/ratgeber", label: "Ratgeber" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"
        >
          <span className="text-accent">⚖</span>
          erbeportal.de
        </Link>

        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-brand border-t border-white/10 px-4 pb-4 flex flex-col gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/80 hover:text-accent transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
