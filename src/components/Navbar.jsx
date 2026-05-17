import React, { useEffect, useMemo, useState } from 'react'
import { m, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { FiGithub, FiHome, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import Container from '@/components/Container'
import { NAV_ITEMS } from '@/utils/links'
import { cn } from '@/utils/cn'
import { useMediaQuery } from '@/hooks/useMediaQuery'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({ activeId }) {
  const items = useMemo(() => NAV_ITEMS, [])
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const socials = useMemo(
    () => [
      { label: 'GitHub', icon: FiGithub, href: 'https://github.com/' },
      { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/' },
      { label: 'Email', icon: FiMail, href: 'mailto:hello@example.com' },
    ],
    []
  )

  useEffect(() => {
    if (isDesktop) setOpen(false)
  }, [isDesktop])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? latest
    const delta = latest - prev

    // Always show near the top so navigation isn't lost.
    if (latest < 80) {
      setHidden(false)
      return
    }

    // Hide while scrolling down, reveal while scrolling up.
    if (delta > 2) setHidden(true)
    if (delta < -2) setHidden(false)
  })

  return (
    <m.header
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      animate={open || !hidden ? 'show' : 'hide'}
      variants={{
        show: { y: 0, opacity: 1, filter: 'blur(0px)' },
        hide: { y: -40, opacity: 0, filter: 'blur(10px)' },
      }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Container className="pointer-events-auto">
        <div className="pt-4">
          <div
            className="relative flex items-center justify-between px-2 py-3 md:px-0"
          >
            <div className="w-11" aria-hidden="true" />

            <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
              <nav className="flex items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10 backdrop-blur">
                {items.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => scrollToId(it.id)}
                    className={cn(
                      'relative rounded-full px-4 py-2 font-caveat text-base font-medium text-zinc-300 transition hover:text-zinc-50',
                      (it.id === 'hero' || it.label?.toLowerCase() === 'home') &&
                        'grid h-10 w-10 place-items-center px-0 py-0 leading-none',
                      activeId === it.id && 'text-zinc-50'
                    )}
                  >
                    {activeId === it.id ? (
                      <m.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/12"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    {it.id === 'hero' || it.label?.toLowerCase() === 'home' ? (
                      <span className="relative inline-flex items-center">
                        <FiHome className="text-[18px]" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                      </span>
                    ) : (
                      <span className="relative">{it.label}</span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="flex items-center rounded-full bg-white/5 p-[5px] ring-1 ring-white/10 backdrop-blur">
                {socials.map((s, idx) => {
                  const Icon = s.icon
                  return (
                    <React.Fragment key={s.label}>
                      {idx ? (
                        <span
                          className="mx-1 h-6 w-px rounded-full bg-white/10"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="group grid h-[38px] w-[38px] place-items-center rounded-full bg-white/[0.04] text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-zinc-50"
                        aria-label={s.label}
                      >
                        <Icon className="text-[18px] opacity-90 transition group-hover:opacity-100" />
                      </a>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden w-11 md:block" />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid h-11 w-11 place-items-center rounded-xl bg-white/6 text-zinc-100 ring-1 ring-white/10 transition hover:bg-white/10 md:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>

            <AnimatePresence>
              {open ? (
                <m.div
                  initial={{ opacity: 0, y: -6, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -6, filter: 'blur(10px)' }}
                  transition={{ duration: 0.22 }}
                  className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-2xl bg-black/55 p-3 shadow-glow ring-1 ring-white/10 backdrop-blur-xl md:hidden"
                >
                  <div className="grid gap-1">
                    {items.map((it) => (
                      <button
                        key={it.id}
                        type="button"
                        onClick={() => {
                          setOpen(false)
                          scrollToId(it.id)
                        }}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-left font-caveat text-base font-medium text-zinc-200 ring-1 ring-transparent transition hover:bg-white/6 hover:text-zinc-50',
                          activeId === it.id && 'bg-white/6 ring-white/10'
                        )}
                      >
                        <span>{it.label}</span>
                        <span className="text-xs text-zinc-400">â†µ</span>
                      </button>
                    ))}
                  </div>
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </m.header>
  )
}
