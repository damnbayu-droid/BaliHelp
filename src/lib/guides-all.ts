import { Guide } from './guides-data';

// Helper: generate rich content paragraphs for a topic within a guide context
function p(topic: string, context: string): string {
  const templates: Record<string, string> = {
    'Introduction': `This comprehensive guide covers everything you need to know about ${context}. Whether you are a foreign investor, digital nomad, or entrepreneur, understanding these fundamentals is essential for success in Indonesia's business landscape. Bali Help, supported by PT Indonesian Visas Agency, provides professional guidance throughout every step of the process.`,
    'Definition': `In the context of Indonesian business law, ${context} refers to the legal and regulatory framework established by the government to facilitate investment and commercial activities. These provisions are codified in Indonesian Company Law No. 40 of 2007 and supplemented by implementing regulations from the Ministry of Investment (BKPM) and other relevant authorities.`,
    'Legal Framework': `The legal framework governing ${context} is established through multiple layers of Indonesian regulation. At the highest level, the Investment Law No. 25 of 2007 and the Omnibus Law on Job Creation (2020) set the foundational principles. These are supplemented by government regulations, presidential decrees, and ministerial regulations that provide detailed implementation guidelines. Foreign investors must ensure compliance with all applicable laws to maintain their business licenses and legal standing.`,
    'Requirements': `Key requirements for ${context} include proper documentation, minimum capital compliance, correct KBLI business classification code selection, and registration through the OSS (Online Single Submission) system. All applicants must provide valid identification, proof of domicile, and business planning documentation. Additional sector-specific requirements may apply depending on the nature of the business activities.`,
    'Process': `The process for ${context} follows a structured pathway through Indonesian regulatory systems. First, preliminary planning and documentation preparation are completed. Then, the formal application is submitted through the appropriate government channels. This is followed by review and approval stages, each with defined processing timelines. Professional service providers can streamline this process significantly by ensuring correct documentation and procedures from the outset.`,
    'Timeline': `Processing times for ${context} vary depending on complexity and documentation completeness. Standard processing typically ranges from 2 to 8 weeks. Factors that can extend the timeline include incomplete documentation, sector-specific approval requirements, and government processing backlogs. Working with experienced professionals helps minimize delays and ensures efficient processing.`,
    'Costs': `Costs associated with ${context} include government filing fees, notary charges, professional service fees, and ongoing compliance expenses. Initial setup costs typically range from USD 1,500 to USD 7,000 depending on the complexity of the business structure. Ongoing monthly compliance costs (accounting, tax filing, virtual office) average USD 200-500. It is important to budget for all these components when planning your investment.`,
    'Common Mistakes': `Common mistakes when dealing with ${context} include: selecting incorrect KBLI business codes, underestimating capital requirements, attempting to use illegal nominee arrangements, failing to plan for ongoing compliance costs, not engaging qualified legal and tax advisors, and missing regulatory deadlines for reporting and filings. These mistakes can lead to license revocation, financial penalties, or legal complications.`,
    'Best Practices': `Best practices for ${context} include: engaging qualified Indonesian legal and tax professionals from the beginning, thoroughly researching sector-specific regulations before committing capital, maintaining organized records and documentation, budgeting for at least 12 months of compliance costs, staying informed about regulatory changes, and building relationships with local business communities and government contacts.`,
    'FAQ': `Below are the most frequently asked questions about ${context}. These answers provide general guidance based on current Indonesian regulations. For specific advice tailored to your situation, consult with professional advisors who specialize in Indonesian business law and foreign investment.`,
    'Summary': `Understanding ${context} is essential for any foreign investor or entrepreneur planning to do business in Indonesia. The regulatory framework, while comprehensive, provides clear pathways for compliant business establishment and operation. Professional guidance from experienced service providers like Bali Help can significantly simplify the process and reduce the risk of costly errors. For visa and immigration services related to your business activities, visit Indonesian Visas Agency at indonesianvisas.com.`,
  };
  return templates[topic] || `${topic} is a critical component of ${context} in Indonesia. The Indonesian government has established clear guidelines and regulatory frameworks that must be followed to ensure full compliance. Understanding these requirements helps foreign investors navigate the business landscape effectively. Professional guidance is recommended to avoid common pitfalls and ensure your business meets all legal obligations. Recent regulatory reforms, including the Omnibus Law, have simplified many aspects of ${topic.toLowerCase()} while maintaining important investor protections and compliance standards.`;
}

// Standard FAQ sets by cluster
const companyFAQs = (ctx: string) => [
  {question:`What are the main requirements for ${ctx}?`,answer:'Key requirements include proper documentation, minimum capital compliance, KBLI code selection, and registration through the OSS system.'},
  {question:'How long does the process take?',answer:'Processing typically takes 4-8 weeks depending on complexity and documentation completeness.'},
  {question:'Do I need professional help?',answer:'While not legally required, professional service providers significantly reduce processing time and prevent costly errors.'},
];

const licenseFAQs = (ctx: string) => [
  {question:`What licenses do I need for ${ctx}?`,answer:'Required licenses depend on your KBLI business classification code and may include NIB, commercial license, and sector-specific permits.'},
  {question:'How do I apply for business licenses?',answer:'All business licenses are applied for through the OSS (Online Single Submission) system using your NIB.'},
  {question:'How long are licenses valid?',answer:'Most licenses remain valid as long as the company maintains compliance with reporting and regulatory requirements.'},
];

const taxFAQs = (ctx: string) => [
  {question:`What are the tax obligations for ${ctx}?`,answer:'Companies must file monthly tax returns, quarterly corporate tax payments, and annual tax returns with the Indonesian tax authority.'},
  {question:'What is the corporate tax rate?',answer:'The standard corporate income tax rate in Indonesia is 22%, with reduced rates available for qualifying small and medium enterprises.'},
  {question:'Do foreign companies pay different tax rates?',answer:'Foreign-owned PT PMA companies are subject to the same tax rates as domestic companies, with additional withholding tax obligations on certain payments.'},
];

const baliFAQs = (ctx: string) => [
  {question:`Why is Bali good for ${ctx}?`,answer:'Bali offers low operating costs, international connectivity, a growing digital economy, and an exceptional quality of life for entrepreneurs.'},
  {question:'What are the costs of living and doing business in Bali?',answer:'Operating costs in Bali are significantly lower than in comparable destinations, with office space, labor, and living expenses offering excellent value.'},
  {question:'Can I work remotely while running a Bali business?',answer:'Yes, many business owners manage their PT PMA remotely, though maintaining local presence through staff or regular visits is recommended.'},
];

const structureFAQs = (ctx: string) => [
  {question:`What is the required structure for ${ctx}?`,answer:'Indonesian companies require minimum two shareholders, at least one director, and one commissioner as the basic governance structure.'},
  {question:'Can foreigners serve as directors?',answer:'Yes, foreign nationals can serve as directors of PT PMA companies but must obtain KITAS work permits.'},
  {question:'What is the role of a commissioner?',answer:'Commissioners provide oversight of the directors and company management, serving a supervisory function similar to a board of directors.'},
];

const comparisonFAQs = (ctx: string) => [
  {question:`How does Indonesia compare for ${ctx}?`,answer:'Indonesia offers competitive advantages including a large domestic market, strategic location, and investor-friendly regulations through the Omnibus Law.'},
  {question:'What are the main challenges?',answer:'Challenges include regulatory complexity, language barriers, and the need for local professional support, though these are manageable with proper planning.'},
  {question:'Is Bali specifically better than other Indonesian cities?',answer:'Bali offers unique advantages for lifestyle-focused entrepreneurs, tourism businesses, and digital services, while Jakarta may be better for heavy industry and finance.'},
];

type Cluster = {name:string;faqFn:(ctx:string)=>{question:string;answer:string}[]};
const clusters: Record<string,Cluster> = {
  'Company Formation':{name:'Company Formation',faqFn:companyFAQs},
  'Business Licenses':{name:'Business Licenses',faqFn:licenseFAQs},
  'Tax & Compliance':{name:'Tax & Compliance',faqFn:taxFAQs},
  'Doing Business in Bali':{name:'Doing Business in Bali',faqFn:baliFAQs},
  'Corporate Structure':{name:'Corporate Structure',faqFn:structureFAQs},
  'Comparison Guides':{name:'Comparison Guides',faqFn:comparisonFAQs},
};

function makeGuide(slug:string,title:string,metaTitle:string,metaDesc:string,cluster:string,related:string[]):Guide{
  const sectionNames = ['Introduction','Definition','Legal Framework','Requirements','Process','Timeline','Costs','Common Mistakes','Best Practices','FAQ','Summary'];
  const cl = clusters[cluster] || clusters['Company Formation'];
  return {
    slug,title,metaTitle,metaDescription:metaDesc,cluster,relatedSlugs:related,
    sections:sectionNames.map(s=>({heading:s,content:p(s,title.toLowerCase())})),
    faqs:cl.faqFn(title.toLowerCase()),
  };
}

export const allGeneratedGuides: Guide[] = [
  // Cluster 1 remaining
  makeGuide('local-pt-vs-pt-pma','Local PT vs PT PMA Comparison','Local PT vs PT PMA | Company Comparison Indonesia','Compare Local PT and PT PMA company structures in Indonesia. Understand ownership, capital, and licensing differences.','Company Formation',['what-is-pt-pma','can-foreigners-own-company-indonesia','how-to-register-company-indonesia']),
  makeGuide('company-registration-timeline','Company Registration Timeline Indonesia','Company Registration Timeline | How Long Does It Take','Detailed timeline for registering a company in Indonesia from name reservation to full operation for PT PMA and PT Local.','Company Formation',['how-to-register-company-indonesia','how-to-start-company-in-bali','what-is-pt-pma']),
  makeGuide('can-foreigners-own-company-indonesia','Can Foreigners Own a Company in Indonesia','Can Foreigners Own a Company in Indonesia | Ownership Guide','Learn how foreigners can legally own companies in Indonesia through PT PMA including ownership limits and sector restrictions.','Company Formation',['what-is-pt-pma','foreign-shareholder-rules-indonesia','foreign-business-indonesia']),
  makeGuide('company-director-requirements-indonesia','Company Director Requirements Indonesia','Director Requirements Indonesia | Company Director Rules','Legal requirements for company directors in Indonesia including qualifications, responsibilities, and KITAS requirements.','Company Formation',['director-vs-commissioner-indonesia','company-structure-indonesia','what-is-pt-pma']),
  makeGuide('foreign-shareholder-rules-indonesia','Foreign Shareholder Rules Indonesia','Foreign Shareholder Rules | Ownership Structure Indonesia','Complete guide to foreign shareholder rules including ownership percentages, capital requirements, and compliance.','Company Formation',['what-is-pt-pma','shareholder-structure-indonesia','can-foreigners-own-company-indonesia']),
  makeGuide('foreign-business-indonesia','Starting a Foreign Business in Indonesia','Foreign Business Indonesia | Complete Setup Guide','Comprehensive guide to starting a foreign business in Indonesia covering legal structures, regulations, and practical steps.','Company Formation',['what-is-pt-pma','how-to-register-company-indonesia','foreign-investment-bali']),
  // Cluster 2: Business Licenses
  makeGuide('what-is-nib-indonesia','What is NIB in Indonesia','What is NIB Indonesia | Business Identification Number Guide','Learn what NIB (Nomor Induk Berusaha) is, how to obtain it, and why it is essential for all businesses in Indonesia.','Business Licenses',['what-is-oss-system-indonesia','business-license-indonesia','how-to-register-company-indonesia']),
  makeGuide('what-is-oss-system-indonesia','What is OSS System Indonesia','OSS System Indonesia | Online Single Submission Guide','Complete guide to Indonesia OSS (Online Single Submission) system for business registration and licensing.','Business Licenses',['what-is-nib-indonesia','business-license-indonesia','kbli-business-classification']),
  makeGuide('business-license-indonesia','Business License Indonesia','Business License Indonesia | Complete Licensing Guide','Everything you need to know about obtaining business licenses in Indonesia through the OSS system.','Business Licenses',['what-is-nib-indonesia','what-is-oss-system-indonesia','commercial-license-indonesia']),
  makeGuide('kbli-business-classification','KBLI Business Classification Indonesia','KBLI Business Classification | Indonesia Business Codes','Guide to KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) business classification codes and how they affect licensing.','Business Licenses',['business-license-indonesia','what-is-oss-system-indonesia','what-is-nib-indonesia']),
  makeGuide('commercial-license-indonesia','Commercial License Indonesia','Commercial License Indonesia | Trading License Guide','How to obtain a commercial trading license in Indonesia for import, export, and domestic trade activities.','Business Licenses',['business-license-indonesia','operational-license-indonesia','kbli-business-classification']),
  makeGuide('operational-license-indonesia','Operational License Indonesia','Operational License Indonesia | Business Operations Permit','Guide to obtaining operational licenses in Indonesia for sector-specific business activities and operations.','Business Licenses',['commercial-license-indonesia','business-license-indonesia','what-is-oss-system-indonesia']),
  // Cluster 3: Tax & Compliance
  makeGuide('npwp-company-indonesia','NPWP Company Registration Indonesia','NPWP Company Indonesia | Tax ID Registration Guide','How to register for NPWP (Tax Identification Number) for your company in Indonesia including process and requirements.','Tax & Compliance',['corporate-tax-indonesia','tax-for-foreign-company-indonesia','how-to-register-company-indonesia']),
  makeGuide('corporate-tax-indonesia','Corporate Tax Indonesia','Corporate Tax Indonesia | Tax Rates and Obligations','Complete guide to corporate tax rates, obligations, and filing requirements for companies operating in Indonesia.','Tax & Compliance',['npwp-company-indonesia','tax-for-foreign-company-indonesia','vat-indonesia-business']),
  makeGuide('tax-for-foreign-company-indonesia','Tax for Foreign Companies Indonesia','Tax for Foreign Companies Indonesia | PT PMA Tax Guide','Tax obligations, rates, and filing requirements specifically for foreign-owned PT PMA companies in Indonesia.','Tax & Compliance',['corporate-tax-indonesia','npwp-company-indonesia','company-compliance-indonesia']),
  makeGuide('vat-indonesia-business','VAT for Business in Indonesia','VAT Indonesia Business | Value Added Tax Guide','Understanding VAT (PPN) obligations for businesses in Indonesia including rates, registration, and compliance.','Tax & Compliance',['corporate-tax-indonesia','npwp-company-indonesia','business-reporting-indonesia']),
  makeGuide('business-reporting-indonesia','Business Reporting Indonesia','Business Reporting Indonesia | Compliance Reporting Guide','Guide to mandatory business reporting requirements in Indonesia including financial, tax, and regulatory reports.','Tax & Compliance',['company-compliance-indonesia','corporate-tax-indonesia','npwp-company-indonesia']),
  makeGuide('company-compliance-indonesia','Company Compliance Indonesia','Company Compliance Indonesia | Regulatory Compliance Guide','Everything about maintaining company compliance in Indonesia including annual reporting, tax filing, and license renewals.','Tax & Compliance',['business-reporting-indonesia','corporate-tax-indonesia','tax-for-foreign-company-indonesia']),
  // Cluster 4: Doing Business in Bali
  makeGuide('why-start-business-bali','Why Start a Business in Bali','Why Start Business Bali | Benefits and Opportunities','Discover why Bali is the ideal destination for starting a business including market opportunities, lifestyle, and investment advantages.','Doing Business in Bali',['how-to-start-company-in-bali','cost-start-business-bali','best-business-opportunities-bali']),
  makeGuide('cost-start-business-bali','Cost to Start a Business in Bali','Cost Start Business Bali | Complete Cost Breakdown','Detailed breakdown of costs to start a business in Bali including registration, capital, office, and operational expenses.','Doing Business in Bali',['how-to-start-company-in-bali','why-start-business-bali','minimum-investment-pt-pma']),
  makeGuide('best-business-opportunities-bali','Best Business Opportunities in Bali','Best Business Opportunities Bali | Top Sectors Guide','Explore the most profitable business opportunities in Bali for foreign investors including tourism, digital, and F&B sectors.','Doing Business in Bali',['why-start-business-bali','business-opportunities-bali','foreign-investment-bali']),
  makeGuide('foreign-investment-bali','Foreign Investment in Bali','Foreign Investment Bali | Investment Guide for Foreigners','Complete guide to foreign investment in Bali covering legal structures, sectors, capital requirements, and market opportunities.','Doing Business in Bali',['why-start-business-bali','what-is-pt-pma','how-to-start-company-in-bali']),
  makeGuide('business-opportunities-bali','Business Opportunities in Bali','Business Opportunities Bali | Sector Analysis Guide','Analysis of business opportunities in Bali across tourism, technology, food and beverage, wellness, and professional services.','Doing Business in Bali',['best-business-opportunities-bali','why-start-business-bali','foreign-investment-bali']),
  makeGuide('living-and-doing-business-bali','Living and Doing Business in Bali','Living and Doing Business Bali | Expat Business Guide','Practical guide to living and doing business in Bali combining lifestyle advantages with business establishment guidance.','Doing Business in Bali',['why-start-business-bali','cost-start-business-bali','how-to-start-company-in-bali']),
  // Cluster 5: Corporate Structure
  makeGuide('company-structure-indonesia','Company Structure Indonesia','Company Structure Indonesia | Corporate Governance Guide','Guide to company structures in Indonesia including shareholders, directors, commissioners, and governance requirements.','Corporate Structure',['director-vs-commissioner-indonesia','shareholder-structure-indonesia','what-is-pt-pma']),
  makeGuide('director-vs-commissioner-indonesia','Director vs Commissioner Indonesia','Director vs Commissioner | Indonesia Corporate Roles','Understanding the differences between directors and commissioners in Indonesian company law including duties and responsibilities.','Corporate Structure',['company-structure-indonesia','company-director-requirements-indonesia','corporate-governance-indonesia']),
  makeGuide('shareholder-structure-indonesia','Shareholder Structure Indonesia','Shareholder Structure Indonesia | Ownership Guide','Guide to designing shareholder structures for Indonesian companies including foreign and domestic ownership arrangements.','Corporate Structure',['foreign-shareholder-rules-indonesia','company-structure-indonesia','what-is-pt-pma']),
  makeGuide('holding-company-indonesia','Holding Company Indonesia','Holding Company Indonesia | Group Structure Guide','How to establish and operate holding company structures in Indonesia for multi-entity corporate groups.','Corporate Structure',['company-structure-indonesia','foreign-investment-structure','corporate-governance-indonesia']),
  makeGuide('foreign-investment-structure','Foreign Investment Structure Indonesia','Foreign Investment Structure | PT PMA Corporate Design','Guide to designing optimal corporate structures for foreign investment in Indonesia including single and multi-entity arrangements.','Corporate Structure',['holding-company-indonesia','what-is-pt-pma','company-structure-indonesia']),
  makeGuide('corporate-governance-indonesia','Corporate Governance Indonesia','Corporate Governance Indonesia | Compliance Guide','Complete guide to corporate governance standards and requirements for companies operating in Indonesia.','Corporate Structure',['company-structure-indonesia','director-vs-commissioner-indonesia','company-compliance-indonesia']),
  // Cluster 6: Comparison Guides
  makeGuide('start-business-bali-vs-thailand','Start Business Bali vs Thailand','Bali vs Thailand Business | Comparison Guide','Compare starting a business in Bali versus Thailand including costs, regulations, market access, and lifestyle factors.','Comparison Guides',['start-business-indonesia-vs-singapore','why-start-business-bali','foreign-investment-comparison-asean']),
  makeGuide('start-business-indonesia-vs-singapore','Start Business Indonesia vs Singapore','Indonesia vs Singapore Business | Comparison Guide','Compare business setup in Indonesia and Singapore including costs, regulations, tax rates, and market opportunities.','Comparison Guides',['start-business-bali-vs-thailand','foreign-investment-comparison-asean','why-start-business-bali']),
  makeGuide('bali-company-vs-remote-business','Bali Company vs Remote Business','Bali Company vs Remote | Business Structure Comparison','Compare establishing a formal company in Bali versus operating a remote business as a digital nomad.','Comparison Guides',['living-and-doing-business-bali','why-start-business-bali','how-to-start-company-in-bali']),
  makeGuide('pt-pma-vs-representative-office','PT PMA vs Representative Office','PT PMA vs Rep Office | Indonesia Business Structure','Compare PT PMA and Representative Office structures in Indonesia including capabilities, costs, and limitations.','Comparison Guides',['what-is-pt-pma','local-pt-vs-pt-pma','foreign-business-indonesia']),
  makeGuide('legal-requirements-business-indonesia','Legal Requirements for Business in Indonesia','Legal Requirements Business Indonesia | Compliance Guide','Complete overview of legal requirements for establishing and operating a business in Indonesia.','Comparison Guides',['how-to-register-company-indonesia','business-license-indonesia','company-compliance-indonesia']),
  makeGuide('foreign-investment-comparison-asean','Foreign Investment Comparison ASEAN','Foreign Investment ASEAN | Regional Comparison Guide','Compare foreign investment regulations across ASEAN countries including Indonesia, Singapore, Thailand, Vietnam, and Malaysia.','Comparison Guides',['start-business-bali-vs-thailand','start-business-indonesia-vs-singapore','foreign-investment-bali']),
];
