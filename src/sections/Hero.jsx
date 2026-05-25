import React from 'react'
import { m } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Magnetic from '@/components/Magnetic'
import SectionDivider from '@/components/SectionDivider'
import Typewriter from '@/components/Typewriter'
import { fadeUp, stagger } from '@/animations/motion'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-8 sm:pb-12">
      <SectionDivider className="mb-10 sm:mb-12" />
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-gradient-to-b from-indigo-500/8 via-fuchsia-500/5 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <m.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-7">
            <m.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-xs text-zinc-300 ring-1 ring-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              M² | Mehnat and manifestation
            </m.div>

            <m.h1
              variants={fadeUp}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] text-zinc-50 sm:text-5xl"
            >
              <Typewriter />
            </m.h1>

            <m.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-pretty font-caveat text-xl font-medium leading-snug text-zinc-300 sm:text-2xl"
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
            </m.div>

          </m.div>

          <div className="relative lg:col-span-5 isolate z-0">
            <div className="relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-transparent" />
              <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
                <div className="absolute -inset-20 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
              </div>

              <div className="relative h-[24rem] sm:h-[28rem] lg:h-[34rem]">
                <div
                  className="hero-portrait absolute inset-0"
                  style={{ '--hero-portrait-url': "url('/images/hero-portrait.jpeg')" }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}
