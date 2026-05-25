import React from 'react'
import Container from '@/components/Container'
import SectionFrame from '@/components/SectionFrame'
import { cn } from '@/utils/cn'

import {
  SiReact,
  SiHtml5,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiKubernetes,
  SiJavascript,
  SiMysql,
  SiGit,
  SiPhp,
  SiMongodb,
  SiDocker,
  SiGithub
} from 'react-icons/si'
import { FaCss3Alt, FaJava, FaLink, FaProjectDiagram, FaRobot, FaDatabase } from 'react-icons/fa'

const COLUMNS = [
  [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  ],
  [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  ],
  [
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
  ],
  [
    { name: 'LangChain', icon: FaLink, color: '#000000' },
    { name: 'LangGraph', icon: FaProjectDiagram, color: '#000000' },
    { name: 'RAG', icon: FaRobot, color: '#00B4D8' },
    { name: 'Vector DB', icon: FaDatabase, color: '#009688' },
  ]
]

import TechGlobe from '@/components/TechGlobe'

// Flatten COLUMNS into a single array for the 3D globe
const ICONS = COLUMNS.flat()

export default function TechStack() {
  return (
    <SectionFrame id="tech-stack" className="py-24 sm:py-32 relative z-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-widest text-zinc-300 uppercase">
              <span className="text-white">✦</span> Tech Stack
            </div>
            
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Key Technologies<br />
              <span className="font-light italic text-zinc-400">& Platforms</span>
            </h2>
            
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              A curated set of modern tools I use to build fast, scalable, and production-ready applications.
            </p>
          </div>

          {/* Right Column - 3D Globe */}
          <div className="relative h-[32rem] sm:h-[36rem] flex items-center justify-center">
            <TechGlobe icons={ICONS} />
          </div>
        </div>
      </Container>
    </SectionFrame>
  )
}
