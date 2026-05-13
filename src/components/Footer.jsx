import Container from '@/components/Container'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socials = [
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/' },
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/' },
  { label: 'Twitter/X', icon: FiTwitter, href: 'https://x.com/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="text-sm text-zinc-400">
          <span className="text-zinc-200">Arpit Ranjan</span> — craft & motion.
        </div>
        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                aria-label={s.label}
              >
                <Icon className="text-zinc-200 transition group-hover:text-white" />
              </a>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}

