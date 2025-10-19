
export default function Section({ title, subtitle, children } : { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
