import { cn } from '@/utils/cn'

export default function SectionDivider({ className }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5', className)} aria-hidden="true">
      <div className="relative">
        <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />
        <div className="absolute left-0 top-1/2 h-4 w-px -translate-y-1/2 bg-white/18 sm:h-5" />
        <div className="absolute right-0 top-1/2 h-4 w-px -translate-y-1/2 bg-white/18 sm:h-5" />
      </div>
    </div>
  )
}

