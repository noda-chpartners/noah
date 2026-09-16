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
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/\/+$/, "") || "/";

        if (pathname === "/") {
          return { ...item, priority: 1, changefreq: "weekly" };
        }

        if (pathname === "/recruit") {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }

        return { ...item, priority: 0.7, changefreq: "monthly" };
      },
    }),
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
