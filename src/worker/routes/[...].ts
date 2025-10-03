export default defineEventHandler(async (event) => {
  const url = getRouterParam(event, "_") || "";

  // If it's an API route, let it 404 normally
  if (url.startsWith("api/")) {
    throw createError({
      statusCode: 404,
      statusMessage: `API route not found: /${url}`,
    });
  }

  // For all non-API routes, serve the SPA
  return await event.context.cloudflare.env.ASSETS.fetch(
    new Request("https://example.com/", {
      method: "GET",
      headers: event.node.req.headers as any,
    })
  );
});
