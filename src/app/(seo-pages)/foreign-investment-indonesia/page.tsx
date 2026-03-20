import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, TimelineSteps, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { Landmark, Shield, Coins, Users, Clock, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Foreign Investment in Indonesia (FDI) | BKPM Guidelines',
  description: 'A complete guide to Foreign Direct Investment (FDI) in Indonesia. BKPM investment rules, positive list equity limits, capital thresholds, and repatriation guidelines.',
  alternates: { canonical: 'https://balihelp.id/foreign-investment-indonesia' }
};

export default function ForeignInvestmentIndonesiaPage() {
  const vectors = [
    { title: 'BKPM Direct Supervision', description: 'Foreign investment must be coordinated under BKPM supervision (Investment Coordinating Board) guarding absolute legal protections.', icon: <Landmark /> },
    { title: 'Profit Repatriation', description: 'Indonesia offers 100% tax-complying legal structures encouraging full repatriation of profits into international banking coordinates without lock delays.', icon: <Coins /> },
    { title: '100% Ownership (New Positive List)', description: 'Under recent reforms, foreigners can fully own equity in previously restricted categories creating unprecedented asset hold safeguards.', icon: <Globe /> }
  ]

  const investmentSteps = [
    { step: '1', title: 'Equity Limits Check (Positive List)', description: 'Confirm your business classification against current sectoral limits allowing up to 100% equity locks versus forced local triggers.' },
    { step: '2', title: 'Notary & Incorporation triggers', description: 'Execute transparent notarized corporate structures incorporating minimal capitalization thresholds conforming to FDI BKPM rules.' },
    { step: '3', title: 'LKPM (Operational Investment Report)', description: 'Unlike local setups, foreign enterprises must file modular investment reports quarterly demonstrating capital injection timelines mapped up safely.' }
  ]

  const faqs = [
    { id: '1', question: 'Do I have to invest 10B IDR cash upfront?', answer: 'No. The 10 Billion IDR is an investment Plan. Typically, a Paid-Up capital of 2.5 Billion IDR triggers the launch, with the remaining injected throughout the operational forecast term.', category: 'Capital' },
    { id: '2', question: 'How is profit repatriation taxed?', answer: 'Profits are generally subject to standard corporate tax rates, then withholding taxes apply on dividends. Double Taxation Avoidance Agreements (DTAA) further insulate payouts.', category: 'Tax' },
    { id: '3', question: 'Does local local triggers restrict all hotels?', answer: 'No, but specific categories like homestays or budget lodges remain locked for domestic small enterprise filters maps safely.', category: 'Rules' }
  ]

  return (
    <>
      <SEOPageHero
        badge="FDI Guidelines"
        title="Foreign Direct Investment (FDI) in Indonesia"
        subtitle="Understand capital thresholds, positive list ownership thresholds, and BKPM guidelines safe framing. Legal guidelines mapped for US/EU operations models safely."
      />

      <ContentSection id="overview" title="The Foreign Direct Investment Climate">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Indonesia presents one of the most dynamic foreign investment setups in the ASEAN corridor. Driven by corporate tax incentives, massive consumer demographics, and structured legal architectures, foreigners can legally operate large-scale enterprises via a specialized **PT PMA** layout mapped seamlessly under **BKPM** frames.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Through the recent introduction of the **Positive Investment List**, the Indonesian government has unlocked thousands of sectors encouraging standard capital triggers maps without requiring local nominee overheads, fully safeguarding your financial structure.
        </p>
        <InfoCardGrid items={vectors} />
      </ContentSection>

      {/* positive list explanation */}
      <ContentSection id="positive-list" title="The Positive Investment List (DNI)" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Historically, Indonesia guarded sectors using a Negative List (DNI). Today, the stance shifted toward open investments with only minimal exemptions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Open Sectors (100% FDI Allowed)</h4>
              <Checklist items={["Tech & software development", "Operations consulting, Management advice", "General retail trading (Large scale)", "International trade grids"]}/>
            </Card>
            <Card className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-l-orange-500 border-l-4">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Restricted for SME / Local</h4>
              <Checklist items={["Budget homestays / traditional crafts", "Local transport services", "Small-scale retail shops", "Traditional agriculture triggers"]}/>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Threshold and reporting */}
      <ContentSection id="reporting" title="Capital & Quarterly Reporting (LKPM)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Coins className="w-5 h-5 text-purple-600"/> Capital Threshold</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Foreign investors must verify financial layout nodes:</p>
            <Checklist items={[
              "IDR 10 Billion total investment forecast.",
              "IDR 2.5 Billion minimum Paid up trigger setups nominal.",
              "Detailed quarterly injection timeline forecasting sets conformances."
            ]} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-purple-600"/> LKPM Quarterly Filing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Mandatory requirements managing compliance targets:</p>
            <Checklist items={[
              "Must declare investments status regularly via the OSS portal.",
              "Filing tracks realization of the 10B plan mapping structures.",
              "Ensures standing node active validity triggering smooth terms."
            ]} />
          </div>
        </div>
      </ContentSection>

      <ContentSection id="steps" title="Investment Roadmap" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-2xl">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Chronologies standard modeling clearance targets FDI setups:</p>
          <TimelineSteps steps={investmentSteps} />
        </div>
      </ContentSection>

      {/* Profit Repatriation */}
      <ContentSection id="repatriation" title="Profit Repatriation Strategy">
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-3xl">
          Setting up safe triggers maps fully transparent profit withdrawals. As a legal legal node, profits withdraw setups undergo standard corporate taxation node cuts then wire directly into foreign personal nodes clearing smoothly under full Double Tax Treaties clearances mapped standardly.
        </p>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="FDI & BKPM Common Questions"
        subtitle="Review capital injection frame rules before signing deed triggers maps safely."
      />

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
