import React, { useMemo } from 'react'
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

  const shineId = useMemo(
    () => `logo-shine-${Math.random().toString(16).slice(2)}`,
    []
  )

  return (
    <m.span
      className={cn(
        'group inline-flex select-none items-center gap-2 leading-none',
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
        className="relative -mt-[0.02em] translate-y-[0.07em] font-signature text-[1.18em] tracking-[0.01em] text-zinc-50 antialiased"
        style={{
          textShadow:
            '0 0 14px rgba(255,255,255,0.18), 0 0 34px rgba(99,102,241,0.15)',
        }}
      >
        <span className="opacity-95">{displayName}</span>
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
            {displayName}
          </span>
        </span>
      </span>

      <span className="translate-y-[0.02em] font-sans text-[0.95em] font-semibold text-zinc-200/90">
        /&gt;
      </span>
    </m.span>
  )
}
