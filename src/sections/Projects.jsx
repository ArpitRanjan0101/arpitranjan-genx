import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { PROJECTS } from '@/utils/data'

export default function Projects() {
  return (
    <SectionFrame id="projects" className="py-24 sm:py-32">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="PROJECTS"
          title="Selected work that blends motion, depth, and clarity."
          subtitle="A small set of projects that highlight interactive UI, 3D accents, and performance-oriented execution."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Container>
    </SectionFrame>
  )
}
