# FinTech Engineering Roadmap
## Building the Systems That Move, Record and Police Money

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no particular background in finance. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis rather than a fixed course order.

**What the job actually is.** A fintech engineer is a software engineer whose code moves, records, prices or polices money: payment flows, ledgers, lending and deposit products, trading systems, fraud and compliance systems, and increasingly tokenized assets. It is not finance with some programming added, and it is not generic backend work with a bank's logo on it. The difference is that the domain has rules the code must embody exactly (double entry, settlement finality, regulatory duties), partners whose systems you do not control, and errors that are measured in other people's money and reported to a regulator.

**The ledger is the discipline; everything else is a rail into it or a report out of it.** That claim shapes this entire roadmap. Payments, trading, lending and custody all end in the same question: does the money add up, and can you prove it? So the ledger, transactions and payment systems sit in the spine at Phase 2, before any specialization starts; reconciliation and operational resilience arrive before the domain depth; and the capstone is not finished until it produces a reconciliation report. An engineer who can show that a system's books balance under retries, timeouts and partner errors is worth several who can ship a slick payment screen.

**Its own path, not a track of another.** The software foundation is genuinely shared: Python, SQL, backend services, testing and distributed systems carry the same ids as in the Applied AI graph, and cryptography and key management are the same courses as in AI Security. Measured by course ids, this graph shares 12 of its 61 courses with Applied AI (0.20 of this graph, 0.30 of that one) and 7 with AI Security. Everything from the ledger onwards (payment rails, settlement, reconciliation, financial regulation, market structure, credit and fraud models, custody) appears in no other roadmap on this site.

**Honest counterpoint, read this before committing.** "FinTech engineer" is a broad label, and the strongest demand signal for it is an employer survey rather than observed hiring (see below). Financial technology is also cyclical: startup funding and hiring rise and fall with interest rates and with whatever the last failure was, and the digital-assets specialization in particular has swung harder than anything else here. Regulation differs by country, so this roadmap teaches the patterns that travel (BIS and FATF standards, ISO 20022, card scheme mechanics, double entry) with examples from the EU, the US, Brazil and Chile, and expects you to learn your own market's rulebook on the job. Finally, part of what fintech engineers build is the automation of finance's own clerical work, which is exactly the work the same surveys expect to shrink.

**How the plan is paced.** Eight phases, Phase 0 to Phase 7. Each phase is a quarter, about three months of consistent part-time study, so one specialization followed end to end is eight phases, about two years. A specialization is the spine plus that specialization's branch courses, and every specialization takes 2 to 5 courses in every phase, so no quarter is idle and none is overloaded. Electives (English working fluency and Post-quantum cryptography) run alongside and do not count toward that load.

**Four specializations.** Pick one as your plan and borrow single courses from a second rather than spreading across all of them:
- **Payments & banking platforms**: the broad one and the largest employer base. Card processing, ISO 20022, instant rails, open banking, reconciliation, core banking and embedded finance. Its second language is Java or Kotlin, because that is what most bank and processor systems run on.
- **Trading & market systems**: market structure, market data and FIX, pricing, backtesting, execution and market risk, with C++ and low-latency work for those heading to trading firms. The most mathematical specialization and the one closest to quantitative finance.
- **Risk, fraud & compliance**: credit models, fraud detection, KYC and AML, model risk management and regulatory reporting. Machine learning arrives early here, and the regulator is a permanent stakeholder in every design.
- **Digital assets & tokenization**: blockchains, smart contracts, custody, stablecoins and on-chain compliance. The newest, least settled and highest-variance specialization, and the one where a security mistake is an immediate, public loss.

For a backend engineer moving laterally, **Payments & banking platforms** is the shortest hop and the widest market. The most durable borrow is from **Risk, fraud & compliance** (KYC, AML & transaction monitoring in particular): money movement and the controls around it are hired together, and engineers who understand both are rarer than either.

**Where the demand evidence points.** Every figure here comes from the sources registered in the roadmap standards (`market-sources.md`, checked on 2026-09-26, with the BLS finance rows read on 2026-10-25) and carries its date, horizon and geography. Job titles are translated into the courses in this graph that serve them.

*Medium term (2 to 5 years):*
- **Ledgers & double-entry design, Payment systems & money movement, Card payments & processing, Instant payments & real-time rails, Financial regulation & compliance** (the spine and Payments): the [WEF Future of Jobs Report 2025](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf) (Jan 2025, survey of 1,000+ employers in 55 economies, horizon 2030) ranks FinTech Engineers as the second fastest-growing job in net percentage terms, after Big Data Specialists. These are employer expectations, not observed hiring, and the title is broad: this roadmap reads it as the courses above.
- **APIs & backend services, Distributed systems, Financial systems architecture** (the spine): [BLS](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) (2025 to 2035, released Aug 2026, US) projects software developers to grow 10.2% against 3.5% for all occupations, while computer programmers decline 7%; the growth is in people who design systems, not in people who only write code to a specification.
- **Security fundamentals & threat modeling, Applied cryptography, Key management & HSM/KMS, PCI DSS & payment data security**: the same WEF report puts networks and cybersecurity among the three fastest-growing skills, and [BLS](https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm) projects information security analysts to grow 21% over 2025 to 2035 (US), citing AI and e-commerce among the drivers.
- **Credit risk & scoring models, Fraud detection systems, Model risk management & explainability, Market risk & portfolio analytics** (Risk and Markets): [BLS](https://www.bls.gov/ooh/math/data-scientists.htm) projects data scientists to grow 34.6% over 2025 to 2035 (US), the third fastest-growing occupation. Closer to finance, [BLS](https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm) projects financial analysts and financial risk specialists each to grow about 7% over the same decade, twice the all-occupation average but a smaller base; the engineering layer under those roles is what this track builds.
- **Geography:** in the EU, [Cedefop](https://www.cedefop.europa.eu/en/news/cedefop-updates-skills-forecast-new-data-guide-europes-skills-and-labour-market-policy-2035) (Jul 2026, horizon 2035) projects ICT professionals and technicians to grow about 2.5% a year, ranging from 1.3% in Germany to 7.8% in Romania. In Germany, [Bitkom](https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert) (Sep 2026) counts 79,000 unfilled IT positions, with software development and architecture the second most sought profile and IT security the fifth. For Chile there is no official occupation-level projection for fintech; [ILIA 2025](https://www.cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence-though) (CENIA and ECLAC) places Chile first in the region on its human-talent subdimension, and the [ILO Panorama Laboral 2025](https://www.ilo.org/sites/default/files/2025-12/OIT-Informe-PANORAMA-LABORAL-2025.pdf) describes a formal labour market with unemployment (8.8% in the first half of 2025) above the regional average. Chile's Fintech Law (21.521, 2023) and its open finance system, whose start the CMF moved to July 2027, are regulatory context for local work, not a demand figure.

*Counter-signals:* the same WEF ranking lists bank tellers and accounting and payroll clerks among the fastest-declining jobs, so the sector's clerical layer is shrinking while its engineering layer grows, and some fintech work is precisely that automation. The entry level is narrowing across software in general: a [WEF and PwC paper](https://reports.weforum.org/docs/WEF_Artificial_Intelligence_and_the_Future_of_Entry_Level_Work_2026.pdf) (Jun 2026) cites a 16% decline in entry-level jobs in AI-exposed US fields since late 2022, while noting that the decline began before ChatGPT and that AI's role in it is contested. No source registered for this site measures digital-asset hiring, so the Digital assets specialization carries no demand figure here at all; treat it as the speculative bet it is.

*Long term (5 to 15 years):* scenario territory; no quantitative forecast reaches past 2035. McKinsey's [Agents, Robots, and Us](https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/agents%20robots%20and%20us%20skill%20partnerships%20in%20the%20age%20of%20ai/agents-robots-and-us-skill-partnerships-in-the-age-of-ai.pdf) (Nov 2025, US) finds that more than 70% of the skills employers seek are used in both automatable and non-automatable work, with demand rising for complementary skills such as quality assurance and process optimization. In the most accelerated of the WEF's [Four Futures](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026), new roles scale around people who orchestrate AI agents; in finance those agents still have to post to a ledger, pass a control and leave an audit trail. Both point the way this roadmap is built: tools and rails change, while accounting correctness, regulatory judgement and accountability for a system that holds money remain.

**Three priority levels** run throughout:
- `critical`: the non-negotiable spine for your chosen track.
- `desirable`: high-ROI competitive edge, but not blocking.
- `frontier`: long-horizon bets that are exciting and unproven.

**Resource tags:**
- **Best match**: the first resource for every node, and the same one the curriculum graph lists first. Start there.
- Coursera: available on Coursera, usually free to audit or included in Coursera Plus
- (free): free
- (paid): paid; check the current price before buying

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Tracks`, `Resources`, a `Study approach` and a `Project`. The project is the proof of competence. In this field a working ledger with a published reconciliation report, or a fraud model with an honest evaluation, outranks most certificates, because it shows you can make money add up under failure.

**Regulatory facts are dated.** Where a node names a regulation, deadline or standard version, it was checked on 2026-10-25 and is listed under *Sources & Notes*. Regulation in this field moves every year; re-check before relying on one.

---

## PHASE 0: Foundations

### Python `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** APIs & backend services, Testing & code quality, Machine learning, Financial time series, Financial data engineering
**Tracks:** All specializations
**Resources:**
- **Best match:** Coursera: Python for Everybody, UMich
- Book: Python for Finance, Hilpisch, 2nd ed. (paid), why: Python taught through financial data rather than toy examples
- pandas user guide (free)
**Study approach:** Python is the language finance uses to look at itself: risk models, reconciliations, data pipelines, test harnesses and the scripts operations teams run at the end of every month. Go past scripting into type hints, packaging, virtual environments and pandas, because most of the analysis work in this roadmap happens in a DataFrame. Learn early that `float` is not a money type: `0.1 + 0.2` is the first bug every fintech engineer meets, and `decimal.Decimal` or integer minor units are the habit to build from the first line.
**Project:** Write a small typed package that loads a year of your own bank or card transactions from CSV, categorises them with explicit rules, and produces a monthly summary whose totals match the statements to the cent. Use integer cents or `Decimal` throughout and include a test that fails if anyone introduces a float.

### SQL & data access `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Ledgers & double-entry design, Transactions & data consistency, Financial data engineering
**Tracks:** All specializations
**Resources:**
- **Best match:** ThoughtSpot SQL tutorial, formerly Mode (free)
- Use The Index, Luke (free), why: indexing is where reporting queries over transaction tables get slow
- PostgreSQL docs (free)
**Study approach:** Every balance, statement, report and audit request in a financial company ends up as a SQL question, and the answer has to be exact. Learn joins, aggregation, window functions (running balances are the canonical example), transactions and how to read a query plan. Pay attention to indexing on large append-only tables, because transaction tables only ever grow and reporting queries over them are where systems get slow first.
**Project:** Load a public transactions dataset of at least a million rows into PostgreSQL. Compute running balances per account with a window function, find accounts whose balance ever went negative, and make the slowest query ten times faster. Explain the plan before and after.

### Git & version control `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Testing & code quality, Docker & CI/CD
**Tracks:** All specializations
**Resources:**
- **Best match:** git-scm.com Pro Git book (free)
- GitHub Skills (free)
**Study approach:** Branches, rebase versus merge, pull requests and review. Nothing exotic, but regulated firms treat the change history as evidence: auditors ask who changed what, who reviewed it and when it reached production. Write commits that a stranger could audit a year later, and get used to the idea that the review is part of the control, not a courtesy.
**Project:** Take an existing script, put it under version control with a meaningful history, protect the main branch so changes need a reviewed pull request, and write a one-page note describing how a change travels from commit to production, as you would for an auditor.

### Linux & CLI `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD
**Tracks:** All specializations
**Resources:**
- **Best match:** MIT Missing Semester (free), why: the fastest route from tourist to fluent
- Linux Journey (free)
**Study approach:** Enough shell to run, inspect and debug a service: processes, ports, environment variables, logs, cron and SSH. This is not systems administration. The goal is that a stuck batch job, a full disk or a certificate that expired overnight never blocks you, because in finance those are the incidents that happen at 2 a.m. on the last day of the month.
**Project:** Deploy a small web service to a cheap VPS by hand, with systemd keeping it alive, logs you can search, and a nightly cron job that writes a file and alerts you if it did not run. Write down every command that worked.

### Probability & statistics `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Financial markets & instruments, Machine learning, Financial time series, Derivatives pricing & numerical methods
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Think Stats (free)
- Harvard Stat 110, Blitzstein (free lectures), why: the conditioning intuition that pricing and fraud models both lean on
- StatQuest (free)
**Study approach:** Finance is priced, hedged and risk-managed in probabilities, and the same literacy decides whether a fraud model is any good. Learn distributions (including fat-tailed ones), expectation and variance, conditional probability and Bayes, sampling, confidence intervals and hypothesis tests. The point is judgement: knowing that a fraud rate of 0.1% makes accuracy meaningless, or that a backtest on three years of data cannot tell you much about a crash.
**Project:** Take a year of daily returns for any liquid asset, compare their distribution with a normal one, and write a short report on what the tails imply for a naive risk estimate. Then take a labelled fraud dataset and show, with numbers, why accuracy is the wrong metric for it.

### English working fluency `desirable`
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Any structured B2 to C1 program
- Practice: read one rulebook or regulatory technical standard section a week (free)
**Study approach:** A continuous lane rather than a phase. Card scheme rules, ISO 20022 usage guides, BIS and FATF publications, regulators' technical standards and most engineering write-ups from the large fintechs are English-first. Reading is the low bar; the return comes from writing, because design reviews, incident reports and the documents a regulator reads are where influence is exercised in this field.
**Project:** Publish three technical write-ups in English over twelve months, for example a ledger design, a reconciliation post-mortem and an explainer of one payment rail. The point is the output habit, not the audience.

---

## PHASE 1: Software & finance core

### Finance & accounting fundamentals `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Payment systems & money movement, Ledgers & double-entry design, Financial markets & instruments, Credit risk & scoring models
**Tracks:** All specializations
**Resources:**
- **Best match:** Martin Kleppmann, Accounting for Computer Scientists (free blog post), why: double entry explained as a graph by a systems engineer
- Coursera: Introduction to Financial Accounting, Wharton
- Book: Corporate Finance, Berk & DeMarzo (paid)
**Study approach:** Most engineers arrive in fintech without the vocabulary the rest of the company speaks, and it shows. Learn double-entry bookkeeping properly (debits, credits, the accounting equation, why every transaction touches at least two accounts), the balance sheet and income statement, accruals, the time value of money, simple and compound interest, and how a bank earns from the spread between what it pays and what it charges. Kleppmann's essay treats double entry as a graph of flows, which is the version that sticks for engineers; the Wharton course supplies the accountant's version so you can talk to one.
**Project:** Model a small business's first month (capital in, a loan, inventory bought on credit, sales, interest, a repayment) as journal entries by hand, then in code, and produce a balance sheet and income statement that tie out. Have someone with accounting training check it, and record every place your intuition was wrong.

### APIs & backend services `critical`
**Prerequisites:** Python
**Unlocks:** Transactions & data consistency, Security fundamentals & threat modeling, Distributed systems, Market data & FIX protocol
**Tracks:** All specializations
**Resources:**
- **Best match:** Stripe API reference and engineering blog post on idempotency (free), why: the most copied financial API design in the industry
- FastAPI docs (free)
- Book: Architecture Patterns with Python (free online)
**Study approach:** A financial API is a backend service with unusually strict promises. Learn HTTP APIs, authentication, webhooks, background jobs, queues and timeouts, then the parts finance adds: idempotency keys so a retried request never moves money twice, signed webhooks so a partner can trust a callback, explicit API versioning, and error models that distinguish declined from failed from unknown. Stripe's public API and its idempotency write-up are the reference most of the industry copies.
**Project:** Build a small payments-style API: create a payment, capture it, refund it. Every mutating call takes an idempotency key, webhooks are signed and retried with backoff, and a test proves that sending the same request ten times concurrently moves money exactly once.

### Testing & code quality `critical`
**Prerequisites:** Python, Git & version control
**Unlocks:** Smart contracts & on-chain security, Capstone: FinTech system
**Tracks:** All specializations
**Resources:**
- **Best match:** pytest docs (free)
- Hypothesis property-based testing docs (free), why: invariants such as every transaction balancing to zero are exactly what it checks
- Book: Architecture Patterns with Python, testing chapters (free online)
**Study approach:** The bugs that cost money are rarely the ones example-based tests catch: rounding that drifts by a cent per thousand transactions, two events processed in an unexpected order, a retry that double-posts. Learn unit and integration testing, fixtures and mocks, and then property-based testing, which lets you state invariants (every transaction balances to zero, a refund never exceeds its capture, balances never depend on processing order) and have the tool search for counterexamples.
**Project:** Write a property-based test suite for a currency-conversion and fee-calculation module that checks rounding invariants across random amounts and currencies. Find at least one real bug with it, in your own code or in a deliberately naive version, and write up the counterexample.

### Docker & CI/CD `critical`
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** Distributed systems
**Tracks:** All specializations
**Resources:**
- **Best match:** Docker getting started (free)
- GitHub Actions docs (free)
**Study approach:** Containers, Compose, pipelines and reproducible builds. Regulated delivery adds two things to the usual practice: segregation of duties (the person who writes a change is not the only one who can approve and deploy it) and an evidence trail of tests, approvals and artifacts. Learn to build that into the pipeline rather than into a spreadsheet, because the pipeline then becomes the control an auditor tests.
**Project:** Containerize the payments API from the backend course with its database, run its tests in CI on every pull request, and require an approval before a tagged release deploys. Export the pipeline's record of one release (commit, tests, approver, artifact digest) as the evidence pack an auditor would ask for.

### Java & the JVM `desirable`
**Prerequisites:** None, this is a starting node
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Dev.java learning path, Oracle (free)
- Book: Effective Java, Bloch, 3rd ed. (paid), why: still the best guide to Java that other people maintain
- Kotlin docs (free)
**Study approach:** Most bank cores, card processors, payment hubs and many trading systems run on the JVM, so for the payments track Java or Kotlin is the practical second language. Learn the type system, collections, concurrency and the memory model, garbage collection at a working level, and enough Spring Boot to read the service you will inherit. Effective Java is still the best guide to writing Java other people can maintain, which in a bank is most of the job.
**Project:** Re-implement the payments API from the backend course in Java or Kotlin with Spring Boot, including idempotency and signed webhooks, and load-test both versions. Write a short comparison of what was easier, what was harder, and how each behaved under load.

### C++ `desirable`
**Prerequisites:** None, this is a starting node
**Unlocks:** Low-latency systems
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** learncpp.com (free)
- Book: A Tour of C++, Stroustrup (paid)
- Compiler Explorer, godbolt.org (free), why: latency work starts with reading the assembly
**Study approach:** Exchange gateways, matching engines, market data handlers and most high-frequency trading code are written in C++, because latency there is measured in microseconds. Learn modern C++: value semantics, RAII, move semantics, templates, the standard containers and their memory layout, and how to read what the compiler emits. Many banks' trading and risk systems run on Java, C# and Python instead, so treat this as decisive for trading firms and useful elsewhere.
**Project:** Write a parser for a binary market data format (any published exchange specification will do) that processes a recorded file and rebuilds top-of-book. Measure throughput, then make it at least twice as fast and explain each change with the generated assembly or a profiler trace.

---

## PHASE 2: Money & ledgers

### Payment systems & money movement `critical`
**Prerequisites:** Finance & accounting fundamentals
**Unlocks:** Financial regulation & compliance, Card payments & processing, ISO 20022 & bank messaging
**Tracks:** All specializations
**Resources:**
- **Best match:** BIS CPMI, Principles for Financial Market Infrastructures and payments glossary (free), why: the regulators' own definitions of clearing, settlement and finality
- Book: Payments Systems in the U.S., Benson, Loftesness & Jones (paid)
- Bank of England, Money creation in the modern economy (free)
**Study approach:** This is the map the rest of the roadmap is drawn on. Learn the difference between central bank money and commercial bank money, between clearing and settlement, between gross real-time settlement and deferred net settlement, and what finality means legally. Then walk each family of rails: high-value RTGS systems, batch ACH-style systems, card schemes, correspondent banking for cross-border, and instant payment systems. The BIS CPMI material gives you the regulators' own definitions, which is the vocabulary every rulebook later assumes.
**Project:** Write a ten-page explainer tracing one payment through each of four rails (a card purchase, a domestic batch transfer, an instant transfer and a cross-border wire): who holds which balance at each step, when the money is final, and what can still go wrong. Draw the account movements as journal entries.

### Ledgers & double-entry design `critical`
**Prerequisites:** Finance & accounting fundamentals, SQL & data access
**Unlocks:** Event-driven systems & event sourcing, Reconciliation & settlement, Core banking & product engines, Capstone: FinTech system
**Tracks:** All specializations
**Resources:**
- **Best match:** Modern Treasury, Accounting for Developers series (free), why: written for engineers building exactly this
- TigerBeetle docs on debits, credits and two-phase transfers (free)
- Book: Analysis Patterns, Fowler, accounting chapters (paid)
**Study approach:** The single most important course in this roadmap. Learn to design a ledger that is append-only, where every transaction is a set of entries that sums to zero, accounts have a normal balance, and pending and posted balances are distinct. Represent money exactly, as integer minor units or decimals with an explicit currency, never as floats, and decide early how multiple currencies and FX are recorded. Modern Treasury's series and TigerBeetle's documentation show how engineers who built production ledgers think about it; Fowler's accounting patterns show the same ideas from the modelling side.
**Project:** Build a double-entry ledger service with accounts, balanced transactions, pending holds that later post or void, and multi-currency accounts. Prove with tests that no API sequence can create or destroy money, that balances can be recomputed from entries at any point in time, and that the ledger rejects any unbalanced transaction.

### Transactions & data consistency `critical`
**Prerequisites:** SQL & data access, APIs & backend services
**Unlocks:** Distributed systems
**Tracks:** All specializations
**Resources:**
- **Best match:** PostgreSQL docs, Transaction Isolation chapter (free)
- Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed., transactions chapter (paid), why: the clearest treatment of isolation anomalies in print
- Jepsen analyses (free)
**Study approach:** A double spend is usually a transaction-isolation bug before it is anything else. Learn ACID properly, then the isolation levels your database actually offers and the anomalies each permits (lost update, write skew, phantom reads), row locking versus optimistic concurrency, and how to make a write idempotent. Read a few Jepsen analyses to see how often real databases fail to provide what their documentation promises under failure.
**Project:** Write two concurrent clients that try to overdraw the same account through your ledger. Show the anomaly at a weak isolation level, fix it once with locking and once with optimistic concurrency, and benchmark the two fixes under contention.

### Security fundamentals & threat modeling `critical`
**Prerequisites:** APIs & backend services
**Unlocks:** Applied cryptography
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Threat Modeling, Shostack (paid), why: the standard text on the practice
- OWASP Top 10 and Cheat Sheet Series (free)
- OWASP Threat Dragon (free)
**Study approach:** Systems that move money are attacked because the payoff is immediate and convertible. Learn to identify assets, attackers and trust boundaries, to apply STRIDE to a data-flow diagram, and to recognise the OWASP Top 10 in your own code. In this field also model the insider and the partner: a compromised API key at a merchant, a support agent who can change a payout account, and a webhook that anyone can forge.
**Project:** Threat-model the payments API you built: draw the data flow, list the threats per boundary, rank them, and fix the top three. Include at least one insider threat and one partner-side threat, and record which risks you accepted and why.

### Financial markets & instruments `critical`
**Prerequisites:** Finance & accounting fundamentals, Probability & statistics
**Unlocks:** Market microstructure & trading, Derivatives pricing & numerical methods
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Coursera: Financial Markets, Yale, Robert Shiller
- Book: Options, Futures, and Other Derivatives, Hull (paid), why: the reference the industry trains on
- MIT OCW 15.401 Finance Theory I (free)
**Study approach:** The domain model every trading, pricing and risk system implements. Learn what equities, bonds, FX, money-market instruments, futures, options and swaps are, who issues and trades them, on which venues, and how each settles. Shiller's course gives the economics and history; Hull gives the mechanics of derivatives that the pricing course will later implement. Aim to read a term sheet and know what cash flows it implies.
**Project:** Build a small instrument library that represents a bond, a future, an option and an interest rate swap, generates each one's cash-flow schedule from a term sheet, and values the bond and swap from a given discount curve. Check your numbers against a published example.

### Machine learning `critical`
**Prerequisites:** Python, Probability & statistics
**Unlocks:** Credit risk & scoring models, Fraud detection systems
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Coursera: Machine Learning Specialization, Andrew Ng
- Book: Hands-On Machine Learning, Geron (paid)
- scikit-learn user guide on probability calibration (free), why: calibrated probabilities are what a credit decision consumes
**Study approach:** Credit and fraud models live in data that is imbalanced (fraud is rare), drifting (behaviour changes), delayed (a chargeback arrives weeks later) and adversarial (fraudsters adapt). Learn supervised learning, train, validation and out-of-time test splits, regularisation, gradient-boosted trees (still the workhorse here), and the metrics that survive imbalance: precision and recall at an operating point, PR curves and calibration. A credit decision consumes a probability, so a calibrated model matters more than a slightly better ranking.
**Project:** Train a credit default model on a public dataset with an out-of-time split. Report discrimination (AUC, KS) and calibration, pick an approval threshold from a stated cost of a bad loan versus a lost good customer, and show how the decision changes if the model is miscalibrated.

---

## PHASE 3: Secure distributed systems

### Distributed systems `critical`
**Prerequisites:** APIs & backend services, Docker & CI/CD, Transactions & data consistency
**Unlocks:** Event-driven systems & event sourcing, Instant payments & real-time rails, Low-latency systems, Blockchain & distributed ledgers, Operational resilience & SRE
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed. (paid), why: still the single best systems book
- AWS Builders' Library (free)
- microservices.io patterns: saga and transactional outbox (free)
**Study approach:** A payment request that times out is not a payment that failed: the bank may have executed it, rejected it, or never received it, and your system has to cope with all three. Learn partial failure, retries with backoff and idempotency, at-least-once delivery and why exactly-once is something you build rather than receive, sagas for multi-step flows, and the transactional outbox for publishing events without losing or duplicating them. Kleppmann and Riccomini's second edition is the best book on the subject; the AWS Builders' Library shows the same ideas at production scale.
**Project:** Extend your ledger and payments API into a transfer flow across two services and a simulated bank that randomly times out, fails or succeeds late. Use an outbox and a saga with compensations, then run a chaos test of ten thousand transfers and show the ledger still balances and every transfer ends in a known state.

### Applied cryptography `critical`
**Prerequisites:** Security fundamentals & threat modeling
**Unlocks:** Open banking & open finance APIs, Key management & HSM/KMS, Blockchain & distributed ledgers, Post-quantum cryptography
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Serious Cryptography, Aumasson, 2nd ed. (paid), why: practical and current
- Cryptopals challenges (free)
- Coursera: Cryptography I, Dan Boneh, Stanford
**Study approach:** Card security, message signing, open banking tokens, PIN handling and every blockchain are built from a small set of primitives. Learn hashes, MACs, authenticated encryption, public-key encryption, digital signatures and key exchange, then TLS as the place they meet. Above all learn the failure modes: nonce reuse, unauthenticated encryption, homemade protocols, comparing MACs in non-constant time. Serious Cryptography explains the primitives for engineers; Cryptopals makes you break them, which is what makes the lessons stick.
**Project:** Work through Cryptopals sets 1 to 3. Then sign and verify the webhooks from your payments API with an asymmetric scheme, rotate the key without downtime, and write down which attacks your design does and does not prevent.

### Financial regulation & compliance `critical`
**Prerequisites:** Payment systems & money movement
**Unlocks:** Open banking & open finance APIs, KYC, AML & transaction monitoring, Operational resilience & SRE, Regulatory reporting & data lineage, Stablecoins & tokenized assets, On-chain compliance & analytics
**Tracks:** All specializations
**Resources:**
- **Best match:** FATF Recommendations (free), why: the global AML standard national rulebooks descend from
- EU DORA, Regulation (EU) 2022/2554, on EUR-Lex (free)
- CMF Chile, Ley Fintec 21.521 and the open finance rules NCG 514 and NCG 569 (free)
**Study approach:** Finance is regulated because failures spread and because customers cannot inspect what happens to their money. Learn the main families of obligation and what each turns into in code: licensing and safeguarding of client funds, KYC and AML duties, consumer protection and complaints, data protection, outsourcing and third-party risk, and operational resilience. Read the FATF Recommendations, which most AML law descends from, one operational-resilience regime such as the EU's DORA, and your own market's rules; for Chile that is the Fintech Law 21.521 of 2023 and the CMF's open finance rules (NCG 514, amended by NCG 569 in June 2026). The goal is literacy, not legal advice: read a requirement and design for it.
**Project:** Pick one fintech product (a wallet, a lending app, a payment gateway) and one jurisdiction. Write a requirements matrix mapping each applicable obligation to a concrete system control, log or report, and mark which ones your current designs from earlier phases already satisfy.

### Card payments & processing `critical`
**Prerequisites:** Payment systems & money movement
**Unlocks:** PCI DSS & payment data security, Agentic commerce & AI payments
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Book: The Anatomy of the Swipe, Siddiqui (paid), why: the clearest end-to-end account of a card transaction
- EMVCo specifications and 3-D Secure overview (free)
- Stripe and Adyen docs on authorization and tokenization (free)
**Study approach:** The card rail has the most moving parts and the most products built on it. Learn the four-party model (cardholder, issuer, merchant, acquirer) plus processors and schemes; the lifecycle of authorization, clearing and settlement; ISO 8583 messages; EMV chip and contactless; 3-D Secure for online payments; network tokens; chargebacks and disputes; and how interchange and scheme fees shape the economics. The Anatomy of the Swipe walks one transaction end to end; the EMVCo and processor documentation give the detail.
**Project:** Build a simplified acquirer that accepts authorization requests in a subset of ISO 8583, forwards them to a simulated issuer, holds funds in your ledger, and settles them in a daily clearing file. Then implement a chargeback and show every ledger entry it produces.

### ISO 20022 & bank messaging `critical`
**Prerequisites:** Payment systems & money movement
**Unlocks:** Instant payments & real-time rails, Reconciliation & settlement, Cross-border payments & FX
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** iso20022.org message catalogue (free)
- Swift, ISO 20022 for Dummies (free ebook), why: a short, readable map of the message families
- Swift ISO 20022 programme pages (free)
**Study approach:** ISO 20022 is the message standard of modern payments, and the one that carries structured data end to end. Learn the business areas that matter (pain for customer initiation, pacs for interbank clearing, camt for statements and cash management), how messages carry structured party, address and remittance data, and how they map from legacy SWIFT MT formats. Swift set November 2025 as the end of MT and MX coexistence for cross-border payment instructions, and most high-value and instant systems already use ISO 20022, so this is current practice rather than a migration project.
**Project:** Generate a valid pain.001 credit transfer initiation from a payment in your ledger, transform it into the matching pacs.008 a bank would send, and parse a camt.053 statement back into ledger entries. Validate each against the published schema and document every field you could not populate.

### Market microstructure & trading `critical`
**Prerequisites:** Financial markets & instruments
**Unlocks:** Market data & FIX protocol, Matching engines & exchange design, Execution algorithms & TCA
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Book: Trading and Exchanges, Larry Harris (paid), why: the standard practitioner text on how markets actually work
- Book: Algorithmic Trading and DMA, Barry Johnson (paid)
- Exchange order type and rulebook docs, e.g. Nasdaq and CME (free)
**Study approach:** The rules of the game every trading system encodes. Learn order types, the limit order book, matching rules, liquidity and spreads, market makers and their incentives, fragmentation across venues, dark pools, and how exchanges and brokers earn. Harris remains the standard text on how markets work; Johnson adds the electronic-trading view. Read at least one real exchange's order type documentation, because the edge cases there become bugs in your code.
**Project:** Using public order book data (crypto venues publish free depth feeds), reconstruct the book, measure spread and depth through a day, and estimate the cost of buying a fixed size with a market order at different times. Explain what you see in terms of the course.

### Financial time series `critical`
**Prerequisites:** Python, Probability & statistics
**Unlocks:** Backtesting & research infrastructure, Market risk & portfolio analytics
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Book: Analysis of Financial Time Series, Tsay (paid), why: the standard text
- Forecasting: Principles and Practice, Hyndman & Athanasopoulos (free online)
- statsmodels and arch library docs (free)
**Study approach:** The statistics under every backtest and market risk number. Learn returns and log returns, stationarity and why prices are not stationary, autocorrelation, volatility clustering and GARCH models, regime change, and the classic traps: look-ahead bias, survivorship bias and data snooping. Tsay is the reference; Hyndman's free book teaches forecasting discipline that transfers.
**Project:** Fit a GARCH model to an index's daily returns, use it to forecast volatility, and evaluate the forecasts out of sample against realized volatility. Then deliberately introduce look-ahead bias and show how much better (and how wrong) the results look.

### Financial data engineering `critical`
**Prerequisites:** SQL & data access, Python
**Unlocks:** KYC, AML & transaction monitoring, Regulatory reporting & data lineage
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Book: Financial Data Engineering, Tamer Khraisha (paid), why: the one book written for exactly this intersection
- dbt docs and dbt Learn (free)
- Book: Fundamentals of Data Engineering, Reis & Housley (paid)
**Study approach:** Risk, compliance and reporting all stand on financial data, and regulators ask where each number came from. Learn to model transactions, positions and reference data, run tested transformations in a warehouse, write data quality checks, and handle bitemporal data: what was true on a date, and what we knew about it on another date, which is how restatements and late-arriving corrections are kept honest. Khraisha's book is the one written for this intersection; dbt is the common tool for the transformation layer.
**Project:** Build a small warehouse from your ledger: a dbt project with sources, tests and documented models for balances, daily movements and customer risk attributes. Add a bitemporal table and show a report as it was originally published and as corrected after a late transaction arrived.

---

## PHASE 4: Rails, markets & models

### Event-driven systems & event sourcing `critical`
**Prerequisites:** Distributed systems, Ledgers & double-entry design
**Unlocks:** Core banking & product engines, Fraud detection systems, Financial systems architecture, Capstone: FinTech system
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Designing Event-Driven Systems, Ben Stopford (free from Confluent), why: built around a financial example
- Apache Kafka docs (free)
- Martin Fowler, Event Sourcing (free)
**Study approach:** A ledger is naturally an event log, and payment, loan and trade lifecycles are state machines driven by events from partners you do not control. Learn log-based messaging with Kafka, partitioning and ordering guarantees, consumer groups and replay, event sourcing and CQRS, schema evolution, and how to handle duplicates and out-of-order events. Stopford's book is built around a financial example and is free from Confluent.
**Project:** Rebuild your ledger's write path as event-sourced: commands produce events, projections build balances and statements, and a full replay from the log reproduces every balance exactly. Add a projection that did not exist before and backfill it from history.

### Instant payments & real-time rails `critical`
**Prerequisites:** ISO 20022 & bank messaging, Distributed systems
**Unlocks:** Cross-border payments & FX
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Banco Central do Brasil, Pix regulation and technical docs (free), why: a national instant rail documented openly, end to end
- Federal Reserve, FedNow Service resources (free)
- European Payments Council, SEPA Instant Credit Transfer rulebook (free)
**Study approach:** Instant account-to-account rails such as Pix in Brazil, FedNow in the US, SEPA Instant in the EU and UPI in India settle in seconds, around the clock, and irrevocably. Learn their participation models, aliases and QR codes, request-to-pay, liquidity management when settlement never pauses for the weekend, and the fraud patterns that come with money that cannot be pulled back (authorised push payment scams in particular). The Banco Central do Brasil publishes Pix's rules and technical documentation openly, which makes it the best place to study a working system.
**Project:** Build a simulator of an instant payment participant: alias lookup, a payment that settles in your ledger within a latency budget, a request-to-pay flow and a liquidity limit. Add a fraud rule that holds suspicious first-time payees, and measure what it does to latency and false positives.

### Open banking & open finance APIs `critical`
**Prerequisites:** Financial regulation & compliance, Applied cryptography
**Unlocks:** Agentic commerce & AI payments
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** OpenID Foundation, FAPI 2.0 Security Profile (free), why: the security profile open banking regimes converge on
- Open Finance Brasil developer docs (free)
- UK Open Banking standards (free)
**Study approach:** Open banking and open finance let customers share their financial data and initiate payments through regulated APIs instead of screen-scraping. Learn OAuth 2.0 and OpenID Connect, then the FAPI 2.0 security profile (final since February 2025) that open banking regimes converge on; the consent lifecycle and its revocation; and the main regimes: PSD2 in the EU (its successors PSD3 and the Payment Services Regulation were provisionally agreed in November 2025, with formal adoption pending), the UK standards, Open Finance Brasil, and Chile's open finance system, whose start the CMF moved to July 2027 with NCG 569.
**Project:** Build a third-party app against a public open banking sandbox: consent, token exchange with a FAPI-style profile, account and transaction retrieval, consent revocation, and a payment initiation. Write up every security control the provider required and why it exists.

### Key management & HSM/KMS `critical`
**Prerequisites:** Applied cryptography
**Unlocks:** PCI DSS & payment data security, Wallets, custody & key ceremonies, Post-quantum cryptography
**Tracks:** Payments & banking platforms, Digital assets & tokenization
**Resources:**
- **Best match:** NIST SP 800-57 Part 1, key management recommendations (free), why: the reference for the key lifecycle
- AWS Payment Cryptography and AWS KMS docs (free)
- PCI PIN Security Requirements (free)
**Study approach:** Cryptography is only as good as the custody of its keys. Learn the key lifecycle (generation, distribution, rotation, revocation, destruction), HSMs and cloud KMS, envelope encryption, dual control and split knowledge, and key ceremonies. In payments add PIN blocks, key hierarchies and DUKPT for terminals; in digital assets, accept that the key is the asset. NIST SP 800-57 is the reference for the lifecycle; AWS Payment Cryptography is a readable modern window into payment HSM operations.
**Project:** Design and implement envelope encryption for sensitive fields in your ledger using a cloud KMS, with key rotation that re-wraps data keys without downtime. Write a key ceremony procedure for the master key that a second person could follow.

### Derivatives pricing & numerical methods `critical`
**Prerequisites:** Financial markets & instruments, Probability & statistics
**Unlocks:** Market risk & portfolio analytics
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Coursera: Financial Engineering and Risk Management, Columbia
- Book: Options, Futures, and Other Derivatives, Hull (paid)
- QuantLib docs (free) and Implementing QuantLib, Ballabio (paid), why: production pricing code to read
**Study approach:** Pricing turns the instruments of the markets course into numbers a trading desk can use. Learn no-arbitrage arguments, binomial trees, Black-Scholes and its Greeks, Monte Carlo simulation and finite-difference methods, and the yield curve construction underneath it all. The Columbia course is the most direct route; Hull is the reference. Implement and test rather than only derive: every model here has a published closed form or benchmark to check against.
**Project:** Implement European and American option pricers with a binomial tree, Black-Scholes and Monte Carlo, check them against each other and against QuantLib, and plot convergence. Add Greeks by finite differences and by pathwise derivatives and compare their noise.

### Market data & FIX protocol `critical`
**Prerequisites:** Market microstructure & trading, APIs & backend services
**Unlocks:** Backtesting & research infrastructure
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** FIX Trading Community, FIX specification and FIXimate (free), why: the spec is the documentation
- QuickFIX/J docs (free)
- Nasdaq TotalView-ITCH specification (free)
**Study approach:** FIX is the common protocol between trading systems and venues. Learn the session layer (logon, heartbeats, sequence numbers, resend requests and gap fills), the application messages for orders, cancels, replaces and execution reports, drop copies, and how market data arrives, from FIX snapshots to binary incremental feeds over multicast. The specification is the documentation; QuickFIX/J lets you run real sessions locally.
**Project:** Connect a QuickFIX client to a simulated venue you write yourself. Send, amend and cancel orders, handle partial fills, then kill the connection mid-session and show that sequence-number recovery restores a consistent order state on both sides.

### Low-latency systems `desirable`
**Prerequisites:** C++, Distributed systems
**Unlocks:** Matching engines & exchange design
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** CppCon talk: When a Microsecond Is an Eternity, Carl Cook (free), why: a working HFT engineer on the real techniques
- LMAX Disruptor paper and docs (free)
- Book: Systems Performance, Gregg, 2nd ed. (paid)
**Study approach:** At a high-frequency firm, a quote that arrives a few microseconds late is worth less. Learn where latency comes from: system calls, context switches, cache misses, allocation, locks and the network stack. Then the techniques: CPU pinning and isolation, kernel bypass networking, cache-friendly and allocation-free hot paths, lock-free single-producer queues, and measuring tail latency honestly rather than averages. Carl Cook's talk is the best single introduction from someone who did it for a living.
**Project:** Build a market data to order pipeline with a lock-free queue between threads. Measure the 50th, 99th and 99.9th percentile latency, then apply pinning, pre-allocation and batching one at a time and chart what each change bought.

### Credit risk & scoring models `critical`
**Prerequisites:** Machine learning, Finance & accounting fundamentals
**Unlocks:** Model risk management & explainability
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Book: Credit Risk Analytics, Baesens, Rosch & Scheule (paid), why: applied, and framed by the regulation
- Book: Credit Scoring and Its Applications, Thomas, Crook & Edelman (paid)
- Basel Committee, IRB approach material (free)
**Study approach:** Credit models decide who gets a loan and on what terms. Learn probability of default, loss given default and exposure at default, the scorecard approach with binning and weight of evidence, reject inference (you only observe outcomes for people you approved), vintage and roll-rate analysis, and the constraints on automated lending: fair lending rules and the duty to tell an applicant why they were declined. Baesens and colleagues cover the models with the regulatory framing; the Basel IRB material explains how banks turn these numbers into capital.
**Project:** Build a scorecard on a public credit dataset with weight-of-evidence binning and logistic regression, compare it with a gradient-boosted model, and generate the top reasons for each decline. Test both for disparate outcomes across a protected attribute and write up what you found.

### KYC, AML & transaction monitoring `critical`
**Prerequisites:** Financial regulation & compliance, Financial data engineering
**Unlocks:** Graph analytics for financial crime
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** FATF Recommendations and risk-based approach guidance (free), why: the standard national rules implement
- Wolfsberg Group guidance papers (free)
- ACAMS CAMS study material (paid)
**Study approach:** Know-your-customer and anti-money-laundering systems are where engineering meets the regulator most directly. Learn customer onboarding and identity verification, sanctions and politically-exposed-person screening with fuzzy name matching, customer risk scoring, transaction monitoring with rules and models, alert triage, case management and the filing of suspicious activity reports. The FATF Recommendations define the duties; the Wolfsberg papers show how banks implement them. Supervisors judge these systems by their audit trail as much as by what they catch. In the EU a single AML rulebook, Regulation (EU) 2024/1624, applies from 10 July 2027.
**Project:** Build a transaction monitoring pipeline over your ledger's events: three typologies as rules (structuring, rapid movement through an account, unusual geography), an alert queue, a case view with the evidence that triggered it, and a full audit trail of who did what. Measure the alert volume and tune one rule with stated reasoning.

### Blockchain & distributed ledgers `critical`
**Prerequisites:** Applied cryptography, Distributed systems
**Unlocks:** Smart contracts & on-chain security, Wallets, custody & key ceremonies, On-chain compliance & analytics
**Tracks:** Digital assets & tokenization
**Resources:**
- **Best match:** Book: Bitcoin and Cryptocurrency Technologies, Narayanan et al. (free PDF), why: rigorous and still the best foundation
- Book: Mastering Ethereum, 2nd ed. (paid)
- ethereum.org developer docs (free)
**Study approach:** Learn how a blockchain actually works before building on one: hash-linked blocks, Merkle trees, consensus from proof of work to proof of stake and BFT protocols, the UTXO and account models, finality and reorganisations, Ethereum's execution model and gas, and permissioned ledgers used between institutions. Narayanan and colleagues' book is rigorous and free; Mastering Ethereum's second edition covers the current Ethereum stack. Finish able to say when a shared ledger solves a real coordination problem and when a database would do.
**Project:** Run a node on a public testnet, send transactions programmatically, and track one from submission to finality. Then write a two-page assessment of one real proposed use of a blockchain in finance, arguing whether a shared ledger is necessary there.

---

## PHASE 5: Production & controls

### Operational resilience & SRE `critical`
**Prerequisites:** Distributed systems, Financial regulation & compliance
**Unlocks:** Financial systems architecture, Capstone: FinTech system
**Tracks:** All specializations
**Resources:**
- **Best match:** Google SRE book (free), why: the canonical reliability practice
- EU DORA and its technical standards on EUR-Lex (free)
- Bank of England and FCA operational resilience policy (free)
**Study approach:** In finance an outage is a regulatory event as well as a technical one: customers cannot pay, settlement deadlines are missed, and supervisors expect to be told. Learn SLOs and error budgets, observability (metrics, logs and traces that follow one payment across services), incident response and post-mortems, backup and disaster recovery that has actually been tested, multi-region design, and third-party risk for the cloud and the partners you depend on. Read one resilience regime in full; the EU's DORA, applicable since 17 January 2025, is the most detailed, and the UK's operational resilience policy is the clearest on impact tolerances.
**Project:** Define SLOs for your payments system, instrument it so one transfer can be traced end to end, run a game day that takes down the database and the simulated bank, and write the incident report and the regulator notification you would send. Include the recovery time you actually achieved.

### Reconciliation & settlement `critical`
**Prerequisites:** Ledgers & double-entry design, ISO 20022 & bank messaging
**Unlocks:** Embedded finance & BaaS
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Modern Treasury journal on reconciliation (free), why: practical and engineering-led
- ISO 20022 camt.053 statement message guides (free)
- Book: Payments Systems in the U.S., settlement chapters (paid)
**Study approach:** Reconciliation is how a financial company knows its ledger is true: every internal balance is matched against an external source (bank statements, scheme settlement files, partner reports), and every difference becomes a break that someone resolves. Learn matching strategies (exact, many-to-one, tolerance and timing), suspense accounts, break ageing and exception workflows, and the difference between what you think settled and what did. The 2024 bankruptcy of the Synapse banking-as-a-service platform, where end users found their balances could not be matched to the money held at partner banks, is the case study for why this is critical rather than back-office.
**Project:** Generate a month of bank statement data (camt.053) that disagrees with your ledger in realistic ways: timing differences, fees netted from settlements, a duplicate, a missing reversal. Build a reconciliation engine that matches, explains and ages the breaks, and produce the month-end reconciliation report a finance team would sign.

### Core banking & product engines `desirable`
**Prerequisites:** Ledgers & double-entry design, Event-driven systems & event sourcing
**Unlocks:** Embedded finance & BaaS
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Apache Fineract docs (free), why: an open-source core you can run and read
- Thought Machine Vault and Mambu developer docs (free)
- Book: Analysis Patterns, Fowler (paid)
**Study approach:** A core banking system turns a ledger into products: deposit accounts that accrue interest, loans with amortization schedules, fees, limits and the end-of-day batch that capitalizes interest and rolls dates. Modern cores (Thought Machine, Mambu and others) are configurable product engines over a ledger, and integrating with one is a common fintech job. Apache Fineract is open source, so you can run one and read how it handles the details.
**Project:** Implement a savings product with daily interest accrual and monthly capitalization and a consumer loan with an amortization schedule, early repayment and late fees, on top of your ledger. Run a simulated year and show the interest calculations tie out to an independent spreadsheet to the cent.

### PCI DSS & payment data security `critical`
**Prerequisites:** Card payments & processing, Key management & HSM/KMS
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** PCI Security Standards Council, PCI DSS v4.0.1 and guidance documents (free), why: the standard itself is readable
- PCI SSC scoping and tokenization guidance (free)
- Stripe guide to PCI compliance (free)
**Study approach:** Card data comes with its own security standard, and most fintechs design their architecture around keeping it out of their systems. Learn what the cardholder data environment is, how scoping and network segmentation work, how tokenization and hosted fields reduce scope, and what PCI DSS v4.0.1 requires (its future-dated requirements became mandatory on 31 March 2025). Read the standard itself, which is more readable than its reputation, and the Council's scoping guidance.
**Project:** Redesign your acquirer so primary account numbers never touch your application servers: a tokenization service in its own segment, hosted payment fields for capture, and encryption keys from your KMS. Draw the before and after scope diagrams and list the PCI DSS requirements that no longer apply to the rest of the system.

### Backtesting & research infrastructure `critical`
**Prerequisites:** Financial time series, Market data & FIX protocol
**Unlocks:** Execution algorithms & TCA
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Book: Advances in Financial Machine Learning, López de Prado (paid), why: the clearest account of why backtests overfit
- Book: Quantitative Trading, Ernest Chan, 2nd ed. (paid)
- QuantConnect LEAN engine docs (free)
**Study approach:** A backtest answers how a strategy would have performed, and it is very easy to make it lie. Learn event-driven backtesting, point-in-time data (no future information, no survivors only), realistic transaction costs and slippage, walk-forward validation, and the multiple-testing problem: try enough strategies and one will look brilliant by chance. López de Prado's book is the clearest account of how backtests overfit; Chan's is the practical starting point.
**Project:** Build an event-driven backtester over recorded market data with a cost model. Test a simple strategy honestly, then run a parameter sweep of a hundred variants and show how the best one degrades out of sample. Report a deflated performance figure.

### Matching engines & exchange design `desirable`
**Prerequisites:** Market microstructure & trading, Low-latency systems
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Martin Fowler, The LMAX Architecture (free), why: a real exchange design written up in detail
- Exchange matching rule documentation (free)
- Exchange-systems talks from CppCon and trading firms (free)
**Study approach:** Building a matching engine is the fastest way to understand a venue from the inside. Learn price-time priority and its alternatives, order book data structures that make inserts, cancels and matches fast, sequencers and deterministic replay (so a crash can be rebuilt exactly), pre-trade risk checks, and how market data is published from the book. Fowler's write-up of the LMAX architecture describes a real exchange built on a single-threaded, in-memory design.
**Project:** Build a single-instrument matching engine with limit and market orders, cancels and replaces, an input journal and deterministic replay. Prove with a replay test that the same input always produces the same trades, and measure throughput and latency.

### Fraud detection systems `critical`
**Prerequisites:** Machine learning, Event-driven systems & event sourcing
**Unlocks:** Graph analytics for financial crime
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Book: Fraud Analytics Using Descriptive, Predictive, and Social Network Techniques, Baesens, Van Vlasselaer & Verbeke (paid), why: the full lifecycle including network features
- Stripe engineering posts on Radar (free)
- Kaggle IEEE-CIS Fraud Detection dataset (free)
**Study approach:** Fraud systems score transactions in the authorization path, often within tens of milliseconds, so they are part ML and part real-time engineering. Learn feature computation over event streams (velocity, device, behaviour), how rules and models combine, label delay (a chargeback can arrive weeks later), adversarial drift as fraudsters adapt, and the business trade-off: every false positive is a good customer declined. Baesens and colleagues cover the full lifecycle; the IEEE-CIS dataset is a realistic place to practise.
**Project:** Build a streaming fraud scorer over your payment events with velocity features, a rules layer and a model, inside a latency budget. Evaluate it with a time-based split and simulated label delay, and choose an operating threshold from stated costs of fraud and of declined good customers.

### Model risk management & explainability `critical`
**Prerequisites:** Credit risk & scoring models
**Unlocks:** LLMs & agents in regulated finance
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Federal Reserve SR 26-2, Revised Guidance on Model Risk Management (free), why: the current US supervisory baseline
- Book: Interpretable Machine Learning, Molnar (free online)
- SHAP docs (free)
**Study approach:** Banks are expected to know every model they use, validate it independently, monitor it, and be able to explain its decisions. Learn model inventories and tiering, validation (conceptual soundness, outcome analysis, benchmarking), ongoing monitoring for drift and performance, documentation, challenger models, and explainability methods such as SHAP and their limits. In the US the interagency SR 26-2 replaced the long-standing SR 11-7 in April 2026 with a more principles-based approach scaled to the institution; read it as the current baseline and expect other supervisors to keep moving too.
**Project:** Write a validation report for the credit model from the previous phase as an independent validator would: conceptual review, out-of-time performance, stability, explainability for individual decisions, limitations and a monitoring plan with thresholds. Then implement the monitoring and trigger one alert with drifted data.

### Smart contracts & on-chain security `critical`
**Prerequisites:** Blockchain & distributed ledgers, Testing & code quality
**Unlocks:** Stablecoins & tokenized assets, DeFi protocols & on-chain markets
**Tracks:** Digital assets & tokenization
**Resources:**
- **Best match:** Cyfrin Updraft courses (free), why: current, hands-on and security-minded
- OpenZeppelin Ethernaut challenges (free)
- Foundry book (free)
**Study approach:** Smart contracts are programs that hold money in public and cannot be patched quietly. Learn Solidity and the EVM, testing with Foundry including fuzzing and invariant tests, and the vulnerability classes that keep recurring: reentrancy, oracle manipulation, broken access control, unchecked external calls and upgradeability mistakes. Cyfrin Updraft teaches development with security in mind; Ethernaut makes you exploit the classic bugs yourself.
**Project:** Complete Ethernaut. Then write a simple escrow or vesting contract with full Foundry tests, including invariant tests, run a static analyser over it, and write the audit report you would want if someone else had written it.

### Wallets, custody & key ceremonies `critical`
**Prerequisites:** Blockchain & distributed ledgers, Key management & HSM/KMS
**Tracks:** Digital assets & tokenization
**Resources:**
- **Best match:** Book: Mastering Bitcoin, Antonopoulos & Harding, 3rd ed., keys and wallets chapters (paid; text free on GitHub), why: keys and wallets from first principles
- Fireblocks and Coinbase engineering posts on MPC custody (free)
- NIST SP 800-57 (free)
**Study approach:** Institutional custody is key management with a very expensive failure mode. Learn hot, warm and cold storage and why each exists, multisig and multi-party computation (MPC) wallets, HSM-backed signing, transaction policy engines (who can approve what, up to which amount, to which addresses), address whitelisting, recovery and inheritance, and the operational controls around all of it. Mastering Bitcoin covers keys and wallets from first principles; the engineering blogs of the large custodians describe how MPC is run in production.
**Project:** Build a custody service on a testnet: a policy engine that requires two approvals above a threshold, an allow-list of withdrawal addresses, signing through a software HSM or a threshold-signature library, and a full audit trail. Write the recovery procedure and test it.

---

## PHASE 6: Domain depth & frontier

### Cross-border payments & FX `desirable`
**Prerequisites:** ISO 20022 & bank messaging, Instant payments & real-time rails
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** FSB, G20 Roadmap for Enhancing Cross-border Payments progress reports (free), why: the official map of what is being fixed and why
- BIS CPMI cross-border payments reports (free)
- Wise engineering blog (free)
**Study approach:** Cross-border payments still carry most of the friction left in payments: several intermediaries, pre-funded accounts, FX conversion, compliance checks at each hop and poor transparency on fees and timing. Learn correspondent banking with nostro and vostro accounts, FX execution and pre-funding, payment tracking, and the G20 programme coordinated by the FSB and the BIS CPMI to make cross-border payments faster, cheaper and more transparent. The FSB progress reports are the best overview of what is being fixed and why.
**Project:** Model a cross-border payment through two correspondent banks with FX conversion in your ledger, including fees deducted along the way and a return. Then model the same payment through a pre-funded local-payout network and compare cost, speed, liquidity tied up and compliance checks.

### Embedded finance & BaaS `desirable`
**Prerequisites:** Core banking & product engines, Reconciliation & settlement
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Fintech Business Weekly, Jason Mikula, coverage of BaaS and the Synapse bankruptcy (free tier), why: the most detailed running account of how BaaS fails
- Unit and Treasury Prime developer docs (free)
- US banking agencies' 2024 statement on bank-fintech arrangements (free)
**Study approach:** Banking as a service lets a non-bank offer accounts and cards through a sponsor bank. Learn the roles (sponsor bank, program manager, middleware platform, fintech brand), for-benefit-of accounts that pool many customers' money, the question of who keeps the ledger of record, and which compliance duties sit with whom. The 2024 Synapse bankruptcy is the case study in what happens when nobody can say whose money is whose; US banking agencies followed it with a 2024 statement on bank-fintech arrangements. Read it alongside the coverage of the collapse.
**Project:** Design a BaaS program for a consumer wallet: draw the money flows and the ledgers each party keeps, define the daily reconciliation between the fintech's ledger and the FBO account at the bank, and write the incident runbook for a reconciliation break that cannot be explained within a day.

### Agentic commerce & AI payments `frontier`
**Prerequisites:** Card payments & processing, Open banking & open finance APIs
**Tracks:** Payments & banking platforms
**Resources:**
- **Best match:** Google, Agent Payments Protocol (AP2) specification (free), why: an open spec you can read end to end
- Visa Intelligent Commerce and Mastercard Agent Pay developer pages (free)
- See also the Applied AI roadmap
**Study approach:** A frontier topic, unsettled and moving monthly. AI agents that buy things on a user's behalf need delegated credentials with limits, proof of what the user actually authorised, and a dispute model when the agent gets it wrong. In 2025 the card networks announced agent-specific programmes (Visa Intelligent Commerce, Mastercard Agent Pay) built on network tokens, and Google published the Agent Payments Protocol (AP2) built around signed mandates. Study the shared ideas, which reuse tokenization and consent from earlier in this track, rather than any one protocol, and expect the field to consolidate.
**Project:** Build a small agent that may buy within a user-set budget and merchant list: issue it a scoped, revocable credential, record a signed mandate for each purchase, and design the dispute flow for a purchase the user says they did not intend. Write up which risks remain unsolved.

### Execution algorithms & TCA `desirable`
**Prerequisites:** Market microstructure & trading, Backtesting & research infrastructure
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Book: Algorithmic Trading and DMA, Barry Johnson (paid), why: the practitioner reference on execution
- Book: Algorithmic and High-Frequency Trading, Cartea, Jaimungal & Penalva (paid)
- Almgren & Chriss, Optimal Execution of Portfolio Transactions (free paper)
**Study approach:** Execution algorithms decide how to buy or sell a large order without moving the market against you. Learn VWAP, TWAP, participation and implementation-shortfall algorithms, smart order routing across venues, market impact models, and transaction cost analysis, which is how you find out whether an algorithm helped. Johnson is the practitioner reference; Almgren and Chriss is the paper behind the optimal-execution framing; Cartea, Jaimungal and Penalva give the mathematics.
**Project:** Implement TWAP, VWAP and an implementation-shortfall algorithm in your backtester with a market impact model, execute the same parent order with each across many simulated days, and produce a TCA report comparing them against arrival price.

### Market risk & portfolio analytics `critical`
**Prerequisites:** Derivatives pricing & numerical methods, Financial time series
**Tracks:** Trading & market systems
**Resources:**
- **Best match:** Book: Risk Management and Financial Institutions, Hull (paid), why: the measures and the regulation in one volume
- Book: Value at Risk, Jorion (paid)
- Basel Committee, Minimum capital requirements for market risk (free)
**Study approach:** Market risk is the set of numbers a risk committee reads every morning. Learn sensitivities and the Greeks at portfolio level, historical and Monte Carlo value at risk, expected shortfall, stress testing, P&L attribution and backtesting of the risk model itself, and the Basel market risk framework (FRTB) that sets how banks turn these into capital. Hull covers the measures and the regulation together; Jorion is the classic on VaR.
**Project:** Build a risk engine for a small multi-asset portfolio: full-revaluation historical VaR and expected shortfall, a Monte Carlo VaR, three stress scenarios and a daily P&L explain. Backtest the VaR over two years and report the exceptions.

### Graph analytics for financial crime `desirable`
**Prerequisites:** Fraud detection systems, KYC, AML & transaction monitoring
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Stanford CS224W, Machine Learning with Graphs (free lectures), why: the theory behind graph features
- Neo4j Graph Data Science docs, fraud use cases (free)
- Fraud Analytics, Baesens et al., network chapters (paid)
**Study approach:** Financial crime is a network problem: fraud rings share devices and addresses, mule accounts pass money along chains, and launderers split and recombine funds. Learn entity resolution (deciding that two records are the same person), building transaction graphs, community detection, centrality and path features, and graph machine learning at a working level. Stanford's CS224W gives the theory; graph database documentation gives the practical fraud patterns.
**Project:** Build a graph from synthetic or public transaction data with entity resolution across shared attributes. Detect a planted mule network with community detection and graph features, and show how much adding graph features improves your earlier fraud model.

### Regulatory reporting & data lineage `desirable`
**Prerequisites:** Financial data engineering, Financial regulation & compliance
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Basel Committee, BCBS 239 Principles for effective risk data aggregation and risk reporting (free), why: the principles supervisors audit against
- OpenLineage docs (free)
- Book: Financial Data Engineering, Khraisha (paid)
**Study approach:** Regulatory reports must be on time and provably right, and the second part is harder. Learn how reports are produced from ledger and risk data, data lineage from report cell back to source transaction, controls and sign-offs, reconciliation of reports to the general ledger, and the BCBS 239 principles for risk data aggregation and reporting that supervisors audit large banks against. OpenLineage gives a practical way to capture lineage automatically.
**Project:** Produce a simplified regulatory return (for example a liquidity or large-exposures report) from your warehouse with automated lineage, a reconciliation to the ledger, and controls that block publication when a check fails. Show the lineage for one reported figure back to its source transactions.

### LLMs & agents in regulated finance `frontier`
**Prerequisites:** Model risk management & explainability
**Tracks:** Risk, fraud & compliance
**Resources:**
- **Best match:** Book: AI Engineering, Chip Huyen (paid), why: its evaluation chapters are what regulated deployment needs
- Bank of England and FCA, Artificial intelligence in UK financial services 2024 survey (free)
- See also the Applied AI roadmap
**Study approach:** A frontier topic. Language models are being applied to document extraction for onboarding and lending, analyst copilots, drafting AML alert narratives and customer service, but in finance they meet model risk management, explainability, data protection, record-keeping and consumer-protection duties all at once. Learn how to evaluate such systems rigorously, how to keep a human accountable for decisions, and what supervisors have said so far. Note that in the EU the AI Act treats creditworthiness assessment as high-risk. The Applied AI roadmap on this site covers the engineering; this node is about doing it under these constraints.
**Project:** Build an extraction pipeline that reads bank statements or payslips for a loan application, with a measured evaluation set, confidence thresholds that route uncertain cases to a human, and a log that would let a validator reconstruct every decision. Write the model risk documentation for it.

### Stablecoins & tokenized assets `critical`
**Prerequisites:** Smart contracts & on-chain security, Financial regulation & compliance
**Tracks:** Digital assets & tokenization
**Resources:**
- **Best match:** BIS papers on stablecoins and tokenisation, including Project Agorá (free), why: the central-bank view of where this is heading
- EU MiCA, Regulation (EU) 2023/1114, on EUR-Lex (free)
- ERC-20 standard and issuer technical docs (free)
**Study approach:** Stablecoins and tokenized assets are the part of digital assets closest to mainstream payments and banking. Learn fiat-backed stablecoin design (reserves, attestation, minting and redemption), tokenized deposits and tokenized funds, settlement on public versus permissioned chains, and the regimes that now govern them: MiCA in the EU and the US GENIUS Act, signed in July 2025, whose implementing rules were still being finalized in 2026. The BIS papers, including Project Agorá on tokenized correspondent banking, give the central-bank view.
**Project:** Implement a permissioned stablecoin on a testnet with minting and burning tied to your ledger's reserve account, an allow-list for holders, and a freeze function. Produce a daily reserve reconciliation proving tokens in circulation never exceed reserves, and write up how the design maps to one regulatory regime.

### DeFi protocols & on-chain markets `frontier`
**Prerequisites:** Smart contracts & on-chain security
**Tracks:** Digital assets & tokenization
**Resources:**
- **Best match:** Book: DeFi and the Future of Finance, Harvey, Ramachandran & Santoro (paid), why: written by finance academics and sober about the risks
- Uniswap whitepapers and docs (free)
- Damn Vulnerable DeFi challenges (free)
**Study approach:** A frontier topic. Decentralized finance rebuilds exchanges, lending and derivatives as public smart contracts: automated market makers, overcollateralized lending with liquidations, oracles, and the maximal extractable value that block producers capture. It is a live laboratory of market structure without intermediaries, and a long record of how such systems break through oracle attacks, governance capture and composability risk. Harvey, Ramachandran and Santoro give the sober finance view; the Uniswap papers explain the AMM design most others copy.
**Project:** Fork a public network locally, interact with an AMM and a lending protocol, and reproduce one historical exploit in a test. Write the post-mortem: what invariant broke, why audits missed it, and what a regulated institution would need before touching the protocol.

### On-chain compliance & analytics `desirable`
**Prerequisites:** Blockchain & distributed ledgers, Financial regulation & compliance
**Tracks:** Digital assets & tokenization
**Resources:**
- **Best match:** FATF, Updated Guidance for a Risk-Based Approach to Virtual Assets and VASPs (free), why: the source of the travel rule
- Chainalysis and TRM Labs public research (free)
- EU Transfer of Funds Regulation (EU) 2023/1113 on EUR-Lex (free)
**Study approach:** Without compliance no regulated institution can touch digital assets. Learn blockchain analytics (address clustering, exposure to sanctioned or illicit entities), the FATF travel rule for passing originator and beneficiary information with virtual-asset transfers, MiCA's licensing duties for crypto-asset service providers, and the EU Transfer of Funds Regulation that applies the travel rule in the EU. The FATF guidance is the primary source; the public research from analytics firms shows typologies in practice.
**Project:** Build an on-chain screening service: given a deposit address and transaction, trace funds a few hops back, score exposure against a public sanctions list, and produce a travel-rule message for an outgoing transfer. Document false positives you found and how you would tune them.

### Post-quantum cryptography `desirable`
**Prerequisites:** Applied cryptography, Key management & HSM/KMS
**Tracks:** Payments & banking platforms, Digital assets & tokenization (elective)
**Resources:**
- **Best match:** NIST FIPS 203, 204 and 205 (free), why: the standards themselves
- BIS Innovation Hub, Project Leap phase 2: quantum-proofing payment systems (free)
- See also the AI Security roadmap
**Study approach:** An elective, and a deadline-driven one. NIST published the first post-quantum standards in August 2024 (ML-KEM for key establishment, ML-DSA and SLH-DSA for signatures), and financial institutions now have to inventory where they use public-key cryptography and plan a long migration across payment networks, HSMs, PKI and signing. Learn crypto agility (designing so algorithms can be swapped), hybrid schemes, and the performance costs. The BIS Project Leap phase 2 report describes testing post-quantum signatures in a real central-bank payment system.
**Project:** Inventory every use of public-key cryptography in the systems you built on this roadmap, rank them by data shelf life and exposure, and migrate one (for example webhook signatures) to a hybrid classical and post-quantum scheme behind an abstraction that lets you swap algorithms. Measure the size and latency cost.

---

## PHASE 7: Architecture & capstone

### Financial systems architecture `critical`
**Prerequisites:** Event-driven systems & event sourcing, Operational resilience & SRE
**Unlocks:** Technical leadership
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed. (paid)
- Architecture decision records (free), why: in regulated systems the reasoning is part of the deliverable
- Engineering blogs of Stripe, Monzo, Nubank and Adyen (free)
**Study approach:** Putting it together. Decide where the ledger of record lives and who may write to it, what is synchronous and what is eventually consistent, how each external rail and partner is isolated behind an adapter, how events flow to risk, reporting and analytics, and how all of this is evidenced to an auditor and a regulator. At this level the work is judgement, and in a regulated system the reasoning is part of the deliverable: write decisions down so others can challenge them. The engineering blogs of Stripe, Monzo, Nubank and Adyen show how large fintechs have made these choices in public.
**Project:** Write the architecture for a fintech product of your choosing: context diagram, ledger design, rail adapters, failure modes and their handling, data flows to risk and reporting, and the controls map. Include three architecture decision records with the alternatives you rejected, and have an engineer who disagrees review it.

### Capstone: FinTech system `critical`
**Prerequisites:** Ledgers & double-entry design, Event-driven systems & event sourcing, Operational resilience & SRE, Testing & code quality
**Tracks:** All specializations
**Resources:**
- **Best match:** No course. Build against real sandboxes (open banking, a card processor, a testnet) and publish the design, the tests and the reconciliation report
**Study approach:** The proof that this path is finished. Everything before it exists to make this possible: a system with real money semantics, built to survive failure, with the controls and evidence a regulated business needs. Scope it small enough to finish and real enough to use sandboxes rather than mocks. Let the specialization set its centre: a payment product on a real sandbox rail, a trading component with a measured latency and risk report, a credit or fraud model running in production shape with a validation report, or a custody or stablecoin service on a testnet.
**Project:** Ship one system with a double-entry ledger at its core, at least one real or sandbox rail, idempotent APIs, an event log, reconciliation against an external source, monitoring with SLOs, and a written threat model and compliance mapping. Publish the repository, the test suite and one month-end reconciliation report. The reconciliation report is the part that is hard to fake and therefore the part that gets you hired.

### Technical leadership `desirable`
**Prerequisites:** Financial systems architecture
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Staff Engineer, Will Larson, free web edition at staffeng.com
- Run one design review with compliance in the room, why: that is the job at this level
**Study approach:** Setting technical direction, writing specifications and design reviews, mentoring, and above all working with the risk, compliance, legal and finance teams whose sign-off every launch needs. In finance the most undersupplied leadership skill is translation: explaining a technical risk to a compliance officer and a regulatory requirement to an engineer, in terms each can act on. That skill is exercised in writing, which is why the English lane compounds into this node.
**Project:** Lead one cross-functional decision end to end, ideally a launch that needs compliance sign-off: write the proposal, run the review with control functions in the room, absorb the disagreement, ship the outcome and publish a retrospective.

---

## Parallel Track: English Proficiency (Highest ROI)

Finance is regulated nationally but engineered internationally. Card scheme rules, ISO 20022 usage guidelines, BIS and FATF standards, EU technical standards and the engineering write-ups of the large fintechs all appear in English first, and the payment networks and processors you integrate with document themselves in English whatever country they operate in. Remote and international fintech roles, which are a large share of the market for engineers outside the main financial centres, are conducted in English.

Reading is the low bar. The return comes from writing: design reviews, incident reports, model validation reports and the documents a regulator or auditor reads are all written artifacts, and in a regulated business the engineer whose writing is trusted gets the hard problems. It compounds directly into the leadership node, where the deliverable is a document that changes a decision.

**Practice:** write every design note, post-mortem and README in English; read one section of a rulebook or regulatory standard a week; and publish something short every quarter. The habit matters more than the audience.

---

## Critical Path (Summary)

The spine, in dependency order. Every specialization runs through all of it:

**Python → APIs & backend services → Finance & accounting fundamentals → Payment systems & money movement → Ledgers & double-entry design → Transactions & data consistency → Security fundamentals & threat modeling → Distributed systems → Applied cryptography → Financial regulation & compliance → Event-driven systems & event sourcing → Operational resilience & SRE → Financial systems architecture → Capstone**

With SQL, Git, Linux and probability as ungated starting nodes, testing and Docker alongside the backend work in Phase 1, and technical leadership after architecture.

Two observations about this ordering. The ledger sits in Phase 2, ahead of every rail, market and model, and that placement is deliberate: every later course either moves money into a ledger, reports out of one, or makes decisions about the money in it, and engineers who learn the rails first tend to build systems whose books cannot be proven. Second, Financial regulation & compliance looks like a soft node next to distributed systems and cryptography, and it is the one most often skipped. In this field it is load-bearing: it decides what the system must log, what it must be able to prove and what it must never do, which makes it an input to the design rather than a review after it.

---

## Specializations, Phase by Phase

Each specialization is the spine plus the branch courses below. Phases 0 and 7 are spine only, so every specialization shares them.

| Phase | Spine (every specialization) | Payments & banking platforms | Trading & market systems | Risk, fraud & compliance | Digital assets & tokenization |
|---|---|---|---|---|---|
| P0 | Python, SQL & data access, Git & version control, Linux & CLI, Probability & statistics |  |  |  |  |
| P1 | Finance & accounting fundamentals, APIs & backend services, Testing & code quality, Docker & CI/CD | Java & the JVM | C++ |  |  |
| P2 | Payment systems & money movement, Ledgers & double-entry design, Transactions & data consistency, Security fundamentals & threat modeling |  | Financial markets & instruments | Machine learning |  |
| P3 | Distributed systems, Applied cryptography, Financial regulation & compliance | Card payments & processing, ISO 20022 & bank messaging | Market microstructure & trading, Financial time series | Financial data engineering |  |
| P4 | Event-driven systems & event sourcing | Instant payments & real-time rails, Open banking & open finance APIs, Key management & HSM/KMS | Derivatives pricing & numerical methods, Market data & FIX protocol, Low-latency systems | Credit risk & scoring models, KYC, AML & transaction monitoring | Key management & HSM/KMS, Blockchain & distributed ledgers |
| P5 | Operational resilience & SRE | Reconciliation & settlement, Core banking & product engines, PCI DSS & payment data security | Backtesting & research infrastructure, Matching engines & exchange design | Fraud detection systems, Model risk management & explainability | Smart contracts & on-chain security, Wallets, custody & key ceremonies |
| P6 | None | Cross-border payments & FX, Embedded finance & BaaS, Agentic commerce & AI payments | Execution algorithms & TCA, Market risk & portfolio analytics | Graph analytics for financial crime, Regulatory reporting & data lineage, LLMs & agents in regulated finance | Stablecoins & tokenized assets, DeFi protocols & on-chain markets, On-chain compliance & analytics |
| P7 | Financial systems architecture, Capstone: FinTech system, Technical leadership |  |  |  |  |

English working fluency and Post-quantum cryptography are electives (the second open to Payments and Digital assets) and sit outside this count.

---

## Books, Essential Reading

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Designing Data-Intensive Applications**, 2nd ed., Kleppmann & Riccomini | P2 | `critical` | (paid) | Transactions, replication, logs and consistency: the systems half of this path in one book. The second edition (2026) supersedes the first. |
| 2 | **Payments Systems in the U.S.**, Benson, Loftesness & Jones | P2 | `critical` | (paid) | US-centred but the clearest single account of how each rail works, settles and earns. The concepts transfer to every market. |
| 3 | **Serious Cryptography**, 2nd ed., Aumasson | P3 | `critical` | (paid) | Cryptography for engineers who must use it correctly rather than invent it. |
| 4 | **The Anatomy of the Swipe**, Siddiqui | P3 | `critical` | (paid) | Payments specialization. One card transaction followed from tap to settlement. |
| 5 | **Trading and Exchanges**, Harris | P3 | `critical` | (paid) | Markets specialization. How markets actually work, from the people and incentives up. |
| 6 | **Options, Futures, and Other Derivatives**, Hull | P2 | `critical` | (paid) | Markets specialization. The reference the industry trains on; keep it for the pricing and risk phases too. |
| 7 | **Financial Data Engineering**, Khraisha | P3 | `critical` | (paid) | Risk specialization. The one book written at the intersection of data engineering and finance. |
| 8 | **Credit Risk Analytics**, Baesens, Rösch & Scheule | P4 | `critical` | (paid) | Risk specialization. Credit models framed by the regulation that governs them. |
| 9 | **Bitcoin and Cryptocurrency Technologies**, Narayanan et al. | P4 | `critical` | (free) | Digital assets specialization. Rigorous foundations, free as a PDF from the authors. |
| 10 | **Advances in Financial Machine Learning**, López de Prado | P5 | `critical` | (paid) | Markets specialization. Why backtests overfit and how to stop fooling yourself. |
| 11 | **Staff Engineer**, Will Larson | P7 | `desirable` | (free; paid print) | Free at staffeng.com. For the individual-contributor leadership path. |

---

## Certifications

Blunt assessment: finance is more credential-conscious than most fields on this site, but for engineering roles no certificate substitutes for shipped work. A credential tells a hiring manager you know the vocabulary; a ledger with a reconciliation report tells them you can be trusted with money.

Where certifications do carry weight:
- **Risk, fraud & compliance:** ACAMS's CAMS is widely recognised in AML and financial crime teams, and GARP's FRM in risk functions. Both are worth it if you are moving toward those functions, and optional for engineers who build their systems.
- **Trading & market systems:** the CFA programme is a multi-year finance credential that engineers rarely need. The CQF (Certificate in Quantitative Finance) is the closer match for quantitative developers. Neither is required to build trading systems.
- **Payments & banking platforms:** PCI qualifications such as QSA and ISA matter only if you want to perform or run assessments. Scheme, Swift and processor training is useful for the content and rarely asked for as a credential.
- **Digital assets & tokenization:** no credential carries weight. Reputation comes from published audits, audit-contest results and open-source work.
- **Security and cloud:** the certifications discussed in the AI Security roadmap apply here unchanged.

What substitutes for a credential in every specialization: a public repository with a double-entry ledger, its property-based tests and a month-end reconciliation report; a fraud or credit model with an honest out-of-time evaluation and a validation report; or a design document for a regulated system that someone in compliance has reviewed.

---

## Cost & Time

**Money.** Most resources on this roadmap are free: regulators, standard bodies and central banks publish their material openly, payment and open banking sandboxes are free, and blockchain testnets cost nothing. The essential books are mostly paid; buy each as its phase starts rather than all at once. Cloud costs for the projects are small if you shut things down. The large costs, if you choose them, are certifications such as CAMS, FRM or CFA, which run to hundreds or thousands of dollars each; check current prices before committing.

**Time.** Each phase is a quarter of consistent part-time study, so one specialization from Phase 0 to Phase 7 is eight quarters, about two years. Someone already working as a backend engineer will move through Phases 0 and 1 faster and should tick those nodes off rather than repeat them; the finance and accounting course is the one not to skip, however experienced you are as an engineer. The capstone deserves a genuine month of the final quarter.

**Where the time actually goes.** Expect much less of it on the happy path than you would guess. Moving money when everything works is easy; most of the effort in this roadmap goes into what happens when a partner times out, a file arrives twice, a settlement does not match, or a regulator asks how a number was produced. That ratio is the job, not a failure of the plan.

---

## Sources & Notes

Resource names, course titles and prices change often. Verify before paying for anything. Where a specific course title could not be confirmed, this document names the provider and topic rather than inventing a title.

**Regulatory and standards facts, checked on 2026-10-25.** These move every year; re-check before relying on one.
- **EU DORA** (Regulation (EU) 2022/2554): applicable since 17 January 2025.
- **EU PSD3 and Payment Services Regulation:** provisional political agreement on 27 November 2025, final texts endorsed by member states' representatives in April 2026; formal adoption and publication were still pending when this was written.
- **EU MiCA** (Regulation (EU) 2023/1114): fully applicable since 30 December 2024. The EU Transfer of Funds Regulation (EU) 2023/1113 applies the travel rule to crypto-asset transfers.
- **EU AML package:** the AML Regulation (EU) 2024/1624 applies from 10 July 2027, with the new EU Anti-Money Laundering Authority (AMLA) taking on direct supervision of selected institutions after that.
- **Chile:** the Fintech Law (Ley 21.521) was published on 4 January 2023 and created the open finance system (Sistema de Finanzas Abiertas). The CMF regulated it with NCG 514 (2024) and, on 1 June 2026, issued NCG 569, which adds technical standards and moves the system's entry into operation to July 2027.
- **US model risk:** SR 26-2, Revised Guidance on Model Risk Management (17 April 2026, Federal Reserve, OCC and FDIC), supersedes SR 11-7 (2011) and SR 21-8.
- **US stablecoins:** the GENIUS Act was signed on 18 July 2025. Implementing rules were proposed by several agencies in 2026 but were not final at the one-year mark; the law takes effect on the earlier of 18 January 2027 or 120 days after final rules are issued.
- **Swift:** November 2025 was set as the end of MT and MX (ISO 20022) coexistence for cross-border payment instructions.
- **PCI DSS:** v4.0.1 (June 2024) is the current version; its future-dated requirements became mandatory on 31 March 2025.
- **Open banking security:** the OpenID Foundation approved the FAPI 2.0 Security Profile and Attacker Model as final specifications in February 2025.
- **Post-quantum cryptography:** NIST published FIPS 203, 204 and 205 in August 2024. The BIS Innovation Hub published Project Leap phase 2, testing post-quantum signatures in a central-bank payment system, in December 2025.
- **Agentic payments:** Visa Intelligent Commerce and Mastercard Agent Pay were announced in April 2025 and Google's Agent Payments Protocol (AP2) in September 2025.
- **Book editions:** Designing Data-Intensive Applications 2nd ed. (2026), Mastering Ethereum 2nd ed. (2025), Serious Cryptography 2nd ed. (2024), Mastering Bitcoin 3rd ed. (2023).

**Demand evidence.** Every figure in the Executive Summary is recorded, with its source, edition, horizon and geography, in `.claude/skills/career-roadmaps/references/market-claims-ledger.md`. The regional IDB and Finnovista report on Latin American fintech could not be retrieved from its publisher on 2026-10-25, so none of its figures is cited here.
