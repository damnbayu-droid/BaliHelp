import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { GUIDES_DATA, Guide } from '@/lib/guides-data';
import { ArrowRight, Landmark, FileText, Shield, Globe, Award, HelpCircle, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | Bali Help Company Formation & Legal Guides',
  description: 'Comprehensive sitemap of Bali Help. Access company formation guides, PT PMA guides, business licensing rules, and foreign investment consulting specs.',
  alternates: { canonical: 'https://balihelp.id/site-map' }
};

export default function SitemapPage() {
  const clusters = [
    {
      title: "Money Pages (High Priority)",
      icon: <Landmark className="w-5 h-5 text-purple-600" />,
      links: [
        { label: "PT PMA Indonesia Setup", href: "/pt-pma-indonesia" },
        { label: "Company Formation Bali", href: "/company-formation-bali" },
        { label: "Business License Indonesia", href: "/business-license-indonesia" },
        { label: "Foreign Direct Investment (FDI)", href: "/foreign-investment-indonesia" }
      ]
    },
    {
      title: "Pillar Pages (Authority Hubs)",
      icon: <FileText className="w-5 h-5 text-purple-600" />,
      links: [
        { label: "Start a Business in Indonesia", href: "/start-business-indonesia" },
        { label: "Start a Business in Bali", href: "/start-business-bali" },
        { label: "Indonesia Company Structure", href: "/indonesia-company-structure" }
      ]
    },
    {
      title: "Supporting Deep-Dives",
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      links: [
        { label: "PT PMA Requirements", href: "/pt-pma-requirements" },
        { label: "PT PMA Process Stages", href: "/pt-pma-process" },
        { label: "PT PMA Timeline Milestones", href: "/pt-pma-timeline" },
        { label: "PT PMA Corporate Tax", href: "/pt-pma-tax-indonesia" },
        { label: "Cost of Business in Bali", href: "/cost-start-business-bali" }
      ]
    },
    {
      title: "Comparisons & Benchmarks",
      icon: <Globe className="w-5 h-5 text-purple-600" />,
      links: [
        { label: "Indonesia vs Singapore Company", href: "/indonesia-vs-singapore-company" },
        { label: "Bali vs Thailand Business", href: "/bali-vs-thailand-business" }
      ]
    },
    {
      title: "Company & Trust Pages",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      links: [
        { label: "About Bali Help", href: "/about-bali-help" },
        { label: "Case Studies & Successes", href: "/case-studies" },
        { label: "Legal & Compliance disclaimer", href: "/legal-compliance" },
        { label: "Book a Consultation", href: "/consultation" }
      ]
    }
  ];

  // Group guides by cluster if available
  const guideClusters = GUIDES_DATA.reduce((acc: any, guide: Guide) => {
    const clusterName = guide.cluster || 'General Guides';
    if (!acc[clusterName]) acc[clusterName] = [];
    acc[clusterName].push(guide);
    return acc;
  }, {});

  return (
    <main className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Website Sitemap</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Navigate our comprehensive ecosystem of company formation materials and guides maps safely.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-slate-900 shadow-xl border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                {cluster.icon}
                <h2 className="font-bold text-slate-900 dark:text-white text-lg">{cluster.title}</h2>
              </div>
              <ul className="space-y-2">
                {cluster.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link href={link.href} className="flex items-center text-sm text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">
                      <ArrowRight className="w-3 h-3 mr-2 text-purple-500 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Dynamic Guides Cluster */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-purple-600" /> Business Guides Index
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {Object.keys(guideClusters).map((clusterName, index) => (
                <Card key={index} className="p-6 bg-white dark:bg-slate-900 shadow-md border-slate-100 dark:border-slate-800">
                   <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm border-b pb-2">{clusterName}</h3>
                   <ul className="space-y-1.5">
                      {guideClusters[clusterName].map((guide: Guide, gIndex: number) => (
                         <li key={gIndex}>
                            <Link href={`/business-guides/${guide.slug}`} className="flex items-center text-xs text-slate-500 dark:text-slate-400 hover:text-purple-600 transition-colors">
                               <FileCheck className="w-3 h-3 mr-1.5 text-slate-400 flex-shrink-0" />
                               {guide.title}
                            </Link>
                         </li>
                      ))}
                   </ul>
                </Card>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
}
