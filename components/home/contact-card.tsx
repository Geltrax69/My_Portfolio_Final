"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01FreeIcons, Tick01FreeIcons } from "@hugeicons/core-free-icons"

import { BookACallLink } from "@/components/ui/book-a-call-link"

// Canvas text: client-only. Until it mounts, a plain-text email fills the
// same fixed-height box, so nothing shifts. TechText labels itself
// role="img" with the email as its accessible name.
const TechText = dynamic(() => import("@/components/TechText"), {
  ssr: false,
  loading: () => null,
})

const COPIED_RESET_MS = 1600

type ContactCardProps = {
  email: string
}

export const ContactCard = ({ email }: ContactCardProps) => {
  const [isCopied, setIsCopied] = useState(false)
  // Canvas fonts need a real family name, not the CSS variable next/font sets.
  const [fontFamily, setFontFamily] = useState("")
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    setFontFamily(getComputedStyle(document.body).fontFamily)
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
    <div className="flex w-full flex-col gap-framer-3 rounded-xl bg-secondary p-framer-3 ring-1 ring-border">
      {/* Drag the letters, click to kick them; they spring back. */}
      <div className="relative h-24 w-full text-foreground">
        {fontFamily ? (
          <TechText
            text={email}
            fontFamily={fontFamily}
            fontWeight={500}
            letterSpacing={-0.04}
            intro="type"
            introDuration={1.6}
            labels={false}
          />
        ) : (
          <p className="flex h-full items-center justify-center text-2xl font-medium tracking-tight">
            {email}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-framer-3">
        <BookACallLink href={`mailto:${email}`} imageSrc="/logo.svg" />
        <button
          type="button"
          onClick={handleCopy}
          className="flex h-12 shrink-0 items-center gap-2 rounded-full px-4 text-sm text-muted-foreground ring-1 ring-border transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground"
          aria-label={`Copy email address ${email}`}
        >
          <HugeiconsIcon
            icon={isCopied ? Tick01FreeIcons : Copy01FreeIcons}
            size={16}
            strokeWidth={2}
          />
          <span aria-live="polite">{isCopied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  )
}
