import type { Stat } from "@/constants/types"

export const homeAbout = {
  heading: "Between design and code",
  body: "I build scalable software that combines backend engineering, modern web development, cloud infrastructure, and AI. From system architecture to polished user interfaces, I enjoy turning ideas into production-ready products.",
} as const

export const homeStats: Stat[] = [
  { value: "5", label: "Projects shipped" },
  { value: "3", label: "Disciplines" },
  { value: "100%", label: "Design-led code" },
]
