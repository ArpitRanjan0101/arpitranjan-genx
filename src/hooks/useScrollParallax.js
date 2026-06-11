import { useMotionValue, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function useScrollParallax(offset = 50) {
  const ref = useRef(null)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, (latest) => {
    if (!ref.current) return 0
    const rect = ref.current.getBoundingClientRect()
    const elementTop = rect.top + window.scrollY
    const scrolled = window.scrollY - elementTop
    return scrolled * (offset / 100)
  })

  return { ref, y }
}

export function useScrollTransform(inputRange, outputRange) {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, inputRange, outputRange)
}
