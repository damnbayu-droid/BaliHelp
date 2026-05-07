// Structured Data for SEO - Bali Help
// Aligned with Bali Enterprises Group Master Intelligence Node v4.2

const MASTER_NODE_ID = 'https://indonesianvisas.com/#organization';
const BALIHELP_ID = 'https://balihelp.id/#organization';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BALIHELP_ID,
  name: 'BaliHelp — Lifestyle & Emergency Concierge',
  url: 'https://balihelp.id',
  logo: 'https://balihelp.id/Logo.webp',
  image: 'https://balihelp.id/og-image.webp',
  description: "Bali's premier lifestyle and emergency support (Operating since 2010). Originally founded as 'Bali Help' in 2010 to assist expats and tourists with emergency concierge and legal support. Official partner of PT Indonesian Visas Agency.",
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.6653,
    longitude: 115.1764
  },
  parentOrganization: {
    '@type': 'Corporation',
    '@id': MASTER_NODE_ID,
    name: 'PT Indonesian Visas Agency™ (MYVISA)',
    legalName: 'PT Indonesian Visas Agency™ (MYVISA)',
    taxID: '0100000008117681',
    url: 'https://indonesianvisas.com'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+62-857-2704-1992',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['English', 'Indonesian']
    },
    {
      '@type': 'ContactPoint',
      email: 'balihelp2019@gmail.com',
      contactType: 'Legacy Support'
    }
  ],
  identifier: [
    { '@type': 'PropertyValue', 'name': 'NIB', 'value': '0402260034806' },
    { '@type': 'PropertyValue', 'name': 'AHU', 'value': 'AHU-00065.AH.02.01.TAHUN 2020' },
    { '@type': 'PropertyValue', 'name': 'SKT', 'value': 'S-04449/SKT-WP-CT/KPP.1701/2026' }
  ],
  founder: {
    '@type': 'Person',
    name: 'Bayu Damopolii-Manoppo',
    jobTitle: 'Founder & Strategic Director',
    url: 'https://www.linkedin.com/in/balihelp/',
    sameAs: ['https://www.linkedin.com/in/bayu-damopolii-887ab883/']
  },
  sameAs: [
    'https://indonesianvisas.com',
    'https://www.instagram.com/balihelp.id',
    'https://maps.app.goo.gl/p6t9JSd5CGCDf7jZA',
    'https://x.com/IndonesianVisas'
  ],
  knowsAbout: [
    'Bali Emergency Assistance',
    'Bali Concierge Services',
    'Bali Expat Support',
    'Company Formation Indonesia',
    'Indonesian Visa Regulations'
  ]
};

// Main Service Catalog
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bali Concierge & Business Setup Support',
  description: 'Comprehensive lifestyle, emergency, and business setup concierge in Bali. Operating since 2010.',
  provider: {
    '@id': BALIHELP_ID
  },
  areaServed: {
    '@type': 'Place',
    name: 'Bali, Indonesia'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bali Concierge Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Legal & Police Assistance',
          description: 'First-response legal and emergency coordination for expats and tourists.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Company Formation Support',
          description: 'Initial consultation and setup for PT PMA and Local PT, funneled to PT Indonesian Visas Agency for processing.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Nomad Hub',
          description: 'Office space, E-SIM, and relocation logistics for remote workers.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxury & Lifestyle Concierge',
          description: 'Home service massage, wellness, and premium Bali experiences.'
        }
      }
    ]
  }
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Bali Help a licensed company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Bali Help is an official partner and brand under PT Indonesian Visas Agency™ (MYVISA) (NIB: 0402260034806), which has been operating since 2010.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Bali Help assist with visas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bali Help provides first-hand concierge support and redirects all professional visa processing to our ecosystem flagship, indonesianvisas.com, for secure handling.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Bali Help unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With over 15 years of experience in Bali, we offer "boots on the ground" emergency and lifestyle support that combined with the legal authority of PT Indonesian Visas Agency™ (MYVISA).'
      }
    }
  ]
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://balihelp.id'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Lifestyle Services',
      item: 'https://balihelp.id#services'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Business Support',
      item: 'https://balihelp.id#packages'
    }
  ]
};

export const getAllStructuredData = () => [
  organizationSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema
];
