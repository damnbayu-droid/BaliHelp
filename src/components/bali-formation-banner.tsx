'use client';

export default function BaliFormationBanner() {
  return (
    <section className="relative h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/banner-bali-formation.png"
          alt="Company Formation in Bali - Rice fields and beach view"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/70 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4 border border-orange-500/30">
              🌴 Bali Business Paradise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Start Your Company Formation Journey
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 mb-6 leading-relaxed">
              From lush rice terraces to pristine beaches, Bali offers the perfect setting for your business success. Let us guide you through every step of establishing your company in Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/jp54fRjWFQHmNedt7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold h-12 px-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold h-12 px-8 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/30 transition-all backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent" />
    </section>
  );
}
