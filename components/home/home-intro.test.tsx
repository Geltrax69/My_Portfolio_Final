import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { HomeIntroSection } from "./home-intro"
import { portfolioContact } from "@/constants/portfolio/contact"

const mockIntro = {
  name: "testuser",
  role: "Designer",
  description: "Test description",
  avatarAlt: "Avatar",
}

afterEach(cleanup)

describe("HomeIntroSection contact actions", () => {
  it("renders one book-a-call link instead of old contact buttons", () => {
    render(<HomeIntroSection intro={mockIntro} />)

    const bookingLink = screen.getByRole("link", { name: /get in touch/i })

    expect(bookingLink.tagName).toBe("A")
    expect(
      screen.queryByRole("link", { name: /message on x/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: /mail me/i })
    ).not.toBeInTheDocument()
  })

  it("emails the owner and shows the address", async () => {
    render(<HomeIntroSection intro={mockIntro} />)

    const contactLink = screen.getByRole("link", { name: /get in touch/i })

    expect(contactLink).toHaveAttribute(
      "href",
      `mailto:${portfolioContact.email}`
    )
    expect(contactLink.className).toContain("max-w-48")
    // The email is either plain text (before the canvas loads) or the
    // TechText canvas, which carries it as its accessible name.
    const emailDisplays = await screen.findAllByText(
      (_, element) =>
        element?.getAttribute("aria-label") === portfolioContact.email ||
        (element?.tagName === "P" &&
          element.textContent === portfolioContact.email)
    )
    expect(emailDisplays.length).toBeGreaterThan(0)
    expect(
      screen.getByRole("button", { name: /copy email address/i })
    ).toBeInTheDocument()
  })
})
