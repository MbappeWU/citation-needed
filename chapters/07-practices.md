# 7. Engineering practices

Pair programming, TDD, code review, types, technical debt.

[← Back to the index](../README.md) · [中文](07-practices.zh-CN.md)

Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata was compared and registered quote snippets were matched in the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).

---

<a id="practices-10x-programmer"></a>
### 10x programmers exist: some developers are ten times as productive as their peers.

**? Unknown · Grade C** (Old, small lab studies plus one reanalysis. We found no strong field study of productivity ratios on real team projects.)

**What the research says.** The 10x idea traces to 1960s lab studies of programmers working alone (Sackman, Erikson and Grant, 1968), whose best-known figure was a 28:1 gap between the slowest and fastest performer. Prechelt (1999) re-examined it against a larger data set of programmer work times. He concluded that the 28:1 figure is both incorrect and misleading, and proposed more appropriate measures of variation between people.

**Limits.** The ratio between the two most extreme people in a small group says little about typical developers. These data are about individual tasks, not months of team work, where tools, teammates and task type matter. What counts as productivity is itself disputed.

> **Say this to your boss:** The famous 10x number comes from 1960s lab studies, and a later reanalysis called its 28:1 headline incorrect and misleading. People do differ, but let's not build hiring or pay around a 10x label we cannot measure.

**What would change my mind.** A study that follows many developers on real team projects for months and shows a stable gap of about ten times between a strong developer and the median one.

**Sources** (checked 2026-10-01):

1. H. Sackman, W. J. Erikson, E. E. Grant (1968). Exploratory experimental studies comparing online and offline programming performance. Communications of the ACM 11(1). [link](https://doi.org/10.1145/362851.362858) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Lutz Prechelt (1999). The 28:1 Grant/Sackman legend is misleading, or: How large is interpersonal variation really?. Technical Report 1999-18. [link](https://page.mi.fu-berlin.de/prechelt/Biblio/varianceTR.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (critique)

---

<a id="practices-agile-succeeds"></a>
### Agile projects succeed more often than waterfall projects.

**~ It depends · Grade C** (A systematic review rated the evidence low, and the largest study is a self-reported survey with no controlled comparison.)

**What the research says.** Serrador and Pinto (2015) surveyed 1,002 projects across industries and countries. The more agile a project was, the higher it scored on two success measures, efficiency and stakeholder satisfaction, and the effect was statistically significant. Earlier, Dybå and Dingsøyr (2008) searched the literature up to 2005: of 1,996 studies found, 36 were included as empirical studies of acceptable quality, mostly about Extreme Programming. They judged the strength of evidence to be low and called for more and better studies.

**Limits.** Success came from survey answers, not audited outcomes, and teams that choose agile may differ in other ways. The survey measured degree of agile use, not a clean agile versus waterfall split. The 2008 review stops at 2005. We know of no randomized comparison.

> **Say this to your boss:** The largest survey we found (1,002 projects) links more agile use to better efficiency and stakeholder satisfaction, but a systematic review rated the evidence low. Let's judge our process by our own delivery data, not by the label.

**What would change my mind.** Controlled or matched comparisons of agile and plan-driven teams on the same kind of work, with outcomes measured independently of the teams.

**Sources** (checked 2026-10-01):

1. Pedro Serrador, Jeffrey K. Pinto (2015). Does Agile work? A quantitative analysis of agile project success. International Journal of Project Management 33(5). [link](https://pure.psu.edu/en/publications/does-agile-work-a-quantitative-analysis-of-agile-project-success/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. Tore Dybå, Torgeir Dingsøyr (2008). Empirical studies of agile software development: A systematic review. Information and Software Technology 50(9-10). [link](https://doi.org/10.1016/j.infsof.2008.01.006) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="practices-code-review-bugs"></a>
### Code review mainly finds bugs.

**✗ Not supported · Grade B** (Three observational studies in industry, student and open-source settings agree, though they classify review findings rather than measure production defects.)

**What the research says.** At Microsoft, Bacchelli and Bird (2013) classified 570 review comments: 78 (14%) were about defects and 165 (29%) were code improvements, and most defect comments were simple logic slips. Of 873 surveyed programmers, 383 (44%) ranked finding defects as their first reason for review. Mäntylä and Lassenius (2009) found that about 75% of the defects found in industrial and student reviews were evolvability (maintainability) issues and 25% were functional. Beller and colleagues (2014) found the same 75:25 split in over 1,400 changes in two open-source projects.

**Limits.** These studies classify what comments and fixes are about. They do not measure how many production defects reviews prevent. Reviews do find real bugs, and the mix may differ between teams. The studies date from 2009 to 2014.

> **Say this to your boss:** At Microsoft only 14% of review comments were about defects, and studies of other teams found about 75% of review findings were maintainability issues. Let's keep reviews for knowledge sharing and maintainability, and not rely on them as our main bug filter.

**What would change my mind.** A large, recent classification of review findings across many teams showing that most are functional defects.

**Sources** (checked 2026-10-01):

1. Alberto Bacchelli, Christian Bird (2013). Expectations, outcomes, and challenges of modern code review. ICSE 2013. [link](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/ICSE202013-codereview.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. Mika V. Mäntylä, Casper Lassenius (2009). What Types of Defects Are Really Discovered in Code Reviews?. IEEE Transactions on Software Engineering 35(3). [link](https://doi.org/10.1109/TSE.2008.71) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
3. Moritz Beller, Alberto Bacchelli, Andy Zaidman, Elmar Juergens (2014). Modern code reviews in open-source projects: which problems do they fix?. MSR 2014. [link](https://doi.org/10.1145/2597073.2597082) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (replication)

---

<a id="practices-pair-programming"></a>
### Pair programming improves code quality.

**~ It depends · Grade B** (One meta-analysis of controlled experiments, with large differences between studies, signs of publication bias and mostly short tasks.)

**What the research says.** Hannay, Dybå, Arisholm and Sjøberg (2009) meta-analysed experiments that compared pairs with solo programmers. Pairing had a small positive effect on quality, a medium positive effect on duration (pairs finished sooner) and a medium negative effect on effort (more person-hours in total). Pairs were faster on simple tasks and wrote better code on complex tasks. The quality gain on complex tasks came with considerably longer duration, and the speed gain on simple tasks with considerably more effort. The authors concluded that pair programming is not uniformly beneficial.

**Limits.** Most experiments used short tasks, so they say little about months of real project work. Results differed a lot between studies, and the authors saw signs of publication bias. Effects depended on task complexity.

> **Say this to your boss:** A meta-analysis of pair programming experiments found a small quality gain but more total person-hours. Let's pair on the hard, risky tasks, where the quality gain shows up, and not on everything.

**What would change my mind.** A controlled study of professional teams pairing versus working solo on real project work for months, showing fewer escaped defects at similar total effort.

**Sources** (checked 2026-10-01):

1. Jo E. Hannay, Tore Dybå, Erik Arisholm, Dag I. K. Sjøberg (2009). The effectiveness of pair programming: A meta-analysis. Information and Software Technology 51(7). [link](https://doi.org/10.1016/j.infsof.2009.02.001) <sub>✓ metadata checked (title, authors, year)</sub> (primary)

---

<a id="practices-speed-incidents"></a>
### Shipping faster means more incidents.

**~ It depends · Grade C** (Consistent survey results plus one company's experience report, but the data are self-reported, correlational and vendor-run.)

**What the research says.** DORA's annual surveys, summarised in Forsgren, Humble and Kim's Accelerate (2018), found that speed and stability moved together: teams that deployed more often and had shorter lead times also reported lower change failure rates and faster recovery. Google's SRE book reports that roughly 70% of outages are due to changes in a live system, and says progressive rollouts, fast detection and safe rollback raise release velocity and safety together. The link is not perfectly clean: in DORA's 2024 report the medium cluster had a lower change failure rate than the high cluster.

**Limits.** DORA data are self-reported survey answers, show association only, and come from a program run by Google Cloud. Fast teams may already have strong tests and small changes, so speeding up alone may not copy their results. The 70% figure is one company's experience, not a study.

> **Say this to your boss:** DORA's surveys find that teams that ship more often also report fewer failed changes. Google's SRE book ties about 70% of outages to changes and says progressive rollouts and fast rollback raise velocity and safety together. Let's speed up in small batches and track our change failure rate.

**What would change my mind.** A before-and-after study of teams that sped up releases, with incidents counted the same way throughout, showing a lasting rise in incidents.

**Sources** (checked 2026-10-01):

1. Nicole Forsgren, Jez Humble, Gene Kim (2018). Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations. IT Revolution Press. [link](https://itrevolution.com/product/accelerate/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. DORA, Google Cloud (2024). Accelerate State of DevOps Report 2024. Google Cloud DORA. [link](https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
3. Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy (2016). Site Reliability Engineering: How Google Runs Production Systems. O'Reilly Media. [link](https://sre.google/sre-book/introduction/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="practices-static-typing-bugs"></a>
### Static typing prevents bugs.

**~ It depends · Grade B** (Two observational studies, one limited to JavaScript and one a contested reanalysis of GitHub data, so neither is a controlled test.)

**What the research says.** Gao, Bird and Barr (2017) took real bugs from public JavaScript projects, added type annotations by hand, and checked whether Flow or TypeScript would have flagged them. Each detected 15%. At GitHub scale, Ray and colleagues (2014) reported small associations between language features, including typing, and defects across 729 projects. A 2019 reproduction by Berger and colleagues found flaws in that analysis, cut the languages with an association from 11 to 4, and called the practical effect size exceedingly small.

**Limits.** The 15% is for one language and for bugs that were committed to public repositories, with annotations added after the fact. It ignores the cost of adding types and other benefits. The original GitHub authors dispute the reanalysis. Neither study is a controlled experiment.

> **Say this to your boss:** One study found type checkers would have caught about 15% of real JavaScript bugs. That is worth having, but the GitHub-scale link between typing and fewer defects weakened on reanalysis. Let's adopt types for the bugs they catch, not for a promise of far fewer defects.

**What would change my mind.** A preregistered study on production code, with a control group, showing that adding static types lowers defect rates, and an effect that holds on reanalysis.

**Sources** (checked 2026-10-01):

1. Zheng Gao, Christian Bird, Earl T. Barr (2017). To Type or Not to Type: Quantifying Detectable Bugs in JavaScript. ICSE 2017. [link](https://doi.org/10.1109/ICSE.2017.75) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Baishakhi Ray, Daryl Posnett, Vladimir Filkov, Premkumar Devanbu (2014). A Large Scale Study of Programming Languages and Code Quality in Github. FSE 2014. [link](https://doi.org/10.1145/2635868.2635922) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
3. Emery D. Berger, Celeste Hollenbeck, Petr Maj, Olga Vitek, Jan Vitek (2019). On the Impact of Programming Languages on Code Quality: A Reproduction Study. ACM Transactions on Programming Languages and Systems 41(4). [link](https://doi.org/10.1145/3340571) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (replication)

---

<a id="practices-tdd-defects"></a>
### Test-driven development reduces defects.

**~ It depends · Grade B** (A meta-analysis of 27 studies plus a study of professionals, but most experiments are small and the effects differ between industrial and academic settings.)

**What the research says.** Rafique and Mišić (2013) pooled 27 studies in a meta-analysis. TDD had a small positive effect on external quality (fewer defects) and little to no discernible effect on productivity. In industrial studies, TDD showed a larger quality gain and a larger productivity drop than in academic ones. Fucci and colleagues (2017) analysed 82 task sessions by 39 professionals. Whether tests were written first or last made no important difference to quality or productivity. Short, uniform work cycles went with better quality and productivity.

**Limits.** Most experiments are small and short, and many used students. Mixed results make a single pooled number fragile. Fucci's study is observational, so it shows association, not cause.

> **Say this to your boss:** A meta-analysis of 27 studies found only a small quality gain from TDD and no clear effect on speed, and a study of professionals found test-first order did not matter. Let's keep small steps and solid tests, and not mandate test-first.

**What would change my mind.** Large preregistered experiments with professional teams showing a consistent drop in escaped defects with test-first, at a cost we can measure.

**Sources** (checked 2026-10-01):

1. Yahya Rafique, Vojislav B. Mišić (2013). The Effects of Test-Driven Development on External Quality and Productivity: A Meta-Analysis. IEEE Transactions on Software Engineering 39(6). [link](https://doi.org/10.1109/TSE.2012.28) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Davide Fucci, Hakan Erdogmus, Burak Turhan, Markku Oivo, Natalia Juristo (2017). A Dissection of the Test-Driven Development Process: Does It Really Matter to Test-First or to Test-Last?. IEEE Transactions on Software Engineering 43(7). [link](https://doi.org/10.1109/TSE.2016.2616877) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)

---

<a id="practices-tech-debt-slows"></a>
### Technical debt slows teams down.

**✓ Supported · Grade B** (Two independent observational lines agree (39 codebases mined, 43 developers surveyed), but neither is experimental and one metric comes from the first author's company.)

**What the research says.** Tornhill and Borg (2022) mined 39 proprietary codebases (30,737 files) using a code quality metric, issue tracker data and version control history. Low-quality code had 15 times more defects than high-quality code, issues in it took on average 124% more time in development, and maximum cycle times were 9 times longer. In a survey of 43 developers, Besker, Martini and Bosch (2019) found that developers reported wasting 23% of their development time on average because of technical debt.

**Limits.** Observational: low-quality code may also sit in the hardest parts of the system. The quality metric, Code Health, comes from the first author's company, and the 23% is self-reported. Neither study tests whether paying down debt restores speed.

> **Say this to your boss:** In a study of 39 codebases, issues in low-quality code took 124% more development time, and that code had 15 times more defects. Let's put a fixed slice of each sprint into our worst hotspots and track cycle time there.

**What would change my mind.** A controlled or before-and-after study showing that refactoring low-quality code does not reduce delivery time or defects.

**Sources** (checked 2026-10-01):

1. Adam Tornhill, Markus Borg (2022). Code Red: The Business Impact of Code Quality - A Quantitative Study of 39 Proprietary Production Codebases. TechDebt 2022. [link](https://arxiv.org/abs/2203.04374) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Terese Besker, Antonio Martini, Jan Bosch (2019). Software developer productivity loss due to technical debt: A replication and extension study examining developers' development work. Journal of Systems and Software 156. [link](https://research.chalmers.se/publication/511450/file/511450_Fulltext.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)

---

Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.
