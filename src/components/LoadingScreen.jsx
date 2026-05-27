import { m, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const greetings = [
  "Hello", "Welcome", "Namaste", "Jai Shree Ram", "Radhe Radhe", "Salam", "Sat Sri Akal"
]

export default function LoadingScreen({ onDone }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Start from the beginning to ensure all are shown
    setIndex(0)
    
    // Cycle to a new greeting every 1200ms for a more deliberate, professional pace
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 1200)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <m.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="w-full max-w-sm px-6 flex flex-col items-center text-center">
        
        {/* Greeting Text */}
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <m.h2 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-5xl sm:text-6xl font-medium tracking-tight text-white font-caveat"
            >
              {greetings[index]}
            </m.h2>
          </AnimatePresence>
        </div>

        {/* Mac-style Progress Bar */}
        <div className="w-48 overflow-hidden rounded-full bg-white/20 mt-10">
          <m.div
            className="h-1 w-full origin-left bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 8.5, ease: "easeInOut" }}
            onAnimationComplete={onDone}
          />
        </div>

      </div>
    </m.div>
  )
}

