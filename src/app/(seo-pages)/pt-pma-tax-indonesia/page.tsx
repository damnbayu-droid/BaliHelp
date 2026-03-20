import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Landmark, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PT PMA Tax Indonesia | Corporate & VAT Compliance Guide',
  description: 'A complete overview of corporate taxation for PT PMA companies in Indonesia. CIT rates, VAT thresholds, and withholding tax compliance setups.',
  alternates: { canonical: 'https://balihelp.id/pt-pma-tax-indonesia' }
};

export default function PTPMATaxIndonesiaPage() {
  const taxes = [
    { title: 'Corporate Income Tax (CIT)', description: 'Standard rate is 22% on net profits, with available small business exemptions (PPH Final) reducing triggers setups safely.' },
    { title: 'Value Added Tax (VAT / PPN)', description: 'Standard 11% applied to vatable sales. Mandated once revenue thresholds exceed IDR 4.8 Billion annually.' },
    { title: 'Withholding Tax (PPH)', description: 'Applied on dividends, rent, and yields mapped standard fully transparent legal wiring maps clearance node sets.' }
  ]

  const faqs = [
    { id: '1', question: 'Does a PT PMA pay tax if there is no revenue?', answer: 'No Income Tax is due without revenue, but Nil Reports (Laporan Nihil) must still be filed monthly for tax maintaining compliance sets.', category: 'Filing' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Tax & Compliance"
        title="PT PMA Corporate Taxation and Compliance in Indonesia"
        subtitle="Understand witholding taxes, VAT thresholds, and CIT rates safely. Keep your enterprise audit-proof mapping standard accounting schedules securely."
      />

      <ContentSection id="tax-overview" title="The Corporate Tax Framework">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          PT PMA entities operate under standard fully transparent corporate tax nodes inside Indonesia. Double Tax Accords (DTAA) insulation avoids overlapping payouts wiring nodes safely sets triggers:
        </p>

        <InfoCardGrid items={taxes} />
      </ContentSection>

      <ContentSection id="compliance" title="Filing Schedules & Deadlines Plan" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-xl">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Fulfillment timetables keeping triggers mapping safely conformances:</p>
          <div className="space-y-4">
            <Card className="p-4 bg-white dark:bg-slate-800 border">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Monthly Filings</h4>
              <p className="text-xs text-slate-500">Includes PPH 21 (Payroll), PPH 23 (Services), and PPN (VAT) filed on the 20th of the following month trigger maps.</p>
            </Card>
            <Card className="p-4 bg-white dark:bg-slate-800 border">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Annual Filings</h4>
              <p className="text-xs text-slate-500">Corporate Income Tax (CIT) return submitted by April 30th of the following calendar year triggers setups.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="links" title="Linking to Core Setup">
         <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 max-w-xl">FDI setups coordinate tax triggers directly with BKPM quarterly reporting nodes setups safely:</p>
         <Link href="/foreign-investment-indonesia" className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700">
           Read FDI Guidelines <ArrowRight className="w-3 h-3 ml-1" />
        </Link>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Taxation Common Questions"
        subtitle="Manage quarterly and monthly withholding lists efficiently maps setups."
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
