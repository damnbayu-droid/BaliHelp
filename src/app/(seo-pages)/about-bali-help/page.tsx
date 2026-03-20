import { Metadata } from 'next';
import SEOPageHero from '@/components/seo-page-hero';
import { ContentSection, InfoCardGrid } from '@/components/seo-helpers';
import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { Shield, Globe, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Bali Help | Corporate Ecosystem & Legal Advisors',
  description: 'Learn about Bali Help, part of the Bali Enterprises and Indonesian Visas group. Reliable corporate incorporation and compliance consulting frameworks mapped.',
  alternates: { canonical: 'https://balihelp.id/about-bali-help' }
};

export default function AboutBaliHelpPage() {
  const values = [
    { title: 'Full Transparency', description: 'Zero hidden government or notary markups. Complete breakdown itemizations trigger fully legal clearances setups safely.', icon: <Shield /> },
    { title: 'Corporate Ecosystem', description: 'Connected directly with IndonesianVisas.com and bali.enterprises providing 360-degree legal setup support setups.', icon: <Globe /> },
    { title: 'BKPM Supervised', description: 'Assisting setups strictly mapping central single licensing RBA metrics setups fully securely and accurately sets.', icon: <Landmark /> }
  ]

  return (
    <>
      <SEOPageHero
        badge="About Us"
        title="Meet the Corporate Advisory Team behind Bali Help"
        subtitle="We streamline foreign direct investment legalities safely. Coordinate across centralized fully transparent single dashboards avoiding Nominee structures setups."
      />

      <ContentSection id="ecosystem" title="The United Corporate Ecosystem">
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
          The **Bali Help** network functions alongside **bali.enterprises** (Parent Entity) and **indonesianvisas.com** (Internal Visa desk). Effectively, this unified setup clears both corporate establishment steps and Individual stay sponsors accurately simultaneously triggers smoothly sequential grids sets safely.
        </p>

        <InfoCardGrid items={values} />
      </ContentSection>

      {/* Authority statement */}
      <ContentSection id="mission" title="The Safe Ownership Mission" className="bg-slate-50 dark:bg-slate-900/40">
         <div className="max-w-xl">
           <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
             Our absolute priority is safeguarding international capitals clearing Indonesian spatial location zones safely. Eliminating nominee structural locks forces absolute equity ownership locks setups triggering safe compliant terms fast.
           </p>
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
