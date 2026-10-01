<div align="center">

<img src="assets/banner.svg" alt="Citation Needed" width="100%">

**English** · [简体中文](README.zh-CN.md)

[![Sources verified](https://github.com/MbappeWU/citation-needed/actions/workflows/verify-sources.yml/badge.svg)](https://github.com/MbappeWU/citation-needed/actions/workflows/verify-sources.yml) [![License: CC BY 4.0 + MIT](https://img.shields.io/badge/license-CC%20BY%204.0%20%2B%20MIT-24292f?style=flat-square)](#license)

</div>

**Every argument about how software teams work, with the receipts.**

Does overtime get more done? Do AI coding tools really make teams faster? Is remote work less productive? Why does output per person fall when a team doubles? This repo checks the research behind those arguments: **3 claims, each with a verdict, an A/B/C evidence grade, primary sources, and one sentence you can say to your boss.**

0 hold up, 1 depend on context, 1 do not hold up, 1 have no good evidence either way. Evidence grades: 1 A, 1 B, 1 C.

## Use it

- **Web reader**: search, filter, tick a few claims and print a one-page brief for your boss: https://mbappewu.github.io/citation-needed/
- **Offline**: single-file HTML and PDFs on the [Releases](https://github.com/MbappeWU/citation-needed/releases/latest)
- **Ask your AI assistant**: `npx skills add MbappeWU/citation-needed` (Claude Code, Codex, Cursor and others; answers come with the grade and the source)

## Contents

### [Working hours and health](chapters/03-hours.md)

Overtime, output per hour, and the health bill.

| Claim | Verdict | Grade |
|---|---|---|
| [A four-day week means less gets done.](chapters/03-hours.md#hours-four-day-week) | ? Unknown | C |
| [Long hours are just a lifestyle choice with no real health cost.](chapters/03-hours.md#hours-health-cost) | ✗ Not supported | A |
| [Working longer hours gets more done.](chapters/03-hours.md#hours-more-output) | ~ It depends | B |

## How grading works

The grade measures **how strong the evidence is behind the verdict**, not whether the claim feels true.

- **A, strong.** At least two independent strong studies agree (randomized trials, preregistered or replicated studies, or a meta-analysis of controlled studies), or one large well-run randomized trial in a population like ours.
- **B, moderate.** One good experiment or natural experiment with limits, consistent large observational evidence, a meta-analysis of observational studies, or a careful reanalysis of historical data.
- **C, weak.** Expert opinion, case studies, simulations, vendor reports, small or single studies, or a measurement critique. We say so plainly. A C is still useful: it tells your boss the argument is not settled.

## How sources are checked

There are 3 sources. Each one is looked up online by CI: **2** have their title, authors, year and every quoted number checked against the abstract; **1** have their metadata checked; **0** are books or reports where only the link can be checked. The check runs weekly and on every pull request, and fails when something does not match.

No number is written from memory: every figure in the text traces to a source. CI can only read abstracts, so finer details in the full text still need a human who has read the paper, which is why each claim carries the date it was last checked. If you find a mistake, open an issue.

## Challenge a claim

Better evidence, a mistake, or a study we missed? Open a [Challenge issue](https://github.com/MbappeWU/citation-needed/issues/new?template=challenge.yml). Grades go up and down in public, with credit to whoever supplied the evidence. To add a claim, use [Propose](https://github.com/MbappeWU/citation-needed/issues/new?template=propose.yml). The rules are in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Text and data are [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): reuse and adapt them, keep the attribution and link back. Scripts are MIT.
