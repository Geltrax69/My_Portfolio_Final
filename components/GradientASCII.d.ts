import type { CSSProperties, FC } from "react"

// Types for the React Bits JS component (GradientASCII.jsx); every prop is
// optional and falls back to the component's own defaults.
export type GradientASCIIProps = {
  colors?: string[]
  shape?: "horizon" | "pinch" | "rise" | "eclipse"
  characters?: string
  cellSize?: number
  density?: number
  glyphOpacity?: number
  glow?: number
  depthOfField?: number
  flicker?: number
  softness?: number
  scale?: number
  flow?: number
  speed?: number
  gradientOpacity?: number
  grain?: number
  variation?: number
  mouseInteraction?: boolean
  scrambleRadius?: number
  clickEffect?: "none" | "wave" | "burst"
  intro?: boolean
  lightMode?: boolean
  /** Stop the render loop once intro and pointer effects settle. */
  paused?: boolean
  fontFamily?: string
  dpr?: number
  className?: string
  style?: CSSProperties
}

declare const GradientASCII: FC<GradientASCIIProps>
export default GradientASCII
