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

          {/* Right Column - Marquee */}
          <div className="relative h-[32rem] overflow-hidden rounded-[2rem] bg-[#111111] border border-white/5 p-4 sm:p-6 shadow-2xl flex gap-3 sm:gap-5 justify-between select-none">
            {/* Fade masks for smooth entry/exit */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 sm:h-20 bg-gradient-to-b from-[#111111] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-20 bg-gradient-to-t from-[#111111] to-transparent z-10" />

            {COLUMNS.map((col, i) => (
              <div key={i} className="flex-1 overflow-hidden relative">
                <div 
                  className={cn(
                    "flex flex-col gap-4 sm:gap-6 w-full absolute left-0 right-0",
                    i % 2 === 0 ? "animate-[marquee-up_15s_linear_infinite]" : "animate-[marquee-down_18s_linear_infinite]"
                  )}
                >
                  {/* Duplicate 4 times to ensure smooth infinite loop and full coverage */}
                  {[...col, ...col, ...col, ...col].map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <div key={idx} className="flex flex-col items-center gap-2 sm:gap-3">
                        <div className="flex h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem] items-center justify-center rounded-2xl bg-white shadow-sm hover:scale-105 transition-transform duration-300">
                          <Icon size={32} color={item.color} />
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium text-zinc-400 whitespace-nowrap">{item.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionFrame>
  )
}
