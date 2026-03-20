import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function ContentSection({
  id,
  title,
  children,
  className = ""
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-1 bg-gradient-to-r from-purple-700 to-purple-900 rounded-full" />
          {title}
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}

export function InfoCardGrid({
  items
}: {
  items: { title: string; description: string; icon?: React.ReactNode }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {items.map((item, index) => (
        <Card key={index} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-sm hover:shadow-md">
          {item.icon && (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/20 flex items-center justify-center mb-4 text-purple-700 dark:text-purple-400">
              {item.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}

export function TimelineSteps({
  steps
}: {
  steps: { step: string; title: string; description: string }[];
}) {
  return (
    <div className="space-y-8 mt-8">
      {steps.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
              {item.step}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 mt-2" />
            )}
          </div>
          <div className="pb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Checklist({
  items
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
          <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
