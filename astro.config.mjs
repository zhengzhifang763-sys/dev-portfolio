import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site:'https://zhengzhifang763-sys.github.io',
  base:'/dev-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
