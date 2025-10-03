import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  // This runs only on the server (Cloudflare Worker)
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
  };
});
