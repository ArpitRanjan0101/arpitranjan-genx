import React, { Suspense, lazy } from 'react'

const Hero = lazy(() => import('@/sections/Hero'))
const TechStack = lazy(() => import('@/sections/TechStack'))
const About = lazy(() => import('@/sections/About'))
const Skills = lazy(() => import('@/sections/Skills'))
const Projects = lazy(() => import('@/sections/Projects'))
const Experience = lazy(() => import('@/sections/Experience'))
const Contact = lazy(() => import('@/sections/Contact'))

export default function Home() {
  return (
    <Suspense
      fallback={<div className="mx-auto max-w-6xl px-5 pt-24 pb-24 text-zinc-300">Loading…</div>}
    >
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Suspense>
  )
}

