import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'resume', 'projects', 'skills', 'contact'] as const

export function useActiveSection(): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting && e.intersectionRatio > 0)
        if (visible.length === 0) return
        // Prefer the one with largest intersection ratio, then topmost in document order
        const best = visible.reduce((a, b) =>
          (a.intersectionRatio >= b.intersectionRatio ? a : b)
        )
        const id = best.target.id
        if (id) setActiveId(id)
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
