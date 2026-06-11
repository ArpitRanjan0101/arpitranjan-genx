import { useEffect } from 'react'
import { m, useMotionValue } from 'framer-motion'
import { useRef, useState } from 'react'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { fadeUp, stagger } from '@/animations/motion'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 15, suffix: '+', label: 'Projects Shipped' },
  { value: 3, suffix: '+', label: 'Years Building' },
  { value: 100, suffix: '%', label: 'Passion Driven' },
  { value: 99.9, suffix: '', label: 'Lighthouse Score' },
]

const StatCounter = ({ value, suffix, label, delay = 0 }) => {
  const count = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime = null
      const duration = 2

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const elapsed = (currentTime - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const current = value * easedProgress
        count.set(Math.round(current * 10) / 10)
        setDisplayValue(Math.round(current * 10) / 10)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [value, delay, count])

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-xl bg-white/[0.04] p-4 text-center ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
    >
      <m.div className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
        {displayValue}{suffix}
      </m.div>
      <div className="mt-1 text-xs tracking-widest text-zinc-500 uppercase">{label}</div>
    </m.div>
  )
}

const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const IconBrush = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
)

const pillarVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const pillars = [
  {
    icon: <IconBolt />,
    accentGradient: 'from-violet-500/30 via-violet-500/10 to-transparent',
    topLine: 'from-violet-500/60 via-violet-400/20 to-transparent',
    iconBg: 'bg-violet-500/10 text-violet-300',
    ring: 'ring-violet-500/20',
    t: 'Motion Systems',
    d: 'Reusable motion variants, spring physics, and hover depth — every transition is intentional and GPU-accelerated for buttery smoothness.',
    tags: ['Framer Motion', 'GSAP', 'CSS Springs'],
  },
  {
    icon: <IconChart />,
    accentGradient: 'from-emerald-500/30 via-emerald-500/10 to-transparent',
    topLine: 'from-emerald-500/60 via-emerald-400/20 to-transparent',
    iconBg: 'bg-emerald-500/10 text-emerald-300',
    ring: 'ring-emerald-500/20',
    t: 'Performance First',
    d: 'Code splitting, lazy loading, and animation discipline to keep Core Web Vitals green on every device — speed is a feature.',
    tags: ['Vite', 'Web Vitals', 'Lighthouse 100'],
  },
  {
    icon: <IconBrush />,
    accentGradient: 'from-sky-500/30 via-sky-500/10 to-transparent',
    topLine: 'from-sky-500/60 via-sky-400/20 to-transparent',
    iconBg: 'bg-sky-500/10 text-sky-300',
    ring: 'ring-sky-500/20',
    t: 'Premium UI / UX',
    d: 'Glassmorphism, precise typographic rhythm, and micro-details that elevate a product from functional to unforgettable.',
    tags: ['Tailwind CSS', 'Three.js', 'Figma'],
  },
]

export default function About() {
  return (
    <SectionFrame id="about" className="py-24 sm:py-32">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <SectionHeading
          eyebrow="ABOUT"
          title="Engineering experiences people remember."
          subtitle="I bridge the gap between clean code and stunning design — shipping fast, accessible, and memorable interfaces that users love and businesses trust."
        />

        {/* Stats row */}
        <m.div
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
          ))}
        </m.div>

        {/* Pillar cards */}
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {pillars.map((c, i) => (
            <m.div key={c.t} variants={pillarVariant} custom={i} whileHover={{ y: -4 }} className="group">
              <GlassCard className={`relative h-full ring-1 ${c.ring} transition-all duration-300 group-hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.08)] group-hover:ring-white/30 will-change-transform`}>

                {/* Colored top accent line */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${c.topLine}`} />

                {/* Subtle corner glow */}
                <div className={`pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${c.accentGradient} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Icon badge */}
                <m.div
                  className={`relative mb-5 inline-flex items-center justify-center rounded-lg p-2.5 ${c.iconBg} ring-1 ring-white/10 transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {c.icon}
                </m.div>

                <div className="relative text-sm font-semibold tracking-wide text-zinc-50 transition group-hover:text-white">{c.t}</div>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">{c.d}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <m.span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-zinc-400 ring-1 ring-white/10 transition-all hover:bg-white/[0.1] hover:text-zinc-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </m.span>
                  ))}
                </div>
              </GlassCard>
            </m.div>
          ))}
        </m.div>
      </Container>
    </SectionFrame>
  )
}
