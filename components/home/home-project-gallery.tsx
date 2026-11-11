import { ProjectCard } from "@/components/portfolio/project-card"
import { ProjectSpinner } from "@/components/home/project-spinner"
import { ShowcaseCard } from "@/components/portfolio/showcase-card"
import type {
  BentoSize,
  PortfolioGalleryItem,
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

type HomeProjectGalleryProps = {
  projects: PortfolioProject[]
  showcaseItems: ProjectShowcaseComponent[]
}

// Desktop (lg+): a 4-column grid whose rows scale with the gallery width
// (20cqw), so every cell keeps its proportion at any screen size. Cards span
// cells by their bento size. Below lg the same cards stack, each with a
// fixed aspect ratio. min-h-0 stops aspect-ratio's content-based minimum
// from stretching a slot.
const bentoSlotClassName: Record<BentoSize, string> = {
  "1x1": "aspect-[4/3] lg:aspect-auto",
  "2x1": "aspect-[4/3] lg:col-span-2 lg:aspect-auto",
  "1x2": "aspect-[4/5] lg:row-span-2 lg:aspect-auto",
  "2x2": "aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto",
}

const slotClassName = (item: PortfolioGalleryItem) =>
  `min-h-0 ${bentoSlotClassName[item.bento.size]}`

const byBentoOrder = (
  firstItem: PortfolioGalleryItem,
  secondItem: PortfolioGalleryItem
) => firstItem.bento.order - secondItem.bento.order

const renderGalleryItem = (item: PortfolioGalleryItem) => {
  if (item.type === "project") {
    return (
      <ProjectCard
        key={item.slug}
        project={item}
        className={slotClassName(item)}
        isPriority={item.bento.order <= 3}
      />
    )
  }

  const { prompt, ...clientItem } = item
  const promptId = prompt ? `${item.col}-${item.order}` : undefined

  return (
    <ShowcaseCard
      key={`${item.col}-${item.order}-${item.title}`}
      item={clientItem}
      className={slotClassName(item)}
      promptId={promptId}
      isPriority={item.media.type === "component" && item.bento.order <= 4}
    />
  )
}

export const HomeProjectGallery = ({
  projects,
  showcaseItems,
}: HomeProjectGalleryProps) => {
  const galleryItems: PortfolioGalleryItem[] = [
    ...projects,
    ...showcaseItems,
  ].sort(byBentoOrder)
  const mobileProjectItems = [...projects].sort(byBentoOrder)

  return (
    <section
      id="work"
      aria-label="Selected projects"
      className="@container relative w-full"
    >
      <div className="flex w-full flex-col gap-framer-2 md:hidden">
        {mobileProjectItems.map(renderGalleryItem)}
      </div>

      <div className="hidden w-full flex-col gap-framer-2 md:flex lg:grid lg:grid-flow-dense lg:grid-cols-4 lg:[grid-auto-rows:20cqw]">
        {galleryItems.map(renderGalleryItem)}
      </div>
      <ProjectSpinner visible={false} />
    </section>
  )
}
