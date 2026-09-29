import type { Locale } from './site';

export type FaqCategory = 'face-painting' | 'balloon-art' | 'photography' | 'booking';

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
};

export const faqItems: FaqItem[] = [
  {
    id: 'fp-age',
    category: 'face-painting',
    question: {
      zh: '小朋友多大可以做面部彩繪？',
      en: 'What age is suitable for face painting?',
    },
    answer: {
      zh: '正式建議稍後確認。一般會視乎孩子的舒適度與活動安排。',
      en: 'Confirmed guidance coming later. Comfort and event flow usually matter most.',
    },
  },
  {
    id: 'fp-duration',
    category: 'face-painting',
    question: {
      zh: '一個造型大概需要多少時間？',
      en: 'How long does one design usually take?',
    },
    answer: {
      zh: '視乎複雜度而定。正式時間範圍稍後提供。',
      en: 'Depends on complexity. Detailed timing will be confirmed later.',
    },
  },
  {
    id: 'ba-styles',
    category: 'balloon-art',
    question: {
      zh: '氣球藝術可以做甚麼造型？',
      en: 'What kinds of balloon designs are possible?',
    },
    answer: {
      zh: '可預留角色、花束與簡單造型等方向。正式款式表稍後整理。',
      en: 'Characters, bouquets and simple forms are likely directions. A full style list comes later.',
    },
  },
  {
    id: 'ba-vs-fp',
    category: 'balloon-art',
    question: {
      zh: '應該選擇面部彩繪還是扭氣球？',
      en: 'Should we choose face painting or balloon twisting?',
    },
    answer: {
      zh: '視乎活動氣氛、人數與小朋友年齡。亦可兩者配合。詳情可於查詢時再談。',
      en: 'It depends on vibe, guest count and ages. Both can also work together — discuss when booking.',
    },
  },
  {
    id: 'ph-types',
    category: 'photography',
    question: {
      zh: '攝影服務包括哪些場合？',
      en: 'What photography occasions are covered?',
    },
    answer: {
      zh: '預留方向：兒童派對、活動攝影、家庭相。正式方案稍後確認。',
      en: 'Placeholder directions: kids parties, events, family photos. Packages later.',
    },
  },
  {
    id: 'bk-lead',
    category: 'booking',
    question: {
      zh: '需要提早多久預約？',
      en: 'How far ahead should we book?',
    },
    answer: {
      zh: '建議盡早查詢檔期。正式建議時長稍後確認。',
      en: 'Enquire early for availability. Recommended lead time to be confirmed.',
    },
  },
  {
    id: 'bk-info',
    category: 'booking',
    question: {
      zh: '查詢時需要提供甚麼資料？',
      en: 'What details should I share when enquiring?',
    },
    answer: {
      zh: '活動類型、日期、地點、大約人數，以及想要的服務（面部彩繪／氣球藝術／攝影）。',
      en: 'Event type, date, location, approximate guests, and the service you need.',
    },
  },
];

export const faqCategories: { id: FaqCategory; label: Record<Locale, string> }[] = [
  { id: 'face-painting', label: { zh: '面部彩繪', en: 'Face painting' } },
  { id: 'balloon-art', label: { zh: '氣球藝術', en: 'Balloon art' } },
  { id: 'photography', label: { zh: '攝影', en: 'Photography' } },
  { id: 'booking', label: { zh: '預約／活動', en: 'Booking / event' } },
];
