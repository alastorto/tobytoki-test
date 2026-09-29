import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../data/site';

export async function getJournalPosts(locale: Locale): Promise<CollectionEntry<'journal'>[]> {
  const posts = await getCollection('journal', ({ data }) => data.locale === locale && !data.draft);
  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function getJournalPost(
  locale: Locale,
  slug: string,
): Promise<CollectionEntry<'journal'> | undefined> {
  const posts = await getJournalPosts(locale);
  return posts.find((post) => post.data.slug === slug);
}
