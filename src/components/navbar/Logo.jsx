import React, { useEffect, useMemo, useState } from 'react'
import { m } from 'framer-motion'
import { cn } from '@/utils/cn'

export default function Logo({ className, name = 'Arpit ranjan' }) {
  const displayName = useMemo(() => {
    const trimmed = String(name || '').trim()
    if (!trimmed) return 'Arpit Ranjan'
    return trimmed
      .split(/\s+/g)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  }, [name])

  const [typedCount, setTypedCount] = useState(0)

  const shineId = useMemo(
    () => `logo-shine-${Math.random().toString(16).slice(2)}`,
    []
  )

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setTypedCount(displayName.length)
      return
    }

    let timer
    let cancelled = false

    let i = 0
    let dir = 1 // 1 = typing, -1 = deleting

    setTypedCount(0)

    const schedule = (ms) => {
      timer = window.setTimeout(loop, ms)
    }

    const loop = () => {
      if (cancelled) return

      setTypedCount(i)

      // phase changes
      if (dir === 1 && i >= displayName.length) {
        dir = -1
        schedule(1100)
        return
      }

      if (dir === -1 && i <= 0) {
        dir = 1
        schedule(420)
        return
      }

      // advance
      i += dir
      const nextIndex = dir === 1 ? i - 1 : i
      const ch = displayName[nextIndex] || ''

      const base = dir === 1 ? (ch === ' ' ? 150 : 58) : 26
      const jitter = Math.floor(Math.random() * (dir === 1 ? 60 : 30))
      schedule(base + jitter)
    }

    schedule(260)
    return () => {
      cancelled = true
      if (timer) window.clearTimeout(timer)
    }
  }, [displayName])

  const typedText = useMemo(
    () => displayName.slice(0, typedCount),
    [displayName, typedCount]
  )
  // Keep layout stable: caret should keep its space even when hidden.
  // Avoid toggling layout-affecting classes at the "fully typed" moment.
  const doneTyping = typedCount >= displayName.length

  return (
    <m.span
      className={cn(
        'group inline-flex select-none items-center gap-2 leading-none whitespace-nowrap',
        'text-[22px] sm:text-[28.5px]',
        className
      )}
      whileHover={{ y: -1, scale: 1.03 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      aria-label={`< ${displayName} />`}
    >
      <span className="translate-y-[0.02em] font-sans text-[0.95em] font-semibold text-zinc-200/90">
        &lt;
      </span>

      <span
        className="relative -mt-[0.02em] translate-y-[0.07em] whitespace-nowrap font-signature text-[1.18em] tracking-[0.01em] text-zinc-50 antialiased"
        style={{
          textShadow:
            '0 0 14px rgba(255,255,255,0.18), 0 0 34px rgba(99,102,241,0.15)',
        }}
      >
        {/* width stabilizer (prevents navbar jump while typing) */}
        <span className="invisible opacity-0">{displayName}</span>

        <span className="absolute inset-0 opacity-95">
          {typedText}
          <span
            aria-hidden="true"
            className="ml-[0.06em] inline-block h-[0.9em] w-[2px] translate-y-[0.12em] rounded-full bg-white/80 animate-pulse"
            style={{ opacity: doneTyping ? 0 : 1 }}
          />
        </span>
        <span
          id={shineId}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-35 blur-[0.5px] [mask-image:linear-gradient(180deg,transparent,black_18%,black_82%,transparent)] animate-shimmer" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-[1.25px] [mask-image:linear-gradient(180deg,transparent,black_26%,black_70%,transparent)] animate-shimmer" />
          <span
            className="absolute inset-0 bg-clip-text text-transparent [-webkit-background-clip:text]"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.9), rgba(255,255,255,0))',
            }}
          >
            {typedText}
          </span>
        </span>
      </span>

      <span className="translate-y-[0.02em] font-sans text-[0.95em] font-semibold text-zinc-200/90">
        /&gt;
      </span>
    </m.span>
  )
}
