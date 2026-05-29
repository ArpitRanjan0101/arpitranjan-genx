import { useEffect, useRef } from 'react'

export default function BackgroundParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    let stars = []

    const initStars = () => {
      // Calculate number of stars based on screen area to ensure uniform distribution
      const area = window.innerWidth * window.innerHeight
      const numStars = Math.floor(area / 2500) // Adjust density here

      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.1 + Math.random() * 0.7, // Very small stars
        a: Math.random(), // Current alpha
        baseAlpha: 0.2 + Math.random() * 0.5, // Base alpha around which it twinkles
        twinkleSpeed: 0.002 + Math.random() * 0.008, // Very slow twinkling
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        vy: -(0.00002 + Math.random() * 0.00005), // Extremely slow upward drift
      }))
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      
      // Re-initialize stars if window size changes drastically to maintain density
      initStars()
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      
      for (const s of stars) {
        // Twinkle logic
        s.a += s.twinkleSpeed * s.twinkleDir
        if (s.a > s.baseAlpha + 0.3) {
          s.a = s.baseAlpha + 0.3
          s.twinkleDir = -1
        } else if (s.a < s.baseAlpha - 0.2) {
          s.a = Math.max(0.05, s.baseAlpha - 0.2)
          s.twinkleDir = 1
        }

        // Drift logic
        s.y += s.vy
        if (s.y < -0.01) {
          s.y = 1.01
          s.x = Math.random() // Randomize x position when wrapping around
        }

        const x = s.x * w
        const y = s.y * h
        
        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${s.a})`
        ctx.fill()
        
        // Optional: Add a subtle glow to slightly larger stars
        if (s.r > 0.5 && s.a > 0.5) {
          ctx.shadowBlur = Math.floor(s.r * 3)
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'
        } else {
          ctx.shadowBlur = 0
        }
      }
      
      raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" aria-hidden />
}

