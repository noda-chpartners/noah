// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        'simple-icons': ['instagram', 'line'],
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
