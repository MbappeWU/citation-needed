# 2. 度量效能

什么该数，什么会误导，以及为什么团队越大人均产出越低。

[← 返回目录](../README.zh-CN.md) · [English](02-measure.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="measure-commits-per-dev"></a>
### 每位开发者的提交数或 PR 数，能看出谁的表现最好。

**✗ 不成立 · 证据等级 C** （我们没有找到验证研究。依据是一篇框架论文和一项问卷调查，基本属于专家论证。）

**研究怎么说.** SPACE 框架的作者（Forsgren、Storey、Maddila、Zimmermann、Houck、Butler）把提交数、PR 数之类的计数归为“活动”，它只是效能五个维度之一。他们指出，度量必须考虑隐性工作和连带影响，例如为追求活动量而牺牲满意度和心流。在三家公司 622 名开发者的问卷中，自评效能与工作热情、同事对新想法的支持、有用的反馈等非技术因素关联最强，这些是提交数反映不出来的。

**局限.** 我们没有找到把每人提交数或 PR 数与独立绩效评价对照的研究，所以本条结论部分来自证据缺失。该问卷用的是自评效能，不是上级或同事评价。

> **对老板可以这样说:** 提交数和 PR 数反映的是活动量，SPACE 的作者指出，度量必须考虑计数看不到的隐性工作。我会用它们引出讨论，而不是给人排名。

**什么证据会让我改口.** 有研究在不同团队和代码库中，证明每人提交数或 PR 数与独立的同行评价或结果指标相关，且在计数被用于考核后这种相关依然存在。

**出处** (核对于 2026-10-01):

1. Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, Jenna Butler (2021). The SPACE of Developer Productivity: There's more to it than you think.. ACM Queue 19(1). [link](https://doi.org/10.1145/3454122.3454124) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Emerson Murphy-Hill, Ciera Jaspan, Caitlin Sadowski, David Shepherd, Michael Phillips, Collin Winter, Andrea Knight, Edward Smith, Matthew Jorde (2021). What Predicts Software Developers' Productivity?. IEEE Transactions on Software Engineering 47, pp. 582-594. [link](https://2020.icse-conferences.org/details/icse-2020-Journal-First/10/What-Predicts-Software-Developers-Productivity-) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="measure-dora-predict"></a>
### DORA 的四个关键指标能预测团队的表现。

**~ 视情况 · 证据等级 C** （是持续多年的行业问卷调查，但出自同一个研究项目，两端都靠自评，我们没有找到多少独立复现。）

**研究怎么说.** 四个关键指标是部署频率、变更前置时间、变更失败率和服务恢复时间。《Accelerate》背后的 DORA 调查显示，所在团队在这四项指标上得分高的受访者，也报告了更好的组织绩效。指标和结果都来自问卷自评，所以这只能说明相关，不是面向未来的预测。Sallin 等人指出，这四项指标常靠手工或问卷收集，数据点很少。DORA 2024 年报告中，中等表现组的变更失败率低于高表现组，可见分组标签并不在每项指标上都排得出高下。

**局限.** 这是同一个研究项目的结果，我们没有找到多少独立复现。这些指标描述的是软件交付，不是业务结果或开发者体验，应当作为一组来看。

> **对老板可以这样说:** 四个关键指标适合用来检查我们的交付流程，在 DORA 的调查中它们也与更好的组织绩效相伴出现。它们不是预测工具，应该四项一起看，而不是只盯一项。

**什么证据会让我改口.** 有纵向研究或独立团队的研究显示：控制了此前的表现后，四项指标的变化先于已测得的业务结果的变化。

**出处** (核对于 2026-10-01):

1. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. DORA, Google Cloud (2024). Accelerate State of DevOps Report 2024. Google Cloud DORA. [link](https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
3. Marc Sallin, Martin Kropp, Craig Anslow, James W. Quilty, Andreas Meier (2021). Measuring Software Delivery Performance Using the Four Key Metrics of DevOps. XP 2021, Lecture Notes in Business Information Processing. [link](https://digitalcollection.zhaw.ch/handle/11475/22989) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="measure-lines-of-code"></a>
### 代码行数是衡量开发者效能的合理指标。

**✗ 不成立 · 证据等级 C** （系统综述与一项跨语言对比的结论一致，但主要是对度量方法的批评，我们没有找到在实践中检验以代码行数为目标的研究。）

**研究怎么说.** Petersen 对 38 项软件效能度量研究做了系统综述，指出“产出除以投入”这类简单比值存在问题，代码行数和功能点都不例外。Prechelt 对比了同一程序在七种语言下的 80 份实现：Perl、Python、Rexx、Tcl 的版本长度约为 C、C++、Java 版本的一半。《Accelerate》的作者认为，按代码行数奖励会得到臃肿的软件，维护和变更成本更高。

**局限.** Prechelt 研究中的程序员不是随机分配到各语言的，数据来自 2000 年。Petersen 梳理的是度量本身的问题，并未在真实团队中检验以行数为目标的效果。

> **对老板可以这样说:** 代码行数主要反映语言和写法。有研究让人用七种语言写同一个程序，Perl、Python、Rexx、Tcl 的版本约为 C、C++、Java 的一半长，按行数给人排名，等于给工具排名。

**什么证据会让我改口.** 有研究在同一种语言、同一个代码库里，证明个人代码行数与独立的质量和交付结果相关，且在行数成为考核目标后这种相关依然成立。

**出处** (核对于 2026-10-01):

1. Kai Petersen (2011). Measuring and predicting software productivity: A systematic map and review. Information and Software Technology 53(4). [link](https://doi.org/10.1016/j.infsof.2010.12.001) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Lutz Prechelt (2000). An empirical comparison of seven programming languages. Computer 33(10). [link](https://www.cs.tufts.edu/~nr/cs257/archive/lutz-prechelt/comparison.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
3. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="measure-releases-output"></a>
### 发布次数、上线功能数或完成的工单数，可以衡量团队的产出。

**✗ 不成立 · 证据等级 C** （依据是 DORA 作者的度量设计和一项系统综述，属于对度量方法的论证。我们没有找到把发布次数当作产出度量来检验的研究。）

**研究怎么说.** 《Accelerate》的作者认为，绩效度量应当反映成果而不是产出，也不应奖励无效的忙碌。DORA 统计部署频率，但它只是四项指标之一，另三项是变更前置时间、变更失败率和服务恢复时间。DORA 2024 年报告中，中等表现组的吞吐量低于高表现组，变更失败率却更低，说明发布得多并不保证稳定。Petersen 对 38 项研究的综述指出，“产出除以投入”的简单比值存在问题。

**局限.** 我们没有找到把发布次数、功能数或工单数当作产出来检验的研究，所以本条依据的是度量逻辑。在 DORA 的调查中，部署频率与另外三项指标同步变化，但它反映的是交付能力，不是完成的工作量。

> **对老板可以这样说:** 一次发布是一个事件，不是一个工作量单位，发布次数没变并不能说明效率下降了。DORA 也是把发布频率和前置时间、失败率、恢复时间放在一起看。

**什么证据会让我改口.** 有证据显示：在规模和发布策略不同的团队之间，发布次数或工单数与独立测得的投入和交付价值相吻合。

**出处** (核对于 2026-10-01):

1. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. DORA, Google Cloud (2024). Accelerate State of DevOps Report 2024. Google Cloud DORA. [link](https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
3. Kai Petersen (2011). Measuring and predicting software productivity: A systematic map and review. Information and Software Technology 53(4). [link](https://doi.org/10.1016/j.infsof.2010.12.001) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (背景)

---

<a id="measure-satisfaction-leading"></a>
### 开发者满意度是效能的领先指标。

**~ 视情况 · 证据等级 C** （时间先后方面最好的证据来自软件行业之外。软件行业里我们只找到横断面问卷和访谈研究。）

**研究怎么说.** Riketta 对 16 项追踪同一批员工的面板研究做了荟萃分析，检验谁在先。工作态度对之后的绩效只有微弱的预测力（β = .06，已控制基线绩效），绩效对之后的工作态度则没有预测力（β = .00）。Judge 等人汇总 312 个样本，估计工作满意度与工作绩效的相关为 .30。在三家公司的 622 名开发者中，工作热情、同事对新想法的支持和有用的反馈，是与自评效能关联最强的因素之一。

**局限.** 两项荟萃分析都不是针对软件行业的。软件行业的证据是横断面的，两端都靠自评，无法说明谁先变化。DevEx 框架（Greiler 等、Noda 等）来自对 21 名开发者的访谈，没有检验预测力。

> **对老板可以这样说:** 满意度调查值得做，但我不会承诺它能预测产出。16 项面板研究里，工作态度对之后绩效的影响很小，而软件行业现有的问卷研究无法说明谁先谁后。

**什么证据会让我改口.** 有针对软件团队的纵向研究显示：控制此前绩效后，满意度得分能预测之后的交付或质量结果。

**出处** (核对于 2026-10-01):

1. Michael Riketta (2008). The causal relation between job attitudes and performance: A meta-analysis of panel studies. Journal of Applied Psychology 93(2). [link](https://doi.org/10.1037/0021-9010.93.2.472) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Timothy A. Judge, Carl J. Thoresen, Joyce E. Bono, Gregory K. Patton (2001). The job satisfaction–job performance relationship: A qualitative and quantitative review. Psychological Bulletin 127(3). [link](https://doi.org/10.1037/0033-2909.127.3.376) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)
3. Emerson Murphy-Hill, Ciera Jaspan, Caitlin Sadowski, David Shepherd, Michael Phillips, Collin Winter, Andrea Knight, Edward Smith, Matthew Jorde (2021). What Predicts Software Developers' Productivity?. IEEE Transactions on Software Engineering 47, pp. 582-594. [link](https://2020.icse-conferences.org/details/icse-2020-Journal-First/10/What-Predicts-Software-Developers-Productivity-) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)
4. Michaela Greiler, Margaret-Anne Storey, Abi Noda (2022). An Actionable Framework for Understanding and Improving Developer Experience. IEEE Transactions on Software Engineering 49(4), 2023. [link](https://arxiv.org/abs/2205.06352) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)
5. Abi Noda, Margaret-Anne Storey, Nicole Forsgren, Michaela Greiler (2023). DevEx: What Actually Drives Productivity: The developer-centric approach to measuring and improving productivity. ACM Queue 21(2). [link](https://doi.org/10.1145/3595878) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="measure-single-metric"></a>
### 一个指标就能反映开发者的效能。

**✗ 不成立 · 证据等级 C** （依据是专家提出的框架和一项系统综述。没有研究拿单一指标去对照多维度基准检验过。）

**研究怎么说.** SPACE 论文指出，开发者效能无法用单一指标或单一维度衡量，并列出五个维度：满意度与幸福感、绩效、活动、沟通与协作、效率与心流。Petersen 对 38 项效能研究的综述指出简单比值度量存在问题，并提出数据包络分析等多变量方法。在三家公司 622 名开发者的问卷中，自评效能与工作热情、同事支持等非技术因素关联最强。DORA 本身也用四项指标。

**局限.** 主要是专家论证和对度量问题的综述。窄指标仍可回答窄问题，例如构建要多久。

> **对老板可以这样说:** 任何单一数字都会漏掉一部分情况。SPACE 的作者建议围绕目标，跨多个维度选取均衡的指标；连 DORA 也是用四项指标，而不是一项。

**什么证据会让我改口.** 有经验证的单一指标，能在不同团队和公司中预测交付、质量、留任等独立结果，并且在被当作目标时不易被操纵。

**出处** (核对于 2026-10-01):

1. Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, Jenna Butler (2021). The SPACE of Developer Productivity: There's more to it than you think.. ACM Queue 19(1). [link](https://doi.org/10.1145/3454122.3454124) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Kai Petersen (2011). Measuring and predicting software productivity: A systematic map and review. Information and Software Technology 53(4). [link](https://doi.org/10.1016/j.infsof.2010.12.001) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Emerson Murphy-Hill, Ciera Jaspan, Caitlin Sadowski, David Shepherd, Michael Phillips, Collin Winter, Andrea Knight, Edward Smith, Matthew Jorde (2021). What Predicts Software Developers' Productivity?. IEEE Transactions on Software Engineering 47, pp. 582-594. [link](https://2020.icse-conferences.org/details/icse-2020-Journal-First/10/What-Predicts-Software-Developers-Productivity-) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)
4. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="measure-velocity-compare"></a>
### 用故事点算出的速率，可以用来比较不同团队。

**✗ 不成立 · 证据等级 C** （一项大型开源项目分析与 DORA 作者的论证一致，但我们没有找到直接检验跨团队比较的研究。）

**研究怎么说.** Tawosi、Moussa 和 Sarro 分析了 Jira 中 37 个开源项目的 37,440 条用户故事。综合三种相关系数，故事点与估算的开发时间只在 7% 的项目中强相关，58% 为中等相关，35% 为弱相关。《Accelerate》的作者指出：速率本是容量规划工具，具有相对性并依赖于团队，一旦当作效能指标就会被刻意操纵。

**局限.** 数据来自开源项目，开发时间是估算值，不是实测值。研究针对项目内部，而不是跨团队。速率仍可帮助单个团队规划自己的迭代。

> **对老板可以这样说:** 故事点是各团队自己的计量单位，一个团队 40 点、另一个 25 点，并不能说明谁交付得更多。37 个开源项目的研究里，故事点与开发时间强相关的只占 7%。

**什么证据会让我改口.** 有证据显示：采用统一基准校准的团队，其速率与独立测得的交付结果吻合，且在速率成为考核目标后依然稳定。

**出处** (核对于 2026-10-01):

1. Vali Tawosi, Rebecca Moussa, Federica Sarro (2022). On the Relationship Between Story Points and Development Effort in Agile Open-Source Software. ESEM 2022. [link](https://doi.org/10.1145/3544902.3546238) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
