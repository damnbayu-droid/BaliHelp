'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Zap, Ticket, RefreshCw, Home, ArrowRight, ExternalLink, Shield, Clock, Award, Users, Sun } from 'lucide-react';
import { visaServicesCards } from '@/lib/visa-services-data';

export default function VisaServicesSection() {
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      sun: Sun,
      ticket: Ticket,
      'refresh-cw': RefreshCw,
      home: Home
    };
    const Icon = icons[iconName] || Sun;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <section
      id="visa-services"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950"
      aria-labelledby="visa-section-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
            <Shield className="w-3.5 h-3.5" />
            Visa Services
          </Badge>
          <h2
            id="visa-section-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Bali Visa Services & Extensions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            From short-term visits to long-term residency, we provide comprehensive visa services for all your Indonesia immigration needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {visaServicesCards.map((visa) => (
            <Dialog key={visa.id}>
              <DialogTrigger asChild>
                <Card className="group h-full p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50 cursor-pointer">
                  <CardHeader className="p-0 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {getIconComponent(visa.icon)}
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                      {visa.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {visa.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
                      <Zap className="w-4 h-4" />
                      {visa.processingTime}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    {visa.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-slate-600 dark:text-slate-300">
                    {visa.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {visa.eligibility && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Eligibility
                      </h4>
                      <ul className="space-y-2">
                        {visa.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {visa.documents && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-600" />
                        Required Documents
                      </h4>
                      <ul className="space-y-2">
                        {visa.documents.map((doc, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {visa.requirements && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-purple-600" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {visa.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {visa.benefits && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {visa.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/20 dark:via-orange-950/20 dark:to-red-950/20 rounded-lg">
                    <Zap className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Processing Time</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{visa.processingTime}</p>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white h-12 text-lg font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply for {visa.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Visa processing times may vary based on individual circumstances and current government policies. Contact us for the most up-to-date information.
          </p>
        </div>
      </div>
    </section>
  );
}
