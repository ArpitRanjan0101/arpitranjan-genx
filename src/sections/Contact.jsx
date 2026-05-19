import { m } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import Button from '@/components/Button'
import SectionDivider from '@/components/SectionDivider'
import { fadeUp } from '@/animations/motion'

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-20 sm:pt-24 sm:pb-24">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something that feels expensive."
          subtitle="Reach out for freelance work, full-time roles, or collaborations."
        />

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
        >
          <GlassCard className="p-7">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="text-sm font-semibold text-zinc-50">Quick message</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  This is frontend-only. The button opens your email client with a pre-filled subject.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    href="mailto:hello@example.com?subject=Let%27s%20work%20together"
                    className="inline-flex"
                  >
                    Email me <FiMail className="opacity-80" />
                  </Button>
                  <Button
                    variant="ghost"
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Back to top <FiArrowUpRight className="opacity-80" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-black/25 p-5 ring-1 ring-white/10">
                  <div className="text-xs font-medium tracking-[0.18em] text-zinc-400">DETAILS</div>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">Email</span>
                      <a className="text-zinc-200 hover:text-white" href="mailto:hello@example.com">
                        hello@example.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">Location</span>
                      <span className="text-zinc-200">India (IST)</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">Availability</span>
                      <span className="text-zinc-200">Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </m.div>
      </Container>
    </section>
  )
}
