export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQ[] = [
  {
    id: 'availability',
    question: 'Do you provide services across all of Indonesia?',
    answer: 'Yes! We have a strong network of partners and representatives across major Indonesian cities including Bali, Jakarta, Surabaya, Medan, Makassar, and more. Our team can assist with company formation, licensing, and compliance throughout Indonesia, ensuring you get the same quality service regardless of your chosen business location.',
    category: 'Availability'
  },
  {
    id: 'process-time',
    question: 'How long does the complete company formation process take?',
    answer: 'The timeline varies by company type and complexity. A PT Local Company typically takes 3-6 weeks, while PT PMA registration usually requires 4-8 weeks. Additional licensing and tax registration may add 1-2 weeks. Our efficient process and government relations help minimize delays and keep your project on track.',
    category: 'Process'
  },
  {
    id: 'capital-requirements',
    question: 'What is the minimum capital required for PT PMA?',
    answer: 'The minimum capital requirement for PT PMA varies by business sector and whether you plan to sponsor foreign employees. Generally, a minimum investment of 2.5 billion IDR is required if you want to sponsor Investor KITAS. Our team can help you determine the exact capital requirements based on your specific business activities.',
    category: 'Requirements'
  },
  {
    id: 'foreign-ownership',
    question: 'Can foreigners 100% own a company in Indonesia?',
    answer: 'Yes, foreigners can own 100% of a PT PMA (Penanaman Modal Asing) in most business sectors. However, there are restricted sectors (negative investment list) that require local partnership. Our experts will guide you through the ownership structure options available for your specific business.',
    category: 'Ownership'
  },
  {
    id: ' ongoing-support',
    question: 'Do you provide ongoing support after company formation?',
    answer: 'Absolutely! We offer comprehensive post-formation support including monthly/quarterly tax reporting, bookkeeping services, HR & payroll management, annual compliance filings, and advisory services. We can also assist with license renewals, shareholder changes, and other corporate actions.',
    category: 'Support'
  }
];
