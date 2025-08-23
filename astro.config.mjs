import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.voidlesstale.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
});
