'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';

interface VisaOption {
  id: string;
  title: string;
  description: string;
  url: string;
  popular?: boolean;
}

const visaOptions: VisaOption[] = [
  {
    id: 'b1-voa',
    title: 'B1 VOA / Extension',
    description: 'Visa on Arrival with extension options for short stays',
    url: 'https://indonesianvisas.com/services/B1'
  },
  {
    id: 'c1-visit',
    title: 'C1 Visit Visa',
    description: 'Single-entry visit visa for tourism and business',
    url: 'https://indonesianvisas.com/services/C1'
  },
  {
    id: 'c2-business',
    title: 'C2 Business Visa',
    description: 'Business visa for meetings and conferences',
    url: 'https://indonesianvisas.com/services/C2',
    popular: true
  },
  {
    id: 'c12-pre-investment',
    title: 'C12 Pre-Investment Visa',
    description: 'Special visa for investors exploring opportunities',
    url: 'https://indonesianvisas.com/services/C12'
  },
  {
    id: 'd1-tourist',
    title: 'D1 Tourist Visa',
    description: 'Multiple-entry tourist visa for frequent visitors',
    url: 'https://indonesianvisas.com/services/D1'
  },
  {
    id: 'd2-business',
    title: 'D2 Business Visa',
    description: 'Long-term business visa for ongoing business activities',
    url: 'https://indonesianvisas.com/services/D2'
  },
  {
    id: 'd12-pre-investment',
    title: 'D12 Pre Investment',
    description: 'Extended pre-investment visa for thorough business planning',
    url: 'https://indonesianvisas.com/services/D12'
  },
  {
    id: 'e33g-digital-nomad',
    title: 'E33G Digital Nomad',
    description: 'Special visa for remote workers and digital nomads',
    url: 'https://indonesianvisas.com/services/E33G',
    popular: true
  },
  {
    id: 'e28a-investment-kitas',
    title: 'E28A Investment KITAS',
    description: 'Investment-based temporary stay permit for foreign investors',
    url: 'https://indonesianvisas.com/services/E28A',
    popular: true
  },
  {
    id: 'custom-visa',
    title: 'Custom Visa',
    description: 'Tailored visa solutions for unique requirements',
    url: 'https://indonesianvisas.com/services'
  }
];

export default function PopularVisaSection() {
  return (
    <section id="popular-visa" className="py-20 lg:py-28 bg-white dark:bg-slate-900" aria-labelledby="visa-section-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-4 border-orange-200 dark:border-orange-700">
            <Star className="w-3.5 h-3.5" />
            Most Popular Visas
          </Badge>
          <h2
            id="visa-section-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Choose Your Visa Type
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Select from our most popular visa options. Click to apply through our trusted partner indonesianvisas.com
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {visaOptions.map((visa) => (
            <a
              key={visa.id}
              href={visa.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card
                className={`h-full transition-all hover:shadow-xl hover:scale-105 cursor-pointer relative overflow-hidden ${
                  visa.popular
                    ? 'border-2 border-orange-500 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-slate-800 shadow-lg shadow-orange-500/10'
                    : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                {visa.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {visa.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {visa.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-purple-700 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Visa services provided by our trusted partner{' '}
            <a
              href="https://indonesianvisas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              indonesianvisas.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
