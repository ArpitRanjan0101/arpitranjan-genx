import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { Vector3 } from 'three'

const RADIUS = 4.2

// All rings live INSIDE the rotating group — they spin with the globe
function GlobeRings() {
  const tube   = 0.026
  const latR   = RADIUS * Math.cos(Math.PI / 4)
  const args96 = [RADIUS, tube, 8, 96]
  const args80 = [latR,   0.020, 8, 80]

  return (
    <>
      {/* Equator — brightest ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={args96} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.44} />
      </mesh>
      {/* Meridian 0° */}
      <mesh>
        <torusGeometry args={args96} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.22} />
      </mesh>
      {/* Meridian 60° */}
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={args96} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.16} />
      </mesh>
      {/* Meridian −60° */}
      <mesh rotation={[0, -Math.PI / 3, 0]}>
        <torusGeometry args={args96} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.13} />
      </mesh>
      {/* Latitude +45° */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={args80} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.15} />
      </mesh>
      {/* Latitude −45° */}
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={args80} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.15} />
      </mesh>
    </>
  )
}

// Inner scene — receives shared refs (no React state → no re-renders)
function GlobeScene({ icons, isDragging, velRef, rotRef }) {
  const groupRef = useRef()
  const iconRefs = useRef([])
  const tmpVec   = useMemo(() => new Vector3(), [])

  const items = useMemo(() => {
    const count = icons.length
    const phi   = Math.PI * (3 - Math.sqrt(5)) // golden angle
    return icons.map((icon, i) => {
      const y     = count > 1 ? 1 - (i / (count - 1)) * 2 : 0
      const r     = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = phi * i
      return {
        ...icon,
        position: [
          Math.cos(theta) * r * RADIUS,
          y * RADIUS,
          Math.sin(theta) * r * RADIUS,
        ],
      }
    })
  }, [icons])

  useFrame((state, delta) => {
    const g = groupRef.current
    if (!g) return

    if (!isDragging.current) {
      // Continuous Y auto-rotation
      rotRef.current.y += delta * 0.13
      // Momentum decay after user drag
      velRef.current.x *= 0.91
      velRef.current.y *= 0.91
      rotRef.current.x += velRef.current.x
      rotRef.current.y += velRef.current.y
    }

    // Apply rotation — X gets a gentle sine oscillation for organic feel
    g.rotation.y = rotRef.current.y
    g.rotation.x = rotRef.current.x + Math.sin(state.clock.elapsedTime * 0.28) * 0.13

    // Force matrix to reflect this frame's rotation before depth calc
    g.updateMatrixWorld(true)
    const mat = g.matrixWorld

    // Per-frame depth → opacity + scale via direct DOM (zero React re-renders)
    items.forEach((item, i) => {
      const el = iconRefs.current[i]
      if (!el) return
      tmpVec.set(item.position[0], item.position[1], item.position[2]).applyMatrix4(mat)
      // t = 0 → back of globe, t = 1 → front of globe
      const t = Math.max(0, Math.min(1, (tmpVec.z + RADIUS) / (RADIUS * 2)))
      el.style.opacity   = (0.15 + t * 0.85).toFixed(3)
      el.style.transform = `scale(${(0.65 + t * 0.45).toFixed(3)})`
    })
  })

  return (
    <group ref={groupRef}>
      {/* Rings spin with the globe — all one unified rotating body */}
      <GlobeRings />

      {items.map((item, i) => {
        const Icon      = item.icon
        const glowColor = item.color === '#FFFFFF'
          ? 'rgba(255,255,255,0.32)'
          : `${item.color}55`

        return (
          <group key={i} position={item.position}>
            <Html center transform sprite>
              <div
                ref={el => { iconRefs.current[i] = el }}
                style={{
                  display:              'inline-flex',
                  alignItems:           'center',
                  gap:                  '5px',
                  background:           'rgba(9,9,11,0.74)',
                  backdropFilter:       'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius:         '999px',
                  padding:              '4px 9px 4px 5px',
                  border:               '1px solid rgba(255,255,255,0.11)',
                  boxShadow:            `0 2px 14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)`,
                  whiteSpace:           'nowrap',
                  userSelect:           'none',
                  willChange:           'transform, opacity',
                  transformOrigin:      'center center',
                }}
              >
                <Icon
                  size={16}
                  color={item.color}
                  style={{ flexShrink: 0, filter: `drop-shadow(0 0 5px ${glowColor})` }}
                />
                <span style={{
                  color:          'rgba(212,212,216,0.90)',
                  fontSize:       '9.5px',
                  fontWeight:     500,
                  letterSpacing:  '0.04em',
                  lineHeight:     1,
                }}>
                  {item.name}
                </span>
              </div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

export default function TechGlobe({ icons }) {
  // All interaction state as refs — zero re-renders
  const isDragging = useRef(false)
  const lastMouse  = useRef({ x: 0, y: 0 })
  const velRef     = useRef({ x: 0, y: 0 })
  const rotRef     = useRef({ x: 0.18, y: 0 }) // slight initial tilt

  const onMouseDown = (e) => {
    isDragging.current      = true
    lastMouse.current       = { x: e.clientX, y: e.clientY }
    velRef.current          = { x: 0, y: 0 }
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    const dx = e.clientX - lastMouse.current.x
    const dy = e.clientY - lastMouse.current.y
    rotRef.current.y    += dx * 0.006
    rotRef.current.x    += dy * 0.006
    // Track velocity for momentum on release
    velRef.current.x     = dy * 0.005
    velRef.current.y     = dx * 0.005
    lastMouse.current    = { x: e.clientX, y: e.clientY }
  }

  const onMouseUp = () => { isDragging.current = false }

  return (
    <div
      className="relative h-[28rem] sm:h-[36rem] w-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Indigo core bloom */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-indigo-600/[0.13] blur-[64px]" />
      </div>
      {/* Violet outer halo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.06] blur-[100px]" />
      </div>

      <Canvas camera={{ position: [0, 0, 40], fov: 15 }}>
        <ambientLight intensity={0.45} />
        {/* Indigo key light — front top */}
        <pointLight position={[6,  6,  14]} intensity={0.7}  color="#818cf8" />
        {/* Cyan rim light — back bottom */}
        <pointLight position={[-5, -5, -10]} intensity={0.28} color="#22d3ee" />

        <GlobeScene
          icons={icons}
          isDragging={isDragging}
          velRef={velRef}
          rotRef={rotRef}
        />
      </Canvas>
    </div>
  )
}
