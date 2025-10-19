
import Image from "next/image";
import site from "@/content/site.json";
import about from "@/content/about.md";

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto prose">
        <div className="flex items-center gap-4 mb-6">
          <Image src="/avatar.jpg" alt="avatar" width={72} height={72} className="rounded-full" />
          <div>
            <h1 className="m-0">{site.name}</h1>
            <p className="text-sm text-gray-600 m-0">{site.tagline}</p>
          </div>
        </div>
        <article dangerouslySetInnerHTML={{ __html: about.html }} />
      </div>
    </div>
  );
}
