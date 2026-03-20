import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, TimelineSteps, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { Shield, Briefcase, Landmark, Clock, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PT PMA Indonesia Registration | Foreign Company Setup Bali',
  description: 'Complete guide to PT PMA Indonesia registration. 100% foreign ownership rules, minimum investment requirements, step-by-step process & timeline for starting your business.',
  alternates: { canonical: 'https://balihelp.id/pt-pma-indonesia' }
};

export default function PTPMAIndonesiaPage() {
  const benefits = [
    { title: '100% Foreign Ownership', description: 'Depending on your business classification (KBLI), setting up a PT PMA allows up to 100% foreign equity ownership without local partner requirements.', icon: <Users /> },
    { title: 'Investor KITAS Sponsorship', description: 'Once incorporated, your PT PMA can sponsor your Investor KITAS (Work/Residency Permit), granting multi-year stays and tax residency benefits.', icon: <Award /> },
    { title: 'Full Legal Compliance', description: 'Operate safely without the risks associated with nominee structures. Own property leases, open corporate bank accounts, and invoice clients directly.', icon: <Shield /> }
  ]

  const steps = [
    { step: '1', title: 'Name Approval & Reservation', description: 'We reserve 3 potential company names via the Ministry of Law and Human Rights (Kemenkumham). Names must consist of three words and avoid illegal or generic terms.' },
    { step: '2', title: 'Deed of Establishment (Akta)', description: 'A local Indonesian notary drafts the Deed of Establishment defining the company structure, capital allocation, and governance frameworks.' },
    { step: '3', title: 'Ministry Approval (SK)', description: 'The Ministry officially approves the deed, granting the company its status as a legal entity (Badan Hukum).' },
    { step: '4', title: 'Tax ID & Corporate Accounts', description: 'We register the company Tax ID (NPWP) and establish corporate banking accounts in IDR/USD for operational investment injections.' },
    { step: '5', title: 'NIB generation via OSS', description: 'The Single Business Number (NIB) is generated via the OSS system providing full active licensing to begin general operations immediately.' }
  ]

  const faqs = [
    { id: '1', question: 'What is the minimum investment for a PT PMA?', answer: 'The minimum investment requirement set by BKPM is 10 Billion IDR, with a minimum Paid-Up Capital of 2.5 Billion IDR required up-front or injectible over operational terms.', category: 'Investment' },
    { id: '2', question: 'Can I own 100% of my company?', answer: 'Yes, depending on the Negative Investment List (DNI), now superseded by the Positive Investment List, many sectors like IT, Hospitality, and Consulting allow 100% foreign ownership.', category: 'Ownership' },
    { id: '3', question: 'How long does the setup process take?', answer: 'The full setup generally takes 2 to 4 weeks, with initial registration available in 7 days for streamlined standard applications.', category: 'Timeline' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Foreign Investment Guide"
        title="PT PMA Indonesia: The Complete Foreign Investment Setup"
        subtitle="Establish 100% foreign-owned operations safely. Comprehensive guide to company formation requirements, step-by-step timelines, and local compliance kits."
      />

      {/* Overview */}
      <ContentSection id="overview" title="What is a PT PMA Indonesia?">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          A **PT PMA** (Perseroan Terbatas Penanaman Modal Asing) is a legal entity specifically designed for foreign investors looking to establish a business presence in Indonesia. Governed by the Indonesian Investment Coordinating Board (**BKPM**), this structure grants foreigners the right to hold equity shares in local companies, enabling global operators to fully own and manage corporate setups.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          This makes the PT PMA the gold standard for doing business safely in Indonesia. Without resorting to risky nominee structures or setup loopholes, investors gain absolute legal protection, multi-year visa stays via Investor KITAS setups, and full financial control with seamless corporate banking facilities.
        </p>
        <InfoCardGrid items={benefits} />
      </ContentSection>

      {/* Target Audience */}
      <ContentSection id="who-needs-it" title="Is a PT PMA Right For You?" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Establishing a foreign company requires answering legal requirements focused on high intent actions. A PT PMA structure is ideal for:
          </p>
          <Checklist items={[
            "Foreign nationals looking to establish hotels, villas, or real-estate holding companies in Bali.",
            "International software and digital enterprises relocating teams or setups to Indonesia.",
            "Restaurateurs and hospitality groups investing in local venue developments.",
            "Business owners offering Consulting services operating directly on Indonesian soil.",
            "High net-worth individuals requiring legal frameworks for Sponsor Asset holding safeguards."
          ]} />
        </div>
      </ContentSection>

      {/* Requirements */}
      <ContentSection id="requirements" title="PT PMA Legal Requirements">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Capital Requirements</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Foreign investment thresholds mapped under BKPM regulations:</p>
            <Checklist items={[
              "Minimum Investment Plan: IDR 10,000,000,000 (approx. USD 650,000)",
              "Paid-up Capital: IDR 2,500,000,000 (minimum layout threshold injection)",
              "Minimum share value allotment: IDR 10,000,000 per share holding"
            ]} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Structural Requirements</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Mandated compliance tiers for board composition:</p>
            <Checklist items={[
              "Shareholders: Minimum of 2 individuals or corporate entities total.",
              "Director: At least 1 Director (can be foreign, resides in Indonesia).",
              "Commissioner: At least 1 Commissioner (can be foreign, manages supervisor oversight).",
              "Address: A legal registered address located within corporate-zoned provinces."
            ]} />
          </div>
        </div>
      </ContentSection>

      {/* Process / Steps */}
      <ContentSection id="process" title="Step-by-step PT PMA Setup Process" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-2xl">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Your timeline and sequence from name lock to full active trading:</p>
          <TimelineSteps steps={steps} />
        </div>
      </ContentSection>

      {/* Cost & Budget Allocation */}
      <ContentSection id="cost" title="Timeline & Budget Allocation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-purple-900 to-indigo-950 text-white border-0">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" /> Standard Timeline
            </h3>
            <div className="text-3xl font-extrabold text-yellow-500 mb-2">2 - 4 Weeks</div>
            <p className="text-slate-200 text-xs leading-relaxed">
              *Dependant upon document verification and notary triggers. Advanced fast-track setups can clear standard triggers inside 10 operative banking days.
            </p>
          </Card>

          <Card className="p-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600" /> Estimated Budget
            </h3>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Contact for Quote</div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Standard setups starting at market rates covering BKPM coordination, deed triggers, notary, and NIB coordination with transparent inclusive margins.
            </p>
          </Card>
        </div>
      </ContentSection>

      {/* Common Mistakes */}
      <ContentSection id="mistakes" title="Common Pitfalls to Avoid" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Using Nominee Structures", description: "Nominee setups carry severe financial risks because the asset ownership legally remains with the local title holder. Safely hold triggers via accurate share definitions directly." },
            { title: "Incorrect KBLI codes", description: "Mapping incorrect business scopes forces audit rejections and voids banking compliance checks. Map accurate business profiles from day one." }
          ].map((item, index) => (
            <Card key={index} className="p-5 border-l-4 border-l-red-500 rounded-xl bg-white dark:bg-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="PT PMA Common Questions"
        subtitle="Address compliance checklists and setup definitions before locking operations structures."
      />

      {/* Consultation anchor */}
      <section id="consultation" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 shadow-xl bg-white dark:bg-slate-900">
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
