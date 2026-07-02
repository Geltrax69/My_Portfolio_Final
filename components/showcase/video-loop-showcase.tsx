"use client"

export const VideoLoopShowcase = () => {
  return (
    <div className="overflow-hidden rounded-project bg-absolute-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Rotating video showcase"
        className="h-auto w-full object-contain"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <source src="/videos/rotate.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}
