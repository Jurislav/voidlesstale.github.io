import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.voidlesstale.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
