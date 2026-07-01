import type { PortfolioProject } from "@/constants/types"
import { ProjectCard } from "@/components/portfolio/project-card"

type ProjectGalleryProps = {
  projects: PortfolioProject[]
}

export const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  return (
    <aside
      aria-label="Selected projects"
      className="overflow-hidden bg-page-black px-framer-5 pt-[17px] pb-framer-5 md:h-dvh md:w-1/2 md:pl-0 lg:w-2/3"
    >
      <div className="no-scrollbar flex gap-framer-2 overflow-x-auto pb-framer-2 md:hidden">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            className="w-[280px]"
            isPriority={index === 0}
          />
        ))}
      </div>

      <div className="no-scrollbar hidden h-full auto-rows-max gap-framer-2 overflow-y-auto md:grid md:grid-cols-2">
        {projects
          .sort((a, b) => a.order - b.order)
          .map((project, index) => (
            <div
              key={project.slug}
              className={project.col === 2 ? "md:col-span-2" : "md:col-span-1"}
            >
              <ProjectCard
                project={project}
                isPriority={index === 0}
              />
            </div>
          ))}
      </div>
    </aside>
  )
}
