import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, TrackballControls } from '@react-three/drei'

function Cloud({ icons, radius = 2.4 }) {
  const groupRef = useRef()

  // Generate spherical coordinates using Fibonacci sphere algorithm
  const items = useMemo(() => {
    // Duplicate icons slightly to create a balanced globe without overcrowding
    const denseIcons = [...icons, ...icons]
    const count = denseIcons.length
    const points = []
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2 // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y) // radius at y
      const theta = phi * i

      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      points.push({
        position: [x * radius, y * radius, z * radius],
        ...denseIcons[i]
      })
    }
    return points
  }, [icons, radius])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <group key={i} position={item.position}>
            <Html center transform sprite>
              <div 
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                title={item.name}
              >
                <Icon size={24} color={item.color} style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
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
    <div className="relative h-[28rem] sm:h-[32rem] w-full bg-transparent flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Cloud icons={icons} />
        <TrackballControls noPan noZoom rotateSpeed={2.5} />
      </Canvas>
    </div>
  )
}
