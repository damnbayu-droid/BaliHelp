'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

interface LanguageDropdownProps {
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
}

export default function LanguageDropdown({ currentLanguage, onLanguageChange }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-xl">{currentLang.flag}</span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {currentLang.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
          <div className="py-2 max-h-96 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                onClick={() => {
                  onLanguageChange(language.code);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={currentLanguage === language.code}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="flex-1 text-sm text-slate-700 dark:text-slate-300">
                  {language.name}
                </span>
                {currentLanguage === language.code && (
                  <Check className="w-4 h-4 text-purple-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
