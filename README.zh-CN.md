<div align="center">

<img src="assets/banner.svg" alt="Citation Needed" width="100%">

[English](README.md) · **简体中文**

[![Sources verified](https://github.com/MbappeWU/citation-needed/actions/workflows/verify-sources.yml/badge.svg)](https://github.com/MbappeWU/citation-needed/actions/workflows/verify-sources.yml) [![License: CC BY 4.0 + MIT](https://img.shields.io/badge/license-CC%20BY%204.0%20%2B%20MIT-24292f?style=flat-square)](#许可证)

</div>

**软件团队里的每一场争论，都附上出处和证据等级。**

加班能多干多少活？AI 编程工具到底快不快？远程办公效率低吗？团队扩了一倍，人均产出为什么降了？这里把这类争论逐条查了研究：**50 条说法，每条都标明结论、A/B/C 证据等级、一手出处，以及一句能直接对老板说的话。**

其中 3 条成立，21 条要看情况，23 条不成立，3 条证据不足。证据等级为 A 的有 0 条，B 21 条，C 29 条。

## 怎么用

- **网页阅读器**（可搜索，可勾选几条生成“给老板的一页纸”）: https://mbappewu.github.io/citation-needed/
- **离线版**：单文件 HTML 和 PDF 在 [Releases](https://github.com/MbappeWU/citation-needed/releases/latest)
- **对 AI 助手提问**：`npx skills add MbappeWU/citation-needed` （Claude Code、Codex、Cursor 等；回答时会带上证据等级和出处）

## 目录

### [AI 编程工具](chapters/01-ai.zh-CN.md)

它们让团队更快、更稳、更好吗？随机对照试验和现场数据怎么说。

| 说法 | 结论 | 证据 |
|---|---|---|
| [AI 工具不会损害代码质量。](chapters/01-ai.zh-CN.md#ai-code-quality) | ✗ 不成立 | C |
| [AI 生成的代码和人写的代码一样安全。](chapters/01-ai.zh-CN.md#ai-code-security) | ✗ 不成立 | C |
| [采用 AI 能提升软件交付表现。](chapters/01-ai.zh-CN.md#ai-delivery) | ~ 视情况 | C |
| [AI 工具能让经验丰富的开发者更快。](chapters/01-ai.zh-CN.md#ai-experienced-faster) | ~ 视情况 | C |
| [AI 编程工具能让开发者更快完成工作。](chapters/01-ai.zh-CN.md#ai-faster) | ✓ 成立 | B |
| [AI 对初级开发者的帮助比对资深开发者更大。](chapters/01-ai.zh-CN.md#ai-juniors-more) | ~ 视情况 | C |
| [使用 AI 不会影响开发者的学习效果。](chapters/01-ai.zh-CN.md#ai-learning) | ✗ 不成立 | B |
| [那些 AI 研究已经过时了，因为今天的工具强多了。](chapters/01-ai.zh-CN.md#ai-old-studies) | ~ 视情况 | C |
| [开发者自己能判断 AI 有没有让自己变快。](chapters/01-ai.zh-CN.md#ai-self-estimate) | ✗ 不成立 | C |

### [度量效能](chapters/02-measure.zh-CN.md)

什么该数，什么会误导，以及为什么团队越大人均产出越低。

| 说法 | 结论 | 证据 |
|---|---|---|
| [每位开发者的提交数或 PR 数，能看出谁的表现最好。](chapters/02-measure.zh-CN.md#measure-commits-per-dev) | ✗ 不成立 | C |
| [DORA 的四个关键指标能预测团队的表现。](chapters/02-measure.zh-CN.md#measure-dora-predict) | ~ 视情况 | C |
| [代码行数是衡量开发者效能的合理指标。](chapters/02-measure.zh-CN.md#measure-lines-of-code) | ✗ 不成立 | C |
| [发布次数、上线功能数或完成的工单数，可以衡量团队的产出。](chapters/02-measure.zh-CN.md#measure-releases-output) | ✗ 不成立 | C |
| [开发者满意度是效能的领先指标。](chapters/02-measure.zh-CN.md#measure-satisfaction-leading) | ~ 视情况 | C |
| [一个指标就能反映开发者的效能。](chapters/02-measure.zh-CN.md#measure-single-metric) | ✗ 不成立 | C |
| [用故事点算出的速率，可以用来比较不同团队。](chapters/02-measure.zh-CN.md#measure-velocity-compare) | ✗ 不成立 | C |

### [工时与健康](chapters/03-hours.zh-CN.md)

加班、单位工时产出，以及健康代价。

| 说法 | 结论 | 证据 |
|---|---|---|
| [每周只上四天，事情就会做得更少。](chapters/03-hours.zh-CN.md#hours-four-day-week) | ? 证据不足 | C |
| [长时间工作只是一种生活方式，对健康没有实质代价。](chapters/03-hours.zh-CN.md#hours-health-cost) | ✗ 不成立 | B |
| [工作时间越长，做的事越多。](chapters/03-hours.zh-CN.md#hours-more-output) | ~ 视情况 | B |

### [会议、打断与办公室](chapters/04-meetings.zh-CN.md)

关于专注时间和开放式办公室的各种说法，逐条核对。

| 说法 | 结论 | 证据 |
|---|---|---|
| [每被打断一次，就要花 23 分钟才能恢复专注。](chapters/04-meetings.zh-CN.md#meetings-23-minutes) | ✗ 不成立 | B |
| [连续开会没什么害处。](chapters/04-meetings.zh-CN.md#meetings-back-to-back) | ? 证据不足 | C |
| [每日站会能改善团队协调。](chapters/04-meetings.zh-CN.md#meetings-daily-standups) | ~ 视情况 | C |
| [开发者需要长时间不被打断的整块时间才能高效工作。](chapters/04-meetings.zh-CN.md#meetings-focus-blocks) | ~ 视情况 | C |
| [设立无会议日能提高生产力。](chapters/04-meetings.zh-CN.md#meetings-no-meeting-days) | ? 证据不足 | C |
| [开放式办公室能促进协作。](chapters/04-meetings.zh-CN.md#meetings-open-plan-collaboration) | ✗ 不成立 | B |

### [远程与混合办公](chapters/05-remote.zh-CN.md)

随机实验和现场数据，包括一家大型中国公司的实验。

| 说法 | 结论 | 证据 |
|---|---|---|
| [远程办公会损害团队协作。](chapters/05-remote.zh-CN.md#remote-collaboration) | ~ 视情况 | B |
| [远程办公的开发者产出更少。](chapters/05-remote.zh-CN.md#remote-developers-output) | ~ 视情况 | C |
| [混合办公会拖累绩效和晋升。](chapters/05-remote.zh-CN.md#remote-hybrid-performance) | ✗ 不成立 | B |
| [初级工程师远程办公学不到东西。](chapters/05-remote.zh-CN.md#remote-juniors-learning) | ~ 视情况 | B |
| [创意工作用视频会议和当面开会效果一样好。](chapters/05-remote.zh-CN.md#remote-video-creativity) | ✗ 不成立 | B |
| [在家办公会降低工作效率。](chapters/05-remote.zh-CN.md#remote-wfh-productivity) | ~ 视情况 | B |

### [估算与项目失败](chapters/06-estimation.zh-CN.md)

计划为什么总会延期，以及哪些“失败率”数字不该再引用。

| 说法 | 结论 | 证据 |
|---|---|---|
| [有经验的估算者不会被锚定效应影响。](chapters/06-estimation.zh-CN.md#estimation-anchoring-experts) | ✗ 不成立 | B |
| [只要计划做得足够细，软件估算就会准。](chapters/06-estimation.zh-CN.md#estimation-careful-planning) | ✗ 不成立 | C |
| [70% 的 IT 项目都会失败。](chapters/06-estimation.zh-CN.md#estimation-chaos-failure-rate) | ✗ 不成立 | B |
| [专家凭经验估算，不如正式的估算模型准确。](chapters/06-estimation.zh-CN.md#estimation-experts-vs-models) | ✗ 不成立 | C |
| [IT 项目的超支幅度是可预测的，留一个固定缓冲就够了。](chapters/06-estimation.zh-CN.md#estimation-overrun-margin) | ✗ 不成立 | C |
| [工期压得紧，团队的效率就更高。](chapters/06-estimation.zh-CN.md#estimation-tight-deadlines) | ~ 视情况 | B |

### [团队规模与结构](chapters/08-teams.zh-CN.md)

布鲁克斯定律、康威定律、心理安全感。

| 说法 | 结论 | 证据 |
|---|---|---|
| [最佳团队规模是 5 到 9 人。](chapters/08-teams.zh-CN.md#teams-best-size-five-to-nine) | ~ 视情况 | C |
| [给已经延期的项目加人，会让它更晚交付。](chapters/08-teams.zh-CN.md#teams-brooks-law) | ~ 视情况 | C |
| [系统架构最终会照搬组织架构（康威定律）。](chapters/08-teams.zh-CN.md#teams-conway-law) | ✓ 成立 | B |
| [团队人数翻倍，产出也翻倍。](chapters/08-teams.zh-CN.md#teams-double-team-double-output) | ✗ 不成立 | B |
| [心理安全感能预测团队的绩效。](chapters/08-teams.zh-CN.md#teams-psychological-safety) | ✓ 成立 | B |
| [坐在一起办公的团队，交付更快。](chapters/08-teams.zh-CN.md#teams-sit-together-ship-faster) | ~ 视情况 | C |

### [招聘、反馈与绩效评估](chapters/09-people.zh-CN.md)

什么能预测工作表现，评分到底在测什么。

| 说法 | 结论 | 证据 |
|---|---|---|
| [奖金能激励人在复杂任务上做得更好。](chapters/09-people.zh-CN.md#people-bonus-complex-tasks) | ~ 视情况 | C |
| [给反馈总能提高工作表现。](chapters/09-people.zh-CN.md#people-feedback-improves) | ✗ 不成立 | B |
| [强制排名能提升团队绩效。](chapters/09-people.zh-CN.md#people-forced-ranking) | ✗ 不成立 | C |
| [凭感觉聊一聊的面试，是招人的好办法。](chapters/09-people.zh-CN.md#people-gut-interview) | ✗ 不成立 | B |
| [经理的绩效评分反映了员工的真实表现。](chapters/09-people.zh-CN.md#people-manager-ratings) | ~ 视情况 | B |
| [白板编程面试能看出一个人代码写得好不好。](chapters/09-people.zh-CN.md#people-whiteboard-coding) | ~ 视情况 | C |
| [工作年限越长，工作表现越好。](chapters/09-people.zh-CN.md#people-years-experience) | ~ 视情况 | B |

## 证据等级怎么定

等级衡量的是**结论背后的证据有多强**，不是这个说法听起来对不对。

- **A 证据充分**：至少两项独立的高质量研究结论一致（随机对照试验、预注册或被复现的研究、对对照研究的荟萃分析），或一项规模大、做得好的随机对照试验，且人群与我们相近。
- **B 证据一般**：一项有局限的好实验或自然实验，或一致的大规模观察性证据，或对观察性研究的荟萃分析，或对历史数据的严谨再分析。
- **C 证据薄弱**：专家意见、案例研究、模拟、厂商报告、小样本或单项研究，或对度量方法的批评。我们会直接说出来。C 级也有用：它告诉你的老板，这件事并没有定论。

## 引用是怎么核对的

本仓库共 108 个来源。每个来源都在持续集成里自动核对：**36 个**核对了标题、作者、年份，以及我们引用的数字是否真的出现在摘要里；**45 个**核对了元数据；**27 个**是书或报告，只能核对链接能否打开。每周一次，每次提交评审（PR）时也会跑，核对不过就会报错。

没有任何数字是凭印象写的：写进正文的数字都要能追溯到一个来源。不过，持续集成只能核对摘要里的内容，正文里更细的数字仍然需要人来读原文，所以每条都写了人工核对的日期。发现错误请开 issue。

## 反驳一条结论

有更好的证据、发现了错误，或者漏掉了一项重要研究？开一个 [Challenge issue](https://github.com/MbappeWU/citation-needed/issues/new?template=challenge.yml)。证据等级会公开升降，并署名感谢提供证据的人。想新增一条说法，用 [Propose](https://github.com/MbappeWU/citation-needed/issues/new?template=propose.yml)。贡献规则见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

文字和数据采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)：可以转载、改编，请保留署名并链回本仓库。脚本采用 MIT 许可证。
