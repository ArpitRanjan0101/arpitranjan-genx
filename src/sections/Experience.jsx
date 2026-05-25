import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { EXPERIENCE } from '@/utils/data'
import { fadeUp, stagger } from '@/animations/motion'

export default function Experience() {
  return (
    <SectionFrame id="experience" className="py-24 sm:py-32">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Building product-grade UI with craft and velocity."
          subtitle="Shipping interfaces that feel premium, stay maintainable, and perform under real-world constraints."
        />

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
          className="grid gap-4"
        >
          {EXPERIENCE.map((e) => (
            <m.div key={e.role + e.company} variants={fadeUp}>
              <GlassCard>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-zinc-50">{e.role}</div>
                    <div className="mt-1 text-sm text-zinc-300">{e.company}</div>
                  </div>
                  <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
                    {e.period}
                  </div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </m.div>
          ))}
        </m.div>
      </Container>
    </SectionFrame>
  )
}
