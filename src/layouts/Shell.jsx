import { AnimatePresence, m } from 'framer-motion'
import Background from '@/components/Background'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import { pageVariants } from '@/animations/motion'

export default function Shell({ children, activeId, ready, onReady }) {
  return (
    <div className="min-h-dvh bg-ink-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-zinc-50">
      <Background />
      <div className="site-frame" aria-hidden="true" />
      <Cursor />

      <AnimatePresence initial>
        {!ready && <LoadingScreen key="loader" onDone={onReady} />}
      </AnimatePresence>

      <Navbar activeId={activeId} />

      <m.main variants={pageVariants} initial="initial" animate="enter" exit="exit" className="relative">
        {children}
      </m.main>

      <Footer />
    </div>
  )
}
