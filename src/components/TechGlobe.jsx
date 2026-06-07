import React, { useMemo } from 'react'

const RADIUS = 178

export default function TechGlobe({ icons }) {
  // Distribute icons evenly on a sphere using the Fibonacci method
  const items = useMemo(() => {
    const n   = icons.length
    const phi = Math.PI * (3 - Math.sqrt(5)) // golden angle
    return icons.map((icon, i) => {
      const y  = n > 1 ? 1 - (i / (n - 1)) * 2 : 0
      const r  = Math.sqrt(Math.max(0, 1 - y * y))
      const t  = phi * i
      return {
        ...icon,
        rotY: Math.atan2(Math.sin(t) * r, Math.cos(t) * r) * (180 / Math.PI),
        rotX: -Math.asin(y) * (180 / Math.PI),
      }
    })
  }, [icons])

  return (
    <div
      className="relative h-[30rem] w-full flex items-center justify-center select-none"
      style={{ perspective: '720px' }}
    >
      {/* Indigo ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-indigo-600/10 blur-[72px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.05] blur-[96px]" />
      </div>

      {/* The rotating sphere — one CSS animation, no JS needed */}
      <div
        style={{
          width:          RADIUS * 2,
          height:         RADIUS * 2,
          position:       'relative',
          transformStyle: 'preserve-3d',
          animation:      'globeSpin 28s linear infinite',
        }}
      >
        {items.map((item, i) => {
          const Icon      = item.icon
          const glowColor = item.color === '#FFFFFF'
            ? 'rgba(255,255,255,0.28)'
            : `${item.color}44`

          return (
            <div
              key={i}
              style={{
                position:       'absolute',
                top:            '50%',
                left:           '50%',
                transformStyle: 'preserve-3d',
                transform:      `rotateY(${item.rotY}deg) rotateX(${item.rotX}deg) translateZ(${RADIUS}px)`,
              }}
            >
              {/* Glass pill card */}
              <div
                style={{
                  transform:            'translateX(-50%) translateY(-50%)',
                  display:              'inline-flex',
                  alignItems:           'center',
                  gap:                  '5px',
                  background:           'rgba(9,9,11,0.72)',
                  backdropFilter:       'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius:         '999px',
                  padding:              '4px 9px 4px 5px',
                  border:               '1px solid rgba(255,255,255,0.11)',
                  boxShadow:            `0 2px 12px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)`,
                  whiteSpace:           'nowrap',
                  userSelect:           'none',
                }}
              >
                <Icon
                  size={15}
                  color={item.color}
                  style={{ flexShrink: 0, filter: `drop-shadow(0 0 4px ${glowColor})` }}
                />
                <span style={{
                  color:         'rgba(212,212,216,0.88)',
                  fontSize:      '9.5px',
                  fontWeight:    500,
                  letterSpacing: '0.04em',
                  lineHeight:    1,
                }}>
                  {item.name}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
