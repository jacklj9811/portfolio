
export default function ProjectCard({ p } : { p: any }) {
  return (
    <a href={p.href || "#"} className="block rounded-2xl border p-4 hover:shadow-sm transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{p.title}</h3>
        <div className="text-xs px-2 py-1 rounded bg-gray-100">{p.domain}</div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{p.summary}</p>
      <ul className="text-sm mt-3 list-disc pl-5 space-y-1">
        {p.highlights?.map((h: string, i: number) => <li key={i}>{h}</li>)}
      </ul>
      <div className="flex gap-2 mt-3 flex-wrap">
        {p.stack?.map((s: string, i: number) => <span key={i} className="text-xs text-gray-600 border rounded px-2 py-1">{s}</span>)}
      </div>
      {p.metrics && (
        <div className="mt-3 text-sm text-gray-700">
          <strong>Impact:</strong> {p.metrics}
        </div>
      )}
    </a>
  )
}
