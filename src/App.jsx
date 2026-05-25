import React, { useMemo, useState, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { useLenis } from '@/hooks/useLenis'
import { useSectionSpy } from '@/hooks/useSectionSpy'
import Shell from '@/layouts/Shell'
import Home from '@/pages/Home'
import NonTechnicalSkills from '@/pages/NonTechnicalSkills'
import CursorCat from '@/components/CursorCat'

// Custom event to trigger navigation from anywhere
export const navigate = (path) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event('popstate'))
}

export default function App() {
  useLenis()
  const sections = useMemo(
    () => ['hero', 'about', 'skills', 'projects', 'experience', 'contact'],
    []
  )
  const activeId = useSectionSpy(sections, { rootMargin: '-45% 0px -45% 0px' })
  const [ready, setReady] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <CursorCat />
      <Shell activeId={currentPath === '/' ? activeId : ''} ready={ready} onReady={() => setReady(true)}>
        {currentPath === '/non-technical-skills' ? <NonTechnicalSkills /> : <Home />}
      </Shell>
    </LazyMotion>
  )
}
