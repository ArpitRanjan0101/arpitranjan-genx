import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, TrackballControls } from '@react-three/drei'
import { Vector3 } from 'three'

const RADIUS = 4.2

// Elegant torus rings that define the globe silhouette cleanly
function GlobeRings() {
  const tubeArgs = [RADIUS, 0.026, 8, 96]
  const latR = RADIUS * Math.cos(Math.PI / 4)
  return (
    <>
      {/* Equator — most prominent */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={tubeArgs} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.42} />
      </mesh>
      {/* Meridian 1 */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={tubeArgs} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.22} />
      </mesh>
      {/* Meridian 2 */}
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={tubeArgs} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.16} />
      </mesh>
      {/* Meridian 3 */}
      <mesh rotation={[0, -Math.PI / 3, 0]}>
        <torusGeometry args={tubeArgs} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.13} />
      </mesh>
      {/* Latitude ring +45° */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[latR, 0.020, 8, 80]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.14} />
      </mesh>
      {/* Latitude ring -45° */}
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={[latR, 0.020, 8, 80]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.14} />
      </mesh>
    </>
  )
}

function Cloud({ icons }) {
  const groupRef = useRef()
  const iconRefs = useRef([])
  const tmpVec = useMemo(() => new Vector3(), [])

  const items = useMemo(() => {
    const count = icons.length
    const phi = Math.PI * (3 - Math.sqrt(5))
    return icons.map((icon, i) => {
      const y = count > 1 ? 1 - (i / (count - 1)) * 2 : 0
      const r = Math.sqrt(1 - y * y)
      const theta = phi * i
      return {
        ...icon,
        position: [Math.cos(theta) * r * RADIUS, y * RADIUS, Math.sin(theta) * r * RADIUS],
      }
    })
  }, [icons])

  useFrame((_, delta) => {
    if (!groupRef.current) return

    // Auto-rotate
    groupRef.current.rotation.y += delta * 0.14
    groupRef.current.rotation.x += delta * 0.04

    // Per-frame depth → opacity + scale (direct DOM, zero React re-renders)
    const mat = groupRef.current.matrixWorld
    items.forEach((item, i) => {
      const el = iconRefs.current[i]
      if (!el) return
      tmpVec.set(item.position[0], item.position[1], item.position[2]).applyMatrix4(mat)
      // t = 0 → behind globe, t = 1 → in front
      const t = (tmpVec.z + RADIUS) / (RADIUS * 2)
      el.style.opacity = (0.22 + t * 0.78).toFixed(3)
      el.style.transform = `scale(${(0.72 + t * 0.38).toFixed(3)})`
    })
  })

  return (
    <group ref={groupRef}>
      {items.map((item, i) => {
        const Icon = item.icon
        // Hex color → rgba glow string
        const glowColor = item.color === '#FFFFFF' ? 'rgba(255,255,255,0.3)' : `${item.color}55`
        return (
          <group key={i} position={item.position}>
            <Html center transform sprite>
              <div
                ref={el => { iconRefs.current[i] = el }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(9,9,11,0.74)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '999px',
                  padding: '4px 9px 4px 5px',
                  border: '1px solid rgba(255,255,255,0.11)',
                  boxShadow: `0 2px 12px rgba(0,0,0,0.5), 0 0 0 0px ${glowColor}`,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                  willChange: 'transform, opacity',
                  transformOrigin: 'center center',
                }}
              >
                <Icon
                  size={16}
                  color={item.color}
                  style={{
                    flexShrink: 0,
                    filter: `drop-shadow(0 0 5px ${glowColor})`,
                  }}
                />
                <span
                  style={{
                    color: 'rgba(212,212,216,0.9)',
                    fontSize: '9.5px',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                  }}
                >
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
  return (
    <div className="relative h-[28rem] sm:h-[32rem] w-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      {/* Indigo core bloom */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-indigo-600/[0.12] blur-[64px]" />
      </div>
      {/* Violet outer halo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.06] blur-[96px]" />
      </div>

      <Canvas camera={{ position: [0, 0, 40], fov: 15 }}>
        <ambientLight intensity={0.45} />
        {/* Indigo key light — front */}
        <pointLight position={[6, 6, 14]} intensity={0.7} color="#818cf8" />
        {/* Cyan fill — back rim */}
        <pointLight position={[-5, -5, -10]} intensity={0.25} color="#22d3ee" />
        <GlobeRings />
        <Cloud icons={icons} />
        <TrackballControls noPan noZoom rotateSpeed={2.5} />
      </Canvas>
    </div>
  )
}
