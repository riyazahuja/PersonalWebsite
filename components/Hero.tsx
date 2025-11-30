"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [isNavInHero, setIsNavInHero] = useState(true)
  const fullText = "hi, i'm riyaz."

  // Safari video autoplay fix
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure muted is set programmatically for Safari
    video.muted = true
    video.setAttribute("muted", "")
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    
    const attemptPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, try again after a short delay
          setTimeout(() => {
            video.play().catch(() => {})
          }, 100)
        })
      }
    }

    // Try to play immediately
    attemptPlay()

    // Also try when video data is loaded
    video.addEventListener("loadeddata", attemptPlay)
    video.addEventListener("canplay", attemptPlay)

    // Fallback: play on any user interaction
    const handleInteraction = () => {
      video.play().catch(() => {})
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
      document.removeEventListener("scroll", handleInteraction)
    }
    document.addEventListener("click", handleInteraction)
    document.addEventListener("touchstart", handleInteraction)
    document.addEventListener("scroll", handleInteraction)

    return () => {
      video.removeEventListener("loadeddata", attemptPlay)
      video.removeEventListener("canplay", attemptPlay)
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
      document.removeEventListener("scroll", handleInteraction)
    }
  }, [])

  useEffect(() => {
    let index = 0
    const typingSpeed = 100
    const pauseBeforeTyping = 500
    const pauseAfterTyping = 1000

    // Initial pause
    const initialTimer = setTimeout(() => {
      const typingTimer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(typingTimer)
          // Start blinking cursor after typing is complete
          setTimeout(() => {
            setShowCursor(true)
          }, pauseAfterTyping)
        }
      }, typingSpeed)

      return () => clearInterval(typingTimer)
    }, pauseBeforeTyping)

    return () => clearTimeout(initialTimer)
  }, [])

  // Named scroll handler for reuse
  const handleScrollUpdate = () => {
    const y = window.scrollY
    const navigation = document.getElementById("navigation")
    const hero = document.getElementById("hero")

    // Check if navigation is within hero section
    if (hero && navigation) {
      const heroBottom = hero.offsetHeight
      const navTop = navigation.getBoundingClientRect().top + y
      setIsNavInHero(navTop < heroBottom)
    }

    if (navigation) {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50

      if (isAtBottom && window.innerWidth >= 1160) {
        navigation.classList.add("bottom-navigation")
        navigation.classList.remove("moved-navigation")
      } else if (y > 1 && window.innerWidth >= 1160) {
        navigation.classList.add("moved-navigation")
        navigation.classList.remove("bottom-navigation")
      } else {
        navigation.classList.remove("moved-navigation")
        navigation.classList.remove("bottom-navigation")
      }
    }

    // Determine active section based on scroll position
    const sections = [
      { id: "about", element: document.getElementById("about") },
      { id: "news", element: document.getElementById("news") },
      { id: "research", element: document.getElementById("research") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "other", element: document.getElementById("other") },
    ]

    const anchor = y + window.innerHeight / 3 // sampling point in viewport

    let currentSection = ""

    // Prefer the section whose bounds contain the anchor
    for (const section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect()
        const top = rect.top + y
        const bottom = top + rect.height
        if (anchor >= top && anchor < bottom) {
          currentSection = section.id
          break
        }
      }
    }

    // If at the very bottom of the page, force "other" as active
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      currentSection = "other"
    }

    // Fallback: last section that started before the anchor
    if (!currentSection) {
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const top = rect.top + y
          if (anchor >= top) {
            currentSection = section.id
          }
        }
      }
    }

    setActiveSection(currentSection)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUpdate)
    // Call once to set initial state
    handleScrollUpdate()
    return () => window.removeEventListener("scroll", handleScrollUpdate)
  }, [])

  const handleScrollToContent = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // After smooth scroll, force scroll handler to update active section
      setTimeout(() => {
        handleScrollUpdate()
      }, 400) // Wait for scroll animation
    }
  }

  const navItems = [
    { id: "about", label: "about" },
    { id: "news", label: "news" },
    { id: "research", label: "research" },
    { id: "projects", label: "projects" },
    { id: "other", label: "other" },
  ]

  return (
    <div id="hero" className="w-screen h-screen relative overflow-hidden bg-stagira-indigo">
      {/* Blurred Background Video - zoomed and heavily blurred to fill margins */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Logo */}
      {/* <div
        id="logo"
        className="absolute top-12 left-12 w-15 h-15 border-stagira-indigo flex items-center justify-center cursor-hover z-10"
      >
        <Image src="/images/logo.svg" alt="S" width={65} height={65} className="object-contain" />
      </div> */}

      {/* Navigation */}
      <nav id="navigation" className="fixed top-12 right-12 text-right text-xl transition-all duration-1000 z-50">
        <ul className="space-y-5">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNavClick(`#${item.id}`)}
                className={`hover:text-aureate-gold transition-colors duration-300 font-light cursor-hover ${
                  activeSection === item.id
                    ? "text-aureate-gold"
                    : isNavInHero
                      ? "text-papyrus-white"
                      : "text-stagira-indigo"
                }`}
              >
                {item.label}
              </button>
              {/* Active indicator dot */}
              <div
                className={`absolute -right-4 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isNavInHero ? "bg-papyrus-white" : "bg-stagira-indigo"
                } ${activeSection === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Welcome */}
      <div id="welcome" className="absolute bottom-12 left-12 z-10">
        <div className="relative">
          <h1 className="text-4xl font-mono mb-3 text-papyrus-white">
        <span>{displayText}</span>
        <span
          className={`inline-block w-0.5 h-10 bg-papyrus-white ml-1 ${
            showCursor && displayText === fullText ? "animate-blink" : ""
          }`}
        />
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div id="to-bottom" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
        <button onClick={handleScrollToContent} className="hover:opacity-70 transition-opacity cursor-hover">
          <ChevronDown size={32} className="text-papyrus-white" />
        </button>
      </div>
    </div>
  )
}
