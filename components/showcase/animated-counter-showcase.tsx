"use client"

import { useEffect, useState } from "react"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import type { ShowcaseComponentProps } from "@/components/showcase/showcase-component-registry"

const AMOUNTS = [124580, 98240, 1736500, 452000, 7809]
const ROLL_INTERVAL_MS = 2600

export const AnimatedCounterShowcase = ({
  resetSignal = 0,
}: ShowcaseComponentProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [resetSignal])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % AMOUNTS.length)
    }, ROLL_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <button
      type="button"
      onClick={() => setIndex((current) => (current + 1) % AMOUNTS.length)}
      className="flex flex-col items-center gap-2 rounded-md px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Roll to the next amount"
    >
      <AnimatedCounter
        value={AMOUNTS[index]}
        prefix="₹"
        grouping="indian"
        duration={0.7}
        className="text-3xl font-medium tracking-tight tabular-nums xl:text-4xl"
      />
      <span className="text-xs text-muted-foreground">Fees collected today</span>
    </button>
  )
}
