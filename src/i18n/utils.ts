import {
  defaultLocale,
  locales,
  pagePaths,
  siteConfig,
  type Locale,
  type PageKey,
} from '../data/site';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (locale === defaultLocale) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/en/${clean}` : '/en';
}

export function pageHref(locale: Locale, page: PageKey): string {
  return localizePath(locale, pagePaths[page]);
}

export function switchLocalePath(currentLocale: Locale, targetLocale: Locale, pathname: string): string {
  let path = pathname.replace(/\/$/, '') || '/';

  if (path === '/en' || path.startsWith('/en/')) {
    path = path === '/en' ? '/' : path.slice(3) || '/';
  }

  const clean = path === '/' ? '' : path.replace(/^\//, '');
  return localizePath(targetLocale, clean);
}

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybe] = url.pathname.split('/');
  return isLocale(maybe) && maybe === 'en' ? 'en' : defaultLocale;
}
