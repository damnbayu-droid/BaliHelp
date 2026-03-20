import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PT PMA Requirements Indonesia | Document & Capital Checklist',
  description: 'A complete checklist of documents and capital requirements for establishing a PT PMA in Indonesia. Passports, capital thresholds, and board composition.',
  alternates: { canonical: 'https://balihelp.id/pt-pma-requirements' }
};

export default function PTPMARequirementsPage() {
  const faqs = [
    { id: '1', question: 'Do I need support documents from my home country?', answer: 'Yes, passports must have at least 18 months of validity. If the shareholder is a foreign corporation, notarized Articles of Association from the home country might be required triggers safely.', category: 'Docs' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Deep-Dive Guide"
        title="PT PMA Requirements: Document & Capital Checklist"
        subtitle="Ensure perfect compliance before submitting your deed. Exact thresholds, corporate structures composition triggers maps fully mapped frameworks."
      />

      {/* Structured List */}
      <ContentSection id="checklists" title="The Universal Pre-Requisites">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
          Failing to supply conformant document nodes resets timelines completely on any BKPM submission setups. Prepare the following details ahead accurately:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white dark:bg-slate-800 border">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Personal Documents</h3>
            <Checklist items={[
              "Passports of all foreign shareholders & directors (Min 18 months validity).",
              "KTP (Local ID) and NPWP (Tax ID) if using local directors.",
              "Color photos (red background norms applicable for visa nodes).",
              "Address coordinates mapped with standard leases sets."
            ]} />
          </Card>
          <Card className="p-6 bg-white dark:bg-slate-800 border">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Corporate Details</h3>
            <Checklist items={[
              "3 Company Name options in Indonesian (Min 3 words total).",
              "Selection of KBLI codes matching operations thresholds sets.",
              "Defined capital allocation percentage locks per shareholder value nominal.",
              "Detailed corporate setup address zoned appropriately."
            ]} />
          </Card>
        </div>
      </ContentSection>

      <ContentSection id="internal-prompts" title="Further Structure Detail" className="bg-slate-50 dark:bg-slate-900/40">
        <p className="text-slate-600 text-sm mb-4">You must fulfill specific financial and structural conditions:</p>
        <Link href="/pt-pma-indonesia" className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700">
           View Full Investment Thresholds <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Requirements Common Questions"
        subtitle="Manage passport validity or address mapping node rules maps."
      />

      <section id="consultation" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Card className="p-8 shadow-xl bg-white dark:bg-slate-900 text-left">
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
