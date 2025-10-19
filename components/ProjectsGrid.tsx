
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects } : { projects: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((p, i) => <ProjectCard p={p} key={i} />)}
    </div>
  )
}
