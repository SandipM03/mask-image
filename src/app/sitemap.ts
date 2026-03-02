import type { MetadataRoute } from "next";

const siteUrl = "https://mask-image.sandipmandal.me/";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
