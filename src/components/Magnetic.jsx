import { useRef } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'

export default function Magnetic({ children, strength }) {
  const ref = useRef(null)
  useMagnetic(ref, { strength })
  return (
    <span ref={ref} className="inline-block will-change-transform">
      {children}
    </span>
  )
}

