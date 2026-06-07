import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { fadeUp, stagger } from '@/animations/motion'

const stats = [
  { value: '15+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years Building' },
  { value: '< 100ms', label: 'LCP Target' },
  { value: '100%', label: 'Passion Driven' },
]

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
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <m.div
              key={s.label}
              variants={fadeUp}
              className="rounded-xl bg-white/[0.04] p-4 text-center ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs tracking-widest text-zinc-500 uppercase">{s.label}</div>
            </m.div>
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
          {pillars.map((c) => (
            <m.div key={c.t} variants={fadeUp} className="group">
              <GlassCard className={`relative h-full ring-1 ${c.ring} transition-shadow duration-300 group-hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.08)]`}>

                {/* Colored top accent line */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${c.topLine}`} />

                {/* Subtle corner glow */}
                <div className={`pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${c.accentGradient} blur-2xl`} />

                {/* Icon badge */}
                <div className={`relative mb-5 inline-flex items-center justify-center rounded-lg p-2.5 ${c.iconBg} ring-1 ring-white/10`}>
                  {c.icon}
                </div>

                <div className="relative text-sm font-semibold tracking-wide text-zinc-50">{c.t}</div>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{c.d}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-zinc-400 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
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
