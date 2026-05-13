import { useEffect, useMemo, useState } from 'react'

export function useSectionSpy(ids, { rootMargin = '-40% 0px -55% 0px' } = {}) {
  const [activeId, setActiveId] = useState(ids?.[0] || 'hero')
  const idSet = useMemo(() => new Set(ids), [ids])

  useEffect(() => {
    if (!ids?.length) return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((el) => ({ id: el.id, el }))

    if (!elements.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && idSet.has(e.target.id))
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { root: null, rootMargin, threshold: [0.1, 0.25, 0.35, 0.5, 0.7] }
    )

    for (const { el } of elements) obs.observe(el)
    return () => obs.disconnect()
  }, [ids, idSet, rootMargin])

  return activeId
}

