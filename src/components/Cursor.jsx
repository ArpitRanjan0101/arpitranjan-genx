import { m, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Cursor() {
  const isFine = useMediaQuery('(hover: hover) and (pointer: fine)')
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.5 })

  const style = useMemo(
    () => ({
      translateX: '-50%',
      translateY: '-50%',
      x: sx,
      y: sy,
    }),
    [sx, sy]
  )

  useEffect(() => {
    if (!isFine) return
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onDown = () => document.documentElement.classList.add('cursor-down')
    const onUp = () => document.documentElement.classList.remove('cursor-down')
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [isFine, x, y])

  if (!isFine) return null

  return (
    <m.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md"
      style={style}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/10 to-cyan-400/15 opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
    </m.div>
  )
}
