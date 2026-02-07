// Structured Data for SEO - Bali Help

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bali Help',
  description: 'Your premier service for seamless company formation and business setup in Bali',
  url: 'https://balihelp.id',
  logo: 'https://balihelp.id/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-361-123-4567',
    contactType: 'customer service',
    email: 'info@balihelp.id',
    availableLanguage: ['English', 'Indonesian']
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Ubud No. 123',
    addressLocality: 'Gianyar',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID'
  },
  sameAs: [
    'https://www.facebook.com/balihelp',
    'https://www.instagram.com/balihelp',
    'https://www.linkedin.com/company/balihelp'
  ]
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bali Help - Company Formation Services',
  image: 'https://balihelp.id/og-image.png',
  priceRange: '$$ - $$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Ubud No. 123',
    addressLocality: 'Gianyar',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.5069,
    longitude: 115.2625
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  telephone: '+62-361-123-4567',
  email: 'info@balihelp.id'
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Company Formation Services in Indonesia',
  description: 'Complete company formation services including PT PMA registration, business licensing, tax compliance, and visa support for foreign investors in Indonesia',
  provider: {
    '@type': 'Organization',
    name: 'Bali Help'
  },
  areaServed: {
    '@type': 'Place',
    name: 'Indonesia'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Company Formation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'PT PMA Registration'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Licensing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tax & Compliance'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Visa Services'
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
      name: 'What is PT PMA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PT PMA (Penanaman Modal Asing) is a foreign-owned limited liability company in Indonesia that allows up to 100% foreign ownership in most business sectors.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to register a company in Indonesia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Company registration typically takes 4-8 weeks for PT PMA and 3-6 weeks for local PT companies, depending on the complexity and requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the minimum capital requirement for PT PMA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum capital requirement for PT PMA varies by business sector, generally starting from 2.5 billion IDR for investment-based KITAS eligibility.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can foreigners own 100% of an Indonesian company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, foreigners can own 100% of a PT PMA in most business sectors, with some exceptions in restricted sectors that require local partnership.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is NIB and why do I need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NIB (Nomor Induk Berusaha) is a Business Identification Number that serves as your company\'s official business license. It\'s mandatory for all businesses in Indonesia and is obtained through the OSS system.'
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
      name: 'Services',
      item: 'https://balihelp.id#services'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pricing',
      item: 'https://balihelp.id#packages'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://balihelp.id#contact'
    }
  ]
};

export const getAllStructuredData = () => [
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema
];
