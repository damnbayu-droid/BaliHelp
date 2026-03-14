'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Globe, Menu, X, ArrowRight, Phone } from 'lucide-react';
import { navigationLinks } from '@/lib/mock-data';
import LanguageDropdown from './language-dropdown';
import { Button } from './ui/button';

export default function InteractiveHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('hero');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'why-bali', 'services', 'packages', 'trust', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">Bali Help</span>
            <div className="lg:hidden relative w-10 h-10 flex items-center justify-center">
              <Image src="/Logo.webp" alt="Bali Help" fill priority className="object-contain" />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${activeSection === link.href.replace('#', '') ? 'text-purple-700 dark:text-purple-400' : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{isDarkMode ? 'Light' : 'Dark'}</span>
            </button>
            <div className="hidden lg:block relative group">
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 min-w-[200px]">
                  <LanguageDropdown currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
                </div>
              </div>
            </div>
            <a href="https://wa.me/6285727041992" className="hidden sm:inline-flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg transition-all hover:shadow-xl">
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <button className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-slate-200 dark:border-slate-700">
            {navigationLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
