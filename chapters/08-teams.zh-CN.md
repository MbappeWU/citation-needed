# 8. 团队规模与结构

布鲁克斯定律、康威定律、心理安全感。

[← 返回目录](../README.zh-CN.md) · [English](08-teams.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="teams-best-size-five-to-nine"></a>
### 最佳团队规模是 5 到 9 人。

**~ 视情况 · 证据等级 C** （数据是横截面的，部分来自厂商或非软件领域，且没有一项研究确定了最优规模。）

**研究怎么说.** 我们查阅的研究中，没有一项得出“最优是 5 到 9 人”。Wheelan（2009）研究了营利和非营利组织的 329 个工作小组（不是软件样本）：3 到 6 人的小组比 7 到 10 人、11 人及以上的更高产，3 到 8 人的小组也优于 9 人及以上。Rodríguez 等人基于 ISBSG 项目数据，报告 9 人及以上团队的生产率较低。估算工具厂商 QSM 的数据（约 1060 个项目）显示，4 人及以下的项目比 5 人及以上的项目耗费的工作量低得多。

**局限.** 这里的生产率是人均产出或按项目规模折算，不是交付的价值。大团队的总产出仍可能更高。ISBSG 和 QSM 的数据来自自愿提供的企业。最佳规模取决于工作内容以及能否拆分。

> **对老板可以这样说:** Wheelan 对 329 个工作小组的研究和 ISBSG 项目数据都显示，团队到 9 人左右生产率明显下降；但两者都没有证明 5 到 9 人是最优区间。所以按工作量定团队规模，在能完成工作的前提下尽量小。

**什么证据会让我改口.** 一项让不同规模的软件团队做可比工作、用同一口径衡量产出和质量的研究，清楚显示峰值在 5 到 9 人。

**出处** (核对于 2026-10-01):

1. Susan A. Wheelan (2009). Group Size, Group Development, and Group Productivity. Small Group Research 40(2). [link](https://doi.org/10.1177/1046496408328703) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. D. Rodríguez, M. A. Sicilia, E. García, R. Harrison (2012). Empirical findings on team size and productivity in software development. Journal of Systems and Software 85(3). [link](https://doi.org/10.1016/j.jss.2011.09.009) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
3. Kate Armel (QSM) (2012). Part II: Small Teams Deliver Lower Cost, Higher Quality. QSM, vendor analysis of the QSM SLIM project database. [link](https://www.qsm.com/blog/2012/part-ii-small-teams-deliver-lower-cost-higher-quality) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="teams-brooks-law"></a>
### 给已经延期的项目加人，会让它更晚交付。

**~ 视情况 · 证据等级 C** （该定律基于作者个人经验和仿真模型，我们没有找到对延期项目加人的对照研究。）

**研究怎么说.** Brooks（1975）依据自己管理 IBM OS/360 项目的经验提出这条规律，并坦言这是“夸张的简化”。他给出的理由：新人需要培训，沟通成本随人数增长，工作还要重新拆分。Abdel-Hamid 和 Madnick（1991）的项目仿真显示：后期加人总会推高成本，但不一定拖慢交付，关键看加人的时机和数量。Scholtes 等人的开源数据（58 个项目）显示团队越大人均产出越低，这与沟通开销的解释一致，但并没有检验“后期加人”。

**局限.** 仿真结果取决于建模假设。结果还取决于项目延期的原因、工作能否拆分，以及新人的上手方式。大团队数据也无法单独识别“后期加人”的影响。

> **对老板可以这样说:** Brooks 本人也说这是过分简化。在 Abdel-Hamid 和 Madnick 的仿真中，后期加人总会推高成本，但不一定拖慢交付。所以先问清楚：新人接手什么工作，由谁带。

**什么证据会让我改口.** 一项针对真实项目的大型研究，在校正项目规模和延期原因后，一致显示后期加人会（或不会）造成交付延后。

**出处** (核对于 2026-10-01):

1. Frederick P. Brooks Jr. (1975). The Mythical Man-Month: Essays on Software Engineering. Addison-Wesley (anniversary edition 1995). [link](https://openlibrary.org/isbn/9780201835953) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
2. Tarek K. Abdel-Hamid, Stuart E. Madnick (1991). Software Project Dynamics: An Integrated Approach. Prentice Hall. [link](https://openlibrary.org/isbn/9780138220402) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (质疑)
3. Ingo Scholtes, Pavlin Mavrodiev, Frank Schweitzer (2016). From Aristotle to Ringelmann: a large-scale analysis of team productivity and coordination in Open Source Software projects. Empirical Software Engineering 21(2). [link](https://doi.org/10.1007/s10664-015-9406-4) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)
4. Christoph Gote, Pavlin Mavrodiev, Frank Schweitzer, Ingo Scholtes (2022). Big Data = Big Insights? Operationalising Brooks' Law in a Massive GitHub Data Set. Proceedings of the 44th International Conference on Software Engineering (ICSE 2022). [link](https://arxiv.org/abs/2201.04588) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="teams-conway-law"></a>
### 系统架构最终会照搬组织架构（康威定律）。

**✓ 成立 · 证据等级 B** （142 项实证研究的综述和一项配对产品检验方向一致，但都是观察性研究，且并非处处成立。）

**研究怎么说.** Conway（1968）提出：组织设计出的系统，会复制其自身的沟通结构。MacCormack 等人（2012）比较了成对匹配的软件产品：在每一对中，松耦合组织做出的产品都明显更模块化。Colfer 和 Baldwin（2016）综述了 142 项实证研究：约 70% 发现强镜像，22% 发现部分镜像，8% 没有发现镜像。

**局限.** 镜像是很强的倾向，不是定律：在以软件为主的开放协作项目中，56% 的描述性研究并不支持它。这些研究是观察性的，不能证明调整团队就会改变架构。

> **对老板可以这样说:** Colfer 和 Baldwin 综述了 142 项研究，约 70% 发现产品会映射出开发它的组织的结构。所以划分团队边界也是在做架构决策。这是倾向而非定律，我们不妨先核对自己团队边界和模块边界是否一致。

**什么证据会让我改口.** 一项跨公司的大型软件项目研究显示，模块结构与团队结构无关，或调整团队后架构并未改变。

**出处** (核对于 2026-10-01):

1. Alan MacCormack, Carliss Y. Baldwin, John Rusnak (2012). Exploring the duality between product and organizational architectures: A test of the “mirroring” hypothesis. Research Policy 41(8). [link](https://doi.org/10.1016/j.respol.2012.04.011) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Lyra J. Colfer, Carliss Y. Baldwin (2016). The mirroring hypothesis: theory, evidence, and exceptions. Industrial and Corporate Change 25(5). [link](https://doi.org/10.1093/icc/dtw027) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Melvin E. Conway (1968). How Do Committees Invent?. Datamation 14(4). [link](https://www.melconway.com/Home/Committees_Paper.html) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="teams-double-team-double-output"></a>
### 团队人数翻倍，产出也翻倍。

**✗ 不成立 · 证据等级 B** （开源和企业的大型观察性数据都显示产出增长慢于人数增长；但它们用提交数或项目规模衡量产出，且有一项开源研究结论相反。）

**研究怎么说.** Scholtes 等人分析了 58 个开源项目（超过 58 万次提交、3 万多名开发者）：团队越大，人均产出越低。2022 年一项基于更大 GitHub 数据集、采用多种产出指标的重新分析，再次得到负向趋势。Rodríguez 等人基于 ISBSG 企业项目数据，报告 9 人及以上团队的生产率较低。估算工具厂商 QSM 自己的数据库（约 1060 个项目）显示：小项目中 5 人及以上的团队比 4 人及以下的团队工期短 24%，工作量却大约是后者的三倍。

**局限.** 这里的产出指提交数或交付规模，不是价值。开源志愿者和受薪团队不同。Sornette 等人在开源数据中得到相反结果：团队规模翻倍，产出约为 2.5 倍。2024 年的重新分析认为，测量方式比项目选择更能解释这一差异。

> **对老板可以这样说:** 58 个开源项目的数据，以及 2022 年更大规模的 GitHub 重新分析，都显示团队越大，人均产出越低。大幅扩招后人均数字下降，正是这些研究预期的结果。更有用的问题是：总产出增加了多少，每单位产出现在花多少钱。

**什么证据会让我改口.** 我们自己团队在扩招前后用同一口径衡量产出，结果团队翻倍而人均产出没有下降；或一项针对受薪软件团队的大型研究显示产出增速快于人数增速。

**出处** (核对于 2026-10-01):

1. Ingo Scholtes, Pavlin Mavrodiev, Frank Schweitzer (2016). From Aristotle to Ringelmann: a large-scale analysis of team productivity and coordination in Open Source Software projects. Empirical Software Engineering 21(2). [link](https://doi.org/10.1007/s10664-015-9406-4) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Christoph Gote, Pavlin Mavrodiev, Frank Schweitzer, Ingo Scholtes (2022). Big Data = Big Insights? Operationalising Brooks' Law in a Massive GitHub Data Set. Proceedings of the 44th International Conference on Software Engineering (ICSE 2022). [link](https://arxiv.org/abs/2201.04588) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (复现)
3. D. Rodríguez, M. A. Sicilia, E. García, R. Harrison (2012). Empirical findings on team size and productivity in software development. Journal of Systems and Software 85(3). [link](https://doi.org/10.1016/j.jss.2011.09.009) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (复现)
4. Kate Armel (QSM) (2012). Part II: Small Teams Deliver Lower Cost, Higher Quality. QSM, vendor analysis of the QSM SLIM project database. [link](https://www.qsm.com/blog/2012/part-ii-small-teams-deliver-lower-cost-higher-quality) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)
5. Didier Sornette, Thomas Maillart, Giacomo Ghezzi (2014). How Much is the Whole Really More than the Sum of its Parts? 1 + 1 = 2.5: Superlinear Productivity in Collective Group Actions. PLOS ONE 9(8). [link](https://arxiv.org/abs/1405.4298) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (质疑)
6. Christian Gut, Alfredo Goldman (2024). Revisiting Aristotle vs. Ringelmann: The influence of biases on measuring productivity in Open Source software development. SBES 2024. [link](https://arxiv.org/abs/2408.04782) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="teams-psychological-safety"></a>
### 心理安全感能预测团队的绩效。

**✓ 成立 · 证据等级 B** （一项荟萃分析汇总了 136 个样本，发现中等程度的关联；但研究以观察性为主，只能说明相关，不能说明因果。）

**研究怎么说.** Edmondson（1999）研究了一家制造企业的 51 个工作团队：团队心理安全感越高，学习行为越多，且学习行为在安全感与团队绩效之间起中介作用。Frazier 等人（2017）汇总了 136 个独立样本（超过 2.2 万人、近 5000 个团队），发现心理安全感与任务绩效、信息共享和学习行为存在中等程度的关联。Google 的 Aristotle 项目是对其内部团队的报告，把心理安全感列为五个团队要素之首。

**局限.** 多数证据是相关性的，无法区分是安全感带来好结果，还是好结果让人更有安全感。汇总的研究涉及各类工作，不只是软件。Google 没有公开 Aristotle 项目的数据，也没有外部团队复现过。

> **对老板可以这样说:** Frazier 等人对 136 个样本的荟萃分析发现，心理安全感与绩效有中等程度的关联。它是真实存在的因素，但不是保证。“它是头号因素”的说法来自 Google 内部研究，数据并未公开。

**什么证据会让我改口.** 针对软件团队的追踪或实验研究显示，安全感提升后交付或质量没有变化；或汇总分析发现采用客观绩效数据时这种关联消失。

**出处** (核对于 2026-10-01):

1. Amy Edmondson (1999). Psychological Safety and Learning Behavior in Work Teams. Administrative Science Quarterly 44(2). [link](https://doi.org/10.2307/2666999) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. M. Lance Frazier, Stav Fainshmidt, Ryan L. Klinger, Amir Pezeshkan, Veselina Vracheva (2017). Psychological Safety: A Meta-Analytic Review and Extension. Personnel Psychology 70(1). [link](https://doi.org/10.1111/peps.12183) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Google re:Work (2015). Guide: Understand team effectiveness. Google re:Work, write-up of Project Aristotle. [link](https://rework.withgoogle.com/en/guides/understanding-team-effectiveness/steps/introduction/) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (背景)

---

<a id="teams-sit-together-ship-faster"></a>
### 坐在一起办公的团队，交付更快。

**~ 视情况 · 证据等级 C** （速度方面的证据只有两项 2000 年前后、单一公司的现场研究，没有随机分组；较新的自然实验则显示存在取舍。）

**研究怎么说.** Teasley 等人（2002）研究了一家大公司里在专用团队房间集中办公的软件团队，报告其生产率更高、工期更短，优于基线项目。Herbsleb 和 Mockus（2003）分析了一家大公司的工作项（变更请求）：分散在多个站点完成的工作项，耗时约为同类单站点工作项的 2.5 倍。财富 500 强公司的自然实验（Emanuel、Harrington 和 Pallais）发现：坐在队友附近的工程师收到更多代码反馈，主要是资历较浅者，而经验丰富的工程师写的代码更少。

**局限.** 每项研究只涉及一家公司，也没有研究随机安排座位。较早的研究用的是 2000 年前后的工具。较新的研究衡量的是反馈和代码量，不是交付日期。没有一项直接检验远程工具或开放式座位。

> **对老板可以这样说:** Teasley 以及 Herbsleb 和 Mockus 的现场研究发现同地工作完成得更快，其中一项里跨站点工作项耗时约为 2.5 倍。较新的研究发现，坐在队友附近的初级工程师得到更多反馈，而资深工程师写的代码更少。所以答案取决于谁坐在一起，以及我们怎么衡量。

**什么证据会让我改口.** 一项使用当前工具、记录实际交付日期，对集中办公与分散办公的软件团队做随机或良好匹配比较的研究，显示稳定的提速或没有提速。

**出处** (核对于 2026-10-01):

1. S. Teasley, L. Covi, M. S. Krishnan, J. S. Olson (2002). Rapid software development through team collocation. IEEE Transactions on Software Engineering 28(7). [link](https://doi.org/10.1109/TSE.2002.1019481) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. James D. Herbsleb, Audris Mockus (2003). An empirical study of speed and communication in globally distributed software development. IEEE Transactions on Software Engineering 29(6). [link](https://doi.org/10.1109/TSE.2003.1205177) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Natalia Emanuel, Emma Harrington, Amanda Pallais (2026). The Power of Proximity to Coworkers. The Quarterly Journal of Economics 141(3). [link](https://doi.org/10.1093/qje/qjag027) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (背景)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
