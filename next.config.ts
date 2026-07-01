import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apple-touch-icon.png",
        destination: "/logo.svg",
        permanent: true,
      },
      {
        source: "/apple-touch-icon-precomposed.png",
        destination: "/logo.svg",
        permanent: true,
      },
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 2064],
    formats: ["image/webp", "image/avif"],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512, 1024],
    minimumCacheTTL: 31536000,
    qualities: [100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev",
        pathname: "/projects/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
}

export default nextConfig
