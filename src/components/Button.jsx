import { m } from 'framer-motion'
import { useRef, useState } from 'react'
import { cn } from '@/utils/cn'

const rippleVariants = {
  initial: { scale: 0, opacity: 1 },
  animate: { scale: 4, opacity: 0, transition: { duration: 0.8 } },
}

export default function Button({ as: Comp = 'a', className, variant = 'primary', ...props }) {
  const ref = useRef(null)
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = { id: Date.now(), x, y }
    setRipples((prev) => [...prev, ripple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
    }, 800)

    props.onClick?.(e)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 overflow-hidden'
  const variants = {
    primary:
      'bg-white/10 text-zinc-50 shadow-glow backdrop-blur-md ring-1 ring-white/10 hover:bg-white/14 hover:ring-white/18 hover:shadow-lg',
    ghost: 'bg-transparent text-zinc-200 ring-1 ring-white/10 hover:bg-white/6 hover:text-zinc-50',
  }

  return (
    <Comp
      ref={ref}
      className={cn(base, variants[variant], className)}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple effect */}
      {ripples.map((ripple) => (
        <m.div
          key={ripple.id}
          variants={rippleVariants}
          initial="initial"
          animate="animate"
          className="absolute pointer-events-none bg-white rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
          }}
        />
      ))}

      {/* Glow on hover */}
      <m.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0" />
      </m.div>

      {/* Content */}
      <m.span className="relative flex items-center justify-center gap-2" whileHover={{ y: -1 }}>
        {props.children}
      </m.span>
    </Comp>
  )
}

