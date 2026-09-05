import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//
// GitHub Pages project sites are served from a subpath, e.g.
// https://<user>.github.io/coach-gideon/ — so every built asset URL
// needs that subpath prefixed. `base` below does that.
//
// If you ever rename the repo, or move to a custom domain / a
// "<user>.github.io" *user* site (served from the root), update
// (or remove) BASE_PATH to match.
const BASE_PATH = "/coach-gideon/";

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
