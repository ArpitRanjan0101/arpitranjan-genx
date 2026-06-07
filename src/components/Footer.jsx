import React from 'react'
import { m } from 'framer-motion'
import Container from '@/components/Container'
import Logo from '@/components/navbar/Logo'
import { fadeUp, stagger } from '@/animations/motion'

const TECH_STACK = ['React 18', 'Tailwind CSS', 'Framer Motion', 'Three.js']

export default function Footer({ quickLinks = [], socials = [], mapSrc = '', copyrightText = '' }) {
  const handleScroll = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      {/* Subtle top ambient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-950/[0.07] to-transparent" />

      <div className="border-t border-white/[0.07] bg-zinc-950/70 backdrop-blur-md pt-20 pb-0">
        <Container>
          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8"
          >
            {/* ── Brand Column ── */}
            <m.div variants={fadeUp} className="flex flex-col gap-6 md:col-span-5 lg:col-span-4">
              <Logo name="Arpit Ranjan" className="text-[20px] sm:text-[22px]" />

              {/* Availability badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 ring-1 ring-emerald-500/20">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium tracking-wide text-emerald-300">Available for new projects</span>
              </div>

              <p className="max-w-[280px] text-sm leading-relaxed text-zinc-500">
                Crafting digital products with motion, interactivity, and a passion for design engineering. Let's build something memorable.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="group relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/10 transition-all duration-200 hover:bg-white/[0.10] hover:ring-white/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                    >
                      <Icon className="text-zinc-500 transition-colors duration-200 group-hover:text-zinc-100" size={15} />
                    </a>
                  )
                })}
              </div>

              {/* Email CTA */}
              <a
                href="mailto:hello@arpitv.dev"
                className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-indigo-300"
              >
                <span className="h-px w-5 bg-zinc-600 transition-all duration-300 group-hover:w-8 group-hover:bg-indigo-400" />
                hello@arpitv.dev
              </a>
            </m.div>

            {/* ── Navigation Column ── */}
            <m.div variants={fadeUp} className="md:col-span-2 md:col-start-7 lg:col-span-2 lg:col-start-7">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Navigate
              </p>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleScroll(link.id)}
                      className="group flex items-center gap-1.5 text-sm text-zinc-500 transition-all duration-200 hover:text-zinc-100 focus-visible:outline-none"
                    >
                      <span className="inline-block w-3 origin-left scale-x-0 text-indigo-400 opacity-0 transition-all duration-200 group-hover:scale-x-100 group-hover:opacity-100">
                        →
                      </span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* ── Map Column ── */}
            <m.div variants={fadeUp} className="md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Location
              </p>
              <div className="group relative h-[170px] w-full overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-all duration-500 hover:ring-white/20">
                {/* City label overlay */}
                <div className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-lg bg-zinc-950/80 px-2.5 py-1.5 backdrop-blur-sm ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span className="text-[11px] font-medium text-zinc-300">New Delhi, India</span>
                </div>

                {mapSrc ? (
                  <iframe
                    title="map"
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    className="transition-transform duration-700 group-hover:scale-105"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-zinc-600">
                    Map not configured
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </m.div>
          </m.div>

          {/* ── Copyright Bar ── */}
          <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Arpit Ranjan. All rights reserved.
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap items-center gap-1.5">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-zinc-600 ring-1 ring-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-xs text-zinc-600">
              {copyrightText || (
                <span>
                  Built by <span className="text-zinc-400">Arpit Ranjan</span>
                </span>
              )}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
