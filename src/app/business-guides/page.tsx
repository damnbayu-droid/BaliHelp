import { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES_DATA } from '@/lib/guides-data';

export const metadata: Metadata = {
  title: 'Business Guides | Company Formation & Investment Knowledge Hub',
  description: 'Comprehensive business guides for starting a company in Bali and Indonesia. PT PMA registration, business licensing, tax compliance, and foreign investment information.',
  alternates: { canonical: 'https://balihelp.id/business-guides' },
  openGraph: {
    type: 'website',
    title: 'Business Knowledge Hub | Bali Help',
    description: 'Comprehensive business guides for company formation in Bali and Indonesia.',
    url: 'https://balihelp.id/business-guides',
    siteName: 'Bali Help',
    images: [{ url: 'https://balihelp.id/og-image.webp', width: 1200, height: 630, alt: 'Business Guides Bali' }],
  },
  twitter: { card: 'summary_large_image', title: 'Business Knowledge Hub | Bali Help', description: 'Comprehensive business guides for company formation in Indonesia.', images: ['https://balihelp.id/og-image.webp'] },
};

const clusters = [
  { name: 'Company Formation', description: 'Everything about establishing a company in Indonesia as a foreign investor.', filter: 'Company Formation' },
  { name: 'Business Licenses', description: 'NIB, OSS, KBLI codes, and all licensing requirements explained.', filter: 'Business Licenses' },
  { name: 'Tax & Compliance', description: 'Corporate tax, VAT, NPWP registration, and compliance obligations.', filter: 'Tax & Compliance' },
  { name: 'Doing Business in Bali', description: 'Costs, opportunities, and practical advice for Bali-based businesses.', filter: 'Doing Business in Bali' },
  { name: 'Corporate Structure', description: 'Directors, commissioners, shareholders, and governance requirements.', filter: 'Corporate Structure' },
  { name: 'Comparison Guides', description: 'Compare Indonesia with Thailand, Singapore, and other ASEAN options.', filter: 'Comparison Guides' },
];

export default function BusinessGuidesIndex() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Business Knowledge Hub',
    description: 'Comprehensive business guides for company formation in Bali and Indonesia.',
    url: 'https://balihelp.id/business-guides',
    publisher: { '@type': 'Organization', name: 'Bali Help', url: 'https://balihelp.id' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="min-h-screen bg-white">
        <header className="border-b border-slate-200 bg-white">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/Logo.webp" alt="Bali Help company formation services" width={32} height={32} />
              <span className="text-lg font-bold text-slate-900">Bali Help</span>
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/business-guides/how-to-start-a-business-in-bali" className="text-slate-600 hover:text-blue-600">Ultimate Guide</Link>
              <Link href="/csr" className="text-slate-600 hover:text-blue-600">CSR</Link>
              <Link href="/" className="text-slate-600 hover:text-blue-600">Home</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li className="text-slate-900 font-medium">Business Guides</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Knowledge Hub</h1>
          <p className="text-lg text-slate-600 mb-4 max-w-2xl">Comprehensive guides for starting and operating a business in Bali and Indonesia. Written for foreign investors, entrepreneurs, and digital nomads.</p>
          <p className="text-sm text-slate-500 mb-12">Published by Bali Help · Supported by PT Indonesian Visas Agency · {GUIDES_DATA.length + 1} guides available</p>

          {/* Featured: Ultimate Guide */}
          <Link href="/business-guides/how-to-start-a-business-in-bali" className="block bg-blue-600 text-white rounded-2xl p-8 mb-12 hover:bg-blue-700 transition-colors">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-3">Ultimate Guide</span>
            <h2 className="text-2xl font-bold mb-2">How to Start a Business in Bali</h2>
            <p className="opacity-90 text-sm">The definitive 5000+ word guide covering PT PMA registration, licensing, tax, costs, and everything foreign investors need to know.</p>
          </Link>

          {/* Cluster Sections */}
          {clusters.map(cluster => {
            const guides = GUIDES_DATA.filter(g => g.cluster === cluster.filter);
            return (
              <section key={cluster.name} className="mb-12">
                <h2 className="text-xl font-bold text-slate-900 mb-1">{cluster.name}</h2>
                <p className="text-sm text-slate-500 mb-4">{cluster.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {guides.map(g => (
                    <li key={g.slug}>
                      <Link href={`/business-guides/${g.slug}`} className="block p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-sm font-medium text-slate-800 hover:text-blue-700">{g.title}</span>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{g.metaDescription}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          {/* CTA */}
          <div className="bg-slate-50 rounded-2xl p-8 text-center mt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Need Professional Assistance?</h2>
            <p className="text-sm text-slate-600 mb-4">Bali Help provides expert company formation and business licensing services.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/6285727041992" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 text-sm">Contact on WhatsApp</a>
              <Link href="/" className="inline-block px-6 py-3 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-white text-sm">View Services</Link>
            </div>
          </div>
        </main>

        <footer className="border-t border-slate-200 bg-slate-50 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-sm text-slate-500">
            <strong className="text-slate-700">Bali Help</strong> — Operated by PT Indonesian Visas Agency.{' '}
            Visa services by <a href="https://indonesianvisas.com" className="text-blue-600 hover:underline">Indonesian Visas Agency</a>.
          </div>
        </footer>
      </div>
    </>
  );
}
