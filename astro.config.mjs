// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://sskoduri2011-alt.github.io',
  base: '/devportfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
