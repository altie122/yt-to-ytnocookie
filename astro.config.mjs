import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://yt-to-ytnocookie.dovahkiin.xyz",
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: cloudflare()
});