# 4. Meetings, interruptions, offices

The folklore about focus time and open-plan offices, checked.

[← Back to the index](../README.md) · [中文](04-meetings.zh-CN.md)

Key: ✓ supported · ~ it depends · ✗ not supported · ? unknown. After a source, ✓✓ means metadata was compared and registered quote snippets were matched in the abstract, ✓ means metadata was checked, ↗ means it cannot be machine-checked (link only).

---

<a id="meetings-23-minutes"></a>
### It takes 23 minutes to recover from every interruption.

**✗ Not supported · Grade B** (Three designs (field observation, a lab experiment, programmer logs) fit together, and none measured a fixed 23-minute recovery, but each is small or indirect.)

**What the research says.** The figure traces to Gloria Mark's field observation of 24 information workers (2005). Interrupted work was resumed after roughly 23 to 25 minutes on average, and people did about two other things first. That is time until return, not time to refocus. In a 2008 lab experiment with 48 participants, interrupted work was finished faster with no loss of quality, but with more stress, frustration and effort. A log study of 86 programmers found only 10% of sessions resumed coding within 1 minute of an interruption. Resuming is often slow, but none of these studies supports a fixed 23-minute cost.

**Limits.** The field study had 24 information workers, not only developers. The lab study used a short email task with 48 participants. The log study measured when editing resumed, not how well people worked. None of them measured developers' recovery time directly, and sources quote the field average as both 23 and 25 minutes.

> **Say this to your boss:** The 23 minutes is how long people took on average to get back to interrupted work in one observation study, not how long they needed to refocus. Interruptions do cost something, so let's batch non-urgent pings instead of quoting a number.

**What would change my mind.** A study that times how long developers take to get back to full speed after an interruption, using task time or error rates, and finds a stable figure near 23 minutes.

**Sources** (checked 2026-10-01):

1. Gloria Mark, Victor M. Gonzalez, Justin Harris (2005). No task left behind? Examining the nature of fragmented work. CHI 2005. [link](https://doi.org/10.1145/1054972.1055017) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Gloria Mark, Daniela Gudith, Ulrich Klocke (2008). The cost of interrupted work: more speed and stress. CHI 2008. [link](https://doi.org/10.1145/1357054.1357072) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
3. Chris Parnin, Spencer Rugaber (2011). Resumption strategies for interrupted programming tasks. Software Quality Journal 19(1). [link](https://doi.org/10.1007/s11219-010-9104-9) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="meetings-back-to-back"></a>
### Back-to-back meetings are harmless.

**? Unknown · Grade C** (The only direct test cited is a 14-person study run by the vendor and not peer reviewed; nothing here measures developers' output or errors.)

**What the research says.** Microsoft's Human Factors Lab (2021) put 14 people in EEG caps for two sessions of four half-hour video meetings, one back-to-back and one with 10-minute breaks. Without breaks, beta-wave activity, a stress marker, rose across the meetings and spiked in the transitions between calls. With breaks it dropped back. A frontal alpha asymmetry measure of engagement was positive with breaks and negative without. These are brain-signal proxies in a short lab task, not measures of work output.

**Limits.** The vendor ran the study and published it as a company article, not a peer-reviewed paper. With 14 participants it cannot show how large any effect is. The break condition included Headspace meditation, so breaks and meditation are mixed together. Participants were US-based remote information workers, not developers specifically.

> **Say this to your boss:** The direct evidence is thin: a small Microsoft test (14 people) saw stress signals build across back-to-back video calls and reset with 10-minute breaks. Could we default to 25 or 50 minute meetings so there is a gap? It costs little to try.

**What would change my mind.** A larger peer-reviewed experiment with developers that measures stress, errors or output after consecutive meetings, with and without breaks.

**Sources** (checked 2026-10-01):

1. Microsoft Human Factors Lab (2021). Research Proves Your Brain Needs Breaks. Microsoft WorkLab. [link](https://www.microsoft.com/en-us/worklab/work-trend-index/brain-research) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)

---

<a id="meetings-daily-standups"></a>
### Daily stand-ups improve team coordination.

**~ It depends · Grade C** (Interviews, observations and surveys of perceptions, plus one small intervention study on student teams; none compares coordination outcomes with and without stand-ups.)

**What the research says.** In Stray and colleagues' studies, developers valued stand-ups for sharing information and solving problems together, and reacted badly when they became status reports to a manager. A 2017 survey of 221 developers found attitudes slightly more positive than negative, with seniors and larger teams less positive. After 102 observed stand-ups and interviews with 60 members of 15 teams (2020), many reported negative experiences. A 2025 intervention with student teams (58 vs 50) linked stand-ups to higher psychological safety, and through it to satisfaction and perceived team performance.

**Limits.** Every outcome is a perception, and survey respondents chose to take part. The intervention used student teams, not professional software teams. No study cited here compares delivery speed, blocked work or rework between teams with and without stand-ups, so the coordination claim itself is untested.

> **Say this to your boss:** Stand-ups help when they are for sharing information and unblocking each other, and hurt when they turn into status reports to a manager. Can we ask the team which one ours is, and trim it if it is the second?

**What would change my mind.** A comparison of professional teams with and without stand-ups that measures coordination outcomes, such as blocked work or rework, and finds a clear difference.

**Sources** (checked 2026-10-01):

1. Viktoria Stray, Dag I. K. Sjøberg, Tore Dybå (2016). The daily stand-up meeting: A grounded theory study. Journal of Systems and Software 114. [link](https://doi.org/10.1016/j.jss.2016.01.004) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
2. Viktoria Stray, Nils Brede Moe, Gunnar R. Bergersen (2017). Are daily stand-up meetings valuable? A survey of developers in software teams. XP 2017, Lecture Notes in Business Information Processing 283. [link](https://doi.org/10.1007/978-3-319-57633-6_20) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
3. Viktoria Stray, Nils Brede Moe, Dag I. K. Sjøberg (2018). Daily stand-up meetings: Start breaking the rules. IEEE Software 37(3), 2020. [link](https://arxiv.org/abs/1808.07650) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
4. Sarah Rietze, Hannes Zacher (2025). Relations between daily stand-up meetings, work satisfaction, and team performance perceptions: the role of psychological safety. European Journal of Work and Organizational Psychology 34(5). [link](https://doi.org/10.1080/1359432X.2025.2508178) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)

---

<a id="meetings-focus-blocks"></a>
### Developers need long uninterrupted blocks to be productive.

**~ It depends · Grade C** (Large self-report surveys agree and one small randomized trial points the same way, but productivity is self-rated and none of the cited studies ties block length to measured output.)

**What the research says.** Meyer et al. (2014) surveyed 379 professional developers and observed 11: a productive day meant finishing many or big tasks without significant interruptions or context switches, yet the observed developers switched tasks often and still felt productive. In 5971 responses from Microsoft developers (Meyer et al. 2019), meetings and interruptions were unproductive only during development phases and constructive during planning, specification and release. A log study of 86 programmers found only 10% of sessions resumed coding within a minute of an interruption (Parnin and Rugaber 2011). In a randomized trial of 89 developers (Das Swain et al. 2023), two protected hours a day raised self-rated performance and focus, but not measured coding time.

**Limits.** Productivity here is self-rated, and the trial's performance and focus effects were significant only at the 10% level. None of these studies tests how long a block must be, so the half-day idea comes from essays such as Paul Graham's maker's schedule. A 2008 lab experiment found interrupted work was finished faster, at the cost of more stress.

> **Say this to your boss:** Developers say their best days have few interruptions, and a small trial of protected focus time raised self-rated performance. Nobody has shown how long a block must be, so let's protect a couple of hours a day and measure whether it helps.

**What would change my mind.** A trial that varies block length and measures output or defects, such as merged changes or cycle time, and shows no loss with fragmented days.

**Sources** (checked 2026-10-01):

1. André N. Meyer, Thomas Fritz, Gail C. Murphy, Thomas Zimmermann (2014). Software developers' perceptions of productivity. FSE 2014. [link](https://doi.org/10.1145/2635868.2635892) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. André N. Meyer, Earl T. Barr, Christian Bird, Thomas Zimmermann (2019). Today was a good day: The daily life of software developers. IEEE Transactions on Software Engineering. [link](https://www.microsoft.com/en-us/research/publication/today-was-a-good-day-the-daily-life-of-software-developers/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
3. Chris Parnin, Spencer Rugaber (2011). Resumption strategies for interrupted programming tasks. Software Quality Journal 19(1). [link](https://doi.org/10.1007/s11219-010-9104-9) <sub>✓ metadata checked (title, authors, year)</sub> (primary)
4. Vedant Das Swain, Javier Hernandez, Brian Houck, et al. (2023). Focused Time Saves Nine: Evaluating Computer-Assisted Protected Time for Hybrid Information Work. CHI 2023. [link](https://doi.org/10.1145/3544548.3581326) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
5. Gloria Mark, Daniela Gudith, Ulrich Klocke (2008). The cost of interrupted work: more speed and stress. CHI 2008. [link](https://doi.org/10.1145/1357054.1357072) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

<a id="meetings-no-meeting-days"></a>
### Meeting-free days raise productivity.

**? Unknown · Grade C** (Self-reported survey data plus one small randomized trial of a related intervention; none of the cited studies measures output on meeting-free days.)

**What the research says.** The best-known figure is from a survey of 76 companies (Laker et al. 2022): productivity was reported 71% higher when meetings were cut by 40%. Those are perceptions, with no control group. The strongest controlled test is a randomized trial of 89 engineering and development workers at a large tech company (Das Swain et al. 2023). Two protected, notification-free hours a day raised self-rated performance, focus and job resources, but not measured coding time. A Microsoft report on No Meeting Fridays (435 employees) found 77% said it gave more focus time, and some said meetings piled onto other days.

**Limits.** The 76-company survey is cross-sectional and self-reported. The trial tested daily protected blocks, not whole days, ran three weeks at one company, and some effects were significant only at the 10% level. Moving meetings to other days can overload them. None of the studies measured delivery speed or defects.

> **Say this to your boss:** The 71% figure is self-reported survey data, not measured output. I am happy to try a meeting-free day for six weeks and track cycle time and focus hours, so we have our own numbers.

**What would change my mind.** A randomized or staggered rollout of meeting-free days that measures output or delivery time, not self-ratings, and finds a gain in software teams.

**Sources** (checked 2026-10-01):

1. Benjamin Laker, Vijay Pereira, Pawan Budhwar, Ashish Malik (2022). The Surprising Impact of Meeting-Free Days. MIT Sloan Management Review 63(2). [link](https://sloanreview.mit.edu/article/the-surprising-impact-of-meeting-free-days/) <sub>↗ not machine-checkable (book or report); link only</sub> (primary)
2. Vedant Das Swain, Javier Hernandez, Brian Houck, et al. (2023). Focused Time Saves Nine: Evaluating Computer-Assisted Protected Time for Hybrid Information Work. CHI 2023. [link](https://doi.org/10.1145/3544548.3581326) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
3. Jaime Teevan, Nancy Baym, Jenna Butler, et al. (eds.) (2022). Microsoft New Future of Work Report 2022. Microsoft Research Tech Report MSR-TR-2022-3. [link](https://www.microsoft.com/en-us/research/wp-content/uploads/2022/04/Microsoft-New-Future-Of-Work-Report-2022.pdf) <sub>↗ not machine-checkable (book or report); link only</sub> (context)

---

<a id="meetings-open-plan-collaboration"></a>
### Open-plan offices increase collaboration.

**✗ Not supported · Grade B** (One natural experiment at two firms, backed by large survey data and a systematic review, but it has no control group and is not specific to software teams.)

**What the research says.** Bernstein and Turban tracked staff with sociometric badges and message logs before and after two corporate headquarters moved to open plan (52 people at one firm, 100 at the other). Face-to-face interaction fell by about 70% in both, and electronic interaction rose. In a building occupant survey database (Kim and de Dear 2013, 28,630 responses from open-plan layouts), easier interaction was worth less than the noise and privacy lost. A 2023 systematic review of 46 empirical studies (Gerlitz and Hülsbeck) concluded that open plan tends to lower performance.

**Limits.** The badge studies had no control group, short measurement windows and staff in departments such as sales, HR and finance, not software teams. They counted interactions, not the quality of collaboration or output. Design matters: a 2020 field experiment at a technology company rated zoned open plan and team offices above plain open plan.

> **Say this to your boss:** A before-and-after study of two companies found face-to-face talk fell about 70% after they went open plan, while electronic messages rose. I would not justify an open floor by promising more collaboration.

**What would change my mind.** A controlled or well-matched before-and-after study of software teams that shows more face-to-face collaboration and better delivery after a move to open plan.

**Sources** (checked 2026-10-01):

1. Ethan S. Bernstein, Stephen Turban (2018). The impact of the ‘open’ workspace on human collaboration. Philosophical Transactions of the Royal Society B 373. [link](https://doi.org/10.1098/rstb.2017.0239) <sub>✓✓ metadata compared and registered quote snippets matched in the abstract</sub> (primary)
2. Jungsoo Kim, Richard de Dear (2013). Workspace satisfaction: The privacy-communication trade-off in open-plan offices. Journal of Environmental Psychology 36. [link](https://researchers.mq.edu.au/en/publications/workspace-satisfaction-the-privacy-communication-trade-off-inopen/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)
3. Andrea Gerlitz, Marcel Hülsbeck (2023). The productivity tax of new office concepts: a comparative review of open-plan offices, activity-based working, and single-office concepts. Management Review Quarterly. [link](https://pmc.ncbi.nlm.nih.gov/articles/PMC9815683/) <sub>↗ not machine-checkable (book or report); link only</sub> (context)
4. Jegar Pitchforth, Elizabeth Nelson-White, Marc van den Helder, Wouter Oosting (2020). The work environment pilot: An experiment to determine the optimal office design for a technology company. PLOS ONE 15(5). [link](https://doi.org/10.1371/journal.pone.0232943) <sub>✓ metadata checked (title, authors, year)</sub> (context)

---

Content is CC BY 4.0. Reuse it, keep the attribution and link back to this repository.
