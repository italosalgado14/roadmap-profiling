// Curriculum data for the Data Engineering & Platforms path.
//
// This module holds data only. It is rendered by
// preview-app/src/components/CurriculumGraph.jsx, which owns all the drawing
// logic shared by the career paths.
//
// Why this is its own path. Data platform work was the fourth track of the Edge
// AI graph ("ML platform & data infra"), which meant it inherited that path's
// spine: a reader who chose it was told C++, the math-for-ML refresher, deep
// learning and ONNX model export were required. None of those are on this
// career. It is the same divergence that made Applied AI its own path, so the
// track left Edge AI and grew into a full curriculum here. Pipelines, the
// lakehouse, streaming, feature stores, IoT time-series data, Kubernetes, cloud
// ML and the data capstone moved with it; ids and labels were kept where the
// topic is the same.
//
// Ids are shared with the other graphs wherever the topic is genuinely the
// same, and distinct wherever it is not. tools/check_curriculum.py enforces
// that.
//
// Shape: eight phases, each a quarter (about 3 months) of study. A track is
// read as every spine course plus the branch courses that list it, and every
// track takes 2 to 5 courses in every phase. Electives do not count toward
// that load. Every prerequisite of a course a track takes is itself a course
// that track takes, so no specialization is sent to a course it was never
// told to study.
//
// Course fields:
//   id        short stable key, shown on the node
//   phase     which phase column the node sits in
//   row       row within that column; must be 0..n-1 with no gaps or repeats
//   priority  critical | desirable | frontier
//   kind      spine (every track) | branch (chosen track only) | elective
//   tracks    ["all"] for spine nodes, otherwise the track ids that need it
//   prereqs   ids of the nodes that must come first
//   desc      one or two sentences shown in the detail panel
//   res       recommended resources, separated by "|", best match first

// Phases are drawn left to right in the order listed here.
export const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Prerequisites",                  color: "#94a3b8" },
  { id: "P1", label: "Phase 1",     subtitle: "Pipelines & modeling",           color: "#5eead4" },
  { id: "P2", label: "Phase 2",     subtitle: "Storage & processing",           color: "#2dd4bf" },
  { id: "P3", label: "Phase 3",     subtitle: "Orchestration, quality & cloud", color: "#14b8a6" },
  { id: "P4", label: "Phase 4",     subtitle: "Reliability & specialization",   color: "#0ea5e9" },
  { id: "P5", label: "Phase 5",     subtitle: "Scale, cost & controls",         color: "#0284c7" },
  { id: "P6", label: "Phase 6",     subtitle: "Domain depth & frontier",        color: "#d97706" },
  { id: "P7", label: "Phase 7",     subtitle: "Architecture & capstone",        color: "#f59e0b" },
];

// Specialization tracks. Node stripes and the filter buttons are coloured
// from this map, and the counts on the page are derived from its size.
export const TRACKS = {
  batch:      { color: "#0d9488", label: "Batch engineering & analytics",     short: "Batch"      },
  streaming:  { color: "#2563eb", label: "Streaming & real-time data",        short: "Streaming"  },
  platform:   { color: "#7c3aed", label: "Data & ML platform",                short: "Platform"   },
  governance: { color: "#d97706", label: "Data quality, governance & privacy", short: "Governance" },
};

export const COURSES = [
  // ─── P0 ─ Foundations (spine) ─────────────────────────────────────────
  { id: "PY", phase: "P0", row: 0, label: "Python",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "The glue language of data engineering: typing, packaging, file and network I/O, generators for data larger than memory, and pandas or Polars for quick analysis.",
    res:  "Coursera: Python for Everybody, UMich | Automate the Boring Stuff (free) | Polars user guide (free), why: a modern DataFrame library that teaches lazy, columnar thinking" },
  { id: "SQL", phase: "P0", row: 1, label: "SQL & data access",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Joins, aggregation, window functions, CTEs and query plans. SQL is the working language of this path, not a prerequisite to get past: most transformations, tests and analyses end up written in it.",
    res:  "ThoughtSpot SQL tutorial, formerly Mode (free) | Use The Index, Luke (free), why: indexes and plans are where SQL performance lives | PostgreSQL docs (free)" },
  { id: "GIT", phase: "P0", row: 2, label: "Git & version control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Branches, review and reproducible history for code, SQL models and infrastructure alike. Data teams that skip it end up with pipelines nobody can safely change.",
    res:  "git-scm.com Pro Git book (free) | GitHub Skills (free)" },
  { id: "LINUX", phase: "P0", row: 3, label: "Linux & CLI",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Shell fluency, processes, cron, networking basics and SSH. Enough to debug a job that died on a worker node and to move large files without a GUI.",
    res:  "MIT Missing Semester (free), why: the fastest route from tourist to fluent | Linux Journey (free)" },
  { id: "PROB", phase: "P0", row: 4, label: "Probability & statistics",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Distributions, sampling, aggregation pitfalls, confidence intervals and significance. The literacy needed to tell whether a metric really moved, whether a data quality alert is noise, and whether an average hides a problem.",
    res:  "Book: Think Stats (free) | Coursera: Statistics with Python, UMich | StatQuest (free), why: short, visual, and enough for applied work" },
  { id: "ENGLISH", phase: "P0", row: 5, label: "English working fluency",
    priority: "desirable", kind: "elective", tracks: ["all"], prereqs: [],
    desc: "A continuous lane rather than a phase. Tool documentation, open-source communities, conference talks and the largest remote data job markets are English-first.",
    res:  "Any structured B2 to C1 program | Practice: write every design doc and README in English (free)" },

  // ─── P1 ─ Pipelines & modeling (spine) ────────────────────────────────
  { id: "DOC", phase: "P1", row: 0, label: "Docker & CI/CD",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LINUX","GIT"],
    desc: "Containers, Compose, CI pipelines and reproducible environments. Data code ships like any other code, and the pipeline that runs its tests is where data checks will later live.",
    res:  "Docker getting started (free) | GitHub Actions docs (free)" },
  { id: "TEST", phase: "P1", row: 1, label: "Testing & code quality",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY","GIT"],
    desc: "Unit and integration tests, fixtures, and testing transformations against small, known datasets. The habit that later becomes data tests and data contracts.",
    res:  "pytest docs (free) | Book: Architecture Patterns with Python, testing chapters (free online), why: it treats external systems as a design problem | Hypothesis property-based testing docs (free)" },
  { id: "DATAMOD", phase: "P1", row: 2, label: "Data modeling",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["SQL"],
    desc: "Entities and relationships, normalization, dimensional modeling with facts and dimensions, grain, and slowly changing dimensions. The decisions that make a dataset usable for years or a liability within months.",
    res:  "Book: The Data Warehouse Toolkit, Kimball & Ross, 3rd ed. (paid), why: dimensional modeling still underpins every analytical layer | Kimball Group design tips archive (free) | dbt guide to modeling layers (free)" },
  { id: "PIPE", phase: "P1", row: 3, label: "Data pipelines & ELT",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY","SQL"],
    desc: "Batch extract, load and transform, incremental loads, idempotent reruns and backfills: the difference between a script that worked once and a pipeline that can be rerun safely. The substrate every analytical and ML system feeds on.",
    res:  "Data Engineering Zoomcamp, DataTalksClub (free), why: an end-to-end project course that runs yearly and has a self-paced option | Book: Fundamentals of Data Engineering, Reis & Housley (paid) | dbt docs (free)" },
  { id: "AICODE", phase: "P1", row: 4, label: "AI-assisted dev workflows",
    priority: "desirable", kind: "elective", tracks: ["all"], prereqs: ["LINUX","GIT","PY"],
    desc: "Coding assistants and agents that write SQL, pipelines and tests, and the review discipline their output needs. Data work is among the tasks these tools accelerate most, so judging what they produce is part of the job.",
    res:  "Anthropic Claude Code docs (free) | Anthropic prompt engineering guide (free) | MCP docs (free)" },

  // ─── P2 ─ Storage & processing ────────────────────────────────────────
  { id: "DBINT", phase: "P2", row: 0, label: "Storage engines & file formats",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["SQL"],
    desc: "Row versus column storage, B-trees and LSM trees, compression and encoding, Parquet and Arrow, partitioning and file sizing. Why the same query costs a second on one layout and an hour on another.",
    res:  "CMU 15-445 Database Systems, Andy Pavlo (free lectures), why: the clearest course on how databases store and find data | Book: Database Internals, Petrov (paid) | Apache Parquet and Arrow docs (free)" },
  { id: "LAKE", phase: "P2", row: 1, label: "Lakehouse & warehouse",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PIPE","DATAMOD"],
    desc: "Cloud warehouses and the lakehouse: open table formats (Iceberg, Delta, Hudi), ACID on object storage, schema evolution, time travel and partitioning. Where analytical and training data lives once it outgrows files.",
    res:  "Apache Iceberg docs (free) | Delta Lake docs (free) | DuckDB docs (free), why: a local engine for learning lakehouse queries without a cloud bill" },
  { id: "SPARK", phase: "P2", row: 2, label: "Distributed data processing",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY","PIPE"],
    desc: "Spark's execution model, partitioning, shuffles, joins at scale, skew and memory, and knowing when a single-node engine such as DuckDB or Polars is the better tool. Big data is mostly the discipline of moving less of it.",
    res:  "Book: Learning Spark, 2nd ed., Damji et al. (free from Databricks), why: written by Spark's maintainers | Apache Spark docs, tuning guide (free) | DuckDB docs (free)" },
  { id: "STREAM", phase: "P2", row: 3, label: "Real-time streaming",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PIPE","DOC"],
    desc: "Logs and topics, partitions, consumer groups, delivery semantics and the duality of streams and tables: enough to move data in seconds rather than hours. The streaming specialization goes deep; every data engineer needs this much.",
    res:  "Book: Kafka: The Definitive Guide, 2nd ed. (free from Confluent), why: the reference, free in electronic form | Confluent Kafka tutorials (free) | Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed., stream chapters (paid)" },
  { id: "ML", phase: "P2", row: 4, label: "Machine learning",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["PY","PROB"],
    desc: "Supervised learning, train and test splits, leakage, metrics and the monitoring vocabulary. Enough to build the data a model trains on correctly, which is where most ML failures begin.",
    res:  "Coursera: Machine Learning Specialization, Andrew Ng | Book: Designing Machine Learning Systems, Chip Huyen (paid), why: written from the data side of ML | Book: Hands-On Machine Learning, Geron (paid)" },

  // ─── P3 ─ Orchestration, quality & cloud ──────────────────────────────
  { id: "ORCH", phase: "P3", row: 0, label: "Orchestration & scheduling",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PIPE","DOC"],
    desc: "Workflow orchestration with Airflow or Dagster: dependencies, schedules and sensors, retries, backfills, idempotent tasks and asset-based thinking. The control plane of a batch platform.",
    res:  "Dagster University (free), why: teaches asset-based orchestration, the direction the field has moved | Apache Airflow docs (free) | Astronomer Airflow guides (free)" },
  { id: "DQ", phase: "P3", row: 1, label: "Data quality & testing",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PIPE","TEST"],
    desc: "Freshness, volume, schema and distribution checks, tests in the transformation layer, quarantining bad records, and deciding who is alerted when a check fails. Bad data fails silently, which is why it is tested rather than trusted.",
    res:  "Book: Data Quality Fundamentals, Moses, Gavish & Vorwerck (paid), why: quality treated as an engineering practice | dbt data tests docs (free) | Great Expectations or Soda docs (free)" },
  { id: "CLOUDDE", phase: "P3", row: 2, label: "Cloud data infrastructure",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LINUX","DOC"],
    desc: "Object storage, managed warehouses and processing services, networking, identity and permissions, and how cloud pricing turns design choices into a monthly bill. Most data platforms now run here.",
    res:  "Cloud provider data engineering learning paths, such as AWS Skill Builder or Google Cloud Skills Boost (free tier), why: learn the cloud your target employers use | Book: Fundamentals of Data Engineering, cloud chapters (paid) | Provider architecture centers, analytics reference designs (free)" },
  { id: "DBT", phase: "P3", row: 3, label: "Analytics engineering & dbt",
    priority: "critical", kind: "branch", tracks: ["batch"],
    prereqs: ["DATAMOD","PIPE","TEST"],
    desc: "Transformations as version-controlled, tested and documented SQL models: staging, intermediate and mart layers, incremental models, macros and generated documentation. How most warehouse teams now build their models.",
    res:  "dbt Learn fundamentals course (free), why: short, official and hands-on | Book: Analytics Engineering with SQL and dbt, Machado & Russa (paid) | dbt best practice guides (free)" },
  { id: "CDC", phase: "P3", row: 4, label: "Change data capture",
    priority: "critical", kind: "branch", tracks: ["streaming"],
    prereqs: ["STREAM","SQL"],
    desc: "Turning database changes into event streams with log-based capture: Debezium, the transactional outbox, initial snapshots and ordering, and keeping a warehouse in sync without nightly full loads.",
    res:  "Debezium docs and tutorial (free), why: the open-source standard for log-based CDC | Book: Designing Data-Intensive Applications, 2nd ed., change data capture sections (paid) | microservices.io transactional outbox pattern (free)" },
  { id: "STATEFUL", phase: "P3", row: 5, label: "Stateful stream processing",
    priority: "critical", kind: "branch", tracks: ["streaming"],
    prereqs: ["STREAM"],
    desc: "Event time versus processing time, watermarks, windows, stream joins, state and checkpoints, and exactly-once processing in Flink or Spark Structured Streaming.",
    res:  "Book: Streaming Systems, Akidau, Chernyak & Lax (paid), why: the conceptual foundation, from the authors of the Dataflow model | Apache Flink docs and training (free) | Spark Structured Streaming guide (free)" },
  { id: "MLOPS", phase: "P3", row: 6, label: "MLOps fundamentals",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["ML","DOC"],
    desc: "Experiment tracking, model registry, reproducible training pipelines, deployment and monitoring. The platform specialization builds the infrastructure this practice runs on.",
    res:  "Coursera: Machine Learning in Production, DeepLearning.AI | MLflow docs (free) | MLOps Zoomcamp, DataTalksClub (free)" },
  { id: "GOVDATA", phase: "P3", row: 7, label: "Data governance & catalogs",
    priority: "critical", kind: "branch", tracks: ["governance"],
    prereqs: ["DATAMOD","PIPE"],
    desc: "Ownership and stewardship, business glossaries, metadata and data catalogs, classification of sensitive data, and policies on who may use what. Governance that lives in tools and pipelines rather than in a slide deck.",
    res:  "DAMA-DMBOK, Data Management Body of Knowledge, 2nd ed. (paid), why: the reference framework governance teams use | DataHub or OpenMetadata docs (free) | Book: Data Management at Scale, Strengholt, 2nd ed. (paid)" },

  // ─── P4 ─ Reliability & specialization ────────────────────────────────
  { id: "SYSDES", phase: "P4", row: 0, label: "Distributed systems",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["DOC","STREAM"],
    desc: "Replication, partitioning, consistency, consensus, partial failure and backpressure. Every data platform is a distributed system, and most of its incidents are one of these failures in disguise.",
    res:  "Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed. (paid), why: written for exactly this path | MIT 6.5840 Distributed Systems (free lectures) | AWS Builders' Library (free)" },
  { id: "OBSDATA", phase: "P4", row: 1, label: "DataOps & data observability",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["ORCH","DQ"],
    desc: "Data SLAs and SLOs, freshness and lineage-aware alerting, incident response for data, CI/CD for pipelines and safe rollout of schema changes. Running data as a production service.",
    res:  "Book: Fundamentals of Data Observability, Petrella (paid), why: observability treated as a design property rather than a product | OpenLineage docs (free) | Google SRE book (free)" },
  { id: "SEMANTIC", phase: "P4", row: 2, label: "Semantic layer & metrics",
    priority: "desirable", kind: "branch", tracks: ["batch"],
    prereqs: ["DBT"],
    desc: "Defining metrics once and serving them consistently to dashboards, notebooks and AI assistants: semantic models, metric definitions, caching and access. The fix for three dashboards showing three different revenue numbers.",
    res:  "dbt Semantic Layer and MetricFlow docs (free) | Cube docs (free) | Book: The Data Warehouse Toolkit, conformed dimensions chapters (paid)" },
  { id: "PERF", phase: "P4", row: 3, label: "Query & Spark performance tuning",
    priority: "critical", kind: "branch", tracks: ["batch"],
    prereqs: ["SPARK","DBINT"],
    desc: "Reading query plans and the Spark UI, partition pruning, clustering and sort keys, broadcast versus shuffle joins, skew, caching and materialization. The difference between a platform that scales and one that only gets more expensive.",
    res:  "Apache Spark docs, performance tuning and Spark UI guides (free) | Warehouse query profile docs, e.g. Snowflake and BigQuery (free) | Book: High Performance Spark, Karau et al. (paid)" },
  { id: "TSDB", phase: "P4", row: 4, label: "IoT & time-series data",
    priority: "desirable", kind: "branch", tracks: ["streaming"],
    prereqs: ["STREAM"],
    desc: "Time-series storage and downsampling, MQTT and OPC UA ingestion, edge buffering under intermittent connectivity, and industrial historians. The data layer of sensors, plants and fleets.",
    res:  "TimescaleDB and InfluxDB docs (free) | Eclipse Mosquitto MQTT tutorials (free) | OPC UA specification overview (free), why: the protocol most plant equipment actually speaks" },
  { id: "RTOLAP", phase: "P4", row: 5, label: "Real-time analytics stores",
    priority: "desirable", kind: "branch", tracks: ["streaming"],
    prereqs: ["STATEFUL","DBINT"],
    desc: "Columnar engines built for fresh data and fast aggregation, such as ClickHouse, Apache Druid and Apache Pinot: ingestion from streams, pre-aggregation, and the latency and cost trade-offs against a warehouse.",
    res:  "ClickHouse docs and tutorials (free), why: open source and easy to run locally | Apache Pinot docs (free) | Apache Druid docs (free)" },
  { id: "FEAT", phase: "P4", row: 6, label: "Feature store & training data",
    priority: "desirable", kind: "branch", tracks: ["platform"],
    prereqs: ["LAKE","MLOPS"],
    desc: "Offline and online feature parity, point-in-time correctness, backfills, and reuse across models. The fix for training and serving skew once more than one model shares data.",
    res:  "Feast docs (free) | Book: Designing Machine Learning Systems, Chip Huyen, why: the feature chapter frames the skew problem best | Databricks feature engineering docs (free), why: where Tecton's managed feature platform ended up in 2025" },
  { id: "IAC", phase: "P4", row: 7, label: "IaC & policy as code",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["DOC","CLOUDDE"],
    desc: "Terraform or OpenTofu for every bucket, warehouse, cluster and permission, with policies checked in CI. A data platform that cannot be rebuilt from code cannot be audited or reproduced.",
    res:  "Book: Terraform: Up & Running, Brikman, 3rd ed. (paid), why: the practical standard text | OpenTofu and Terraform docs (free) | Open Policy Agent docs (free)" },
  { id: "K8S", phase: "P4", row: 8, label: "Kubernetes for ML",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["DOC","CLOUDDE"],
    desc: "Running data and ML workloads on Kubernetes: operators for Spark, Kafka and Flink, batch jobs and GPU scheduling, autoscaling, and knowing when a managed service is the better choice.",
    res:  "Kubernetes docs and tutorials (free) | Book: Kubernetes in Action, 2nd ed., Lukša & Conner (paid), why: revised in 2026 | Spark on Kubernetes and Strimzi operator docs (free)" },
  { id: "LINEAGE", phase: "P4", row: 9, label: "Data contracts & lineage",
    priority: "critical", kind: "branch", tracks: ["governance"],
    prereqs: ["DQ","ORCH"],
    desc: "Explicit agreements between data producers and consumers on schema, meaning and quality, enforced in CI and at runtime with schema registries, plus lineage from source to dashboard so the impact of a change is known before it ships.",
    res:  "OpenLineage docs (free), why: the open standard most lineage tools emit | Book: Driving Data Quality with Data Contracts, Andrew Jones (paid) | Confluent Schema Registry docs (free)" },
  { id: "PRIVACY", phase: "P4", row: 10, label: "Data privacy & PETs",
    priority: "critical", kind: "branch", tracks: ["governance"],
    prereqs: ["GOVDATA"],
    desc: "Privacy by design in pipelines: minimization, pseudonymization and anonymization and their limits, differential privacy, consent and purpose tracking, and deletion that reaches every copy.",
    res:  "Book: Practical Data Privacy, Katharine Jarmul (paid), why: written for data engineers and scientists rather than lawyers | OpenDP docs (free) | EDPB guidelines on pseudonymisation (free)" },

  // ─── P5 ─ Scale, cost & controls ──────────────────────────────────────
  { id: "DATACOST", phase: "P5", row: 0, label: "Cost & FinOps for data",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LAKE","SPARK","CLOUDDE"],
    desc: "Where a data platform's money goes: storage tiers, compute and slot models, egress, idle clusters and runaway queries; cost attribution per team and pipeline; and designing to a budget. In the cloud every design decision is also a cost decision.",
    res:  "Book: Cloud FinOps, Storment & Fuller, 2nd ed. (paid), why: the FinOps Foundation's practice in book form | FinOps Foundation framework (free) | Warehouse cost and resource monitoring docs (free)" },
  { id: "DVAULT", phase: "P5", row: 1, label: "Enterprise data modeling",
    priority: "desirable", kind: "branch", tracks: ["batch"],
    prereqs: ["DATAMOD","DBT"],
    desc: "Modeling for many sources and long histories: Data Vault, historized and bitemporal tables, conformed dimensions across domains, and keeping a model coherent while the organisation changes around it.",
    res:  "Book: Building a Scalable Data Warehouse with Data Vault 2.0, Linstedt & Olschimke (paid), why: the method's own reference | Kimball Group design tips archive (free) | AutomateDV dbt package docs (free)" },
  { id: "PRODAN", phase: "P5", row: 2, label: "Event tracking & product analytics",
    priority: "desirable", kind: "branch", tracks: ["batch"],
    prereqs: ["DBT","PROB"],
    desc: "Event schemas and tracking plans, sessions and funnels, attribution, and the data behind A/B tests, including the checks that catch a broken experiment before anyone reads its result.",
    res:  "Book: Trustworthy Online Controlled Experiments, Kohavi, Tang & Xu (paid), why: the reference on experiment data quality | Snowplow docs on tracking design (free) | GrowthBook docs on experiment analysis (free)" },
  { id: "EVENTS", phase: "P5", row: 3, label: "Event-driven systems & event sourcing",
    priority: "desirable", kind: "branch", tracks: ["streaming"],
    prereqs: ["STREAM","SYSDES"],
    desc: "Event-driven architecture from the data side: event design and versioning, event sourcing and CQRS, ordering and replay, and how operational events become analytical data without a nightly export.",
    res:  "Book: Designing Event-Driven Systems, Ben Stopford (free from Confluent), why: bridges service events and data pipelines | Martin Fowler, Event Sourcing (free) | Apache Kafka docs (free)" },
  { id: "KAFKAOPS", phase: "P5", row: 4, label: "Streaming platform operations",
    priority: "desirable", kind: "branch", tracks: ["streaming"],
    prereqs: ["STREAM","CLOUDDE","OBSDATA"],
    desc: "Running Kafka or a managed equivalent in production: partitions and retention, consumer lag, rebalancing, quotas, multi-region replication, upgrades and capacity planning.",
    res:  "Book: Kafka: The Definitive Guide, 2nd ed., operations chapters (free from Confluent) | Strimzi docs (free) | Confluent and Aiven engineering blogs (free)" },
  { id: "LLMDATA", phase: "P5", row: 5, label: "Data pipelines for LLM applications",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["PIPE","ML"],
    desc: "Ingesting and parsing documents, chunking, embedding pipelines, vector and hybrid indexes, freshness and deletion, and permission-aware retrieval data. The data layer the Applied AI path builds on.",
    res:  "Book: AI Engineering, Chip Huyen, retrieval and data chapters (paid), why: frames retrieval as a data problem | pgvector docs (free) | Unstructured and LlamaIndex ingestion docs (free)" },
  { id: "CLOUD", phase: "P5", row: 6, label: "Cloud ML platforms",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["MLOPS","CLOUDDE"],
    desc: "Managed ML platforms such as SageMaker, Vertex AI and Azure ML: training jobs, pipelines, registries, endpoints and monitoring, and where their abstractions leak.",
    res:  "Coursera: Google Cloud Machine Learning Engineer path | Amazon SageMaker docs (free) | Azure Machine Learning docs (free)" },
  { id: "DATASEC", phase: "P5", row: 7, label: "Data security & access control",
    priority: "critical", kind: "branch", tracks: ["governance"],
    prereqs: ["CLOUDDE","PRIVACY"],
    desc: "Role- and attribute-based access, row- and column-level security, masking, encryption and key management for data at rest and in transit, secrets in pipelines, and audit logs of who read what.",
    res:  "Unity Catalog, Snowflake and BigQuery access control docs (free), why: where these controls are actually configured | Apache Ranger docs (free) | OWASP Cheat Sheet Series (free)" },
  { id: "MDM", phase: "P5", row: 8, label: "Master & reference data",
    priority: "desirable", kind: "branch", tracks: ["governance"],
    prereqs: ["DATAMOD","GOVDATA"],
    desc: "Customer, product and location records that many systems disagree about: matching and entity resolution, golden records, survivorship rules and reference code lists. Unglamorous, and the reason two reports count customers differently.",
    res:  "Splink entity resolution library docs (free), why: open-source probabilistic matching from the UK Ministry of Justice | Book: Data Management at Scale, Strengholt, 2nd ed. (paid) | DAMA-DMBOK, reference and master data chapter (paid)" },

  // ─── P6 ─ Domain depth & frontier ─────────────────────────────────────
  { id: "DOMAIN", phase: "P6", row: 0, label: "Domain vertical",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["DATAMOD","DQ"],
    desc: "Real depth in one industry's data: what its records mean, how they are produced, which are regulated, and which numbers its people actually decide on. In Chile that is often mining and energy, where sensor and operations data meet business reporting.",
    res:  "No course. Sit with the people who produce and use the data, and read the domain's data standards, such as ISA-95 in industry or ISO 20022 in finance" },
  { id: "AIDATA", phase: "P6", row: 1, label: "AI agents for data work",
    priority: "frontier", kind: "branch", tracks: ["batch"],
    prereqs: ["SEMANTIC","DQ"],
    desc: "Text-to-SQL, AI analysts and agents that write pipelines, and what makes them reliable: semantic layers and catalogs as grounding, evaluation sets of real questions, and limits on what they may run. The tools that automate part of this job are the ones it now has to make trustworthy.",
    res:  "Spider 2.0 and BIRD text-to-SQL benchmarks (free), why: published evaluations of how often these systems are right | dbt Semantic Layer docs (free) | See also the Applied AI roadmap" },
  { id: "DATAMESH", phase: "P6", row: 2, label: "Data products & data mesh",
    priority: "desirable", kind: "branch", tracks: ["batch","governance"],
    prereqs: ["DATAMOD","DQ","OBSDATA"],
    desc: "Data as a product owned by the domain that produces it: product thinking, contracts, discoverability, federated governance and a self-serve platform, and the organisational conditions under which this works or fails.",
    res:  "Book: Data Mesh, Zhamak Dehghani (paid), why: the original argument in full | Book: Data Management at Scale, Strengholt, 2nd ed. (paid) | Published data mesh case studies (free)" },
  { id: "INDDATA", phase: "P6", row: 3, label: "Industrial data & OT integration",
    priority: "desirable", kind: "branch", tracks: ["streaming"],
    prereqs: ["TSDB"],
    desc: "Getting data out of plants, mines and grids: SCADA and historians, OPC UA and MQTT, ISA-95 levels, a unified namespace, and the network segmentation that keeps operational technology safe. The data side of the Edge AI and Control paths.",
    res:  "HiveMQ, MQTT Essentials (free), why: the clearest free introduction to MQTT-based plant data | OPC Foundation, OPC UA overview (free) | ISA-95 overview material (free)" },
  { id: "PLATENG", phase: "P6", row: 4, label: "Self-serve data platform engineering",
    priority: "desirable", kind: "branch", tracks: ["platform"],
    prereqs: ["IAC","K8S"],
    desc: "Building the internal platform other data teams use: templates and golden paths for new pipelines, environments on demand, guardrails instead of tickets, and measuring adoption. Platform engineering applied to data.",
    res:  "Book: Platform Engineering, Fournier & Nowland (paid), why: written by practitioners who built internal platforms | Backstage docs (free) | CNCF Platforms white paper (free)" },
  { id: "DATAENG", phase: "P6", row: 5, label: "Data engine & synthetic data",
    priority: "desirable", kind: "branch", tracks: ["platform"],
    prereqs: ["FEAT","MLOPS"],
    desc: "Closing the loop between deployed models and their training data at platform scale: mining failure cases, labeling pipelines, dataset versioning and synthetic data generation.",
    res:  "Book: Designing Machine Learning Systems, Huyen, training data chapters (paid) | Label Studio docs (free) | lakeFS or DVC docs for dataset versioning (free)" },
  { id: "DATAREG", phase: "P6", row: 6, label: "Data protection law & compliance",
    priority: "critical", kind: "branch", tracks: ["governance"],
    prereqs: ["PRIVACY"],
    desc: "Turning data law into pipeline requirements: lawful basis, purpose limitation, retention, data subject rights, cross-border transfers and breach notification under the GDPR, the EU Data Act and Chile's Ley 21.719, scheduled to take effect in December 2026 with a new data protection agency.",
    res:  "GDPR text and EDPB guidelines (free), why: the regime most others are modeled on | BCN Chile, Ley 21.719 (free) | EU Data Act, Regulation (EU) 2023/2854, on EUR-Lex (free)" },
  { id: "AIGOVDATA", phase: "P6", row: 7, label: "Data governance for AI",
    priority: "desirable", kind: "branch", tracks: ["governance"],
    prereqs: ["LINEAGE","GOVDATA"],
    desc: "Provenance, licensing and consent of training data, dataset documentation, representativeness checks, and the data governance duties the EU AI Act places on high-risk systems. Where data governance meets the model.",
    res:  "Datasheets for Datasets, Gebru et al. (free paper), why: the template most dataset documentation follows | EU AI Act, Article 10, data and data governance (free) | Data Provenance Initiative (free)" },

  // ─── P7 ─ Architecture & capstone (spine) ─────────────────────────────
  { id: "DATAARCH", phase: "P7", row: 0, label: "Data architecture",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["SYSDES","LAKE","OBSDATA"],
    desc: "Composing the platform: batch and streaming paths, where the source of truth lives, central versus domain-owned data, build versus buy, and how it is all secured, governed and paid for. Written down as decisions others can challenge.",
    res:  "Book: Designing Data-Intensive Applications, Kleppmann & Riccomini, 2nd ed. (paid) | Book: Fundamentals of Data Engineering, Reis & Housley (paid) | Architecture decision records (free), why: at this level the reasoning is the deliverable" },
  { id: "CAPDATA", phase: "P7", row: 1, label: "Capstone: Data platform",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["LAKE","ORCH","DQ","OBSDATA"],
    desc: "One end-to-end platform slice: ingestion to lakehouse to served data products, orchestrated, tested and monitored, with data contracts, cost attribution and infrastructure as code. The specialization sets its centre: a modeled warehouse, a streaming pipeline, a feature or retrieval platform, or a governed data product.",
    res:  "No course. Ship it as infrastructure-as-code with the data-quality tests running in CI" },
  { id: "LEAD", phase: "P7", row: 2, label: "Technical leadership",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["DATAARCH"],
    desc: "Setting direction, writing design docs and data strategy, mentoring, and negotiating with the many teams who produce and consume data. In data the hardest leadership work is getting producers to own the quality of what they emit.",
    res:  "Book: Staff Engineer, Will Larson, free web edition at staffeng.com | Write and publish design docs, why: influence in this field is exercised in writing" },
];

export default {
  id: "data-platform",
  name: "Data Engineering & Platforms",
  srLabel: "Data engineering and platforms curriculum grid",
  phases: PHASES,
  tracks: TRACKS,
  courses: COURSES,
};
