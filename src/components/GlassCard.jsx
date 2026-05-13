import { cn } from '@/utils/cn'

export default function GlassCard({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white/[0.06] p-6 shadow-glow ring-1 ring-white/10 backdrop-blur-md',
        className
      )}
      {...props}
    />
  )
}

