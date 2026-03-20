import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, Checklist } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Legal & Compliance Overview | Bali Help guidelines',
  description: 'Understand Indonesian regulatory frameworks like structural Omnibus laws and BKPM supervised layout triggers guarding foreign capitals safely.',
  alternates: { canonical: 'https://balihelp.id/legal-compliance' }
};

export default function LegalCompliancePage() {
  return (
    <>
      <SEOPageHero
        badge="Legal Checklist"
        title="Legal frameworks & Compliance Safety in Indonesia"
        subtitle="Navigate Omnibus Law reforms, spatial location triggers PKKPR frameworks side by side. Avoid nominees structure safely guarding capitals setups."
      />

      {/* Content node */}
      <ContentSection id="legal-framework" title="The Regulatory Overview">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 max-w-2xl leading-relaxed">
          The investment climate structure relies fully under standard structural Omnibus law formats clearing smooth active speed active setups triggers node maps safely configurations.
        </p>
        <div className="max-w-xl">
           <Checklist items={[
             "Strict adherence to correct selection 5-digit KBLI codes mapping speeds.",
             "Absolute spatial location conformity verification PKKPR coordinate grids triggers.",
             "Quarterly financial layout reporting mappings continuous active standing levels."
           ]} />
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
