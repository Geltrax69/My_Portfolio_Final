export const SITE_URL = new URL("https://diip3sh.xyz")

export const SITE_NAME = "Lalit"
export const SITE_TITLE = "Lalit | Product Engineer"
export const SITE_DESCRIPTION =
  "Lalit is a product engineer from India building polished digital products with thoughtful UX, scalable systems, and modern web technology."
export const SITE_LOCALE = "en_IN"
export const X_HANDLE = "@Lalit"

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/og-image.png",
  width: 1622,
  height: 970,
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
