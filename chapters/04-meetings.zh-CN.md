# 4. 会议、打断与办公室

关于专注时间和开放式办公室的各种说法，逐条核对。

[← 返回目录](../README.zh-CN.md) · [English](04-meetings.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据已比对，登记的引文片段已在摘要中匹配，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="meetings-23-minutes"></a>
### 每被打断一次，就要花 23 分钟才能恢复专注。

**✗ 不成立 · 证据等级 B** （现场观察、实验室实验和程序员日志三类研究互相吻合，都没有测出固定的 23 分钟恢复时间，但样本较小或只是间接证据。）

**研究怎么说.** 这个数字源自 Gloria Mark 2005 年对 24 名信息工作者的现场观察：被打断的工作平均隔约 23 到 25 分钟才被重新拾起，其间人们会先做约两件别的事。这是“隔多久回到原任务”，不是“多久才能重新专注”。2008 年一项 48 人的实验室实验发现，被打断的任务完成得更快、质量没有下降，但压力、挫败感和付出的努力更高。对 86 名程序员的日志研究发现，只有 10% 的会话在被打断后 1 分钟内恢复编码。恢复往往不快，但这些研究都不支持“固定 23 分钟”这个代价。

**局限.** 现场研究的 24 名信息工作者并非都是开发者；实验室研究是 48 人做的短时邮件任务；日志研究测的是何时恢复编辑，不是工作质量。它们都没有直接测过开发者的恢复时间。现场平均值在不同来源里有 23 分钟和 25 分钟两种说法。

> **对老板可以这样说:** 23 分钟是一项观察研究里人们平均隔多久才回到被打断的工作，不是重新专注所需的时间。打断确实有代价，所以我们把不紧急的消息集中处理，而不是引用这个数字。

**什么证据会让我改口.** 有研究用任务耗时或错误率，直接测量开发者被打断后恢复到正常效率所需的时间，并得到一个稳定的、接近 23 分钟的数字。

**出处** (核对于 2026-10-01):

1. Gloria Mark, Victor M. Gonzalez, Justin Harris (2005). No task left behind? Examining the nature of fragmented work. CHI 2005. [link](https://doi.org/10.1145/1054972.1055017) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)
2. Gloria Mark, Daniela Gudith, Ulrich Klocke (2008). The cost of interrupted work: more speed and stress. CHI 2008. [link](https://doi.org/10.1145/1357054.1357072) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
3. Chris Parnin, Spencer Rugaber (2011). Resumption strategies for interrupted programming tasks. Software Quality Journal 19(1). [link](https://doi.org/10.1007/s11219-010-9104-9) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="meetings-back-to-back"></a>
### 连续开会没什么害处。

**? 证据不足 · 证据等级 C** （唯一的直接检验是厂商自己做的 14 人研究，未经同行评审；这里没有任何研究测量开发者的产出或错误率。）

**研究怎么说.** 微软人因实验室（2021）让 14 个人戴上脑电帽，分两次各参加四场半小时的视频会议：一次连续进行，一次每场之间休息 10 分钟。没有休息时，代表压力的 β 波活动在会议中不断上升，并在两场会议之间的切换时段飙升；有休息时则回落。反映投入度的额叶 α 不对称指标，有休息时为正，没有休息时为负。这些只是实验室短任务里的脑电指标，不是工作产出的测量。

**局限.** 研究由厂商自己完成，以公司文章的形式发布，没有经过同行评审。只有 14 人，无法说明效应有多大。休息时段包含 Headspace 冥想，休息和冥想混在了一起。参与者是美国的远程信息工作者，并非专门的开发者。

> **对老板可以这样说:** 直接证据不多：微软一项 14 人的小实验发现，连续视频会议中压力信号不断累积，休息 10 分钟后会回落。我们能不能把会议默认设成 25 或 50 分钟，留出间隔？试一下成本很低。

**什么证据会让我改口.** 更大规模、经同行评审、以开发者为对象的实验，测量连续会议后（有无休息）的压力、错误或产出。

**出处** (核对于 2026-10-01):

1. Microsoft Human Factors Lab (2021). Research Proves Your Brain Needs Breaks. Microsoft WorkLab. [link](https://www.microsoft.com/en-us/worklab/work-trend-index/brain-research) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)

---

<a id="meetings-daily-standups"></a>
### 每日站会能改善团队协调。

**~ 视情况 · 证据等级 C** （证据来自对主观感受的访谈、观察和问卷，另有一项针对学生团队的小型干预研究；没有研究比较有无站会时的协调结果。）

**研究怎么说.** Stray 等人的研究发现，开发者认可站会用于共享信息、一起解决问题，而当站会变成向经理汇报进度时，反应很差。2017 年对 221 名开发者的问卷显示，态度略偏正面，资深开发者和大团队评价较低。2020 年的研究观察了 102 场站会，访谈了 15 个团队的 60 名成员，不少人有负面体验。2025 年一项针对学生团队的干预研究（58 人对 50 人）发现，站会与更高的心理安全感相关，并通过它与满意度和感知的团队绩效相关。

**局限.** 所有结果都是主观感受，问卷受访者是自愿参与的。干预研究的对象是学生团队，不是职业软件团队。这里引用的研究都没有比较有无站会的团队在交付速度、阻塞或返工上的差异，所以“改善协调”本身还没有被检验。

> **对老板可以这样说:** 站会用来共享信息、互相解围时有帮助，变成向经理汇报进度时反而有害。我们能不能先问问团队，我们的站会属于哪一种？如果是后一种，就精简它。

**什么证据会让我改口.** 对职业团队有无站会做对比，用被阻塞的工作量或返工量等协调结果来衡量，并发现明显差异。

**出处** (核对于 2026-10-01):

1. Viktoria Stray, Dag I. K. Sjøberg, Tore Dybå (2016). The daily stand-up meeting: A grounded theory study. Journal of Systems and Software 114. [link](https://doi.org/10.1016/j.jss.2016.01.004) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Viktoria Stray, Nils Brede Moe, Gunnar R. Bergersen (2017). Are daily stand-up meetings valuable? A survey of developers in software teams. XP 2017, Lecture Notes in Business Information Processing 283. [link](https://doi.org/10.1007/978-3-319-57633-6_20) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
3. Viktoria Stray, Nils Brede Moe, Dag I. K. Sjøberg (2018). Daily stand-up meetings: Start breaking the rules. IEEE Software 37(3), 2020. [link](https://arxiv.org/abs/1808.07650) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)
4. Sarah Rietze, Hannes Zacher (2025). Relations between daily stand-up meetings, work satisfaction, and team performance perceptions: the role of psychological safety. European Journal of Work and Organizational Psychology 34(5). [link](https://doi.org/10.1080/1359432X.2025.2508178) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)

---

<a id="meetings-focus-blocks"></a>
### 开发者需要长时间不被打断的整块时间才能高效工作。

**~ 视情况 · 证据等级 C** （大型自评问卷结论一致，一项小型随机试验方向相同，但生产力是自评的，所引研究也都没有把时间块长度与实测产出联系起来。）

**研究怎么说.** Meyer 等人（2014）调查了 379 名专业开发者并观察了 11 名：高效的一天意味着完成很多或很大的任务，且没有明显打断或上下文切换；但被观察的开发者实际上频繁切换任务，仍觉得自己高效。在 Microsoft 开发者的 5971 份回答中（Meyer 等，2019），会议和打断只在开发阶段是低效的，在计划、规格和发布阶段则有建设性。对 86 名程序员的日志研究（Parnin 和 Rugaber，2011）发现，只有 10% 的会话在被打断后 1 分钟内恢复编码。对 89 名开发者的随机试验（Das Swain 等，2023）显示，每天 2 小时的受保护时间提高了自评绩效和专注度，但没有提高实测的编码时间。

**局限.** 这里的生产力是自评的，试验中绩效和专注度的效应仅在 10% 水平上显著。这些研究都没有检验时间块需要多长，“半天”之类的说法来自 Paul Graham 的“创造者日程”等文章。2008 年的实验室实验发现，被打断的工作完成得更快，但压力更大。

> **对老板可以这样说:** 开发者说自己最高效的日子被打断很少，一项小型试验也显示受保护的专注时间提高了自评绩效。还没有人证明时间块要多长，所以我们先每天保护一两个小时，再看是否有效。

**什么证据会让我改口.** 有试验改变时间块的长度，并测量产出或缺陷（如合并的变更数或交付周期），结果显示碎片化的工作日并不会造成损失。

**出处** (核对于 2026-10-01):

1. André N. Meyer, Thomas Fritz, Gail C. Murphy, Thomas Zimmermann (2014). Software developers' perceptions of productivity. FSE 2014. [link](https://doi.org/10.1145/2635868.2635892) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)
2. André N. Meyer, Earl T. Barr, Christian Bird, Thomas Zimmermann (2019). Today was a good day: The daily life of software developers. IEEE Transactions on Software Engineering. [link](https://www.microsoft.com/en-us/research/publication/today-was-a-good-day-the-daily-life-of-software-developers/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
3. Chris Parnin, Spencer Rugaber (2011). Resumption strategies for interrupted programming tasks. Software Quality Journal 19(1). [link](https://doi.org/10.1007/s11219-010-9104-9) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
4. Vedant Das Swain, Javier Hernandez, Brian Houck, et al. (2023). Focused Time Saves Nine: Evaluating Computer-Assisted Protected Time for Hybrid Information Work. CHI 2023. [link](https://doi.org/10.1145/3544548.3581326) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)
5. Gloria Mark, Daniela Gudith, Ulrich Klocke (2008). The cost of interrupted work: more speed and stress. CHI 2008. [link](https://doi.org/10.1145/1357054.1357072) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="meetings-no-meeting-days"></a>
### 设立无会议日能提高生产力。

**? 证据不足 · 证据等级 C** （只有自评问卷数据和一项相关干预的小型随机试验；所引研究都没有测量过无会议日的实际产出。）

**研究怎么说.** 流传最广的数字来自对 76 家公司的问卷调查（Laker 等，2022）：会议减少 40% 时，报告的生产力高出 71%。这些是主观感受，也没有对照组。最强的对照证据是一家大型科技公司对 89 名工程开发人员做的随机试验（Das Swain 等，2023）：每天 2 小时关闭通知的受保护时间，提高了自评绩效、专注度和工作资源，但没有提高实测的编码时间。微软关于“无会议星期五”的报告（435 名员工）显示，77% 的人说专注时间更多，也有人说会议被挤到了其他日子。

**局限.** 76 家公司的调查是横断面的自评数据。随机试验测的是每天的受保护时段而不是整天无会，只持续 3 周、只在一家公司，部分效应仅在 10% 水平上显著。把会议挪到别的日子可能造成过载。这些研究都没有测量交付速度或缺陷。

> **对老板可以这样说:** 71% 这个数字来自自评问卷，不是实测产出。我愿意试行六周无会议日，同时记录交付周期和专注时长，这样我们就有自己的数据。

**什么证据会让我改口.** 在软件团队中随机或分批推行无会议日，用产出或交付时间而不是自评来衡量，并发现了提升。

**出处** (核对于 2026-10-01):

1. Benjamin Laker, Vijay Pereira, Pawan Budhwar, Ashish Malik (2022). The Surprising Impact of Meeting-Free Days. MIT Sloan Management Review 63(2). [link](https://sloanreview.mit.edu/article/the-surprising-impact-of-meeting-free-days/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. Vedant Das Swain, Javier Hernandez, Brian Houck, et al. (2023). Focused Time Saves Nine: Evaluating Computer-Assisted Protected Time for Hybrid Information Work. CHI 2023. [link](https://doi.org/10.1145/3544548.3581326) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)
3. Jaime Teevan, Nancy Baym, Jenna Butler, et al. (eds.) (2022). Microsoft New Future of Work Report 2022. Microsoft Research Tech Report MSR-TR-2022-3. [link](https://www.microsoft.com/en-us/research/wp-content/uploads/2022/04/Microsoft-New-Future-Of-Work-Report-2022.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="meetings-open-plan-collaboration"></a>
### 开放式办公室能促进协作。

**✗ 不成立 · 证据等级 B** （两家公司的一项自然实验，另有大规模问卷数据和系统综述佐证，但没有对照组，也并非专门针对软件团队。）

**研究怎么说.** Bernstein 和 Turban 用社会计量徽章和消息记录，跟踪了两家公司总部改为开放式办公前后的员工（一家 52 人，另一家 100 人）：两家公司的面对面互动都下降了约 70%，电子沟通增加。Kim 和 de Dear（2013）分析楼宇使用者问卷库（28,630 份开放式布局的回答），互动更方便带来的好处小于噪音增加和隐私减少的代价。Gerlitz 和 Hülsbeck（2023）对 46 项实证研究的系统综述认为，开放式办公室往往会降低绩效。

**局限.** 徽章研究没有对照组、测量时间短，对象是销售、人力、财务等部门的员工，不是软件团队，统计的是互动量，不是协作质量和产出。设计很重要：2020 年一家科技公司的现场实验里，分区开放式办公室和团队办公室的评价高于普通开放式办公室。

> **对老板可以这样说:** 一项对两家公司的前后对比研究发现，改成开放式办公室后，面对面交流减少了约 70%，电子消息增加。我不建议用“更多协作”来为开放式布局辩护。

**什么证据会让我改口.** 对软件团队做的、有对照或匹配良好的前后对比研究，显示改成开放式办公室后，面对面协作增多、交付更好。

**出处** (核对于 2026-10-01):

1. Ethan S. Bernstein, Stephen Turban (2018). The impact of the ‘open’ workspace on human collaboration. Philosophical Transactions of the Royal Society B 373. [link](https://doi.org/10.1098/rstb.2017.0239) <sub>✓✓ 元数据已比对，登记的引文片段已在摘要中匹配</sub> (主要来源)
2. Jungsoo Kim, Richard de Dear (2013). Workspace satisfaction: The privacy-communication trade-off in open-plan offices. Journal of Environmental Psychology 36. [link](https://researchers.mq.edu.au/en/publications/workspace-satisfaction-the-privacy-communication-trade-off-inopen/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)
3. Andrea Gerlitz, Marcel Hülsbeck (2023). The productivity tax of new office concepts: a comparative review of open-plan offices, activity-based working, and single-office concepts. Management Review Quarterly. [link](https://pmc.ncbi.nlm.nih.gov/articles/PMC9815683/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)
4. Jegar Pitchforth, Elizabeth Nelson-White, Marc van den Helder, Wouter Oosting (2020). The work environment pilot: An experiment to determine the optimal office design for a technology company. PLOS ONE 15(5). [link](https://doi.org/10.1371/journal.pone.0232943) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
