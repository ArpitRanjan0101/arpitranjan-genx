import { m } from 'framer-motion'
import { fadeUp } from '@/animations/motion'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <m.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-15% 0px -30% 0px' }}
        className="text-xs font-medium tracking-[0.22em] text-zinc-400"
      >
        {eyebrow}
      </m.p>
      <m.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        custom={0.08}
        viewport={{ once: true, margin: '-15% 0px -30% 0px' }}
        className="mt-3 text-balance text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
      >
        {title}
      </m.h2>
      {subtitle ? (
        <m.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.16}
          viewport={{ once: true, margin: '-15% 0px -30% 0px' }}
          className="mt-3 max-w-3xl text-pretty font-caveat text-2xl font-medium leading-snug text-zinc-300 sm:text-3xl"
        >
          {subtitle}
        </m.p>
      ) : null}
    </div>
  )
}
