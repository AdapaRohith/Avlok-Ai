'use client'

import { useEffect, useRef, ReactNode, createContext, useContext } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProps {
  children: ReactNode
}

// Create context for Lenis instance
const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Initialize Lenis with optimized settings
    lenisRef.current = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // RAF loop for smooth animation
    function raf(time: number) {
      lenisRef.current?.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    // Handle anchor links smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            lenisRef.current?.scrollTo(targetElement as HTMLElement, {
              offset: -80,
              duration: 1.2,
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      lenisRef.current?.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      <div className="lenis-scroll-container">
        {children}
      </div>
    </LenisContext.Provider>
  )
}
