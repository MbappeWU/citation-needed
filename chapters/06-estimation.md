# 6. Estimates and project failure

Why plans slip, and which failure statistics you should not repeat.

[← Back to the index](../README.md) · [中文](06-estimation.zh-CN.md)

Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata was compared and registered quote snippets were matched in the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).

---

<a id="estimation-anchoring-experts"></a>
### Experienced estimators are not affected by anchoring.

**✗ Not supported · Grade B** (Controlled experiments with software professionals (381 in one study, 410 in another) found large anchoring effects, but most come from one research group.)

**What the research says.** Løhre and Jørgensen (2016) ran three experiments with 381 software professionals and confirmed that numerical anchors shift effort estimates. The effect did not shrink when the anchor was less precise or came from a less credible source. Shepperd, Mair and Jørgensen (2018) ran two series of experiments with 410 developers in company settings. Anchors had a large effect (robust Cohen's d = 1.19), and a workshop on judgement biases cut it to d = 0.72 without removing it. In a small experiment by Aranda and Easterbrook (2005), a 20-month anchor produced far higher estimates than a 2-month anchor, even from a source who said they had no software experience.

**Limits.** Most studies come from one research group and test estimates in experiments, not in live projects. Aranda and Easterbrook's sample is small and mixes students and professionals. A field experiment with outsourcing companies (Jørgensen and Grimstad 2011) also found estimates moved by misleading information, but its authors warn against carrying lab effect sizes over to the field.

> **Say this to your boss:** In controlled experiments, professional developers were pulled toward a number they were shown first, even when it came from a source that was not an expert. Let's collect estimates independently before anyone states a target.

**What would change my mind.** A preregistered replication with experienced professionals, in real bidding or planning settings, showing no effect of an irrelevant anchor on estimates.

**Sources** (checked 2026-10-01):

1. Erik Løhre, Magne Jørgensen (2016). Numerical anchors and their strong effects on software development effort estimates. Journal of Systems and Software 116. [link](https://doi.org/10.1016/j.jss.2015.03.015) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Martin Shepperd, Carolyn Mair, Magne Jørgensen (2018). An Experimental Evaluation of a De-biasing Intervention for Professional Software Developers. ACM Symposium on Applied Computing (SAC) 2018. [link](https://arxiv.org/abs/1804.03919) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
3. Jorge Aranda, Steve Easterbrook (2005). Anchoring and adjustment in software estimation. ESEC/FSE-13 (ACM SIGSOFT Software Engineering Notes 30(5)). [link](https://doi.org/10.1145/1095430.1081761) <sub>✓ metadata checked (title, authors, year)</sub> (context)
4. Magne Jørgensen, Stein Grimstad (2011). The Impact of Irrelevant and Misleading Information on Software Development Effort Estimates: A Randomized Controlled Field Experiment. IEEE Transactions on Software Engineering 37(5). [link](https://doi.org/10.1109/TSE.2010.78) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="estimation-careful-planning"></a>
### If we plan carefully enough, our software estimates will be accurate.

**✗ Not supported · Grade C** (Indirect evidence: experiments on students and everyday tasks plus one review, with no software study that varies how much teams plan.)

**What the research says.** Buehler, Griffin and Ross (1994) asked university students to predict when they would finish their honours theses. The average prediction was 33.9 days and the average worst-case guess was 48.6 days. The theses took 55.5 days on average, and about 30% were finished within the predicted time. The authors report that people predict from a plan-based scenario and give little weight to how similar past tasks went. A 2012 review by Halkjelsvik and Jørgensen found no general bias across lab tasks, but the amount of work in larger real-life projects is often underestimated.

**Limits.** The thesis data come from students, not software teams. Neither source tests planning depth directly, so this shows planning alone does not remove optimism, not that planning is useless. Estimates checked against past project data are not evaluated here.

> **Say this to your boss:** Research on the planning fallacy finds that plan-based predictions tend to run optimistic, and larger real projects are often underestimated. Can we check this estimate against how long similar work actually took here?

**What would change my mind.** A controlled study in software teams showing that more detailed planning alone produced estimates with smaller error against actual effort.

**Sources** (checked 2026-10-01):

1. Roger Buehler, Dale Griffin, Michael Ross (1994). Exploring the "planning fallacy": Why people underestimate their task completion times. Journal of Personality and Social Psychology 67(3). [link](https://doi.org/10.1037/0022-3514.67.3.366) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Torleif Halkjelsvik, Magne Jørgensen (2012). From origami to software development: A review of studies on judgment-based predictions of performance time. Psychological Bulletin 138(2). [link](https://doi.org/10.1037/a0025996) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="estimation-chaos-failure-rate"></a>
### 70% of IT projects fail.

**✗ Not supported · Grade B** (Two peer-reviewed critiques agree, one applying Standish's definitions to 1,211 other projects. They show the figure is unreliable, not what the true rate is.)

**What the research says.** The 70% traces to the Standish Group's CHAOS reports, which count a project as a success only if it meets its original cost, time and scope forecast. Its 1994 report put 16.2% of projects as successes, 52.7% as challenged and 31.1% as cancelled. Eveleens and Verhoef (2010) applied those definitions to 5,457 forecasts of 1,211 real projects and found they only compare outcomes with the original forecast, which makes the figures misleading. Jørgensen and Moløkken-Østvold (2006) found the report's 189% average overrun far above the typical error of about 30% in other sources, and that Standish had asked executives for failure stories.

**Limits.** This shows the figure is unreliable, not that the true failure rate is low. How many projects 'fail' depends on the definition, and there is no accepted measure. The critiques date from 2006 to 2010; we have not checked later CHAOS editions. Glass (2006) raised the same sampling concern.

> **Say this to your boss:** Standish's figures judge projects only against their original estimates, and published critiques found that this makes them misleading. Let's define what failure means for us, such as cancelled or never used, before we quote a rate.

**What would change my mind.** An open, independently audited dataset showing that about 70% of IT projects fail under a definition based on sponsor outcomes rather than original estimates.

**Sources** (checked 2026-10-01):

1. J. Laurenz Eveleens, Chris Verhoef (2010). The Rise and Fall of the Chaos Report Figures. IEEE Software 27(1). [link](https://doi.org/10.1109/MS.2009.154) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Magne Jørgensen, Kjetil Moløkken-Østvold (2006). How large are software cost overruns? A review of the 1994 CHAOS report. Information and Software Technology 48(4). [link](https://doi.org/10.1016/j.infsof.2005.07.002) <sub>✓ metadata checked (title, authors, year)</sub> (critique)
3. Robert L. Glass (2006). The Standish report: does it really describe a software crisis?. Communications of the ACM 49(8). [link](https://doi.org/10.1145/1145287.1145301) <sub>✓ metadata checked (title, authors, year)</sub> (critique)
4. The Standish Group (1994). The CHAOS Report. The Standish Group International. [link](https://personal.utdallas.edu/~chung/SYSM6309/chaos_report.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="estimation-experts-vs-models"></a>
### Expert estimates are less accurate than formal estimation models.

**✗ Not supported · Grade C** (Rests mainly on one review by a researcher who has long studied expert estimation; no large head-to-head trial is cited.)

**What the research says.** Jørgensen (2004) reviewed studies of expert estimation of software development effort. Expert estimation was the most frequently applied strategy in software projects. The review found no substantial evidence in favour of estimation models and concluded there are situations where expert estimates can be expected to be more accurate than formal models. It also collected practices that improve expert estimates, such as combining estimates from different experts and methods, using checklists, assessing uncertainty and giving estimators feedback on their accuracy.

**Limits.** This is a 2004 review by one author, so it is one reviewer's reading of studies from before then. 'No substantial evidence for models' is not evidence that models are worse in general. Newer models are not covered, and our own team's data may favour either approach.

> **Say this to your boss:** A 2004 review of the comparison studies found no substantial evidence that formal models beat expert estimates. Let's get estimates from both, compare them, and look into any large gap.

**What would change my mind.** A large, preregistered comparison on current software projects, with models and experts given the same information, showing models clearly more accurate.

**Sources** (checked 2026-10-01):

1. Magne Jørgensen (2004). A review of studies on expert estimation of software development effort. Journal of Systems and Software 70(1-2). [link](https://doi.org/10.1016/S0164-1212(02)00156-5) <sub>✓ metadata checked (title, authors, year)</sub> (primary)

---

<a id="estimation-overrun-margin"></a>
### IT projects overrun by a predictable margin, so a fixed buffer is enough.

**✗ Not supported · Grade C** (One large dataset analysed by a single research team and reported in a magazine article, plus a review of survey evidence on typical overruns.)

**What the research says.** Flyvbjerg and Budzier (2011) analysed 1,471 IT projects. The average cost overrun was 27%, but about one project in six was a 'black swan': its cost overrun averaged 200% and its schedule overrun was almost 70%. The average hides the tail. Jørgensen and Moløkken-Østvold (2006) reviewed other sources and put a typical cost estimation error at about 30%, close to that average. A buffer sized to the average would not cover the one project in six.

**Limits.** The 1,471-project sample is the authors' own and is reported in a magazine article, not a peer-reviewed paper. We have not checked a second independent dataset on the size of the tail. Overrun is measured against each project's own baseline estimate.

> **Say this to your boss:** The average IT overrun is about 27%, but around one project in six overruns by roughly 200%. A flat 30% buffer will not cover those, so let's add checkpoints where we can re-plan or stop early.

**What would change my mind.** Several independent datasets showing that overruns on comparable IT projects fall in a narrow band, so that a fixed buffer would cover nearly all of them.

**Sources** (checked 2026-10-01):

1. Bent Flyvbjerg, Alexander Budzier (2011). Why Your IT Project May Be Riskier Than You Think. Harvard Business Review, September 2011 (author copy on arXiv). [link](https://arxiv.org/pdf/1304.0265) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. Magne Jørgensen, Kjetil Moløkken-Østvold (2006). How large are software cost overruns? A review of the 1994 CHAOS report. Information and Software Technology 48(4). [link](https://doi.org/10.1016/j.infsof.2005.07.002) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="estimation-tight-deadlines"></a>
### Tight deadlines make teams more productive.

**~ It depends · Grade B** (A systematic review of 102 papers plus a field study of projects at one firm; the answer differs by outcome, so the evidence supports 'it depends'.)

**What the research says.** A systematic review by Kuutila and colleagues covered 102 papers on time pressure in software engineering. It reports that the majority of high-quality studies found increased productivity and decreased quality under time pressure. Nan and Harter (2009) analysed projects at one large technology firm. Budget pressure had a U-shaped relationship with development cycle time and with effort: both were lowest at moderate pressure and higher when pressure was low or high.

**Limits.** The review pools studies with different designs and measures, so 'productivity' is not one number. Nan and Harter's data come from one firm, and budget pressure is not the same thing as a tight deadline. None of this shows what happens to delivery over many months.

> **Say this to your boss:** A review of 102 papers found that most high-quality studies saw productivity rise and quality fall under time pressure. If we tighten this deadline, which quality risks are we accepting?

**What would change my mind.** Controlled field data showing that shortening deadlines on comparable projects raised delivered value over several months, with no rise in defects.

**Sources** (checked 2026-10-01):

1. Miikka Kuutila, Mika Mäntylä, Umar Farooq, Maëlick Claes (2019). Time Pressure in Software Engineering: A Systematic Review. arXiv preprint; journal version in Information and Software Technology 121 (2020). [link](https://arxiv.org/abs/1901.05771) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Ning Nan, Donald E. Harter (2009). Impact of Budget and Schedule Pressure on Software Development Cycle Time and Effort. IEEE Transactions on Software Engineering 35(5). [link](https://doi.org/10.1109/TSE.2009.18) <sub>✓ metadata checked (title, authors, year)</sub> (primary)

---

Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.
