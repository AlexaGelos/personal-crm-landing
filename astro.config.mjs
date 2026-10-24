import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Full addresses for the link preview (og:url, og:image)
  site: "https://crmgelos.ru",
  vite: {
    plugins: [tailwindcss()],
  },
});
