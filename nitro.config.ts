import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  srcDir: "./src/worker",
  preset: "cloudflare-pages",
  output: {
    dir: "./dist/server",
  },
  // Ensure API routes only - no SSR
  routeRules: {
    "/api/**": { cors: true },
    "/**": { static: true },
  },
  experimental: {
    wasm: true,
  },
  compatibilityDate: "2024-01-01",
});
