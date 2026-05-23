import React from 'react'
import { m } from 'framer-motion'
import Container from '@/components/Container'
import { fadeUp, stagger } from '@/animations/motion'

import {
  SiReact,
  SiHtml5,
  SiMicrosoftazure,
  SiAppwrite,
  SiNextdotjs,
  SiCss3,
  SiAmazonwebservices,
  SiPostman,
  SiTypescript,
  SiExpress,
  SiKubernetes,
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiGit,
  SiGo
} from 'react-icons/si'

const ICONS = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0089D6' },
  { name: 'Appwrite', icon: SiAppwrite, color: '#FD366E' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#232F3E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Go', icon: SiGo, color: '#00ADD8' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="pt-20 sm:pt-24 relative z-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
            variants={stagger}
            className="flex flex-col items-start"
          >
            <m.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-widest text-zinc-300 uppercase">
              <span className="text-white">✦</span> Tech Stack
            </m.div>
            
            <m.h2 variants={fadeUp} className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Key Technologies<br />
              <span className="font-light italic text-zinc-400">& Platforms</span>
            </m.h2>
            
            <m.p variants={fadeUp} className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              A curated set of modern tools I use to build fast, scalable, and production-ready applications.
            </m.p>
          </m.div>

          {/* Right Column */}
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px -30% 0px' }}
            variants={fadeUp}
            className="relative rounded-[2rem] bg-[#111111] border border-white/5 p-8 shadow-2xl"
          >
            <div className="grid grid-cols-4 gap-4 sm:gap-6">
              {ICONS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform hover:scale-110">
                      <Icon size={32} color={item.color} />
                    </div>
                    <span className="text-xs font-medium text-zinc-300">{item.name}</span>
                  </div>
                )
              })}
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  )
}
