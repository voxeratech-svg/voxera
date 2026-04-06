import type { MetadataRoute } from "next";

const baseUrl = "https://voxeratech.com";
const locales = ["tr", "en"];

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/hakkimizda", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/hizmetlerimiz", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/projeler", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/iletisim", changeFrequency: "monthly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
        ),
      },
    }))
  );
}
