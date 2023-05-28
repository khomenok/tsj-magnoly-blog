import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://тсжмагнолия.рф',
  integrations: [mdx(), sitemap(), robotsTxt()],
  output: "server",
  adapter: vercel()
});