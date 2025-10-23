
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-slate-700 transition hover:text-slate-900"
        >
          DS PORTFOLIO
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative transition hover:text-slate-900 ${
                  active ? "text-slate-900" : ""
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-slate-900 via-slate-500 to-transparent" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
