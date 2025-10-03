import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import nitro from "@analogjs/vite-plugin-nitro";

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/react-app/routes",
      apiBase: "/api",
    }),
    react(),
    ...(command === "build" ? [cloudflare({
      environments: {
        client: {
          build: {
            outDir: "dist/client",
          },
        },
        worker: {
          build: {
            outDir: "dist/server",
          },
        },
      },
    })] : []),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/react-app"),
    },
  },
}));
