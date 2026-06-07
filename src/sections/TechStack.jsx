import React from 'react'
import { m } from 'framer-motion'
import Container from '@/components/Container'
import SectionFrame from '@/components/SectionFrame'
import SectionDivider from '@/components/SectionDivider'
import TechGlobe from '@/components/TechGlobe'
import { fadeUp, stagger } from '@/animations/motion'
import {
  SiReact, SiHtml5, SiNextdotjs, SiTypescript, SiExpress,
  SiKubernetes, SiJavascript, SiMysql, SiGit, SiPhp,
  SiMongodb, SiDocker, SiGithub,
} from 'react-icons/si'
import { FaCss3Alt, FaJava, FaLink, FaProjectDiagram, FaRobot, FaDatabase } from 'react-icons/fa'

const CATEGORIES = [
  {
    label: 'Frontend',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    ring: 'ring-cyan-500/20',
    dot: 'bg-cyan-400',
    techs: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    ring: 'ring-violet-500/20',
    dot: 'bg-violet-400',
    techs: ['Node.js', 'Express', 'Java', 'PHP'],
  },
  {
    label: 'AI & Agents',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    ring: 'ring-emerald-500/20',
    dot: 'bg-emerald-400',
    techs: ['LangChain', 'LangGraph', 'RAG', 'Vector DB'],
  },
  {
    label: 'Infrastructure',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    ring: 'ring-orange-500/20',
    dot: 'bg-orange-400',
    techs: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'MySQL', 'MongoDB'],
  },
]

const ICONS = [
  { name: 'React',      icon: SiReact,         color: '#61DAFB' },
  { name: 'Next.js',    icon: SiNextdotjs,     color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript,    color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript,    color: '#F7DF1E' },
  { name: 'HTML5',      icon: SiHtml5,         color: '#E34F26' },
  { name: 'CSS3',       icon: FaCss3Alt,       color: '#1572B6' },
  { name: 'Express',    icon: SiExpress,       color: '#FFFFFF' },
  { name: 'Java',       icon: FaJava,          color: '#007396' },
  { name: 'PHP',        icon: SiPhp,           color: '#777BB4' },
  { name: 'MySQL',      icon: SiMysql,         color: '#4479A1' },
  { name: 'MongoDB',    icon: SiMongodb,       color: '#47A248' },
  { name: 'Docker',     icon: SiDocker,        color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes,    color: '#326CE5' },
  { name: 'Git',        icon: SiGit,           color: '#F05032' },
  { name: 'GitHub',     icon: SiGithub,        color: '#FFFFFF' },
  { name: 'LangChain',  icon: FaLink,          color: '#FFFFFF' },
  { name: 'LangGraph',  icon: FaProjectDiagram,color: '#FFFFFF' },
  { name: 'RAG',        icon: FaRobot,         color: '#00B4D8' },
  { name: 'Vector DB',  icon: FaDatabase,      color: '#009688' },
]

const STATS = [
  { value: '19+', label: 'Technologies' },
  { value: '4',   label: 'Domains' },
  { value: '∞',   label: 'Learning' },
]

export default function TechStack() {
  return (
    <SectionFrame id="tech-stack" className="py-16 sm:py-24 relative z-10">
      <SectionDivider className="mb-10 sm:mb-12" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* ── Left: Text + Category Cards ── */}
          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px -20% 0px' }}
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <m.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-[0.18em] text-zinc-400 uppercase ring-1 ring-white/10"
            >
              <span className="text-indigo-400">✦</span> Tech Stack
            </m.div>

            {/* Headline */}
            <m.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.08]"
            >
              The tools that<br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                power my work.
              </span>
            </m.h2>

            {/* Description */}
            <m.p variants={fadeUp} className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              19+ technologies across 4 domains — from UI to infrastructure, and deep into Agentic AI and LLM systems.
            </m.p>

            {/* Category cards */}
            <m.div variants={stagger} className="mt-8 w-full space-y-2.5">
              {CATEGORIES.map((cat) => (
                <m.div
                  key={cat.label}
                  variants={fadeUp}
                  className="flex items-start gap-3.5 rounded-xl bg-white/[0.03] p-3.5 ring-1 ring-white/[0.07] transition-colors duration-200 hover:bg-white/[0.06] hover:ring-white/[0.12]"
                >
                  <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${cat.bg} ring-1 ${cat.ring}`}>
                    <span className={`h-2 w-2 rounded-full ${cat.dot}`} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${cat.color}`}>
                      {cat.label}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                      {cat.techs.join(' · ')}
                    </p>
                  </div>
                </m.div>
              ))}
            </m.div>

            {/* Stats strip */}
            <m.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-8 border-t border-white/[0.08] pt-6 w-full"
            >
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div>
                    <p className="text-xl font-bold text-zinc-100">{s.value}</p>
                    <p className="mt-0.5 text-xs text-zinc-600">{s.label}</p>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="h-8 w-px bg-white/[0.08]" />
                  )}
                </React.Fragment>
              ))}
            </m.div>
          </m.div>

          {/* ── Right: 3D Globe ── */}
          <div className="relative h-[32rem] sm:h-[36rem] flex items-center justify-center">
            <TechGlobe icons={ICONS} />
          </div>

        </div>
      </Container>
    </SectionFrame>
  )
}
