import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Lalit Singh's personal LinkedIn posting tool.",
  alternates: { canonical: "/Privacy-Policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-dvh bg-absolute-black px-framer-5 py-16 text-gallery-white">
      <article className="mx-auto flex max-w-[640px] flex-col gap-framer-8">
        <h1 className="type-heading-2">Privacy Policy</h1>
        <p className="type-label text-pretty text-muted-foreground">
          This app is a personal tool used only by its owner, Lalit Singh. It
          posts content to the owner&apos;s LinkedIn profile using a LinkedIn
          access token. It does not collect, store, share or sell any personal
          data from users or third parties. The access token is stored locally
          on the owner&apos;s computer and is never shared.
        </p>
        <p className="type-label text-muted-foreground">
          Contact:{" "}
          <a
            href="mailto:lalit.builds@gmail.com"
            className="text-gallery-white underline underline-offset-4"
          >
            lalit.builds@gmail.com
          </a>
        </p>
        <Link href="/" className="type-label w-fit underline underline-offset-4">
          ← Back to home
        </Link>
      </article>
    </main>
  )
}
