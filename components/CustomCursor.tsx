"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isInHero, setIsInHero] = useState(true)

  useEffect(() => {
    // Check if device is desktop (has hover capability and pointer is fine)
    const checkIsDesktop = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches
      const isLargeScreen = window.innerWidth >= 1024 // Desktop breakpoint

      setIsDesktop(hasHover && hasFinePointer && isLargeScreen)
    }

    // Check on mount and resize
    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)

    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  useEffect(() => {
    // Only add cursor functionality on desktop
    if (!isDesktop) return

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if cursor is within hero section
      const hero = document.getElementById("hero")
      if (hero) {
        const heroRect = hero.getBoundingClientRect()
        const cursorInHero = e.clientY >= heroRect.top && e.clientY <= heroRect.bottom
        setIsInHero(cursorInHero)
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseOut = () => setIsVisible(false)
    const handleMouseOver = () => setIsVisible(true)

    // Add event listeners for cursor movement
    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mouseover", handleMouseOver)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, select, [role='button'], .cursor-hover",
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseover", handleMouseOver)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isVisible, isDesktop])

  // Don't render cursor on non-desktop devices
  if (!isDesktop) return null

  return (
    <>
      {/* Main cursor dot - changes color based on section */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isInHero ? "bg-papyrus-white" : "bg-stagira-indigo"}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />

      {/* Outer ring - changes color based on section, expanding radius */}
      <div
        className={`fixed top-0 left-0 border rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? "opacity-30" : "opacity-0"
        } ${isHovering ? "w-10 h-10" : "w-8 h-8"} ${isInHero ? "border-papyrus-white" : "border-stagira-indigo"}`}
        style={{
          transform: `translate(${position.x - (isHovering ? 20 : 16)}px, ${position.y - (isHovering ? 20 : 16)}px)`,
        }}
      />
    </>
  )
}
