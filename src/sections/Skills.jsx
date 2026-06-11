import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { SKILLS } from '@/utils/data'
import { fadeUp, stagger } from '@/animations/motion'

const skillVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <SectionFrame id="skills" className="py-24 sm:py-32">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="SKILLS"
          title="A focused toolkit for modern web experiences."
          subtitle="Strong fundamentals, premium motion, and a healthy respect for performance budgets."
        />

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SKILLS.map((s, i) => (
            <m.div
              key={s.name}
              variants={skillVariant}
              custom={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:ring-white/20 will-change-transform"
            >
              <div className="absolute -inset-16 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-xl" />
              </div>

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-zinc-50 transition group-hover:text-white">{s.name}</div>
                  <div className="mt-1 text-xs text-zinc-400 transition group-hover:text-zinc-300">{s.level}</div>
                </div>
                <m.div
                  className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 opacity-70 transition group-hover:opacity-100"
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />
              </div>
            </m.div>
          ))}
        </m.div>
      </Container>
    </SectionFrame>
  )
}

