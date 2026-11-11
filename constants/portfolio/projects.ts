import type {
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

export const portfolioProjects: PortfolioProject[] = [
  // Code
  {
    type: "project",
    slug: "code",
    title: "Code",
    summary: "Local-first desktop workspace for running multiple AI coding agents side by side.",
    col: 2,
    order: 1,
    bento: { order: 1, size: "2x2" },
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-1.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-2.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-3.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-4.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-5.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-6.png",
        alt: "Code overview screen",
      },
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Vite",
      "Bun",
      "xterm.js",
      "Electron",
    ],
    description:
      "Code (fork of T3 Code) is a local-first desktop application that unifies AI agent workflows by providing a centralized workspace for coding with multiple AI providers. It integrates parallel agent threads, terminals, browser previews, diffs, and version control operations—eliminating the need to juggle multiple windows. Users connect their existing AI subscriptions (Claude Code, Codex, Gemini, OpenCode, Cursor, etc.) and work across isolated Git worktrees while keeping all session history and projects local on their machine.",
    challenges: [
      "Balancing drawer-based `terminal UI` with chat threading and context switching without losing terminal or conversation state.",
      "Rendering large `code diffs` with syntax highlighting, wrapping controls, and file-level staging without hurting scroll performance.",
      "Making `token usage`, costs, and rate limits readable during active coding sessions without crowding the interface.",
      "Resizing `xterm.js` panes across split layouts while preserving addon behavior, focus, and hot-reload stability.",
    ],
    solutions: [
      "Used a centralized `Zustand` store for per-thread terminal lifecycle, layout presets, focus state, and activity tracking.",
      "Simplified diffs into staged/unstaged scopes with inline file staging and a floating `Stage All` action.",
      "Condensed session status into tabbed `rate-limit` summaries, a compact context meter, and grid-based field layouts.",
      "Refined the environment picker with compact worktree grids, animated chevrons, and collapsible rate-limit sections.",
    ],
  },
  // Scorecast
  {
    type: "project",
    slug: "scorecast",
    title: "Scorecast",
    summary: "Real-time sports scoreboard synced across phones, dashboards, and broadcast screens.",
    col: 1,
    order: 2,
    bento: { order: 5, size: "2x1" },
    media: [
      {
        type: "video",
        src: "/videos/scorecast.mp4",
        alt: "Scorecast live scoreboard system video overview",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/1.webp",
        alt: "Scorecast live match control screen",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/2.webp",
        alt: "Scorecast match setup screen",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/3.webp",
        alt: "Scorecast live scoreboard display",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/4.webp",
        alt: "Scorecast live broadcast overview",
      },
    ],
    stack: [
      "Golang",
      "Gin",
      "WebSocket",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "JWT Authentication",
    ],
    description:
      "A live scoreboard platform for sports events. Replaces manual score-keeping with instant synchronization across scorer phones, admin dashboards, and broadcast display screens. Officials control matches from their phones using QR codes, while scores, timers, and match events stream live to spectators and commentators.",
    challenges: [
      "Syncing score updates across multiple devices in real-time without latency",
      "Allowing match officials to control games securely via mobile devices",
      "Supporting undo/redo and complex match logic (sets, timers, state transitions)",
      "Handling concurrent connections (scorer, admin, display, broadcast) reliably",
    ],
    solutions: [
      "Golang WebSocket hub for instant event propagation; PostgreSQL for persistent state",
      "QR/4-digit device pairing with JWT tokens; each device gets a scoped token by role",
      "Event-driven match state machine; undo/redo tracked via event log (append-only)",
      "Docker deployment with load balancing; tested under concurrent scorer + display load",
    ],
  },
  // RestaurantOS
  {
    type: "project",
    slug: "restaurantos",
    title: "RestaurantOS",
    summary: "Multi-tenant SaaS for restaurant menus and self-serve ordering.",
    col: 1,
    order: 3,
    bento: { order: 7, size: "2x2" },
    media: [
      {
        type: "image",
        src: "/projects_images/restaurantos/1.webp",
        alt: "RestaurantOS customer mobile menu view",
      },
      {
        type: "image",
        src: "/projects_images/restaurantos/2.webp",
        alt: "RestaurantOS merchant menu builder dashboard",
      },
      {
        type: "image",
        src: "/projects_images/restaurantos/3.webp",
        alt: "RestaurantOS checkout and live tracking view",
      },
      {
        type: "image",
        src: "/projects_images/restaurantos/4.webp",
        alt: "RestaurantOS merchant analytics overview",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Multi-tenant routing",
    ],
    description:
      "A SaaS ordering system for restaurants. Restaurant admins create owner accounts, owners publish menus with images and availability, and customers order from a live Instagram-style interface. Replaces physical menus and phone orders with a self-serve digital experience. Built for scalability across many restaurants simultaneously.",
    challenges: [
      "Isolating restaurant data in a shared database without one restaurant seeing another's menus or orders",
      "Supporting real-time menu updates (availability, prices) visible to customers instantly",
      "Building a branded ordering experience that feels native to each restaurant",
      "Handling high-frequency concurrent orders during peak hours without slowdowns",
    ],
    solutions: [
      "Database schema with restaurant_id foreign key on all tables; API middleware validates tenant context",
      "Optimistic UI updates for menu changes; WebSocket subscriptions for live availability",
      "Dynamic branding per restaurant (logo, colors, fonts) loaded from database",
      "Indexed queries on (restaurant_id, created_at) for fast order retrieval; Redis caching for menus",
    ],
  },
  // School App
  {
    type: "project",
    slug: "school-app",
    title: "School App",
    summary: "Web + mobile platform running school admin, attendance, and parent updates.",
    col: 2,
    order: 4,
    bento: { order: 9, size: "1x1" },
    media: [
      {
        type: "image",
        src: "/projects_images/school_app/1.webp",
        alt: "School App admin control panel screen",
      },
      {
        type: "image",
        src: "/projects_images/school_app/2.webp",
        alt: "School App teacher attendance portal",
      },
      {
        type: "image",
        src: "/projects_images/school_app/3.webp",
        alt: "School App parent communication feed",
      },
      {
        type: "image",
        src: "/projects_images/school_app/4.webp",
        alt: "School App mobile notification center",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "React Native",
      "Flutter",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Cloud Messaging (FCM)",
      "JWT Authentication",
      "Material-UI",
    ],
    description:
      "An end-to-end platform for schools to manage operations via web dashboard and mobile app. Admins and principals use the responsive web interface for enrollment, fee tracking, and staff scheduling. Teachers and parents access the mobile app for instant notifications, attendance marks, and class announcements. Deployed across multiple schools with active usage, it reduces administrative overhead and improves parent-teacher engagement.",
    challenges: [
      "Syncing data in real-time between web dashboard and mobile apps without conflicts",
      "Supporting complex school hierarchies (multi-class, multi-section, different staff roles)",
      "Real-time push notifications without overwhelming users or missing critical alerts",
      "Handling sensitive student and financial data with strong access controls",
      "Scaling to support hundreds of students, staff, and parents per school instance",
    ],
    solutions: [
      "Shared REST API backend with WebSocket support for real-time sync; optimistic UI updates",
      "Hierarchical permission model (admin > principal > teacher > parent); role-gated API endpoints",
      "Smart notification batching and scheduling; user preference controls (quiet hours, notification types)",
      "End-to-end encryption for sensitive docs; audit logging for compliance; JWT token refresh with short TTL",
      "Database indexing on frequent queries (student_id, class_id); Redis caching for role permissions",
    ],
  },
  // Inventory Management System
  {
    type: "project",
    slug: "inventory-management",
    title: "Inventory Management System",
    summary: "Spring Boot + React dashboard for real-time stock tracking.",
    col: 1,
    order: 5,
    bento: { order: 10, size: "1x1" },
    media: [
      {
        type: "image",
        src: "/projects_images/inventory_management/1.webp",
        alt: "Inventory Management main overview table",
      },
      {
        type: "image",
        src: "/projects_images/inventory_management/2.webp",
        alt: "Inventory Management stock log details view",
      },
      {
        type: "image",
        src: "/projects_images/inventory_management/3.webp",
        alt: "Inventory Management transaction history",
      },
      {
        type: "image",
        src: "/projects_images/inventory_management/4.webp",
        alt: "Inventory Management batch operations confirmation",
      },
    ],
    stack: [
      "Spring Boot",
      "React",
      "Vite",
      "TypeScript",
      "PostgreSQL",
      "JWT Authentication",
      "Tailwind CSS",
      "React Query",
    ],
    description:
      "A dashboard for managing inventory and products. Track stock levels, log inbound/outbound movements, and generate reports. Built as a full-stack app with a Spring Boot backend and React frontend, it provides real-time visibility into warehouse operations.",
    challenges: [
      "Preventing race conditions when multiple staff log stock movements simultaneously",
      "Rendering large product tables without lag or information overload",
      "Supporting drill-down from summary reports to individual transactions",
      "Managing product categories and bulk operations (mark items as expired, relocate stock)",
    ],
    solutions: [
      "Database-level locking (pessimistic locking) on stock records during updates",
      "Virtual scrolling for product lists; pagination for transaction history",
      "Faceted search and filtering by category, status, date range",
      "Batch operations with confirmation dialogs; audit trail of every stock change",
    ],
  },
  // Bettertrack AI
  {
    type: "project",
    slug: "bettertrack-ai",
    title: "Bettertrack AI",
    summary: "Group expense splitting with a Gemini-powered settle-up assistant.",
    col: 2,
    order: 6,
    bento: { order: 8, size: "1x2" },
    media: [
      {
        type: "video",
        src: "/videos/bettertrackAI.mp4",
        alt: "Bettertrack AI video overview",
      },
      {
        type: "image",
        src: "/projects_images/bettertrack_ai/1.webp",
        alt: "Bettertrack AI expense split visual graph",
      },
      {
        type: "image",
        src: "/projects_images/bettertrack_ai/2.webp",
        alt: "Bettertrack AI Gemini conversational settle-up chat",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "Gemini API",
      "Stripe (payments)",
    ],
    description:
      "An expense tracking and group settlement app with an embedded AI assistant. Track shared expenses (dinner, rent, trips), split bills intelligently, and settle up with friends. Unlike basic expense apps, it uses Gemini AI to understand spending context, suggest optimizations, and automate settle-up calculations.",
    challenges: [
      "Accurately splitting expenses when multiple payment methods are involved (someone pays, others reimburse)",
      "Making AI suggestions feel useful without being intrusive or wrong",
      "Handling currency conversion and international group expenses",
      "Tracking who owes whom in complex multi-person scenarios without circular debts",
    ],
    solutions: [
      "Graph-based settle-up algorithm that minimizes transactions (A→B, B→C instead of individual transfers)",
      "Gemini API called on-demand for suggestions (e.g., \"Hey, looks like pizza was pricey—eat in tomorrow?\")",
      "Currency lookup + real-time exchange rates cached hourly",
      "Debt simplification algorithm; UI shows settlement plan before confirming",
    ],
  },
]

export const portfolioShowcaseComponents: ProjectShowcaseComponent[] = [
  // Theme Toggle
  {
    type: "showcase",
    title: "Theme Toggle",
    stack: [""],
    media: {
      type: "component",
      componentKey: "theme-toggle",
      alt: "theme toggle",
    },
    col: 1,
    order: 1,
    bento: { order: 2, size: "1x1" },
    xLink: "https://x.com/diip3sh/status/2061849773871862146?s=20",
  },
  // Folder
  {
    type: "showcase",
    title: "Folder",
    stack: ["motion", "react"],
    media: {
      type: "component",
      componentKey: "folder",
      alt: "Animated folder that opens to reveal cards",
    },
    col: 2,
    order: 2,
    bento: { order: 6, size: "2x1" },
    xLink: "https://x.com/LalitBuild",
  },
  // Card Hover
  {
    type: "showcase",
    title: "Card Hover",
    stack: ["motion", "react"],
    media: {
      type: "component",
      componentKey: "card-hover",
      alt: "Interactive holographic card hover component",
    },
    col: 1,
    order: 4,
    bento: { order: 3, size: "1x2" },
    xLink: "https://x.com/diip3sh",
    prompt: `Create a reusable **Holographic Referral Card** component for an existing React + TypeScript codebase.

Goal:
Build a premium interactive referral/invite card with a dark physical-card look, soft holographic glow, pointer-tracked 3D tilt, and a central invite artwork area. The component should feel like a polished design-engineering portfolio component: tactile, minimal, responsive, and easy to drop into another codebase.

Component behavior:

* The card should tilt in 3D based on pointer position.
* Pointer movement should update:

  * \`rotateX\`
  * \`rotateY\`
  * \`translateZ\`
  * a radial glow position
  * glow opacity
* On pointer enter, the card should lift slightly using \`translateZ\`.
* On pointer leave, the card should smoothly reset to its neutral state.
* Touch input should not trigger the pointer-following animation.
* Keyboard focus should reveal the glow subtly.
* Blur should reset the card state.
* The glow should follow the pointer using a radial gradient and \`mix-blend-overlay\`.

Visual design:

* Outer wrapper should have a fixed responsive max width around \`375px\`.
* Inner card should use:

  * dark charcoal background
  * rounded corners
  * deep stacked shadow
  * subtle desaturated/saturated card feel
  * generous padding
* Header area:

  * left logo/avatar
  * right optional secondary logo or link
* Main media area:

  * vertical \`3/4\` aspect ratio
  * rounded image container
  * background image fills the card using \`object-cover\`
  * central white discount/check-style icon overlay
* Footer area:

  * left title text
  * right muted description/handle text
  * both should truncate if long
* Final visual layer:

  * absolute radial glow overlay
  * hidden from screen readers
  * pointer-events disabled

Technical requirements:

* Use React + TypeScript.
* Use Motion for React from \`motion/react\`.
* Use:

  * \`motion\`
  * \`useMotionValue\`
  * \`useSpring\`
  * \`useMotionTemplate\`
  * \`useReducedMotion\`
* Use Tailwind CSS for styling.
* Use a \`cn()\` utility for class merging.
* The component must be a client component with \`"use client"\`.
* Do not use external 3D libraries.
* Do not use JavaScript animation loops.
* Keep the component fully reusable through props.

Expected props:

\`\`\`tsx
export type CardLogo =
  | React.ReactNode
  | {
      src: string
      alt: string
      className?: string
    }

export type HolographicReferralCardProps = {
  image?: string
  imageAlt?: string
  title?: string
  description?: string
  logo?: CardLogo
  logoAlt?: string
  secondLogo?: CardLogo
  secondLogoAlt?: string
  secondLogoHref?: string
  secondLogoAriaLabel?: string
  ariaLabel?: string
  className?: string
}
\`\`\`

Expected usage:

\`\`\`tsx
<HolographicReferralCard
  image="/logo.png"
  imageAlt="Invite background"
  title="Comet"
  description="#diip3sh"
  logo={{ src: "/logo.svg", alt: "Comet avatar" }}
  secondLogo="/x.svg"
  secondLogoAlt="X logo"
  secondLogoHref="https://x.com/diip3sh"
/>
\`\`\`

Motion details:

* Use spring options similar to:

\`\`\`ts
const springOptions = {
  stiffness: 260,
  damping: 28,
  mass: 0.7,
}
\`\`\`

* Calculate pointer progress from the card bounds:

\`\`\`ts
const xProgress = pointerX / bounds.width
const yProgress = pointerY / bounds.height
\`\`\`

* Use these formulas for tilt:

\`\`\`ts
rotateX.set((yProgress - 0.5) * 20)
rotateY.set((xProgress - 0.5) * -20)
translateZ.set(20)
\`\`\`

* Use a transform template like:

\`\`\`ts
perspective(1000px) rotateX(...) rotateY(...) translateZ(...)
\`\`\`

* Use a glow background like:

\`\`\`ts
radial-gradient(circle at X% Y%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0) 80%)
\`\`\`

Accessibility:

* Respect \`prefers-reduced-motion\`.
* If reduced motion is enabled, disable the 3D transform but keep the card usable.
* The decorative glow layer must use \`aria-hidden="true"\`.
* The central icon should be decorative unless it communicates meaningful status.
* If the secondary logo is clickable, render it as an accessible anchor with:

  * \`aria-label\`
  * visible focus ring
  * \`target="_blank"\`
  * \`rel="noreferrer"\`
* Use semantic HTML, preferably \`article\`, with an \`aria-label\`.

Implementation requirements:
Return the full code for:

1. \`HolographicReferralCard.tsx\`
2. Any helper types/functions inside the same file
3. The inline SVG discount/check icon
4. Example usage
5. A short customization note explaining how to change image, logos, title, description, shadows, tilt strength, and glow intensity

Do not simplify the interaction into a static card. The final result must include the pointer-tracked 3D tilt and holographic radial glow.`,
  },
  // Animated Counter
  {
    type: "showcase",
    title: "Animated Counter",
    stack: ["motion", "react"],
    media: {
      type: "component",
      componentKey: "animated-counter",
      alt: "Odometer-style counter rolling between rupee amounts",
    },
    col: 2,
    order: 5,
    bento: { order: 4, size: "1x1" },
    xLink: "https://x.com/LalitBuild",
  },
]
