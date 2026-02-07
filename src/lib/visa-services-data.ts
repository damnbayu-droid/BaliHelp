export interface VisaServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  eligibility: string[];
  documents: string[];
  processingTime: string;
  requirements?: string[];
  benefits?: string[];
}

export const visaServicesCards: VisaServiceCard[] = [
  {
    id: 'visit-tourist',
    title: 'Visit / Tourist Visa',
    description: 'Short-term visa for tourism and leisure activities',
    icon: 'sun',
    fullDescription: 'Visit/Tourist Visa allows foreign nationals to enter Indonesia for tourism, family visits, social activities, or short-term business meetings. Perfect for those planning a vacation or exploring Bali\'s beautiful attractions.',
    eligibility: [
      'Valid passport (min. 6 months validity)',
      'Return or onward ticket',
      'Proof of accommodation',
      'Sufficient funds for duration of stay'
    ],
    documents: [
      'Valid passport',
      'Completed visa application form',
      'Recent passport-size photo',
      'Proof of accommodation',
      'Flight itinerary',
      'Travel insurance',
      'Bank statement (min. $2,000)'
    ],
    processingTime: '3-5 working days',
    requirements: [
      'Maximum stay: 30 days',
      'Cannot engage in paid work',
      'Single entry only',
      'Extendable once for 30 days'
    ],
    benefits: [
      'Quick processing',
      'No interview required',
      'Multiple entry points',
      'Affordable fees',
      'Easy online application'
    ]
  },
  {
    id: 'single-entry',
    title: 'Single-Entry Visa',
    description: 'One-time entry visa for specific purpose visits',
    icon: 'ticket',
    fullDescription: 'Single-Entry Business Visa allows one entry into Indonesia for specific business activities such as meetings, conferences, or negotiations. Ideal for business travelers with a single planned trip.',
    eligibility: [
      'Valid business purpose',
      'Indonesian sponsor or invitation',
      'Proof of sufficient funds',
      'Return ticket'
    ],
    documents: [
      'Valid passport',
      'Invitation letter from Indonesian company',
      'Completed business visa application',
      'Passport-size photograph',
      'Evidence of business activities',
      'Proof of accommodation',
      'Return flight ticket',
      'Bank statement'
    ],
    processingTime: '5-7 working days',
    requirements: [
      'Valid for 60 days',
      'Cannot extend stay duration',
      'Must enter within 90 days of issuance',
      'Purpose-specific activities only'
    ],
    benefits: [
      'Longer validity than tourist visa',
      'Business activities permitted',
      'Professional appearance',
      'Clear purpose documentation'
    ]
  },
  {
    id: 'multiple-entry',
    title: 'Multiple-Entry Visa',
    description: 'Flexible visa for frequent business travelers',
    icon: 'refresh-cw',
    fullDescription: 'Multiple-Entry Business Visa is designed for frequent visitors to Indonesia, allowing unlimited entries within the visa validity period. Perfect for business executives, consultants, and professionals with ongoing business relationships in Indonesia.',
    eligibility: [
      'Frequent business travel to Indonesia',
      'Indonesian company sponsor',
      'Valid business reasons',
      'Clean immigration record'
    ],
    documents: [
      'Valid passport (min. 18 months validity)',
      'Sponsorship letter from Indonesian company',
      'Completed visa application',
      'Recent passport photo',
      'Business activity explanation',
      'Previous Indonesian visa records (if any)',
      'Company registration documents',
      'Bank statement (min. $3,500)'
    ],
    processingTime: '7-10 working days',
    requirements: [
      'Valid for 1 year',
      'Unlimited entries during validity',
      'Maximum stay per visit: 60 days',
      'Must have local sponsor'
    ],
    benefits: [
      'Flexible travel schedule',
      'Cost-effective for frequent visits',
      'No per-entry application',
      'Business networking opportunities',
      'Professional credibility'
    ]
  },
  {
    id: 'kitas-kitap-citizenship',
    title: 'KITAS / KITAP / Citizenship',
    description: 'Long-term residency and naturalization options',
    icon: 'home',
    fullDescription: 'KITAS (Kartu Izin Tinggal Terbatas) provides temporary residency for investors, employees, and retirees. KITAP (Kartu Izin Tinggal Tetap) offers permanent residency after 5 years. Citizenship is available after additional requirements are met.',
    eligibility: [
      'For KITAS: Investment, employment, or retirement',
      'For KITAP: 5 consecutive years of KITAS',
      'For Citizenship: 5 years of KITAP + additional requirements'
    ],
    documents: [
      'Valid passport',
      'RPTKA (Employment Plan Approval) - for work KITAS',
      'Tax ID (NPWP)',
      'Company registration documents - for investor KITAS',
      'Investment proof - min. 10 billion IDR for KITAP',
      'Passport-size photos',
      'Health insurance',
      'Police clearance from home country',
      'Marriage certificate (if applicable)',
      'Curriculum Vitae'
    ],
    processingTime: '2-3 months for KITAS, 1-2 months for KITAP',
    requirements: [
      'KITAS: Valid 1-2 years depending on type',
      'KITAP: Valid 5 years, renewable indefinitely',
      'Citizenship: Requires Indonesian language test',
      'Must maintain tax compliance',
      'Must reside in Indonesia'
    ],
    benefits: [
      'Legal right to work',
      'Business ownership opportunities',
      'Path to permanent residency',
      'Family sponsorship options',
      'Long-term stability'
    ]
  }
];
