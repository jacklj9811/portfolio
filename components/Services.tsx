
export default function Services({ items } : { items: any[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((s, i) => (
        <div key={i} className="rounded-2xl border p-4">
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{s.summary}</p>
          <ul className="text-sm mt-3 list-disc pl-5 space-y-1">
            {s.points?.map((p: string, j: number) => <li key={j}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
