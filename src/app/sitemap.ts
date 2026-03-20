import { MetadataRoute } from 'next'
import { GUIDES_DATA } from '@/lib/guides-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balihelp.id'

  const staticPages = [
    '',
    '/about-bali-help',
    '/bali-vs-thailand-business',
    '/business-license-indonesia',
    '/case-studies',
    '/company-formation-bali',
    '/consultation',
    '/cost-start-business-bali',
    '/foreign-investment-indonesia',
    '/indonesia-company-structure',
    '/indonesia-vs-singapore-company',
    '/legal-compliance',
    '/pt-pma-indonesia',
    '/pt-pma-process',
    '/pt-pma-requirements',
    '/pt-pma-tax-indonesia',
    '/pt-pma-timeline',
    '/start-business-bali',
    '/start-business-indonesia',
    '/site-map',
    '/business-guides',
    '/csr/programs'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const guidePages = GUIDES_DATA.map(guide => ({
    url: `${baseUrl}/business-guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...guidePages]
}
