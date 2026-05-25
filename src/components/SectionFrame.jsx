import React from 'react'
import { cn } from '@/utils/cn'

export default function SectionFrame({ children, className, id }) {
  return (
    <section id={id} className={cn("relative", className)}>
      {/* Top Frame Line & Crosshairs */}
      <div className="absolute inset-x-0 top-0 mx-auto w-[calc(100%-1rem)] sm:w-[min(calc(100%-1.5rem),74rem)] pointer-events-none z-0">
         <div className="absolute top-0 left-[-1.5rem] right-[-1.5rem] h-px bg-white/10" />
         <div className="absolute top-[-4px] left-0 w-px h-[9px] bg-white/30" />
         <div className="absolute top-[-4px] right-0 w-px h-[9px] bg-white/30" />
         <div className="absolute top-[-1px] left-[-4px] w-[9px] h-px bg-white/30" />
         <div className="absolute top-[-1px] right-[-4px] w-[9px] h-px bg-white/30" />
      </div>

      {children}

      {/* Bottom Frame Line & Crosshairs */}
      <div className="absolute inset-x-0 bottom-0 mx-auto w-[calc(100%-1rem)] sm:w-[min(calc(100%-1.5rem),74rem)] pointer-events-none z-0">
         <div className="absolute bottom-0 left-[-1.5rem] right-[-1.5rem] h-px bg-white/10" />
         <div className="absolute bottom-[-4px] left-0 w-px h-[9px] bg-white/30" />
         <div className="absolute bottom-[-4px] right-0 w-px h-[9px] bg-white/30" />
         <div className="absolute bottom-[-1px] left-[-4px] w-[9px] h-px bg-white/30" />
         <div className="absolute bottom-[-1px] right-[-4px] w-[9px] h-px bg-white/30" />
      </div>
    </section>
  )
}
