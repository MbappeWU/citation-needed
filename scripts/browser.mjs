// Finds Playwright wherever it is installed. Used by the PDF book and by the asset scripts.
import { createRequire } from "node:module";

export async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    const require = createRequire(import.meta.url);
    for (const p of ["/opt/node22/lib/node_modules/playwright", "playwright"]) {
      try {
        return require(p);
      } catch {
        /* try the next location */
      }
    }
    throw new Error("playwright is not installed (npm i --no-save playwright && npx playwright install chromium)");
  }
}
