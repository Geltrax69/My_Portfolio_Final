export const SITE_URL = new URL("https://lalitsingh.me")

export const SITE_NAME = "Lalit"
export const SITE_TITLE = "Lalit | Product Engineer from India | Portfolio"
export const SITE_DESCRIPTION =
  "Product Engineer from India. Building production-ready software and AI applications."
export const SITE_LOCALE = "en_IN"
export const X_HANDLE = "@LalitBuild"

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Lalit — Product Engineer from India",
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
