// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Update to the real deploy URL (affects canonical + Open Graph tags).
  site: "https://links.mehedi-hasan.me",
  vite: {
    plugins: [tailwindcss()],
  },
});
