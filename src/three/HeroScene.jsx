import React, { memo, useMemo, useRef } from 'react'
import { Float, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Knot() {
  const mesh = useRef(null)
  const material = useMemo(
    () => ({
      color: '#e4e4ff',
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    }),
    []
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!mesh.current) return
    mesh.current.rotation.x = t * 0.22
    mesh.current.rotation.y = t * 0.35
  })

  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={mesh} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.32, 220, 16]} />
        <meshPhysicalMaterial {...material} />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 4, 3]} intensity={1.35} />
      <pointLight position={[-4, -3, 2]} intensity={0.85} color="#60a5fa" />
      <Knot />
      <Environment preset="city" />
    </>
  )
}

export default memo(HeroScene)

