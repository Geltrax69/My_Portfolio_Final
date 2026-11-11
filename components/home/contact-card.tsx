"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01FreeIcons, Tick01FreeIcons } from "@hugeicons/core-free-icons"

import { BookACallLink } from "@/components/ui/book-a-call-link"

// WebGL2 canvas: client-only, and loaded after the intro text paints.
const GradientASCII = dynamic(() => import("@/components/GradientASCII"), {
  ssr: false,
})

// Monochrome ramp from DESIGN.md (media charcoal → structural gray →
// gallery white), so the field reads as part of the site.
const ASCII_COLORS = ["#2f2f2f", "#ababab", "#ffffff"]
const COPIED_RESET_MS = 1600
// Retina at 2x quadruples the pixels; ASCII glyphs stay crisp at 1.5x.
const MAX_ASCII_DPR = 1.5

type ContactCardProps = {
  email: string
}

export const ContactCard = ({ email }: ContactCardProps) => {
  const [isCopied, setIsCopied] = useState(false)
  // The field plays its intro, then only animates while the card is hovered
  // or focused. Idle, it renders nothing per frame.
  const [isActive, setIsActive] = useState(false)
  const [dpr, setDpr] = useState(1)
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio || 1, MAX_ASCII_DPR))
    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
      resetTimerRef.current = window.setTimeout(
        () => setIsCopied(false),
        COPIED_RESET_MS
      )
    } catch {
      // Clipboard can be blocked; the mailto pill still works.
    }
  }

  return (
    <div
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={(event) =>
        setIsActive(event.currentTarget.contains(event.relatedTarget))
      }
      className="relative isolate h-48 w-full overflow-hidden rounded-xl bg-absolute-black text-gallery-white ring-1 ring-white/10"
    >
      <div aria-hidden className="absolute inset-0">
        <GradientASCII
          colors={ASCII_COLORS}
          shape="pinch"
          scale={1.3}
          cellSize={12}
          speed={0.6}
          paused={!isActive}
          dpr={dpr}
          clickEffect="burst"
          density={1}
          gradientOpacity={0.35}
          glyphOpacity={0.85}
          glow={0}
        />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-start justify-between p-framer-5">
        {/* Solid chip: the email stays readable over any part of the field. */}
        <button
          type="button"
          onClick={handleCopy}
          className="pointer-events-auto flex max-w-full items-center gap-2 rounded-full bg-absolute-black/85 py-1.5 pr-1.5 pl-3.5 text-gallery-white ring-1 ring-white/15 backdrop-blur-sm transition-colors outline-none hover:bg-absolute-black focus-visible:ring-2 focus-visible:ring-gallery-white"
          aria-label={`Copy email address ${email}`}
        >
          <span className="truncate text-sm tracking-tight">{email}</span>
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15">
            <HugeiconsIcon
              icon={isCopied ? Tick01FreeIcons : Copy01FreeIcons}
              size={13}
              strokeWidth={2}
            />
          </span>
          <span className="sr-only" aria-live="polite">
            {isCopied ? "Email copied" : ""}
          </span>
        </button>

        <BookACallLink
          href={`mailto:${email}`}
          imageSrc="/logo.svg"
          className="pointer-events-auto ring-1 ring-white/15"
        />
      </div>
    </div>
  )
}
