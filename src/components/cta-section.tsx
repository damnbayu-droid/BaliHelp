'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  mode?: 'light' | 'dark';
}

export default function CTASection({ mode = 'light' }: CTASectionProps) {
  return (
    <section
      id={mode === 'light' ? 'cta-light' : 'cta-dark'}
      className={`py-20 lg:py-28 ${mode === 'dark'
          ? 'bg-slate-900 text-white'
          : 'bg-gradient-to-br from-purple-50 via-purple-100/50 to-orange-50/30 text-slate-900'
        }`}
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Start Your Business in Bali?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Let our experts guide you through the company formation process. Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              onClick={() => window.open('https://wa.me/62423854701', '_blank')}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-semibold rounded-xl transition-all bg-white dark:bg-slate-800 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
              onClick={() => window.open('https://indonesianvisas.com', '_blank')}
            >
              Process Visa Securely
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            Visa & Legal services are powered by our flagship hub <a href="https://indonesianvisas.com" className="underline hover:text-purple-600">IndonesianVisas.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
