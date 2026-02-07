export function getAllStructuredData() {
  const baseUrl = 'https://balihelp.com';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bali Help',
    description: 'Professional company formation services in Bali and Indonesia. PT PMA registration, business licensing, and compliance services for foreign investors.',
    url: baseUrl,
    logo: `${baseUrl}/upload/Logo Compress.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6285727041992',
      contactType: 'sales',
      areaServed: ['ID', 'Bali', 'Indonesia'],
      availableLanguage: ['English', 'Indonesian']
    },
    sameAs: [
      'https://wa.me/6285727041992'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressRegion: 'Bali',
      addressLocality: 'Bali'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bali Help',
    url: baseUrl,
    description: 'Expert company formation in Bali and Indonesia. PT PMA registration, NIB & OSS licensing, business setup for foreign investors.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bali Help',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/upload/Logo Compress.png`
      }
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Company Formation Service in Bali',
    description: 'Complete company formation services including PT PMA registration, NIB & OSS licensing, KITAS applications, and business compliance in Indonesia.',
    provider: {
      '@type': 'Organization',
      name: 'Bali Help',
      url: baseUrl
    },
    areaServed: {
      '@type': 'Place',
      name: 'Bali, Indonesia'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: baseUrl,
      serviceLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ID',
          addressRegion: 'Bali'
        }
      }
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'PT PMA Registration',
        description: 'Full PT PMA registration service for foreign investors in Indonesia',
        areaServed: 'Bali, Indonesia'
      },
      {
        '@type': 'Offer',
        name: 'Company Licensing',
        description: 'NIB & OSS licensing services for Indonesian companies',
        areaServed: 'Indonesia'
      },
      {
        '@type': 'Offer',
        name: 'KITAS Application',
        description: 'Investor KITAS and work permit services for foreign business owners',
        areaServed: 'Bali, Indonesia'
      },
      {
        '@type': 'Offer',
        name: 'PT PMDN Registration',
        description: 'Local company registration for Indonesian citizens',
        areaServed: 'Indonesia'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '150'
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bali Help - Company Formation Services',
    description: 'Professional company formation and business licensing services in Bali, Indonesia. Specialized in PT PMA registration for foreign investors.',
    url: baseUrl,
    telephone: '+6285727041992',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bali, Indonesia',
      addressLocality: 'Bali',
      addressRegion: 'Bali',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-8.409518',
      longitude: '115.188919'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '17:00'
    },
    priceRange: '$$'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is PT PMA and do I need it?',
        acceptedAnswer: 'PT PMA (Penanamanan Modal Asing) is a foreign-owned limited liability company in Indonesia. You need PT PMA if you are a foreign investor wanting to own 100% of your Indonesian business.'
      },
      {
        '@type': 'Question',
        name: 'How long does it take to register a company in Indonesia?',
        acceptedAnswer: 'The complete PT PMA registration process typically takes 3-5 months, depending on the business activities and document preparation.'
      },
      {
        '@type': 'Question',
        name: 'What documents are required for company formation?',
        acceptedAnswer: 'Required documents include: passport and visa for foreign shareholders, company articles of association, tax ID, business plan, and lease agreement for office address.'
      },
      {
        '@type': 'Question',
        name: 'What is the minimum capital requirement for PT PMA?',
        acceptedAnswer: 'The minimum capital requirement varies by business classification. Some sectors require IDR 10 billion or more, while others may have lower requirements.'
      },
      {
        '@type': 'Question',
        name: 'Can I get a work visa (KITAS) through my company?',
        'acceptedAnswer: 'Yes, as a foreign shareholder or director, you can apply for an investor KITAS which allows you to live and work in Indonesia.'
      }
    ]
  };

  return [
    organizationSchema,
    websiteSchema,
    serviceSchema,
    localBusinessSchema,
    faqSchema
  ];
}
