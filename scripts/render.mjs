// Markdown renderers for the READMEs, the chapter files and the skill index.
import { LABELS, REPO, counts, sourceCitation } from "./lib.mjs";

const SITE = "https://mbappewu.github.io/citation-needed/";
const RELEASES = `https://github.com/${REPO}/releases/latest`;

export const chapterFile = (topics, topicId, lang) => {
  const i = topics.findIndex((t) => t.id === topicId);
  return `chapters/${String(i + 1).padStart(2, "0")}-${topicId}${lang === "zh" ? ".zh-CN" : ""}.md`;
};

const chip = (c, lang) => `${LABELS.verdict[c.verdict].icon} ${LABELS.verdict[c.verdict][lang]} · ${lang === "zh" ? "证据等级" : "Grade"} ${c.grade}`;

function citeLine(src, n, lang) {
  const { link, text } = sourceCitation(src);
  const mark = src.verify === "abstract" ? "✓✓" : src.verify === "metadata" ? "✓" : "↗";
  const label = LABELS.verify[src.verify][lang];
  return `${n}. ${text} [${link ? "link" : "no link"}](${link})${link ? "" : ""} <sub>${mark} ${label}</sub>`.replace("[no link]()", "");
}

export function renderClaim(c, sources, lang) {
  const L = lang === "zh";
  const lines = [];
  lines.push(`<a id="${c.id}"></a>`);
  lines.push(`### ${c.claim[lang]}`);
  lines.push("");
  lines.push(`**${chip(c, lang)}** ${L ? "（" : "("}${c.grade_why[lang]}${L ? "）" : ")"}`);
  lines.push("");
  lines.push(`**${L ? "研究怎么说" : "What the research says"}.** ${c.evidence[lang]}`);
  lines.push("");
  lines.push(`**${L ? "局限" : "Limits"}.** ${c.caveats[lang]}`);
  lines.push("");
  lines.push(`> **${L ? "对老板可以这样说" : "Say this to your boss"}:** ${c.boss_line[lang]}`);
  lines.push("");
  lines.push(`**${L ? "什么证据会让我改口" : "What would change my mind"}.** ${c.change_my_mind[lang]}`);
  lines.push("");
  lines.push(`**${L ? "出处" : "Sources"}** (${L ? "核对于" : "checked"} ${c.verified_on}):`);
  lines.push("");
  c.sources.forEach((ref, i) => {
    const src = sources[ref.id];
    const role = LABELS.role[ref.role][lang].toLowerCase();
    lines.push(`${citeLine(src, i + 1, lang)} (${role})`);
  });
  lines.push("");
  return lines.join("\n");
}

export function renderChapter(topic, topics, claims, sources, lang) {
  const L = lang === "zh";
  const mine = claims.filter((c) => c.topic === topic.id);
  const idx = topics.findIndex((t) => t.id === topic.id) + 1;
  const out = [];
  out.push(`# ${idx}. ${topic.name[lang]}`);
  out.push("");
  out.push(topic.blurb[lang]);
  out.push("");
  out.push(L ? "[← 返回目录](../README.zh-CN.md) · [English](" + chapterFile(topics, topic.id, "en").replace("chapters/", "") + ")" : "[← Back to the index](../README.md) · [中文](" + chapterFile(topics, topic.id, "zh").replace("chapters/", "") + ")");
  out.push("");
  out.push(L ? "图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。" : "Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata and quoted numbers were checked against the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).");
  out.push("");
  out.push("---");
  out.push("");
  for (const c of mine) out.push(renderClaim(c, sources, lang), "---", "");
  out.push(L ? "内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。" : "Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.");
  out.push("");
  return out.join("\n");
}

function sourceStats(sources) {
  const s = { abstract: 0, metadata: 0, manual: 0 };
  for (const src of Object.values(sources)) s[src.verify]++;
  return s;
}

export function renderReadme({ topics, claims, sources }, lang) {
  const L = lang === "zh";
  const n = counts(claims);
  const st = sourceStats(sources);
  const total = Object.keys(sources).length;
  const out = [];
  out.push(`<div align="center">`);
  out.push("");
  out.push(`<img src="assets/banner.svg" alt="Citation Needed" width="100%">`);
  out.push("");
  out.push(L ? "[English](README.md) · **简体中文**" : "**English** · [简体中文](README.zh-CN.md)");
  out.push("");
  out.push(`[![Sources verified](https://github.com/${REPO}/actions/workflows/verify-sources.yml/badge.svg)](https://github.com/${REPO}/actions/workflows/verify-sources.yml) [![License: CC BY 4.0 + MIT](https://img.shields.io/badge/license-CC%20BY%204.0%20%2B%20MIT-24292f?style=flat-square)](#${L ? "许可证" : "license"})`);
  out.push("");
  out.push("</div>");
  out.push("");
  if (L) {
    out.push("**软件团队里的每一场争论，都附上出处和证据等级。**");
    out.push("");
    out.push(`加班能多干多少活？AI 编程工具到底快不快？远程办公效率低吗？团队扩了一倍，人均产出为什么降了？这里把这类争论逐条查了研究：**${n.total} 条说法，每条都标明结论、A/B/C 证据等级、一手出处，以及一句能直接对老板说的话。**`);
    out.push("");
    out.push(`其中 ${n.verdict.supported} 条成立，${n.verdict.mixed} 条要看情况，${n.verdict.unsupported} 条不成立，${n.verdict.unknown} 条证据不足。证据等级为 A 的有 ${n.grade.A} 条，B ${n.grade.B} 条，C ${n.grade.C} 条。`);
  } else {
    out.push("**Every argument about how software teams work, with the receipts.**");
    out.push("");
    out.push(`Does overtime get more done? Do AI coding tools really make teams faster? Is remote work less productive? Why does output per person fall when a team doubles? This repo checks the research behind those arguments: **${n.total} claims, each with a verdict, an A/B/C evidence grade, primary sources, and one sentence you can say to your boss.**`);
    out.push("");
    out.push(`${n.verdict.supported} hold up, ${n.verdict.mixed} depend on context, ${n.verdict.unsupported} do not hold up, ${n.verdict.unknown} have no good evidence either way. Evidence grades: ${n.grade.A} A, ${n.grade.B} B, ${n.grade.C} C.`);
  }
  out.push("");
  out.push(L ? "## 怎么用" : "## Use it");
  out.push("");
  out.push(`- ${L ? "**网页阅读器**（可搜索，可勾选几条生成“给老板的一页纸”）" : "**Web reader**: search, filter, tick a few claims and print a one-page brief for your boss"}: ${SITE}`);
  out.push(`- ${L ? "**离线版**：单文件 HTML 和 PDF 在" : "**Offline**: single-file HTML and PDFs on the"} [Releases](${RELEASES})`);
  out.push(`- ${L ? "**对 AI 助手提问**：" : "**Ask your AI assistant**: "}\`npx skills add ${REPO.split("/")[0]}/citation-needed\` ${L ? "（Claude Code、Codex、Cursor 等；回答时会带上证据等级和出处）" : "(Claude Code, Codex, Cursor and others; answers come with the grade and the source)"}`);
  out.push("");

  const headlines = claims.filter((c) => c.headline);
  if (headlines.length) {
    out.push(L ? "## 先看这几条" : "## Start here");
    out.push("");
    out.push(L ? "| 说法 | 结论 | 证据 |" : "| Claim | Verdict | Grade |");
    out.push("|---|---|---|");
    for (const c of headlines) {
      const file = chapterFile(topics, c.topic, lang);
      out.push(`| [${c.claim[lang]}](${file}#${c.id}) | ${LABELS.verdict[c.verdict].icon} ${LABELS.verdict[c.verdict][lang]} | ${c.grade} |`);
    }
    out.push("");
  }

  out.push(L ? "## 目录" : "## Contents");
  out.push("");
  topics.forEach((t) => {
    const mine = claims.filter((c) => c.topic === t.id);
    if (!mine.length) return;
    const file = chapterFile(topics, t.id, lang);
    out.push(`### [${t.name[lang]}](${file})`);
    out.push("");
    out.push(t.blurb[lang]);
    out.push("");
    out.push(L ? "| 说法 | 结论 | 证据 |" : "| Claim | Verdict | Grade |");
    out.push("|---|---|---|");
    for (const c of mine) {
      out.push(`| [${c.claim[lang]}](${file}#${c.id}) | ${LABELS.verdict[c.verdict].icon} ${LABELS.verdict[c.verdict][lang]} | ${c.grade} |`);
    }
    out.push("");
  });

  out.push(L ? "## 证据等级怎么定" : "## How grading works");
  out.push("");
  out.push(L ? "等级衡量的是**结论背后的证据有多强**，不是这个说法听起来对不对。" : "The grade measures **how strong the evidence is behind the verdict**, not whether the claim feels true.");
  out.push("");
  if (L) {
    out.push("- **A 证据充分**：至少两项独立的高质量研究结论一致（随机对照试验、预注册或被复现的研究、对对照研究的荟萃分析），或一项规模大、做得好的随机对照试验，且人群与我们相近。");
    out.push("- **B 证据一般**：一项有局限的好实验或自然实验，或一致的大规模观察性证据，或对观察性研究的荟萃分析，或对历史数据的严谨再分析。");
    out.push("- **C 证据薄弱**：专家意见、案例研究、模拟、厂商报告、小样本或单项研究，或对度量方法的批评。我们会直接说出来。C 级也有用：它告诉你的老板，这件事并没有定论。");
  } else {
    out.push("- **A, strong.** At least two independent strong studies agree (randomized trials, preregistered or replicated studies, or a meta-analysis of controlled studies), or one large well-run randomized trial in a population like ours.");
    out.push("- **B, moderate.** One good experiment or natural experiment with limits, consistent large observational evidence, a meta-analysis of observational studies, or a careful reanalysis of historical data.");
    out.push("- **C, weak.** Expert opinion, case studies, simulations, vendor reports, small or single studies, or a measurement critique. We say so plainly. A C is still useful: it tells your boss the argument is not settled.");
  }
  out.push("");

  out.push(L ? "## 引用是怎么核对的" : "## How sources are checked");
  out.push("");
  if (L) {
    out.push(`本仓库共 ${total} 个来源。每个来源都在持续集成里自动核对：**${st.abstract} 个**核对了标题、作者、年份，以及我们引用的数字是否真的出现在摘要里；**${st.metadata} 个**核对了元数据；**${st.manual} 个**是书或报告，只能核对链接能否打开。每周一次，每次提交评审（PR）时也会跑，核对不过就会报错。`);
    out.push("");
    out.push("没有任何数字是凭印象写的：写进正文的数字都要能追溯到一个来源。不过，持续集成只能核对摘要里的内容，正文里更细的数字仍然需要人来读原文，所以每条都写了人工核对的日期。发现错误请开 issue。");
  } else {
    out.push(`There are ${total} sources. Each one is looked up online by CI: **${st.abstract}** have their title, authors, year and every quoted number checked against the abstract; **${st.metadata}** have their metadata checked; **${st.manual}** are books or reports where only the link can be checked. The check runs weekly and on every pull request, and fails when something does not match.`);
    out.push("");
    out.push("No number is written from memory: every figure in the text traces to a source. CI can only read abstracts, so finer details in the full text still need a human who has read the paper, which is why each claim carries the date it was last checked. If you find a mistake, open an issue.");
  }
  out.push("");

  out.push(L ? "## 反驳一条结论" : "## Challenge a claim");
  out.push("");
  if (L) {
    out.push(`有更好的证据、发现了错误，或者漏掉了一项重要研究？开一个 [Challenge issue](https://github.com/${REPO}/issues/new?template=challenge.yml)。证据等级会公开升降，并署名感谢提供证据的人。想新增一条说法，用 [Propose](https://github.com/${REPO}/issues/new?template=propose.yml)。贡献规则见 [CONTRIBUTING.md](CONTRIBUTING.md)。`);
  } else {
    out.push(`Better evidence, a mistake, or a study we missed? Open a [Challenge issue](https://github.com/${REPO}/issues/new?template=challenge.yml). Grades go up and down in public, with credit to whoever supplied the evidence. To add a claim, use [Propose](https://github.com/${REPO}/issues/new?template=propose.yml). The rules are in [CONTRIBUTING.md](CONTRIBUTING.md).`);
  }
  out.push("");

  out.push(L ? "## 许可证" : "## License");
  out.push("");
  out.push(L ? "文字和数据采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)：可以转载、改编，请保留署名并链回本仓库。脚本采用 MIT 许可证。" : "Text and data are [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): reuse and adapt them, keep the attribution and link back. Scripts are MIT.");
  out.push("");
  return out.join("\n");
}

// Compact index the skill reads on demand.
export function renderSkillIndex({ topics, claims, sources }) {
  const out = ["<!-- Generated by scripts/build.mjs from data/. Edit the data, not this file. -->", "# Claim index", ""];
  out.push("Each entry: id, claim, verdict, grade, what the research found, limits, a sentence for the manager, and sources. Verified dates are in the repository.", "");
  for (const t of topics) {
    const mine = claims.filter((c) => c.topic === t.id);
    if (!mine.length) continue;
    out.push(`## ${t.name.en} (${t.name.zh})`, "");
    for (const c of mine) {
      out.push(`### ${c.id}`);
      out.push(`- **Claim:** ${c.claim.en} (${c.claim.zh})`);
      out.push(`- **Verdict / grade:** ${LABELS.verdict[c.verdict].en} / ${c.grade}. ${c.grade_why.en}`);
      out.push(`- **Evidence:** ${c.evidence.en}`);
      out.push(`- **Limits:** ${c.caveats.en}`);
      out.push(`- **Say to your boss:** ${c.boss_line.en}`);
      out.push(`- **Would change the verdict:** ${c.change_my_mind.en}`);
      out.push(`- **Sources:** ` + c.sources.map((r) => { const s = sources[r.id]; const { link } = sourceCitation(s); return `${s.authors} (${s.year}) ${s.title} ${link}`; }).join("; "));
      out.push(`- **Checked:** ${c.verified_on}. Full text: https://github.com/${REPO}/blob/main/${chapterFile(topics, c.topic, "en")}#${c.id}`);
      out.push("");
    }
  }
  return out.join("\n");
}
