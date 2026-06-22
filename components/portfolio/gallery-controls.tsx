import { BackToTop } from "@/components/portfolio/back-to-top"
import { PrimaryLink } from "@/components/portfolio/primary-link"
import { cn } from "@/lib/utils"

type GalleryControlsProps = {
  primaryLabel: string
  primaryHref: string
  backToTopHref?: string
  className?: string
  showBackToTop?: boolean
}

export const GalleryControls = ({
  primaryLabel,
  primaryHref,
  backToTopHref = "#intro",
  className,
  showBackToTop = true,
}: GalleryControlsProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-framer-2 md:justify-between",
        className
      )}
    >
      <PrimaryLink href={primaryHref}>{primaryLabel}</PrimaryLink>
      {showBackToTop ? (
        <BackToTop
          href={backToTopHref}
          className="relative right-auto bottom-auto hidden md:flex"
        />
      ) : null}
    </div>
  )
}