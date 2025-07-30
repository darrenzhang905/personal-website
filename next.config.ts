import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint will now run during builds and fail if there are errors
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Additional optimizations can be added here as needed
};

export default nextConfig;
