import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../shared/config/constants';

type Locale = (typeof SUPPORTED_LOCALES)[number];

const translations: Record<Locale, Record<string, unknown>> = {
  en: {},
  de: {},
};

export const locale = persistentAtom<Locale>('locale', 
  (navigator.language.startsWith('de') ? 'de' : DEFAULT_LOCALE)
);

export const locales: Locale[] = [...SUPPORTED_LOCALES];

async function loadTranslations(lang: Locale) {
  if (Object.keys(translations[lang]).length === 0) {
    const data = await fetch(`/locales/${lang}.json`);
    translations[lang] = await data.json();
  }
}

function getNestedValue(obj: Record<string, unknown>, key: string): string {
  return key.split('.').reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj) as string ?? key;
}

export const t = computed(locale, (lang) => {
  loadTranslations(lang);
  return (key: string): string => getNestedValue(translations[lang] as Record<string, unknown>, key);
});

export function setLocale(newLocale: Locale) {
  locale.set(newLocale);
}
