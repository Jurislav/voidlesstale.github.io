import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlog = defineCollection({
  loader: glob({ base: './src/content/devlog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    navLabel: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const settings = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: '**/*.yml' }),
  schema: z.object({
    site_title: z.string(),
    site_tagline: z.string(),
    footer_text: z.string(),
    navigation: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: '**/*.yml' }),
  schema: z.object({
    seo_title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    headline: z.string(),
    intro: z.string(),
    primary_cta_label: z.string(),
    primary_cta_href: z.string(),
    secondary_cta_label: z.string(),
    secondary_cta_href: z.string(),
    feature_section_eyebrow: z.string(),
    feature_cards: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
    latest_section_eyebrow: z.string(),
    latest_section_title: z.string(),
  }),
});

export const collections = { devlog, pages, settings, home };
