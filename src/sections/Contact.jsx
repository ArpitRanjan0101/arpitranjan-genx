import { m } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import Button from '@/components/Button'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { fadeUp } from '@/animations/motion'

const contactItemVariant = {
  hidden: { opacity: 0, x: 20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function Contact() {
  return (
    <SectionFrame id="contact" className="py-24 sm:py-32">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="CONTACT"
          title="Lets build something that feels expensive."
          subtitle="Reach out for freelance work, full-time roles, or collaborations."
        />

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
        >
          <GlassCard className="p-7 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.08)]">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <m.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-sm font-semibold text-zinc-50">Quick message</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  This is frontend-only. The button opens your email client with a pre-filled subject.
                </p>
                <m.div
                  className="mt-5 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      href="mailto:hello@example.com?subject=Let%27s%20work%20together"
                      className="inline-flex"
                    >
                      Email me <FiMail className="opacity-80" />
                    </Button>
                  </m.div>
                  <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                  </m.div>
                </m.div>
              </m.div>

              <m.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="rounded-2xl bg-black/25 p-5 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:bg-black/30">
                  <div className="text-xs font-medium tracking-[0.18em] text-zinc-400 uppercase">Details</div>
                  <div className="mt-4 grid gap-3 text-sm">
                    {[
                      { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
                      { label: 'Location', value: 'India (IST)' },
                      { label: 'Availability', value: 'Open' },
                    ].map((item, i) => (
                      <m.div
                        key={item.label}
                        variants={contactItemVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={i}
                        className="flex items-center justify-between gap-4 group"
                      >
                        <span className="text-zinc-400 group-hover:text-zinc-300 transition">{item.label}</span>
                        {item.href ? (
                          <a
                            className="text-zinc-200 hover:text-white transition hover:underline"
                            href={item.href}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <m.span
                            className="text-zinc-200 group-hover:text-white transition"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item.value}
                          </m.span>
                        )}
                      </m.div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </GlassCard>
        </m.div>
      </Container>
    </SectionFrame>
  )
}
