'use client';
import { useEffect, useState } from 'react';

const available = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'AR', name: 'العربية' }
];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(() => typeof window !== 'undefined' ? (localStorage.getItem('lang') ?? 'en') : 'en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const currentLang = available.find(l => l.code === lang) || available[0];

  return (
    <div className="relative">
      {isOpen ? (
        <button
          id="language-switcher-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-100 bg-slate-900/95 border border-slate-800 rounded-full shadow-sm shadow-slate-950/20 hover:bg-slate-800 transition-colors"
          aria-expanded="true"
          aria-haspopup="listbox"
          aria-controls="language-switcher-listbox"
        >
          <span>{currentLang.label}</span>
          <svg
            className="w-4 h-4 transition-transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      ) : (
        <button
          id="language-switcher-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-100 bg-slate-900/95 border border-slate-800 rounded-full shadow-sm shadow-slate-950/20 hover:bg-slate-800 transition-colors"
          aria-expanded="false"
          aria-haspopup="listbox"
          aria-controls="language-switcher-listbox"
        >
          <span>{currentLang.label}</span>
          <svg
            className="w-4 h-4 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div
            id="language-switcher-listbox"
            role="listbox"
            aria-labelledby="language-switcher-trigger"
            className="absolute right-0 mt-2 w-40 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl shadow-slate-950/50 z-20 py-2"
          >
            {available.map((l) => (
              lang === l.code ? (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm transition-colors bg-amber-500/10 text-amber-200 font-semibold"
                  role="option"
                  aria-selected="true"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{l.label}</span>
                    <span className="text-xs text-slate-500">{l.name}</span>
                  </div>
                </button>
              ) : (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm transition-colors text-slate-200 hover:bg-slate-900"
                  role="option"
                  aria-selected="false"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{l.label}</span>
                    <span className="text-xs text-slate-500">{l.name}</span>
                  </div>
                </button>
              )
            ))}
          </div>
        </>
      )}
    </div>
  );
}
