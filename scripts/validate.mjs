// Offline validation of data/*. Run before every commit: node scripts/validate.mjs
// CI also runs `node scripts/build.mjs --check` to make sure generated files are up to date.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadAll, validateData, counts } from "./lib.mjs";

let data;
try {
  data = loadAll();
} catch (err) {
  console.error(`✗ ${err.message}`);
  process.exit(1);
}
const errors = validateData(data);

// The skill must follow the Agent Skills format.
{
  const file = join(ROOT, "skills", "citation-needed", "SKILL.md");
  if (!existsSync(file)) errors.push("skills/citation-needed/SKILL.md is missing");
  else {
    const text = readFileSync(file, "utf8");
    const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (!fm) errors.push("SKILL.md: missing frontmatter");
    else {
      const get = (k) => (fm[1].match(new RegExp(`^${k}: (.*)$`, "m")) || [])[1];
      const name = get("name"), description = get("description");
      if (name !== "citation-needed") errors.push('SKILL.md: name must be "citation-needed"');
      if (!description) errors.push("SKILL.md: description is required");
      else {
        if (description.length > 1024) errors.push(`SKILL.md: description is ${description.length} characters (max 1024)`);
        if (/:\s/.test(description)) errors.push('SKILL.md: description contains ": ", which breaks unquoted YAML');
      }
      if (!get("license")) errors.push("SKILL.md: license is required");
      if (!/^\s+version: /m.test(fm[1])) errors.push("SKILL.md: metadata.version is required");
    }
    if (text.split("\n").length > 500) errors.push("SKILL.md: keep it under 500 lines");
  }
}
if (errors.length) {
  console.error(`✗ ${errors.length} problem${errors.length === 1 ? "" : "s"}:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
const c = counts(data.claims);
console.log(
  `✓ ${c.total} claims, ${Object.keys(data.sources).length} sources, ${data.topics.length} topics. ` +
    `Grades A/B/C: ${c.grade.A}/${c.grade.B}/${c.grade.C}. ` +
    `Verdicts: ${c.verdict.supported} supported, ${c.verdict.mixed} mixed, ${c.verdict.unsupported} not supported, ${c.verdict.unknown} unknown.`,
);
