
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
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">DS Portfolio</Link>
        <div className="flex gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "font-medium" : "text-gray-600 hover:text-gray-900"}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
