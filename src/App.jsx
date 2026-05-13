import React, { useMemo, useState } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { useLenis } from '@/hooks/useLenis'
import { useSectionSpy } from '@/hooks/useSectionSpy'
import Shell from '@/layouts/Shell'
import Home from '@/pages/Home'

export default function App() {
  useLenis()
  const sections = useMemo(
    () => ['hero', 'about', 'skills', 'projects', 'experience', 'contact'],
    []
  )
  const activeId = useSectionSpy(sections, { rootMargin: '-45% 0px -45% 0px' })
  const [ready, setReady] = useState(false)

  return (
    <LazyMotion features={domAnimation}>
      <Shell activeId={activeId} ready={ready} onReady={() => setReady(true)}>
        <Home />
      </Shell>
    </LazyMotion>
  )
}
