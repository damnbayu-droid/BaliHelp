'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function MobileCTA({ showModal }: { showModal: () => void }) {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBar(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`lg:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-500 ease-out ${showBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button size="sm" onClick={showModal} className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-sm font-semibold rounded-lg shadow-lg">
            Get Started <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <span className="text-xs text-slate-500 dark:text-slate-400">Start today</span>
        </div>
        <a href="https://wa.me/6285727041992" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Phone className="w-4 h-4" />
          <span>Chat</span>
        </a>
      </div>
    </div>
  );
}
