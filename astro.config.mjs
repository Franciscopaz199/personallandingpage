// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
     site: 'https://orocuina.com',
  // site: 'https://Franciscopaz199.github.io', 
  // base: 'personallandingpage',
  vite: {
    plugins: [tailwindcss()]
  }
});
