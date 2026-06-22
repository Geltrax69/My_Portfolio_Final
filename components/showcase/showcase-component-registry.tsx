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
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const EditTimeRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/edit-time-showcase").then((module) => {
      const EditTimeShowcase = () => <module.EditTimeShowcase />

      return EditTimeShowcase
    }),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const AnalogStickRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/analog-stick-showcase").then((module) => {
      const AnalogStickShowcase = () => <module.AnalogStick />

      return AnalogStickShowcase
    }),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const PolaroidStackRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/polaroid-stack-showcase").then((module) => {
      const PolaroidStackShowcase = () => <module.PolaroidStack />

      return PolaroidStackShowcase
    }),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const ThemeToggleRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/theme-toggle-showcase").then((module) => {
      const ThemeToggleShowcase = () => <module.ThemeToggle />

      return ThemeToggleShowcase
    }),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const SetTimerRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/set-timer-showcase").then(
      (module) => module.SetTimer
    ),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const PaperShredRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/paper-shred-showcase").then(
      (module) => module.PaperShredButton
    ),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const ScanDocumentRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/scan-document-showcase").then(
      (module) => module.ScanDocumentButton
    ),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const LiquidGlassBlobRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/liquid-glass-blob-showcase").then(
      (module) => module.LiquidGlassBlob
    ),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

const SubscriptionRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/subscription-showcase").then(
      (module) => module.SubscriptionShowcase
    ),
  { ssr: false, loading: ComponentLoadingPlaceholder }
)

export const showcaseComponentRegistry: Record<
  string,
  ComponentType<ShowcaseComponentProps>
> = {
  "edit-time": EditTimeRegistryShowcase,
  "card-hover": CardHoverShowcase,
  "paper-shred": PaperShredRegistryShowcase,
  "analog-stick": AnalogStickRegistryShowcase,
  "polaroid-stack": PolaroidStackRegistryShowcase,
  "scan-document": ScanDocumentRegistryShowcase,
  "theme-toggle": ThemeToggleRegistryShowcase,
  "set-timer": SetTimerRegistryShowcase,
  "liquid-glass-blob": LiquidGlassBlobRegistryShowcase,
  subscription: SubscriptionRegistryShowcase,
}
