import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { EXPERIENCE } from '@/utils/data'
import { stagger } from '@/animations/motion'

const experienceVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/30 via-indigo-500/10 to-transparent hidden lg:block" />

          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
            className="grid gap-4"
          >
            {EXPERIENCE.map((e, i) => (
              <m.div key={e.role + e.company} variants={experienceVariant} custom={i} whileHover={{ y: -2 }}>
                <div className="flex items-start gap-4 lg:gap-8">
                  {/* Timeline dot */}
                  <m.div
                    className="relative hidden lg:flex lg:flex-col lg:items-center lg:justify-center flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
                  >
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 bg-indigo-500 rounded-full" />
                      <m.div
                        className="absolute inset-0 bg-indigo-400 rounded-full"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, delay: i * 0.12 + 0.4, repeat: Infinity }}
                      />
                    </div>
                  </m.div>

                  {/* Experience card */}
                  <div className="flex-1 min-w-0">
                    <GlassCard className="group relative transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.08)]">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <m.div
                            className="text-base font-semibold text-zinc-50 group-hover:text-white transition"
                            whileHover={{ x: 4 }}
                          >
                            {e.role}
                          </m.div>
                          <m.div
                            className="mt-1 text-sm text-zinc-300 group-hover:text-zinc-200 transition"
                            whileHover={{ x: 2 }}
                          >
                            {e.company}
                          </m.div>
                        </div>
                        <m.div
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/20 transition"
                          whileHover={{ scale: 1.05 }}
                        >
                          {e.period}
                        </m.div>
                      </div>
                      <m.ul
                        className="mt-4 grid gap-2 text-sm text-zinc-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.2, duration: 0.4 }}
                      >
                        {e.points.map((p, idx) => (
                          <m.li
                            key={p}
                            className="flex gap-2 group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 + 0.2 + idx * 0.06, duration: 0.4 }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400 opacity-70 group-hover/item:opacity-100 transition group-hover/item:scale-125" />
                            <span className="leading-relaxed group-hover/item:text-zinc-200 transition">{p}</span>
                          </m.li>
                        ))}
                      </m.ul>
                    </GlassCard>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </Container>
    </SectionFrame>
  )
}
