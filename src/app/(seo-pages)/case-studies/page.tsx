import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories & Case Studies | Bali Help Clients',
  description: 'Review simulated yet realistic case studies demonstrating transparent foreign investment setups, PT PMA incorporation timelines on Jakarta vs Bali networks safely.',
  alternates: { canonical: 'https://balihelp.id/case-studies' }
};

export default function CaseStudiesPage() {
  const cases = [
    {
       title: "Foreign Tech Startup incorporation",
       context: "A European software group required creating 100% foreign-owned structure safely within 15 Banking days mapped standard.",
       sol: "Drafted corporate articles mapped correct KBLI node codes clearing modular NIB layouts without nominee filters maps.",
       res: "Full NIB active triggers maps operational standard banking routes speeds sets inside 12 operational banking days."
    },
    {
       title: "Uluwatu Villa hospitality setup",
       context: "Investor required acquiring leasehold titles building physical operational operational layouts zoning safely.",
       sol: "Checked locational spatial coordinates PKKPR thresholds securely mapping active active node triggers correctly sets configurations.",
       res: "Fully legal deed deed trigger maps enabling safe safe operations launch dates budgets conform triggers."
    }
  ]

  return (
    <>
      <SEOPageHero
        badge="Client Successes"
        title="Case Studies: Foreign Investment Case Scenarios"
        subtitle="Detailed reviews of corporate launch triggers clearing single licensing frames maps safely. Setup examples addressing legal setups durational sequential grids rates."
      />

      <ContentSection id="studies" title="Incorporation Case Breakthroughs">
         <div className="space-y-6 max-w-4xl mt-6">
            {cases.map((item, index) => (
               <Card key={index} className="p-6 bg-white dark:bg-slate-800 border items-start">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 mb-4">{item.context}</p>
                  <div className="space-y-2">
                     <div className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Solution:</strong> {item.sol}</span>
                     </div>
                     <div className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Result:</strong> {item.res}</span>
                     </div>
                  </div>
               </Card>
            ))}
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
