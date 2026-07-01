export const SITE_URL = new URL("https://lalitsingh.me")

export const SITE_NAME = "Lalit"
export const SITE_TITLE = "Lalit | Product Engineer"
export const SITE_DESCRIPTION =
  "Product Engineer based in India. I build production-ready software, scalable backend systems, and AI-powered applications. Open to full-time opportunities and freelance projects."
export const SITE_LOCALE = "en_IN"
export const X_HANDLE = "@LalitBuild"

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/logo.svg",
  width: 256,
  height: 256,
  alt: "Lalit — Product Engineer",
} as const

export const createMetadataDescription = (
  description: string,
  maximumLength = 155
) => {
  const plainTextDescription = description
    .replace(/[`*_#]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (plainTextDescription.length <= maximumLength) {
    return plainTextDescription
  }

  const shortenedDescription = plainTextDescription.slice(0, maximumLength - 1)
  const lastWordBoundary = shortenedDescription.lastIndexOf(" ")

  if (lastWordBoundary === -1) {
    return `${shortenedDescription}…`
  }

  return `${shortenedDescription.slice(0, lastWordBoundary)}…`
}
