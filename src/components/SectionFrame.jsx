import React from 'react'
import { cn } from '@/utils/cn'

export default function SectionFrame({ children, className, id }) {
  return (
    <section id={id} className={cn("relative", className)}>
      {/* Top Frame Line & Crosshairs */}
      <div className="absolute inset-x-0 top-0 mx-auto w-[calc(100%-1rem)] sm:w-[min(calc(100%-1.5rem),74rem)] pointer-events-none z-0">
         <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
         <div className="absolute top-[-2px] left-0 w-px h-[5px] bg-white/80" />
         <div className="absolute top-[-2px] right-0 w-px h-[5px] bg-white/80" />
         <div className="absolute top-0 left-[-2px] w-[5px] h-px bg-white/80" />
         <div className="absolute top-0 right-[-2px] w-[5px] h-px bg-white/80" />
      </div>

      {children}

      {/* Bottom Frame Line & Crosshairs */}
      <div className="absolute inset-x-0 bottom-0 mx-auto w-[calc(100%-1rem)] sm:w-[min(calc(100%-1.5rem),74rem)] pointer-events-none z-0">
         <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
         <div className="absolute bottom-[-2px] left-0 w-px h-[5px] bg-white/80" />
         <div className="absolute bottom-[-2px] right-0 w-px h-[5px] bg-white/80" />
         <div className="absolute bottom-0 left-[-2px] w-[5px] h-px bg-white/80" />
         <div className="absolute bottom-0 right-[-2px] w-[5px] h-px bg-white/80" />
      </div>
    </section>
  )
}
