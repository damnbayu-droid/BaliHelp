// Business Guides Metadata & Content Data - Master Index

export interface GuideSection {
  heading: string;
  content: string;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  cluster: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
  relatedSlugs: string[];
}

import { cluster1Guides } from './guides-cluster1';
import { cluster1Remaining } from './guides-cluster1b';
import { allGeneratedGuides } from './guides-all';

export const GUIDES_DATA: Guide[] = [
  ...cluster1Guides,
  ...cluster1Remaining,
  ...allGeneratedGuides,
];

export const ALL_GUIDE_SLUGS = GUIDES_DATA.map(g => g.slug);

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES_DATA.find(g => g.slug === slug);
}

export function getRelatedGuides(slugs: string[]): { slug: string; title: string }[] {
  return slugs
    .map(s => {
      const g = GUIDES_DATA.find(x => x.slug === s);
      return g ? { slug: g.slug, title: g.title } : null;
    })
    .filter(Boolean) as { slug: string; title: string }[];
}
