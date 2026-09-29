// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tobytoki.hk',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-HK',
        locales: {
          'zh-HK': 'zh-HK',
          'en-HK': 'en-HK',
        },
      },
      serialize(item) {
        // Map /en/* paths to en-HK; root paths to zh-HK
        const isEn = item.url.includes('/en/') || item.url.endsWith('/en');
        item.links = [
          {
            url: item.url,
            lang: isEn ? 'en-HK' : 'zh-HK',
          },
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
