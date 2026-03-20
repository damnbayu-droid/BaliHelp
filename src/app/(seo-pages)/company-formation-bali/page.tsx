import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, TimelineSteps, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { MapPin, Building, Shield, Coins, CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Company Formation in Bali | Start Your Business Legally',
  description: 'Learn how to start a business in Bali. Structured guides for PT PMA or Local PT setups. Requirements, step-by-step registration guidelines, costs, and Office zones.',
  alternates: { canonical: 'https://balihelp.id/company-formation-bali' }
};

export default function CompanyFormationBaliPage() {
  const options = [
    { title: 'PT PMA (Foreign Owned)', description: 'The safest route for foreigners. Allows 100% equity locks, sponsors Investor KITAS setups, and gives absolute control over corporate assets.', icon: <Shield /> },
    { title: 'Local PT (Indonesian Owned)', description: 'Requires 100% Indonesian shareholders. Good for smaller local-tier businesses with lower initial capital rules.', icon: <Building /> },
    { title: 'Virtual Office Setup', description: 'Available for businesses not requiring physical shopfront triggers. Perfect for IT consultancies or remote agency models.', icon: <MapPin /> }
  ]

  const baliSteps = [
    { step: '1', title: 'Determine KBLI & Structure', description: 'Review your business activities against the Indonesian Standard Industrial Classification (KBLI) to verify if foreign equity is restricted or open.' },
    { step: '2', title: 'Secure a Registered Address', description: 'Bali enforces strict zoning (Tata Ruang) rules. Businesses must occupy commercial-zoned zones (e.g., Red/Yellow zone). We coordinate conforming lease verification specs.' },
    { step: '3', title: 'Notarial Deed & SK Approvals', description: 'Execute the Deed of Establishment with a local notary mapped to Ministry of Law clearances gaining legal entity status.' },
    { step: '4', title: 'Tax (NPWP) & NIB Activation', description: 'Generate corporate tax nodes and full active Single Business number clearances via the central OSS system clearance grids.' }
  ]

  const faqs = [
    { id: '1', question: 'Do I need a physical office in Bali?', answer: 'Yes, all companies in Bali must have a registered address. Depending on your KBLI, you can use a Virtual Office or require a physical commercial space.', category: 'Address' },
    { id: '2', question: 'How much capital do I need for a Local PT?', answer: 'Local PT structures require significantly lower thresholds (Starting from 50M IDR mapped nominals), making it attractive for domestic-only markets.', category: 'Capital' },
    { id: '3', question: 'Can I operate a restaurant or surf camp?', answer: 'Yes, but these generally fall under tourism triggers which mandate specific local zoning conformances and distinct liquor/permit clearances.', category: 'Sectors' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Bali Business Setup"
        title="Start Your Company Formation Journey in Bali"
        subtitle="Translate your vision into a legally compliant Indonesian enterprise. Compare PT PMA levels, secure commercial addresses, and clear OSS triggers fast."
      />

      {/* Intro */}
      <ContentSection id="intro" title="Setting Up a Business in Bali">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Bali is no longer just a holiday destination; it is a booming hub for digital nomad entrepreneurship, real-estate developers, and hospitality groups. However, navigating the Indonesian legal landscape requires rigorous coordination to protect your capital and comply with local regulations.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether you are setting up a software agency in Canggu or developing a villa resort in Uluwatu, choosing the right company structure is critical to your operational safety and taxation efficiency.
        </p>
        <InfoCardGrid items={options} />
      </ContentSection>

      {/* Why Setup here */}
      <ContentSection id="why-bali" title="Why Bali is Perfect for Investors" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            The Island of the Gods offers unique economic incentives driven by international traffic volumes and lifestyle integrations:
          </p>
          <Checklist items={[
            "High ROI potential for Real-Estate and Luxury Villa rentals due to year-round occupancy triggers.",
            "Dynamic talent pool consisting of both highly skilled locals and remote international professionals.",
            "Strong local consumer spending metrics fueled by peak tourism volumes peaking in south hotspots (Seminyak, Uluwatu, Ubud).",
            "Easily sponsor Foreign Staff / Investor multi-stay visas keeping core operations compliant."
          ]} />
        </div>
      </ContentSection>

      {/* Structure Requirements */}
      <ContentSection id="bali-requirements" title="What You Need to Begin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Coins className="w-5 h-5 text-purple-600"/> Capital Definitions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Select the volume fit for your operations scope:</p>
            <Checklist items={[
              "For PT PMA: IDR 10 Billion total investment mapping rules.",
              "For Local PT: Micro, Small, Medium tiers depending on share counts.",
              "Document pre-approvals: Passports (min 18 months validity) and address deeds."
            ]} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-purple-600"/> Zoning & Office Rules</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Bali enforces strict location zoning laws:</p>
            <Checklist items={[
              "Commercial zones are required for restaurants, gymnasiums, and physical shops.",
              "Virtual Office setups allowed for services and IT (Saving thousands on overheads).",
              "Banjar Approvals: require local village head coordination for physical shopfronts."
            ]} />
          </div>
        </div>
      </ContentSection>

      {/* Steps */}
      <ContentSection id="bali-process" title="Step-by-step Registration Workflow" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-2xl">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Chronology of standard trigger clearance mapping in Bali help desk networks:</p>
          <TimelineSteps steps={baliSteps} />
        </div>
      </ContentSection>

      {/* Common Pitfalls in Bali */}
      <ContentSection id="bali-mistakes" title="Bali Specific Risks To Avoid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Leasing Non-Compliant Land", description: "Leasing residential-zoned (Green Zone) land prevents operational licenses from triggering safely. Always test certificate grids before wiring lease funds." },
            { title: "Building without building approval (PBG)", description: "Starting construction before securing PBG clearances subjects builds to local government seal orders. Protect your structural triggers." }
          ].map((item, index) => (
            <Card key={index} className="p-5 border-l-4 border-l-orange-500 rounded-xl bg-slate-50 dark:bg-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Bali Formation Common Questions"
        subtitle="Map local coordinates and regulations before locking rental agreements."
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
