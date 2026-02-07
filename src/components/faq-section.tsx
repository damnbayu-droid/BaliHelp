'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Check } from 'lucide-react';
import { faqData } from '@/lib/faq-data';

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-900"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 border-purple-200 dark:border-purple-700">
            Frequently Asked Questions
          </Badge>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Everything You Need to Know
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Common questions about company formation in Indonesia. Can't find your answer? We're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={faq.id} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
                    <div className="flex items-center gap-3 text-left">
                      <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {faq.category || 'General'}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Have more questions? <a href="#contact" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">Contact our team</a> for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
