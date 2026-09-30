// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tobytoki.hk',
  trailingSlash: 'never',
  // Allow temporary preview tunnels (e.g. trycloudflare) without blocking Host.
  vite: {
    preview: {
      allowedHosts: true,
    },
  },
  integrations: [
    sitemap({
      filter(page) {
        return !page.includes('/404');
      },
      i18n: {
        defaultLocale: 'zh-HK',
        locales: {
          'zh-HK': 'zh-HK',
          'en-HK': 'en-HK',
        },
      },
      serialize(item) {
        const base = 'https://tobytoki.hk';
        const isEn = item.url === `${base}/en` || item.url.startsWith(`${base}/en/`);
        const zhUrl = isEn
          ? item.url === `${base}/en`
            ? `${base}/`
            : item.url.replace(`${base}/en/`, `${base}/`)
          : item.url;
        const enUrl = isEn
          ? item.url
          : item.url === `${base}/`
            ? `${base}/en`
            : item.url.replace(base, `${base}/en`);

        item.links = [
          { url: zhUrl, lang: 'zh-HK' },
          { url: enUrl, lang: 'en-HK' },
        ];
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
