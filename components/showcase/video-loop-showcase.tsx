"use client"

export const VideoLoopShowcase = () => {
  return (
    <section
      aria-label="Rotating video showcase"
      className="relative z-[100] flex h-[360px] w-full items-center justify-center overflow-hidden rounded-sm bg-absolute-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        style={{ display: "block" }}
      >
        <source src="/videos/rotate.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </section>
  )
}
