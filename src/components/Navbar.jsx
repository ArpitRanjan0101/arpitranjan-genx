import React, { useEffect, useMemo, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isDesktop) setOpen(false)
  }, [isDesktop])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Container className="pointer-events-auto">
        <div className="pt-4">
          <div
            className={cn(
              'relative flex items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-white/10 backdrop-blur-md transition',
              scrolled ? 'bg-black/35 shadow-glow' : 'bg-black/15'
            )}
          >
            <button
              type="button"
              onClick={() => scrollToId('hero')}
              className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-wide text-zinc-50"
            >
              <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/20 to-cyan-400/30 ring-1 ring-white/10">
                <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <span className="absolute -inset-10 rotate-12 bg-white/10 blur-xl" />
                </span>
                <span className="text-xs">A</span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => scrollToId(it.id)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:text-zinc-50',
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
                  <span className="relative">{it.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
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
                          'flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-zinc-200 ring-1 ring-transparent transition hover:bg-white/6 hover:text-zinc-50',
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
    </header>
  )
}

