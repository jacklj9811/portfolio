
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import Services from "@/components/Services";
import projects from "@/content/projects.json";
import services from "@/content/services.json";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <Section title="Selected Projects" subtitle="Evidence-driven case studies with clear business impact.">
        <ProjectsGrid projects={projects.slice(0, 6)} />
      </Section>
      <Section title="Services" subtitle="From exploratory analysis to productionized models.">
        <Services items={services} />
      </Section>
    </div>
  );
}
