import React from 'react'
import { m } from 'framer-motion'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Magnetic from '@/components/Magnetic'
import SectionFrame from '@/components/SectionFrame'
import { fadeUp, stagger } from '@/animations/motion'
import BioTypewriter from '@/components/BioTypewriter'

const METRICS = [
  { value: '5+',  label: 'Yrs Experience' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '2',   label: 'Startups Built' },
  { value: 'AI',  label: 'Stack Focus' },
]

const ROLES = ['Full-Stack Engineer', 'Agentic AI Builder', 'System Designer', 'COO']

const roleChipVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.5 + i * 0.08, ease: 'easeOut' },
  }),
}

const metricVariant = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.7 + i * 0.1, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28">
      <SectionFrame className="pt-12 sm:pt-16 pb-24 sm:pb-32">
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-12">

            {/* ── Left: Text Content ── */}
            <m.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              {/* Status badge */}
              <m.div
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] px-4 py-1.5 text-xs ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20 transition-all hover:bg-white/[0.08]"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-zinc-500">COO & Engineer ·</span>
                <span className="font-medium text-zinc-200">Triostack Technologies</span>
              </m.div>

              {/* Headline */}
              <m.h1
                variants={fadeUp}
                className="mt-6 text-4xl font-bold tracking-tighter leading-[1.06] text-zinc-50 sm:text-5xl lg:text-[4.25rem]"
              >
                <span className="block">Decouple Everything.</span>
                <span className="block">Reliability</span>
                <m.span
                  className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent pb-1"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Follows.
                </m.span>
              </m.h1>

              {/* Role chips */}
              <m.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
                {ROLES.map((role, i) => (
                  <m.span
                    key={role}
                    variants={roleChipVariant}
                    custom={i}
                    className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-zinc-400 ring-1 ring-white/[0.09] hover:bg-white/[0.08] hover:ring-white/20 hover:text-zinc-200 transition-all cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {role}
                  </m.span>
                ))}
              </m.div>

              {/* Bio */}
              <m.div
                variants={fadeUp}
                className="mt-6 max-w-xl space-y-4 text-pretty font-caveat text-xl font-medium leading-snug text-zinc-300 sm:text-2xl min-h-[12rem] sm:min-h-[14rem]"
              >
                <BioTypewriter
                  segments={[
                    { text: 'I am ', highlight: false },
                    { text: 'Chief Operating Officer and Entrepreneur', highlight: true },
                    { text: ' at ', highlight: false },
                    { text: 'Triostack Technologies Private Limited', highlight: true },
                    { text: ', driving product execution, technology strategy, and operational scale. As a ', highlight: false },
                    { text: 'hands-on full-stack engineer', highlight: true },
                    { text: ' and executive, I bridge the gap between business objectives and technical deployment, with a strong focus on system design and complex problem-solving.\n\nCurrently architecting intelligent, production-ready solutions at the intersection of ', highlight: false },
                    { text: 'Agentic AI, Generative AI, and cloud infrastructure', highlight: true },
                    { text: '. I am open to collaborate with founders, engineers, and visionaries building the future of scalable technology.', highlight: false },
                  ]}
                  speed={15}
                />
              </m.div>

              {/* CTAs */}
              <m.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.3}>
                  <Button
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    View Projects <FiArrowUpRight className="opacity-80" />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Button
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                  >
                    <FiDownload size={14} />
                    Resume
                  </Button>
                </Magnetic>
              </m.div>

              {/* Metrics strip */}
              <m.div
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6"
              >
                {METRICS.map((metric, i) => (
                  <m.div
                    key={metric.label}
                    variants={metricVariant}
                    custom={i}
                    className="flex items-baseline gap-1.5 group"
                  >
                    <m.span
                      className="text-lg font-bold text-zinc-100 group-hover:text-white transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      {metric.value}
                    </m.span>
                    <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition">{metric.label}</span>
                  </m.div>
                ))}
              </m.div>
            </m.div>

            {/* ── Right: Photo ── */}
            <m.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative lg:col-span-5 isolate z-0"
            >
              {/* Floating AI badge */}
              <m.div
                initial={{ opacity: 0, x: 16, y: -4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-3 top-10 z-30 hidden lg:block"
                whileHover={{ scale: 1.05, y: -6 }}
              >
                <div className="rounded-xl bg-zinc-900/90 px-3 py-2.5 backdrop-blur-md ring-1 ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:ring-white/20 transition-all">
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-500">Stack Focus</p>
                  <p className="mt-1 text-xs font-semibold text-zinc-100">Agentic AI · LLMs</p>
                </div>
              </m.div>

              {/* Photo card */}
              <m.div
                className="relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-glow hover:ring-white/20 transition-all hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.1)]"
                whileHover={{ y: -4 }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-transparent" />
                <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
                  <div className="absolute -inset-20 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                </div>

                {/* Corner brackets — indigo tinted */}
                <div className="absolute top-5 left-5 h-14 w-14 border-t-2 border-l-2 border-indigo-400/40 rounded-tl z-20 pointer-events-none hover:border-indigo-400/60 transition" />
                <div className="absolute bottom-20 right-5 h-14 w-14 border-b-2 border-r-2 border-indigo-400/40 rounded-br z-20 pointer-events-none hover:border-indigo-400/60 transition" />

                <div className="relative h-[28rem] sm:h-[34rem] lg:h-[42rem]">
                  <m.div
                    className="hero-portrait absolute inset-0"
                    style={{ '--hero-portrait-url': "url('/images/hero-portrait.jpeg')" }}
                    aria-hidden="true"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </div>

                {/* Floating identity card */}
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between rounded-2xl bg-zinc-950/85 px-4 py-3.5 backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20 transition-all hover:bg-zinc-950/90"
                  whileHover={{ y: -2 }}
                >
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-zinc-100">Arpit Ranjan</p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">COO · Triostack Technologies</p>
                  </div>
                  <m.div
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1.5 ring-1 ring-emerald-500/20 hover:ring-emerald-500/40 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-medium text-emerald-300">Open to Collaborate</span>
                  </m.div>
                </m.div>
              </m.div>
            </m.div>

          </div>
        </Container>
      </SectionFrame>
    </section>
  )
}
