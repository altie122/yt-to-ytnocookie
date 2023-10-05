import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://yt-to-ytnocookie.dovahkiin.xyz",
  integrations: [tailwind(), sitemap(), prefetch()],
});