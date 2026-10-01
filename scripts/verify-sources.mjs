// Looks every source up online and checks it against what the data says.
//   - doi:   Crossref (title, authors, year), OpenAlex / Europe PMC / Semantic Scholar for the abstract
//   - arxiv: the arXiv API (title, authors, year, abstract)
//   - pmid:  Europe PMC
//   - manual: the link must load
// A source whose verify mode is "abstract" must also contain every quoted string in its abstract.
// Exit code 1 means a real mismatch. Network trouble is reported as a warning, never a failure.
//
// Usage: node scripts/verify-sources.mjs [--only id,id] [--json report.json]
import { appendFileSync, writeFileSync } from "node:fs";
import { loadAll } from "./lib.mjs";

const CONTACT = process.env.CONTACT_EMAIL || "citation-needed@users.noreply.github.com";
const UA = `citation-needed/0.1 (https://github.com/MbappeWU/citation-needed; mailto:${CONTACT})`;
const args = process.argv.slice(2);
const only = args.includes("--only") ? new Set(args[args.indexOf("--only") + 1].split(",")) : null;
const jsonOut = args.includes("--json") ? args[args.indexOf("--json") + 1] : null;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, { json = true, text = false } = {}) {
  let last;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, Accept: json ? "application/json" : "*/*" }, signal: AbortSignal.timeout(25000), redirect: "follow" });
      if (res.status === 429 || res.status >= 500) {
        last = new Error(`HTTP ${res.status}`);
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if (!res.ok) return { status: res.status, body: null };
      return { status: res.status, body: text ? await res.text() : json ? await res.json() : null };
    } catch (err) {
      last = err;
      await sleep(1500 * (attempt + 1));
    }
  }
  return { status: 0, error: String(last), body: null };
}

const norm = (s) =>
  String(s || "")
    .normalize("NFKD")
    .replace(/<[^>]+>/g, " ")
    .replace(/[‐-―−]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[   ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
const words = (s) => norm(s).replace(/[^a-z0-9一-鿿 ]+/g, " ").split(" ").filter(Boolean);

function titleScore(a, b) {
  const A = new Set(words(a)), B = new Set(words(b));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / Math.min(A.size, B.size);
}

const lastName = (authors) => {
  const first = String(authors).split(/,| and | & /)[0].trim();
  const parts = first.split(/\s+/);
  return norm(parts[parts.length - 1]);
};

function reconstructAbstract(inv) {
  if (!inv) return "";
  const out = [];
  for (const [word, positions] of Object.entries(inv)) for (const p of positions) out[p] = word;
  return out.join(" ");
}

async function lookupDoi(doi) {
  const out = { meta: null, abstract: "", notes: [] };
  const cr = await get(`https://api.crossref.org/works/${encodeURI(doi)}`);
  if (cr.status === 404) { out.notes.push("DOI not found at Crossref"); out.notFound = true; }
  else if (!cr.body) out.notes.push(`Crossref unreachable (${cr.status || cr.error})`);
  else {
    const m = cr.body.message;
    out.meta = {
      title: (m.title && m.title[0]) || "",
      year: (m.issued && m.issued["date-parts"] && m.issued["date-parts"][0] && m.issued["date-parts"][0][0]) || (m["published-print"]?.["date-parts"]?.[0]?.[0]) || (m["published-online"]?.["date-parts"]?.[0]?.[0]),
      authors: (m.author || []).map((a) => `${a.given || ""} ${a.family || a.name || ""}`.trim()),
      venue: (m["container-title"] && m["container-title"][0]) || "",
    };
    if (m.abstract) out.abstract = norm(m.abstract);
  }
  if (!out.abstract) {
    const oa = await get(`https://api.openalex.org/works/https://doi.org/${encodeURI(doi)}?mailto=${encodeURIComponent(CONTACT)}`);
    if (oa.body) {
      out.abstract = norm(reconstructAbstract(oa.body.abstract_inverted_index));
      if (!out.meta && oa.body.title) {
        out.meta = { title: oa.body.title, year: oa.body.publication_year, authors: (oa.body.authorships || []).map((a) => a.author?.display_name || ""), venue: "" };
      }
    }
  }
  if (!out.abstract) {
    const ep = await get(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%22${encodeURIComponent(doi)}%22&format=json&resultType=core`);
    const r = ep.body?.resultList?.result?.[0];
    if (r?.abstractText) out.abstract = norm(r.abstractText);
    if (!out.meta && r) out.meta = { title: r.title || "", year: Number(r.pubYear), authors: String(r.authorString || "").split(", "), venue: r.journalTitle || "" };
  }
  if (!out.abstract) {
    const ss = await get(`https://api.semanticscholar.org/graph/v1/paper/DOI:${encodeURI(doi)}?fields=title,year,abstract,authors`);
    if (ss.body?.abstract) out.abstract = norm(ss.body.abstract);
    if (!out.meta && ss.body?.title) out.meta = { title: ss.body.title, year: ss.body.year, authors: (ss.body.authors || []).map((a) => a.name), venue: "" };
  }
  return out;
}

async function lookupArxiv(id) {
  const res = await get(`https://export.arxiv.org/api/query?id_list=${encodeURIComponent(id)}`, { json: false, text: true });
  const out = { meta: null, abstract: "", notes: [] };
  if (!res.body) { out.notes.push(`arXiv unreachable (${res.status || res.error})`); return out; }
  const entry = res.body.split("<entry>")[1];
  if (!entry || /<title>Error<\/title>/.test(entry)) { out.notes.push("arXiv id not found"); out.notFound = true; return out; }
  const pick = (tag) => (entry.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)) || [])[1] || "";
  out.meta = {
    title: pick("title").replace(/\s+/g, " ").trim(),
    year: Number((pick("published").match(/^(\d{4})/) || [])[1]),
    authors: [...entry.matchAll(/<name>([\s\S]*?)<\/name>/g)].map((m) => m[1].trim()),
    venue: "arXiv",
  };
  out.abstract = norm(pick("summary"));
  return out;
}

async function lookupPmid(pmid) {
  const res = await get(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:${encodeURIComponent(pmid)}%20AND%20SRC:MED&format=json&resultType=core`);
  const out = { meta: null, abstract: "", notes: [] };
  const r = res.body?.resultList?.result?.[0];
  if (!res.body) { out.notes.push(`Europe PMC unreachable (${res.status || res.error})`); return out; }
  if (!r) { out.notes.push("PMID not found"); out.notFound = true; return out; }
  out.meta = { title: r.title || "", year: Number(r.pubYear), authors: String(r.authorString || "").split(", "), venue: r.journalTitle || "" };
  out.abstract = norm(r.abstractText || "");
  return out;
}

async function suggestByTitle(title) {
  const res = await get(`https://api.crossref.org/works?query.bibliographic=${encodeURIComponent(title)}&rows=3&select=DOI,title,issued,author`);
  return (res.body?.message?.items || []).map((i) => `${i.DOI} | ${(i.title && i.title[0]) || ""} | ${i.issued?.["date-parts"]?.[0]?.[0] || "?"} | ${(i.author || []).slice(0, 2).map((a) => a.family).join(", ")}`);
}

async function checkSource(src, claimsUsing) {
  const r = { id: src.id, verify: src.verify, status: "ok", problems: [], warnings: [], quotes: 0 };
  if (src.verify === "manual") {
    const res = await get(src.url, { json: false, text: false });
    if (res.status === 0) r.warnings.push(`link unreachable (${res.error})`);
    else if (res.status === 403 || res.status === 429 || res.status === 999) r.warnings.push(`link answered HTTP ${res.status} (bot protection?)`);
    else if (res.status >= 400) r.problems.push(`link returns HTTP ${res.status}: ${src.url}`);
    return finish(r);
  }

  let info;
  if (src.doi) info = await lookupDoi(src.doi);
  else if (src.arxiv) info = await lookupArxiv(src.arxiv);
  else info = await lookupPmid(src.pmid);

  r.warnings.push(...info.notes.filter((n) => /unreachable/.test(n)));
  if (info.notFound) r.problems.push(info.notes.join("; "));
  if (!info.meta) {
    if (!info.notFound && !r.warnings.length) r.warnings.push("no metadata available");
    if (info.notFound && src.doi) {
      const sugg = await suggestByTitle(src.title);
      if (sugg.length) r.problems.push(`closest Crossref matches for the title:\n      ${sugg.join("\n      ")}`);
    }
    return finish(r);
  }

  const ts = titleScore(src.title, info.meta.title);
  if (ts < 0.6) {
    r.problems.push(`title mismatch (score ${ts.toFixed(2)}): data says "${src.title}", registry says "${info.meta.title}"`);
    if (src.doi) {
      const sugg = await suggestByTitle(src.title);
      if (sugg.length) r.problems.push(`closest Crossref matches for the title:\n      ${sugg.join("\n      ")}`);
    }
  }
  if (info.meta.year && Math.abs(info.meta.year - src.year) > 1) r.problems.push(`year mismatch: data says ${src.year}, registry says ${info.meta.year}`);
  if (info.meta.authors.length) {
    const ln = lastName(src.authors);
    if (ln && !info.meta.authors.some((a) => norm(a).includes(ln))) r.problems.push(`first author "${src.authors.split(",")[0]}" not found among registry authors: ${info.meta.authors.slice(0, 6).join(", ")}`);
  }

  if (src.verify === "abstract") {
    const quotes = claimsUsing.flatMap((c) => c.sources.filter((s) => s.id === src.id).flatMap((s) => s.quotes || []));
    r.quotes = quotes.length;
    if (!info.abstract) {
      r.problems.push("verify is \"abstract\" but no abstract could be retrieved; change verify to \"metadata\" or drop the quotes");
    } else {
      for (const q of quotes) {
        if (!info.abstract.includes(norm(q))) {
          const needle = norm(q).replace(/[^0-9a-z%.]+/g, "");
          const hint = needle ? (info.abstract.match(new RegExp(`.{0,60}${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}.{0,60}`)) || [])[0] : null;
          r.problems.push(`quote "${q}" not found in the abstract${hint ? ` (near: "...${hint}...")` : ""}\n      abstract starts: "${info.abstract.slice(0, 700)}"`);
        }
      }
    }
  }
  return finish(r);
}

function finish(r) {
  if (r.problems.length) r.status = "fail";
  else if (r.warnings.length) r.status = "warn";
  return r;
}

async function main() {
  const { sources, claims } = loadAll();
  const ids = Object.keys(sources).filter((id) => !only || only.has(id));
  const results = [];
  for (const id of ids) {
    const src = sources[id];
    const using = claims.filter((c) => c.sources.some((s) => s.id === id));
    const r = await checkSource(src, using);
    results.push(r);
    const icon = r.status === "ok" ? "✓" : r.status === "warn" ? "!" : "✗";
    console.log(`${icon} ${id} (${src.verify}${r.quotes ? `, ${r.quotes} quote${r.quotes > 1 ? "s" : ""}` : ""})`);
    for (const p of r.problems) console.log(`    - ${p}`);
    for (const w of r.warnings) console.log(`    ~ ${w}`);
    await sleep(250);
  }
  const fail = results.filter((r) => r.status === "fail"), warn = results.filter((r) => r.status === "warn");
  const summary = `${results.length - fail.length - warn.length} verified, ${warn.length} warning${warn.length === 1 ? "" : "s"}, ${fail.length} failed`;
  console.log(`\n${summary}`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const rows = results.map((r) => `| ${r.status === "ok" ? "✅" : r.status === "warn" ? "⚠️" : "❌"} | \`${r.id}\` | ${r.verify} | ${[...r.problems, ...r.warnings].join("<br>").replace(/\n/g, "<br>").replace(/\|/g, "\\|") || ""} |`);
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Source verification\n\n${summary}\n\n| | Source | Mode | Notes |\n|---|---|---|---|\n${rows.join("\n")}\n`);
  }
  if (jsonOut) writeFileSync(jsonOut, JSON.stringify({ generated: new Date().toISOString(), summary, results }, null, 2));
  process.exit(fail.length ? 1 : 0);
}

main();
