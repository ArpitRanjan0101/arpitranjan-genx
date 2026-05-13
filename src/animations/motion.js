export const easeOutExpo = [0.16, 1, 0.3, 1]

export const pageVariants = {
  initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easeOutExpo },
  },
  exit: { opacity: 0, y: -10, filter: 'blur(10px)', transition: { duration: 0.35 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay, ease: easeOutExpo },
  }),
}

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
}

