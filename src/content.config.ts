import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/journal',
    // Keep locale folder in the entry id so zh/en files can share URL slugs.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['face-painting', 'balloon-art', 'photography', 'booking', 'general']),
    locale: z.enum(['zh', 'en']),
    slug: z.string(),
    heroLabel: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
