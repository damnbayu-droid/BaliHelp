import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, TimelineSteps } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PT PMA Registration Timeline | Incorporation Milestones',
  description: 'Understand full timeline and setup duration standard mapping for PT PMA in Indonesia. Standard triggers clearing fast tracking operational sets.',
  alternates: { canonical: 'https://balihelp.id/pt-pma-timeline' }
};

export default function PTPMATimelinePage() {
  const milestoneTimeline = [
    { step: 'D-3', title: 'Order Confirmation & Verification', description: 'Legal desks map certified passport copies and select KBLI codes for upfront spatial clearances nodes sets.' },
    { step: 'D-0', title: 'Name Setup & Notary signing', description: 'Locks the name approval and executes formal notary signatures triggering ministerial SK server push queues sets setups.' },
    { step: 'D-7', title: 'Ministry Clearance & Tax Node issue', description: 'Company formally gains legal legal status issuing local corporate tax numbers clears triggers setups.' },
    { step: 'D-12', title: 'OSS Standard NIB credentials', description: 'Operations gain active active node sets allowing Standard Bank coordinate wiring triggering inject targets maps setups securely.' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Timeline Tracking"
        title="Incorporation Timeline: Milestone by Milestone"
        subtitle="Manage corporate launch dates accurately. Explicit breakdown of standard banking setup clearance durations mapped safely for foreign operators sets."
      />

      <ContentSection id="milestones" title="Standard Day-to-Day Milestones">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          Standard trigger setup timelines operate smoothly provided initial address spatial coordinates mount accurately. Timeline variables range depending notary trigger speeds sets setups:
        </p>

        <div className="max-w-2xl">
          <TimelineSteps steps={milestoneTimeline} />
        </div>
      </ContentSection>

      {/* Floating Speed Card */}
      <ContentSection id="fast-track" title="Fast-tracking Setup nodes" className="bg-slate-50 dark:bg-slate-900/40">
        <Card className="max-w-md p-6 bg-gradient-to-br from-purple-800 to-indigo-900 text-white rounded-2xl border-0">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" /> Fast-Track options
          </h3>
          <p className="text-xs text-slate-200 leading-relaxed mb-4">
             FDI nodes can trigger under express speed sets clearing ministerial queue locks internally inside 5 operational banking days. Contact desk mapping upfront triggers securely.
          </p>
        </Card>
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
