import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Indonesia vs Singapore Company Setup | Which is Better?',
  description: 'Compare starting a business in Indonesia vs Singapore. Tax rates, capital requirements, ease of doing business, and legal ownership guidelines compared.',
  alternates: { canonical: 'https://balihelp.id/indonesia-vs-singapore-company' }
};

export default function IndonesiaVsSingaporeCompanyPage() {
  const comparison = [
    { metric: 'Foreign Ownership', indo: 'Up to 100% (PMA depending on KBLI)', sg: '100% allowed on most items' },
    { metric: 'Corporate Tax', indo: '22% (reductions available)', sg: '17% (tiered exemptions)' },
    { metric: 'Capital Req.', indo: '10 Billion IDR (~$650k) Plan', sg: 'Starts from $1 SGD' },
    { metric: 'Market demographics', indo: '275+ Million (Huge domestic demand)', sg: '6 Million (Regional hub)' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Jurisdiction Comparison"
        title="Indonesia vs Singapore: Where to Incorporate Your Company?"
        subtitle="Compare legal ownership rules, tax setups, and market sizing maps side by side. Strategic guide deciding between operational boots or holding hub configurations."
      />

      <ContentSection id="comparison-table" title="The Side-by-Side Breakdown">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          While Singapore wins on speed, Indonesia wins on domestic demand. Compare critical thresholds before locking corporate structure coordinates:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <th className="p-4 font-bold border">Metric</th>
                <th className="p-4 font-bold border text-purple-600">Indonesia (PT PMA)</th>
                <th className="p-4 font-bold border">Singapore (Pte Ltd)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <tr key={index} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900/40">
                  <td className="p-4 font-semibold text-slate-900 dark:text-white border">{item.metric}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 border">{item.indo}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 border">{item.sg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Deep dives */}
      <ContentSection id="deep-dives" title="Tax & Market Verdicts" className="bg-slate-50 dark:bg-slate-900/40">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5 bg-white dark:bg-slate-800 border">
               <h4 className="font-bold text-slate-900 dark:text-white mb-2">The Case for Singapore</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Singapore is the optimal structure for holds (Holding Companies), Tech IP locking, or managing regional funding setup maps. Zero capital minimums setups trigger fast fast incorporation speeds node sets.
               </p>
            </Card>
            <Card className="p-5 bg-white dark:bg-slate-800 border">
               <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-purple-600">The Case for Indonesia</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Indonesia is critical for investors capitalizing directly on 275 Million local consumers DEMAND triggers (FMCG, Retail, Tourism, Tech adoption setups). Operating locally forces boots-on-ground setup safe margins maps setups.
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
