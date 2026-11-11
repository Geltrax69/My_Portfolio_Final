"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"

import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01FreeIcons, Tick01FreeIcons } from "@hugeicons/core-free-icons"

import { BookACallLink } from "@/components/ui/book-a-call-link"

// WebGL2 canvas: client-only, and loaded after the intro text paints.
const GradientASCII = dynamic(() => import("@/components/GradientASCII"), {
  ssr: false,
})

// Monochrome ramp from DESIGN.md (media charcoal → structural gray →
// gallery white), so the field reads as part of the site. Starting at
// charcoal rather than black keeps the glyphs visible on the black card.
const ASCII_COLORS = ["#2f2f2f", "#ababab", "#ffffff"]
const COPIED_RESET_MS = 1600

type ContactCardProps = {
  email: string
}

export const ContactCard = ({ email }: ContactCardProps) => {
  const shouldReduceMotion = useReducedMotion()
  const [isCopied, setIsCopied] = useState(false)
  const resetTimerRef = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
    },
    []
  )

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
    <div className="relative isolate h-48 w-full overflow-hidden rounded-xl bg-absolute-black text-gallery-white ring-1 ring-white/10">
      <div aria-hidden className="absolute inset-0">
        <GradientASCII
          colors={ASCII_COLORS}
          shape="pinch"
          scale={1.3}
          cellSize={12}
          speed={shouldReduceMotion ? 0 : 0.6}
          intro={!shouldReduceMotion}
          clickEffect="burst"
          density={1}
          gradientOpacity={0.9}
          glyphOpacity={1}
          glow={0.6}
        />
      </div>
      {/* Scrim only behind the text column keeps the email legible while
          the field stays bright on the right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"
      />

      {/* pointer-events-none lets the ASCII field react to the cursor
          everywhere except the controls themselves. */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between p-framer-5">
        <button
          type="button"
          onClick={handleCopy}
          className="group pointer-events-auto flex w-fit items-center gap-2 rounded-sm text-left outline-none focus-visible:ring-2 focus-visible:ring-gallery-white"
          aria-label={`Copy email address ${email}`}
        >
          <span className="type-body-small break-all text-gallery-white">
            {email}
          </span>
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
            <HugeiconsIcon
              icon={isCopied ? Tick01FreeIcons : Copy01FreeIcons}
              size={14}
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
          className="pointer-events-auto"
        />
      </div>
    </div>
  )
}
