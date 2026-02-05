// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixil.ca',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/estimates/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate chunks for better caching
            vendor: ['astro'],
          },
        },
      },
    },
  },
});
