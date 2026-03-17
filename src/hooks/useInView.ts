import { useState, useEffect, useRef, useCallback } from 'react'

interface UseInViewOptions {
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0, triggerOnce = true } = options
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node
  }, [])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsInView(true)
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold, triggerOnce])

  return { ref: setRef, isInView }
}
