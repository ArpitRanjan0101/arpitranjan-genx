import React, { memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import HeroScene from '@/three/HeroScene'

function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
    >
      <PerformanceMonitor />
      <HeroScene />
    </Canvas>
  )
}

export default memo(HeroCanvas)

