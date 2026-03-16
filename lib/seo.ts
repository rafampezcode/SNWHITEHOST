export const SITE_NAME = "SN White Hosting"

// Single source of truth for canonical URLs in metadata, sitemap and robots.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.snwhitehosting.com"
