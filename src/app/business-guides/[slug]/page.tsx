import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES_DATA, getGuideBySlug, getRelatedGuides } from '@/lib/guides-data';

export async function generateStaticParams() {
  return GUIDES_DATA.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://balihelp.id/business-guides/${guide.slug}` },
    openGraph: {
      type: 'article',
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://balihelp.id/business-guides/${guide.slug}`,
      siteName: 'Bali Help',
      images: [{ url: 'https://balihelp.id/og-image.webp', width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: ['https://balihelp.id/og-image.webp'],
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide.relatedSlugs);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    url: `https://balihelp.id/business-guides/${guide.slug}`,
    publisher: { '@type': 'Organization', name: 'Bali Help', url: 'https://balihelp.id', logo: 'https://balihelp.id/Logo.webp' },
    provider: { '@type': 'Organization', name: 'PT Indonesian Visas Agency' },
  };

  const faqSchema = guide.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="min-h-screen bg-white">
        {/* Minimal Header */}
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
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/business-guides/how-to-start-a-business-in-bali" className="hover:text-blue-600">Business Guides</Link></li>
              <li>/</li>
              <li className="text-slate-900 font-medium">{guide.title}</li>
            </ol>
          </nav>

          <article>
            {/* Cluster Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">
              {guide.cluster}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {guide.title}
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-500 pl-4">
              {guide.metaDescription}
            </p>

            {/* Table of Contents */}
            <nav className="bg-slate-50 rounded-xl p-6 mb-12" aria-label="Table of contents">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Contents</h2>
              <ol className="space-y-1">
                {guide.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            {guide.sections.map((section, i) => (
              <section key={i} id={`section-${i}`} className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                <p className="text-slate-700 leading-relaxed text-base">{section.content}</p>
              </section>
            ))}

            {/* FAQ Section */}
            {guide.faqs.length > 0 && (
              <section className="bg-slate-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <dl className="space-y-6">
                  {guide.faqs.map((faq, i) => (
                    <div key={i}>
                      <dt className="text-base font-semibold text-slate-900 mb-2">{faq.question}</dt>
                      <dd className="text-slate-600 text-sm leading-relaxed">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </article>

          {/* Related Guides */}
          {related.length > 0 && (
            <aside className="border-t border-slate-200 pt-10 mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related Guides</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/business-guides/${r.slug}`}
                      className="block p-4 bg-slate-50 rounded-lg hover:bg-blue-50 text-sm font-medium text-slate-800 hover:text-blue-700 transition-colors"
                    >
                      → {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* CTA */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Need Professional Help?</h2>
            <p className="mb-6 opacity-90 text-sm">Bali Help provides expert company formation and business licensing services for foreign investors in Bali.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/6285727041992" className="inline-block px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-slate-100 text-sm">Contact Us on WhatsApp</a>
              <Link href="/" className="inline-block px-6 py-3 border border-white/50 text-white font-bold rounded-lg hover:bg-white/10 text-sm">View All Services</Link>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-sm text-slate-500">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <strong className="text-slate-700">Bali Help</strong> — Operated by PT Indonesian Visas Agency.
                <br />Visa and immigration services provided by{' '}
                <a href="https://indonesianvisas.com" className="text-blue-600 hover:underline">Indonesian Visas Agency</a>.
              </div>
              <div className="flex gap-4">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/csr" className="hover:text-blue-600">CSR</Link>
                <a href="https://indonesianvisas.com" className="hover:text-blue-600">Indonesian Visas</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
