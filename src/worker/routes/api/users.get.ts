import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  // This runs only on the server (Cloudflare Worker)
  return {
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
  };
});
