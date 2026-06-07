import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, TrackballControls } from '@react-three/drei'

const RADIUS = 4.2

// Static indigo wireframe — gives the "globe" shape even between icons
function GlobeFrame() {
  return (
    <mesh>
      <sphereGeometry args={[RADIUS, 18, 12]} />
      <meshBasicMaterial wireframe color="#6366f1" opacity={0.08} transparent />
    </mesh>
  )
}

function Cloud({ icons }) {
  const groupRef = useRef()

  const items = useMemo(() => {
    const count = icons.length
    const phi = Math.PI * (3 - Math.sqrt(5))
    return icons.map((icon, i) => {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = phi * i
      return {
        ...icon,
        position: [Math.cos(theta) * r * RADIUS, y * RADIUS, Math.sin(theta) * r * RADIUS],
      }
    })
  }, [icons])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.14
      groupRef.current.rotation.x += delta * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <group key={i} position={item.position}>
            <Html center transform sprite>
              {/* Glass pill card: icon + label */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(9,9,11,0.72)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '999px',
                  padding: '4px 9px 4px 5px',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.45)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                }}
                title={item.name}
              >
                <Icon
                  size={16}
                  color={item.color}
                  style={{ flexShrink: 0, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}
                />
                <span
                  style={{
                    color: 'rgba(212,212,216,0.88)',
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
      {/* Ambient indigo bloom */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-indigo-600/[0.09] blur-[72px]" />
      </div>
      {/* Subtle outer ring glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-violet-500/[0.05] blur-[100px]" />
      </div>

      <Canvas camera={{ position: [0, 0, 40], fov: 15 }}>
        <ambientLight intensity={0.5} />
        {/* Soft indigo point light gives 3-D depth to the wireframe */}
        <pointLight position={[8, 8, 12]} intensity={0.6} color="#818cf8" />
        <pointLight position={[-6, -6, -8]} intensity={0.2} color="#22d3ee" />
        <GlobeFrame />
        <Cloud icons={icons} />
        <TrackballControls noPan noZoom rotateSpeed={2.5} />
      </Canvas>
    </div>
  )
}
