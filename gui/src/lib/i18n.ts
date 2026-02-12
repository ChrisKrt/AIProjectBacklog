// i18n library for internationalization
import { writable, derived } from 'svelte/store';
import { config } from '@/shared/config/env.config';

interface Translations {
  [key: string]: any;
}

const translations: Record<string, Translations> = {};

async function loadTranslations(locale: string): Promise<Translations> {
  if (translations[locale]) {
    return translations[locale];
  }

  try {
    const response = await fetch(`/locales/${locale}.json`);
    const data = await response.json();
    translations[locale] = data;
    return data;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    return {};
  }
}

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export const currentLocale = writable<string>(
  localStorage.getItem('locale') || config.localization.defaultLocale
);

export const currentTranslations = writable<Translations>({});

currentLocale.subscribe(async (locale) => {
  localStorage.setItem('locale', locale);
  const trans = await loadTranslations(locale);
  currentTranslations.set(trans);
});

export const t = derived(currentTranslations, ($translations) => {
  return (key: string, params?: Record<string, string>): string => {
    let translation = getNestedValue($translations, key);

    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, value);
      });
    }

    return translation;
  };
});

export function setLocale(locale: string) {
  if (config.localization.supportedLocales.includes(locale)) {
    currentLocale.set(locale);
  }
}

export function getLocale(): string {
  let locale: string;
  currentLocale.subscribe((value) => (locale = value))();
  return locale!;
}
