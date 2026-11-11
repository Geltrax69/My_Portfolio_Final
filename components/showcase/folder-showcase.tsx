"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Folder } from "@/components/ui/folder-component"

export const FolderShowcase = () => {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // The folder paints its colours into SVG attributes, so wait for the
  // resolved theme on the client instead of risking a hydration mismatch.
  const color = isMounted && resolvedTheme === "light" ? "white" : "black"

  return <Folder size="sm" color={color} />
}
