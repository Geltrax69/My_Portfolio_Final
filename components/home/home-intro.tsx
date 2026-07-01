import type { HomeIntro } from "@/constants/types"
import { MapSVG } from "../svgs/map-svg"
import { portfolioContact } from "@/constants/portfolio/contact"
import { BookACallLink } from "../ui/book-a-call-link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Code, Server, Sparkles, Briefcase, Package, Layers, Zap } from "@hugeicons/core-free-icons"

type HomeIntroSectionProps = {
  intro: HomeIntro
}

export const HomeIntroSection = ({ intro }: HomeIntroSectionProps) => {
  return (
    <section
      id="intro"
      aria-labelledby="intro-name"
      className="mt-8 flex w-full flex-col gap-framer-8"
    >
      <div className="flex w-full items-center justify-center gap-framer-3">
        <img
          src="/logo.svg"
          alt={intro.avatarAlt}
          width={56}
          height={56}
          className="size-14 shrink-0 rounded-sm outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <h1 id="intro-name" className="type-heading-2 text-muted-foreground">
            @{intro.name}
          </h1>
          <p className="type-body-small uppercase">{intro.role}</p>
        </div>
      </div>

      <p className="max-w-[520px] type-body-small text-pretty text-muted-foreground">
        A <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Code} size={16} strokeWidth={2} />
          Product Engineer
        </span>{" "}
        based in{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <MapSVG size={16} />
          India.
        </span>{" "}
        I build{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Code} size={16} strokeWidth={2} />
          production-ready software
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Server} size={16} strokeWidth={2} />
          scalable backend systems
        </span>
        , and{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Sparkles} size={16} strokeWidth={2} />
          AI-powered applications
        </span>
        . Open to{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Briefcase} size={16} strokeWidth={2} />
          full-time
        </span>{" "}
        opportunities and{" "}
        <span className="text-foreground">freelance projects</span>. This website is a collection of the{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Package} size={16} strokeWidth={2} />
          products I've built
        </span>
        , from{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Layers} size={16} strokeWidth={2} />
          backend architecture and APIs
        </span>{" "}
        to{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <HugeiconsIcon icon={Zap} size={16} strokeWidth={2} />
          modern web experiences
        </span>
        .
      </p>
      <BookACallLink
        href={portfolioContact.bookingHref}
        imageSrc="/logo.svg"
        target="_blank"
        rel="noopener noreferrer"
      />
    </section>
  )
}
