import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Book a Legal Consultation | Bali Help Experts',
  description: 'Book your legal incorporation consultation with Bali Help corporate advisors mapped safely. Serious investors and business ready prompts setup setups.',
  alternates: { canonical: 'https://balihelp.id/consultation' }
};

export default function ConsultationPage() {
  return (
    <>
      <SEOPageHero
        badge="Qualifying Advice"
        title="Schedule Your Corporate Consultation"
        subtitle="For serious investors ready translating setups into safe triggers levels. Directly connect with fully transparent advisory desks mapping setups safely configs safely."
      />

      <section id="consultation" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 shadow-xl bg-white dark:bg-slate-900">
             <div className="mb-6 text-center border-b pb-4">
                <p className="text-xs text-purple-600 font-bold uppercase tracking-widest mb-1">Warning</p>
                <p className="text-slate-600 text-xs leading-relaxed">Please ensure budgets ready conforming capital injection thresholds before submitting coordination triggers maps safely.</p>
             </div>
             <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
