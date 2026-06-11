import React, { useRef, useEffect, useMemo, useState } from 'react'

// Idle auto-spin speed (radians per frame) applied around the Y axis.
const AUTO_SPIN = 0.0022

export default function TechGlobe({ icons }) {
  const containerRef = useRef(null)
  const itemRefs     = useRef([])

  const rot      = useRef({ x: -0.28, y: 0 })   // current sphere rotation
  const vel      = useRef({ x: 0, y: AUTO_SPIN }) // angular velocity / inertia
  const dragging = useRef(false)
  const last     = useRef({ x: 0, y: 0 })
  const pointers = useRef(0)

  const [radius, setRadius] = useState(190)

  // Even point distribution on a unit sphere (Fibonacci spiral).
  const points = useMemo(() => {
    const n   = icons.length
    const inc = Math.PI * (3 - Math.sqrt(5)) // golden angle
    const off = 2 / n
    return icons.map((_, i) => {
      const y   = i * off - 1 + off / 2
      const r   = Math.sqrt(Math.max(0, 1 - y * y))
      const phi = i * inc
      return { x: Math.cos(phi) * r, y, z: Math.sin(phi) * r }
    })
  }, [icons.length])

  // Keep the sphere radius proportional to the available space.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const s = Math.min(el.clientWidth, el.clientHeight)
      setRadius(Math.max(120, (s / 2) * 0.74))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Animation loop — drives every icon directly via refs (no React re-render).
  useEffect(() => {
    let raf
    const render = () => {
      if (!dragging.current) {
        // Ease angular velocity back toward the idle auto-spin (inertia).
        vel.current.x *= 0.94
        vel.current.y = vel.current.y * 0.94 + AUTO_SPIN * 0.06
        rot.current.x += vel.current.x
        rot.current.y += vel.current.y
      }
      // Clamp vertical tilt so the sphere never flips past its poles.
      rot.current.x = Math.max(-1.2, Math.min(1.2, rot.current.x))

      const sinX = Math.sin(rot.current.x), cosX = Math.cos(rot.current.x)
      const sinY = Math.sin(rot.current.y), cosY = Math.cos(rot.current.y)
      const R    = radius

      for (let i = 0; i < points.length; i++) {
        const el = itemRefs.current[i]
        if (!el) continue
        const p = points[i]
        // Rotate around Y, then X.
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.x * sinY + p.z * cosY
        const y2 = p.y * cosX - z1 * sinX
        const z2 = p.y * sinX + z1 * cosX

        const depth = (z2 + 1) / 2          // 0 (back) .. 1 (front)
        const scale = 0.55 + depth * 0.65   // shrink at the back
        // 2D translate keeps every icon facing the camera → never mirrored.
        el.style.transform = `translate3d(${x1 * R}px, ${y2 * R}px, 0) translate(-50%, -50%) scale(${scale})`
        el.style.opacity   = (0.28 + depth * 0.72).toFixed(3)
        el.style.zIndex    = String(Math.round(depth * 100))
        el.style.filter    = depth < 0.5 ? `blur(${((0.5 - depth) * 2).toFixed(2)}px)` : 'none'
      }
      raf = requestAnimationFrame(render)
    }
    render()
    return () => cancelAnimationFrame(raf)
  }, [points, radius])

  // ── Pointer drag (with inertia) ──
  const onPointerDown = (e) => {
    dragging.current = true
    pointers.current += 1
    last.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    last.current = { x: e.clientX, y: e.clientY }
    rot.current.y += dx * 0.006
    rot.current.x += -dy * 0.006
    vel.current.y = dx * 0.006   // carry momentum on release
    vel.current.x = -dy * 0.006
  }
  const endDrag = (e) => {
    dragging.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      className="relative h-[30rem] w-full flex items-center justify-center select-none touch-none cursor-grab active:cursor-grabbing"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-indigo-600/10 blur-[72px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.05] blur-[96px]" />
      </div>

      {/* Icon sphere */}
      <div className="relative h-full w-full">
        {icons.map((item, i) => {
          const Icon      = item.icon
          const glowColor = item.color === '#FFFFFF'
            ? 'rgba(255,255,255,0.35)'
            : `${item.color}66`
          return (
            <div
              key={item.name}
              ref={(el) => (itemRefs.current[i] = el)}
              title={item.name}
              style={{
                position:      'absolute',
                top:           '50%',
                left:          '50%',
                willChange:    'transform, opacity',
                transition:    'filter 120ms linear',
              }}
            >
              <Icon
                size={34}
                color={item.color}
                style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
