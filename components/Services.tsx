
export default function Services({ items } : { items: any[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((s, i) => (
        <div
          key={i}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-6 shadow-[0_18px_48px_-32px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(15,23,42,0.48)]"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/55 via-transparent to-white/20 opacity-0 transition group-hover:opacity-100" />
          <div className="relative">
            <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.summary}</p>
          </div>
          <ul className="relative mt-5 space-y-2 text-sm text-slate-600">
            {s.points?.map((p: string, j: number) => (
              <li key={j} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400/70" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
