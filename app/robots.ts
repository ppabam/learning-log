import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/',
    },
    sitemap: 'https://flag123.diginori.com/sitemap.xml',
  }
}