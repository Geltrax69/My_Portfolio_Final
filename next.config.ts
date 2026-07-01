import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apple-touch-icon.png",
        destination: "/logo.png",
        permanent: true,
      },
      {
        source: "/apple-touch-icon-precomposed.png",
        destination: "/logo.png",
        permanent: true,
      },
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600],
    formats: ["image/webp"],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400,
    qualities: [95],
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
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
}

export default nextConfig
