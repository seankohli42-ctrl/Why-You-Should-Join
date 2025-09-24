import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://whyysj.local";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}


