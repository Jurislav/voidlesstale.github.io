import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlog = defineCollection({
  loader: glob({ base: './src/content/devlog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
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
    tags: z.array(z.string()).optional(),
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
    panels: z.array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('hero'),
          eyebrow: z.string().optional(),
          title: z.string(),
          text: z.string(),
          tags: z.array(z.string()).optional(),
          buttons: z.array(z.object({
            label: z.string(),
            href: z.string(),
            variant: z.enum(['primary', 'ghost']).default('primary'),
          })).optional(),
        }),
        z.object({
          type: z.literal('content'),
          eyebrow: z.string().optional(),
          title: z.string(),
          text: z.string(),
          tags: z.array(z.string()).optional(),
          buttons: z.array(z.object({
            label: z.string(),
            href: z.string(),
            variant: z.enum(['primary', 'ghost']).default('primary'),
          })).optional(),
        }),
        z.object({
          type: z.literal('features'),
          eyebrow: z.string().optional(),
          title: z.string().optional(),
          columns: z.number().int().min(1).max(4).default(3),
          cards: z.array(z.object({ title: z.string(), text: z.string() })),
        }),
        z.object({
          type: z.literal('media'),
          title: z.string(),
          image: z.string().optional(),
          alt: z.string().optional(),
          label: z.string().optional(),
        }),
        z.object({
          type: z.literal('devlog'),
          eyebrow: z.string().optional(),
          title: z.string(),
          post_count: z.number().int().min(1).max(12).default(3),
          columns: z.number().int().min(1).max(4).default(2),
        }),
        z.object({
          type: z.literal('cta'),
          eyebrow: z.string().optional(),
          title: z.string(),
          text: z.string(),
          tags: z.array(z.string()).optional(),
          buttons: z.array(z.object({
            label: z.string(),
            href: z.string(),
            variant: z.enum(['primary', 'ghost']).default('primary'),
          })).optional(),
        }),
      ]),
    ).default([]),
  }),
});

const site = defineCollection({
  loader: glob({ base: './src/content/site', pattern: '**/*.yml' }),
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    primary_cta_label: z.string(),
    primary_cta_href: z.string(),
    media_label: z.string(),
    feature_cards: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
  }),
});

const smithSidebar = defineCollection({
  loader: glob({ base: './src/content/smith-sidebar', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { devlog, pages, settings, home, site, smithSidebar };
