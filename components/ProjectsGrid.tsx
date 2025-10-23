
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects } : { projects: any[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => <ProjectCard p={p} key={i} />)}
    </div>
  )
}
