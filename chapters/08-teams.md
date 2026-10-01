# 8. Team size and structure

Brooks's law, Conway's law, psychological safety.

[← Back to the index](../README.md) · [中文](08-teams.zh-CN.md)

Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata and quoted numbers were checked against the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).

---

<a id="teams-best-size-five-to-nine"></a>
### The best team size is five to nine people.

**~ It depends · Grade C** (The data are cross-sectional, partly from vendors or from outside software, and none identifies an optimum.)

**What the research says.** No study we reviewed finds an optimum of five to nine. Wheelan (2009) studied 329 work groups in for-profit and nonprofit organisations, not a software sample. Groups of 3 to 6 were more productive than groups of 7 to 10 or 11 or more, and groups of 3 to 8 beat groups of 9 or more. Rodríguez and colleagues report lower productivity at nine or more in ISBSG project data. QSM's vendor data (about 1,060 projects) found projects with four or fewer staff used much less effort than those with five or more.

**Limits.** Productivity here is output per head or per project size, not value delivered. Bigger teams can still deliver more in total. ISBSG and QSM data come from firms that chose to contribute them. Best size depends on the work and how well it splits.

> **Say this to your boss:** Wheelan's study of 329 work groups and ISBSG project data both show productivity dropping at about nine people. Neither shows that five to nine is the best range, so let's size the team to the work and keep it as small as the work allows.

**What would change my mind.** A study of software teams of different sizes doing comparable work, with output and quality measured the same way, showing a clear peak at five to nine.

**Sources** (checked 2026-10-01):

1. Susan A. Wheelan (2009). Group Size, Group Development, and Group Productivity. Small Group Research 40(2). [link](https://doi.org/10.1177/1046496408328703) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. D. Rodríguez, M. A. Sicilia, E. García, R. Harrison (2012). Empirical findings on team size and productivity in software development. Journal of Systems and Software 85(3). [link](https://doi.org/10.1016/j.jss.2011.09.009) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
3. Kate Armel (QSM) (2012). Part II: Small Teams Deliver Lower Cost, Higher Quality. QSM, vendor analysis of the QSM SLIM project database. [link](https://www.qsm.com/blog/2012/part-ii-small-teams-deliver-lower-cost-higher-quality) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="teams-brooks-law"></a>
### Adding people to a late project makes it later.

**~ It depends · Grade C** (The rule rests on one author's experience and on simulations. We found no controlled test of adding staff to late projects.)

**What the research says.** Brooks (1975) drew the rule from managing IBM's OS/360 project and introduced it with the words "oversimplifying outrageously". His reasons: newcomers need training, communication grows with headcount, and the work must be re-split. In Abdel-Hamid and Madnick's 1991 project simulation, late additions always raised cost but did not always delay delivery. Timing and how many people were added mattered. Open-source data (Scholtes, 58 projects) show output per developer falling in larger teams. That fits the overhead argument but does not test late additions.

**Limits.** A simulation reflects its builders' assumptions. Outcomes depend on why the project is late, how well the work splits, and how new people are onboarded. Larger-team data do not isolate additions made late.

> **Say this to your boss:** Brooks himself called it an oversimplification. In Abdel-Hamid and Madnick's simulation, late hires always raised cost but did not always delay delivery. So let's ask what the new people would take on, and who would train them.

**What would change my mind.** A large study of real projects showing that staff added late consistently slipped delivery dates, or consistently did not, after adjusting for project size and the reason for lateness.

**Sources** (checked 2026-10-01):

1. Frederick P. Brooks Jr. (1975). The Mythical Man-Month: Essays on Software Engineering. Addison-Wesley (anniversary edition 1995). [link](https://openlibrary.org/isbn/9780201835953) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. Tarek K. Abdel-Hamid, Stuart E. Madnick (1991). Software Project Dynamics: An Integrated Approach. Prentice Hall. [link](https://openlibrary.org/isbn/9780138220402) <sub>↗ not machine-checkable (book or report); link only</sub> (critique)
3. Ingo Scholtes, Pavlin Mavrodiev, Frank Schweitzer (2016). From Aristotle to Ringelmann: a large-scale analysis of team productivity and coordination in Open Source Software projects. Empirical Software Engineering 21(2). [link](https://doi.org/10.1007/s10664-015-9406-4) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (context)
4. Christoph Gote, Pavlin Mavrodiev, Frank Schweitzer, Ingo Scholtes (2022). Big Data = Big Insights? Operationalising Brooks' Law in a Massive GitHub Data Set. Proceedings of the 44th International Conference on Software Engineering (ICSE 2022). [link](https://arxiv.org/abs/2201.04588) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="teams-conway-law"></a>
### The system architecture ends up mirroring the org chart (Conway's law).

**✓ Supported · Grade B** (A review of 142 empirical studies and a matched-pair test point the same way, but all are observational and support is not universal.)

**What the research says.** Conway (1968) argued that organisations design systems that copy their own communication structures. MacCormack and colleagues (2012) compared matched pairs of software products. In every pair, the product from the loosely coupled organisation was more modular, by up to a factor of eight in how far a change in one component can spread. Colfer and Baldwin (2016) reviewed 142 empirical studies: about 70% found strong mirroring, 22% partial mirroring, and 8% none.

**Limits.** Mirroring is a strong tendency, not a law. In open collaborative projects, mostly software, 56% of the descriptive studies did not support it. The studies are observational and do not show that reorganising teams will change an architecture.

> **Say this to your boss:** Colfer and Baldwin reviewed 142 studies, and about 70% found products mirroring the structure of the organisation that built them. So team boundaries are architecture decisions too. It is a tendency, not a law, so let's check where our own team and module boundaries line up.

**What would change my mind.** A large cross-company study of software projects showing module structure unrelated to team structure, or showing that reorganising teams leaves the architecture unchanged.

**Sources** (checked 2026-10-01):

1. Alan MacCormack, Carliss Y. Baldwin, John Rusnak (2012). Exploring the duality between product and organizational architectures: A test of the “mirroring” hypothesis. Research Policy 41(8). [link](https://doi.org/10.1016/j.respol.2012.04.011) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. Lyra J. Colfer, Carliss Y. Baldwin (2016). The mirroring hypothesis: theory, evidence, and exceptions. Industrial and Corporate Change 25(5). [link](https://doi.org/10.1093/icc/dtw027) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
3. Melvin E. Conway (1968). How Do Committees Invent?. Datamation 14(4). [link](https://www.melconway.com/Home/Committees_Paper.html) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="teams-double-team-double-output"></a>
### Doubling the team doubles the output.

**✗ Not supported · Grade B** (Large observational datasets from open source and industry agree that output grows slower than headcount. They measure output by commits or project size, and one open-source study found the opposite.)

**What the research says.** Scholtes and colleagues analysed 58 open-source projects (more than 580,000 commits, more than 30,000 developers). Average output per developer fell as teams grew. A 2022 re-analysis on a larger GitHub corpus, using several productivity metrics, found a negative trend again. In ISBSG industry data, Rodríguez and colleagues report lower productivity for teams of nine or more. In QSM's database of about 1,060 projects, teams of five or more finished small projects 24% sooner than teams of four or fewer, at roughly triple the effort.

**Limits.** Output here means commits or delivered size, not value. Open-source volunteers differ from paid teams. Sornette and colleagues found the opposite in open source: doubling the team multiplied output by about 2.5. A 2024 re-analysis found that measurement choices explained more of the gap than project selection did.

> **Say this to your boss:** In 58 open-source projects, and again in a larger 2022 GitHub analysis, output per developer fell as teams grew. A lower per-head figure after fast growth is what these studies would predict. The useful questions are how much total output rose and what each unit now costs.

**What would change my mind.** Our own data, with output measured the same way before and after growth, showing per-head output held steady while the team doubled. Or a large study of paid software teams showing output rising faster than headcount.

**Sources** (checked 2026-10-01):

1. Ingo Scholtes, Pavlin Mavrodiev, Frank Schweitzer (2016). From Aristotle to Ringelmann: a large-scale analysis of team productivity and coordination in Open Source Software projects. Empirical Software Engineering 21(2). [link](https://doi.org/10.1007/s10664-015-9406-4) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. Christoph Gote, Pavlin Mavrodiev, Frank Schweitzer, Ingo Scholtes (2022). Big Data = Big Insights? Operationalising Brooks' Law in a Massive GitHub Data Set. Proceedings of the 44th International Conference on Software Engineering (ICSE 2022). [link](https://arxiv.org/abs/2201.04588) <sub>✓ metadata checked (title, authors, year)</sub> (replication)
3. D. Rodríguez, M. A. Sicilia, E. García, R. Harrison (2012). Empirical findings on team size and productivity in software development. Journal of Systems and Software 85(3). [link](https://doi.org/10.1016/j.jss.2011.09.009) <sub>✓ metadata checked (title, authors, year)</sub> (replication)
4. Kate Armel (QSM) (2012). Part II: Small Teams Deliver Lower Cost, Higher Quality. QSM, vendor analysis of the QSM SLIM project database. [link](https://www.qsm.com/blog/2012/part-ii-small-teams-deliver-lower-cost-higher-quality) <sub>↗ not machine-checkable (book or report); link only</sub> (context)
5. Didier Sornette, Thomas Maillart, Giacomo Ghezzi (2014). How Much is the Whole Really More than the Sum of its Parts? 1 + 1 = 2.5: Superlinear Productivity in Collective Group Actions. PLOS ONE 9(8). [link](https://arxiv.org/abs/1405.4298) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (critique)
6. Christian Gut, Alfredo Goldman (2024). Revisiting Aristotle vs. Ringelmann: The influence of biases on measuring productivity in Open Source software development. SBES 2024. [link](https://arxiv.org/abs/2408.04782) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="teams-psychological-safety"></a>
### Psychological safety predicts how well a team performs.

**✓ Supported · Grade B** (A meta-analysis pools 136 samples and finds a moderate link, but the studies are mostly observational, so it shows association, not cause.)

**What the research says.** Edmondson (1999) studied 51 work teams in a manufacturing company. Higher team psychological safety went with more learning behavior, and learning behavior linked safety to team performance. Frazier and colleagues (2017) pooled 136 independent samples (over 22,000 people, nearly 5,000 groups). Psychological safety was moderately associated with task performance, along with information sharing and learning. Google's Project Aristotle, a report on its own teams, ranked psychological safety first of five team dynamics.

**Limits.** Most evidence is correlational, so it cannot show whether safety improves results or good results make people feel safer. The pooled studies cover many kinds of work, not only software. Google has not published the Aristotle data, and no outside team has replicated it.

> **Say this to your boss:** Frazier and colleagues' meta-analysis of 136 samples finds psychological safety moderately linked to performance. It is a real factor, not a guarantee. The claim that it is the number one factor comes from an internal Google study whose data are not public.

**What would change my mind.** Time-lagged or experimental studies of software teams showing no change in delivery or quality after safety improves, or a pooled analysis where the link disappears with objective performance data.

**Sources** (checked 2026-10-01):

1. Amy Edmondson (1999). Psychological Safety and Learning Behavior in Work Teams. Administrative Science Quarterly 44(2). [link](https://doi.org/10.2307/2666999) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
2. M. Lance Frazier, Stav Fainshmidt, Ryan L. Klinger, Amir Pezeshkan, Veselina Vracheva (2017). Psychological Safety: A Meta-Analytic Review and Extension. Personnel Psychology 70(1). [link](https://doi.org/10.1111/peps.12183) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
3. Google re:Work (2015). Guide: Understand team effectiveness. Google re:Work, write-up of Project Aristotle. [link](https://rework.withgoogle.com/en/guides/understanding-team-effectiveness/steps/introduction/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="teams-sit-together-ship-faster"></a>
### Teams that sit together ship faster.

**~ It depends · Grade C** (The speed evidence is two single-company field studies from around 2000 without random assignment. A newer natural experiment shows a trade-off.)

**What the research says.** Teasley and colleagues (2002) studied software teams that worked together in dedicated team rooms at a large company. They report higher productivity and shorter schedules than baseline projects. Herbsleb and Mockus (2003) analysed work items (modification requests) at one large company. Items spread over several sites took about two and a half times as long as similar items done at one site. Natural experiments at a Fortune 500 firm (Emanuel, Harrington and Pallais) found that engineers sitting near teammates got more code feedback, mainly the less experienced, while experienced engineers wrote less code.

**Limits.** Each study covers one company, and none assigned seating at random. The older studies use tools from around 2000. The newer study measures feedback and code written, not delivery dates. None tests remote tooling or open-plan seating directly.

> **Say this to your boss:** Field studies by Teasley and by Herbsleb and Mockus found same-site work finished faster; in one, multi-site items took about 2.5 times as long. A newer study found juniors got more feedback near teammates while experienced engineers wrote less code. So it depends on who sits together and what we count.

**What would change my mind.** A randomized or well-matched comparison of co-located and distributed software teams, with current tools and measured delivery dates, showing a consistent gain or no gain.

**Sources** (checked 2026-10-01):

1. S. Teasley, L. Covi, M. S. Krishnan, J. S. Olson (2002). Rapid software development through team collocation. IEEE Transactions on Software Engineering 28(7). [link](https://doi.org/10.1109/TSE.2002.1019481) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. James D. Herbsleb, Audris Mockus (2003). An empirical study of speed and communication in globally distributed software development. IEEE Transactions on Software Engineering 29(6). [link](https://doi.org/10.1109/TSE.2003.1205177) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (primary)
3. Natalia Emanuel, Emma Harrington, Amanda Pallais (2026). The Power of Proximity to Coworkers. The Quarterly Journal of Economics 141(3). [link](https://doi.org/10.1093/qje/qjag027) <sub>✓✓ metadata and quoted numbers checked against the abstract</sub> (context)

---

Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.
