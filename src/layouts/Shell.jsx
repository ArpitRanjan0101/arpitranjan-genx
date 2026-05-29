import { AnimatePresence, m } from 'framer-motion'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import { pageVariants } from '@/animations/motion'
import { NAV_ITEMS } from '@/utils/links'
import { FiInstagram, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const footerConfig = {
  quickLinks: NAV_ITEMS,
  socials: [
    { label: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/' },
    { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/' },
    { label: 'X', icon: FiTwitter, href: 'https://x.com/' },
    { label: 'Email', icon: FiMail, href: 'mailto:hello@example.com' },
  ],
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754720782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717006848248!5m2!1sen!2sin",
  copyrightText: "Arpit Ranjan — craft & motion."
}

export default function Shell({ children, activeId, ready, onReady }) {
  return (
    <div className="min-h-dvh bg-slate-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-zinc-50">
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

      <Footer {...footerConfig} />
    </div>
  )
}
