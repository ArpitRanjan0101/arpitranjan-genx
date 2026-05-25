import BackgroundParticles from '@/components/BackgroundParticles'

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="grain absolute inset-0 opacity-80" />
      <BackgroundParticles />
    </div>
  )
}
