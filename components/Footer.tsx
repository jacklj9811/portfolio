
import site from "@/content/site.json";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {site.social?.map((s: any) => (
              <a key={s.href} href={s.href} className="hover:text-gray-800" target="_blank">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
