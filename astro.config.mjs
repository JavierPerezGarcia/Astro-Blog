// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
      build: {
          charset: 'utf-8',
      },
  },

  site: "https://galeos-astro-blog.netlify.app/",
  integrations: [preact()]
});