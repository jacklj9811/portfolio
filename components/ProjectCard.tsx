
export default function ProjectCard({ p } : { p: any }) {
  return (
    <a
      href={p.href || "#"}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-6 shadow-[0_20px_55px_-38px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.5)]"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
        {p.domain && (
          <div className="rounded-full border border-white/60 bg-slate-100/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            {p.domain}
          </div>
        )}
      </div>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{p.summary}</p>
      <ul className="relative mt-5 space-y-2 text-sm text-slate-600">
        {p.highlights?.map((h: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400/70" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {p.stack?.length > 0 && (
        <div className="relative mt-6 flex flex-wrap gap-2">
          {p.stack.map((s: string, i: number) => (
            <span
              key={i}
              className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-500"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      {p.metrics && (
        <div className="relative mt-6 text-sm font-medium text-slate-700">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Impact</span>
          <p className="mt-2 text-slate-600">{p.metrics}</p>
        </div>
      )}
    </a>
  )
}
