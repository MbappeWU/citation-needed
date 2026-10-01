# 9. Hiring, feedback, performance reviews

What predicts job performance, and what ratings actually measure.

[← Back to the index](../README.md) · [中文](09-people.zh-CN.md)

Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata and quoted numbers were checked against the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).

---

<a id="people-bonus-complex-tasks"></a>
### Bonuses motivate better work on complex tasks.

**~ It depends · Grade C** (Lab experiments, a literature review and a correlational meta-analysis; none tests bonuses on software work.)

**What the research says.** Ariely et al. (2009) paid people in the US and rural India small to very large amounts for performing tasks. With some important exceptions, very high rewards hurt performance. Bonner and Sprinkle (2002) reviewed the literature and found that whether money helps depends on the person, the task, the setting and the scheme. A meta-analysis of 183 samples (212,468 people) found that intrinsic motivation predicted performance quality better, while incentives predicted quantity better (Cerasoli et al., 2014).

**Limits.** The key experiments are short lab tasks, not software work, and the high-stakes result has exceptions. The meta-analysis is correlational and mixes school, work and sport. None of these tests a bonus paid to engineers.

> **Say this to your boss:** For thinking-heavy work the research on bonuses is mixed: incentives track output quantity better than quality, and in one set of lab experiments very large rewards usually hurt performance. Before we tie a bonus to design or debugging work, can we agree what we would measure?

**What would change my mind.** A field experiment in software teams showing that a performance bonus raised the quality of complex work, such as post-release defect rates, without hurting collaboration.

**Sources** (checked 2026-10-01):

1. Dan Ariely, Uri Gneezy, George Loewenstein, Nina Mazar (2009). Large stakes and big mistakes. The Review of Economic Studies 76(2). [link](https://doi.org/10.1111/j.1467-937X.2009.00534.x) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Sarah E. Bonner, Geoffrey B. Sprinkle (2002). The effects of monetary incentives on effort and task performance: theories, evidence, and a framework for research. Accounting, Organizations and Society 27(4-5). [link](https://doi.org/10.1016/S0361-3682(01)00052-6) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
3. Christopher P. Cerasoli, Jessica M. Nicklin, Michael T. Ford (2014). Intrinsic motivation and extrinsic incentives jointly predict performance: A 40-year meta-analysis. Psychological Bulletin 140(4). [link](https://doi.org/10.1037/a0035661) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)

---

<a id="people-feedback-improves"></a>
### Feedback always improves performance.

**✗ Not supported · Grade B** (A single large meta-analysis from 1996, covering many kinds of feedback and tasks, mostly outside software teams.)

**What the research says.** Kluger and DeNisi (1996) pooled 607 effect sizes (23,663 observations) from studies of feedback interventions. On average feedback improved performance (d = .41), but over one-third of the interventions made performance worse. Feedback helped less as it pulled attention toward the self and away from the task.

**Limits.** The review is from 1996 and spans many tasks and kinds of feedback, mostly not software work. An average of .41 hides wide differences. It was not designed to test code review comments or annual reviews.

> **Say this to your boss:** A large meta-analysis found feedback helps on average, but over a third of feedback interventions made performance worse. Let's keep feedback on the task and how to improve it, not on the person.

**What would change my mind.** A newer, larger meta-analysis of workplace feedback showing that almost none of the interventions lowered performance.

**Sources** (checked 2026-10-01):

1. Avraham N. Kluger, Angelo DeNisi (1996). The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory. Psychological Bulletin 119(2). [link](https://doi.org/10.1037/0033-2909.119.2.254) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)

---

<a id="people-forced-ranking"></a>
### Forced ranking raises team performance.

**✗ Not supported · Grade C** (One simulation, two papers of lab experiments and one single-firm field study; none tests team output in a software company.)

**What the research says.** A simulation (Scullen et al., 2005) found that firing a fixed share of workers each year could noticeably raise average workforce potential, mostly in the first several years, with the gain depending mainly on the share fired and on voluntary turnover. In lab experiments, forced distribution made people faster when working alone but slower in teams and cut knowledge sharing (Loberg et al., 2021), and it helped when workers acted independently but hurt when they could harm each other (Berger et al., 2013). In one multinational firm, high performers who missed the top rating because top ratings were capped left more often than top-rated peers, despite larger bonuses (Bond, 2025).

**Limits.** None of these tests team output in a software company. The simulation's gains depend on how reliable ratings are, which the manager-ratings claim questions. The lab tasks were short, and the field result comes from one firm and one cap on top ratings.

> **Say this to your boss:** A simulation says forced ranking can lift workforce quality, mostly in the first few years, while lab experiments found less knowledge sharing in teams. Can we look at our own team's data before adopting fixed quotas?

**What would change my mind.** A field or natural experiment in software teams showing that adopting forced distribution raised team output without raising attrition or hurting collaboration.

**Sources** (checked 2026-10-01):

1. Steven E. Scullen, Paul K. Bergey, Lynda Aiman-Smith (2005). Forced distribution rating systems and the improvement of workforce potential: A baseline simulation. Personnel Psychology 58(1). [link](https://doi.org/10.1111/j.1744-6570.2005.00361.x) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. L. Loberg, S. Nüesch, J. N. Foege (2021). Forced distribution rating systems and team collaboration. Journal of Economic Behavior & Organization 188. [link](https://www.unifr.ch/tim/en/assets/public/uploads/Loberg_N%C3%BCesch_Foege_2021.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
3. Johannes Berger, Christine Harbring, Dirk Sliwka (2013). Performance appraisals and the impact of forced distribution: An experimental investigation. Management Science 59(1). [link](https://doi.org/10.1287/mnsc.1120.1624) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
4. Brittany M. Bond (2025). Cut to the curve: Underrecognition and talent loss from forced ranking in a multinational firm. Management Science. [link](https://doi.org/10.1287/mnsc.2023.01204) <sub>✓ metadata checked (title, authors, year)</sub> (primary)

---

<a id="people-gut-interview"></a>
### A gut-feel interview is a good way to hire.

**✗ Not supported · Grade B** (Two meta-analyses, 24 years apart, agree that structured interviews beat unstructured ones. Both are correlational, and the outcome is usually a supervisor's rating.)

**What the research says.** Sackett and colleagues (2022) re-estimated how well hiring methods predict later job performance, as a correlation. Structured interviews (same questions for everyone, scored with a rubric) came out at .42 and unstructured interviews at .19. The older review by Schmidt and Hunter (1998) gave .51 and .38. Both reviews put structured ahead, and the newer one widens the gap.

**Limits.** These are averages across many jobs, not only software, and the outcome is usually a supervisor's rating, which is noisy. A validity of .19 is low but not zero. Estimates depend on statistical corrections for range restriction, which is what Sackett et al. revised.

> **Say this to your boss:** In a 2022 meta-analysis, structured interviews predict job performance at .42 and unstructured ones at .19. Let's use the same questions and a scoring rubric for every candidate.

**What would change my mind.** A large study of software hiring showing that interviewers' unstructured overall impressions predict later performance as well as a scored structured interview does.

**Sources** (checked 2026-10-01):

1. Paul R. Sackett, Charlene Zhang, Christopher M. Berry, Filip Lievens (2022). Revisiting meta-analytic estimates of validity in personnel selection: Addressing systematic overcorrection for restriction of range. Journal of Applied Psychology 107(11). [link](https://doi.org/10.1037/apl0000994) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Frank L. Schmidt, John E. Hunter (1998). The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. Psychological Bulletin 124(2). [link](https://doi.org/10.1037/0033-2909.124.2.262) <sub>✓ metadata checked (title, authors, year)</sub> (primary)

---

<a id="people-manager-ratings"></a>
### Manager ratings reflect how well people really perform.

**~ It depends · Grade B** (Two large studies from different research groups agree that ratings carry real signal but that much of the variance comes from the rater. Both are observational.)

**What the research says.** Viswesvaran, Ones and Schmidt (1996) pooled 40 samples covering 14,650 people and found that two supervisors rating the same person agreed with a reliability of .52 on overall job performance. Scullen, Mount and Goff (2000) studied 360-degree ratings of two groups of managers (2,350 and 2,142 people), each rated by 7 raters. The rater's own idiosyncrasies explained 62% and 53% of rating variance in the two data sets. The ratee's actual performance, general plus dimension-specific, explained 21% and 25%.

**Limits.** The 360-degree data were developmental ratings of managers by 7 raters, not annual boss ratings of engineers, and ratings used for pay may differ. Reliability shows agreement, not accuracy: raters can share the same bias.

> **Say this to your boss:** Two supervisors rating the same person show a reliability of just .52, and in two sets of 2,000-plus managers the rater explained more of the score than the person rated. Let's use ratings as one input, not as the verdict.

**What would change my mind.** Data from engineering teams showing that different managers' ratings of the same people agree closely and track independent measures of output.

**Sources** (checked 2026-10-01):

1. Chockalingam Viswesvaran, Deniz S. Ones, Frank L. Schmidt (1996). Comparative analysis of the reliability of job performance ratings. Journal of Applied Psychology 81(5). [link](https://doi.org/10.1037/0021-9010.81.5.557) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. Steven E. Scullen, Michael K. Mount, Maynard Goff (2000). Understanding the latent structure of job performance ratings. Journal of Applied Psychology 85(6). [link](https://doi.org/10.1037/0021-9010.85.6.956) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)

---

<a id="people-whiteboard-coding"></a>
### Whiteboard coding interviews show how well someone codes.

**~ It depends · Grade C** (One small experiment with students plus indirect evidence from work-sample tests. Neither checks whether whiteboard scores predict later job performance.)

**What the research says.** Behroozi and colleagues (2020) gave 48 computer science students a technical interview problem. Half solved it at a whiteboard with an interviewer watching, half at a whiteboard alone in a private room. Being watched cut performance by more than half, and stress and cognitive load were higher. Separately, Sackett et al. (2022) put work-sample tests, which imitate the job, at .33 validity, above unstructured interviews at .19.

**Limits.** The sample is small and made of students, not hired engineers, and nobody was followed into a job. Work-sample validity comes from many jobs, and whiteboard puzzles may not resemble the work. Whether coping with being watched matters on the job was not tested.

> **Say this to your boss:** In one experiment, simply being watched cut interview scores by more than half. Let's test coding with a realistic task that candidates can work on without an audience.

**What would change my mind.** A study linking whiteboard interview scores to later job performance in software teams, or a replication in which being watched does not lower scores.

**Sources** (checked 2026-10-01):

1. Mahnaz Behroozi, Shivani Shirolkar, Titus Barik, Chris Parnin (2020). Does stress impact technical interview performance?. ESEC/FSE 2020. [link](https://doi.org/10.1145/3368089.3409712) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Paul R. Sackett, Charlene Zhang, Christopher M. Berry, Filip Lievens (2022). Revisiting meta-analytic estimates of validity in personnel selection: Addressing systematic overcorrection for restriction of range. Journal of Applied Psychology 107(11). [link](https://doi.org/10.1037/apl0000994) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="people-years-experience"></a>
### More years of experience means better performance.

**~ It depends · Grade B** (Meta-analyses agree on a modest link, and quasi-experiments on programmers point the same way, but all of it is observational.)

**What the research says.** A meta-analysis of 44 samples (25,911 people) found a corrected correlation of .27 between work experience and job performance (Quiñones et al., 1995). It was higher for measures of the amount of experience (.43) and for task-level measures (.41). Schmidt and Hunter (1998) put years of job experience at .18, below structured interviews (.51) and work samples (.54). Dieste et al. (2017) ran 10 quasi-experiments with students and professionals: years of experience were a poor predictor of programmer performance, while task-related knowledge and academic background predicted better.

**Limits.** The link varies with how long people have been in the job and with job complexity (McDaniel et al., 1988). Most data are not from software, and the programmer evidence is quasi-experimental. Years in a job do not say what the work was.

> **Say this to your boss:** Years of experience correlate only about .18 with job performance, against .51 for structured interviews in the same 1998 review. Let's ask what work candidates have done instead of setting a years cutoff.

**What would change my mind.** Large studies of software engineers showing that years of experience predict measured output or quality at least as well as skill tests do.

**Sources** (checked 2026-10-01):

1. Miguel A. Quiñones, J. Kevin Ford, Mark S. Teachout (1995). The relationship between work experience and job performance: A conceptual and meta-analytic review. Personnel Psychology 48(4). [link](https://doi.org/10.1111/j.1744-6570.1995.tb01785.x) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. Michael A. McDaniel, Frank L. Schmidt, John E. Hunter (1988). Job experience correlates of job performance. Journal of Applied Psychology 73(2). [link](https://doi.org/10.1037/0021-9010.73.2.327) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
3. Frank L. Schmidt, John E. Hunter (1998). The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. Psychological Bulletin 124(2). [link](https://doi.org/10.1037/0033-2909.124.2.262) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
4. Oscar Dieste, Alejandrina M. Aranda, Fernando Uyaguari, et al. (2017). Empirical evaluation of the effects of experience on code quality and programmer productivity: an exploratory study. Empirical Software Engineering 22(5). [link](https://www.semanticscholar.org/paper/Empirical-evaluation-of-the-effects-of-experience-Tub%C3%ADo-Aranda/5327cdf59ffb4f331243647a67859f336ae2de11) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)

---

Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.
