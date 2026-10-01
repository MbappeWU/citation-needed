# 9. 招聘、反馈与绩效评估

什么能预测工作表现，评分到底在测什么。

[← 返回目录](../README.zh-CN.md) · [English](09-people.md)

图例：✓ 成立 · ~ 视情况 · ✗ 不成立 · ? 证据不足。来源后的 ✓✓ 表示元数据和引用的数字已与摘要核对，✓ 表示元数据已核对，↗ 表示无法机器核对，仅提供链接。

---

<a id="people-bonus-complex-tasks"></a>
### 奖金能激励人在复杂任务上做得更好。

**~ 视情况 · 证据等级 C** （依据是实验室实验、文献综述和一项相关性荟萃分析，没有一项在软件工作中检验过奖金。）

**研究怎么说.** Ariely 等人（2009）在美国和印度农村让受试者做各种任务，奖金从很少到相对于日常收入很高。除了一些重要的例外，非常高的奖励反而损害了表现。Bonner 和 Sprinkle（2002）的文献综述发现，钱能否提高表现取决于人、任务、环境和激励方案。Cerasoli 等人（2014）对 183 个样本（212,468 人）的荟萃分析发现：内在动机更能预测表现的质量，激励更能预测表现的数量。

**局限.** 关键实验是短时间的实验室任务，不是软件工作，高奖金的负面结果也有例外。荟萃分析是相关性的，混合了学校、工作和体育场景。没有一项检验过给工程师发奖金。

> **对老板可以这样说:** 对于需要动脑的工作，关于奖金的研究结论并不一致：激励与产出数量的关系比与质量的关系更强，在一组实验室实验里极高的奖励多半反而损害了表现。给设计或排障类工作挂钩奖金之前，能否先约定我们要衡量什么？

**什么证据会让我改口.** 软件团队里的现场实验显示，绩效奖金提高了复杂工作的质量（例如上线后的缺陷率），且没有损害协作。

**出处** (核对于 2026-10-01):

1. Dan Ariely, Uri Gneezy, George Loewenstein, Nina Mazar (2009). Large stakes and big mistakes. The Review of Economic Studies 76(2). [link](https://doi.org/10.1111/j.1467-937X.2009.00534.x) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Sarah E. Bonner, Geoffrey B. Sprinkle (2002). The effects of monetary incentives on effort and task performance: theories, evidence, and a framework for research. Accounting, Organizations and Society 27(4-5). [link](https://doi.org/10.1016/S0361-3682(01)00052-6) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
3. Christopher P. Cerasoli, Jessica M. Nicklin, Michael T. Ford (2014). Intrinsic motivation and extrinsic incentives jointly predict performance: A 40-year meta-analysis. Psychological Bulletin 140(4). [link](https://doi.org/10.1037/a0035661) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="people-feedback-improves"></a>
### 给反馈总能提高工作表现。

**✗ 不成立 · 证据等级 B** （只有一项 1996 年的大型荟萃分析，涵盖多种反馈和任务，多数不在软件团队中进行。）

**研究怎么说.** Kluger 和 DeNisi（1996）汇总了反馈干预研究的 607 个效应量（23,663 个观测值）。平均而言，反馈提高了表现（d = .41），但超过三分之一的干预让表现变差。当反馈把注意力从任务转向自我时，效果会减弱。

**局限.** 这篇综述发表于 1996 年，涵盖多种任务和反馈形式，多数不是软件工作。.41 的平均值掩盖了很大的差异。它并非为检验代码评审意见或年度评估而设计。

> **对老板可以这样说:** 一项大型荟萃分析发现，反馈平均有帮助，但超过三分之一的反馈干预让表现变差。反馈应聚焦任务本身和改进方法，而不是针对人。

**什么证据会让我改口.** 更新、更大规模的职场反馈荟萃分析显示，几乎没有干预会降低表现。

**出处** (核对于 2026-10-01):

1. Avraham N. Kluger, Angelo DeNisi (1996). The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory. Psychological Bulletin 119(2). [link](https://doi.org/10.1037/0033-2909.119.2.254) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="people-forced-ranking"></a>
### 强制排名能提升团队绩效。

**✗ 不成立 · 证据等级 C** （只有一项模拟、两篇实验室实验论文和一项单一公司的现场研究，没有一项在软件公司里直接检验团队产出。）

**研究怎么说.** Scullen 等人（2005）的模拟显示，每年淘汰固定比例员工，可能明显提高员工队伍的平均潜力，改善主要出现在最初几年，并主要取决于淘汰比例和主动离职率。实验室实验显示：强制分布让人单独做任务时更快，团队里却更慢，知识分享也减少（Loberg 等，2021）；员工各干各的时它有帮助，但员工有机会互相使绊时反而有害（Berger 等，2013）。在一家跨国公司，因最高评级设有名额上限而没能拿到最高评级的高绩效者，尽管奖金更高，仍比拿到最高评级的同事更常离职（Bond，2025）。

**局限.** 这些研究都没有在软件公司里检验团队产出。模拟的收益取决于评分有多可靠，而“经理评分”那条对此提出了质疑。实验室任务很短，现场研究只来自一家公司、一个最高评级名额上限。

> **对老板可以这样说:** 一项模拟显示强制排名可能提升队伍质量，收益多集中在最初几年；而实验室实验发现团队内的知识分享减少。采用固定名额之前，能否先看看我们自己团队的数据？

**什么证据会让我改口.** 软件团队里的现场实验或自然实验显示，实行强制分布提高了团队产出，同时没有推高离职率或损害协作。

**出处** (核对于 2026-10-01):

1. Steven E. Scullen, Paul K. Bergey, Lynda Aiman-Smith (2005). Forced distribution rating systems and the improvement of workforce potential: A baseline simulation. Personnel Psychology 58(1). [link](https://doi.org/10.1111/j.1744-6570.2005.00361.x) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. L. Loberg, S. Nüesch, J. N. Foege (2021). Forced distribution rating systems and team collaboration. Journal of Economic Behavior & Organization 188. [link](https://www.unifr.ch/tim/en/assets/public/uploads/Loberg_N%C3%BCesch_Foege_2021.pdf) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)
3. Johannes Berger, Christine Harbring, Dirk Sliwka (2013). Performance appraisals and the impact of forced distribution: An experimental investigation. Management Science 59(1). [link](https://doi.org/10.1287/mnsc.1120.1624) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
4. Brittany M. Bond (2025). Cut to the curve: Underrecognition and talent loss from forced ranking in a multinational firm. Management Science. [link](https://doi.org/10.1287/mnsc.2023.01204) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)

---

<a id="people-gut-interview"></a>
### 凭感觉聊一聊的面试，是招人的好办法。

**✗ 不成立 · 证据等级 B** （相隔 24 年的两项荟萃分析一致认为结构化面试优于非结构化面试，但都是相关性研究，结果指标通常是上级评分。）

**研究怎么说.** Sackett 等人（2022）重新估算了各种招聘方法对日后工作表现的预测力，用相关系数表示。结构化面试（每人问同样的问题，并按评分标准打分）为 .42，非结构化面试为 .19。更早的 Schmidt 和 Hunter（1998）综述给出的数字是 .51 和 .38。两次估算都是结构化面试领先，新的估算还拉大了差距。

**局限.** 这些数字是多种职业的平均值，不只针对软件行业，结果指标通常是上级评分，本身噪声较大。.19 虽低但不是零。估计值取决于对范围限制的统计校正，这正是 Sackett 等人修订的部分。

> **对老板可以这样说:** 2022 年的荟萃分析里，结构化面试对工作表现的预测力是 .42，非结构化面试只有 .19。建议每位候选人都问同样的问题，并按评分标准打分。

**什么证据会让我改口.** 针对软件行业招聘的大样本研究显示，面试官的非结构化整体印象对日后表现的预测力，不亚于有评分标准的结构化面试。

**出处** (核对于 2026-10-01):

1. Paul R. Sackett, Charlene Zhang, Christopher M. Berry, Filip Lievens (2022). Revisiting meta-analytic estimates of validity in personnel selection: Addressing systematic overcorrection for restriction of range. Journal of Applied Psychology 107(11). [link](https://doi.org/10.1037/apl0000994) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Frank L. Schmidt, John E. Hunter (1998). The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. Psychological Bulletin 124(2). [link](https://doi.org/10.1037/0033-2909.124.2.262) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)

---

<a id="people-manager-ratings"></a>
### 经理的绩效评分反映了员工的真实表现。

**~ 视情况 · 证据等级 B** （两项由不同研究团队完成的大样本研究结论一致：评分含有真实信号，但很大一部分差异来自评分者。两者都是观察性研究。）

**研究怎么说.** Viswesvaran、Ones 和 Schmidt（1996）汇总了 40 个样本（共 14,650 人），发现两位上级对同一个人整体工作表现的评分，一致性（信度）只有 .52。Scullen、Mount 和 Goff（2000）分析了两组经理（分别为 2,350 和 2,142 人）的 360 度评价，每人由 7 位评分者打分。在两组数据中，评分者个人的特异倾向分别解释了 62% 和 53% 的评分差异，被评者真实表现（含总体和分维度）只解释了 21% 和 25%。

**局限.** 360 度数据是 7 位评分者给经理做的发展性评价，不是上级对工程师的年度评分，用于定薪的评分可能不同。信度反映的是一致性，不等于准确性：评分者可能有共同的偏见。

> **对老板可以这样说:** 两位上级给同一个人打分，信度只有 .52；在两组各 2,000 多名经理的数据里，评分者对分数的影响比被评者本人还大。评分只能作为参考之一，不宜当作定论。

**什么证据会让我改口.** 来自工程团队的数据显示，不同经理给同一批人的评分高度一致，并且与独立的产出指标相吻合。

**出处** (核对于 2026-10-01):

1. Chockalingam Viswesvaran, Deniz S. Ones, Frank L. Schmidt (1996). Comparative analysis of the reliability of job performance ratings. Journal of Applied Psychology 81(5). [link](https://doi.org/10.1037/0021-9010.81.5.557) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Steven E. Scullen, Michael K. Mount, Maynard Goff (2000). Understanding the latent structure of job performance ratings. Journal of Applied Psychology 85(6). [link](https://doi.org/10.1037/0021-9010.85.6.956) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)

---

<a id="people-whiteboard-coding"></a>
### 白板编程面试能看出一个人代码写得好不好。

**~ 视情况 · 证据等级 C** （只有一项小样本实验（48 名学生）和关于工作样本测试的间接证据，两者都没有检验白板面试分数能否预测入职后的工作表现。）

**研究怎么说.** Behroozi 等人（2020）让 48 名计算机专业学生做一道技术面试题。一半人在面试官注视下于白板上解题，另一半人同样用白板，但在无人的私密房间里解题。被人注视使成绩下降了一半以上，压力和认知负荷也更高。另外，Sackett 等人（2022）估计，模拟真实工作的工作样本测试效度为 .33，高于非结构化面试的 .19。

**局限.** 样本小，而且是学生，不是在职工程师，也没有人被跟踪到入职之后。工作样本的效度来自多种职业，白板算法题未必接近真实工作。被注视时的应对能力是否与工作相关，研究没有检验。

> **对老板可以这样说:** 有一项实验发现，仅仅是被人注视，面试成绩就下降了一半以上。建议用贴近真实工作的任务考察编码，并让候选人可以在没有旁观者的情况下做题。

**什么证据会让我改口.** 有研究把白板面试分数与软件团队入职后的工作表现联系起来，或者有复现研究显示被注视时成绩并不下降。

**出处** (核对于 2026-10-01):

1. Mahnaz Behroozi, Shivani Shirolkar, Titus Barik, Chris Parnin (2020). Does stress impact technical interview performance?. ESEC/FSE 2020. [link](https://doi.org/10.1145/3368089.3409712) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
2. Paul R. Sackett, Charlene Zhang, Christopher M. Berry, Filip Lievens (2022). Revisiting meta-analytic estimates of validity in personnel selection: Addressing systematic overcorrection for restriction of range. Journal of Applied Psychology 107(11). [link](https://doi.org/10.1037/apl0000994) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (背景)

---

<a id="people-years-experience"></a>
### 工作年限越长，工作表现越好。

**~ 视情况 · 证据等级 B** （荟萃分析一致显示两者关系有限，针对程序员的准实验方向相同，但都是观察性证据。）

**研究怎么说.** Quiñones 等人（1995）对 44 个样本（25,911 人）做荟萃分析，校正后工作经验与工作表现的相关为 .27；若用“经验量”指标（.43）或任务层面的指标（.41），相关更高。Schmidt 和 Hunter（1998）给出的工作年限相关为 .18，低于结构化面试（.51）和工作样本测试（.54）。Dieste 等人（2017）对学生和在职人员做了 10 项准实验：工作年限不能很好地预测程序员的表现，与任务相关的知识和学术背景预测得更好。

**局限.** 两者的关系随任职时长和工作复杂度而变（McDaniel 等，1988）。数据多数不来自软件行业，程序员方面的证据是准实验。工作年限并不说明做的是什么工作。

> **对老板可以这样说:** 同一篇 1998 年综述里，工作年限与工作表现的相关只有约 .18，结构化面试是 .51。筛选时建议看候选人具体做过什么工作，而不是设一个年限门槛。

**什么证据会让我改口.** 针对软件工程师的大样本研究显示，工作年限对可测量的产出或质量的预测力不亚于技能测试。

**出处** (核对于 2026-10-01):

1. Miguel A. Quiñones, J. Kevin Ford, Mark S. Teachout (1995). The relationship between work experience and job performance: A conceptual and meta-analytic review. Personnel Psychology 48(4). [link](https://doi.org/10.1111/j.1744-6570.1995.tb01785.x) <sub>✓✓ 元数据和引用的数字已与摘要核对</sub> (主要来源)
2. Michael A. McDaniel, Frank L. Schmidt, John E. Hunter (1988). Job experience correlates of job performance. Journal of Applied Psychology 73(2). [link](https://doi.org/10.1037/0021-9010.73.2.327) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
3. Frank L. Schmidt, John E. Hunter (1998). The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. Psychological Bulletin 124(2). [link](https://doi.org/10.1037/0033-2909.124.2.262) <sub>✓ 元数据已核对（标题、作者、年份）</sub> (主要来源)
4. Oscar Dieste, Alejandrina M. Aranda, Fernando Uyaguari, et al. (2017). Empirical evaluation of the effects of experience on code quality and programmer productivity: an exploratory study. Empirical Software Engineering 22(5). [link](https://www.semanticscholar.org/paper/Empirical-evaluation-of-the-effects-of-experience-Tub%C3%ADo-Aranda/5327cdf59ffb4f331243647a67859f336ae2de11) <sub>↗ 无法机器核对（书或报告），仅提供链接</sub> (主要来源)

---

内容采用 CC BY 4.0 许可，转载请保留署名并链回本仓库。
