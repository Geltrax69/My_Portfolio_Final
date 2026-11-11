"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

import { MediaPlaceholder } from "@/components/portfolio/media-placeholder"

export type ShowcaseComponentProps = {
  resetSignal?: number
}

const ComponentLoadingPlaceholder = () => (
  <div className="relative size-full min-h-[inherit] overflow-hidden bg-portfolio-media">
    <MediaPlaceholder variant="component" />
  </div>
)

const CardHoverShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/card-hover-showcase").then((module) => {
      const CardHoverRegistryShowcase = () => <module.HolographicReferralCard />

      return CardHoverRegistryShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const EditTimeRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/edit-time-showcase").then((module) => {
      const EditTimeShowcase = () => <module.EditTimeShowcase />

      return EditTimeShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const AnalogStickRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/analog-stick-showcase").then((module) => {
      const AnalogStickShowcase = () => <module.AnalogStick />

      return AnalogStickShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const ThemeToggleRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/theme-toggle-showcase").then((module) => {
      const ThemeToggleShowcase = () => <module.ThemeToggle />

      return ThemeToggleShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const SetTimerRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/set-timer-showcase").then(
      (module) => module.SetTimer
    ),
  { loading: ComponentLoadingPlaceholder }
)

const FolderRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/folder-showcase").then(
      (module) => module.FolderShowcase
    ),
  { loading: ComponentLoadingPlaceholder }
)

const AnimatedCounterRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/animated-counter-showcase").then(
      (module) => module.AnimatedCounterShowcase
    ),
  { loading: ComponentLoadingPlaceholder }
)

const TimezoneRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/timezone-showcase").then(
      (module) => module.TimezoneShowcase
    ),
  { loading: ComponentLoadingPlaceholder }
)

const showcaseComponentPreloaders: Record<string, () => Promise<unknown>> = {
  "edit-time": () => import("@/components/showcase/edit-time-showcase"),
  "card-hover": () => import("@/components/showcase/card-hover-showcase"),
  "analog-stick": () => import("@/components/showcase/analog-stick-showcase"),
  folder: () => import("@/components/showcase/folder-showcase"),
  "animated-counter": () =>
    import("@/components/showcase/animated-counter-showcase"),
  "theme-toggle": () => import("@/components/showcase/theme-toggle-showcase"),
  "set-timer": () => import("@/components/showcase/set-timer-showcase"),
  "timezone": () => import("@/components/showcase/timezone-showcase"),
}

export const preloadShowcaseComponent = (componentKey: string) => {
  const preloadComponent = showcaseComponentPreloaders[componentKey]

  if (!preloadComponent) {
    return
  }

  void preloadComponent()
}

export const showcaseComponentRegistry: Record<
  string,
  ComponentType<ShowcaseComponentProps>
> = {
  "edit-time": EditTimeRegistryShowcase,
  "card-hover": CardHoverShowcase,
  "analog-stick": AnalogStickRegistryShowcase,
  folder: FolderRegistryShowcase,
  "animated-counter": AnimatedCounterRegistryShowcase,
  "theme-toggle": ThemeToggleRegistryShowcase,
  "set-timer": SetTimerRegistryShowcase,
  "timezone": TimezoneRegistryShowcase,
}
