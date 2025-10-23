
export default function Section({ title, subtitle, children } : { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
          {subtitle && <p className="max-w-2xl text-base text-slate-500">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
