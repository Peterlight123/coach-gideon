// GitHub Pages has no server-side rewrites, so a direct visit or refresh on
// a client-side route (e.g. /coach-gideon/about) returns a real 404 — there
// is no actual file at that path. The standard workaround: give GitHub
// Pages a literal 404.html that's just a copy of index.html. GitHub Pages
// serves it for any unknown path, the app boots as normal, and React
// Router then reads the URL and renders the right page.
import { copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const from = "dist/index.html";
const to = "dist/404.html";

if (!existsSync(from)) {
  console.error(`[copy-404] ${from} not found — did the build run first?`);
  process.exit(1);
}

await copyFile(from, to);
console.log(`[copy-404] Copied ${from} -> ${to}`);
