import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, TimelineSteps } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PT PMA Incorporation Process | Step-by-Step Guidelines',
  description: 'Detailed stage walkthrough for incorporating a PT PMA company in Indonesia. From name reservation to NIB clearance setups accurately mapping triggers.',
  alternates: { canonical: 'https://balihelp.id/pt-pma-process' }
};

export default function PTPMAProcessPage() {
  const processSteps = [
    { step: '1', title: 'Pre-Approval Documentation', description: 'Consolidate certified passport copies, address coordinates, and capital forecast projections before filing triggers setups.' },
    { step: '2', title: 'Name Approval Reservation (Kemenkumham)', description: 'Ensure name uniqueness mapped nodes avoiding descriptive overlaps clearing smooth ministerial gate clearances setups.' },
    { step: '3', title: 'Notarial Deed Execution', description: 'Signing the formal Deed (Akta) mapped standard spatial layout triggers before locking official legal status nodes maps configurations.' },
    { step: '4', title: 'OSS RBA Single Access issue', description: 'Mount coordinates securely on government databases yielding standard NIB credentials clearing full Active trading setups node sets.' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Detail Process Guidance"
        title="Incorporating a PT PMA: Detailed Setup Process"
        subtitle="A step-by-step sequential breakdown from documentation to trigger triggers. Full transparency into BKPM incorporation pipelines mapping safely."
      />

      <ContentSection id="stages" title="The Incorporation Lifecycle Stages">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          The incorporation flow involves heavy notary coordination alongside ministry server clearance synchronizations maps. Fulfilling steps correctly guarantees instant active triggers without grid stalling:
        </p>
        
        <div className="max-w-2xl">
          <TimelineSteps steps={processSteps} />
        </div>
      </ContentSection>

      <ContentSection id="inner-links" title="Next Steps After Process" className="bg-slate-50 dark:bg-slate-900/40">
         <p className="text-slate-600 text-sm mb-4">Once Process triggers successfully, mapping operational setups triggers immediately:</p>
         <Link href="/pt-pma-timeline" className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700">
           Read Operational Timeline guides <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
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
