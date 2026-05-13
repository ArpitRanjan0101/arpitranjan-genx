import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { SKILLS } from '@/utils/data'
import { fadeUp, stagger } from '@/animations/motion'

export default function Skills() {
  return (
    <section id="skills" className="pt-20 sm:pt-24">
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
          {SKILLS.map((s) => (
            <m.div
              key={s.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/[0.06]"
            >
              <div className="absolute -inset-16 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
              </div>
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-zinc-50">{s.name}</div>
                  <div className="mt-1 text-xs text-zinc-400">{s.level}</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 opacity-70" />
              </div>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  )
}

