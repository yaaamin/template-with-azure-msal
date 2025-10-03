//path: /api/proxy/[...slug]

import { defineEventHandler, proxyRequest, getQuery } from "h3";

const baseUrl = import.meta.env.BASE_URL;

export default defineEventHandler(async (event) => {
  let slug = event.context.params?.slug;

  // normalize slug -> always string
  const subpath = Array.isArray(slug) ? slug.join("/") : slug || "";

  // base target url
  let target = `https://base.ithaa.org/api/database/${subpath}`;
  if (!target.endsWith("/")) {
    target += "/";
  }

  // read query params from request
  const query = getQuery(event);

  // append them to target
  const search = new URLSearchParams(
    query as Record<string, string>
  ).toString();
  if (search) {
    target += `?${search}`;
  }

  return await proxyRequest(event, target, {
    headers: {
      Authorization: `Token ${process.env.BASEROW_TOKEN}`,
    },
  });
});

// export default defineEventHandler(async (event) => {
//   const slug = (event.context.params?.slug as string[]) || [];

//   // join path segments correctly
//   const subpath = slug.join("/");

//   // ensure trailing slash
//   const target = `https://xxx.org/api/database/${subpath}/`;

//   return await proxyRequest(event, target, {
//     headers: {
//       Authorization: `Token ${process.env.BASEROW_TOKEN}`,
//     },
//   });
// });
