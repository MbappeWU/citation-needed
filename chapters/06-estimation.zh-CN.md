# 6. 估算与项目失败

计划为什么总会延期，以及哪些“失败率”数字不该再引用。

[← 返回目录](../README.zh-CN.md) · [English](06-estimation.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="estimation-anchoring-experts"></a>
### 有经验的估算者不会被锚定效应影响。

**✗ 不成立 · 证据等级 B** （多项针对软件从业者的对照实验（一项 381 人，另一项 410 人）发现了明显的锚定效应，但多数来自同一个研究团队。）

**研究怎么说.** Løhre 和 Jørgensen（2016）对 381 名软件从业者做了三个实验，证实数字锚点会改变工作量估算；锚点更模糊或来源更不可信时，效应并没有变小。Shepperd、Mair 和 Jørgensen（2018）在公司环境中对 410 名开发者做了两组实验：锚点效应很大（稳健 Cohen's d = 1.19），参加过认知偏差工作坊的人降到 d = 0.72，但没有消失。Aranda 和 Easterbrook（2005）的小型实验中，20 个月的锚点让估算远高于 2 个月的锚点，哪怕锚点来自自称没有软件经验的人。

**局限.** 多数研究来自同一个研究团队，是在实验中而不是真实项目里检验估算。Aranda 和 Easterbrook 的样本很小，学生和从业者混合。Jørgensen 和 Grimstad（2011）在外包公司做的现场实验同样发现误导性信息会改变估算，但作者提醒不要把实验室里的效应大小直接套到现场。

> **对老板可以这样说:** 对照实验里，专业开发者的估算会被先看到的数字拉偏，哪怕那个数字来自外行。我们先各自独立估算，再讨论目标数字，好吗？

**什么证据会让我改口.** 在真实投标或排期场景中，对资深从业者做的预注册复现显示，无关的锚点不影响估算。

**出处** (核对于 2026-10-01):

1. Erik Løhre, Magne Jørgensen (2016). Numerical anchors and their strong effects on software development effort estimates. Journal of Systems and Software 116. [link](https://doi.org/10.1016/j.jss.2015.03.015) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Martin Shepperd, Carolyn Mair, Magne Jørgensen (2018). An Experimental Evaluation of a De-biasing Intervention for Professional Software Developers. ACM Symposium on Applied Computing (SAC) 2018. [link](https://arxiv.org/abs/1804.03919) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Jorge Aranda, Steve Easterbrook (2005). Anchoring and adjustment in software estimation. ESEC/FSE-13 (ACM SIGSOFT Software Engineering Notes 30(5)). [link](https://doi.org/10.1145/1095430.1081761) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)
4. Magne Jørgensen, Stein Grimstad (2011). The Impact of Irrelevant and Misleading Information on Software Development Effort Estimates: A Randomized Controlled Field Experiment. IEEE Transactions on Software Engineering 37(5). [link](https://www.simula.no/research/impact-irrelevant-and-misleading-information-software-development-effort-estimates) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="estimation-careful-planning"></a>
### 只要计划做得足够细，软件估算就会准。

**✗ 不成立 · 证据等级 C** （证据是间接的：针对学生和日常任务的实验加一篇综述，没有在软件团队中改变计划详细程度的研究。）

**研究怎么说.** Buehler、Griffin 和 Ross（1994）让大学生预测自己写完荣誉论文要多久：平均预测 33.9 天，平均“最坏情况”预测 48.6 天；实际平均用了 55.5 天，只有约 30% 的人在预测时间内完成。作者发现，人们是按“计划情景”来预测的，很少参考类似任务过去花了多久。Halkjelsvik 和 Jørgensen 在 2012 年的综述中发现：实验室任务整体上没有一致的高估或低估，但规模较大的现实项目，工作量常被低估。

**局限.** 论文数据来自学生，不是软件团队。两个来源都没有直接检验计划详细程度的影响，只能说明光靠计划不能消除乐观偏差，不能说计划没用。对照过往项目数据来校验估算的做法，这里没有评估。

> **对老板可以这样说:** 计划谬误的研究发现，基于计划的预测往往偏乐观，较大的实际项目工作量也常被低估。能不能对照我们做过的类似工作实际花了多久，来检验这个估算？

**什么证据会让我改口.** 在软件团队中的对照研究显示，仅仅把计划做得更细，就能让估算与实际工作量的误差变小。

**出处** (核对于 2026-10-01):

1. Roger Buehler, Dale Griffin, Michael Ross (1994). Exploring the "planning fallacy": Why people underestimate their task completion times. Journal of Personality and Social Psychology 67(3). [link](https://doi.org/10.1037/0022-3514.67.3.366) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Torleif Halkjelsvik, Magne Jørgensen (2012). From origami to software development: A review of studies on judgment-based predictions of performance time. Psychological Bulletin 138(2). [link](https://doi.org/10.1037/a0025996) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="estimation-chaos-failure-rate"></a>
### 70% 的 IT 项目都会失败。

**✗ 不成立 · 证据等级 B** （两篇同行评议的批评一致，其中一篇用 Standish 的定义去套另外 1,211 个项目。它们证明这个数字不可靠，但没有给出真实的失败率。）

**研究怎么说.** 这个 70% 出自 Standish Group 的 CHAOS 报告。该报告只有在项目达到最初的成本、工期和范围预测时才算“成功”；1994 年的报告里，16.2% 成功，52.7%“受挑战”，31.1% 被取消。Eveleens 和 Verhoef（2010）把这些定义用在 1,211 个真实项目的 5,457 个预测上，发现它们只拿结果和最初预测比较，因此数字有误导性。Jørgensen 和 Moløkken-Østvold（2006）发现，该报告的平均成本超支 189%，远高于其他来源中约 30% 的典型误差，而且 Standish 向高管征集的是失败案例。

**局限.** 这只能说明该数字不可靠，不能说明真实失败率很低。“失败”取决于怎么定义，目前没有公认的度量。这些批评发表于 2006 到 2010 年，我们没有核查 Standish 后来各版的数据。Glass（2006）也提出过同样的抽样问题。

> **对老板可以这样说:** Standish 的数字只拿项目和最初的估算比较，已发表的批评认为这样会产生误导。引用失败率之前，我们先定义一下对我们来说什么算失败，比如被取消或没人用。

**什么证据会让我改口.** 有公开、经过独立审计的数据显示，按发起方的实际结果（而非最初估算）来定义，大约 70% 的 IT 项目确实失败。

**出处** (核对于 2026-10-01):

1. J. Laurenz Eveleens, Chris Verhoef (2010). The Rise and Fall of the Chaos Report Figures. IEEE Software 27(1). [link](https://doi.org/10.1109/MS.2009.154) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Magne Jørgensen, Kjetil Moløkken-Østvold (2006). How large are software cost overruns? A review of the 1994 CHAOS report. Information and Software Technology 48(4). [link](https://web-backend.simula.no/sites/default/files/publications/Jorgensen.2006.4.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (质疑)
3. Robert L. Glass (2006). The Standish report: does it really describe a software crisis?. Communications of the ACM 49(8). [link](https://doi.org/10.1145/1145287.1145301) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (质疑)
4. The Standish Group (1994). The CHAOS Report. The Standish Group International. [link](https://personal.utdallas.edu/~chung/SYSM6309/chaos_report.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="estimation-experts-vs-models"></a>
### 专家凭经验估算，不如正式的估算模型准确。

**✗ 不成立 · 证据等级 C** （主要依据一篇综述，作者长期研究专家估算；这里没有引用大规模的直接对比试验。）

**研究怎么说.** Jørgensen（2004）综述了软件开发工作量专家估算的研究：专家估算是软件项目中最常用的估算方式；综述发现，没有实质性证据支持采用估算模型，并指出在某些情形下，专家估算可能比正式模型更准。综述还整理了改进专家估算的做法，例如组合不同专家和不同方法的估算、使用检查清单、评估不确定性，以及向估算者反馈准确度。

**局限.** 这是 2004 年一位作者对此前研究的综述，只代表一位综述者的解读。“没有实质性证据支持模型”并不等于模型整体上更差。此后出现的新模型不在其范围内，各团队自己的数据也可能偏向任何一方。

> **对老板可以这样说:** 2004 年的一篇综述回顾了对比研究，没有发现实质性证据表明正式模型比专家估算更准。不如两种方法都做一遍，对比结果，差距大的地方再查原因。

**什么证据会让我改口.** 在当前的软件项目上做大规模、预注册的对比，模型和专家获得相同信息，结果显示模型明显更准。

**出处** (核对于 2026-10-01):

1. Magne Jørgensen (2004). A review of studies on expert estimation of software development effort. Journal of Systems and Software 70(1-2). [link](https://doi.org/10.1016/S0164-1212(02)00156-5) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="estimation-overrun-margin"></a>
### IT 项目的超支幅度是可预测的，留一个固定缓冲就够了。

**✗ 不成立 · 证据等级 C** （依据是同一个研究团队分析的一个大型项目数据集，发表在商业杂志上，另有一篇关于典型超支幅度的调查综述。）

**研究怎么说.** Flyvbjerg 和 Budzier（2011）分析了 1,471 个 IT 项目：平均成本超支 27%，但大约每 6 个项目就有 1 个是“黑天鹅”，其成本超支平均达 200%，工期超支近 70%。平均数掩盖了长尾。Jørgensen 和 Moløkken-Østvold（2006）综合其他来源，认为典型的成本估算误差约为 30%，与上述平均值接近。按平均值留的缓冲，覆盖不了这六分之一的项目。

**局限.** 1,471 个项目的样本是作者团队自己的数据，发表在商业杂志上，不是同行评议论文。我们没有核对关于长尾大小的第二个独立数据集。超支是相对于每个项目自己的基线估算来衡量的。

> **对老板可以这样说:** IT 项目平均超支约 27%，但大约每 6 个项目就有 1 个超支约 200%。统一留 30% 的缓冲盖不住这类项目，不如设置检查点，能及早重新规划或止损。

**什么证据会让我改口.** 多个独立数据集显示，同类 IT 项目的超支集中在很窄的范围内，固定缓冲就能覆盖几乎所有项目。

**出处** (核对于 2026-10-01):

1. Bent Flyvbjerg, Alexander Budzier (2011). Why Your IT Project May Be Riskier Than You Think. Harvard Business Review, September 2011 (author copy on arXiv). [link](https://arxiv.org/pdf/1304.0265) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. Magne Jørgensen, Kjetil Moløkken-Østvold (2006). How large are software cost overruns? A review of the 1994 CHAOS report. Information and Software Technology 48(4). [link](https://web-backend.simula.no/sites/default/files/publications/Jorgensen.2006.4.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="estimation-tight-deadlines"></a>
### 工期压得紧，团队的效率就更高。

**~ 视情况 · 证据等级 B** （依据是一篇涵盖 102 篇论文的系统综述和一家公司的项目现场研究；结论因指标不同而不同，所以只能说“视情况而定”。）

**研究怎么说.** Kuutila 等人的系统综述涵盖了软件工程中时间压力的 102 篇论文，报告称多数高质量研究发现：在时间压力下，生产率上升，质量下降。Nan 和 Harter（2009）分析了一家大型科技公司的项目：预算压力与开发周期、工作量都呈 U 形关系，压力适中时两者最低，压力过低或过高时都更高。

**局限.** 该综述汇总了设计和指标各异的研究，“生产率”并不是同一个数字。Nan 和 Harter 的数据来自一家公司，而且预算压力不等于紧工期。这些证据不能说明长达数月的交付会怎样。

> **对老板可以这样说:** 一篇涵盖 102 篇论文的综述发现，多数高质量研究显示时间压力下生产率上升、质量下降。如果压缩这个工期，我们愿意接受哪些质量风险？

**什么证据会让我改口.** 对可比项目的对照现场数据显示，缩短工期在数月内提高了交付价值，缺陷也没有增加。

**出处** (核对于 2026-10-01):

1. Miikka Kuutila, Mika Mäntylä, Umar Farooq, Maëlick Claes (2019). Time Pressure in Software Engineering: A Systematic Review. arXiv preprint; journal version in Information and Software Technology 121 (2020). [link](https://arxiv.org/abs/1901.05771) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Ning Nan, Donald E. Harter (2009). Impact of Budget and Schedule Pressure on Software Development Cycle Time and Effort. IEEE Transactions on Software Engineering 35(5). [link](https://doi.org/10.1109/TSE.2009.18) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
