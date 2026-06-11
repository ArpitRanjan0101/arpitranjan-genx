import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

export function useCountUp(from = 0, to = 100, duration = 2, options = {}) {
  const { ease = 'easeOut', delay = 0 } = options
  const count = useMotionValue(from)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime = null

      const animate = (currentTime) => {
        if (startTime === null) {
          startTime = currentTime
        }

        const elapsed = (currentTime - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)

        // Simple easing functions
        const easedProgress =
          ease === 'easeOut'
            ? 1 - Math.pow(1 - progress, 3)
            : progress

        const current = from + (to - from) * easedProgress
        count.set(Math.round(current))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [from, to, duration, ease, delay, count])

  return count
}
