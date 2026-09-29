export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const localeToHtmlLang: Record<Locale, string> = {
  zh: 'zh-Hant-HK',
  en: 'en-HK',
};

export const localeToHreflang: Record<Locale, string> = {
  zh: 'zh-HK',
  en: 'en-HK',
};

/** Site-wide config. Contact fields stay empty until Toby provides them. */
export const siteConfig = {
  name: 'Tobytoki',
  legalName: 'Tobytoki',
  url: 'https://tobytoki.hk',
  /** Leave blank until confirmed — do not invent numbers */
  whatsapp: '' as string,
  email: '' as string,
  social: {
    // Fill when confirmed
  } as Record<string, string>,
};

export type PageKey =
  | 'home'
  | 'face-painting'
  | 'balloon-twisting'
  | 'photography'
  | 'work'
  | 'about'
  | 'journal'
  | 'faq'
  | 'contact';

export const pagePaths: Record<PageKey, string> = {
  home: '',
  'face-painting': 'face-painting',
  'balloon-twisting': 'balloon-twisting',
  photography: 'photography',
  work: 'work',
  about: 'about',
  journal: 'journal',
  faq: 'faq',
  contact: 'contact',
};
