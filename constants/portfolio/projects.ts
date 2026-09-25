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
    title: "Rotating video loop",
    stack: [""],
    media: {
      type: "component",
      componentKey: "video-loop",
      alt: "rotating video loop",
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
