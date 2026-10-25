# Data Engineering & Platforms Roadmap
## Building the Data Systems Everything Else Runs On

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no particular background in data engineering. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis rather than a fixed course order.

**What the job actually is.** Data engineers and data platform engineers build and run the systems that move, store, model, test and serve an organisation's data: pipelines, warehouses and lakehouses, streams, and the platforms that analytics, machine learning and AI applications are built on. It is not data science, which asks questions of the data, and it is not business intelligence, which presents the answers, though it serves both. The product is data that other people can trust without having to check it themselves.

**Trust is the discipline; volume is the easy part.** That claim shapes this entire roadmap. Every dashboard, model and AI assistant downstream inherits whatever errors the data carries, and data fails silently: a broken join or a late file produces plausible numbers, not an exception. So data modeling sits in Phase 1, data quality in Phase 3, observability and contracts in Phase 4, and the capstone is not finished until its tests run in CI and its consumers have a written contract. An engineer who can prove a dataset is right is worth several who can make a pipeline faster.

**Its own path, split out of Edge AI.** This material was the fourth specialization of the Edge AI roadmap ("ML platform & data infra"), which meant it inherited that path's spine: a reader who chose it was told C++, the math-for-ML refresher, deep learning and ONNX model export were required. None of those are on this career. It is the same divergence that made Applied AI its own path, so in October 2026 the track left Edge AI and grew into a full curriculum here. Eight courses moved with it (data pipelines, the lakehouse, streaming, feature stores, IoT time-series data, Kubernetes, cloud ML platforms and the data capstone). Measured by course ids, this graph shares 12 of its 55 courses with Edge AI (0.22 of this graph, 0.24 of Edge AI's) and 15 with Applied AI (0.27 and 0.38), well under the half that would make it a specialization of either.

**Why not "Big Data Specialist".** The employer survey cited below uses that title, and it is the strongest demand signal on this site. But job titles change faster than skills, and "big data" is a label from the 2010s for work that is now simply data engineering: most of it is not about size but about correctness, cost and change. This roadmap is named for the skills and translates the survey's titles into its courses.

**Honest counterpoint, read this before committing.** Tools in this field turn over fast: the stack of ten years ago is mostly gone, and today's warehouse, orchestrator and table format will not all survive the next ten. Writing SQL and pipeline code is also among the tasks generative AI accelerates most, and routine administration is shrinking as managed cloud services absorb it (see the counter-signals below). What holds its value is judgement that tools do not supply: modeling, data quality, distributed-systems reasoning, cost, governance, and knowing what the data means in a specific business. This roadmap is built around those and treats every tool as replaceable.

**How the plan is paced.** Eight phases, Phase 0 to Phase 7. Each phase is a quarter, about three months of consistent part-time study, so one specialization followed end to end is eight phases, about two years. A specialization is the spine plus that specialization's branch courses, and every specialization takes 2 to 5 courses in every phase, so no quarter is idle and none is overloaded. Electives (English working fluency and AI-assisted dev workflows) run alongside and do not count toward that load.

**Four specializations.** Pick one as your plan and borrow single courses from a second rather than spreading across all of them:
- **Batch engineering & analytics**: the broad one and the largest employer base. Analytics engineering with dbt, the semantic layer, performance tuning, enterprise modeling, product analytics data and the frontier of AI agents that query data.
- **Streaming & real-time data**: change data capture, stateful stream processing, real-time analytics stores, event-driven systems, running Kafka in production, and industrial and IoT data. The specialization closest to the sensors, plants and fleets of the Edge AI and Control paths.
- **Data & ML platform**: the infrastructure other teams build on. MLOps, feature stores, infrastructure as code, Kubernetes, data for LLM applications, cloud ML platforms and self-serve platform engineering.
- **Data quality, governance & privacy**: catalogs, contracts and lineage, privacy engineering, access control, master data, data protection law and data governance for AI. The smallest by headcount, and the one regulated organisations cannot do without.

For a backend engineer moving laterally, **Batch engineering & analytics** is the shortest hop and the widest market. The most durable borrow is **Data contracts & lineage** from the governance specialization: it is the habit that keeps a batch platform trustworthy as it grows. In Chile, the **Streaming & real-time data** specialization with *Industrial data & OT integration* is where mining and energy data lives.

**Where the demand evidence points.** Every figure here comes from the sources registered in the roadmap standards (`market-sources.md`, checked on 2026-09-26, with the BLS database occupations and the Chilean mining data figures read on 2026-10-25) and carries its date, horizon and geography. Job titles are translated into the courses in this graph that serve them.

*Medium term (2 to 5 years):*
- **Distributed data processing, Lakehouse & warehouse, Real-time streaming** (the spine): the [WEF Future of Jobs Report 2025](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf) (Jan 2025, survey of 1,000+ employers in 55 economies, horizon 2030) ranks Big Data Specialists as the fastest-growing job in net percentage terms, and AI and big data as the fastest-growing skill. These are employer expectations, not observed hiring.
- **Data modeling, Analytics engineering & dbt, Semantic layer & metrics** (Batch): the same report ranks Data Warehousing Specialists sixth and Data Analysts and Scientists eleventh among the fastest-growing jobs, and its United States profile names Big Data Specialists and Data Warehousing Specialists among the fastest-growing there. Data Engineers appear among the growing roles too, but below the top 15; no source registered for this site measures "data engineer" as a title on its own.
- **MLOps fundamentals, Feature store & training data, Data pipelines for LLM applications, Cloud ML platforms** (Data & ML platform): the [McKinsey Technology Trends Outlook 2026](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20top%20trends%20in%20tech%202026/mckinsey%20technology%20trends%20outlook%202026.pdf) (Sep 2026, 2024 to 2025 job postings, mainly English-speaking countries) counts AI infrastructure postings up 47%, nearly triple their 2022 level. [BLS](https://www.bls.gov/ooh/math/data-scientists.htm) projects data scientists, the main consumers of this platform, to grow 34.6% over 2025 to 2035 (US).
- **Storage engines & file formats, Data architecture**: [BLS](https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm) projects database architects to grow 9% over 2025 to 2035 (US), and says they will be critical as organisations adopt AI to process their data, while database administrators stay flat (0%) because cloud operation lets fewer administrators serve more companies. Design grows; administration does not.
- **Geography:** in the EU, [Cedefop](https://www.cedefop.europa.eu/en/news/cedefop-updates-skills-forecast-new-data-guide-europes-skills-and-labour-market-policy-2035) (Jul 2026, horizon 2035) projects ICT professionals and technicians to grow about 2.5% a year, from 1.3% in Germany to 7.8% in Romania. In Germany, [Bitkom](https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert) (Sep 2026) counts 79,000 unfilled IT positions, with IT administration and operations (26%) and cloud and infrastructure (14%) among the most sought profiles. In Chile, the [Consejo de Competencias Mineras and Fundación Chile workforce study 2025 to 2034](https://ccm-eleva.cl/wp-content/uploads/2025/12/Estudio-Fuerza-Laboral-de-la-Gran-Mineria-2025-2034.pdf) (Dec 2025) reports Big Data implemented or piloted in 60% of extraction, 68% of processing, 52% of maintenance and 77% of integrated operations centres among the mining companies that answered its technology forms (a small sample); [ILIA 2025](https://www.cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence-though) (CENIA and ECLAC) places Chile first in the region on its human-talent subdimension. Chile's new personal data protection law (Ley 21.719) is regulatory context for governance work, not a demand figure.

*Counter-signals:* data work is among the most exposed to AI acceleration. The CENIA study reported in [ILIA 2025](https://indicelatam.cl/wp-content/uploads/2026/03/ILIA-2025.-Key-Findings-Applied-Artificial-Intelligence-and-Human-Talent-compressed.pdf) estimates that generative AI could speed up 80% of the tasks of Chilean systems analysts and 87% of those of software developers; that is acceleration potential, not displacement. BLS projects computer programmers to decline 7% over 2025 to 2035 and database administrators not to grow at all, and a [WEF and PwC paper](https://reports.weforum.org/docs/WEF_Artificial_Intelligence_and_the_Future_of_Entry_Level_Work_2026.pdf) (Jun 2026) cites a 16% decline in entry-level jobs in AI-exposed US fields since late 2022, while noting that AI's role in it is contested. The routine end of this job is shrinking; the judgement end is not.

*Long term (5 to 15 years):* scenario territory; no quantitative forecast reaches past 2035. McKinsey's [Agents, Robots, and Us](https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/agents%20robots%20and%20us%20skill%20partnerships%20in%20the%20age%20of%20ai/agents-robots-and-us-skill-partnerships-in-the-age-of-ai.pdf) (Nov 2025, US) finds that more than 70% of the skills employers seek are used in both automatable and non-automatable work. In the most accelerated of the WEF's [Four Futures](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026), new roles scale around people who orchestrate AI agents; those agents answer questions from data, and are only as good as the modeling, quality and governance underneath them. That is the bet this roadmap makes: the more analysis is automated, the more the trustworthiness of the data becomes the job.

**Three priority levels** run throughout:
- `critical`: the non-negotiable spine for your chosen track.
- `desirable`: high-ROI competitive edge, but not blocking.
- `frontier`: long-horizon bets that are exciting and unproven.

**Resource tags:**
- **Best match**: the first resource for every node, and the same one the curriculum graph lists first. Start there.
- Coursera: available on Coursera, usually free to audit or included in Coursera Plus
- (free): free
- (paid): paid; check the current price before buying

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Tracks`, `Resources`, a `Study approach` and a `Project`. The project is the proof of competence. In this field a public pipeline with its tests running in CI, a data contract and a cost report outranks most certificates, because it shows the data can be trusted and afforded, not only moved.

**Dated facts.** Where a node names a regulation, deadline, certification or edition, it was checked on 2026-10-25 and is listed under *Sources & Notes*. Re-check before relying on one.

---

## PHASE 0: Foundations

### Python `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Testing & code quality, Data pipelines & ELT, AI-assisted dev workflows, Distributed data processing, Machine learning
**Tracks:** All specializations
**Resources:**
- **Best match:** Coursera: Python for Everybody, UMich
- Automate the Boring Stuff (free)
- Polars user guide (free), why: a modern DataFrame library that teaches lazy, columnar thinking
**Study approach:** Python is the glue of data engineering: it calls APIs, reads files, drives orchestrators, defines tests and wraps the SQL that does the heavy lifting. Go past scripting into type hints, packaging, virtual environments and generators, so you can stream through a file larger than memory instead of loading it. Learn one DataFrame library well; Polars is a good choice because its lazy, columnar model is the same mental model as the warehouses and engines later in this path.
**Project:** Write a typed command-line tool that downloads a public dataset in pages, streams it to Parquet in fixed-size chunks without ever holding it all in memory, and logs row counts per chunk. Package it so it installs with one command, and include tests.

### SQL & data access `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Data modeling, Data pipelines & ELT, Storage engines & file formats, Change data capture
**Tracks:** All specializations
**Resources:**
- **Best match:** ThoughtSpot SQL tutorial, formerly Mode (free)
- Use The Index, Luke (free), why: indexes and plans are where SQL performance lives
- PostgreSQL docs (free)
**Study approach:** SQL is the working language of this path, not a prerequisite to get past. Learn joins and their failure modes (fan-out from a many-to-many join is the most common silent data bug there is), aggregation, window functions, CTEs, and how to read a query plan. Pay attention to NULL semantics and to grain: knowing exactly what one row means is the habit the rest of this roadmap depends on.
**Project:** Load a public dataset of at least a million rows into PostgreSQL. Write ten analytical queries including running totals and deduplication with window functions, find one join that silently duplicates rows and fix it, and make the slowest query ten times faster. Explain the plan before and after.

### Git & version control `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD, Testing & code quality, AI-assisted dev workflows
**Tracks:** All specializations
**Resources:**
- **Best match:** git-scm.com Pro Git book (free)
- GitHub Skills (free)
**Study approach:** Branches, rebase versus merge, pull requests and review, applied to everything: Python, SQL models, orchestration code and infrastructure. Data teams that treat SQL as something typed into a console end up with pipelines nobody can safely change, so every model and every schema change goes through review here.
**Project:** Put a collection of SQL queries you use under version control, organise them into a reviewed repository with a README, and open a pull request against yourself that changes one query's logic. Review it as if a stranger wrote it and write down how you would test the change.

### Linux & CLI `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD, AI-assisted dev workflows, Cloud data infrastructure
**Tracks:** All specializations
**Resources:**
- **Best match:** MIT Missing Semester (free), why: the fastest route from tourist to fluent
- Linux Journey (free)
**Study approach:** Enough shell to run, inspect and debug data jobs: processes, cron, environment variables, disk and memory usage, networking basics and SSH. This is not systems administration. The goal is that a job killed for running out of memory, a full disk on a worker or a file that is not where it should be never blocks you.
**Project:** Set up a cheap VPS that runs a nightly cron job downloading a public file, validating its row count against the previous day, and writing it to object storage. Make it alert you when it fails or when the count changes by more than a threshold.

### Probability & statistics `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Machine learning, Event tracking & product analytics
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Think Stats (free)
- Coursera: Statistics with Python, UMich
- StatQuest (free), why: short, visual, and enough for applied work
**Study approach:** The statistics a data engineer needs are about judgement: whether a metric really moved, whether a data quality alert is noise, whether an average hides two populations, and why a sampled check can or cannot be trusted. Learn distributions, sampling, aggregation pitfalls such as Simpson's paradox, confidence intervals and significance. This is not a mathematics course; it is the literacy that keeps a pipeline's monitoring from crying wolf.
**Project:** Take a daily metric from a public dataset, build a simple anomaly check (for example a rolling mean and standard deviation), and measure how often it alerts on normal days. Tune it to a stated false-alarm rate and write up the trade-off.

### English working fluency `desirable`
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Any structured B2 to C1 program
- Practice: write every design doc and README in English (free)
**Study approach:** A continuous lane rather than a phase. Tool documentation, open-source issue trackers, conference talks and most of the practitioner writing on data engineering are in English, and the largest remote data job markets work in it. Reading is the low bar; the return comes from writing design docs, data contracts and incident reviews that other teams act on.
**Project:** Publish three technical write-ups in English over twelve months, for example a modeling decision, a data incident post-mortem and a cost optimisation. The point is the output habit, not the audience.

---

## PHASE 1: Pipelines & modeling

### Docker & CI/CD `critical`
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** Real-time streaming, Orchestration & scheduling, Cloud data infrastructure, MLOps fundamentals, Distributed systems, IaC & policy as code, Kubernetes for ML
**Tracks:** All specializations
**Resources:**
- **Best match:** Docker getting started (free)
- GitHub Actions docs (free)
**Study approach:** Containers, Compose, CI pipelines and reproducible environments. Data code ships like any other code: the same pipeline that runs unit tests will later run data tests, contract checks and schema-change validation, so build it properly now. Learn to run the whole local stack (a database, object storage, an orchestrator) with one Compose file.
**Project:** Containerize the Python tool from Phase 0 together with PostgreSQL and MinIO in a Compose file, run its tests in GitHub Actions on every pull request, and publish the image on tagged releases.

### Testing & code quality `critical`
**Prerequisites:** Python, Git & version control
**Unlocks:** Data quality & testing, Analytics engineering & dbt
**Tracks:** All specializations
**Resources:**
- **Best match:** pytest docs (free)
- Book: Architecture Patterns with Python, testing chapters (free online), why: it treats external systems as a design problem
- Hypothesis property-based testing docs (free)
**Study approach:** Unit and integration tests, fixtures and fast suites, applied to transformations: given this small, known input table, the output must be exactly this. Learn to test SQL as well as Python, to build fixtures that cover the edge cases (nulls, duplicates, late records, time zones), and to keep the suite fast enough that people run it.
**Project:** Write a test suite for three transformations from your SQL project using small fixture tables that include nulls, duplicates and a time-zone edge case. Run it in CI and show one test catching a bug you introduce on purpose.

### Data modeling `critical`
**Prerequisites:** SQL & data access
**Unlocks:** Lakehouse & warehouse, Analytics engineering & dbt, Data governance & catalogs, Enterprise data modeling, Master & reference data, Domain vertical, Data products & data mesh
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: The Data Warehouse Toolkit, Kimball & Ross, 3rd ed. (paid), why: dimensional modeling still underpins every analytical layer
- Kimball Group design tips archive (free)
- dbt guide to modeling layers (free)
**Study approach:** Modeling is the decision that makes a dataset usable for years or a liability within months. Learn entities and relationships, normalization and when to denormalize, dimensional modeling with facts and dimensions, grain, surrogate keys, and slowly changing dimensions. Kimball remains the reference because dimensional modeling still underpins almost every analytical layer, whatever tool builds it.
**Project:** Take an operational dataset (orders, trips or sensor events) and design a dimensional model for it: declare the grain of each fact table, design the dimensions including one slowly changing dimension, and document three business questions the model answers and one it deliberately does not.

### Data pipelines & ELT `critical`
**Prerequisites:** Python, SQL & data access
**Unlocks:** Lakehouse & warehouse, Distributed data processing, Real-time streaming, Orchestration & scheduling, Data quality & testing, Analytics engineering & dbt, Data governance & catalogs, Data pipelines for LLM applications
**Tracks:** All specializations
**Resources:**
- **Best match:** Data Engineering Zoomcamp, DataTalksClub (free), why: an end-to-end project course that runs yearly and has a self-paced option
- Book: Fundamentals of Data Engineering, Reis & Housley (paid)
- dbt docs (free)
**Study approach:** Use the Data Engineering Zoomcamp as the hands-on backbone (ingestion, warehouse, batch) and read *Fundamentals of Data Engineering* alongside it for the lifecycle vocabulary. Then concentrate on what separates a pipeline from a script: incremental loads, idempotent reruns, backfills, and handling late or duplicated source data. Add dbt tests from the first transform rather than retrofitting them.
**Project:** A scheduled pipeline that ingests a public, messy dataset (sensor logs or a transit feed), lands it raw, and transforms it with dbt into tested tables. Show that rerunning any day produces the same result, and that a backfill of a past month works without duplicating data.

### AI-assisted dev workflows `desirable`
**Prerequisites:** Linux & CLI, Git & version control, Python
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Anthropic Claude Code docs (free)
- Anthropic prompt engineering guide (free)
- MCP docs (free)
**Study approach:** An elective, and an increasingly practical one. Coding assistants and agents now write a large share of SQL, pipeline code and tests, so the skill is directing them well and reviewing what they produce: checking joins for fan-out, filters for off-by-one dates, and tests that actually test something. Treat machine-written data code as a colleague's pull request, never as finished work.
**Project:** Have an assistant write a dbt model and its tests for a question on your dataset. Review it as a pull request, record every defect you found, and measure how many the generated tests would have caught.

---

## PHASE 2: Storage & processing

### Storage engines & file formats `critical`
**Prerequisites:** SQL & data access
**Unlocks:** Query & Spark performance tuning, Real-time analytics stores
**Tracks:** All specializations
**Resources:**
- **Best match:** CMU 15-445 Database Systems, Andy Pavlo (free lectures), why: the clearest course on how databases store and find data
- Book: Database Internals, Petrov (paid)
- Apache Parquet and Arrow docs (free)
**Study approach:** Learn how data is actually stored and found, because it explains almost every performance problem later. Row versus column storage, B-trees and LSM trees, compression and encoding, Parquet's row groups and statistics, Arrow's in-memory format, partitioning, and why many small files are slow. Pavlo's CMU lectures are the clearest course on the subject; *Database Internals* is the reference.
**Project:** Write the same dataset as CSV, row-oriented Parquet with poor settings and well-tuned Parquet with sorting and sensible row groups. Benchmark three queries against each with DuckDB, explain the differences using file statistics, and include a small-files experiment.

### Lakehouse & warehouse `critical`
**Prerequisites:** Data pipelines & ELT, Data modeling
**Unlocks:** Feature store & training data, Cost & FinOps for data, Data architecture, Capstone: Data platform
**Tracks:** All specializations
**Resources:**
- **Best match:** Apache Iceberg docs (free)
- Delta Lake docs (free)
- DuckDB docs (free), why: a local engine for learning lakehouse queries without a cloud bill
**Study approach:** Read the Iceberg docs first for the table-format concepts (snapshots, partition evolution, time travel), then Delta for comparison; the ideas transfer. Learn what a lakehouse adds to object storage (transactions, schema evolution, time travel) and what a managed warehouse adds on top of that. Run everything locally (DuckDB or Spark against MinIO) before touching a managed service.
**Project:** Turn the Phase 1 pipeline's output into an Iceberg (or Delta) lakehouse on local object storage. Demonstrate schema evolution, time travel to reproduce an old report exactly, and a partitioning change measured by query time. Document when a plain warehouse would have been the simpler answer.

### Distributed data processing `critical`
**Prerequisites:** Python, Data pipelines & ELT
**Unlocks:** Query & Spark performance tuning, Cost & FinOps for data
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Learning Spark, 2nd ed., Damji et al. (free from Databricks), why: written by Spark's maintainers
- Apache Spark docs, tuning guide (free)
- DuckDB docs (free)
**Study approach:** Learn Spark's execution model (jobs, stages, tasks), what causes a shuffle, how joins are executed at scale, how skew and memory pressure show up, and how to read the Spark UI. Then learn the opposite lesson: a single machine with DuckDB or Polars handles far more data than most teams assume, and choosing it when it fits is part of the skill. Most of this course is learning to move less data.
**Project:** Process the same multi-gigabyte dataset with Spark and with DuckDB, run an aggregation and a large join with each, and compare runtime, cost and code. Then create a skewed key on purpose, show the problem in the Spark UI and fix it.

### Real-time streaming `critical`
**Prerequisites:** Data pipelines & ELT, Docker & CI/CD
**Unlocks:** Change data capture, Stateful stream processing, Distributed systems, IoT & time-series data, Event-driven systems & event sourcing, Streaming platform operations
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Kafka: The Definitive Guide, 2nd ed. (free from Confluent), why: the reference, free in electronic form
- Confluent Kafka tutorials (free)
- Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed., stream chapters (paid)
**Study approach:** Learn logs and topics, partitions and keys, consumer groups and offsets, delivery semantics (at-most-once, at-least-once, effectively-once), and the duality of streams and tables. The streaming specialization goes deep into stateful processing; every data engineer needs this much to move data in seconds and to understand the systems that feed their batch pipelines. Learn delivery semantics by breaking them: kill a consumer mid-run and count what was lost or duplicated.
**Project:** Publish simulated device events to Kafka, consume them into your lakehouse in small batches, and measure end-to-end latency. Kill the consumer mid-run, restart it, and show exactly which events were duplicated or lost and how you made the sink idempotent.

### Machine learning `critical`
**Prerequisites:** Python, Probability & statistics
**Unlocks:** MLOps fundamentals, Data pipelines for LLM applications
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Coursera: Machine Learning Specialization, Andrew Ng
- Book: Designing Machine Learning Systems, Chip Huyen (paid), why: written from the data side of ML
- Book: Hands-On Machine Learning, Geron (paid)
**Study approach:** A data platform engineer does not need to invent models, but does need to know what a model does with data: features and labels, train and test splits, leakage (the most common way a pipeline quietly ruins a model), evaluation metrics and drift. Huyen's book is written from the data side of machine learning, which is the side this specialization owns.
**Project:** Train a simple model on a public dataset twice: once with a split that leaks future information and once with a correct time-based split. Show the difference in measured performance and write a one-page explanation of how a pipeline could cause the leak without anyone noticing.

---

## PHASE 3: Orchestration, quality & cloud

### Orchestration & scheduling `critical`
**Prerequisites:** Data pipelines & ELT, Docker & CI/CD
**Unlocks:** DataOps & data observability, Data contracts & lineage, Capstone: Data platform
**Tracks:** All specializations
**Resources:**
- **Best match:** Dagster University (free), why: teaches asset-based orchestration, the direction the field has moved
- Apache Airflow docs (free)
- Astronomer Airflow guides (free)
**Study approach:** Orchestration is the control plane of a batch platform. Learn dependencies, schedules and sensors, retries and timeouts, backfills, and why every task must be idempotent. Dagster University teaches asset-based orchestration (declaring the data you want rather than the steps to run), which is the direction the field has moved; learn Airflow too, because it runs a large share of existing platforms.
**Project:** Move the Phase 1 pipeline under Dagster or Airflow with explicit dependencies, retries, a sensor that waits for a late source file, and a backfill command. Break a task on purpose and show that a rerun recovers without duplicating data.

### Data quality & testing `critical`
**Prerequisites:** Data pipelines & ELT, Testing & code quality
**Unlocks:** DataOps & data observability, Data contracts & lineage, Domain vertical, AI agents for data work, Data products & data mesh, Capstone: Data platform
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Data Quality Fundamentals, Moses, Gavish & Vorwerck (paid), why: quality treated as an engineering practice
- dbt data tests docs (free)
- Great Expectations or Soda docs (free)
**Study approach:** Bad data fails silently, which is why it is tested rather than trusted. Learn the families of checks (freshness, volume, schema, uniqueness, referential integrity, distribution), where each belongs (at ingestion, in the transformation layer, before publication), how to quarantine bad records instead of failing everything, and who should be alerted when a check fails. *Data Quality Fundamentals* treats this as an engineering practice; dbt tests and Great Expectations or Soda are the common tools.
**Project:** Add a layered quality suite to your orchestrated pipeline: schema and volume checks at ingestion, uniqueness and relationship tests in dbt, and a distribution check before publication. Inject five realistic defects and show which layer catches each and what the alert says.

### Cloud data infrastructure `critical`
**Prerequisites:** Linux & CLI, Docker & CI/CD
**Unlocks:** IaC & policy as code, Kubernetes for ML, Cost & FinOps for data, Streaming platform operations, Cloud ML platforms, Data security & access control
**Tracks:** All specializations
**Resources:**
- **Best match:** Cloud provider data engineering learning paths, such as AWS Skill Builder or Google Cloud Skills Boost (free tier), why: learn the cloud your target employers use
- Book: Fundamentals of Data Engineering, cloud chapters (paid)
- Provider architecture centers, analytics reference designs (free)
**Study approach:** Most data platforms now run in a public cloud. Learn object storage and its consistency and pricing, a managed warehouse and a managed processing service, networking basics (VPCs, private endpoints, egress), identity and permissions, and how the pricing model of each service turns design choices into a bill. Pick the cloud your target employers use and go deep on one before comparing.
**Project:** Deploy your lakehouse pipeline to one cloud using object storage, a managed warehouse or query engine, and least-privilege service identities. Set a budget alert, run the pipeline for a week, and write a one-page cost breakdown.

### Analytics engineering & dbt `critical`
**Prerequisites:** Data modeling, Data pipelines & ELT, Testing & code quality
**Unlocks:** Semantic layer & metrics, Enterprise data modeling, Event tracking & product analytics
**Tracks:** Batch engineering & analytics
**Resources:**
- **Best match:** dbt Learn fundamentals course (free), why: short, official and hands-on
- Book: Analytics Engineering with SQL and dbt, Machado & Russa (paid)
- dbt best practice guides (free)
**Study approach:** Analytics engineering treats transformations as software: version-controlled SQL models in layers (staging, intermediate, marts), tests, documentation, incremental models and reusable macros. The official dbt fundamentals course is short and hands-on; the O'Reilly book adds the modeling discipline. Learn to keep models small and named for what they mean, because the project will outlive its first author.
**Project:** Build a dbt project on your warehouse with staging, intermediate and mart layers, an incremental fact model, tests on every model, and published documentation with lineage. Have someone unfamiliar with it answer a business question using only the docs.

### Change data capture `critical`
**Prerequisites:** Real-time streaming, SQL & data access
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** Debezium docs and tutorial (free), why: the open-source standard for log-based CDC
- Book: Designing Data-Intensive Applications, 2nd ed., change data capture sections (paid)
- microservices.io transactional outbox pattern (free)
**Study approach:** Change data capture turns a database's change log into a stream, so downstream systems stay in sync without nightly full loads. Learn log-based capture with Debezium, initial snapshots, ordering and keys, handling deletes and schema changes, and the transactional outbox pattern for services that publish their own events. The DDIA chapters explain why the log is the right source of truth.
**Project:** Capture changes from a PostgreSQL database with Debezium into Kafka and apply them to a lakehouse table, including updates and deletes. Change the source schema mid-stream and show what breaks and how you recover.

### Stateful stream processing `critical`
**Prerequisites:** Real-time streaming
**Unlocks:** Real-time analytics stores
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** Book: Streaming Systems, Akidau, Chernyak & Lax (paid), why: the conceptual foundation, from the authors of the Dataflow model
- Apache Flink docs and training (free)
- Spark Structured Streaming guide (free)
**Study approach:** Stateful stream processing is where streaming becomes hard. Learn event time versus processing time, watermarks and late data, tumbling, sliding and session windows, stream-to-stream and stream-to-table joins, state backends and checkpoints, and what exactly-once actually guarantees. *Streaming Systems* gives the conceptual model from the authors of the Dataflow model; Flink's docs and training make it concrete.
**Project:** Write a Flink job that computes windowed aggregates over an event stream with out-of-order and late events, joins it to a slowly changing reference table, and survives a crash with no double counting. Measure latency and state size under load.

### MLOps fundamentals `critical`
**Prerequisites:** Machine learning, Docker & CI/CD
**Unlocks:** Feature store & training data, Cloud ML platforms, Data engine & synthetic data
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Coursera: Machine Learning in Production, DeepLearning.AI
- MLflow docs (free)
- MLOps Zoomcamp, DataTalksClub (free)
**Study approach:** Experiment tracking, model registries, reproducible training pipelines, deployment patterns and monitoring for drift and performance. The platform specialization builds the infrastructure this practice runs on, so learn it from the platform's side: what metadata must be captured, where models and datasets are versioned, and how a training run is reproduced months later.
**Project:** Build a reproducible training pipeline that reads a versioned dataset from your lakehouse, logs runs and artifacts to MLflow, registers a model, and can reproduce any past run exactly from its recorded inputs. Demonstrate it by reproducing a run from a month earlier.

### Data governance & catalogs `critical`
**Prerequisites:** Data modeling, Data pipelines & ELT
**Unlocks:** Data privacy & PETs, Master & reference data, Data governance for AI
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** DAMA-DMBOK, Data Management Body of Knowledge, 2nd ed. (paid), why: the reference framework governance teams use
- DataHub or OpenMetadata docs (free)
- Book: Data Management at Scale, Strengholt, 2nd ed. (paid)
**Study approach:** Governance that only exists in a policy document does not change anything; this course is about governance that lives in tools and pipelines. Learn ownership and stewardship, business glossaries, metadata management and data catalogs, classification of sensitive data, and access policies. DAMA-DMBOK is the framework governance teams use; DataHub and OpenMetadata are open-source catalogs you can run.
**Project:** Deploy an open-source catalog over your warehouse, ingest metadata automatically from dbt and the orchestrator, assign owners, write glossary entries for ten key terms, and tag sensitive columns. Show a user finding and understanding a dataset without asking anyone.

---

## PHASE 4: Reliability & specialization

### Distributed systems `critical`
**Prerequisites:** Docker & CI/CD, Real-time streaming
**Unlocks:** Event-driven systems & event sourcing, Data architecture
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed. (paid), why: written for exactly this path
- MIT 6.5840 Distributed Systems (free lectures)
- AWS Builders' Library (free)
**Study approach:** Every data platform is a distributed system, and most of its incidents are distributed-systems failures in disguise: a partition that went stale, a retry that duplicated work, a consumer that fell behind. Learn replication, partitioning, consistency models, consensus, partial failure and backpressure. Kleppmann and Riccomini's second edition is written for exactly this path; MIT's 6.5840 lectures give the theory.
**Project:** Write a design review of your own platform as it stands: list every component that can fail independently, what happens to data correctness when each does, and which failures you have actually tested. Then test the two you had not.

### DataOps & data observability `critical`
**Prerequisites:** Orchestration & scheduling, Data quality & testing
**Unlocks:** Streaming platform operations, Data products & data mesh, Data architecture, Capstone: Data platform
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Fundamentals of Data Observability, Petrella (paid), why: observability treated as a design property rather than a product
- OpenLineage docs (free)
- Google SRE book (free)
**Study approach:** Running data as a production service. Learn to define SLAs and SLOs for datasets (freshness, completeness, correctness), lineage-aware alerting so one upstream failure does not page ten teams, incident response and post-mortems for data, CI/CD for pipelines, and safe rollout of schema changes. Petrella's book treats observability as a design property rather than a product to buy.
**Project:** Define SLOs for three published datasets, instrument your pipelines to measure them, and route alerts by lineage to the owning team. Run a simulated incident from detection to post-mortem, and add a CI check that blocks a breaking schema change.

### Semantic layer & metrics `desirable`
**Prerequisites:** Analytics engineering & dbt
**Unlocks:** AI agents for data work
**Tracks:** Batch engineering & analytics
**Resources:**
- **Best match:** dbt Semantic Layer and MetricFlow docs (free)
- Cube docs (free)
- Book: The Data Warehouse Toolkit, conformed dimensions chapters (paid)
**Study approach:** A semantic layer defines each metric once (what counts as revenue, an active user, a churned customer) and serves it consistently to dashboards, notebooks and AI assistants. Learn semantic models, metric definitions, dimensions and joins, caching and access control. It is the fix for three dashboards showing three different revenue numbers, and increasingly the grounding that makes AI query tools trustworthy.
**Project:** Define five business metrics in the dbt Semantic Layer or Cube on top of your marts, query them from a notebook and a BI tool, and show that both return identical numbers. Change one definition and show it propagates everywhere.

### Query & Spark performance tuning `critical`
**Prerequisites:** Distributed data processing, Storage engines & file formats
**Tracks:** Batch engineering & analytics
**Resources:**
- **Best match:** Apache Spark docs, performance tuning and Spark UI guides (free)
- Warehouse query profile docs, e.g. Snowflake and BigQuery (free)
- Book: High Performance Spark, Karau et al. (paid)
**Study approach:** Performance work in data is mostly about reading what the engine did. Learn to read warehouse query profiles and the Spark UI, partition pruning, clustering and sort keys, broadcast versus shuffle joins, skew, caching and materialization, and when to precompute. Measure cost alongside runtime: on a cloud warehouse, a faster query that scans more data can be the more expensive one.
**Project:** Take the five slowest or most expensive queries in your project, profile each, apply one change at a time (pruning, clustering, join strategy, materialization) and report runtime and bytes scanned before and after.

### IoT & time-series data `desirable`
**Prerequisites:** Real-time streaming
**Unlocks:** Industrial data & OT integration
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** TimescaleDB and InfluxDB docs (free)
- Eclipse Mosquitto MQTT tutorials (free)
- OPC UA specification overview (free), why: the protocol most plant equipment actually speaks
**Study approach:** MQTT with Mosquitto first (publish and subscribe, QoS levels, retained messages), then OPC UA for the information model plant equipment exposes. Store in TimescaleDB or InfluxDB and learn retention, downsampling and continuous aggregates. Test with the network pulled: edge buffering is where industrial data pipelines fail.
**Project:** An edge gateway that reads simulated OPC UA tags and MQTT sensors, buffers locally through a network outage, and syncs to a time-series database with downsampled rollups. Show the outage and the recovery on a dashboard.

### Real-time analytics stores `desirable`
**Prerequisites:** Stateful stream processing, Storage engines & file formats
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** ClickHouse docs and tutorials (free), why: open source and easy to run locally
- Apache Pinot docs (free)
- Apache Druid docs (free)
**Study approach:** Real-time analytics stores answer aggregate queries over data that is seconds old. Learn how ClickHouse, Druid and Pinot ingest from streams, what they pre-aggregate, how they index, and where they beat or lose to a warehouse on latency and cost. ClickHouse is open source and easy to run locally, which makes it the best place to start.
**Project:** Feed your event stream into ClickHouse, build a dashboard with sub-second aggregates over the last hour, and compare query latency and cost with the same queries on your warehouse. Write down which questions belong in each.

### Feature store & training data `desirable`
**Prerequisites:** Lakehouse & warehouse, MLOps fundamentals
**Unlocks:** Data engine & synthetic data
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Feast docs (free)
- Book: Designing Machine Learning Systems, Chip Huyen, why: the feature chapter frames the skew problem best
- Databricks feature engineering docs (free), why: where Tecton's managed feature platform ended up in 2025
**Study approach:** Read the features chapter of *Designing Machine Learning Systems* first, so the problem (training and serving skew, point-in-time leakage) is clear before the tool. Then the Feast quickstart against your own lakehouse. Build a leaky training set once, on purpose, and catch it.
**Project:** Feast on top of the Phase 2 lakehouse: offline and online stores, a point-in-time-correct training set, and an online lookup used by a served model. Include a test proving no future data leaks into training, and a backfill after a feature definition changes.

### IaC & policy as code `critical`
**Prerequisites:** Docker & CI/CD, Cloud data infrastructure
**Unlocks:** Self-serve data platform engineering
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Book: Terraform: Up & Running, Brikman, 3rd ed. (paid), why: the practical standard text
- OpenTofu and Terraform docs (free)
- Open Policy Agent docs (free)
**Study approach:** Every bucket, warehouse, cluster, role and permission in a data platform should exist because code says so. Learn Terraform or OpenTofu (state, modules, environments, drift), and policy as code with Open Policy Agent so that rules such as no public buckets or encryption required are checked in CI rather than in an audit. *Terraform: Up & Running* is the practical standard text.
**Project:** Rebuild your cloud data platform entirely from Terraform or OpenTofu with separate development and production environments, add three OPA policies checked in CI, and prove the point by destroying and recreating the development environment from code.

### Kubernetes for ML `critical`
**Prerequisites:** Docker & CI/CD, Cloud data infrastructure
**Unlocks:** Self-serve data platform engineering
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Kubernetes docs and tutorials (free)
- Book: Kubernetes in Action, 2nd ed., Lukša & Conner (paid), why: revised in 2026
- Spark on Kubernetes and Strimzi operator docs (free)
**Study approach:** Many data platforms run their own infrastructure on Kubernetes: Spark and Flink jobs, Kafka clusters, orchestrators and model servers. Learn the core objects, then operators (Spark on Kubernetes, Strimzi for Kafka, the Flink operator), batch jobs, resource requests and limits, autoscaling and GPU scheduling. Learn equally when a managed service is the better choice, because running stateful systems on Kubernetes has a real operational cost.
**Project:** Deploy Kafka with Strimzi and run a Spark job with the Spark operator on a local or free-tier cluster, with resource limits and monitoring. Write a one-page comparison of the operational work against the managed equivalents in your cloud.

### Data contracts & lineage `critical`
**Prerequisites:** Data quality & testing, Orchestration & scheduling
**Unlocks:** Data governance for AI
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** OpenLineage docs (free), why: the open standard most lineage tools emit
- Book: Driving Data Quality with Data Contracts, Andrew Jones (paid)
- Confluent Schema Registry docs (free)
**Study approach:** A data contract is an explicit agreement between the producer and consumers of a dataset on its schema, meaning, quality and change process, enforced in CI and at runtime rather than by goodwill. Learn contract specifications, schema registries and compatibility rules, and lineage from source to dashboard with OpenLineage, so the impact of a change is known before it ships. Jones's book covers contracts end to end.
**Project:** Write contracts for two datasets your pipelines produce, enforce them in the producer's CI and with a schema registry at runtime, and capture lineage with OpenLineage. Propose a breaking change and show the contract check blocking it and the lineage graph naming every affected consumer.

### Data privacy & PETs `critical`
**Prerequisites:** Data governance & catalogs
**Unlocks:** Data security & access control, Data protection law & compliance
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** Book: Practical Data Privacy, Katharine Jarmul (paid), why: written for data engineers and scientists rather than lawyers
- OpenDP docs (free)
- EDPB guidelines on pseudonymisation (free)
**Study approach:** Privacy engineering is building pipelines that collect less, protect what they keep and can forget on request. Learn data minimization, pseudonymization and anonymization and why many anonymized datasets can be re-identified, differential privacy for aggregate releases, consent and purpose tracking, and deletion that reaches every copy including backups and derived tables. Jarmul's book is written for data people rather than lawyers.
**Project:** Add a privacy layer to your platform: pseudonymize identifiers at ingestion, track purpose per dataset, release one aggregate table with differential privacy, and implement a deletion request that removes a person from every table and derived dataset, with a test proving it.

---

## PHASE 5: Scale, cost & controls

### Cost & FinOps for data `critical`
**Prerequisites:** Lakehouse & warehouse, Distributed data processing, Cloud data infrastructure
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Cloud FinOps, Storment & Fuller, 2nd ed. (paid), why: the FinOps Foundation's practice in book form
- FinOps Foundation framework (free)
- Warehouse cost and resource monitoring docs (free)
**Study approach:** In the cloud every design decision is also a cost decision, and data platforms are where the surprises happen: a query that scans a whole table every few minutes, a cluster nobody turned off, egress between regions. Learn the cost models of storage tiers, compute and slot-based warehouses, egress, and streaming clusters; how to attribute cost to teams and pipelines with tags and query metadata; and how to design to a budget. *Cloud FinOps* describes the practice; your warehouse's cost monitoring docs show where the numbers come from.
**Project:** Attribute a month of your platform's cloud cost to pipelines and datasets, find the three largest avoidable costs, fix them, and publish a before and after report with the monthly saving.

### Enterprise data modeling `desirable`
**Prerequisites:** Data modeling, Analytics engineering & dbt
**Tracks:** Batch engineering & analytics
**Resources:**
- **Best match:** Book: Building a Scalable Data Warehouse with Data Vault 2.0, Linstedt & Olschimke (paid), why: the method's own reference
- Kimball Group design tips archive (free)
- AutomateDV dbt package docs (free)
**Study approach:** Enterprise modeling is what happens when a warehouse has dozens of sources and decades of history. Learn Data Vault (hubs, links and satellites), historized and bitemporal tables, conformed dimensions shared across domains, and how to keep a model coherent while the organisation renames, merges and splits the things it models. Linstedt's book is the method's own reference; AutomateDV implements it in dbt.
**Project:** Integrate two sources that describe the same customers differently into a Data Vault layer with AutomateDV, build a dimensional mart on top, and show that a source change of key format is absorbed in the vault without touching the mart.

### Event tracking & product analytics `desirable`
**Prerequisites:** Analytics engineering & dbt, Probability & statistics
**Tracks:** Batch engineering & analytics
**Resources:**
- **Best match:** Book: Trustworthy Online Controlled Experiments, Kohavi, Tang & Xu (paid), why: the reference on experiment data quality
- Snowplow docs on tracking design (free)
- GrowthBook docs on experiment analysis (free)
**Study approach:** Product analytics data starts with a tracking plan: which events exist, what properties they carry, and who owns them. Learn event schema design, sessionization and funnels, attribution, and the data behind A/B tests, including the checks (sample ratio mismatch, assignment leakage) that catch a broken experiment before anyone reads its result. Kohavi's book is the reference on experiment data quality.
**Project:** Design a tracking plan for a small web app, generate events with Snowplow or a simulator, build sessions and a funnel in dbt, and analyse a simulated A/B test, including a deliberately broken assignment that your checks catch.

### Event-driven systems & event sourcing `desirable`
**Prerequisites:** Real-time streaming, Distributed systems
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** Book: Designing Event-Driven Systems, Ben Stopford (free from Confluent), why: bridges service events and data pipelines
- Martin Fowler, Event Sourcing (free)
- Apache Kafka docs (free)
**Study approach:** Event-driven architecture seen from the data side. Learn event design (what an event means, what it carries, how it is versioned), event sourcing and CQRS, ordering and replay, and how operational events become analytical data without a nightly export. Stopford's book bridges service events and data pipelines and is free from Confluent.
**Project:** Model one business process as events with versioned schemas, build two projections from the same stream (an operational view and an analytical table), then add a new event version and replay history to rebuild both.

### Streaming platform operations `desirable`
**Prerequisites:** Real-time streaming, Cloud data infrastructure, DataOps & data observability
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** Book: Kafka: The Definitive Guide, 2nd ed., operations chapters (free from Confluent)
- Strimzi docs (free)
- Confluent and Aiven engineering blogs (free)
**Study approach:** Running a streaming platform in production: partition counts and keys, retention and compaction, consumer lag monitoring, rebalancing, quotas, security, multi-region replication, upgrades and capacity planning. Whether you run Kafka yourself or use a managed service, these are the decisions and failure modes you own. The operations chapters of *Kafka: The Definitive Guide* and the Strimzi documentation cover them.
**Project:** Run a three-broker Kafka cluster, load it with a realistic workload, and run a game day: lose a broker, add a partition, upgrade a broker, and let a consumer fall behind. Record the metrics, alerts and recovery steps for each as a runbook.

### Data pipelines for LLM applications `critical`
**Prerequisites:** Data pipelines & ELT, Machine learning
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Book: AI Engineering, Chip Huyen, retrieval and data chapters (paid), why: frames retrieval as a data problem
- pgvector docs (free)
- Unstructured and LlamaIndex ingestion docs (free)
**Study approach:** Applications built on language models are mostly a data problem: getting the right document, in the right version, to the right user. Learn document ingestion and parsing (PDFs, tables, scans), chunking strategies, embedding pipelines and re-embedding when models change, vector and hybrid indexes, freshness and deletion, and permission-aware retrieval so a user never sees a document they should not. Huyen's *AI Engineering* frames retrieval as a data problem; the Applied AI roadmap covers the application side.
**Project:** Build an ingestion pipeline that turns a changing document collection into a hybrid search index with per-document permissions, incremental updates and deletions. Measure retrieval quality on a small labeled question set before and after a document update, and prove a deleted document can no longer be retrieved.

### Cloud ML platforms `critical`
**Prerequisites:** MLOps fundamentals, Cloud data infrastructure
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Coursera: Google Cloud Machine Learning Engineer path
- Amazon SageMaker docs (free)
- Azure Machine Learning docs (free)
**Study approach:** Managed ML platforms such as SageMaker, Vertex AI and Azure ML bundle training, pipelines, registries, endpoints and monitoring. Pick the one closest to your work and spend real hands-on time with it, because course-watching does not produce operational knowledge. Learn where its abstractions leak: networking, permissions, cost and lock-in.
**Project:** Deploy a complete training and serving pipeline on AWS, GCP or Azure that reads from your lakehouse and writes predictions back to it. Document costs, gotchas and vendor lock-in points. Bonus: build the same pipeline on a second cloud and write a comparison.

### Data security & access control `critical`
**Prerequisites:** Cloud data infrastructure, Data privacy & PETs
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** Unity Catalog, Snowflake and BigQuery access control docs (free), why: where these controls are actually configured
- Apache Ranger docs (free)
- OWASP Cheat Sheet Series (free)
**Study approach:** Data security is access control applied at the granularity data needs. Learn role- and attribute-based access control, row- and column-level security, dynamic masking, encryption at rest and in transit with managed keys, secrets in pipelines, and audit logs that answer who read what and when. Configure these in the platforms where they actually live (Unity Catalog, Snowflake, BigQuery, Apache Ranger), not in an abstraction.
**Project:** Implement access control for a dataset with three audiences: analysts see aggregates, a support team sees masked personal data for their region only, and a privileged role sees everything. Prove each audience's view with tests and produce an audit report of a week of access.

### Master & reference data `desirable`
**Prerequisites:** Data modeling, Data governance & catalogs
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** Splink entity resolution library docs (free), why: open-source probabilistic matching from the UK Ministry of Justice
- Book: Data Management at Scale, Strengholt, 2nd ed. (paid)
- DAMA-DMBOK, reference and master data chapter (paid)
**Study approach:** Master and reference data is the unglamorous reason two reports count customers differently. Learn entity resolution (deterministic and probabilistic matching), golden records and survivorship rules, reference code lists and their versioning, and how to publish a mastered entity that other systems trust. Splink is an open-source probabilistic matching library from the UK Ministry of Justice and the best way to learn the technique.
**Project:** Deduplicate a public dataset of people or organisations with Splink, tune the match thresholds against a labeled sample, build a golden record with explicit survivorship rules, and report precision and recall of the matching.

---

## PHASE 6: Domain depth & frontier

### Domain vertical `critical`
**Prerequisites:** Data modeling, Data quality & testing
**Tracks:** All specializations
**Resources:**
- **Best match:** No course. Sit with the people who produce and use the data, and read the domain's data standards, such as ISA-95 in industry or ISO 20022 in finance
**Study approach:** Real depth in one industry's data: what its records mean, how and by whom they are produced, which are regulated, and which numbers its people actually use to decide. This is the part tools cannot supply and the part that makes data quality checks meaningful, because only someone who knows the domain knows what wrong looks like. In Chile that is often mining and energy, where sensor and operations data meet business reporting; elsewhere it might be finance, health or logistics.
**Project:** Build one dataset for an industry problem alongside someone who works in that industry, write down every assumption of yours they corrected, and turn the corrections into quality checks.

### AI agents for data work `frontier`
**Prerequisites:** Semantic layer & metrics, Data quality & testing
**Tracks:** Batch engineering & analytics
**Resources:**
- **Best match:** Spider 2.0 and BIRD text-to-SQL benchmarks (free), why: published evaluations of how often these systems are right
- dbt Semantic Layer docs (free)
- See also the Applied AI roadmap
**Study approach:** A frontier topic. Text-to-SQL tools, AI analysts and agents that write pipelines are improving quickly, and published benchmarks such as Spider 2.0 and BIRD show both how far they have come and how often they are still wrong on real schemas. Learn what makes them reliable: semantic layers and catalogs as grounding, evaluation sets built from real questions with known answers, and limits on what an agent may execute. The tools that automate part of this job are the ones it now has to make trustworthy.
**Project:** Connect an AI query assistant to your semantic layer and catalog, build an evaluation set of thirty real questions with verified answers, and measure accuracy with and without the semantic layer as grounding. Write up the failure modes.

### Data products & data mesh `desirable`
**Prerequisites:** Data modeling, Data quality & testing, DataOps & data observability
**Tracks:** Batch engineering & analytics, Data quality, governance & privacy
**Resources:**
- **Best match:** Book: Data Mesh, Zhamak Dehghani (paid), why: the original argument in full
- Book: Data Management at Scale, Strengholt, 2nd ed. (paid)
- Published data mesh case studies (free)
**Study approach:** Data mesh is an organisational pattern as much as a technical one: domains own their data as products, a central platform makes that self-service, and governance is federated rather than central. Learn the four principles, what a data product needs (an owner, a contract, documentation, quality guarantees, discoverability), and the conditions under which the pattern works or fails, which is mostly about organisational maturity. Read Dehghani for the argument and Strengholt for the implementation.
**Project:** Turn one of your marts into a data product: a named owner, a contract, SLOs, catalog documentation and an access process. Then write a two-page assessment of whether a mesh would suit a specific organisation you know, and why or why not.

### Industrial data & OT integration `desirable`
**Prerequisites:** IoT & time-series data
**Tracks:** Streaming & real-time data
**Resources:**
- **Best match:** HiveMQ, MQTT Essentials (free), why: the clearest free introduction to MQTT-based plant data
- OPC Foundation, OPC UA overview (free)
- ISA-95 overview material (free)
**Study approach:** Industrial data is where streaming meets operational technology. Learn the ISA-95 levels from sensors to enterprise systems, SCADA and historians, OPC UA and MQTT, the unified namespace pattern for publishing plant data, and the network segmentation that keeps operational technology safe when data flows out of it. This is the data side of the Edge AI and Control paths, and in Chile it is the bridge into mining and energy.
**Project:** Build a small unified namespace: simulated OPC UA devices and MQTT sensors from two sites published under an ISA-95 topic hierarchy, consumed into your time-series store and lakehouse through a one-way, segmented path. Document what a plant engineer would need to approve before it ran on real equipment.

### Self-serve data platform engineering `desirable`
**Prerequisites:** IaC & policy as code, Kubernetes for ML
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Book: Platform Engineering, Fournier & Nowland (paid), why: written by practitioners who built internal platforms
- Backstage docs (free)
- CNCF Platforms white paper (free)
**Study approach:** A self-serve data platform lets product and analytics teams build pipelines without filing tickets. Learn platform engineering applied to data: templates and golden paths for new pipelines, environments on demand, guardrails such as policies, quotas and default tests instead of manual review, a developer portal, and measuring adoption and lead time. Fournier and Nowland's book is written by people who built internal platforms.
**Project:** Create a template that scaffolds a new pipeline with orchestration, tests, a contract, monitoring and infrastructure as code from one command, and register it in Backstage. Time how long a colleague takes to ship a new tested pipeline with it, before and after.

### Data engine & synthetic data `desirable`
**Prerequisites:** Feature store & training data, MLOps fundamentals
**Tracks:** Data & ML platform
**Resources:**
- **Best match:** Book: Designing Machine Learning Systems, Huyen, training data chapters (paid)
- Label Studio docs (free)
- lakeFS or DVC docs for dataset versioning (free)
**Study approach:** The data engine closes the loop between models in production and their training data: collecting the cases a model got wrong, routing them to labeling, versioning the resulting datasets, and generating synthetic data where real data is scarce or sensitive. At platform scale the hard parts are lineage from prediction back to training example, dataset versioning, and keeping labeling quality measurable.
**Project:** Build a loop where low-confidence predictions from a served model are sampled, sent to a Label Studio project, merged into a versioned training set in lakeFS or DVC, and used to retrain. Show lineage from one prediction to the model version that learned from it.

### Data protection law & compliance `critical`
**Prerequisites:** Data privacy & PETs
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** GDPR text and EDPB guidelines (free), why: the regime most others are modeled on
- BCN Chile, Ley 21.719 (free)
- EU Data Act, Regulation (EU) 2023/2854, on EUR-Lex (free)
**Study approach:** Data law becomes pipeline requirements: a lawful basis and purpose for each dataset, retention periods enforced in code, data subject rights (access, correction, deletion), cross-border transfer rules, and breach notification. Learn the GDPR as the regime most others are modeled on, the EU Data Act, which applies since September 2025, and Chile's Ley 21.719, which creates a data protection agency and is scheduled to take effect in December 2026. This is literacy, not legal advice: read a requirement and design for it.
**Project:** Write a record of processing for your platform: every dataset with its purpose, legal basis, retention and transfers. Implement retention enforcement and a subject access request that produces everything held about one person, and map each control to the article it satisfies under one regime.

### Data governance for AI `desirable`
**Prerequisites:** Data contracts & lineage, Data governance & catalogs
**Tracks:** Data quality, governance & privacy
**Resources:**
- **Best match:** Datasheets for Datasets, Gebru et al. (free paper), why: the template most dataset documentation follows
- EU AI Act, Article 10, data and data governance (free)
- Data Provenance Initiative (free)
**Study approach:** Data governance for AI covers the questions that arise when a dataset trains a model: where the data came from and under what licence and consent, whether it represents the population the model will serve, how it is documented, and what the EU AI Act's Article 10 requires of training, validation and test data for high-risk systems. Datasheets for Datasets is the template most dataset documentation follows.
**Project:** Write a datasheet for a training dataset you built on this roadmap, including provenance, licences, known gaps and representativeness checks with numbers. Then audit one public dataset's licence and provenance and record what you could and could not establish.

---

## PHASE 7: Architecture & capstone

### Data architecture `critical`
**Prerequisites:** Distributed systems, Lakehouse & warehouse, DataOps & data observability
**Unlocks:** Technical leadership
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed. (paid)
- Book: Fundamentals of Data Engineering, Reis & Housley (paid)
- Architecture decision records (free), why: at this level the reasoning is the deliverable
**Study approach:** Composing the platform: batch and streaming paths, where the source of truth for each entity lives, central versus domain-owned data, build versus buy, and how it is secured, governed and paid for. At this level the work is judgement, and the reasoning is the deliverable, so write decisions as architecture decision records others can challenge. *Designing Data-Intensive Applications* and *Fundamentals of Data Engineering* are the two books to reread here.
**Project:** Write the target architecture for a real or realistic organisation's data platform: context diagram, data flows, sources of truth, build and buy choices, security and governance model, and a cost estimate. Include three architecture decision records with the alternatives you rejected, and have an engineer who disagrees review it.

### Capstone: Data platform `critical`
**Prerequisites:** Lakehouse & warehouse, Orchestration & scheduling, Data quality & testing, DataOps & data observability
**Tracks:** All specializations
**Resources:**
- **Best match:** No course. Ship it as infrastructure-as-code with the data-quality tests running in CI
**Study approach:** The proof that this path is finished. Assemble the platform projects into one slice rather than building new parts: the work is in the seams (contracts, orchestration, monitoring, cost). Scope it small enough to finish and real enough that someone other than you consumes its output. Let the specialization set its centre: a modeled warehouse with a semantic layer, a streaming pipeline from devices to a real-time store, a feature or retrieval platform, or a governed data product with privacy controls.
**Project:** One end-to-end platform slice: ingestion to lakehouse to a served data product, orchestrated, tested and monitored, with data contracts, cost attribution and infrastructure as code, CI running the data tests, and a runbook for one failure. Publish the repository, the contract and one month of SLO and cost reports.

### Technical leadership `desirable`
**Prerequisites:** Data architecture
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Staff Engineer, Will Larson, free web edition at staffeng.com
- Write and publish design docs, why: influence in this field is exercised in writing
**Study approach:** Setting direction, writing design docs and data strategy, mentoring, and negotiating with the many teams that produce and consume data. In data the hardest leadership work is getting producers to own the quality of what they emit, which is a persuasion problem before it is a tooling problem. That work is done in writing, which is why the English lane compounds into this node.
**Project:** Lead one cross-team data decision end to end, ideally a new contract between a producing and a consuming team: write the proposal, run the review, absorb the disagreement, ship it and publish a retrospective.

---

## Parallel Track: English Proficiency (Highest ROI)

Data engineering is an open-source field, and its working conversations happen in English: tool documentation, issue trackers, release notes, conference talks and the practitioner writing that carries the state of the art. Tools change fast enough that translated material is usually a version behind. Remote data roles for foreign employers, a large share of the market for engineers outside the main tech hubs, are conducted in English.

Reading is the low bar. The return comes from writing: design docs, data contracts, incident reviews and the documentation that lets another team use a dataset without asking you. Influence in this field is exercised in those documents, and the habit compounds directly into the leadership node.

**Practice:** write every design doc, contract and README in English; follow the release notes and issue trackers of the tools you use; and publish something short every quarter. The habit matters more than the audience.

---

## Critical Path (Summary)

The spine, in dependency order. Every specialization runs through all of it:

**SQL & data access → Data modeling → Data pipelines & ELT → Storage engines & file formats → Lakehouse & warehouse → Distributed data processing → Real-time streaming → Orchestration & scheduling → Data quality & testing → Cloud data infrastructure → Distributed systems → DataOps & data observability → Cost & FinOps for data → Domain vertical → Data architecture → Capstone**

With Python, Git, Linux and probability as ungated starting nodes, Docker and testing alongside modeling in Phase 1, and technical leadership after architecture.

Two observations about this ordering. Data modeling arrives in Phase 1, before any storage engine or processing framework, and that placement is deliberate: the grain and structure of a dataset decide whether it can be trusted long before the tool that stores it does, and a badly modeled table stays badly modeled on every platform. Second, Cost & FinOps for data looks like an administrative node next to distributed systems, and it is the one most often left until the bill arrives. In the cloud it is a design input: the same pipeline can cost ten times more depending on choices made in Phase 2.

---

## Specializations, Phase by Phase

Each specialization is the spine plus the branch courses below. Phases 0, 1 and 7 are spine only, so every specialization shares them.

| Phase | Spine (every specialization) | Batch engineering & analytics | Streaming & real-time data | Data & ML platform | Data quality, governance & privacy |
|---|---|---|---|---|---|
| P0 | Python, SQL & data access, Git & version control, Linux & CLI, Probability & statistics |  |  |  |  |
| P1 | Docker & CI/CD, Testing & code quality, Data modeling, Data pipelines & ELT |  |  |  |  |
| P2 | Storage engines & file formats, Lakehouse & warehouse, Distributed data processing, Real-time streaming |  |  | Machine learning |  |
| P3 | Orchestration & scheduling, Data quality & testing, Cloud data infrastructure | Analytics engineering & dbt | Change data capture, Stateful stream processing | MLOps fundamentals | Data governance & catalogs |
| P4 | Distributed systems, DataOps & data observability | Semantic layer & metrics, Query & Spark performance tuning | IoT & time-series data, Real-time analytics stores | Feature store & training data, IaC & policy as code, Kubernetes for ML | Data contracts & lineage, Data privacy & PETs |
| P5 | Cost & FinOps for data | Enterprise data modeling, Event tracking & product analytics | Event-driven systems & event sourcing, Streaming platform operations | Data pipelines for LLM applications, Cloud ML platforms | Data security & access control, Master & reference data |
| P6 | Domain vertical | AI agents for data work, Data products & data mesh | Industrial data & OT integration | Self-serve data platform engineering, Data engine & synthetic data | Data products & data mesh, Data protection law & compliance, Data governance for AI |
| P7 | Data architecture, Capstone: Data platform, Technical leadership |  |  |  |  |

English working fluency and AI-assisted dev workflows are electives open to every specialization and sit outside this count. *Data products & data mesh* is shared by the Batch and Governance specializations.

---

## Books, Essential Reading

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Fundamentals of Data Engineering**, Reis & Housley | P1 | `critical` | (paid) | The lifecycle vocabulary of the whole field in one book. Read it alongside the first pipelines. |
| 2 | **The Data Warehouse Toolkit**, 3rd ed., Kimball & Ross | P1 | `critical` | (paid) | Dimensional modeling, still the foundation of almost every analytical layer. |
| 3 | **Learning Spark**, 2nd ed., Damji et al. | P2 | `critical` | (free) | Free from Databricks. Spark's execution model from its maintainers. |
| 4 | **Kafka: The Definitive Guide**, 2nd ed., Shapira et al. | P2 | `critical` | (free) | Free from Confluent. Logs, partitions and delivery semantics, plus the operations chapters for later. |
| 5 | **Data Quality Fundamentals**, Moses, Gavish & Vorwerck | P3 | `critical` | (paid) | Data quality treated as engineering rather than hope. |
| 6 | **Designing Data-Intensive Applications**, 2nd ed., Kleppmann & Riccomini | P4 | `critical` | (paid) | The most important systems book for this path. The second edition (2026) supersedes the first. |
| 7 | **Streaming Systems**, Akidau, Chernyak & Lax | P3 | `critical` | (paid) | Streaming specialization. Event time, watermarks and windows from the authors of the Dataflow model. |
| 8 | **Designing Machine Learning Systems**, Chip Huyen | P2 | `critical` | (paid) | Platform specialization. Machine learning from the data side. |
| 9 | **Practical Data Privacy**, Katharine Jarmul | P4 | `critical` | (paid) | Governance specialization. Privacy engineering written for data people. |
| 10 | **Cloud FinOps**, 2nd ed., Storment & Fuller | P5 | `critical` | (paid) | Cost as an engineering discipline. |
| 11 | **Data Mesh**, Zhamak Dehghani | P6 | `desirable` | (paid) | The argument for domain-owned data products, in full. Read critically. |
| 12 | **Staff Engineer**, Will Larson | P7 | `desirable` | (free; paid print) | Free at staffeng.com. For the individual-contributor leadership path. |

---

## Certifications

Blunt assessment: cloud and platform certifications carry more weight in this path than in most others on this site, because data hiring is often stack-specific: a team on one warehouse or cloud screens for it. They still rank below a public project with tests, contracts and a cost report, and the right one depends entirely on the stack your target employers use.

Worth considering, matched to your target stack:
- **Cloud data engineering:** AWS Certified Data Engineer, Associate; Google Cloud Professional Data Engineer; Microsoft Fabric Data Engineer Associate (exam DP-700, which replaced the retired Azure exam DP-203 in 2025).
- **Platform-specific:** Databricks Certified Data Engineer (Associate, then Professional) for lakehouse teams; Snowflake SnowPro Core for Snowflake-first teams. A certification for the wrong platform does little.
- **Tool-specific:** streaming and orchestration vendors offer their own credentials for Kafka and Airflow. Useful for the content; rarely decisive in hiring.

What substitutes for a credential in every specialization: a public repository with an orchestrated, tested pipeline, a data contract, an SLO dashboard and a cost report; for the governance specialization, a written record of processing and a working deletion request; for streaming, a documented failure test with the delivery guarantee you actually achieved.

---

## Cost & Time

**Money.** Most resources on this roadmap are free: the Zoomcamps, Dagster University, dbt Learn, the documentation of every open-source tool, and two of the core books (Learning Spark and Kafka: The Definitive Guide) are free from their publishers' sponsors. The real risk is cloud spend: data work can run up a bill quickly. Do Phases 0 to 2 entirely on a local stack (DuckDB, PostgreSQL, MinIO and Kafka in Docker), set budget alerts before touching a cloud, and shut everything down after each session. Certification exams cost in the low hundreds of US dollars each; check current prices.

**Time.** Each phase is a quarter of consistent part-time study, so one specialization from Phase 0 to Phase 7 is eight quarters, about two years. Someone already working as a backend engineer will move through Phases 0 and 1 faster and should tick those nodes off rather than repeat them; data modeling is the Phase 1 course not to skip. The capstone deserves a genuine month of the final quarter.

**Where the time actually goes.** Expect less of it on writing pipelines than you would guess, and more on modeling decisions, debugging data that is wrong but plausible, testing, and working out what a column actually means with the people who produce it. That ratio is the job, not a failure of the plan.

---

## Sources & Notes

Resource names, course titles and prices change often. Verify before paying for anything. Where a specific course title could not be confirmed, this document names the provider and topic rather than inventing a title.

**How this path was created.** Until October 2026 this material was the "ML platform & data infra" specialization of the [Edge AI roadmap](#/roadmap). Its eight platform-only courses moved here with their ids, and the Edge AI roadmap now has three specializations. Study notes and projects for the moved courses were carried over and revised for their new place in the sequence.

**Facts checked on 2026-10-25.** These move; re-check before relying on one.
- **Chile, Ley 21.719** (personal data protection): published on 13 December 2024 and scheduled to take effect on 1 December 2026, creating the Agencia de Protección de Datos Personales. A government bill filed in the Senate in September 2026 proposes postponing that date by one year; it was still pending when this was written.
- **EU Data Act** (Regulation (EU) 2023/2854): applicable since 12 September 2025, with the design obligations for connected products applying from 12 September 2026.
- **EU AI Act:** Article 10 sets data and data governance requirements for high-risk AI systems.
- **Certifications:** Microsoft retired exam DP-203 on 31 March 2025; DP-700 (Fabric Data Engineer Associate) is its successor. The AWS Certified Data Engineer, Associate exam (DEA-C01) was current in 2026. The Databricks and Snowflake certification names were confirmed only through secondary sources.
- **Book editions:** Designing Data-Intensive Applications 2nd ed. (2026); Kubernetes in Action 2nd ed., Lukša & Conner (March 2026).
- **Data Engineering Zoomcamp:** runs as a yearly live cohort with a self-paced option; the date of the next live cohort was not confirmed.

**Demand evidence.** Every figure in the Executive Summary is recorded, with its source, edition, horizon and geography, in `.claude/skills/career-roadmaps/references/market-claims-ledger.md`. The BLS database occupations (row L52) and the Chilean mining Big Data adoption figures (row L53) were read in the original on 2026-10-25.
