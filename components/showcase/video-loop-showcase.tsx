"use client"

import { useEffect, useRef } from "react"

export const VideoLoopShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        console.log("Autoplay prevented, waiting for user interaction")
      })
    }
  }, [])

  return (
    <section
      aria-label="Rotating video showcase"
      className="relative z-[100] flex h-[360px] w-full items-center justify-center overflow-hidden rounded-sm bg-absolute-black"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="metadata"
        width="100%"
        height="100%"
        className="h-full w-full object-cover"
        onError={(e) => console.error("Video error:", e)}
      >
        <source src="/videos/rotate.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </section>
  )
}
