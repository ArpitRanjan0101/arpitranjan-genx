import { m, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { easeOutExpo } from '@/animations/motion'

const greetings = [
  "Hello", "Welcome", "Bonjour", "Bienvenue", "Hola", "Bienvenido",
  "Ciao", "Benvenuto", "Hallo", "Willkommen", "Namaste", "Swagat",
  "Konnichiwa", "Yōkoso", "Nǐ hǎo", "Huānyíng", "Annyeonghaseyo", "Hwanyeong",
  "Olá", "Bem-vindo", "Salam", "Marhaban", "Privet", "Dobro pozhalovat"
]

export default function LoadingScreen({ onDone }) {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    setGreeting(randomGreeting)
  }, [])

  return (
    <m.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <m.div
        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className="w-full max-w-sm px-6 text-center"
      >
        <h2 className="mb-8 text-3xl sm:text-4xl font-bold tracking-tight text-white">
          <span className="bg-gradient-to-br from-indigo-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
            {greeting}
          </span>
        </h2>

        <div className="mt-6 overflow-hidden rounded-full bg-white/8 ring-1 ring-white/10">
          <m.div
            className="h-2 w-full origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.05, ease: easeOutExpo }}
            onAnimationComplete={onDone}
          />
        </div>

        <div className="mt-8 text-xs text-zinc-500">Scroll · Hover · Explore</div>
      </m.div>
    </m.div>
  )
}

