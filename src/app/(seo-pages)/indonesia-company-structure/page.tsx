import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Users, Shield, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Indonesia Company Structure | Directors & Shareholders Guide',
  description: 'Understand legal governance in Indonesia. Breakdown of Shareholders, Board of Directors (BOD), and Board of Commissioners (BOC) for PT PMA with explicit guidelines.',
  alternates: { canonical: 'https://balihelp.id/indonesia-company-structure' }
};

export default function IndonesiaCompanyStructurePage() {
  const tiers = [
    { title: 'Shareholders (RPS)', description: 'The absolute owners of the company. Capital backers who hold decision-making power via General Meetings (GMS).', icon: <Users /> },
    { title: 'Board of Directors (BOD)', description: 'Operational executives managing daily trading, signing contracts, and representing the entity legally.', icon: <Award /> },
    { title: 'Board of Commissioners (BOC)', description: 'Supervisory board protecting Shareholder interests. Approves major fiscal decisions and oversees BOD metrics.', icon: <Shield /> }
  ]

  const faqs = [
    { id: '1', question: 'Can a foreigner be a Director?', answer: 'Yes, foreigners can act as Directors (Direktur) in a PT PMA and qualify for a Working KITAS. For Local PTs, Director roles are typically reserved for locals depending on scale.', category: 'Roles' },
    { id: '2', question: 'What is a nominal shareholder?', answer: 'A nominal shareholder owns shares in name only, often tied via nominee agreements. This structure carries severe legal risks and is strongly discouraged under BKPM rules maps.', category: 'Safety' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Governance Guide"
        title="Understanding Indonesian Company Structures"
        subtitle="Master the balance of power in your enterprise. Detailed breakdowns of Director (BOD), Commissioner (BOC), and Shareholder responsibilities mapping legal frames safely."
      />

      {/* Structured Overview */}
      <ContentSection id="governance-tiers" title="The Three Corporate Tiers">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Indonesian corporate law (UU PT) utilizes a direct two-tier board system split between management (BOD) and supervisor (BOC oversight layers). Effectively outlining these definitions guards against operational deadlock maps triggers.
        </p>
        <InfoCardGrid items={tiers} />
      </ContentSection>

      {/* Node breakdowns */}
      <ContentSection id="roles" title="Specific Roles and Responsibilities" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-5 bg-white dark:bg-slate-800 border items-start">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">1. Shareholders (Pemegang Saham)</h4>
            <Checklist items={[
              "Minimum 2 shareholders total allowed.",
              "Both can be corporate entities or individuals.",
              "Maintain voting power based on share percentage counts nominal."
            ]} />
          </Card>
          <Card className="p-5 bg-white dark:bg-slate-800 border items-start">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">2. Directors (Direksi)</h4>
            <Checklist items={[
              "Authorized to sign operational banking nodes.",
              "Required for working Visa sponsor trigger maps.",
              "Responsible for corporate tax compliance layout targets."
            ]} />
          </Card>
          <Card className="p-5 bg-white dark:bg-slate-800 border items-start">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">3. Commissioners (Komisaris)</h4>
            <Checklist items={[
              "Zero operational powers over daily trade sets.",
              "Audits corporate statements before shareholder review triggers.",
              "Can terminate Director actions if deadlock sets conform trigger levels."
            ]} />
          </Card>
        </div>
      </ContentSection>

      {/* Internal link prompt to money page */}
      <ContentSection id="nominees" title="Nominee Structure Risks">
        <div className="max-w-2xl">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Historically, foreign operators utilized dummy Indonesian shareholders (Nominees) to bypass equity limits. Under current Omnibus Law triggers, this holds severe invalid layouts node risks. Standard triggers maps fully protecting assets require direct legal equity locking safely.
          </p>
          <Link href="/pt-pma-indonesia" className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700">
            Read Safe Ownership Guidelines <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Structure & Governance Questions"
        subtitle="Review supervisor oversight or Shareholder mapping node rules maps."
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
