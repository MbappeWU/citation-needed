// Renders the whole handbook as a print-ready HTML book, then (with Playwright) as a PDF.
// Usage: node scripts/build-book.mjs            write _site/book.en.html and book.zh-CN.html
//        node scripts/build-book.mjs --pdf      also write dist/citation-needed-en.pdf and dist/citation-needed-zh-CN.pdf
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { LABELS, REPO, ROOT, counts } from "./lib.mjs";
import { readerData } from "./build-site.mjs";

const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m]);

const CSS = `
  @page { size: A4; margin: 20mm 18mm 22mm; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #16181d; font: 10.5pt/1.55 "Iowan Old Style", "Palatino Linotype", Palatino, "Noto Serif CJK SC", "Source Han Serif SC", "Songti SC", Georgia, serif; }
  h1, h2, h3, .mono { font-family: system-ui, -apple-system, "Segoe UI", "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif; }
  .cover { height: 250mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; border-left: 5mm solid #2456c8; padding-left: 12mm; }
  .cover h1 { font: 700 44pt/1.05 Georgia, "Noto Serif CJK SC", serif; margin: 0; letter-spacing: -.02em; }
  .cover h1 sup { font: 500 .42em/1 ui-monospace, Menlo, monospace; color: #2456c8; }
  .cover .sub { font-size: 16pt; color: #5a606b; margin: 8mm 0 0; max-width: 130mm; }
  .cover .meta { margin-top: 14mm; font: 9.5pt/1.6 ui-monospace, Menlo, Consolas, monospace; color: #5a606b; }
  .how { page-break-after: always; }
  h2.chapter { font-size: 20pt; margin: 0 0 2mm; padding-top: 2mm; border-top: 1.2pt solid #16181d; page-break-before: always; }
  h2.chapter + p { color: #5a606b; margin: 0 0 6mm; }
  .claim { page-break-inside: avoid; margin: 0 0 8mm; padding-bottom: 5mm; border-bottom: .6pt solid #dcd9ce; }
  .claim h3 { font-size: 13pt; line-height: 1.35; margin: 1mm 0 2mm; }
  .chips { display: flex; gap: 2mm; align-items: center; font: 700 8pt/1 ui-monospace, Menlo, Consolas, monospace; }
  .chips span { padding: 1mm 2.4mm; border-radius: 4mm; border: .8pt solid #16181d; }
  .chips .A { background: #16181d; color: #fff; }
  .chips .C { border-style: dashed; color: #5a606b; border-color: #5a606b; }
  .chips .v { border-color: transparent; background: #eceae2; }
  .claim p { margin: 1.6mm 0; }
  .claim .lab { font: 700 7.5pt/1 ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase; letter-spacing: .08em; color: #5a606b; display: block; margin: 3mm 0 .6mm; }
  .say { border-left: 1.4mm solid #2456c8; background: #e8eefc; padding: 2mm 3mm; margin: 3mm 0; }
  .refs { font-size: 8.5pt; color: #3c424c; margin: 1mm 0 0; padding-left: 5mm; }
  .refs li { margin: .8mm 0; word-break: break-word; }
  table.legend { border-collapse: collapse; margin: 4mm 0; font-size: 10pt; }
  table.legend td { padding: 1.6mm 4mm 1.6mm 0; vertical-align: top; }
`;

function claimBlock(c, d, lang) {
  const L = lang === "zh";
  const lbl = (g, k) => LABELS[g][k][lang];
  const refs = c.sources
    .map((r) => {
      const s = d.sources[r.id];
      return `<li>${esc(s.authors)} (${s.year}). ${esc(s.title)}.${s.venue ? ` ${esc(s.venue)}.` : ""} ${s.link ? esc(s.link) : ""}</li>`;
    })
    .join("");
  return `<div class="claim" id="${c.id}">
  <div class="chips"><span class="v">${LABELS.verdict[c.verdict].icon} ${esc(lbl("verdict", c.verdict))}</span><span class="${c.grade}">${L ? "证据" : "Grade"} ${c.grade}</span></div>
  <h3>${esc(c.claim[lang])}</h3>
  <p><em>${esc(c.grade_why[lang])}</em></p>
  <span class="lab">${L ? "研究怎么说" : "What the research says"}</span><p>${esc(c.evidence[lang])}</p>
  <span class="lab">${L ? "局限" : "Limits"}</span><p>${esc(c.caveats[lang])}</p>
  <div class="say"><span class="lab" style="margin-top:0">${L ? "对老板可以这样说" : "Say this to your boss"}</span>${esc(c.boss_line[lang])}</div>
  <span class="lab">${L ? "什么证据会让我改口" : "What would change my mind"}</span><p>${esc(c.change_my_mind[lang])}</p>
  <span class="lab">${L ? "出处" : "Sources"} · ${L ? "核对于" : "checked"} ${c.verified_on}</span><ol class="refs">${refs}</ol>
</div>`;
}

export function renderBook(d, lang) {
  const L = lang === "zh";
  const n = d.counts;
  const chapters = d.topics
    .filter((t) => d.claims.some((c) => c.topic === t.id))
    .map((t, i) => `<h2 class="chapter">${i + 1}. ${esc(t.name[lang])}</h2><p>${esc(t.blurb[lang])}</p>${d.claims.filter((c) => c.topic === t.id).map((c) => claimBlock(c, d, lang)).join("")}`)
    .join("");
  const legend = L
    ? `<table class="legend"><tr><td><b>✓ 成立</b></td><td>证据支持这个说法。</td></tr><tr><td><b>~ 视情况</b></td><td>在某些条件下成立，换个条件就不成立。</td></tr><tr><td><b>✗ 不成立</b></td><td>证据不支持，或与之相反。</td></tr><tr><td><b>? 证据不足</b></td><td>没有足够好的证据，双方都不能说研究支持自己。</td></tr><tr><td><b>A</b></td><td>证据充分：多项独立的高质量研究一致，或一项规模大、做得好的随机对照试验。</td></tr><tr><td><b>B</b></td><td>证据一般：一项有局限的好实验，或一致的大规模观察性证据。</td></tr><tr><td><b>C</b></td><td>证据薄弱：专家意见、案例、模拟、厂商报告或小样本研究。</td></tr></table>`
    : `<table class="legend"><tr><td><b>✓ Supported</b></td><td>The evidence backs the claim.</td></tr><tr><td><b>~ It depends</b></td><td>True under some conditions, not others.</td></tr><tr><td><b>✗ Not supported</b></td><td>The evidence does not back it, or points the other way.</td></tr><tr><td><b>? Unknown</b></td><td>No good evidence either way. Neither side can claim the research.</td></tr><tr><td><b>A</b></td><td>Strong: several independent strong studies agree, or one large well-run randomized trial.</td></tr><tr><td><b>B</b></td><td>Moderate: one good experiment with limits, or consistent large observational evidence.</td></tr><tr><td><b>C</b></td><td>Weak: expert opinion, cases, simulations, vendor reports or small studies.</td></tr></table>`;
  return `<!doctype html>
<html lang="${L ? "zh-CN" : "en"}"><head><meta charset="utf-8"><title>Citation Needed${L ? " 出处呢" : ""}</title><style>${CSS}</style></head><body>
<section class="cover"><h1>Citation<sup>[needed]</sup></h1><p class="sub">${L ? "软件团队怎么干活，研究到底怎么说。每条说法标证据等级，附一手出处。" : "What the research actually says about how software teams work. Every claim graded, with primary sources."}</p>
<div class="meta">${n.total} ${L ? "条说法" : "claims"} · ${L ? "证据" : "grade"} A ${n.grade.A} / B ${n.grade.B} / C ${n.grade.C}<br>github.com/${REPO}<br>CC BY 4.0</div></section>
<section class="how"><h1>${L ? "怎么读" : "How to read this"}</h1><p>${L ? "每条说法有两个标签：结论，和证据等级。证据等级衡量的是结论背后的证据有多强，不是这个说法听起来对不对。每条都配有一句可以对老板说的话，以及什么证据会让我们改口。" : "Every claim carries two labels: a verdict and an evidence grade. The grade measures how strong the evidence is behind the verdict, not whether the claim feels true. Each entry also gives a sentence you can say to your boss, and what evidence would change our mind."}</p>${legend}</section>
${chapters}
</body></html>`;
}

async function loadPlaywright() {
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

async function main() {
  const d = readerData();
  const out = join(ROOT, "_site");
  mkdirSync(out, { recursive: true });
  const files = { en: join(out, "book.en.html"), zh: join(out, "book.zh-CN.html") };
  for (const lang of ["en", "zh"]) writeFileSync(files[lang], renderBook(d, lang));
  console.log("wrote _site/book.en.html and _site/book.zh-CN.html");
  if (!process.argv.includes("--pdf")) return;
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch();
  mkdirSync(join(ROOT, "dist"), { recursive: true });
  for (const lang of ["en", "zh"]) {
    const page = await browser.newPage();
    await page.goto(`file://${files[lang]}`);
    const name = `citation-needed-${lang === "zh" ? "zh-CN" : "en"}.pdf`;
    await page.pdf({
      path: join(ROOT, "dist", name),
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: "<span></span>",
      footerTemplate: `<div style="font:8px sans-serif;color:#777;width:100%;text-align:center"><span class="pageNumber"></span> / <span class="totalPages"></span> · github.com/${REPO}</div>`,
      margin: { top: "20mm", bottom: "22mm", left: "18mm", right: "18mm" },
    });
    console.log(`wrote dist/${name}`);
  }
  await browser.close();
}

if (import.meta.url === `file://${process.argv[1]}`) main();
