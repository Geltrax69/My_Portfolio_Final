import { Cormorant_Garamond, Geist } from "next/font/google"
import localFont from "next/font/local"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  X_HANDLE,
} from "@/lib/seo"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/small_logo.svg",
    shortcut: "/small_logo.svg",
    apple: "/small_logo.svg",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const commitMono = localFont({
  src: [
    {
      path: "../public/fonts/CommitMono-400-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CommitMono-500-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
})

const royalSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-royal-serif",
  weight: ["500", "600"],
  style: ["normal", "italic"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "no-scrollbar antialiased",
        fontSans.variable,
        "font-mono",
        commitMono.variable,
        royalSerif.variable
      )}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9581272008495186"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Analytics />
            <Toaster
              toastOptions={{
                style: {
                  width: "fit-content",
                  padding: "10px 20px",
                },
              }}
              position="bottom-left"
              richColors
            />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
