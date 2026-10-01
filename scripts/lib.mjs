// Shared data loading and validation. No dependencies.
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const REPO = "MbappeWU/citation-needed";
export const LANGS = ["en", "zh"];
export const VERDICTS = ["supported", "mixed", "unsupported", "unknown"];
export const GRADES = ["A", "B", "C"];
export const VERIFY_MODES = ["abstract", "metadata", "manual"];
export const SOURCE_KINDS = ["paper", "preprint", "report", "book", "dataset", "article"];
export const ROLES = ["primary", "replication", "critique", "context"];

export const LABELS = {
  verdict: {
    supported: { en: "Supported", zh: "成立", icon: "✓" },
    mixed: { en: "It depends", zh: "视情况", icon: "~" },
    unsupported: { en: "Not supported", zh: "不成立", icon: "✗" },
    unknown: { en: "Unknown", zh: "证据不足", icon: "?" },
  },
  grade: {
    A: { en: "A: strong evidence", zh: "A：证据充分" },
    B: { en: "B: moderate evidence", zh: "B：证据一般" },
    C: { en: "C: weak evidence", zh: "C：证据薄弱" },
  },
  role: {
    primary: { en: "Primary", zh: "主要来源" },
    replication: { en: "Replication", zh: "复现" },
    critique: { en: "Critique", zh: "质疑" },
    context: { en: "Context", zh: "背景" },
  },
  verify: {
    abstract: { en: "metadata compared and registered quote snippets matched in the abstract", zh: "元数据已比对，登记的引文片段已在摘要中匹配" },
    metadata: { en: "metadata checked (title, authors, year)", zh: "元数据已核对（标题、作者、年份）" },
    manual: { en: "not machine-checkable (book or report); link only", zh: "无法机器核对（书或报告），仅提供链接" },
  },
};

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    throw new Error(`${path}: ${err.message}`);
  }
}

export function loadTopics() {
  return readJson(join(ROOT, "data", "topics.json"));
}

export function loadSources() {
  const dir = join(ROOT, "data", "sources");
  const merged = {};
  const dupes = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) {
    const part = readJson(join(dir, file));
    for (const [id, src] of Object.entries(part)) {
      if (merged[id]) dupes.push(`${file}: duplicate source id "${id}"`);
      merged[id] = { ...src, id, _file: file };
    }
  }
  return { sources: merged, dupes };
}

export function loadClaims() {
  const dir = join(ROOT, "data", "claims");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((file) => ({ ...readJson(join(dir, file)), _file: file }));
}

export function sortClaims(claims, topics) {
  const rank = new Map(topics.map((t, i) => [t.id, i]));
  return [...claims].sort(
    (a, b) => (rank.get(a.topic) ?? 99) - (rank.get(b.topic) ?? 99) || a._file.localeCompare(b._file),
  );
}

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const LIMITS = {
  // [min, max] characters per language
  claim: { en: [15, 140], zh: [6, 70] },
  grade_why: { en: [15, 260], zh: [8, 140] },
  evidence: { en: [80, 760], zh: [40, 420] },
  caveats: { en: [20, 420], zh: [10, 230] },
  boss_line: { en: [20, 320], zh: [10, 170] },
  change_my_mind: { en: [20, 300], zh: [10, 160] },
};

const HOOK_LIMITS = { en: [20, 150], zh: [10, 80] };

export function validateData({ claims, sources, topics, dupes = [] }) {
  const errors = [...dupes];
  const fail = (where, msg) => errors.push(`${where}: ${msg}`);
  const topicIds = new Set(topics.map((t) => t.id));
  const used = new Set();
  const seen = new Set();

  for (const t of topics) {
    for (const key of ["name", "blurb"]) {
      for (const lang of LANGS) if (!t[key]?.[lang]) fail(`topics.json ${t.id}`, `${key}.${lang} missing`);
    }
  }

  for (const [id, s] of Object.entries(sources)) {
    const where = `sources/${s._file} ${id}`;
    if (!ID_RE.test(id)) fail(where, "id must be lowercase kebab-case");
    if (!SOURCE_KINDS.includes(s.kind)) fail(where, `kind must be one of ${SOURCE_KINDS.join(", ")}`);
    for (const f of ["title", "authors"]) if (!s[f] || typeof s[f] !== "string") fail(where, `${f} is required`);
    if (!Number.isInteger(s.year) || s.year < 1900 || s.year > 2100) fail(where, "year must be an integer");
    if (!VERIFY_MODES.includes(s.verify)) fail(where, `verify must be one of ${VERIFY_MODES.join(", ")}`);
    const ids = ["doi", "arxiv", "pmid"].filter((k) => s[k]);
    if (s.verify !== "manual" && ids.length === 0) fail(where, "needs doi, arxiv or pmid unless verify is manual");
    if (s.verify === "manual" && !s.url) fail(where, "manual sources need a url");
    if (s.doi && !/^10\.\d{4,9}\/\S+$/.test(s.doi)) fail(where, "doi looks malformed");
    if (s.arxiv && !/^\d{4}\.\d{4,5}(v\d+)?$/.test(s.arxiv)) fail(where, "arxiv id looks malformed (use 2507.09089)");
    if (s.url && !/^https:\/\//.test(s.url)) fail(where, "url must be https");
  }

  for (const c of claims) {
    const where = `claims/${c._file}`;
    if (c.id !== basename(c._file, ".json")) fail(where, `id "${c.id}" must match the file name`);
    if (!ID_RE.test(c.id || "")) fail(where, "id must be lowercase kebab-case");
    if (seen.has(c.id)) fail(where, "duplicate claim id");
    seen.add(c.id);
    if (!topicIds.has(c.topic)) fail(where, `unknown topic "${c.topic}"`);
    if (c.id && !c.id.startsWith(`${c.topic}-`)) fail(where, `id should start with "${c.topic}-"`);
    if (!VERDICTS.includes(c.verdict)) fail(where, `verdict must be one of ${VERDICTS.join(", ")}`);
    if (!GRADES.includes(c.grade)) fail(where, `grade must be one of ${GRADES.join(", ")}`);
    if (!DATE_RE.test(c.verified_on || "")) fail(where, "verified_on must be YYYY-MM-DD");
    if (c.headline !== undefined && typeof c.headline !== "boolean") fail(where, "headline must be true or false");
    if (c.headline && !c.hook) fail(where, "headline claims need a hook: one line for the table on the front page");
    if (c.hook !== undefined) {
      if (!c.headline) fail(where, "hook is only used when headline is true");
      for (const lang of LANGS) {
        const text = c.hook?.[lang];
        const [min, max] = HOOK_LIMITS[lang];
        if (typeof text !== "string" || text.length < min || text.length > max) fail(where, `hook.${lang} must be ${min} to ${max} characters`);
        else if (/\s{2,}/.test(text) || /^\s|\s$/.test(text)) fail(where, `hook.${lang} has stray whitespace`);
        else if (lang === "en" && /[一-鿿]/.test(text)) fail(where, "hook.en contains Chinese characters");
        else if (lang === "zh" && !/[一-鿿]/.test(text)) fail(where, "hook.zh has no Chinese characters");
      }
    }

    for (const [field, lim] of Object.entries(LIMITS)) {
      for (const lang of LANGS) {
        const text = c[field]?.[lang];
        if (typeof text !== "string" || !text.trim()) {
          fail(where, `${field}.${lang} is required`);
          continue;
        }
        const [min, max] = lim[lang];
        if (text.length < min || text.length > max) {
          fail(where, `${field}.${lang} is ${text.length} characters (allowed ${min} to ${max})`);
        }
        if (/\s{2,}/.test(text) || /^\s|\s$/.test(text)) fail(where, `${field}.${lang} has stray whitespace`);
        if (lang === "en" && /[一-鿿]/.test(text)) fail(where, `${field}.en contains Chinese characters`);
        if (lang === "zh" && !/[一-鿿]/.test(text)) fail(where, `${field}.zh has no Chinese characters`);
      }
    }

    if (!Array.isArray(c.sources) || c.sources.length === 0) {
      fail(where, "at least one source is required");
      continue;
    }
    if (!c.sources.some((r) => r.role === "primary")) fail(where, "needs at least one source with role primary");
    for (const ref of c.sources) {
      const src = sources[ref.id];
      if (!src) {
        fail(where, `unknown source "${ref.id}"`);
        continue;
      }
      used.add(ref.id);
      if (!ROLES.includes(ref.role)) fail(where, `source ${ref.id}: role must be one of ${ROLES.join(", ")}`);
      if (ref.quotes !== undefined) {
        if (!Array.isArray(ref.quotes) || ref.quotes.length === 0) fail(where, `source ${ref.id}: quotes must be a non-empty array`);
        else {
          if (src.verify !== "abstract") fail(where, `source ${ref.id}: quotes need verify "abstract" on the source`);
          for (const q of ref.quotes) if (typeof q !== "string" || q.length < 2 || q.length > 90) fail(where, `source ${ref.id}: quote "${q}" must be 2 to 90 characters`);
        }
      }
    }
  }

  for (const id of Object.keys(sources)) if (!used.has(id)) fail(`sources/${sources[id]._file} ${id}`, "source is never cited by a claim");
  return errors;
}

export function loadAll() {
  const topics = loadTopics();
  const { sources, dupes } = loadSources();
  const claims = sortClaims(loadClaims(), topics);
  return { topics, sources, claims, dupes };
}

export function counts(claims) {
  const out = { total: claims.length, grade: { A: 0, B: 0, C: 0 }, verdict: { supported: 0, mixed: 0, unsupported: 0, unknown: 0 } };
  for (const c of claims) {
    out.grade[c.grade]++;
    out.verdict[c.verdict]++;
  }
  return out;
}

export function sourceCitation(src) {
  const link = src.doi ? `https://doi.org/${src.doi}` : src.arxiv ? `https://arxiv.org/abs/${src.arxiv}` : src.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${src.pmid}/` : src.url;
  return { link, text: `${src.authors} (${src.year}). ${src.title}.${src.venue ? ` ${src.venue}.` : ""}` };
}
