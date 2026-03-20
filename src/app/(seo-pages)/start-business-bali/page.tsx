import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid, Checklist } from '@/components/seo-helpers';
import FAQSection from '@/components/faq-section';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, MapPin, Shield, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Start a Business in Bali | Ultimate Island Guide',
  description: 'The definitive authority hub for starting a business in Bali. Provincial zoning guidelines, tourism licenses, Banjar village approvals, and dedicated office paths.',
  alternates: { canonical: 'https://balihelp.id/start-business-bali' }
};

export default function StartBusinessBaliPage() {
  const vectors = [
    { title: 'Zoning & Office Lease Rules', description: 'Understand how Spatial Location (KKPR) triggers impact corporate locations in Canggu, Ubud, or Uluwatu.', links: '/company-formation-bali' },
    { title: 'Tourism & Liquor Permits', description: 'Operating hotels, restaurants, or bars triggers high-risk licensing filters mapped safely.' },
    { title: 'Local Village (Banjar) coordination', description: 'Operating physical shops requires addressing distinct local community framework clearances conforming layout rules.' }
  ]

  const faqs = [
    { id: '1', question: 'Where is the best place to set up my office?', answer: 'For digital agencies, Canggu or Pererenan offer great hubs. For hospitality or large-scale retreats, Uluwatu or Ubud provide Commercial-zoned properties safe mapping frames.', category: 'Location' },
    { id: '2', question: 'Do virtual offices work in Bali?', answer: 'Yes, Virtual Offices are valid for service-based businesses like IT or Consulting, saving thousands in setup overheads setups safely.', category: 'Efficiency' }
  ]

  return (
    <>
      <SEOPageHero
        badge="Bali Authority Hub"
        title="The Ultimate Guide to Starting a Business in Bali"
        subtitle="Translate full operational targets into safe triggers. Master Bali provincial zoning compliance triggers maps, local setup caveats, and access dedicated guides."
      />

      {/* Structured Overview */}
      <ContentSection id="lifecycle" title="Bali Business Ecosystem Overview">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Bali requires matching general BKPM national thresholds alongside strict local provincial constraints mapped securely. Operating any structure safely requires address spatial layouts node maps conforms securely with strict building approvals PBGs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vectors.map((item, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{item.description}</p>
              {item.links && (
                <Link href={item.links} className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700">
                  Read Detail <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </ContentSection>

      {/* Internal Links/Hub references */}
      <ContentSection id="bali-spaces" title="Strict Location Spatial Rules" className="bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-3xl">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm">
            Foreign operators setting up physical venues in Bali must guard triggers mapped locations securely according to zoning tiers:
          </p>
          <div className="space-y-4">
            <Card className="p-5 bg-white dark:bg-slate-800 border-l-4 border-l-purple-600">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Commercial Zone (Yellow/Red)</h4>
              <p className="text-xs text-slate-500 mb-2">Required for operations like restaurants, gyms, and hotel hubs. Enables licensing clearance node mapping securely.</p>
              <Link href="/company-formation-bali" className="text-xs text-purple-600 font-bold flex items-center gap-1">Read Guidelines <ArrowRight className="w-3 h-3"/></Link>
            </Card>
            <Card className="p-5 bg-white dark:bg-slate-800 border-l-4 border-l-red-500">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Green Zone (Restricted / Agricultural)</h4>
              <p className="text-xs text-slate-500">Absolutely cannot be used for business incorporation nodes. Standard triggers mapped here freeze OSS single licenses indefinitely.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Village coordination */}
      <ContentSection id="banjar" title="Local Banjar (Village) Coordination rules">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 max-w-2xl leading-relaxed">
          Unlike other locations, Bali requires operational clearances from the local traditional community leader (Banjar). This is essential for traffic management, parking triggers, and village contribution compliance triggers maps safely.
        </p>
      </ContentSection>

      <FAQSection
        items={faqs}
        title="Start Business Bali Common Questions"
        subtitle="Manage spatial layouts or Virtual office setups efficiently maps setups."
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
