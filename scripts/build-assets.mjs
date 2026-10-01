// Generates the images that are not hand-drawn: the social card and the demo of the web reader.
// Needs Playwright with Chromium. The demo also needs ffmpeg (set FFMPEG to its path if it is not on PATH).
// Usage: node scripts/build-assets.mjs card            assets/social-card.png (1280x640)
//        node scripts/build-assets.mjs demo [en|zh]    assets/demo.gif and dist/demo-<lang>.mp4
//        node scripts/build-assets.mjs cards           dist/cards/<lang>/<claim-id>.png, one shareable image per claim
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { LABELS, ROOT, counts, loadAll } from "./lib.mjs";
import { loadPlaywright } from "./browser.mjs";
import { renderReader } from "./build-site.mjs";

const SERIF = `"Iowan Old Style", "Palatino Linotype", Palatino, "Noto Serif CJK SC", "Source Han Serif SC", Georgia, serif`;
const SANS = `system-ui, -apple-system, "Segoe UI", "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif`;
const MONO = `ui-monospace, SFMono-Regular, Menlo, Consolas, "DejaVu Sans Mono", monospace`;
const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m]);

const TONE = {
  supported: ["#17703f", "#e1f2e8"],
  mixed: ["#8f6200", "#fbf0d4"],
  unsupported: ["#a22b2b", "#f8e2e2"],
  unknown: ["#59606b", "#e9eaee"],
};

function cardClaims(data) {
  const picked = data.claims.filter((c) => c.headline);
  return (picked.length >= 3 ? picked : data.claims).slice(0, 3);
}

function cardHtml(data) {
  const n = counts(data.claims);
  const total = Object.keys(data.sources).length;
  const cards = cardClaims(data)
    .map((c) => {
      const [fg, bg] = TONE[c.verdict];
      const grade = c.grade === "A" ? "background:#16181d;color:#f6f5f1;border:2px solid #16181d" : c.grade === "B" ? "border:2px solid #16181d;color:#16181d" : "border:2px dashed #5a606b;color:#5a606b";
      return `<div class="card"><div class="chips"><span style="background:${bg};color:${fg}">${LABELS.verdict[c.verdict].icon} ${LABELS.verdict[c.verdict].en}</span><span style="${grade};font-family:${MONO}">Grade ${c.grade}</span></div><h3>${esc(c.claim.en)}</h3></div>`;
    })
    .join("");
  return `<!doctype html><meta charset="utf-8"><style>
    * { box-sizing: border-box; }
    body { margin: 0; width: 1280px; height: 640px; background: #f6f5f1; color: #16181d; font-family: ${SANS}; position: relative; overflow: hidden; }
    .bar { position: absolute; left: 0; top: 0; bottom: 0; width: 16px; background: #2456c8; }
    .left { position: absolute; left: 76px; top: 104px; width: 640px; }
    h1 { font: 700 104px/1 ${SERIF}; letter-spacing: -2px; margin: 0; white-space: nowrap; }
    h1 sup { font: 500 34px/1 ${MONO}; color: #2456c8; letter-spacing: 0; margin-left: 6px; vertical-align: 50px; }
    .tag { font: 400 34px/1.35 ${SERIF}; color: #5a606b; margin: 26px 0 0; }
    .stats { font: 500 23px/1.5 ${MONO}; color: #16181d; margin: 34px 0 0; }
    .legend { display: flex; gap: 12px; margin-top: 22px; font: 700 20px/1 ${MONO}; }
    .legend span { padding: 8px 15px; border-radius: 999px; }
    .zh { position: absolute; left: 76px; bottom: 44px; font: 600 30px/1 ${SANS}; color: #5a606b; letter-spacing: 3px; }
    .right { position: absolute; left: 780px; top: 54px; width: 448px; display: flex; flex-direction: column; gap: 16px; }
    .card { background: #fff; border: 1.5px solid #dcd9ce; border-radius: 16px; padding: 18px 22px 20px; box-shadow: 0 10px 28px rgba(22,24,29,.07); }
    .chips { display: flex; gap: 10px; }
    .chips span { font: 700 16px/1 ${SANS}; padding: 7px 13px; border-radius: 999px; }
    .card h3 { font: 600 26px/1.3 ${SERIF}; margin: 12px 0 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .foot { position: absolute; right: 52px; bottom: 30px; font: 500 19px/1 ${MONO}; color: #5a606b; }
  </style>
  <div class="bar"></div>
  <div class="left">
    <h1>Citation<sup>[needed]</sup></h1>
    <p class="tag">What the research actually says about how software teams work.</p>
    <p class="stats">${n.total} claims · ${total} sources<br>every citation checked by CI</p>
    <div class="legend"><span style="background:#16181d;color:#f6f5f1">A strong</span><span style="border:2px solid #16181d">B some</span><span style="border:2px dashed #5a606b;color:#5a606b">C weak</span></div>
  </div>
  <div class="zh">出处呢</div>
  <div class="right">${cards}</div>
  <div class="foot">github.com/MbappeWU/citation-needed</div>`;
}

async function card() {
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 640 } });
  await page.setContent(cardHtml(loadAll()));
  mkdirSync(join(ROOT, "assets"), { recursive: true });
  await page.screenshot({ path: join(ROOT, "assets", "social-card.png") });
  await browser.close();
  console.log("wrote assets/social-card.png");
}

// ---------- one shareable image per claim ----------

function shortCite(src) {
  const names = String(src.authors).split(/,\s*/).filter(Boolean);
  const first = names[0].replace(/\s+et al\.?$/, "").trim().split(/\s+/).pop();
  const many = names.length > 1 || /et al/.test(src.authors);
  const venue = src.venue ? `, ${String(src.venue).replace(/\s+\d[\d()\-–, ]*$/, "")}` : "";
  return `${first}${many ? " et al." : ""} (${src.year})${venue}`;
}

function claimCardHtml(c, data, lang) {
  const L = lang === "zh";
  const [fg, bg] = TONE[c.verdict];
  const claim = c.claim[lang];
  const size = L ? (claim.length <= 22 ? 92 : claim.length <= 36 ? 76 : 62) : claim.length <= 48 ? 80 : claim.length <= 90 ? 66 : 54;
  const grade = c.grade === "A" ? "background:#16181d;color:#f6f5f1;border:3px solid #16181d" : c.grade === "B" ? "border:3px solid #16181d;color:#16181d" : "border:3px dashed #5a606b;color:#5a606b";
  const topic = data.topics.find((t) => t.id === c.topic);
  const primary = data.sources[(c.sources.find((r) => r.role === "primary") || c.sources[0]).id];
  return `<!doctype html><meta charset="utf-8"><style>
    * { box-sizing: border-box; }
    body { margin: 0; width: 1080px; height: 1350px; background: #f6f5f1; color: #16181d; font-family: ${SANS}; position: relative; overflow: hidden; }
    .bar { position: absolute; left: 0; top: 0; bottom: 0; width: 16px; background: #2456c8; }
    .top { position: absolute; left: 72px; right: 64px; top: 56px; display: flex; justify-content: space-between; align-items: baseline; }
    .brand { font: 700 40px/1 ${SERIF}; }
    .brand sup { font: 500 22px/1 ${MONO}; color: #2456c8; margin-left: 3px; }
    .topic { font: 600 20px/1 ${MONO}; letter-spacing: .1em; text-transform: uppercase; color: #5a606b; }
    .main { position: absolute; left: 72px; right: 64px; top: 130px; bottom: 150px; display: flex; flex-direction: column; justify-content: center; }
    .lab { font: 700 20px/1 ${MONO}; letter-spacing: .12em; text-transform: uppercase; color: #5a606b; margin: 0 0 18px; }
    h1 { font: 700 ${size}px/1.2 ${SERIF}; margin: 0; letter-spacing: -.01em; }
    .chips { display: flex; gap: 14px; margin-top: 40px; align-items: center; }
    .chips span { font: 700 32px/1 ${SANS}; padding: 14px 24px; border-radius: 999px; }
    .why { font: 400 27px/1.5 ${SERIF}; color: #5a606b; margin: 26px 0 0; }
    .say { margin-top: 44px; padding: 30px 34px; background: #e8eefc; border-left: 8px solid #2456c8; border-radius: 6px 18px 18px 6px; }
    .say .lab { color: #2456c8; margin-bottom: 14px; }
    .say p { font: 400 36px/1.45 ${SERIF}; margin: 0; }
    .foot { position: absolute; left: 72px; right: 64px; bottom: 52px; font: 500 22px/1.5 ${MONO}; color: #5a606b; border-top: 1.5px solid #dcd9ce; padding-top: 22px; }
    .foot b { color: #16181d; }
  </style>
  <div class="bar"></div>
  <div class="top"><div class="brand">Citation<sup>[needed]</sup>${L ? ' <span style="font:600 28px/1 ' + SANS + ';color:#5a606b;margin-left:8px">出处呢</span>' : ""}</div><div class="topic">${esc(topic.name[lang])}</div></div>
  <div class="main">
    <p class="lab">${L ? "有人说" : "The claim"}</p>
    <h1>${esc(claim)}</h1>
    <div class="chips"><span style="background:${bg};color:${fg}">${LABELS.verdict[c.verdict].icon} ${LABELS.verdict[c.verdict][lang]}</span><span style="${grade};font-family:${MONO}">${L ? "证据" : "Grade"} ${c.grade}</span></div>
    <p class="why">${esc(c.grade_why[lang])}</p>
    <div class="say"><p class="lab">${L ? "对老板可以这样说" : "Say this to your boss"}</p><p>${esc(c.boss_line[lang])}</p></div>
  </div>
  <div class="foot"><b>${esc(shortCite(primary))}</b><br>github.com/MbappeWU/citation-needed · #${esc(c.id)}</div>`;
}

async function cards() {
  const data = loadAll();
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  let n = 0;
  for (const lang of ["en", "zh"]) {
    const dir = join(ROOT, "dist", "cards", lang);
    mkdirSync(dir, { recursive: true });
    for (const c of data.claims) {
      await page.setContent(claimCardHtml(c, data, lang));
      const overflow = await page.evaluate(() => {
        const say = document.querySelector(".say").getBoundingClientRect().bottom;
        const foot = document.querySelector(".foot").getBoundingClientRect().top;
        return say > foot - 16;
      });
      if (overflow) console.warn(`warning: ${lang}/${c.id} text runs into the footer`);
      await page.screenshot({ path: join(dir, `${c.id}.png`) });
      n++;
    }
  }
  await browser.close();
  console.log(`wrote ${n} images to dist/cards/`);
}

// ---------- demo ----------

const CURSOR = `
  window.addEventListener("DOMContentLoaded", () => {
    const d = document.createElement("div");
    d.style.cssText = "position:fixed;left:0;top:0;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:rgba(36,86,200,.28);border:2px solid #2456c8;z-index:2147483647;pointer-events:none;transition:transform .08s;";
    document.body.appendChild(d);
    window.addEventListener("mousemove", (e) => { d.style.left = e.clientX + "px"; d.style.top = e.clientY + "px"; }, true);
    window.addEventListener("mousedown", () => { d.style.transform = "scale(.7)"; }, true);
    window.addEventListener("mouseup", () => { d.style.transform = "scale(1)"; }, true);
  });`;

const DEMO = {
  en: { search: "interruption", title: "Interruptions: what the research says" },
  zh: { search: "打断", title: "被打断：研究怎么说" },
};

async function demo(lang) {
  const cfg = DEMO[lang];
  if (!cfg) throw new Error(`unknown language ${lang}`);
  const ffmpeg = process.env.FFMPEG || "ffmpeg";
  const tmp = join(ROOT, "dist", "demo-tmp");
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });
  const html = join(tmp, "reader.html");
  writeFileSync(html, renderReader());

  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch();
  const W = 960, H = 600;
  const context = await browser.newContext({ viewport: { width: W, height: H }, recordVideo: { dir: tmp, size: { width: W, height: H } }, colorScheme: "light" });
  await context.addInitScript(`try { localStorage.setItem("cn-lang", "${lang}"); localStorage.removeItem("cn-brief"); } catch (e) {}`);
  await context.addInitScript(CURSOR);
  const page = await context.newPage();
  await page.goto(`file://${html}`);
  await page.waitForTimeout(900);

  const glide = async (loc) => {
    const box = await loc.boundingBox();
    await page.mouse.move(box.x + Math.min(box.width / 2, 220), box.y + box.height / 2, { steps: 18 });
    await page.waitForTimeout(120);
  };
  const click = async (loc) => {
    await glide(loc);
    await loc.click();
  };

  await click(page.locator("#q"));
  await page.keyboard.type(cfg.search, { delay: 110 });
  await page.waitForTimeout(600);

  await click(page.locator("article.claim .head").nth(0));
  await page.waitForTimeout(1000);
  await page.mouse.wheel(0, 380);
  await page.waitForTimeout(1300);
  await click(page.locator("article.claim.open input[data-add]"));
  await page.waitForTimeout(700);

  await click(page.locator("#bopen"));
  await page.waitForTimeout(700);
  await click(page.locator("#btitle"));
  await page.keyboard.type(cfg.title, { delay: 55 });
  await page.waitForTimeout(500);
  await page.mouse.wheel(0, 360);
  await page.waitForTimeout(1500);
  await page.close();
  await context.close();
  await browser.close();

  const webm = readdirSync(tmp).find((f) => f.endsWith(".webm"));
  const src = join(tmp, webm);
  mkdirSync(join(ROOT, "dist"), { recursive: true });
  const mp4 = join(ROOT, "dist", `demo-${lang}.mp4`);
  execFileSync(ffmpeg, ["-y", "-loglevel", "error", "-ss", "0.5", "-i", src, "-vf", "scale=960:-2,fps=30", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-movflags", "+faststart", mp4]);
  const gif = join(ROOT, "assets", lang === "zh" ? "demo.zh-CN.gif" : "demo.gif");
  const filter = "fps=8,scale=760:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle";
  execFileSync(ffmpeg, ["-y", "-loglevel", "error", "-ss", "0.5", "-i", src, "-vf", filter, "-loop", "0", gif]);
  rmSync(tmp, { recursive: true, force: true });
  console.log(`wrote ${gif.replace(ROOT + "/", "")} and dist/demo-${lang}.mp4`);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === "card") await card();
else if (cmd === "cards") await cards();
else if (cmd === "demo") await demo(arg || "en");
else {
  console.error("usage: node scripts/build-assets.mjs card | cards | demo [en|zh]");
  process.exit(2);
}
