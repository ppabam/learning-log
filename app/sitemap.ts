import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flag123.diginori.com',
      lastModified: new Date(),
      changeFrequency: 'daily', //yearly, monthly, weekly, daily
      priority: 1,
    },
  ]
}