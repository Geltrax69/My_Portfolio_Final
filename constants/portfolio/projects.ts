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
    col: 2,
    order: 1,
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
    col: 1,
    order: 2,
    media: [
      {
        type: "video",
        src: "/videos/scorecast.mp4",
        alt: "Scorecast live scoreboard system video overview",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/1.svg",
        alt: "Scorecast live match control screen",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/2.svg",
        alt: "Scorecast match setup screen",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/3.svg",
        alt: "Scorecast live scoreboard display",
      },
      {
        type: "image",
        src: "/projects_images/scorecast/4.svg",
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
    col: 1,
    order: 3,
    media: [
      {
        type: "image",
        src: "/projects_images/restaurantos/1.svg",
        alt: "RestaurantOS customer mobile menu view",
      },
      {
        type: "image",
        src: "/projects_images/restaurantos/2.svg",
        alt: "RestaurantOS merchant menu builder dashboard",
      },
      {
        type: "image",
        src: "/projects_images/restaurantos/3.svg",
        alt: "RestaurantOS checkout and live tracking view",
      },
      {
        type: "image",
        src: "/projects_images/restaurantos/4.svg",
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
    col: 2,
    order: 3,
    media: [
      {
        type: "image",
        src: "/projects_images/school_app/1.svg",
        alt: "School App admin control panel screen",
      },
      {
        type: "image",
        src: "/projects_images/school_app/2.svg",
        alt: "School App teacher attendance portal",
      },
      {
        type: "image",
        src: "/projects_images/school_app/3.svg",
        alt: "School App parent communication feed",
      },
      {
        type: "image",
        src: "/projects_images/school_app/4.svg",
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
  // Job Portal
  {
    type: "project",
    slug: "job-portal",
    title: "Job Portal",
    col: 1,
    order: 8,
    media: [
      {
        type: "image",
        src: "/projects_images/jobportal/1.svg",
        alt: "Job Portal candidate application portal",
      },
      {
        type: "image",
        src: "/projects_images/jobportal/2.svg",
        alt: "Job Portal recruiter application reviewer",
      },
      {
        type: "image",
        src: "/projects_images/jobportal/3.svg",
        alt: "Job Portal pipeline configuration builder",
      },
      {
        type: "image",
        src: "/projects_images/jobportal/4.png",
        alt: "Job Portal hiring analytics dashboard",
      },
    ],
    stack: [
      "Node.js",
      "Express",
      "EJS (server-side rendering)",
      "MongoDB",
      "Passport.js",
      "Bootstrap",
    ],
    description:
      "A job application platform where candidates submit applications and admins review, approve, or reject them. Centralizes hiring workflows in one place. Built server-rendered for speed, it tracks application status, manages candidate pipelines, and generates reports for hiring teams.",
    challenges: [
      "Preventing duplicate applications while handling concurrent submissions",
      "Tracking application status through multiple stages (submitted → reviewed → approved)",
      "Generating reports without slowing down the live application system",
      "Managing admin and candidate permissions cleanly without fragmented logic",
    ],
    solutions: [
      "Unique compound index on (candidate_id, job_id) to block duplicates at database level",
      "Status enum with timestamp tracking; audit trail of state changes",
      "Report generation via aggregation pipeline; scheduled background jobs",
      "Middleware-based permission checks; conditional EJS template rendering per role",
    ],
  },
  // Care App
  {
    type: "project",
    slug: "care-app",
    title: "Care App",
    col: 1,
    order: 9,
    media: [
      {
        type: "image",
        src: "/projects_images/care_app/1.svg",
        alt: "Care App caregiver matching and booking flow",
      },
      {
        type: "image",
        src: "/projects_images/care_app/2.svg",
        alt: "Care App family monitoring and notes dashboard",
      },
    ],
    stack: [
      "Flutter",
      "Firebase (auth & messaging)",
      "Dart",
      "REST API backend",
      "Stripe (payments)",
    ],
    description:
      "A Flutter mobile app connecting families with caregivers for at-home elderly care. Families browse caregiver profiles, book time slots, and track care sessions. Caregivers manage their availability and receive bookings in real-time. Solves fragmented caregiving by centralizing bookings, ratings, and payment.",
    challenges: [
      "Real-time availability updates as caregivers accept or decline bookings",
      "Managing user trust (caregiver verification, background checks, ratings)",
      "Handling sensitive health information and care notes securely",
      "Supporting offline booking (queuing) when network is unreliable",
    ],
    solutions: [
      "Firebase Realtime Database for instant availability sync across app instances",
      "User verification flow with document upload; public caregiver ratings and reviews",
      "End-to-end encryption for health notes; role-based access (family can't see other families' data)",
      "Local SQLite cache; sync queue for bookings made offline",
    ],
  },
  // Inventory Management System
  {
    type: "project",
    slug: "inventory-management",
    title: "Inventory Management System",
    col: 2,
    order: 6,
    media: [
      {
        type: "image",
        src: "/projects_images/inventory_management/1.svg",
        alt: "Inventory Management main overview table",
      },
      {
        type: "image",
        src: "/projects_images/inventory_management/2.svg",
        alt: "Inventory Management stock log details view",
      },
      {
        type: "image",
        src: "/projects_images/inventory_management/3.svg",
        alt: "Inventory Management transaction history",
      },
      {
        type: "image",
        src: "/projects_images/inventory_management/4.svg",
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
  // Storage.me
  {
    type: "project",
    slug: "storage-me",
    title: "Storage.me",
    col: 1,
    order: 11,
    media: [
      {
        type: "image",
        src: "/projects_images/storage_me/1.svg",
        alt: "Storage.me private cloud file storage dashboard",
      },
      {
        type: "image",
        src: "/projects_images/storage_me/2.svg",
        alt: "Storage.me Elasticsearch full-text document search",
      },
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Elasticsearch (search)",
      "AWS S3 (or self-hosted)",
      "Vue.js",
      "JWT",
    ],
    description:
      "A personal file storage system with search and organization. Users upload files (docs, photos, videos), tag them, and retrieve via full-text search. Designed for users who want cloud storage but don't trust third parties; supports self-hosting or private cloud deployment.",
    challenges: [
      "Fast full-text search across thousands of documents without overloading the server",
      "Organizing files by tags, dates, and custom metadata without rigid folder hierarchies",
      "Supporting large file uploads (videos) without timeout or memory issues",
      "Keeping storage costs low while maintaining redundancy",
    ],
    solutions: [
      "Elasticsearch for full-text search with fuzzy matching and filters",
      "Flat file structure with rich metadata; multi-tag support per file",
      "Chunked uploads (resumable) with virus scanning before storage",
      "S3 lifecycle policies (archive old files to Glacier); cost tracking per user",
    ],
  },
  // Saree Store
  {
    type: "project",
    slug: "saree-store",
    title: "Saree Store",
    col: 1,
    order: 12,
    media: [
      {
        type: "image",
        src: "/projects_images/saree_store/1.svg",
        alt: "Saree Store premium product catalog landing",
      },
      {
        type: "image",
        src: "/projects_images/saree_store/2.svg",
        alt: "Saree Store client-side faceted filtering",
      },
      {
        type: "image",
        src: "/projects_images/saree_store/3.svg",
        alt: "Saree Store text-config based product details",
      },
    ],
    stack: [
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "Figma (design)",
      "Text-based product config",
    ],
    description:
      "A premium saree product catalog built with vanilla JavaScript that reads from a simple text file. Replaces static HTML with a dynamic, auto-generated UI. Products are added by editing a text config—no database or backend needed—making it easy for non-developers to manage inventory.",
    challenges: [
      "Rendering product cards dynamically without a backend or framework overhead",
      "Keeping product updates simple (editing a text file, not a database)",
      "Optimizing images without slowing down initial load",
      "Supporting filters (price, color, material) without a search backend",
    ],
    solutions: [
      "JavaScript parses text file on page load; generates HTML dynamically",
      "Image lazy-loading; WebP format with JPEG fallback",
      "Client-side filtering via JavaScript arrays; no server round-trips",
      "Simple JSON structure within text file for easy manual edits",
    ],
  },
  // Bettertrack AI
  {
    type: "project",
    slug: "bettertrack-ai",
    title: "Bettertrack AI",
    col: 2,
    order: 8,
    media: [
      {
        type: "video",
        src: "/videos/bettertrackAI.mp4",
        alt: "Bettertrack AI video overview",
      },
      {
        type: "image",
        src: "/projects_images/bettertrack_ai/1.svg",
        alt: "Bettertrack AI expense split visual graph",
      },
      {
        type: "image",
        src: "/projects_images/bettertrack_ai/2.svg",
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
    xLink: "https://x.com/diip3sh/status/2061849773871862146?s=20",
  },
  // Polaroid stack
  {
    type: "showcase",
    title: "Polaroid stack",
    stack: [""],
    media: {
      type: "component",
      componentKey: "polaroid-stack",
      alt: "polaroid stack",
    },
    col: 2,
    order: 2,
    xLink: "https://x.com/diip3sh/status/2060767406562398324?s=20",
    prompt: `Create a reusable **Polaroid Fan Stack** component for an existing React + TypeScript codebase.

Goal:
Build a polished photo-card stack where multiple Polaroid-style cards sit stacked in the center, then fan outward into a wide arc when the user hovers the component. The interaction should feel simple, tactile, editorial, and portfolio-grade.

Component concept:

* Render 7 portrait photo cards.
* In the idle state, all cards are stacked in the center.
* Each card has the same base size, border, rounded corners, and Polaroid-style white frame.
* On hover over the parent container:

  * the cards rotate outward from left to right
  * the stack opens like a hand of cards
  * the middle card stays close to \`0deg\`
  * side cards rotate progressively outward
* Each individual card should slightly scale up on hover.

Stack:

* React
* TypeScript
* Tailwind CSS
* \`cn()\` utility for class merging

Do not use:

* Motion/Framer Motion
* GSAP
* Canvas
* WebGL
* JavaScript animation state
* external carousel/card libraries

Component name:

\`\`\`tsx
export const PolaroidStack = () => {
  return (...)
}
\`\`\`

Expected usage:

\`\`\`tsx
<PolaroidStack />
\`\`\`

Data structure:
Create a typed photo-card data array:

\`\`\`ts
type FanCard = {
  src: string
  alt: string
  hoverClassName: string
}
\`\`\`

Use a \`fanCards\` array with 7 cards.

Each card should include:

* \`src\`
* \`alt\`
* \`hoverClassName\`

The \`hoverClassName\` should define each card’s final rotation on parent hover.

Example hover rotations:

\`\`\`ts
-54deg
-36deg
-18deg
0deg
18deg
36deg
54deg
\`\`\`

Layout:

* The section should be full width.
* Height should be around \`560px\`.
* Center the stack horizontally and vertically.
* Hide overflow so the fanned cards stay clean inside the section.
* Use an accessible section label:

\`\`\`tsx
<section aria-label="Fanned photo cards">
\`\`\`

Parent wrapper:

* Use a \`group\` class on the parent wrapper.
* The parent should fill the section.
* The hover state should be driven by \`group-hover\`.

Card base styling:
Each card should be absolutely positioned in the center:

\`\`\`tsx
"absolute top-1/2 left-1/2"
"-translate-x-1/2 -translate-y-1/2"
\`\`\`

Card size:

* height around \`226px\`
* width around \`152px\`

Polaroid frame:

* rounded corners around \`8%\`
* white border around \`5px\`
* larger bottom border around \`40px\`
* light gray card background

Transform origin:
Use bottom-left transform origin so the fan motion feels like the cards are pivoting from one shared hand-held point:

\`\`\`tsx
"origin-bottom-left"
\`\`\`

Idle transform:
Cards should start stacked with a slight upward translation:

\`\`\`css
rotate(0deg) translate(0px, -8px)
\`\`\`

Hover transforms:
Each card should receive a different \`group-hover\` transform.

Examples:

\`\`\`tsx
"group-hover:[transform:rotate(-54deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(-36deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(-18deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(0deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(18deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(36deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(54deg)_translate(0px,-8px)]"
\`\`\`

Card hover:
Each individual card should scale up slightly on hover:

\`\`\`tsx
"hover:[scale:1.1]"
\`\`\`

Animation:

* Use Tailwind transition classes.
* Duration should be around \`200ms\`.
* Keep the interaction quick and snappy.
* Do not use JavaScript state for the animation.

Image behavior:

* Each image should fill the card.
* Use \`object-cover\`.
* Use \`loading="lazy"\`.
* Use \`draggable={false}\` so the images do not accidentally drag during interaction.
* Each image must have a meaningful \`alt\`.

Example image element:

\`\`\`tsx
<img
  className="h-full w-full object-cover"
  draggable={false}
  loading="lazy"
  src={src}
  alt={alt}
/>
\`\`\`

Accessibility:

* Use a semantic \`section\`.
* Add \`aria-label="Fanned photo cards"\`.
* Every image should have descriptive alt text.
* Do not make cards keyboard-focusable unless they are clickable.
* If cards become links later, use real anchor tags and visible focus states.
* The hover fan effect should be decorative, not required to understand the content.

Implementation requirements:
Return:

1. Full \`PolaroidStack.tsx\` component.
2. \`FanCard\` type.
3. Shared \`cardClassName\`.
4. \`fanCards\` data array.
5. Final JSX mapping over the card data.
6. Short customization notes explaining how to change:

   * number of cards
   * card size
   * fan angle
   * transition duration
   * image sources
   * border thickness
   * Polaroid frame size
   * scale-on-hover amount

Important:
Do not turn this into a carousel. The key interaction is a centered stack that fans outward on parent hover using CSS transforms and Tailwind \`group-hover\`.`,
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
  // GLSL Shader Fragment
  {
    type: "showcase",
    title: "GLSL Shader Fragment",
    stack: ["glsl", "motion"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/Shopify%20Transition.mp4",
      width: 1632,
      height: 1080,
      alt: "GLSL Shader Fragment",
    },
    col: 2,
    order: 4,
    xLink: "https://x.com/diip3sh/status/2018404162837578147?s=20",
  },
  // Timezone Showcase
  {
    type: "showcase",
    title: "Timezone Showcase",
    stack: [""],
    media: {
      type: "component",
      componentKey: "timezone",
      alt: "timezone showcase",
    },
    col: 1,
    order: 5,
    xLink: "",
    prompt: `Create a reusable **Timezone Showcase / World Clock Comparison Card** component for an existing React + TypeScript codebase.

Before writing any code, ask me these clarification questions and wait for my answer:

1. **Which package manager do you use?**

   * Bun
   * npm
   * Yarn
   * pnpm

2. **What should be the local/base timezone?**

   * Example: \`Asia/Kolkata\`

3. **Which cities/timezones should be shown?**

   * Example:

     * Jamshedpur — \`Asia/Kolkata\`
     * San Francisco — \`America/Los_Angeles\`
     * London — \`Europe/London\`
     * New York — \`America/New_York\`

4. **Should the card support dark mode?**

   * Yes, include light and dark mode styles.
   * No, keep it light-only.

Do not start implementation until I answer these questions.

Package setup:
This component requires Luxon for timezone-safe date/time handling.

After I tell you my package manager, install dependencies using the matching command:

\`\`\`bash
npm install luxon motion
\`\`\`

If TypeScript reports missing Luxon types, also install:

\`\`\`bash
npm install -D @types/luxon
\`\`\`

Goal:
Build a polished world-clock comparison card that shows the user’s local time and multiple remote city times. The card should include an animated horizontal clock ruler, day/night status indicators, timezone offset labels, per-digit time animations, and an expandable list of additional cities.

The component should feel like a premium iOS-style world clock widget: precise, editorial, smooth, compact, and portfolio-grade.

Component concept:

* A rounded card displays a world clock comparison.
* The top area shows:

  * active timezone label
  * active offset difference
  * animated horizontal 12-hour ruler
  * centered orange marker
* The list area shows city rows:

  * offset label
  * city name
  * day/night status
  * current local time for that city
* Hovering or focusing a city row updates the active timezone/ruler.
* The ruler slides so the hovered city’s time aligns under the center marker.
* The first city is the local/base city.
* The card starts collapsed with two rows.
* A “See more” button expands the remaining rows.
* A “See less” button collapses the card again.

Stack:

* React
* TypeScript
* Tailwind CSS
* Motion for React from \`motion/react\`
* Luxon
* \`cn()\` utility if needed

Required imports:

\`\`\`ts
import { useEffect, useMemo, useState } from "react"
import { DateTime } from "luxon"
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react"
\`\`\`

Do not use:

* Date-fns
* Moment.js
* native \`Date\` timezone formatting for the core logic
* GSAP
* canvas
* WebGL
* external clock widgets
* JavaScript animation loops except the 1-second time update interval

Main component name:

\`\`\`tsx
export const TimezoneShowcase = () => {
  return (...)
}
\`\`\`

Expected usage:

\`\`\`tsx
<TimezoneShowcase />
\`\`\`

Types:
Create these types:

\`\`\`ts
type WorldClockRow = {
  city: string
  offset: string
  status: "day" | "night"
  time: string
  height: string
  timezoneLabel: string
  deltaLabel: string
  rulerTilt: number
  isLocal: boolean
}
\`\`\`

\`\`\`ts
type WorldClockLocation = {
  city: string
  zone: string
  height: string
  rulerTilt: number
  isLocal?: boolean
}
\`\`\`

Location data:
Create a configurable \`worldClockLocations\` array.

Example:

\`\`\`ts
const localZone = "Asia/Kolkata"

const worldClockLocations: WorldClockLocation[] = [
  {
    city: "Jamshedpur",
    zone: localZone,
    height: "h-[126px]",
    rulerTilt: 0,
    isLocal: true,
  },
  {
    city: "San Francisco",
    zone: "America/Los_Angeles",
    height: "h-[127px]",
    rulerTilt: -22,
  },
  {
    city: "London",
    zone: "Europe/London",
    height: "h-[126px]",
    rulerTilt: 18,
  },
  {
    city: "New York",
    zone: "America/New_York",
    height: "h-[121px]",
    rulerTilt: 24,
  },
]
\`\`\`

Timezone labels:
Create a label override map for zones that need custom labels:

\`\`\`ts
const timezoneLabelByZone: Record<string, string> = {
  "Asia/Kolkata": "IST",
}
\`\`\`

Create \`getTimezoneLabel(dateTime, zone)\`:

* Use configured label first.
* Otherwise use \`dateTime.offsetNameShort\`.
* If short name starts with \`GMT\`, fall back to \`dateTime.toFormat("ZZZZ")\`.

Offset difference:
Create \`formatOffsetDifference(targetOffsetMinutes, baseOffsetMinutes)\`:

* Compare target offset to base offset.
* Return \`+0H\` if same offset.
* Return values like:

  * \`-12:30H\`
  * \`-5:30H\`
  * \`+4H\`
  * \`+1H\`

Day/night status:
Create \`getStatus(dateTime)\`:

* Return \`day\` when hour is between 8 and 18.
* Return \`night\` otherwise.

Rows:
Create \`createWorldClockRows(now)\`:

* Convert \`now\` to each location’s zone.
* Format time as \`HH:mm\`.
* Calculate timezone label.
* Calculate offset delta against the base/local timezone.
* Mark local row as \`YOUR TIME\`.
* Return \`WorldClockRow[]\`.

Clock ruler:
Build a horizontal 12-hour ruler.

Use constants similar to:

\`\`\`ts
const RULER_SUB_SPACING = 7
const RULER_HOUR_WIDTH = RULER_SUB_SPACING * 12
const RULER_CYCLE_WIDTH = RULER_HOUR_WIDTH * 12
const RULER_HOUR_RANGE = 96
const RULER_VIEW_WIDTH = 690
const RULER_MARKER_X = RULER_VIEW_WIDTH / 2
const RULER_ANCHOR_CYCLE = RULER_CYCLE_WIDTH * 4
\`\`\`

Ruler behavior:

* Each hour is a major tick.
* Each hour has 11 minor ticks between it, representing 5-minute steps.
* The ruler should repeat across a large range so no strip ends are visible.
* The center marker should stay fixed.
* The ruler strip should move horizontally so the active city’s time lands under the center marker.
* When switching active city, animate the ruler toward the nearest wrapped position so it takes the shortest path around the 12-hour loop.

Create:

* \`toClockLabel(hourIndex)\`
* \`rulerHourTicks\`
* \`rulerMinorTicks\`
* \`timeToClockHours(time)\`

\`timeToClockHours\` should fold 24-hour time onto a 12-hour scale:

\`\`\`ts
const timeToClockHours = (time: string) => {
  const [hour, minute] = time.split(":").map(Number)
  return (hour % 12) + minute / 60
}
\`\`\`

Ruler animation:
Use \`useMotionValue\` for \`rulerX\`.

Use \`animate(rulerX, wrappedTarget, rulerSpring)\` where:

\`\`\`ts
const rulerSpring = {
  type: "spring",
  stiffness: 70,
  damping: 12,
  mass: 1,
} as const
\`\`\`

If reduced motion is enabled, set the ruler position instantly.

Card scale:
The original design is tuned at around \`690px\` wide. Add a scale constant:

\`\`\`ts
const CARD_SCALE = 0.6
\`\`\`

Use CSS \`zoom\` instead of \`transform: scale\` for showcase cards because \`zoom\` reflows the layout box and avoids breaking Motion layout animations caused by ancestor transforms.

Card visual:

* Width around \`690px\`.
* Rounded corners around \`30px\`.
* Light background:

  * \`#F6F6F7\`
* Active surface:

  * \`#ECECEE\`
* Dark mode support:

  * card: \`#1B1F22\`
  * active surface: \`#1B1E22\`
  * rows: \`#24262B\`
* Subtle 1px shadow/border.
* Use \`overflow-clip\`.
* Use antialiased text.
* Use \`font-synthesis: none\`.

Card height:
Animate card height based on expanded state:

* collapsed: around \`486px\`
* expanded: around \`734px\`

Use a smooth collapse transition:

\`\`\`ts
const collapseTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
} as const
\`\`\`

Header:
At the top of the card, render:

* active timezone label on the left
* active delta label on the right

Both should animate on change using \`AnimatePresence\`:

* new label enters from below
* old label exits upward
* use slight blur during enter/exit

Ruler:
Render an SVG inside a masked horizontal container:

* width \`690px\`
* height \`70px\`
* mask edges with a left/right fade
* minor ticks are shorter/lighter
* major ticks are taller/darker
* hour labels sit above ticks
* centered orange marker is a vertical rounded line at the card center

Rows:
Create \`WorldClockListRow\`.

Props:

\`\`\`ts
{
  row: WorldClockRow
  index: number
  shouldReduceMotion: boolean
  handleHoveredTimezoneChange: (row: WorldClockRow | null) => void
}
\`\`\`

Each row should:

* be focusable with \`tabIndex={0}\`
* update active timezone on mouse enter/focus
* reset active timezone on mouse leave/blur
* have a full accessible label:

\`\`\`tsx
aria-label={\`\${row.city}, \${row.offset}, \${row.status}, \${row.time}\`}
\`\`\`

Row layout:

* fixed row height from row data
* bottom border
* local row uses active surface
* remote rows use normal row surface and hover surface
* left side:

  * offset label at top
  * city name below
* right side:

  * day/night status at top
  * time below

Typography:

* Offset/status labels:

  * mono font
  * uppercase feel
  * around \`20px\`
  * tracking around \`0.04em\`
* City names:

  * serif display font
  * around \`40px\`
* Time:

  * sans font
  * around \`42px\`
  * tabular numbers

Status indicator:
Create \`StatusIndicator\`.

If status is \`night\`:

* render \`NIGHT\`
* render a moon icon
* use muted gray text

If status is \`day\`:

* render \`DAY\`
* render a green dot
* add a soft green ring/shadow

Animate status icon changes with \`AnimatePresence\`.

Animated time:
Create \`AnimatedTime\`.

Behavior:

* If reduced motion is enabled, render plain text.
* Otherwise split the time string into characters.
* Animate each character with staggered children.
* Use tabular numbers.
* Only remount/replay when the full value changes by using \`key={value}\`.
* Use a small y/opacity/blur pop-in.

Variants:

\`\`\`ts
const digitVariants = {
  hidden: { y: 8, opacity: 0, filter: "blur(2px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
}
\`\`\`

Live time:
Use a 1-second interval:

* \`setNow(DateTime.now())\`
* cleanup interval on unmount

Expanded rows:

* Always show first two rows.
* Put remaining rows inside \`AnimatePresence\`.
* When expanded:

  * animate height from 0 to auto
  * opacity from 0 to 1
  * blur from 4px to 0
* When collapsed:

  * animate height back to 0
  * opacity to 0
  * blur to 4px

See more / See less button:

* Absolute footer area.
* Move footer top position depending on expanded state.
* Button text:

  * collapsed: \`See more\`
  * expanded: \`See less\`
* Include chevron icon.
* Use \`aria-expanded\`.
* Use \`aria-label\`:

  * \`See more world clock rows\`
  * \`See fewer world clock rows\`
* Rotate chevron depending on expanded state.
* Add hover/tap animation unless reduced motion is enabled.

Reduced motion:
Respect \`prefers-reduced-motion\`.

If reduced motion is enabled:

* disable entry blur movement
* set ruler position instantly
* render time values without per-digit animation
* avoid hover/tap scale effects
* keep expand/collapse readable with minimal opacity/height changes

Accessibility:

* Main section should use:

\`\`\`tsx
aria-label="World clock time comparison"
\`\`\`

* City rows should be keyboard focusable.
* Hover and focus should trigger the same active timezone behavior.
* Do not rely only on hover.
* Decorative SVG icons should use \`aria-hidden="true"\`.
* The expand button should use \`aria-expanded\`.
* The card should still make sense with animation disabled.

Dark mode:
If I choose dark mode support, include \`dark:\` Tailwind classes for:

* card background
* active surface
* row background
* row hover background
* borders
* primary text
* muted text
* ruler ticks
* ruler labels
* shadows

Return:

1. Full \`TimezoneShowcase.tsx\` component.
2. Luxon + Motion installation command for my package manager.
3. \`WorldClockRow\` and \`WorldClockLocation\` types.
4. Timezone/location configuration.
5. Time formatting helpers.
6. Offset difference helper.
7. Day/night status helper.
8. 12-hour ruler constants.
9. Ruler tick generation.
10. \`StatusIndicator\`.
11. \`AnimatedTime\`.
12. \`WorldClockListRow\`.
13. Expand/collapse logic.
14. Ruler hover/focus behavior.
15. Reduced-motion support.
16. Dark-mode support if selected.
17. Short customization notes explaining how to change:

    * base timezone
    * city list
    * collapsed row count
    * card scale
    * ruler density
    * day/night threshold
    * typography
    * dark mode
    * animation intensity

Important:
Do not simplify this into a static list of clocks. The key interaction is the active timezone comparison system: live timezone calculations, hover/focus-driven active row, animated 12-hour ruler alignment, expandable rows, and animated time/status transitions.`,
  },
  // Edit Time
  {
    type: "showcase",
    title: "Edit Time",
    stack: ["motion", "typescript"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/iIFMesf2PYlUOc28.mp4",
      width: 2338,
      height: 832,
      alt: "Edit Time interaction preview",
    },
    col: 1,
    order: 6,
    xLink: "https://x.com/diip3sh/status/2019428201592995956?s=20",
  },
  // Set timer interaction
  {
    type: "showcase",
    title: "Set timer interaction",
    stack: [""],
    media: {
      type: "component",
      componentKey: "set-timer",
      alt: "set timer interaction",
    },
    col: 1,
    order: 7,
    resettable: true,
    xLink: "https://x.com/diip3sh/status/2062596358243250393?s=20",
    prompt: `Create a reusable **Morphing Timer Picker** component for an existing React + TypeScript codebase.

Before writing any code, ask me which package manager I use and wait for my answer.

Then install the required wheel picker dependency using the matching command:

\`\`\`bash
npx shadcn@latest add @ncdai/wheel-picker
\`\`\`

Do not start implementation until the wheel picker setup is confirmed.

Goal:
Build a polished morphing timer component that starts as a compact “Set timer” pill, expands into a minute wheel picker, and then morphs into a running timer surface with pause/resume, cancel, and a rounded-rectangle border progress indicator.

The component should feel like a high-quality native timer interaction: soft, dimensional, smooth, tactile, and portfolio-grade.

Component concept:

* Initial compact mode:

  * dark rounded pill
  * timer icon
  * label: \`Set timer\`
* Picker mode:

  * surface expands vertically and horizontally
  * wheel picker appears on the left
  * selected minute value is shown in a large iOS-style wheel
  * \`mins\` label appears beside the selected number
  * \`Start\` button appears on the right
* Running mode:

  * surface morphs into a wider timer panel
  * rounded-rectangle progress border traces the full container perimeter
  * remaining time is shown with tabular numbers
  * \`Pause\` button appears
  * \`Cancel\` button appears
* Paused mode:

  * timer stops counting down
  * \`Pause\` button label animates to \`Resume\`
  * progress border and remaining time stay frozen
* Cancel:

  * returns to compact mode
  * avoids flashing the progress border back to full during the exit transition

State model:
Use this mode model:

\`\`\`ts
type TimerMode = "compact" | "picker" | "running" | "paused"
\`\`\`

Stack:

* React
* TypeScript
* Tailwind CSS
* Motion for React from \`motion/react\`
* \`@ncdai/react-wheel-picker\`
* \`cn()\` utility for class merging

Required imports:

\`\`\`ts
"use client"

import "@ncdai/react-wheel-picker/style.css"

import { useEffect, useRef, useState, type ComponentProps } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker"
import { cn } from "@/lib/utils"
\`\`\`

Do not use:

* GSAP
* canvas
* WebGL
* date/time libraries
* external animation libraries other than Motion
* native \`<select>\`
* custom scroll physics from scratch

Main component name:

\`\`\`tsx
export const SetTimer = () => {
  return (...)
}
\`\`\`

Expected usage:

\`\`\`tsx
<SetTimer />
\`\`\`

Timer dimensions:
Define per-mode surface dimensions:

\`\`\`ts
const SURFACE_DIMENSIONS: Record<
  TimerMode,
  { width: number; height: number; borderRadius: number }
> = {
  compact: { width: 300, height: 84, borderRadius: 42 },
  picker: { width: 342, height: 286, borderRadius: 48 },
  running: { width: 390, height: 180, borderRadius: 48 },
  paused: { width: 390, height: 180, borderRadius: 48 },
}
\`\`\`

The main timer surface should animate:

* width
* height
* borderRadius
* opacity on entry

Use Motion spring transition:

\`\`\`ts
{ type: "spring", stiffness: 400, damping: 30, mass: 1.5 }
\`\`\`

Respect \`prefers-reduced-motion\`:

* use short duration transitions
* avoid excessive scaling
* preserve all state changes clearly

Minute options:
Create minute options from 1 to 60:

\`\`\`ts
const MIN_MINUTES = 1
const MAX_MINUTES = 60
\`\`\`

Each wheel picker option should contain:

* \`label\`
* \`value\`
* \`textValue\`

Use the wheel picker primitive types:

\`\`\`ts
type WheelPickerValue = WheelPickerPrimitive.WheelPickerValue
type WheelPickerOption<T extends WheelPickerValue = string> =
  WheelPickerPrimitive.WheelPickerOption<T>
\`\`\`

Wheel picker setup:
Create local wrappers around the primitive components:

1. \`WheelPickerWrapper\`

* wraps \`WheelPickerPrimitive.WheelPickerWrapper\`
* adds border, background, dark-mode styles, and rounded highlight edges

2. \`WheelPicker\`

* wraps \`WheelPickerPrimitive.WheelPicker\`
* customizes:

  * \`optionItem\`
  * \`highlightWrapper\`
  * \`highlightItem\`

Minute picker behavior:
Create a \`MinutePicker\` component with props:

\`\`\`ts
type MinutePickerProps = {
  selectedMinutes: number
  onChange: (minutes: number) => void
}
\`\`\`

Wheel picker configuration:

* \`infinite\`
* \`visibleCount={20}\`
* \`optionItemHeight={44}\`
* \`dragSensitivity={4}\`
* \`scrollSensitivity={10}\`

The selected item should be large, white, and tabular:

\`\`\`tsx
"text-[40px] font-normal leading-none text-white tabular-nums"
\`\`\`

Progressive blur:
Add progressive blur overlays above and below the picker center row.

Create a \`BlurLayer\` component with:

\`\`\`ts
{
  blur: number
  maskFrom: number
  maskTo: number
  side: "top" | "bottom"
}
\`\`\`

Use stacked \`backdrop-filter\` layers with masked bands:

* top blur layers:

  * blur 2px, mask 0–35
  * blur 4px, mask 30–65
  * blur 7px, mask 60–95
* bottom blur layers:

  * blur 2px, mask 0–35
  * blur 4px, mask 30–65
  * blur 7px, mask 60–95

Also add a vertical fade overlay at the extremes so the picker feels like a native wheel.

Content layers:
Create a reusable \`ContentLayer\` component:

\`\`\`ts
type ContentLayerProps = {
  children: React.ReactNode
  isVisible: boolean
  className?: string
}
\`\`\`

Behavior:

* All content layers are absolutely positioned.
* Visible layer:

  * opacity 1
  * scale 1
  * pointer events enabled
* Hidden layer:

  * opacity 0
  * scale 0.95
  * pointer events disabled
  * \`aria-hidden\`
  * \`inert\`

Use Motion transitions:

* visible enter: around 0.22s with slight delay
* exit: around 0.15s
* reduced motion: around 0.1s

Timer countdown logic:

* Store selected minutes in state.
* Store remaining seconds in state.
* Store deadline timestamp in a ref.
* Store total seconds in a ref.
* When running:

  * calculate remaining time from \`deadlineRef.current - Date.now()\`
  * update every 250ms
  * use \`Math.ceil\`
  * when remaining reaches 0:

    * clear deadline
    * return to picker mode

Use this formatter:

\`\`\`ts
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return \`\${minutes}:\${remainingSeconds.toString().padStart(2, "0")}\`
}
\`\`\`

Handlers:
Implement:

* \`handleOpenPicker\`
* \`handleStart\`
* \`handlePauseResume\`
* \`handleCancel\`
* \`handleMinutesChange\`

Behavior details:

* \`handleOpenPicker\`

  * reset remaining seconds to selected minutes
  * switch to picker mode
* \`handleStart\`

  * set total seconds
  * set remaining seconds
  * set deadline
  * switch to running mode
* \`handlePauseResume\`

  * if running: clear deadline and switch to paused
  * if paused: create a new deadline from current remaining seconds and switch to running
* \`handleCancel\`

  * clear deadline
  * switch to compact
  * keep \`remainingSeconds\` unchanged during exit so progress border does not flash back to full
* \`handleMinutesChange\`

  * update selected minutes
  * update remaining seconds

Timer border:
Create a \`TimerBorder\` component with props:

\`\`\`ts
type TimerBorderProps = {
  remainingSeconds: number
  totalSeconds: number
  width: number
  height: number
  borderRadius: number
}
\`\`\`

The border should:

* trace the full rounded-rectangle perimeter
* start and end at the top center
* draw clockwise
* use a dark background stroke
* use a primary-colored animated progress stroke
* use \`pathLength={1}\`
* use \`strokeDasharray={1}\`
* animate \`strokeDashoffset\` to \`1 - progress\`

Progress formula:

\`\`\`ts
const progress = totalSeconds === 0 ? 0 : remainingSeconds / totalSeconds
\`\`\`

Use an explicit SVG path instead of \`<rect>\` so the dash origin starts at top center.

Button/content visual details:
Compact mode:

* dark surface
* full-size button
* timer icon on left
* large \`Set timer\` text
* focus-visible ring

Picker mode:

* wheel picker on left
* green \`Start\` button on right
* Start button has \`whileTap={{ scale: 0.96 }}\`

Running/paused mode:

* progress border behind content
* Pause/Resume button on left
* time in the middle/right with tabular numbers
* Cancel button on right
* Pause/Resume label should animate vertically using \`AnimatePresence\`

Pause/Resume label animation:
Use:

\`\`\`tsx
<AnimatePresence initial={false} mode="popLayout">
\`\`\`

The label should slide:

* initial: \`y: "100%", opacity: 0\`
* animate: \`y: "0%", opacity: 1\`
* exit: \`y: "-100%", opacity: 0\`

Timer icon:
Create an inline \`TimerIcon\` SVG.

* size around \`40px\`
* white fill
* partially transparent background circle
* no external icon dependency

Accessibility:

* Main surface should have:

\`\`\`tsx
aria-label="Timer"
\`\`\`

* Use real buttons for all interactions.
* Use focus-visible rings.
* Hidden content layers should use:

  * \`aria-hidden\`
  * \`inert\`
  * pointer-events disabled
* The wheel picker should remain keyboard/focus accessible through the primitive.
* Timer text should be readable and not rely only on the border progress.
* Do not trap focus.
* Reduced motion should preserve usability.

Layout:

* Outer container:

  * height around \`500px\`
  * full width
  * centered content
  * overflow hidden
  * light gray background \`#e9e9e9\`
* Timer surface:

  * relative
  * minimum width around \`250px\`
  * overflow hidden
  * background \`#2c2c2c\`
  * shadow-sm

Return:

1. Full \`SetTimer.tsx\` component.
2. Wheel picker setup/import instructions.
3. The package installation command for my package manager.
4. \`WheelPickerWrapper\`.
5. \`WheelPicker\`.
6. \`TimerMode\` type.
7. Minute options.
8. \`TimerIcon\`.
9. \`ContentLayer\`.
10. \`MinutePicker\`.
11. \`BlurLayer\`.
12. \`TimerBorder\`.
13. Timer countdown logic.
14. Pause/resume/cancel behavior.
15. Reduced-motion support.
16. Short customization notes explaining how to change:

* default selected minutes
* min/max minutes
* wheel picker height
* surface dimensions
* border progress color
* timer duration behavior
* compact/picker/running labels
* dark/light theme styling

Important:
Do not simplify this into a normal timer form. The key interaction is the morphing surface: compact timer button → wheel picker → running timer with rounded-rectangle progress border.`,
  },
  // Subscriptions List
  {
    type: "showcase",
    title: "Subscriptions List",
    stack: ["motion", "typescript"],
    media: {
      type: "component",
      componentKey: "subscription",
      alt: "subscriptions list",
    },
    col: 2,
    order: 5,
    xLink: "https://x.com/diip3sh/status/2059165685067161605?s=20",
  },
  // Analog Stick
  {
    type: "showcase",
    title: "Analog Stick",
    stack: [""],
    media: {
      type: "component",
      componentKey: "analog-stick",
      alt: "analog stick",
    },
    col: 1,
    order: 10,
    xLink: "https://x.com/diip3sh/status/2060384765774287014?s=20",
    prompt: `Create a reusable **Analog Stick Directional Pressure Button** component for an existing React + TypeScript codebase.

Goal:
Build a polished analog-stick style directional button interaction using layered circular surfaces, metallic gradients, deep tactile shadows, directional arrow icons, and invisible hover zones. The component should feel like a physical joystick/D-pad hybrid: dimensional, responsive, mechanical, and portfolio-grade.

Component concept:

* A circular analog stick sits in the center of a 300px interaction stage.
* Four invisible hover zones sit above the analog stick:

  * top
  * right
  * bottom
  * left
* When the user hovers a zone:

  * the central button tilts toward that direction
  * the button slightly translates in that direction
  * the shadow changes to match the perceived physical pressure
  * the matching directional arrow icon highlights with a warm amber fill and subtle glow
* The interaction should be CSS-driven using Tailwind arbitrary selectors and \`:has()\`.
* Do not use React state for the hover behavior unless required by the project.

Important implementation question:
Before writing the code, ask me this question and wait for my answer:

**Should this component stay pure CSS using \`:has()\` hover zones, or should it also include pointer/touch support using React state for mobile devices?**

Offer these options:

1. Keep it pure CSS with \`:has()\` and hover-only behavior.
2. Add React pointer tracking so it works with touch and drag.
3. Keep the CSS version as default, but add an optional prop for enhanced pointer tracking.
4. Suggest the best approach based on browser support and use case.

Do not start implementation until I choose one option.

Stack:

* React
* TypeScript
* Tailwind CSS
* \`cn()\` utility for class merging

Do not use:

* Motion/Framer Motion
* GSAP
* Canvas
* WebGL
* external joystick libraries
* JavaScript animation loops

Component name:

\`\`\`tsx
export const AnalogStick = () => {
  return (...)
}
\`\`\`

Expected usage:

\`\`\`tsx
<AnalogStick />
\`\`\`

Layout:

* Render a section with an accessible label:

\`\`\`tsx
<section aria-label="Directional pressure button demo">
\`\`\`

* The main stage should be:

  * relative
  * 320px tall
  * full width
  * centered content
  * overflow hidden
* Inside the stage, render:

  1. invisible hover/touch-zone layer
  2. visible analog-stick body
  3. four directional icons

Interaction layer:

* Add an invisible absolute layer above the joystick.
* Size should be around \`300px x 300px\`.
* Rotate it by \`45deg\`.
* Split it into four equal zones using flex-wrap.
* Each zone should be around \`150px x 150px\`.
* Use classes like:

\`\`\`tsx
"t t1 size-[150px]"
"t t2 size-[150px]"
"t t3 size-[150px]"
"t t4 size-[150px]"
\`\`\`

Hover mapping:

* \`t1:hover\` should represent top pressure.
* \`t2:hover\` should represent right pressure.
* \`t3:hover\` should represent left pressure.
* \`t4:hover\` should represent bottom pressure.

Directional behavior:
When top zone is hovered:

* Move button upward.
* Rotate on the X axis.
* Highlight the top arrow.

Use a transform like:

\`\`\`css
translate(0, -5px) rotateX(8deg)
\`\`\`

When right zone is hovered:

* Move button right.
* Rotate on the Y axis.

Use:

\`\`\`css
translate(5px, 0) rotateY(8deg)
\`\`\`

When left zone is hovered:

* Move button left.
* Rotate on the Y axis in the opposite direction.

Use:

\`\`\`css
translate(-5px, 0) rotateY(-8deg)
\`\`\`

When bottom zone is hovered:

* Move button downward.
* Rotate on the X axis in the opposite direction.

Use:

\`\`\`css
translate(0, 5px) rotateX(-8deg)
\`\`\`

Use Tailwind arbitrary \`:has()\` selectors:

\`\`\`tsx
"[&:has(.t1:hover)_.button-wrapper]:[transform:translate(0,-5px)_rotateX(8deg)]"
"[&:has(.t2:hover)_.button-wrapper]:[transform:translate(5px,0)_rotateY(8deg)]"
"[&:has(.t3:hover)_.button-wrapper]:[transform:translate(-5px,0)_rotateY(-8deg)]"
"[&:has(.t4:hover)_.button-wrapper]:[transform:translate(0,5px)_rotateX(-8deg)]"
\`\`\`

Also apply:

\`\`\`tsx
"[&:has(.t1:hover)_.button-wrapper]:[transform-style:preserve-3d]"
\`\`\`

Repeat the same \`transform-style: preserve-3d\` logic for all four hover zones.

Visual design:
Create the analog stick using layered circles:

1. Outer stage wrapper:

* relative
* 300px square
* centered

2. Outer ring:

* circular
* around \`size-50\`
* gradient from light silver to darker gray
* use:

\`\`\`css
linear-gradient(0deg, #f5f8fa, #9da4a8)
\`\`\`

3. Inner handle bowl:

* circular
* around \`155px\`
* blue-gray surface
* heavy inset shadows
* deep outer shadow
* should feel recessed

4. Central button wrapper:

* circular
* around \`102px\`
* metallic gradient
* deep stacked shadow
* transition all around \`250ms\`
* ease-out
* this is the element that tilts/moves

5. Inner button face:

* circular
* around \`85px\`
* lighter gradient
* subtle inset highlights
* contains four small dots

Central button default shadow:
Use a multi-layer shadow similar to:

\`\`\`css
0 9px 14px rgba(0,0,0,0.5),
0 19px 8px -2px rgba(0,0,0,0.2),
0 33px 8px rgba(0,0,0,0.4),
0 -12px 10px rgba(255,255,255,0.5),
inset 0 3px 3px rgba(255,255,255,0.6),
inset 0 -3px 3px rgba(89,91,92,0.6)
\`\`\`

Each direction should have a slightly different shadow so the lighting feels physically correct.

Top press shadow:

* stronger shadow below
* stronger highlight above
* button appears tilted upward

Right press shadow:

* shadow shifts toward the right side
* highlight shifts toward upper-left

Left press shadow:

* shadow shifts toward the left side
* highlight shifts toward upper-right

Bottom press shadow:

* shadow becomes heavier and lower
* top highlight becomes stronger

Dots:

* Add four small circular dots inside the central face.
* Position them at:

  * top center
  * right center
  * bottom center
  * left center
* Dot size around \`8px\`.
* Use a light surface color and inset shadow.

Example dot class:

\`\`\`tsx
const dotClassName = cn(
  "absolute size-[8px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]",
  "bg-[#e7ecef]",
  "shadow-[0_2px_2px_rgba(0,0,0,0.3),inset_0_-2px_2px_rgba(0,0,0,0.2)]"
)
\`\`\`

Directional icons:

* Render four SVG arrow icons:

  * top
  * right
  * bottom
  * left
* Icons should be decorative:

\`\`\`tsx
aria-hidden="true"
focusable="false"
\`\`\`

* Default icon style:

  * absolute positioned
  * width around \`30px\`
  * fill \`#b4b9bd\`
  * subtle white drop shadow
* On matching zone hover:

  * fill changes to warm amber
  * add brightness and glow filter

Example active icon effect:

\`\`\`css
fill: #e3a560;
filter: brightness(0.9)
  drop-shadow(0 0 2px #e3a15b)
  drop-shadow(0 0 1px #fff);
\`\`\`

Use a typed direction icon array:

\`\`\`ts
type DirectionIcon = {
  className: string
  path: string
  viewBox: string
}
\`\`\`

Then map over:

\`\`\`tsx
const directionIcons: DirectionIcon[] = [...]
\`\`\`

Accessibility:

* The hover zones should be hidden from screen readers with \`aria-hidden="true"\`.
* Direction icons should also be decorative and hidden from assistive tech.
* The section should have a clear \`aria-label\`.
* Since this is a visual demo and not a real form control, do not fake button semantics unless keyboard interaction is implemented.
* If implementing pointer/touch support, make sure keyboard users get an equivalent interaction.

Browser support:

* The pure CSS version depends on \`:has()\`.
* Keep the selectors readable and grouped by direction.
* Mention that older browsers without \`:has()\` may not get the hover-driven tilt.
* If I choose enhanced pointer tracking, provide a fallback that does not depend fully on \`:has()\`.

Code organization:
Return:

1. Full \`AnalogStick.tsx\` component.
2. \`DirectionIcon\` type.
3. \`rowClassName\`.
4. \`dotClassName\`.
5. \`iconClassName\`.
6. \`touchZoneClassNames\`.
7. \`dotClassNames\`.
8. \`directionIcons\` data array.
9. Final JSX.
10. Short customization notes.

Customization notes should explain how to adjust:

* component size
* press distance
* tilt angle
* icon color
* active glow
* metallic gradients
* shadow intensity
* hover-zone size
* pure CSS vs pointer-tracked behavior

Important:
Do not simplify this into a normal D-pad. The main value is the physical analog-stick illusion created through layered circles, directional hover zones, \`:has()\` selectors, transforms, changing shadows, and highlighted direction icons.`,
  },
  // Threejs Face Masking shader
  {
    type: "showcase",
    title: "Threejs Face Masking shader",
    stack: ["three.js", "shader"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/lando-norris.mp4",
      width: 1080,
      height: 1616,
      alt: "Threejs Face Masking shader",
    },
    col: 2,
    order: 7,
    xLink: "https://x.com/diip3sh/status/1981019861993365736?s=20",
  },
]
