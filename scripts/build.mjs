// Generates README.md, README.zh-CN.md, chapters/* and the skill's claim index from data/.
// Usage: node scripts/build.mjs          write the files
//        node scripts/build.mjs --check  fail if any generated file is out of date
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { ROOT, loadAll, validateData } from "./lib.mjs";
import { chapterFile, renderChapter, renderReadme, renderSkillIndex } from "./render.mjs";

export function generate() {
  const data = loadAll();
  const errors = validateData(data);
  if (errors.length) throw new Error(`data/ is invalid, run node scripts/validate.mjs\n${errors.join("\n")}`);
  const { topics, claims, sources } = data;
  const files = new Map();
  files.set("README.md", renderReadme(data, "en"));
  files.set("README.zh-CN.md", renderReadme(data, "zh"));
  for (const t of topics) {
    if (!claims.some((c) => c.topic === t.id)) continue;
    for (const lang of ["en", "zh"]) files.set(chapterFile(topics, t.id, lang), renderChapter(t, topics, claims, sources, lang));
  }
  files.set("skills/citation-needed/references/claims.md", renderSkillIndex(data));
  return files;
}

function main() {
  const check = process.argv.includes("--check");
  const files = generate();
  const stale = [];
  for (const [rel, text] of files) {
    const abs = join(ROOT, rel);
    const current = existsSync(abs) ? readFileSync(abs, "utf8") : null;
    if (current === text) continue;
    stale.push(rel);
    if (!check) {
      mkdirSync(dirname(abs), { recursive: true });
      writeFileSync(abs, text);
    }
  }
  // Remove chapter files that no longer correspond to a topic.
  const chapterDir = join(ROOT, "chapters");
  if (existsSync(chapterDir)) {
    for (const f of readdirSync(chapterDir)) {
      if (!files.has(`chapters/${f}`)) {
        stale.push(`chapters/${f} (orphan)`);
        if (!check) unlinkSync(join(chapterDir, f));
      }
    }
  }
  if (check) {
    if (stale.length) {
      console.error(`✗ generated files are out of date: ${stale.join(", ")}\n  run: node scripts/build.mjs`);
      process.exit(1);
    }
    console.log(`✓ ${files.size} generated files are up to date`);
  } else {
    console.log(stale.length ? `wrote ${stale.length} file(s): ${stale.join(", ")}` : "nothing to update");
  }
}

main();
