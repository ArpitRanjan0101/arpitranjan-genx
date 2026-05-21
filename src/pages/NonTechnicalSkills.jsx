import React, { useMemo } from 'react'
import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import SectionDivider from '@/components/SectionDivider'
import { fadeUp, stagger } from '@/animations/motion'

export default function NonTechnicalSkills({ skills = [], title, subtitle }) {
  // Use provided skills or default placeholders
  const displaySkills = useMemo(() => {
    if (skills && skills.length > 0) return skills
    return [
      { name: 'Leadership & Mentoring', level: 'Advanced', desc: 'Guiding teams and fostering growth.' },
      { name: 'Agile Methodologies', level: 'Expert', desc: 'Scrum, Kanban, and iterative delivery.' },
      { name: 'Communication', level: 'Advanced', desc: 'Clear, concise technical and non-technical comms.' },
      { name: 'Problem Solving', level: 'Expert', desc: 'Analytical thinking and creative solutions.' },
      { name: 'Time Management', level: 'Advanced', desc: 'Prioritizing tasks and meeting deadlines.' },
      { name: 'Adaptability', level: 'Expert', desc: 'Thriving in fast-paced, changing environments.' },
    ]
  }, [skills])

  const displayTitle = title || 'Beyond the code.'
  const displaySubtitle = subtitle || 'Essential soft skills that drive team success, foster collaboration, and ensure smooth project delivery.'

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="NON-TECHNICAL SKILLS"
          title={displayTitle}
          subtitle={displaySubtitle}
        />

        <m.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {displaySkills.map((s, i) => (
            <m.div
              key={s.name || i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/[0.08] hover:ring-white/20"
            >
              <div className="absolute -inset-24 opacity-0 transition duration-700 group-hover:opacity-100 pointer-events-none">
                <div className="absolute inset-0 rotate-45 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
              </div>
              <div className="relative flex flex-col h-full gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-lg font-semibold text-zinc-50">{s.name}</div>
                  <div className="h-2 w-2 mt-2 rounded-full bg-gradient-to-br from-fuchsia-400 to-indigo-400 opacity-80" />
                </div>
                <div className="text-xs font-medium text-indigo-300">{s.level}</div>
                <div className="mt-2 text-sm text-zinc-400 leading-relaxed">{s.desc}</div>
              </div>
            </m.div>
          ))}
        </m.div>
      </Container>
    </div>
  )
}
