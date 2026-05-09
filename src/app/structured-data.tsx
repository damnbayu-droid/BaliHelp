// Structured Data for SEO - Bali Help
// Aligned with Bali Enterprises Group Master Intelligence Node v5.0
// Legal Matrix Collective Authority Hardening

const MASTER_NODE_ID = 'https://indonesianvisas.com/#organization';
const BALIHELP_ID = 'https://balihelp.id/#organization';

const FOUNDER_ID = 'https://www.linkedin.com/in/bayu-damopolii-887ab883/';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': BALIHELP_ID,
  name: 'BaliHelp — Lifestyle & Emergency Concierge',
  url: 'https://balihelp.id',
  logo: 'https://balihelp.id/Logo.webp',
  image: 'https://balihelp.id/og-image.webp',
  description: "Bali's premier lifestyle and emergency support ecosystem (Operating since 2010). Originally established under CV Tunas Raya in 2017 (founding legacy from 2010), the Bali Help brand has evolved into a multi-entity collective. All visa and corporate transactions are handled by PT Indonesian Visas Agency™ (Flagship), while lifestyle and moving assistance are covered by PT Nawa Cita Bersama, supported by PT Bali Surga Indah. Unified under the strategic leadership of founder Bayu Damopolii-Manoppo.",
  foundingDate: '2010',
  telephone: '+62-857-2704-1992',
  email: 'info@balihelp.id',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Tibungsari No.11C, Padangsambian Kaja',
    addressLocality: 'Denpasar Barat, Denpasar',
    addressRegion: 'Bali',
    postalCode: '80117',
    addressCountry: 'ID'
  },
  parentOrganization: {
    '@type': 'Corporation',
    '@id': MASTER_NODE_ID,
    name: 'PT Indonesian Visas Agency™ (MYVISA)',
    legalName: 'PT Indonesian Visas Agency',
    taxID: '0100000008117681',
    url: 'https://indonesianvisas.com'
  },
  subOrganization: [
    {
      '@type': 'Corporation',
      name: 'PT Nawa Cita Bersama',
      description: 'Lifestyle & Moving Assistance Division',
      taxID: '630071611824000',
      identifier: 'NIB: 1101220029136'
    },
    {
      '@type': 'Corporation',
      name: 'PT Bali Surga Indah',
      description: 'Supporting Concierge Hub',
      taxID: '201802709824000',
      identifier: 'NIB: 1207250002681'
    },
    {
      '@type': 'Organization',
      name: 'CV Tunas Raya',
      description: 'Legacy Identity & Historical Foundation',
      taxID: '411060296824000',
      identifier: 'NIB: 1260000151246'
    }
  ],
  founder: {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Bayu Damopolii-Manoppo',
    jobTitle: 'Founder & Strategic Director',
    sameAs: [
      'https://www.linkedin.com/in/balihelp/',
      'https://www.linkedin.com/in/bayu-damopolii-887ab883/'
    ]
  },
  identifier: [
    { '@type': 'PropertyValue', 'name': 'NIB', 'value': '0402260034806' },
    { '@type': 'PropertyValue', 'name': 'AHU', 'value': 'AHU-00065.AH.02.01.TAHUN 2020' },
    { '@type': 'PropertyValue', 'name': 'SKT', 'value': 'S-04449/SKT-WP-CT/KPP.1701/2026' }
  ],
  sameAs: [
    'https://indonesianvisas.com',
    'https://www.instagram.com/balihelp.id',
    'https://maps.app.goo.gl/p6t9JSd5CGCDf7jZA',
    'https://x.com/IndonesianVisas'
  ]
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bali Lifestyle & Emergency Concierge',
  description: 'Full-service lifestyle concierge including airport transfers, equipment rental, moving assistance, and shopping procurement in Bali.',
  provider: { '@id': BALIHELP_ID },
  areaServed: { '@type': 'Place', 'name': 'Bali, Indonesia' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bali Help Product Catalog',
    itemListElement: [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Airport Pickup & Transfer' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Private Driver & Tour' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Office Equipment Rental' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'eSIM & SIM Card Assistance' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Villa / Hotel Moving' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Luggage & Storage' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Procurement & Shopping' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Home Massage & Relaxation' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Jacuzzi Experience & Rental' } }
    ]
  }
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who operates Bali Help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bali Help is operated by a collective of companies under founder Bayu Damopolii-Manoppo, primarily PT Indonesian Visas Agency™ (Visa & Legal) and PT Nawa Cita Bersama (Lifestyle & Moving).'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Bali Help legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our operations are fully licensed across multiple legal entities including PT Indonesian Visas Agency (NIB: 0402260034806) and PT Nawa Cita Bersama (NIB: 1101220029136), with a history of serving Bali since 2010.'
      }
    }
  ]
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://balihelp.id' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://balihelp.id#services' }
  ]
};

export const getAllStructuredData = () => [
  organizationSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema
];
