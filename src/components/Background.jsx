import BackgroundParticles from '@/components/BackgroundParticles'

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950 to-black" />
      <div className="absolute inset-0 bg-radial-soft" />

      <div
        className="absolute left-1/2 top-[-10%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl animate-floaty"
        style={{ animationDelay: '-1.2s' }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[42rem] w-[42rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-floaty"
        style={{ animationDelay: '-2.6s', animationDuration: '7.5s' }}
      />
      <div
        className="absolute left-[-20%] top-[55%] h-[42rem] w-[42rem] rounded-full bg-cyan-400/10 blur-3xl animate-floaty"
        style={{ animationDelay: '-0.4s', animationDuration: '8.5s' }}
      />

      <div className="grain absolute inset-0 opacity-80" />
      <BackgroundParticles />
    </div>
  )
}
