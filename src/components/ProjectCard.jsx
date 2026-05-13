import { m, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { cn } from '@/utils/cn'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 300, damping: 24, mass: 0.7 })
  const sry = useSpring(ry, { stiffness: 300, damping: 24, mass: 0.7 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * 10)
    rx.set((0.5 - py) * 8)
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <m.a
      ref={ref}
      href={project.href}
      target={project.href?.startsWith('http') ? '_blank' : undefined}
      rel={project.href?.startsWith('http') ? 'noreferrer' : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        'group relative block overflow-hidden rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/[0.07]',
        'will-change-transform'
      )}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 900,
      }}
      initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10% 0px -25% 0px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-24 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold text-zinc-50">{project.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.desc}</p>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
            <FiArrowUpRight className="text-zinc-200 transition group-hover:text-white" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/20 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </m.a>
  )
}
