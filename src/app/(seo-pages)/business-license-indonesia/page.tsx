import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, TimelineSteps, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { FileCheck, Shield, Award, Clock, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business License Indonesia | NIB & OSS RBA Registration',
  description: 'Complete guide to obtaining a business license in Indonesia. Learn about NIB, OSS Risk-Based Approach (RBA), KBLI codes, and sectoral permits for foreign companies.',
  alternates: { canonical: 'https://balihelp.id/business-license-indonesia' }
};

export default function BusinessLicenseIndonesiaPage() {
  const licenseTypes = [
    { title: 'NIB (Nomor Induk Berusaha)', description: 'The Single Business Number. Serves as your company ID, importer license (API), and customs access (NIK) combined.', icon: <FileCheck /> },
    { title: 'Standard Certificates', description: 'Mandated for Medium-Low Risk industries. Self-certified statements indicating compliance with environmental or safety standards.', icon: <Award /> },
    { title: 'Sectoral Permits', description: 'Required for High-Risk operations (e.g., alcohol distribution, mining, hotels). Involves rigorous audits before activation.', icon: <Shield /> }
  ]

  const licenseSteps = [
    { step: '1', title: 'Determine Your KBLI Classification', description: 'Review your operational scope against the Standard Industrial Classification (KBLI) defining risk tier (Low, Medium-Low, Medium-High, High).' },
    { step: '2', title: 'Register on OSS System', description: 'Secure corporate access credentials mapping verified Deed updates with Ministry of Law approval nodes.' },
    { step: '3', title: 'Generate NIB (Business Number)', description: 'Input KBLI variables along with capital injection projections to instantly generate your foundational NIB clearance.' },
    { step: '4', title: 'Fulfill PKKPR / Spatial Compliance', description: 'Confirm your spatial zone (Spatial Location Suitability) triggers match correct industrial zoning layout requirements mapping smoothly.' }
  ]

  const faqs = [
    { id: '1', question: 'What is a Risk-Based Approach (RBA)?', answer: 'The government classifies businesses based on potential scale hazards. Low Risk requires only an NIB, while High Risk requires NIB + Verified Permit fully audited first.', category: 'Risk' },
    { id: '2', question: 'How much does an NIB cost?', answer: 'The government does not charge official fees for NIB generation. Fees are tied to administrative notary support, compliance drafting, and advisory mappings.', category: 'Fees' },
    { id: '3', question: 'Can I have multiple KBLI codes?', answer: 'Yes, you can hold multiple KBLI codes per company, provided they align with your spatial location zones and do not conflict with Negative List triggers.', category: 'Scope' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Licensing & Compliance"
        title="Business Licensing & OSS RBA Registration in Indonesia"
        subtitle="Secure your Single Business Number (NIB) instantly. Navigate the risk-based OSS system, map KBLI codes correctly, and obtain active permits fast."
      />

      <ContentSection id="overview" title="The Single Business Number (NIB)">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Under the Omnibus Law framework, Indonesia has streamlined its corporate licensing into a single Risk-Based Approach (**OSS-RBA**). The foundational clearance for any enterprise (local or foreign) is the **NIB** (Nomor Induk Berusaha).
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          The NIB acts as your company ID, Import License, and Customs node all in one. However, depending on your operation's risk level, additional sub-permits might be locked until verified spatial conformity (PKKPR) or environmental clearances trigger successfully.
        </p>
        <InfoCardGrid items={licenseTypes} />
      </ContentSection>

      {/* Risk Classifications */}
      <ContentSection id="risk-levels" title="Risk Classifications (OSS RBA)" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Your license difficulty is directly proportional to your KBLI risk assessment structure:
          </p>
          <div className="space-y-4">
            {[
              { title: "Low Risk (Renda)", desc: "Requires only an NIB to start full operations. (e.g., Software Consulting, Management advice)" },
              { title: "Medium-Low Risk (Menengah Rendah)", desc: "Requires NIB + Standard Certificate (Self-Declaration of compliance)." },
              { title: "Medium-High Risk (Menengah Tinggi)", desc: "Requires NIB + Standard Certificate fully verified by the respective ministry before operations." },
              { title: "High Risk (Tinggi)", desc: "Requires NIB + verified permit fully audited up front (e.g., Hotels, Alcohol distribution)." }
            ].map((item, index) => (
              <Card key={index} className="p-4 border-l-4 border-l-purple-600 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection id="requirements" title="Prerequisites for Licensing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><FileText className="w-5 h-5 text-purple-600"/> Foundational Docs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Required documents before accessing the OSS dashboard:</p>
            <Checklist items={[
              "Company Deed (Akta Pendirian) with local Notary.",
              "SK Kemenkumham (Ministry Approval Node).",
              "Tax ID (NPWP) mapped accurately into Notaries.",
              "Detailed list of selected 5-digit KBLI codes."
            ]} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-600"/> Spatial & Location Rules</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Clear triggers mapping spatial layout nodes:</p>
            <Checklist items={[
              "KKPR / Spatial Conformity approval triggers (Locational safe zone check).",
              "Office lease deed agreements corresponding to zoning codes.",
              "Environmental commitment declarations (SPPL/UKL-UPL depending on scale)."
            ]} />
          </div>
        </div>
      </ContentSection>

      <ContentSection id="steps" title="Obtaining Your License" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-2xl">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Step-by-step chronology standard mapping clearance sets:</p>
          <TimelineSteps steps={licenseSteps} />
        </div>
      </ContentSection>

      {/* Common Pitfalls */}
      <ContentSection id="mistakes" title="Licensing Blunders To Protect Against">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Incorrect KBLI Pairing", description: "Choosing generic KBLI codes to avoid high capital rules triggers audit rejects during corporate banking updates." },
            { title: "Working with Invalid Office Leases", description: "Setting a virtual office on restricted zoning blocks freezes PKKPR generation until addressed properly." }
          ].map((item, index) => (
            <Card key={index} className="p-5 border-l-4 border-l-purple-500 rounded-xl bg-slate-50 dark:bg-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Licensing & OSS Common Questions"
        subtitle="Manage spatial layout rules or self-declaration nodes efficiently."
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
