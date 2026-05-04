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
    eyebrow: z.string().optional(),
    template: z.enum(['default', 'feature', 'narrow']).default('default'),
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
        href: z.string().optional(),
        page: z.string().optional(),
      }),
    ),
    design: z.object({
      accent: z.string(),
      accent_soft: z.string(),
      text: z.string(),
      muted: z.string(),
      page_bg_start: z.string(),
      page_bg_end: z.string(),
      panel_bg: z.string(),
      panel_strong_bg: z.string(),
      border: z.string(),
      glow_left: z.string(),
      glow_right: z.string(),
      max_width: z.string(),
      card_radius: z.string(),
      card_padding: z.string(),
      panel_padding: z.string(),
    }),
  }),
});

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: '**/*.yml' }),
  schema: z.object({
    seo_title: z.string(),
    description: z.string(),
    section_order: z.array(z.enum(['hero', 'features', 'latest'])).default(['hero', 'features', 'latest']),
    eyebrow: z.string(),
    headline: z.string(),
    intro: z.string(),
    primary_cta_label: z.string(),
    primary_cta_href: z.string(),
    secondary_cta_label: z.string(),
    secondary_cta_href: z.string(),
    feature_section_eyebrow: z.string(),
    feature_section_title: z.string(),
    feature_cards: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
    latest_section_eyebrow: z.string(),
    latest_section_title: z.string(),
    layout: z.object({
      hero_columns: z.string(),
      feature_columns: z.number().int().min(1).max(4),
      latest_columns: z.number().int().min(1).max(4),
      card_min_height: z.string(),
    }),
    backgrounds: z.object({
      hero_section: z.string(),
      features_section: z.string(),
      latest_section: z.string(),
      feature_cards: z.string(),
    }),
  }),
});

export const collections = { devlog, pages, settings, home };
