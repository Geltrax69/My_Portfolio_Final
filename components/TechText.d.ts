import type { CSSProperties, FC } from "react"

// Types for the React Bits JS component (TechText.jsx); every prop is
// optional and falls back to the component's own defaults.
export type TechTextProps = {
  text?: string
  fontFamily?: string
  fontWeight?: number
  fontSize?: number
  letterSpacing?: number
  color?: string
  accentColor?: string
  align?: "left" | "center" | "right"
  reach?: number
  softness?: number
  dashLength?: number
  dashGap?: number
  strokeWidth?: number
  lineStyle?: "dashed" | "solid" | "dotted"
  reveal?: "letter" | "area"
  specks?: number
  selection?: boolean
  labels?: boolean
  draggable?: boolean
  bounce?: number
  sweep?: boolean
  speed?: number
  clickKick?: boolean
  intro?: "none" | "type" | "metrics" | "assemble"
  introDuration?: number
  guides?: boolean
  className?: string
  style?: CSSProperties
}

declare const TechText: FC<TechTextProps>
export default TechText
