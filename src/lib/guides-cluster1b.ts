import { Guide } from './guides-data';

// Helper to generate standardized guide content from metadata
export function createGuide(
  slug: string, title: string, metaTitle: string, metaDescription: string,
  cluster: string, relatedSlugs: string[],
  intro: string, sections: { heading: string; content: string }[],
  faqs: { question: string; answer: string }[]
): Guide {
  return { slug, title, metaTitle, metaDescription, cluster, relatedSlugs, sections, faqs };
}

// Cluster 1 remaining guides (3-10)
export const cluster1Remaining: Guide[] = [
  createGuide('how-to-register-company-indonesia','How to Register a Company in Indonesia','How to Register a Company in Indonesia | Complete Guide','Step-by-step guide to registering a company in Indonesia including PT PMA, PT Local, NIB, OSS, and all required documents and procedures.','Company Formation',['what-is-pt-pma','how-to-start-company-in-bali','company-registration-timeline','business-license-indonesia'],
    'Registering a company in Indonesia requires navigating several government systems and regulatory requirements. This comprehensive guide covers every step from initial planning to obtaining your first business license.',
    [
      {heading:'Introduction',content:'Indonesia offers a transparent company registration framework governed by the Company Law No. 40 of 2007 and regulated by the Ministry of Investment (BKPM). Whether you are establishing a foreign-owned PT PMA or a local PT, the registration process follows a defined pathway through notarial, legal, and licensing procedures.'},
      {heading:'Types of Companies Available',content:'Foreign investors typically choose between PT PMA (foreign-owned) or PT Local (domestic). A PT PMA allows up to 100% foreign ownership in many sectors, while a PT Local requires Indonesian shareholders. Representative offices and branch offices are alternative structures with limited commercial capabilities.'},
      {heading:'Legal Requirements',content:'All companies must have minimum two shareholders, at least one director, one commissioner, a registered address in Indonesia, and articles of association drafted by a licensed notary. The company must also comply with minimum capital requirements which vary by type and sector.'},
      {heading:'Step-by-Step Registration Process',content:'The process includes: 1) Company name reservation at MENKUMHAM, 2) Drafting articles of association with notary, 3) Ministry approval and legal entity status, 4) Tax registration (NPWP), 5) OSS registration for NIB and business licenses, 6) Office domicile letter, 7) Corporate bank account opening.'},
      {heading:'Required Documents',content:'Documents needed include shareholder passports or KTP, proof of address, notarized articles of association, shareholder agreement, KBLI code selection, and capital allocation plan. Corporate shareholders must provide certificate of incorporation and board resolution.'},
      {heading:'Online Single Submission (OSS) System',content:'Since 2018, Indonesia has centralized business licensing through the OSS platform. All companies must register through OSS to obtain their NIB (Business Identification Number) and apply for sector-specific licenses such as commercial or operational permits.'},
      {heading:'Timeline and Processing',content:'The entire registration process typically takes 4-8 weeks for PT PMA and 3-6 weeks for PT Local. Delays can occur due to incomplete documentation, KBLI code issues, or government processing backlogs.'},
      {heading:'Costs Involved',content:'Professional service fees range from USD 1,500-5,000 depending on company type and complexity. Additional costs include notary fees (IDR 2-5 million), virtual office (USD 30-50/month), and government filing fees.'},
      {heading:'Common Registration Mistakes',content:'Frequent mistakes include selecting incorrect KBLI codes, underestimating capital requirements, failing to appoint a commissioner, using incomplete shareholder documentation, and not budgeting for ongoing compliance costs.'},
      {heading:'Post-Registration Obligations',content:'After registration, companies must file monthly tax reports, submit annual financial statements, maintain updated OSS records, and comply with employment regulations. Failure to meet these obligations can result in license suspension or revocation.'},
      {heading:'Best Practices',content:'Engage qualified legal and tax advisors from the beginning, verify KBLI codes against your actual business activities, maintain organized records, and budget for at least 12 months of compliance costs in your initial capital planning.'},
    ],
    [{question:'How long does company registration take in Indonesia?',answer:'PT PMA typically takes 4-8 weeks; PT Local takes 3-6 weeks.'},{question:'What is the minimum capital requirement?',answer:'PT PMA requires IDR 10 billion authorized capital with IDR 2.5 billion paid-up. PT Local has lower requirements.'},{question:'Do I need a physical office?',answer:'A registered business address is required, but virtual office services are accepted for company domicile.'}]
  ),
  createGuide('minimum-investment-pt-pma','Minimum Investment for PT PMA in Indonesia','Minimum Investment PT PMA | Capital Requirements Indonesia','Complete guide to minimum investment and capital requirements for PT PMA foreign company registration in Indonesia including paid-up capital and sector variations.','Company Formation',['what-is-pt-pma','how-to-start-company-in-bali','foreign-investment-bali'],
    'Understanding the minimum investment requirements is crucial for any foreign investor planning to establish a PT PMA in Indonesia.',
    [
      {heading:'Introduction',content:'The Indonesian government sets minimum capital requirements for PT PMA companies to ensure genuine foreign investment. These requirements have evolved significantly with recent regulatory changes, particularly under the Omnibus Law on Job Creation.'},
      {heading:'Standard Capital Requirements',content:'The standard minimum authorized capital for a PT PMA is IDR 10 billion (approximately USD 625,000), with a minimum paid-up capital of IDR 2.5 billion (approximately USD 156,000). However, these amounts can vary significantly based on the business sector and specific KBLI codes selected.'},
      {heading:'Authorized vs Paid-Up Capital',content:'Authorized capital represents the maximum amount the company can issue in shares, while paid-up capital is the amount actually deposited. The paid-up capital must be at least 25% of the authorized capital and must be deposited in the company\'s Indonesian bank account.'},
      {heading:'Sector-Specific Variations',content:'Different sectors have different capital requirements. Technology and consulting companies may qualify for reduced minimums under special economic zone regulations, while manufacturing, mining, and construction typically require higher capital investments due to the nature of operations.'},
      {heading:'Omnibus Law Changes',content:'The 2020 Omnibus Law on Job Creation introduced significant changes to capital requirements, potentially lowering barriers for certain sectors and micro/small enterprises. The implementing regulations continue to evolve as the government refines its investment policies.'},
      {heading:'Capital Deposit Process',content:'After company registration, the paid-up capital must be deposited into the company\'s corporate bank account. The bank will issue a deposit certificate that serves as proof of capital compliance. This certificate is required for certain licensing applications.'},
      {heading:'Investment Plan Requirements',content:'PT PMA companies must submit an investment plan to the Ministry of Investment detailing how the capital will be utilized over the first several years of operation. This plan includes projections for assets, working capital, and operational expenses.'},
      {heading:'Ongoing Capital Compliance',content:'Companies must maintain their capital commitments and may be required to increase capital as their operations expand. Annual financial reporting must reflect the current capital position and investment utilization.'},
      {heading:'Cost Planning for Investors',content:'Beyond the minimum capital, investors should budget for professional service fees (USD 2,000-5,000), notary costs, office space, initial hiring costs, and at least 6-12 months of operational expenses to ensure business sustainability.'},
      {heading:'Common Misconceptions',content:'Many investors mistakenly believe the minimum capital must be spent immediately. In reality, the capital serves as the company\'s financial foundation and can be deployed strategically over time for business operations, equipment, and working capital.'},
    ],
    [{question:'What is the minimum investment for PT PMA?',answer:'Standard minimum is IDR 10 billion authorized with IDR 2.5 billion paid-up capital.'},{question:'Has the Omnibus Law changed capital requirements?',answer:'Yes, some sectors have reduced requirements under the new regulations.'},{question:'Does all capital need to be deposited at once?',answer:'The paid-up capital (minimum 25% of authorized) must be deposited at registration. Remaining capital can be called over time.'}]
  ),
];
