import React from 'react'
import Container from '@/components/Container'
import { FiInstagram, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

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
    <footer className="border-t border-white/6 bg-black pt-16 pb-8">
      <Container className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section: Quick Links & Socials */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <div>
            <h3 className="mb-4 text-lg font-medium text-zinc-100">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="text-sm text-zinc-400 transition hover:text-zinc-100 focus-visible:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-zinc-100">Connect</h3>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20"
                    aria-label={s.label}
                  >
                    <Icon className="text-zinc-400 transition group-hover:text-zinc-100" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Section: Map */}
        <div className="flex w-full flex-col md:w-[400px]">
          <h3 className="mb-4 text-lg font-medium text-zinc-100">Location</h3>
          <div className="h-[200px] w-full overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
            {mapSrc ? (
              <iframe
                title="map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-zinc-500">
                Map not configured
              </div>
            )}
          </div>
        </div>
      </Container>
      
      {/* Copyright Bar */}
      <Container className="mt-12">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row">
          <div className="text-sm text-zinc-400">
            {copyrightText || (
              <>
                <span className="text-zinc-200">Arpit Ranjan</span> — craft & motion.
              </>
            )}
          </div>
        </div>
      </Container>
    </footer>
  )
}

