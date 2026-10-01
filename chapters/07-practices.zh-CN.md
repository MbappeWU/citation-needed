# 7. 工程实践

结对编程、TDD、代码评审、类型系统、技术债。

[← 返回目录](../README.zh-CN.md) · [English](07-practices.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="practices-10x-programmer"></a>
### 存在 10 倍程序员：有些开发者的效能是同行的十倍。

**? 证据不足 · 证据等级 C** （证据来自年代久远的小型实验室研究和一次重新分析；我们没有找到针对真实团队项目的有力实地研究。）

**研究怎么说.** 10 倍程序员的说法源于 20 世纪 60 年代让程序员各自独立工作的实验室研究（Sackman、Erikson 和 Grant，1968），其中最有名的数字是最慢与最快的人相差 28 比 1。Prechelt（1999）用更大的程序员工时数据集重新检验了这一数字，认为 28:1 既不正确又有误导性，并提出了衡量个体差异的更合适指标。

**局限.** 小样本里最极端的两个人之间的比值，说明不了普通开发者之间的差距。这些数据来自个人任务，而不是几个月的团队工作，而团队工作中工具、队友和任务类型都有影响。什么算效能本身也有争议。

> **对老板可以这样说:** 10 倍这个著名数字来自 20 世纪 60 年代的实验室研究，后来的重新分析认为它的 28:1 既不正确又有误导性。人与人确有差别，但我们不要围绕一个无法衡量的 10 倍标签来招聘或定薪。

**什么证据会让我改口.** 一项在真实团队项目中跟踪大量开发者数月的研究，显示强的开发者与中位水平的开发者之间存在稳定的约十倍差距。

**出处** (核对于 2026-10-01):

1. H. Sackman, W. J. Erikson, E. E. Grant (1968). Exploratory experimental studies comparing online and offline programming performance. Communications of the ACM 11(1). [link](https://doi.org/10.1145/362851.362858) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Lutz Prechelt (1999). The 28:1 Grant/Sackman legend is misleading, or: How large is interpersonal variation really?. Technical Report 1999-18. [link](https://page.mi.fu-berlin.de/prechelt/Biblio/varianceTR.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (质疑)

---

<a id="practices-agile-succeeds"></a>
### 敏捷项目比瀑布项目更容易成功。

**~ 视情况 · 证据等级 C** （系统综述认为证据强度较低，最大的研究是自报式问卷调查，没有对照比较。）

**研究怎么说.** Serrador 和 Pinto（2015）调查了来自不同行业和国家的 1,002 个项目：项目的敏捷程度越高，在效率和利益相关方满意度这两项成功指标上得分越高，且在统计上显著。此前，Dybå 和 Dingsøyr（2008）检索了截至 2005 年的文献：1,996 项研究中，有 36 项作为质量可接受的实证研究入选，且多数研究的是极限编程（XP）。他们认为证据强度较低，并呼吁开展更多、更好的研究。

**局限.** 成功与否来自问卷作答，而非经审计的结果；选择敏捷的团队在其他方面也可能不同。该调查衡量的是敏捷使用程度，不是干净的敏捷与瀑布二分。2008 年的综述只覆盖到 2005 年。据我们所知没有随机对照比较。

> **对老板可以这样说:** 我们找到的最大规模调查（1,002 个项目）显示，越敏捷，效率和利益相关方满意度越高；但系统综述认为证据强度较低。我们应该用自己的交付数据来评判流程，而不是看标签。

**什么证据会让我改口.** 对从事同类工作的敏捷团队和计划驱动团队做对照或配对比较，并由团队之外的渠道独立度量结果。

**出处** (核对于 2026-10-01):

1. Pedro Serrador, Jeffrey K. Pinto (2015). Does Agile work? A quantitative analysis of agile project success. International Journal of Project Management 33(5). [link](https://pure.psu.edu/en/publications/does-agile-work-a-quantitative-analysis-of-agile-project-success/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. Tore Dybå, Torgeir Dingsøyr (2008). Empirical studies of agile software development: A systematic review. Information and Software Technology 50(9-10). [link](https://doi.org/10.1016/j.infsof.2008.01.006) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (背景)

---

<a id="practices-code-review-bugs"></a>
### 代码评审主要是用来发现缺陷的。

**✗ 不成立 · 证据等级 B** （工业界、学生和开源三种场景下的三项观察性研究结论一致，但它们是对评审发现做分类，而不是度量线上缺陷。）

**研究怎么说.** 在微软，Bacchelli 和 Bird（2013）对 570 条评审评论做了分类：78 条（14%）与缺陷有关，165 条（29%）是代码改进，且多数缺陷评论只是简单的逻辑小错。在 873 名受访程序员中，383 人（44%）把发现缺陷列为做评审的首要原因。Mäntylä 和 Lassenius（2009）发现，在工业界和学生的评审中，发现的缺陷约 75% 是可演进性（可维护性）问题，25% 是功能缺陷。Beller 等人（2014）在两个开源项目的 1,400 多处改动中也得到同样的 75:25。

**局限.** 这些研究只对评论和修改的内容做分类，没有度量评审避免了多少线上缺陷。评审确实会发现真实的缺陷，不同团队的构成可能不同。研究发表于 2009 到 2014 年。

> **对老板可以这样说:** 在微软，只有 14% 的评审评论与缺陷有关；对其他团队的研究发现，评审发现的问题约 75% 属于可维护性。评审要留着，用来共享知识和保持可维护性，但别把它当成主要的缺陷过滤器。

**什么证据会让我改口.** 近期对大量团队评审发现的大规模分类，显示其中多数是功能缺陷。

**出处** (核对于 2026-10-01):

1. Alberto Bacchelli, Christian Bird (2013). Expectations, outcomes, and challenges of modern code review. ICSE 2013. [link](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/ICSE202013-codereview.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. Mika V. Mäntylä, Casper Lassenius (2009). What Types of Defects Are Really Discovered in Code Reviews?. IEEE Transactions on Software Engineering 35(3). [link](https://doi.org/10.1109/TSE.2008.71) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Moritz Beller, Alberto Bacchelli, Andy Zaidman, Elmar Juergens (2014). Modern code reviews in open-source projects: which problems do they fix?. MSR 2014. [link](https://doi.org/10.1145/2597073.2597082) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (复现)

---

<a id="practices-pair-programming"></a>
### 结对编程能提高代码质量。

**~ 视情况 · 证据等级 B** （一项对照实验的荟萃分析，但各研究之间差异很大，有发表偏倚的迹象，而且多为短任务。）

**研究怎么说.** Hannay、Dybå、Arisholm 和 Sjøberg（2009）对比较结对与单人编程的实验做了荟萃分析：结对对质量有小幅正面影响，对工期有中等程度的正面影响（结对完成得更快），对工作量有中等程度的负面影响（总人时更多）。简单任务上结对更快，复杂任务上结对写出的代码质量更高；但复杂任务上的质量提升以明显更长的工期为代价，简单任务上的速度提升以明显更多的工作量为代价。作者的结论是，结对编程并不是在所有情况下都有益。

**局限.** 多数实验用的是短任务，说明不了几个月的真实项目工作。各研究的结果差异很大，作者还发现了发表偏倚的迹象。效果取决于任务的复杂程度。

> **对老板可以这样说:** 对结对编程实验的荟萃分析发现，质量只有小幅提升，但总人时更多。我们把结对用在难度高、风险大的任务上，那里质量提升才明显，不必处处结对。

**什么证据会让我改口.** 一项对专业团队的对照研究：在真实项目中连续数月比较结对与单人开发，结果显示在总工作量相近时，逃逸到线上的缺陷更少。

**出处** (核对于 2026-10-01):

1. Jo E. Hannay, Tore Dybå, Erik Arisholm, Dag I. K. Sjøberg (2009). The effectiveness of pair programming: A meta-analysis. Information and Software Technology 51(7). [link](https://doi.org/10.1016/j.infsof.2009.02.001) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="practices-speed-incidents"></a>
### 发布得越快，线上事故就越多。

**~ 视情况 · 证据等级 C** （调查结果一致，另有一家公司的经验报告，但数据是自报的、只反映相关性，且由厂商运营。）

**研究怎么说.** DORA 每年的调查（Forsgren、Humble 和 Kim 的《Accelerate》，2018 年，对此有总结）发现，速度与稳定性是同向变化的：部署更频繁、前置时间更短的团队，也报告了更低的变更失败率和更快的恢复。Google 的《站点可靠性工程》一书称，约 70% 的故障由对线上系统的变更引起，并称渐进式发布、快速发现和安全回滚能同时提高发布速度和安全性。这种关系并非完全一致：DORA 2024 年报告中，中等表现组的变更失败率低于高表现组。

**局限.** DORA 的数据是自报的问卷结果，只能说明相关，且来自 Google Cloud 运营的项目。发布快的团队可能本来就有可靠的测试和小改动，只提速未必能复制其结果。70% 是一家公司的经验，不是研究。

> **对老板可以这样说:** DORA 的调查发现，发布更频繁的团队，变更失败反而更少。Google 的 SRE 书把约 70% 的故障归因于变更，并称渐进式发布和快速回滚能同时提高速度和安全性。我们小批量提速，并持续跟踪变更失败率。

**什么证据会让我改口.** 一项对提速发布的团队做前后对比的研究，全程用同一口径统计事故，显示事故持续增加。

**出处** (核对于 2026-10-01):

1. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. DORA, Google Cloud (2024). Accelerate State of DevOps Report 2024. Google Cloud DORA. [link](https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
3. Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy (2016). Site Reliability Engineering: How Google Runs Production Systems. O'Reilly Media. [link](https://sre.google/sre-book/introduction/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="practices-static-typing-bugs"></a>
### 静态类型能防止缺陷。

**~ 视情况 · 证据等级 B** （两项观察性研究：一项只涉及 JavaScript，另一项是有争议的 GitHub 数据重新分析，都不是对照检验。）

**研究怎么说.** Gao、Bird 和 Barr（2017）从公开的 JavaScript 项目中取真实缺陷，手工加上类型标注，检查 Flow 或 TypeScript 能否报出：两者都检出了 15%。在 GitHub 规模上，Ray 等人（2014）在 729 个项目中发现语言特性（包括类型）与缺陷之间存在较小的关联。Berger 等人 2019 年的复现研究发现该分析有缺陷，把与缺陷相关的语言从 11 种减到 4 种，并称实际效应量极小。

**局限.** 15% 只针对一种语言，且是已提交到公开仓库的缺陷，类型标注是事后补上的；它没有计入加类型的成本和其他好处。GitHub 研究的原作者不同意重新分析的结论。两项研究都不是对照实验。

> **对老板可以这样说:** 有一项研究发现，类型检查器能抓住约 15% 的真实 JavaScript 缺陷，这值得要；但 GitHub 规模上类型与缺陷更少之间的关联，经重新分析后变弱了。采用类型是为了它抓到的那些缺陷，而不是指望缺陷大幅减少。

**什么证据会让我改口.** 一项在生产代码上、带对照组的预注册研究，显示加上静态类型能降低缺陷率，且重新分析后效应依然成立。

**出处** (核对于 2026-10-01):

1. Zheng Gao, Christian Bird, Earl T. Barr (2017). To Type or Not to Type: Quantifying Detectable Bugs in JavaScript. ICSE 2017. [link](https://doi.org/10.1109/ICSE.2017.75) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Baishakhi Ray, Daryl Posnett, Vladimir Filkov, Premkumar Devanbu (2014). A Large Scale Study of Programming Languages and Code Quality in Github. FSE 2014. [link](https://doi.org/10.1145/2635868.2635922) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
3. Emery D. Berger, Celeste Hollenbeck, Petr Maj, Olga Vitek, Jan Vitek (2019). On the Impact of Programming Languages on Code Quality: A Reproduction Study. ACM Transactions on Programming Languages and Systems 41(4). [link](https://doi.org/10.1145/3340571) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (复现)

---

<a id="practices-tdd-defects"></a>
### 测试驱动开发（TDD）能减少缺陷。

**~ 视情况 · 证据等级 B** （一项涵盖 27 项研究的荟萃分析，加上一项针对专业开发者的研究；但多为小型实验，工业界和学术界的结果也不一致。）

**研究怎么说.** Rafique 和 Mišić（2013）对 27 项研究做了荟萃分析：TDD 对外部质量（缺陷更少）有小幅正面影响，对生产率几乎没有可察觉的影响；与学术研究相比，工业界研究中的质量收益和生产率下降都更大。Fucci 等人（2017）分析了 39 名专业开发者完成的 82 次任务：先写测试还是后写测试，对质量和生产率都没有重要影响；开发节奏短而均匀，则与更好的质量和生产率相伴出现。

**局限.** 多数实验规模小、时间短，不少以学生为对象。结果不一致，汇总出的单一数字不稳。Fucci 的研究是观察性的，只能说明相关，不能说明因果。

> **对老板可以这样说:** 27 项研究的荟萃分析发现 TDD 只带来小幅质量提升，对速度没有明确影响；另一项针对专业开发者的研究发现先写测试并不重要。我们坚持小步前进、写好测试，但不强制先写测试。

**什么证据会让我改口.** 针对专业团队的大规模预注册实验，显示先写测试能持续减少逃逸到线上的缺陷，且成本可以衡量。

**出处** (核对于 2026-10-01):

1. Yahya Rafique, Vojislav B. Mišić (2013). The Effects of Test-Driven Development on External Quality and Productivity: A Meta-Analysis. IEEE Transactions on Software Engineering 39(6). [link](https://doi.org/10.1109/TSE.2012.28) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Davide Fucci, Hakan Erdogmus, Burak Turhan, Markku Oivo, Natalia Juristo (2017). A Dissection of the Test-Driven Development Process: Does It Really Matter to Test-First or to Test-Last?. IEEE Transactions on Software Engineering 43(7). [link](https://doi.org/10.1109/TSE.2016.2616877) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="practices-tech-debt-slows"></a>
### 技术债会拖慢团队。

**✓ 成立 · 证据等级 B** （两条独立的观察性证据一致（挖掘了 39 个代码库，调查了 43 名开发者），但都不是实验，其中一项的指标来自第一作者所在的公司。）

**研究怎么说.** Tornhill 和 Borg（2022）用代码质量指标、问题单数据和版本控制历史，分析了 39 个闭源生产代码库（30,737 个文件）：低质量代码的缺陷是高质量代码的 15 倍，解决其中的问题平均多花 124% 的开发时间，最长周期时间是后者的 9 倍。在对 43 名开发者的调查中，Besker、Martini 和 Bosch（2019）发现，开发者平均自报有 23% 的开发时间因技术债而浪费。

**局限.** 这是观察性证据：低质量代码也可能恰好位于系统中最难的部分。质量指标 Code Health 来自第一作者所在的公司，23% 是自报数字。两项研究都没有检验还清技术债能否恢复开发速度。

> **对老板可以这样说:** 在对 39 个代码库的研究中，低质量代码上的问题平均多花 124% 的开发时间，缺陷是高质量代码的 15 倍。我们每个迭代拨出固定比例的时间处理最差的热点，并跟踪那里的周期时间是否改善。

**什么证据会让我改口.** 一项对照研究或前后对比研究，显示重构低质量代码并不能缩短交付时间或减少缺陷。

**出处** (核对于 2026-10-01):

1. Adam Tornhill, Markus Borg (2022). Code Red: The Business Impact of Code Quality - A Quantitative Study of 39 Proprietary Production Codebases. TechDebt 2022. [link](https://arxiv.org/abs/2203.04374) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Terese Besker, Antonio Martini, Jan Bosch (2019). Software developer productivity loss due to technical debt: A replication and extension study examining developers' development work. Journal of Systems and Software 156. [link](https://research.chalmers.se/publication/511450/file/511450_Fulltext.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
