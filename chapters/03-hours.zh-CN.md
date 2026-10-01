# 3. 工时与健康

加班、单位工时产出，以及健康代价。

[← 返回目录](../README.zh-CN.md) · [English](03-hours.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="hours-four-day-week"></a>
### 每周只上四天，事情就会做得更少。

**? 证据不足 · 证据等级 C** （目前最好的试验测的是身心状况，不是产出，而且参与的公司是自愿加入的。）

**研究怎么说.** 迄今规模最大的试验跟踪了六个国家 141 家组织的 2,896 名员工：他们改为每周四天、工资不变，并与 12 家对照公司比较。倦怠感、工作满意度、心理和身体健康都改善了，对照公司没有这种变化。试验测的是身心状况，不是产出：它说明少上一天不会拖垮人，但不能说明产出不变。

**局限.** 公司是自愿参加的，并且事先接受了重新设计工作方式的辅导。试验没有随机分组，样本也不是专门针对软件团队。

> **对老板可以这样说:** 目前最好的四天工作制试验测的是倦怠和健康，两项都改善了，但没有测产出。我们可以先在一个团队试点，同时记录交付情况。

**什么证据会让我改口.** 在软件团队里做的对照试点显示交付量明显下降，且试点前后用同一种方式测量。

**出处** (核对于 2026-10-01):

1. Wen Fan, Juliet B. Schor, Orla Kelly, Guolin Gu (2025). Work time reduction via a 4-day workweek finds improvements in workers' well-being. Nature Human Behaviour 9. [link](https://doi.org/10.1038/s41562-025-02259-6) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="hours-health-cost"></a>
### 长时间工作只是一种生活方式，对健康没有实质代价。

**✗ 不成立 · 证据等级 B** （多项观察性研究的汇总结果在中风上一致，但心脏病的关联存在争议，而且都不是实验研究。）

**研究怎么说.** 世卫组织和国际劳工组织的系统综述把每周工作 55 小时及以上与 35 到 40 小时作比较。中风方面，22 项研究、共 839,680 人，相对风险为 1.35，即风险高 35%；缺血性心脏病的相对风险为 1.17。有学者发表评论，认为心脏病方面的证据比世卫组织和国际劳工组织的结论要弱；2026 年一项纳入 7 项队列研究的综述再次发现心脏病死亡风险高 17%，但与全因死亡率没有显著关联。

**局限.** 观察性数据无法排除所有混杂因素。结果是跨职业、跨国家的平均值，并不专门针对软件工作。

> **对老板可以这样说:** 世卫组织和国际劳工组织的综述发现，每周工作 55 小时以上，中风风险高 35%。心脏病方面还有争议，但中风这一条是我们必须考虑的代价。

**什么证据会让我改口.** 更大规模、高质量队列的汇总分析显示，校正已知混杂因素后没有额外风险。

**出处** (核对于 2026-10-01):

1. Alexis Descatha, Grace Sembajwe, Frank Pega, et al. (2020). The effect of exposure to long working hours on stroke: A systematic review and meta-analysis from the WHO/ILO Joint Estimates of the Work-related Burden of Disease and Injury. Environment International 142. [link](https://doi.org/10.1016/j.envint.2020.105746) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Jian Li, Frank Pega, Yangho Ujita, et al. (2020). The effect of exposure to long working hours on ischaemic heart disease: A systematic review and meta-analysis from the WHO/ILO Joint Estimates of the Work-related Burden of Disease and Injury. Environment International 142. [link](https://doi.org/10.1016/j.envint.2020.105739) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
3. Mika Kivimäki, Marianna Virtanen, Solja T. Nyberg, G. David Batty (2020). The WHO/ILO report on long working hours and ischaemic heart disease: Conclusions are not supported by the evidence. Environment International 144. [link](https://doi.org/10.1016/j.envint.2020.106048) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (质疑)
4. Shen, et al. (2026). Long working hours and mortality outcomes: A systematic review with outcome-specific evidence synthesis. iScience. [link](https://pubmed.ncbi.nlm.nih.gov/42291227/) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (复现)

---

<a id="hours-more-output"></a>
### 工作时间越长，做的事越多。

**~ 视情况 · 证据等级 B** （基于详细历史工厂记录的严谨分析，与后来的现场数据一致，但不是实验研究。）

**研究怎么说.** 经济学家 Pencavel 分析了第一次世界大战期间英国军工厂工人（多数是女工）的详细记录：低于某个门槛时，产出与工时成正比；超过之后，产出的增长越来越慢。每周工作六天、共 48 小时的总产出，比连续七天、共 70 小时的还略高一点。过了拐点，多出来的工时主要换来疲劳。

**局限.** 数据来自战时的体力劳动，不是软件工作。重点是曲线的形状，具体门槛因工作而异。

> **对老板可以这样说:** 在关于长工时最好的研究里，六天 48 小时的一周，产出比七天 70 小时的一周还略高。超过某个点，多出来的工时换来的是疲劳，不是产出。

**什么证据会让我改口.** 我们自己团队连续几个月的数据显示，每周 55 小时以上时单位工时产出并没有下降。

**出处** (核对于 2026-10-01):

1. John Pencavel (2015). The Productivity of Working Hours. The Economic Journal 125(589). [link](https://doi.org/10.1111/ecoj.12166) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
