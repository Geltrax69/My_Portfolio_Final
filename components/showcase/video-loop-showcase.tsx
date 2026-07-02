"use client"

export const VideoLoopShowcase = () => {
  return (
    <div className="overflow-hidden rounded-project">
      <video
        controls
        playsInline
        preload="metadata"
        aria-label="Rotating video showcase"
        className="h-auto w-full object-contain"
      >
        <source src="/videos/rotate.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}
