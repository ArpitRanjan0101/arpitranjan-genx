import { cn } from '@/utils/cn'

export default function Container({ className, ...props }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5', className)} {...props} />
}

