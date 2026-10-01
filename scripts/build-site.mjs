// Builds the web reader into _site/ (GitHub Pages) as one self-contained HTML file.
// Usage: node scripts/build-site.mjs
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { LABELS, REPO, ROOT, counts, loadAll, sourceCitation, validateData } from "./lib.mjs";

export function readerData() {
  const data = loadAll();
  const errors = validateData(data);
  if (errors.length) throw new Error(`data/ is invalid:\n${errors.join("\n")}`);
  const sources = {};
  for (const [id, s] of Object.entries(data.sources)) {
    const { _file, ...rest } = s;
    sources[id] = { ...rest, link: sourceCitation(s).link };
  }
  const claims = data.claims.map(({ _file, ...c }) => c);
  return { repo: REPO, topics: data.topics, claims, sources, labels: LABELS, counts: counts(claims) };
}

export function renderReader() {
  const template = readFileSync(join(ROOT, "site", "template.html"), "utf8");
  // JSON inside a <script> tag: neutralise anything that could end the tag or break the parser.
  const LS = String.fromCharCode(0x2028), PS = String.fromCharCode(0x2029);
  const json = JSON.stringify(readerData())
    .replace(/</g, "\\u003c")
    .split(LS).join("\\u2028")
    .split(PS).join("\\u2029");
  return template.replace("__DATA__", () => json);
}

function main() {
  const out = join(ROOT, "_site");
  mkdirSync(out, { recursive: true });
  const html = renderReader();
  writeFileSync(join(out, "index.html"), html);
  writeFileSync(join(out, "reader.html"), html);
  writeFileSync(join(out, "claims.json"), JSON.stringify(readerData(), null, 2));
  for (const f of ["social-card.png", "favicon.svg"]) {
    const src = join(ROOT, "assets", f);
    if (existsSync(src)) copyFileSync(src, join(out, f));
  }
  console.log(`built _site/index.html (${(html.length / 1024).toFixed(0)} KB)`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
