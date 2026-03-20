import InteractiveHeader from '@/components/interactive-header';
import Footer from '@/components/footer';
import FormationClientWrapper from '@/components/formation-client-wrapper';

export default function SEORouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <InteractiveHeader />
      <FormationClientWrapper>
        <main id="main-content">
          {children}
        </main>
      </FormationClientWrapper>
      <Footer />
    </div>
  );
}
