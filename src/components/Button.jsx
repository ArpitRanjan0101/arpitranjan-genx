import { cn } from '@/utils/cn'

export default function Button({ as: Comp = 'a', className, variant = 'primary', ...props }) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'
  const variants = {
    primary:
      'bg-white/10 text-zinc-50 shadow-glow backdrop-blur-md ring-1 ring-white/10 hover:bg-white/14 hover:ring-white/18',
    ghost: 'bg-transparent text-zinc-200 ring-1 ring-white/10 hover:bg-white/6 hover:text-zinc-50',
  }

  return <Comp className={cn(base, variants[variant], className)} {...props} />
}

