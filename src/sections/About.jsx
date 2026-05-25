import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { fadeUp, stagger } from '@/animations/motion'

export default function About() {
  return (
    <SectionFrame id="about" className="pt-20 sm:pt-24">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="ABOUT"
          title="Design-minded engineering with a motion-first edge."
          subtitle="I blend clean component architecture with premium interaction design—micro-interactions, scroll choreography, and lightweight 3D—while staying performance obsessed."
        />

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {[
            {
              t: 'Motion Systems',
              d: 'Reusable motion variants, timing curves, and hover depth for consistent UX.',
            },
            {
              t: 'Performance',
              d: 'Optimized rendering, lazy loading, and animation discipline for smoothness.',
            },
            {
              t: 'Premium UI',
              d: 'Glass, gradients, blur, and typography tuned for a modern, minimal feel.',
            },
          ].map((c) => (
            <m.div key={c.t} variants={fadeUp}>
              <GlassCard className="h-full">
                <div className="text-sm font-semibold text-zinc-50">{c.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{c.d}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                <p className="mt-4 text-xs text-zinc-400">
                  Built with React + Tailwind + motion tooling.
                </p>
              </GlassCard>
            </m.div>
          ))}
        </m.div>
      </Container>
    </SectionFrame>
  )
}
