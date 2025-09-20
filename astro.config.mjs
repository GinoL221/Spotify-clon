import { defineConfig } from "astro/config";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";


export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@/components": path.resolve("./src/components"),
        "@/hooks": path.resolve("./src/hooks"),
        "@/icons": path.resolve("./src/icons"),
        "@/lib": path.resolve("./src/lib"),
        "@/services": path.resolve("./src/services"),
      },
    },
  },
  integrations: [svelte(), react()],
  output: "server",
  adapter: netlify({}),
});
