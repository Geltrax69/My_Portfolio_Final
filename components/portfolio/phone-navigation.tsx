"use client"

import { useCallback, useState } from "react"

import type { HomeSection } from "@/constants/types"

type PhoneNavigationProps = {
  sections: HomeSection[]
  className?: string
}

export const PhoneNavigation = ({
  sections,
  className = "",
}: PhoneNavigationProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "intro")

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    })
    setActiveId(id)
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className={`fixed top-3 left-1/2 z-20 -translate-x-1/2 ${className}`}
    >
      <div
        role="tablist"
        aria-label="Page sections"
        className="relative flex items-center rounded-pill bg-dark-gray/40 p-framer-1"
      >
        {sections.map((section) => {
          const isActive = activeId === section.id

          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              id={`tab-${section.id}`}
              aria-selected={isActive}
              aria-controls={section.id}
              tabIndex={isActive ? 0 : -1}
              onClick={() => scrollToSection(section.id)}
              className={`rounded-pill px-5 py-2 type-label font-medium transition-colors duration-portfolio ease-portfolio focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white ${
                isActive
                  ? "bg-portfolio-emphasis text-portfolio-emphasis-foreground"
                  : "text-gallery-white opacity-65"
              }`}
            >
              {section.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}