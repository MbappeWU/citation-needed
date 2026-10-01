<div align="center">

<img src="assets/banner.svg" alt="Citation Needed" width="100%">

[English](README.md) · **简体中文**

[![Sources verified](https://github.com/MbappeWU/citation-needed/actions/workflows/verify-sources.yml/badge.svg)](https://github.com/MbappeWU/citation-needed/actions/workflows/verify-sources.yml) [![License: CC BY 4.0 + MIT](https://img.shields.io/badge/license-CC%20BY%204.0%20%2B%20MIT-24292f?style=flat-square)](#许可证)

</div>

**软件团队里的每一场争论，都附上出处和证据等级。**

加班能多干多少活？AI 编程工具到底快不快？远程办公效率低吗？团队扩了一倍，人均产出为什么降了？这里把这类争论逐条查了研究：**3 条说法，每条都标明结论、A/B/C 证据等级、一手出处，以及一句能直接对老板说的话。**

其中 0 条成立，1 条要看情况，1 条不成立，1 条证据不足。证据等级为 A 的有 0 条，B 2 条，C 1 条。

## 怎么用

- **网页阅读器**（可搜索，可勾选几条生成“给老板的一页纸”）: https://mbappewu.github.io/citation-needed/
- **离线版**：单文件 HTML 和 PDF 在 [Releases](https://github.com/MbappeWU/citation-needed/releases/latest)
- **对 AI 助手提问**：`npx skills add MbappeWU/citation-needed` （Claude Code、Codex、Cursor 等；回答时会带上证据等级和出处）

## 目录

### [工时与健康](chapters/03-hours.zh-CN.md)

加班、单位工时产出，以及健康代价。

| 说法 | 结论 | 证据 |
|---|---|---|
| [每周只上四天，事情就会做得更少。](chapters/03-hours.zh-CN.md#hours-four-day-week) | ? 证据不足 | C |
| [长时间工作只是一种生活方式，对健康没有实质代价。](chapters/03-hours.zh-CN.md#hours-health-cost) | ✗ 不成立 | B |
| [工作时间越长，做的事越多。](chapters/03-hours.zh-CN.md#hours-more-output) | ~ 视情况 | B |

## 证据等级怎么定

等级衡量的是**结论背后的证据有多强**，不是这个说法听起来对不对。

- **A 证据充分**：至少两项独立的高质量研究结论一致（随机对照试验、预注册或被复现的研究、对对照研究的荟萃分析），或一项规模大、做得好的随机对照试验，且人群与我们相近。
- **B 证据一般**：一项有局限的好实验或自然实验，或一致的大规模观察性证据，或对观察性研究的荟萃分析，或对历史数据的严谨再分析。
- **C 证据薄弱**：专家意见、案例研究、模拟、厂商报告、小样本或单项研究，或对度量方法的批评。我们会直接说出来。C 级也有用：它告诉你的老板，这件事并没有定论。

## 引用是怎么核对的

本仓库共 6 个来源。每个来源都在持续集成里自动核对：**4 个**核对了标题、作者、年份，以及我们引用的数字是否真的出现在摘要里；**2 个**核对了元数据；**0 个**是书或报告，只能核对链接能否打开。每周一次，每次提交评审（PR）时也会跑，核对不过就会报错。

没有任何数字是凭印象写的：写进正文的数字都要能追溯到一个来源。不过，持续集成只能核对摘要里的内容，正文里更细的数字仍然需要人来读原文，所以每条都写了人工核对的日期。发现错误请开 issue。

## 反驳一条结论

有更好的证据、发现了错误，或者漏掉了一项重要研究？开一个 [Challenge issue](https://github.com/MbappeWU/citation-needed/issues/new?template=challenge.yml)。证据等级会公开升降，并署名感谢提供证据的人。想新增一条说法，用 [Propose](https://github.com/MbappeWU/citation-needed/issues/new?template=propose.yml)。贡献规则见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

文字和数据采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)：可以转载、改编，请保留署名并链回本仓库。脚本采用 MIT 许可证。
