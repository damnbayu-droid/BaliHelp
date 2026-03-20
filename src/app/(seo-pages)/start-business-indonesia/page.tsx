import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Landmark, FileText, Coins, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Start a Business in Indonesia | Ultimate Investor Hub',
  description: 'The definitive guide to starting a company in Indonesia for foreign investors. Structure overviews (PT PMA vs Local PT), step-by-step lifecycles, and internal guides.',
  alternates: { canonical: 'https://balihelp.id/start-business-indonesia' }
};

export default function StartBusinessIndonesiaPage() {
  const vectors = [
    { title: 'Legal & Corporate Structures', description: 'Understand equity limit maps comparing PT PMA structures versus Local operations setups.', links: '/pt-pma-indonesia' },
    { title: 'Licensing & Permits (NIB)', description: 'FDI operations require generating distinct clearance numbers via Risk-Based Approach frameworks.', links: '/business-license-indonesia' },
    { title: 'Taxation & Accounting', description: 'Navigate corporate income tax, VAT filing schedules, and quarterly LKPM accounting reports safely.' }
  ]

  const faqs = [
    { id: '1', question: 'What is the first step in starting a business?', answer: 'The first step is checking the Positive Investment List to confirm whether foreigners are allowed 100% equity ownership in your selected KBLI code.', category: 'Process' },
    { id: '2', question: 'Which city is better, Jakarta or Bali?', answer: 'Jakarta is preferred for B2B, heavy industrial, and global corporate headquarters. Bali is better for hospitality, digital agencies, and real-estate investments.', category: 'Location' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Authority Hub"
        title="The Ultimate Guide to Starting a Business in Indonesia"
        subtitle="Your central resource for Indonesian company formation. Compare legal structures, master the OSS single licensing system, and access targeted internal walkthroughs."
      />

      {/* Structured Overview */}
      <ContentSection id="lifecycle" title="The Incorporation Lifecycle">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Starting a business in Indonesia demands balancing national investment thresholds alongside provincial coordinate spatial layout maps. Effectively incorporate triggers maps maintaining safe thresholds without stalling timelines.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vectors.map((item, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{item.description}</p>
              {item.links && (
                <Link href={item.links} className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700">
                  Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </ContentSection>

      {/* Internal Links/Hub references */}
      <ContentSection id="legal-comparisons" title="Standard Legal Structures Setup" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Foreign operators generally choose between three foundational models. Selecting correctly guards capital injections triggers timelines securely:
          </p>
          <div className="space-y-4">
            <Card className="p-5 bg-white dark:bg-slate-800 border-l-4 border-l-purple-600">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">1. PT PMA (Foreign Investment Company)</h4>
              <p className="text-xs text-slate-500 mb-2">Maximum legal protection with continuous profit withdrawals sponsorship safe mapping triggers.</p>
              <Link href="/pt-pma-indonesia" className="text-xs text-purple-600 font-bold flex items-center gap-1">View Full Rules <ArrowRight className="w-3 h-3"/></Link>
            </Card>
            <Card className="p-5 bg-white dark:bg-slate-800 border-l-4 border-l-orange-500">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">2. Representative Office (KPPA)</h4>
              <p className="text-xs text-slate-500">Ideal for market research or promotion nodes before funding injections. Cannot generate revenue directly nodes.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Tax or support anchors */}
      <ContentSection id="taxes" title="Indonesian Taxation Frame Rules">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Foreign businesses operate under standard corporate tax structures mapped legally:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Card className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div className="text-2xl font-black text-slate-900 dark:text-white">22%</div>
            <div className="text-xs text-slate-500">Corporate Income Tax Rate (CIT)</div>
          </Card>
          <Card className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div className="text-2xl font-black text-slate-900 dark:text-white">11%</div>
            <div className="text-xs text-slate-500">Value Added Tax (VAT / PPN)</div>
          </Card>
        </div>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Start Business Hub Questions"
        subtitle="Review framework guides before committing corporate resources setups."
      />

      <section id="consultation" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl inline-block px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold mb-4">Hub CTA</h2>
          <Card className="p-8 shadow-xl bg-white dark:bg-slate-900 text-left">
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
