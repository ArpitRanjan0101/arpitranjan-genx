import React, { useMemo } from 'react'
import { m, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Magnetic from '@/components/Magnetic'
import { fadeUp, stagger } from '@/animations/motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 60])
  const blur = useTransform(scrollY, [0, 600], [0, 6])
  const filter = useMotionTemplate`blur(${blur}px)`

  const socials = useMemo(
    () => [
      { label: 'GitHub', icon: FiGithub, href: 'https://github.com/' },
      { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/' },
      { label: 'Email', icon: FiMail, href: 'mailto:hello@example.com' },
    ],
    []
  )

  return (
    <section id="hero" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-gradient-to-b from-indigo-500/8 via-fuchsia-500/5 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <m.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-6">
            <m.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-xs text-zinc-300 ring-1 ring-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              Available for freelance | Remote
            </m.div>

            <m.h1
              variants={fadeUp}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] text-zinc-50 sm:text-5xl"
            >
              Frontend engineer crafting{' '}
              <span className="bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                cinematic interfaces
              </span>
              .
            </m.h1>

            <m.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-pretty font-caveat text-3xl font-medium leading-snug text-zinc-300 sm:text-4xl"
            >
              Motion-first, performance-conscious web experiences with glassmorphism, subtle depth, and
              interactive 3D - without the clutter.
            </m.p>

            <m.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.3}>
                <Button
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View work <FiArrowUpRight className="opacity-80" />
                </Button>
              </Magnetic>
              <Button
                href="#contact"
                variant="ghost"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact
              </Button>
            </m.div>

            <m.div variants={fadeUp} className="mt-8 flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                    aria-label={s.label}
                  >
                    <Icon className="text-zinc-200 transition group-hover:text-white" />
                  </a>
                )
              })}
            </m.div>
          </m.div>

          <div className="relative lg:col-span-6">
            <m.div
              style={{ y, filter }}
              className="relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-transparent" />
              <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
                <div className="absolute -inset-20 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
              </div>

              <div className="relative h-[22rem] sm:h-[26rem] lg:h-[30rem]">
                <div
                  className="hero-portrait absolute inset-0"
                  style={{ '--hero-portrait-url': "url('/images/hero-portrait.jpeg')" }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/8 p-5">
                <div className="text-xs text-zinc-400">Based in India | Working globally</div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="inline-flex h-5 items-center rounded-full bg-white/5 px-2 ring-1 ring-white/10">
                    React
                  </span>
                  <span className="inline-flex h-5 items-center rounded-full bg-white/5 px-2 ring-1 ring-white/10">
                    R3F
                  </span>
                  <span className="inline-flex h-5 items-center rounded-full bg-white/5 px-2 ring-1 ring-white/10">
                    Motion
                  </span>
                </div>
              </div>
            </m.div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { k: 'Fast', v: '60fps motion, tuned for INP.' },
            { k: 'Clean', v: 'Reusable components and tokens.' },
            { k: 'Premium', v: 'Typography, spacing, depth.' },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="text-sm font-semibold text-zinc-50">{item.k}</div>
              <div className="mt-1 text-sm text-zinc-300">{item.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
