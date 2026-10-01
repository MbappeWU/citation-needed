# Contributing to Citation Needed

Every claim lives in one file, `data/claims/<id>.json`. Sources live in `data/sources/*.json`. Everything else (READMEs, chapters, the web reader) is generated from those two folders.

```bash
node scripts/validate.mjs   # offline checks: schema, lengths, both languages, sources used
node scripts/build.mjs      # regenerate README, chapters, the reader and the skill index
```

CI also runs `node scripts/verify-sources.mjs` on every pull request and once a week. It looks up each source online and fails if the title, year or a quoted number does not match.

## What belongs here

A **claim** is something people say in an argument at work: "working longer hours gets more done", "AI tools make us faster", "remote teams collaborate worse". We grade what the research says about it, in a way you can show to a boss.

- Software teams and the people who manage them. Not personal health, not law, not finance.
- Phrase the claim the way people say it, in the direction people argue it.
- No claim without a primary source. See the source rules below.

## The fields

| Field | What goes in it |
|---|---|
| `claim` | The sentence people say. English and Chinese. |
| `verdict` | `supported`, `mixed` (it depends), `unsupported`, `unknown` (not enough evidence either way). The verdict is about the claim as phrased. |
| `grade` | `A`, `B`, `C`: how strong the evidence is for the verdict. See below. |
| `grade_why` | One sentence: why this grade. |
| `evidence` | What the studies found, with the real numbers, sample sizes and setting. |
| `caveats` | Limits of the evidence. What would stop you from generalizing. |
| `boss_line` | One or two sentences you could actually say to your manager. Calm, specific, no attack. |
| `change_my_mind` | What new evidence would change the verdict. |
| `sources` | Source ids from `data/sources/*.json`, each with a `role` (`primary`, `replication`, `critique`, `context`) and optional `quotes`. |
| `verified_on` | The date a human last checked the sources. |

All text fields exist in `en` and `zh`. The Chinese is written for Chinese readers, not transliterated: translate the meaning, keep numbers and study names exact.

## The grades

The grade is about the **strength of the evidence behind the verdict**, not about whether the claim feels true.

- **A: strong.** At least two independent strong studies agree (randomized trials, preregistered or replicated studies, or a meta-analysis of controlled studies), or one large well-run randomized trial in a population like ours.
- **B: moderate.** One good experiment or natural experiment with limits, or consistent large observational evidence, or a meta-analysis of observational studies, or a careful reanalysis of historical data.
- **C: weak.** Expert opinion, case studies, simulations, vendor reports, small or single studies, or a measurement critique. We say so plainly. A C is still useful: it tells your boss the argument is not settled.

Do not grade up because a study is famous. Do not grade down because the answer is inconvenient.

## Source rules

1. **Primary sources only**: journals, preprints, official reports, books by the researchers. Blog posts, news articles, Zhihu and WeChat posts are not sources. You can mention them in an issue, but a claim needs the original.
2. Every source needs `title`, `authors`, `year`, `kind`, and one of `doi`, `arxiv`, `pmid` (or `url` with `verify: "manual"` for books and reports).
3. `verify` says how far CI can check it:
   - `abstract`: CI fetches the abstract and checks every string in `quotes`. Use this whenever the abstract contains the number you cite.
   - `metadata`: CI checks title, authors and year only.
   - `manual`: books and reports. CI only checks that the link loads.
4. `quotes` are short strings that must appear in the abstract, usually the key number (`"19%"`, `"1.35"`). Never put a number in `evidence` that you cannot trace to a source.
5. If a study has been challenged or failed to replicate, cite the critique too (`role: "critique"` or `"replication"`).

## Style

- Plain, short sentences. Say what the study did, who it studied and what it found. Numbers beat adjectives.
- No hype, no jokes at the expense of people. Hard on the argument, never on the person.
- Do not generalize beyond the setting: a call-centre experiment is a call-centre experiment.
- Do not use em dashes. Do not write "studies show" without naming the study.

## Challenge a claim

Found better evidence, a mistake, or a study we missed? Open an issue with the **Challenge** template. Grades go up and down in public, with credit to whoever supplied the evidence.

## License

Code is MIT. Claims and text are CC BY 4.0: reuse them, keep the attribution and link back.
