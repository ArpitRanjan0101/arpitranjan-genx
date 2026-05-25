import React from 'react'
import { m } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Magnetic from '@/components/Magnetic'
import SectionDivider from '@/components/SectionDivider'
import SectionFrame from '@/components/SectionFrame'
import { fadeUp, stagger } from '@/animations/motion'
import BioTypewriter from '@/components/BioTypewriter'

export default function Hero() {
  return (
    <SectionFrame id="hero" className="relative pt-32 sm:pt-40 pb-20 sm:pb-24">
      <SectionDivider className="mb-10 sm:mb-12" />
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-gradient-to-b from-indigo-500/8 via-fuchsia-500/5 to-transparent z-[-1]" />

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
              className="mt-6 text-4xl font-bold tracking-tighter leading-[1.05] text-zinc-50 sm:text-5xl lg:text-[4rem]"
            >
              <span className="block">Decouple Everything.</span>
              <span className="block">Reliability</span>
              <span className="block text-zinc-400">Follows.</span>
            </m.h1>

            <m.div
              variants={fadeUp}
              className="mt-5 max-w-xl space-y-4 text-pretty font-caveat text-xl font-medium leading-snug text-zinc-300 sm:text-2xl min-h-[12rem] sm:min-h-[14rem]"
            >
              <BioTypewriter 
                segments={[
                  { text: "I am ", highlight: false },
                  { text: "Chief Operating Officer and Entrepreneur", highlight: true },
                  { text: " at ", highlight: false },
                  { text: "Triostack Technologies Private Limited", highlight: true },
                  { text: ", driving product execution, technology strategy, and operational scale. As a ", highlight: false },
                  { text: "hands-on full-stack engineer", highlight: true },
                  { text: " and executive, I bridge the gap between business objectives and technical deployment, with a strong focus on system design and complex problem-solving.\n\nCurrently architecting intelligent, production-ready solutions at the intersection of ", highlight: false },
                  { text: "Agentic AI, Generative AI, and cloud infrastructure", highlight: true },
                  { text: ". I am open to collaborate with founders, engineers, and visionaries building the future of scalable technology.", highlight: false }
                ]}
                speed={15} 
              />
            </m.div>

            <m.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.3}>
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume <FiArrowUpRight className="opacity-80" />
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button
                  href="#contact"
                  variant="ghost"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact Me
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

              <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-zinc-600 rounded-tl-sm z-20 pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-zinc-600 rounded-br-sm z-20 pointer-events-none" />

              <div className="relative h-[28rem] sm:h-[34rem] lg:h-[42rem]">
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
    </SectionFrame>
  )
}
