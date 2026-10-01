# 2. Measuring productivity

What counts, what misleads, and why per-head output falls as teams grow.

[← Back to the index](../README.md) · [中文](02-measure.zh-CN.md)

Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata and quoted numbers were checked against the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).

---

<a id="measure-commits-per-dev"></a>
### Commits or pull requests per developer reveal who performs best.

**✗ Not supported · Grade C** (We did not find a validation study. This rests on a framework paper and one survey, so it is mostly expert argument.)

**What the research says.** The SPACE authors (Forsgren, Storey, Maddila, Zimmermann, Houck and Butler) treat counts such as commits and pull requests as activity, one of five dimensions of productivity. They say a measurement approach must account for invisible work and for knock-on effects, such as measuring activity at the expense of satisfaction and flow. In a survey of 622 developers at three companies, self-rated productivity was most strongly related to non-technical factors such as job enthusiasm, peer support for new ideas and useful feedback, which a commit count does not show.

**Limits.** We did not find a study comparing per-developer commit or pull request counts with independent performance ratings, so part of this verdict is absence of evidence. The survey uses self-rated productivity, not manager or peer ratings.

> **Say this to your boss:** Commit and pull request counts show activity, and the SPACE authors say any measure has to account for invisible work that counts do not show. I would use the counts to start a conversation, not to rank people.

**What would change my mind.** A study linking per-developer commit or pull request counts to independent peer or outcome measures across teams and codebases, and showing the link survives once counts feed into reviews.

**Sources** (checked 2026-10-01):

1. Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, Jenna Butler (2021). The SPACE of Developer Productivity: There's more to it than you think.. ACM Queue 19(1). [link](https://doi.org/10.1145/3454122.3454124) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Emerson Murphy-Hill, Ciera Jaspan, Caitlin Sadowski, David Shepherd, Michael Phillips, Collin Winter, Andrea Knight, Edward Smith, Matthew Jorde (2021). What Predicts Software Developers' Productivity?. IEEE Transactions on Software Engineering 47, pp. 582-594. [link](https://2020.icse-conferences.org/details/icse-2020-Journal-First/10/What-Predicts-Software-Developers-Productivity-) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="measure-dora-predict"></a>
### DORA's four key metrics predict how well a team performs.

**~ It depends · Grade C** (Repeated annual industry surveys, but one research program, self-reported on both sides, with little independent replication that we could find.)

**What the research says.** The four keys are deployment frequency, lead time for changes, change failure rate and time to restore service. In the DORA surveys behind Accelerate, respondents whose teams scored well on them also reported better organizational outcomes. Both the metrics and the outcomes come from survey answers, so this shows association, not forward-looking prediction. Sallin and colleagues note the four metrics are often gathered by hand or by survey with few data points. In DORA's 2024 report the medium cluster had a lower change failure rate than the high cluster, so the cluster labels do not rank teams on every metric.

**Limits.** One research program, with little independent replication that we could find. The metrics describe software delivery, not business results or developer experience, and are meant to be read as a set.

> **Say this to your boss:** The four keys are a useful check on our delivery pipeline, and in DORA's surveys they go with better organizational outcomes. They are not a forecast, and we should read all four together, not chase one.

**What would change my mind.** A longitudinal or independently run study showing that changes in the four metrics come before changes in measured business outcomes, after controlling for earlier performance.

**Sources** (checked 2026-10-01):

1. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. DORA, Google Cloud (2024). Accelerate State of DevOps Report 2024. Google Cloud DORA. [link](https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
3. Marc Sallin, Martin Kropp, Craig Anslow, James W. Quilty, Andreas Meier (2021). Measuring Software Delivery Performance Using the Four Key Metrics of DevOps. XP 2021, Lecture Notes in Business Information Processing. [link](https://digitalcollection.zhaw.ch/handle/11475/22989) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="measure-lines-of-code"></a>
### Lines of code are a fair measure of developer productivity.

**✗ Not supported · Grade C** (A systematic review and one cross-language comparison agree, but this is mostly a measurement critique, and we found no test of line-count targets in practice.)

**What the research says.** Petersen's systematic map and review of 38 studies on software productivity reported problems with simple output-over-effort ratios, for both lines of code and function points. Prechelt compared 80 implementations of one program in seven languages: the Perl, Python, Rexx and Tcl versions were about half as long as the C, C++ and Java versions. The authors of Accelerate argue that rewarding lines of code produces bloated software with higher maintenance and change costs.

**Limits.** Prechelt's programmers were not randomly assigned to languages, and the data are from 2000. Petersen reviews problems with the measure; it does not test line-count targets in real teams.

> **Say this to your boss:** Line counts mostly reflect language and style. In one study the same program came out about half as long in Perl, Python, Rexx or Tcl as in C, C++ or Java, so ranking people by lines ranks their tools.

**What would change my mind.** A study in one language and codebase linking developers' line counts to independent quality and delivery outcomes, and showing the link holds once counts become a target.

**Sources** (checked 2026-10-01):

1. Kai Petersen (2011). Measuring and predicting software productivity: A systematic map and review. Information and Software Technology 53(4). [link](https://doi.org/10.1016/j.infsof.2010.12.001) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. Lutz Prechelt (2000). An empirical comparison of seven programming languages. Computer 33(10). [link](https://www.cs.tufts.edu/~nr/cs257/archive/lutz-prechelt/comparison.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
3. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="measure-releases-output"></a>
### The number of releases, features or tickets shipped measures a team's output.

**✗ Not supported · Grade C** (A measurement argument built on the DORA authors' design and one systematic review. We did not find a study that tests release counts as a measure of output.)

**What the research says.** The authors of Accelerate say a performance measure should capture an outcome, not output, and should not reward busywork. DORA does track deployment frequency, but as one of four measures with lead time, change failure rate and time to restore. In DORA's 2024 report the medium cluster had lower throughput but a lower change failure rate than the high cluster, so shipping often did not guarantee stability. Petersen's review of 38 studies reported problems with simple output-over-effort ratios.

**Limits.** We found no study that tests release, feature or ticket counts as output, so this rests on measurement logic. In DORA's surveys deployment frequency moves with the other three metrics, but as a sign of delivery capability, not a count of work done.

> **Say this to your boss:** A release is an event, not a unit of work, so a flat release count cannot show that efficiency fell. DORA reports shipping frequency next to lead time, failure rate and recovery time.

**What would change my mind.** Evidence that release or ticket counts track independently measured effort and delivered value across teams with different sizes and release policies.

**Sources** (checked 2026-10-01):

1. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. DORA, Google Cloud (2024). Accelerate State of DevOps Report 2024. Google Cloud DORA. [link](https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
3. Kai Petersen (2011). Measuring and predicting software productivity: A systematic map and review. Information and Software Technology 53(4). [link](https://doi.org/10.1016/j.infsof.2010.12.001) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (context)

---

<a id="measure-satisfaction-leading"></a>
### Developer satisfaction is a leading indicator of productivity.

**~ It depends · Grade C** (The best timing evidence comes from outside software. In software we found only cross-sectional surveys and interviews.)

**What the research says.** Riketta's meta-analysis of 16 panel studies of workers tested which comes first. Job attitudes predicted later performance weakly (beta = .06, baseline performance controlled), and performance did not predict later attitudes (beta = .00). Judge and colleagues pooled 312 samples and estimated a correlation of .30 between job satisfaction and job performance. Among 622 developers at three companies, job enthusiasm, peer support for new ideas and useful feedback were among the factors most strongly related to self-rated productivity.

**Limits.** Neither meta-analysis is specific to software. The software evidence is cross-sectional and self-reported on both sides, so it cannot show which moves first. The DevEx framework (Greiler et al., Noda et al.) rests on interviews with 21 developers and does not test prediction.

> **Say this to your boss:** A satisfaction survey is worth running, but I would not promise it forecasts output. Across 16 panel studies the effect of attitudes on later performance was small, and the software surveys we have cannot show what comes first.

**What would change my mind.** A longitudinal study of software teams in which satisfaction scores predict later delivery or quality outcomes after controlling for earlier performance.

**Sources** (checked 2026-10-01):

1. Michael Riketta (2008). The causal relation between job attitudes and performance: A meta-analysis of panel studies. Journal of Applied Psychology 93(2). [link](https://doi.org/10.1037/0021-9010.93.2.472) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Timothy A. Judge, Carl J. Thoresen, Joyce E. Bono, Gregory K. Patton (2001). The job satisfaction–job performance relationship: A qualitative and quantitative review. Psychological Bulletin 127(3). [link](https://doi.org/10.1037/0033-2909.127.3.376) <sub>✓ metadata checked (title, authors, year)</sub> (context)
3. Emerson Murphy-Hill, Ciera Jaspan, Caitlin Sadowski, David Shepherd, Michael Phillips, Collin Winter, Andrea Knight, Edward Smith, Matthew Jorde (2021). What Predicts Software Developers' Productivity?. IEEE Transactions on Software Engineering 47, pp. 582-594. [link](https://2020.icse-conferences.org/details/icse-2020-Journal-First/10/What-Predicts-Software-Developers-Productivity-) <sub>↗ not machine-checkable (book or report); link only</sub> (context)
4. Michaela Greiler, Margaret-Anne Storey, Abi Noda (2022). An Actionable Framework for Understanding and Improving Developer Experience. IEEE Transactions on Software Engineering 49(4), 2023. [link](https://arxiv.org/abs/2205.06352) <sub>✓ metadata checked (title, authors, year)</sub> (context)
5. Abi Noda, Margaret-Anne Storey, Nicole Forsgren, Michaela Greiler (2023). DevEx: What Actually Drives Productivity: The developer-centric approach to measuring and improving productivity. ACM Queue 21(2). [link](https://doi.org/10.1145/3595878) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="measure-single-metric"></a>
### One metric can capture developer productivity.

**✗ Not supported · Grade C** (An expert framework plus one systematic review. No study has tested a single metric against a multi-dimensional benchmark.)

**What the research says.** The SPACE paper says developer productivity cannot be measured by a single metric or dimension, and names five: satisfaction and well-being, performance, activity, communication and collaboration, efficiency and flow. Petersen's review of 38 productivity studies reported problems with simple ratio measures and pointed to multivariate approaches such as data envelopment analysis. In a survey of 622 developers at three companies, self-rated productivity was most strongly related to non-technical factors such as job enthusiasm and peer support. DORA itself uses four measures.

**Limits.** Mostly expert argument and a review of measurement problems. A narrow metric can still answer a narrow question, such as how long builds take.

> **Say this to your boss:** Any single number will miss part of the picture. The SPACE authors recommend balanced metrics linked to goals across several dimensions, and even DORA uses four measures, not one.

**What would change my mind.** A validated single measure that predicts independent outcomes such as delivery, quality and retention across teams and companies, and resists gaming when it is used as a target.

**Sources** (checked 2026-10-01):

1. Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, Jenna Butler (2021). The SPACE of Developer Productivity: There's more to it than you think.. ACM Queue 19(1). [link](https://doi.org/10.1145/3454122.3454124) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Kai Petersen (2011). Measuring and predicting software productivity: A systematic map and review. Information and Software Technology 53(4). [link](https://doi.org/10.1016/j.infsof.2010.12.001) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
3. Emerson Murphy-Hill, Ciera Jaspan, Caitlin Sadowski, David Shepherd, Michael Phillips, Collin Winter, Andrea Knight, Edward Smith, Matthew Jorde (2021). What Predicts Software Developers' Productivity?. IEEE Transactions on Software Engineering 47, pp. 582-594. [link](https://2020.icse-conferences.org/details/icse-2020-Journal-First/10/What-Predicts-Software-Developers-Productivity-) <sub>↗ not machine-checkable (book or report); link only</sub> (context)
4. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="measure-velocity-compare"></a>
### Velocity in story points lets you compare teams.

**✗ Not supported · Grade C** (One large analysis of open-source projects and the DORA authors' reasoning agree, but we found no study that tests cross-team comparison directly.)

**What the research says.** Tawosi, Moussa and Sarro analysed 37,440 user stories from 37 open-source projects tracked in Jira. Averaged over three correlation measures, story points and the approximated development time correlated strongly in only 7% of projects, moderately in 58% and weakly in 35%. The authors of Accelerate say velocity was designed as a capacity-planning tool, is relative and team-dependent, and gets gamed when it is used as a productivity metric.

**Limits.** The data are open-source projects, and development time is approximated rather than measured. The study looks inside projects, not across teams. Velocity can still help one team plan its own sprints.

> **Say this to your boss:** Story points are each team's own unit, so 40 points on one team and 25 on another do not tell us who delivers more. In a study of 37 open-source projects, points tracked development time strongly in only 7%.

**What would change my mind.** Evidence that teams on a shared reference scale produce velocities that match independently measured delivery outcomes and stay stable once velocity becomes a target.

**Sources** (checked 2026-10-01):

1. Vali Tawosi, Rebecca Moussa, Federica Sarro (2022). On the Relationship Between Story Points and Development Effort in Agile Open-Source Software. ESEM 2022. [link](https://doi.org/10.1145/3544902.3546238) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.
