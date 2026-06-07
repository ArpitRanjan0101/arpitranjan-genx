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
      <span className="translate-y-[0.02em] font-sans text-[0.95em] font-semibold text-zinc-200/90 transition-colors duration-300 group-hover:text-white">
        &lt;
      </span>

      <span
        className="relative -mt-[0.02em] translate-y-[0.07em] whitespace-nowrap font-signature text-[1.18em] tracking-[0.01em] text-zinc-50 antialiased transition-colors duration-300 group-hover:text-white"
        style={{
          textShadow:
            '0 0 14px rgba(255,255,255,0.18), 0 0 34px rgba(99,102,241,0.15)',
        }}
      >
        {displayName}
      </span>

      <span className="translate-y-[0.02em] font-sans text-[0.95em] font-semibold text-zinc-200/90 transition-colors duration-300 group-hover:text-white">
        /&gt;
      </span>
    </m.span>
  )
}
