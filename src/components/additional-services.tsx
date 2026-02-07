'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Award, Users, Globe, Shield, CheckCircle } from 'lucide-react';

export default function AdditionalServices() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Expedited company registration with our streamlined processes'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced consultants with deep knowledge of Indonesian business law'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal guidance from start to finish with your dedicated account manager'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'Professional service aligned with global best practices'
    },
    {
      icon: Shield,
      title: '100% Compliance',
      description: 'Full adherence to Indonesian regulations and requirements'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden fees with clear, upfront pricing for all services'
    }
  ];

  const benefits = [
    {
      title: 'Save Time & Money',
      description: 'Avoid costly mistakes and delays with expert guidance from day one'
    },
    {
      title: 'Local Expertise',
      description: 'Navigate Indonesian bureaucracy with ease using our local knowledge'
    },
    {
      title: 'Ongoing Support',
      description: 'We don\'t just set you up - we support your business growth'
    }
  ];

  return (
    <section id="additional-services" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950" aria-labelledby="additional-services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
            Why Choose Us
          </Badge>
          <h2
            id="additional-services-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Beyond company formation, we provide the support you need to thrive in Indonesia's business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50 cursor-pointer"
            >
              <CardHeader className="p-0 pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-purple-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
