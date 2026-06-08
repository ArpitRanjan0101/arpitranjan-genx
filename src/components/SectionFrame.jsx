import React from 'react'
import { cn } from '@/utils/cn'

export default function SectionFrame({ children, className, id }) {
  return (
    <section id={id} className={cn("relative", className)}>
      {/* Top Frame Line & Corner Brackets */}
      <div className="absolute inset-x-0 top-0 mx-auto w-[calc(100%-1rem)] sm:w-[min(calc(100%-1.5rem),74rem)] pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/35" />

        {/* Top-left corner bracket */}
        <div className="absolute top-0 left-0 w-[1.5px] h-[16px] bg-white/60" />
        <div className="absolute top-0 left-0 w-[16px] h-[1.5px] bg-white/60" />

        {/* Top-right corner bracket */}
        <div className="absolute top-0 right-0 w-[1.5px] h-[16px] bg-white/60" />
        <div className="absolute top-0 right-0 w-[16px] h-[1.5px] bg-white/60" />
      </div>

      {children}

      {/* Bottom Frame Line & Corner Brackets */}
      <div className="absolute inset-x-0 bottom-0 mx-auto w-[calc(100%-1rem)] sm:w-[min(calc(100%-1.5rem),74rem)] pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/35" />

        {/* Bottom-left corner bracket */}
        <div className="absolute bottom-0 left-0 w-[1.5px] h-[16px] bg-white/60" />
        <div className="absolute bottom-0 left-0 w-[16px] h-[1.5px] bg-white/60" />

        {/* Bottom-right corner bracket */}
        <div className="absolute bottom-0 right-0 w-[1.5px] h-[16px] bg-white/60" />
        <div className="absolute bottom-0 right-0 w-[16px] h-[1.5px] bg-white/60" />
      </div>
    </section>
  )
}
