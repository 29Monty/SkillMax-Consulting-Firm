'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';

const dict: Record<string, Record<string, string>> = {
  en,
  fr,
  ar
};

const I18nContext = createContext({
  locale: 'en',
  t: (k: string) => '' as string
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState(() => typeof window !== 'undefined' ? (localStorage.getItem('lang') ?? 'en') : 'en');

  useEffect(() => {
    localStorage.setItem('lang', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const t = (k: string) => dict[locale]?.[k] ?? dict['en'][k] ?? k;

  return <I18nContext.Provider value={{ locale, t }} >{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
