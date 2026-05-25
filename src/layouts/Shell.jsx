import { AnimatePresence, m } from 'framer-motion'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import { pageVariants } from '@/animations/motion'

export default function Shell({ children, activeId, ready, onReady }) {
  return (
    <div className="min-h-dvh bg-black text-zinc-100 selection:bg-indigo-500/30 selection:text-zinc-50">
      <Background />
      <div className="site-frame" aria-hidden="true">
        <div className="site-frame__line site-frame__line--l" />
        <div className="site-frame__line site-frame__line--r" />
      </div>

      <AnimatePresence initial>
        {!ready && <LoadingScreen key="loader" onDone={onReady} />}
      </AnimatePresence>

      <m.main variants={pageVariants} initial="initial" animate="enter" exit="exit" className="relative z-0">
        {children}
      </m.main>

      <Navbar activeId={activeId} />

      <Footer />
    </div>
  )
}
