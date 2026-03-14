// Comprehensive mock data for Bali Help website - Company Formation Services

export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  features: string[];
  requirements: string[];
  timeline: string;
  pricing?: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  fullDescription: string;
  includes: string[];
}

export interface VisaService {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  eligibility: string[];
  documents: string[];
  processingTime: string;
}

export const servicesData: Service[] = [
  // Company Formation
  {
    id: 'pt-pma',
    category: 'Company Formation',
    title: 'PT PMA',
    description: 'Foreign-owned company registration with full ownership structure',
    icon: 'building',
    fullDescription: 'PT PMA (Penanaman Modal Asing) is a foreign-owned limited liability company in Indonesia. This structure allows 100% foreign ownership in most business sectors, with minimum capital requirements and specific regulatory compliance.',
    features: [
      '100% foreign ownership allowed',
      'Limited liability protection',
      'Separate legal entity',
      'Can apply for business licenses',
      'Eligible for investor KITAS',
      'Can sponsor foreign employees'
    ],
    requirements: [
      'Minimum paid-up capital (varies by sector)',
      'Two shareholders (can be individuals or entities)',
      'Indonesian domicile address',
      'At least one director and one commissioner'
    ],
    timeline: '4-8 weeks'
  },
  {
    id: 'pt-local',
    category: 'Company Formation',
    title: 'PT Local Company',
    description: 'Local company setup for Indonesian partners or structured ownership',
    icon: 'landmark',
    fullDescription: 'A PT (Perseroan Terbatas) is an Indonesian limited liability company. Suitable for local entrepreneurs or joint ventures with Indonesian partners, offering simpler compliance requirements for domestic-focused businesses.',
    features: [
      'Indonesian ownership structure',
      'Simpler regulatory requirements',
      'Lower capital requirements',
      'Full business license eligibility',
      'Domestic market focus',
      'Tax incentives available'
    ],
    requirements: [
      'Minimum two shareholders',
      'Indonesian citizens or legal entities',
      'Indonesian domicile address',
      'Director and commissioner'
    ],
    timeline: '3-6 weeks'
  },
  {
    id: 'virtual-office',
    category: 'Company Formation',
    title: 'Virtual Office',
    description: 'Registered business address in Bali for company domicile',
    icon: 'credit-card',
    fullDescription: 'Professional virtual office services providing a registered business address in Bali, mail handling, and administrative support. Essential for company registration and ongoing compliance.',
    features: [
      'Registered business address',
      'Mail handling and forwarding',
      'Phone answering service',
      'Meeting room access',
      'Compliance document support',
      'Prime Bali location'
    ],
    requirements: [
      'Company registration documents',
      'Lease agreement or virtual office contract',
      'Proof of address for KTP'
    ],
    timeline: '1-2 days'
  },
  // Business Licensing
  {
    id: 'nib-registration',
    category: 'Business Licensing',
    title: 'NIB Registration',
    description: 'Business identification number through OSS system',
    icon: 'file-text',
    fullDescription: 'NIB (Nomor Induk Berusaha) is your business identification number, required for all businesses in Indonesia. Obtained through the OSS (Online Single Submission) system, it serves as your company\'s official business license.',
    features: [
      'Mandatory for all businesses',
      'Replaces multiple old licenses',
      'Online registration process',
      'Includes tax ID integration',
      'Valid nationwide',
      'Required for bank accounts'
    ],
    requirements: [
      'Company deed or personal ID',
      'Business address proof',
      'KBLI code selection',
      'Capital information'
    ],
    timeline: '1-3 business days'
  },
  {
    id: 'oss-registration',
    category: 'Business Licensing',
    title: 'OSS Registration',
    description: 'Online Single Submission for business permits',
    icon: 'clipboard-list',
    fullDescription: 'OSS system integration for all business licensing needs, including sector-specific licenses, import/export permits, and additional regulatory requirements based on your business activities.',
    features: [
      'One-stop licensing platform',
      'Multiple license types',
      'Real-time status tracking',
      'Electronic document storage',
      'Integrated with government systems',
      'Renewal reminders'
    ],
    requirements: [
      'Valid NIB',
      'Business activity details',
      'Supporting documents',
      'Compliance declarations'
    ],
    timeline: '3-14 days depending on licenses'
  },
  {
    id: 'kbli-alignment',
    category: 'Business Licensing',
    title: 'KBLI Alignment',
    description: 'Business classification code matching and compliance',
    icon: 'file-check',
    fullDescription: 'KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) is the standard business classification system. Proper alignment ensures your business activities match regulatory requirements and licensing needs.',
    features: [
      'Correct business classification',
      'License eligibility verification',
      'Regulatory compliance',
      'Tax code alignment',
      'Import/export qualification',
      'Sector-specific requirements'
    ],
    requirements: [
      'Business activity description',
      'Revenue projections',
      'Employee planning',
      'Industry regulations review'
    ],
    timeline: '2-5 business days'
  },
  // Tax & Compliance
  {
    id: 'npwp-registration',
    category: 'Tax & Compliance',
    title: 'NPWP Registration',
    description: 'Tax identification number for your company',
    icon: 'calculator',
    fullDescription: 'NPWP (Nomor Pokok Wajib Pajak) is the tax identification number required for all businesses in Indonesia. Essential for tax compliance, invoicing, and all financial transactions.',
    features: [
      'Mandatory for all businesses',
      'Required for invoicing',
      'Tax filing eligibility',
      'Bank account opening',
      'Employee tax withholding',
      'Government contract eligibility'
    ],
    requirements: [
      'Company registration documents',
      'Director\'s KTP and NPWP',
      'Business address proof',
      'Articles of association'
    ],
    timeline: '3-7 business days'
  },
  {
    id: 'pkp-registration',
    category: 'Tax & Compliance',
    title: 'PKP Registration',
    description: 'VAT collector status registration when required',
    icon: 'receipt',
    fullDescription: 'PKP (Pengusaha Kena Pajak) status allows businesses to collect and remit VAT. Required once your annual revenue exceeds the threshold, but can be registered earlier for business advantages.',
    features: [
      'VAT collection capability',
      'Input tax credit eligibility',
      'Enhanced business credibility',
      'Government contract access',
      'Export tax incentives',
      'Professional status recognition'
    ],
    requirements: [
      'Valid NPWP',
      'Annual revenue over 4.8 billion IDR (or voluntary registration)',
      'Financial records',
      'Tax compliance history'
    ],
    timeline: '5-10 business days'
  },
  {
    id: 'periodic-reporting',
    category: 'Tax & Compliance',
    title: 'Periodic Reporting',
    description: 'Ongoing tax and compliance reporting assistance',
    icon: 'file-text',
    fullDescription: 'Comprehensive support for monthly, quarterly, and annual tax and compliance reporting. Ensures your business stays compliant with all regulatory requirements and avoids penalties.',
    features: [
      'Monthly VAT reporting',
      'Quarterly tax payments',
      'Annual tax returns',
      'Financial statements',
      'Employee tax reporting',
      'Compliance monitoring'
    ],
    requirements: [
      'Valid NPWP/PKP',
      'Financial records',
      'Transaction documentation',
      'Employee data'
    ],
    timeline: 'Ongoing (monthly/quarterly/annual)'
  },
  // Additional Support
  {
    id: 'bank-account',
    category: 'Additional Support',
    title: 'Bank Account Assistance',
    description: 'Support for corporate bank account opening process',
    icon: 'wallet',
    fullDescription: 'End-to-end assistance in opening corporate bank accounts with major Indonesian banks. Includes document preparation, bank selection guidance, and application support.',
    features: [
      'Bank selection consultation',
      'Document preparation',
      'Application assistance',
      'English-speaking support',
      'Multi-currency account options',
      'Online banking setup'
    ],
    requirements: [
      'Company registration complete',
      'Valid NIB and NPWP',
      'Director and shareholder KTP',
      'Company stamp'
    ],
    timeline: '1-2 weeks'
  },
  {
    id: 'investor-kitas',
    category: 'Additional Support',
    title: 'Investor KITAS Support',
    description: 'Visa support for qualifying investors (subject to eligibility)',
    icon: 'user-check',
    fullDescription: 'KITAS (Kartu Izin Tinggal Terbatas) is a temporary stay permit for foreign investors. Provides 1-2 year residency with work rights for company directors and qualifying investors.',
    features: [
      '1-2 year residency permit',
      'Work authorization',
      'Multiple entry/exit',
      'Family sponsorship options',
      'Path to permanent residency (KITAP)',
      'Local ID card (KTP) eligibility'
    ],
    requirements: [
      'Minimum investment (2.5 billion IDR for company)',
      'Valid PT PMA',
      'Business plan',
      'Clean criminal record',
      'Health insurance',
      'Tax compliance'
    ],
    timeline: '2-4 months'
  }
];

export const packagesData: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Essential company formation for small businesses',
    price: 'From $1,500',
    features: [
      'PT Local Company Registration',
      'NIB Registration',
      'OSS Registration',
      'NPWP Registration',
      'Virtual Office (3 months)'
    ],
    fullDescription: 'Perfect for small businesses and local entrepreneurs starting their journey in Indonesia. This package covers all essential registration requirements to establish your company legally and begin operations.',
    includes: [
      'Company name reservation and availability check',
      'Preparation of articles of association',
      'Notary fees for company deed',
      'Ministry of Law and Human Rights approval',
      'NIB business identification number',
      'Basic OSS business license',
      'Tax ID (NPWP) registration',
      'Virtual office address for 3 months',
      'Document handling and processing',
      'Email and phone support'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Complete setup for foreign investors',
    price: 'From $3,500',
    features: [
      'PT PMA Registration',
      'NIB & OSS Registration',
      'KBLI Alignment',
      'NPWP & PKP Registration',
      'Virtual Office (12 months)',
      'Bank Account Assistance',
      'Investor KITAS Support'
    ],
    popular: true,
    fullDescription: 'Our most popular package for foreign investors looking to establish a full PT PMA in Indonesia. Comprehensive support from registration through operational setup.',
    includes: [
      'Everything in Starter package',
      'PT PMA foreign-owned company registration',
      'Shareholder structure planning',
      'KBLI business code alignment',
      'PKP VAT collector registration',
      'Extended virtual office (12 months)',
      'Corporate bank account opening assistance',
      'Investor KITAS visa application support',
      'Tax compliance consultation',
      'Priority processing',
      'Dedicated account manager',
      'Quarterly compliance check-ins'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-service solution with ongoing support',
    price: 'Custom Pricing',
    features: [
      'Everything in Business',
      'Multiple Business Licenses',
      'Periodic Tax Reporting (1 year)',
      'Dedicated Account Manager',
      'Priority Processing',
      'Compliance Monitoring'
    ],
    fullDescription: 'Complete enterprise solution for businesses requiring multiple licenses, ongoing compliance support, and dedicated management. Ideal for established companies expanding to Indonesia.',
    includes: [
      'Everything in Business package',
      'Multiple sector-specific licenses',
      'Import/export license assistance',
      'Full year of monthly tax reporting',
      'Quarterly financial review',
      'Annual tax return preparation',
      'Dedicated account manager',
      '24/7 priority support',
      'Unlimited document consultation',
      'Compliance monitoring and alerts',
      'Employee work permit (KITAS) coordination',
      'Renewal management',
      'Strategic business advisory'
    ]
  }
];

export const visaServicesData: VisaService[] = [
  {
    id: 'b211a',
    title: 'B211A Visit Visa',
    description: 'Business and investment exploration visa',
    icon: 'passport',
    fullDescription: 'The B211A visa is perfect for business meetings, investment exploration, and preliminary business activities in Indonesia. Valid for 60 days with extension options.',
    eligibility: [
      'Business professionals',
      'Potential investors',
      'Business meeting attendees',
      'Conference participants'
    ],
    documents: [
      'Valid passport (min. 6 months)',
      'Invitation letter from Indonesian entity',
      'Round-trip flight booking',
      'Hotel accommodation proof',
      'Bank statement (min. $1,500)',
      'Travel insurance'
    ],
    processingTime: '3-5 working days'
  },
  {
    id: 'kitas-investor',
    title: 'Investor KITAS',
    description: 'Temporary stay permit for foreign investors',
    icon: 'user-check',
    fullDescription: 'Investor KITAS provides 1-2 year residency with work rights for company directors and investors who meet the minimum investment requirements in an Indonesian company.',
    eligibility: [
      'Company directors/shareholders',
      'Minimum investment of 2.5 billion IDR',
      'Valid PT PMA company',
      'Clean criminal record'
    ],
    documents: [
      'Valid passport',
      'Company establishment documents',
      'Investment proof (share capital)',
      'Bank statement',
      'Curriculum vitae',
      'Health insurance',
      'Police clearance certificate',
      'Tax compliance letter'
    ],
    processingTime: '2-3 months'
  },
  {
    id: 'kitas-worker',
    title: 'Working KITAS',
    description: 'Employment-based temporary stay permit',
    icon: 'briefcase',
    fullDescription: 'Working KITAS allows foreign employees to work legally in Indonesia for a sponsoring company. Valid for 1 year with renewal options.',
    eligibility: [
      'Employed by Indonesian company',
      'Position requires foreign expertise',
      'Company has RPTKA approval',
      'Meets salary requirements'
    ],
    documents: [
      'Valid passport',
      'Employment contract',
      'RPTKA approval',
      'Vitas telex approval',
      'Educational certificates',
      'Work experience proof',
      'Health certificate',
      'Police clearance'
    ],
    processingTime: '4-8 weeks'
  },
  {
    id: 'kitap',
    title: 'Permanent Stay Permit (KITAP)',
    description: 'Long-term residency for eligible foreigners',
    icon: 'home',
    fullDescription: 'KITAP is a permanent stay permit valid for 5 years, available to those who have held KITAS for multiple years or are married to Indonesian citizens.',
    eligibility: [
      'Held KITAS for 3+ years continuously',
      'Married to Indonesian citizen',
      'Former Indonesian citizen',
      'Second-generation diaspora'
    ],
    documents: [
      'Valid passport and current KITAS',
      'Proof of KITAS duration',
      'Marriage certificate (if applicable)',
      'Tax compliance reports',
      'Police clearance',
      'Bank statement',
      'Sponsor letter (if applicable)'
    ],
    processingTime: '3-6 months'
  },
  {
    id: 'e-voz',
    title: 'E-VOZ Multiple Entry',
    description: 'Multiple exit-reentry permit',
    icon: 'refresh-cw',
    fullDescription: 'E-VOZ (Electronic Visit Visa Multiple Entry) allows multiple entries to Indonesia over one year, perfect for frequent business travelers.',
    eligibility: [
      'Business travelers',
      'Frequent visitors',
      'Those with ongoing business in Indonesia'
    ],
    documents: [
      'Valid passport',
      'Recent photograph',
      'Bank statement',
      'Itinerary or business plan',
      'Invitation letter (if applicable)',
      'Travel insurance'
    ],
    processingTime: '2-4 working days'
  }
];

export const whyBaliData = [
  {
    id: 'economy',
    title: 'Growing Economy',
    description: 'Indonesia offers one of the fastest-growing economies in Southeast Asia with increasing foreign investment opportunities.',
    icon: 'trending-up'
  },
  {
    id: 'location',
    title: 'Strategic Location',
    description: 'Bali serves as a gateway to ASEAN markets with excellent connectivity and international accessibility.',
    icon: 'globe'
  },
  {
    id: 'workforce',
    title: 'Skilled Workforce',
    description: 'Access to talented professionals and a growing pool of English-speaking business support.',
    icon: 'users'
  },
  {
    id: 'government',
    title: 'Government Support',
    description: 'Streamlined OSS system and investment-friendly policies support foreign business establishment.',
    icon: 'landmark'
  },
  {
    id: 'sectors',
    title: 'Diverse Sectors',
    description: 'From tech startups to tourism, multiple industries thrive in Bali\'s unique business ecosystem.',
    icon: 'briefcase'
  },
  {
    id: 'lifestyle',
    title: 'Quality of Life',
    description: 'World-renowned lifestyle destination combining business opportunities with exceptional living standards.',
    icon: 'sun'
  }
];

export const trustData = [
  {
    value: '500+',
    label: 'Companies Formed'
  },
  {
    value: '98%',
    label: 'Success Rate'
  },
  {
    value: '15+',
    label: 'Years Experience'
  },
  {
    value: '24/7',
    label: 'Support Available'
  }
];

export const navigationLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Visas', href: '#visa-services' },
  { name: 'CSR', href: '/csr' },
  { name: 'Contact', href: '#contact' }
];
