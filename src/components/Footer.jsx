import React from 'react'
import Container from '@/components/Container'

export default function Footer({ quickLinks = [], socials = [], mapSrc = "", copyrightText = "" }) {
  const handleScroll = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="border-t border-white/10 bg-zinc-950/50 pt-20 pb-10">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        {/* Brand & Bio */}
        <div className="flex flex-col gap-6 md:col-span-5 lg:col-span-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Arpit Ranjan</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Crafting digital experiences with motion, interactivity, and a passion for modern web technologies. Building tools that scale.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/30"
                  aria-label={s.label}
                >
                  <Icon className="text-zinc-400 transition-colors group-hover:text-zinc-100" size={18} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 md:col-start-7 lg:col-span-2 lg:col-start-7">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-100">Quick Links</h3>
          <ul className="flex flex-col gap-3.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-sm text-zinc-400 transition-colors hover:text-indigo-400 focus-visible:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Map */}
        <div className="md:col-span-5 lg:col-span-4">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-100">Location</h3>
          <div className="group relative h-[180px] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all hover:ring-white/20">
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
              <div className="flex h-full w-full items-center justify-center text-sm text-zinc-500">
                Map not configured
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </Container>
      
      {/* Copyright Bar */}
      <Container className="mt-20">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Arpit Ranjan. All rights reserved.
          </p>
          <div className="text-sm text-zinc-500">
            {copyrightText || (
              <>
                <span className="text-zinc-300">Arpit Ranjan</span> — build with love.
              </>
            )}
          </div>
        </div>
      </Container>
    </footer>
  )
}

