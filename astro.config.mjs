// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/constants/url.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    icon({
      include: {
        'simple-icons': ['instagram', 'line'],
      },
    }),
    sitemap(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/index" as *;`
        }
      }
    }
  }
});
