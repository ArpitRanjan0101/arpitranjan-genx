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

    let scrollY = window.scrollY || 0

    const initStars = () => {
      const area = window.innerWidth * window.innerHeight
      const numStars = Math.floor(area / 2500)

      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.5 + Math.random() * 1.2,
        a: Math.random(),
        baseAlpha: 0.2 + Math.random() * 0.5,
        twinkleSpeed: 0.002 + Math.random() * 0.008,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        scrollSpeed: 0.2 + Math.random() * 0.5, // Parallax scroll speed
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
      
      initStars()
    }

    const onScroll = () => {
      scrollY = window.scrollY
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

        // Calculate Y position with parallax scroll
        // This makes the stars move up as the user scrolls down, seamless wrapping
        let yPos = (s.y * h - scrollY * s.scrollSpeed) % h
        if (yPos < 0) yPos += h

        const x = s.x * w
        
        ctx.beginPath()
        ctx.arc(x, yPos, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${s.a})`
        ctx.fill()
      }
      
      raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" aria-hidden />
}

