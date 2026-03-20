import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Bali vs Thailand Business Setup | Foreign Ownership compared',
  description: 'Compare starting a business in Bali (Indonesia) vs Thailand. Foreign equity limits, nominee risk guidelines, property rights, and Visa sponsor durations compared explicitly.',
  alternates: { canonical: 'https://balihelp.id/bali-vs-thailand-business' }
};

export default function BaliVsThailandBusinessPage() {
  const comparison = [
    { metric: 'Foreign Equity Allowed', bali: '100% Ownership in many sectors', thai: 'Generally locked at 49% (Quota rules)' },
    { metric: 'Visa / Stay Permit', bali: 'Multi-year Investor KITAS', thai: 'Elite / Business Visa hurdles' },
    { metric: 'Property / Land', bali: 'Long term Leasehold guarantees fully legal', thai: 'Leasehold safe, but strict setups' },
    { metric: 'Government Supervision', bali: 'BKPM centralized nodes', thai: 'BOI (Board of Investment) hurdles' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Jurisdiction Comparison"
        title="Bali (Indonesia) vs Thailand: Where Should You Invest?"
        subtitle="Compare nominee risks, direct 100% equity locks, and property leasehold safe mappings side by side. Deciding between operational hubs setups safely sets."
      />

      <ContentSection id="comparison-table" title="The Side-by-Side Breakdown">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          While Thailand offers competitive property speeds, Bali (Indonesia) offers significantly safer fully legal 100% equity locks maps without requiring high-risk nominee structures maps clearances:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <th className="p-4 font-bold border">Metric</th>
                <th className="p-4 font-bold border text-purple-600">Bali (Indonesia PT PMA)</th>
                <th className="p-4 font-bold border">Thailand (Thai Company)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <tr key={index} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900/40">
                  <td className="p-4 font-semibold text-slate-900 dark:text-white border">{item.metric}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 border">{item.bali}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 border">{item.thai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Deep dives */}
      <ContentSection id="deep-dives" title="Legal Verdicts" className="bg-slate-50 dark:bg-slate-900/40">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5 bg-white dark:bg-slate-800 border">
               <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-purple-600">The Legal Edge of Indonesia</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Indonesia’s **Positive Investment List** allows foreigner fully ownership triggers setups in many sectors (IT Consulting, large resorts, holding nodes), bypassing dangerous nominee structural triggers entirely maps configs.
               </p>
            </Card>
            <Card className="p-5 bg-white dark:bg-slate-800 border">
               <h4 className="font-bold text-slate-900 dark:text-white mb-2">Thailand Structures</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Unless obtaining difficult BOI (Board of Investment) node clearances, foreigners usually hold maximum 49% equity requiring complex local structure coordination safeguards nodes sets maps.
               </p>
            </Card>
         </div>
      </ContentSection>

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
