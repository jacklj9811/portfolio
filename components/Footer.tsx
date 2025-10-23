
import site from "@/content/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-500 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span>Stay Connected</span>
          <span className="h-px w-16 bg-gradient-to-r from-slate-400/50 to-transparent" />
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.name}. Crafted with analytical rigor.
          </p>
          <div className="flex flex-wrap gap-4">
            {site.social?.map((s: any) => (
              <a key={s.href} href={s.href} className="transition hover:text-slate-700" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
