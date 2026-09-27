# Final Learning Roadmap Reference
## Edge AI / Physical AI Specialist Path

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no particular background in machine learning or edge deployment. Because of that degree, the math of Phase 0 is a single refresher course rather than a first pass. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis rather than a fixed course order.

This is a consolidated reference to the Edge / Physical AI skill stack; the demand evidence behind it is cited, with dates, in *Where the demand evidence points* below. The path is structured as an 8-phase curriculum, Phase 0 to Phase 7. Each phase is about 3 months of study (a quarter at the 10-15 hours a week budgeted below), so a full specialization runs 8 phases, about 2 years. In every phase a specialization takes 2 to 5 courses: the shared spine plus that specialization's own branch courses. Electives sit outside that count. A phase is done when its projects are shipped, not merely when the quarter ends.

**Strategic positioning:** Lead-market identity as "AI/ML Engineer with Edge deployment expertise": accesses the large AI/ML hiring pool while differentiating with hardware skills that cannot be commoditized by AI code assistants. Long-term trajectory toward Physical AI Architect as the robotics/autonomous systems market matures.

**Where the demand evidence points.** Every figure here comes from the sources registered in the roadmap standards (`market-sources.md`, checked on 2026-09-26) and carries its date, horizon and geography. Job titles are translated into the courses in this graph that serve them.

*Medium term (2 to 5 years):*
- **Machine learning, Deep learning & PyTorch, MLOps fundamentals** (the spine): the [WEF Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/) (Jan 2025; employer survey across 55 economies, 2025 to 2030) ranks AI and big data the fastest-growing skill and AI and machine learning specialists the third fastest-growing job. In the US, [BLS](https://www.bls.gov/ooh/math/data-scientists.htm) projects data scientists to grow 34.6% over 2025 to 2035 (released Aug 2026), against 3.5% for all jobs.
- **ROS2, Computer vision, 3D geometry & SLAM, RL & imitation learning** (Robotics / Physical AI): the [McKinsey Technology Trends Outlook 2026](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20top%20trends%20in%20tech%202026/mckinsey%20technology%20trends%20outlook%202026.pdf) (Sep 2026; 2024 to 2025 job postings, mainly English-speaking countries) counts robotics postings up 12%, with machine learning engineers now the largest robotics role and growing demand for skills in "robot perception, model training, and control systems". Gartner's [Top Strategic Technology Trends for 2026](https://www.gartner.com/en/newsroom/press-releases/2025-10-20-gartner-identifies-the-top-strategic-technology-trends-for-2026) (Oct 2025) names physical AI and says organizations "need new skills that bridge IT, operations, and engineering"; that is a technology-direction call, not a jobs forecast.
- **LLM serving & inference, Kubernetes for ML, Cloud ML platforms** (ML platform & data infra): the same McKinsey outlook counts AI infrastructure postings up 47% in 2024 to 2025, nearly triple their 2022 level.
- **Domain vertical, Jetson & edge deploy, OT & industrial security** (Chile, large-scale mining): the [Consejo de Competencias Mineras and Fundación Chile workforce study 2025 to 2034](https://ccm-eleva.cl/wp-content/uploads/2025/12/Estudio-Fuerza-Laboral-de-la-Gran-Mineria-2025-2034.pdf) (Dec 2025) projects autonomous haul trucks growing from 178 to about 550 by 2034, with AI implemented or piloted by 44% to 54% of respondents depending on the operating area, and cybersecurity in place in every integrated operations centre surveyed (nine company responses). Chile also had the region's highest AI human-talent score in [ILIA 2025](https://www.cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence-though) (CENIA and ECLAC, Oct 2025), and 2.4% of its 2025 job postings mentioned AI skills, against 2.6% in the US ([Stanford AI Index 2026, Lightcast data](https://lightcast.io/resources/research/stanford-ai-index-2026)).

*Counter-signals:* the same WEF survey expects robots and autonomous systems to be the largest net displacer of jobs by 2030 (about 5 million globally): the demand is for the people who build, deploy and maintain them, not for the work they replace. McKinsey notes robotics postings are still below earlier highs. Most of the 36,895 new mining workers the Chilean study projects to 2034 are replacement hires for technicians and operators; the engineering opening is the advanced maintenance, digital support and technology management that it says autonomy creates.

*Long term (5 to 15 years):* no quantitative forecast reaches past 2035. McKinsey's [Agents, Robots, and Us](https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/agents%20robots%20and%20us%20skill%20partnerships%20in%20the%20age%20of%20ai/agents-robots-and-us-skill-partnerships-in-the-age-of-ai.pdf) (Nov 2025, US) estimates that robots could technically take on activities in about 13% of US work hours, against 44% for software agents; that is technical potential, not a forecast of job losses. Read the rest as a scenario argument rather than a projection: whichever of the WEF's [Four Futures](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026) arrives, a model running on a vehicle, robot or plant still needs someone accountable for its latency, power and failure behaviour on real hardware.

**Three priority levels throughout:**
- `critical`: Minimum needed to *understand* a node, given the track you choose. Non-negotiable for that track.
- `desirable`: Competitive edge. Significant ROI but not blocking.
- `frontier`: Future bets. Long-term positioning.

**Four specializations** (pick one or more in the malla; the doc explains the study material for each node):
- **Edge inference & compilers**: ONNX export, TensorRT, LiteRT and OpenVINO, Jetson, GPU kernels and ML compilers, VLMs on device
- **Robotics / Physical AI**: ROS2, RL and imitation learning, sensor fusion, 3D geometry and SLAM, Isaac Sim, fleet
- **Industrial safety & ML assurance**: IEC 61508 and ISO 26262, perception verification, ML safety cases (AMLAS, SOTIF, ISO/PAS 8800), IEC 62443 OT security, industrial edge targets
- **ML platform & data infra**: data pipelines, lakehouse, streaming, feature stores, LLM serving, Kubernetes for ML, cloud ML

The LLM-application courses (RAG and vector databases, multi-agent systems, general LLM fine-tuning) live in the Applied AI roadmap. This path keeps only the edge-relevant slice: adapting small models for a device, folded into *Domain-specific models*.

**Resource tagging:**
- **Best match**: the first resource of every node, the same one the graph card leads with
- (free): free
- (paid, ~$N) or (paid): paid, with the cost where known
- (Coursera Plus): included in a Coursera Plus subscription

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Resources`, a `Study approach` (how to learn it efficiently), and a `Project` (a concrete shippable deliverable). Prerequisites and Unlocks name the graph's courses exactly. The project is the proof of competence: without it, a node is unfinished.

---

## PHASE 0: Foundations (Tools & Math Refresher)

*These have no prerequisites. Verify mastery and skip what you already know.*

### Linux & CLI `critical`
**Prerequisites:** none
**Unlocks:** Docker & CI/CD, ROS2, Data pipelines & SQL, AI-assisted dev workflows
**Resources:**
- **Best match:** Linux Journey: linuxjourney.com (free)
- MIT: The Missing Semester, missing.csail.mit.edu (free)
**Study approach:** Skim Missing Semester end-to-end in one day. Drill only sections that feel rusty (shell scripting, ssh + tmux, find/xargs, regex).
**Project:** Personal dotfiles repo on GitHub with a bootstrap script. Use it to set up a fresh VM in under 10 minutes.

### Python `critical`
**Prerequisites:** none
**Unlocks:** Machine learning, ROS2, Data pipelines & SQL, AI-assisted dev workflows
**Resources:**
- **Best match:** Coursera: **Python for Everybody**, University of Michigan (Coursera Plus)
- Book: *Automate the Boring Stuff*, automatetheboringstuff.com (free)
- Modern Python: realpython.com tutorials on type hints, dataclasses, async, pathlib (free)
**Study approach:** If new, take Python for Everybody or work through *Automate the Boring Stuff*. If experienced, focus on idiomatic modern Python (type hints, dataclasses, context managers, async/await).
**Project:** A small CLI tool with `argparse`, type hints, `pytest` tests, and a `pyproject.toml`. Publish to PyPI as a learning exercise.

### C++ `critical`
**Prerequisites:** none
**Unlocks:** ROS2, CUDA & GPU computing, TensorRT, GPU kernels & profiling, Neuromorphic computing
**Resources:**
- **Best match:** Book: *A Tour of C++*, Bjarne Stroustrup (paid, ~$40). Modern C++17/20 focus.
- learncpp.com (free): most comprehensive free resource. Skim advanced chapters.
- Coursera: **C++ for C Programmers**, UC Santa Cruz: only if you come from C.
**Study approach:** Read *A Tour of C++* cover to cover. Treat modern C++ (smart pointers, lambdas, move semantics, ranges) as the default: don't dwell on legacy idioms.
**Project:** Implement a thread-safe queue with a producer/consumer benchmark in C++17. CMake build, GitHub Actions CI, valgrind/sanitizer-clean. *Why:* TensorRT's native C++ API is the differentiator over Python-only ML engineers.

### Math for ML refresher `critical`
**Prerequisites:** none
**Unlocks:** Machine learning, CUDA & GPU computing, Sensor fusion, 3D geometry & SLAM, Quantum-AI hybrids
**Resources:**
- **Best match:** Coursera: **Mathematics for Machine Learning Specialization**, Imperial College London (Coursera Plus). Linear algebra, multivariate calculus and PCA in one sequence.
- 3Blue1Brown: *Essence of Linear Algebra* and *Essence of Calculus*, YouTube (free)
- Book: *Think Stats*, Allen Downey (free, thinkstats2.com)
- MIT 18.06: Strang lectures (free), for problem practice where you are rusty
**Study approach:** A refresher, not a first pass: the degree gave you the material, so aim for fluency at the depth ML uses. 3Blue1Brown first for intuition (Essence of Linear Algebra, 3-4 hours; Essence of Calculus, about 3 hours). Then the Imperial specialization for structured practice, with Strang or Khan Academy only where problem-solving feels rusty. Focus on geometric intuition, not proofs, and refresh the chain rule and partial derivatives: both are essential for backprop intuition. Close with *Think Stats* in 5-7 hours: Bayesian thinking, common distributions, MLE, hypothesis testing. Avoid frequentist-only material: Bayesian framing maps better to ML.
**Project:** Three small builds in one NumPy repo. Linear regression and PCA from scratch, verified against scikit-learn within numerical tolerance. Backpropagation by hand for a 2-layer MLP without autograd, trained on XOR, with the learned weights checked against the expected geometry. A Bayesian A/B test calculator (CLI is fine), validated against a known closed-form result.

### Git & version control `critical`
**Prerequisites:** none
**Unlocks:** Docker & CI/CD, AI-assisted dev workflows
**Resources:**
- **Best match:** git-scm.com tutorial (free)
- GitHub Skills (free)
**Study approach:** GitHub Skills modules in a day. Learn `rebase`, `cherry-pick`, `bisect` explicitly: they save real time later.
**Project:** A "showcase" repo with proper branching strategy, signed commits, PR templates, CI badges. Use it as the template for everything you build going forward.

### English working fluency `desirable`
**Prerequisites:** none
**Unlocks:** none in this graph
**Why it matters:** The highest ROI non-technical skill on this path, and a continuous lane from Phase 0 onward rather than a one-quarter course. **Target:** B2 within 12 months, C1 within 24 months. B2+ English unlocks:
- Remote positions with US and EU companies
- International conference talks
- Access to Big Tech and top AI labs

**Resources:**
- **Best match:** any structured B2 to C1 program. The one this path uses: italki conversation tutors, italki.com (paid, ~$10-15/hour). 1x/week for 6 months = the most impactful single investment.
- Write 1 technical blog post per month in English (free). Active practice + portfolio in one move.
- BBC Learning English, EnglishClass101 (free). Listening + grammar.
- Cambridge B2 First or IELTS certification (paid, ~$200-250). Formal credential when ready.
**Study approach:** 1 hour/week of tutoring is the floor: pair it with daily passive immersion (watch technical talks in English, read docs in English natively, write Slack messages in English where applicable). The single biggest mistake is treating English as a class rather than a daily habit.
**Project:** Public-facing portfolio in English: blog posts, GitHub READMEs, a recorded conference talk. Volume matters more than perfection.

---

## PHASE 1: Core ML & Tools

### Machine learning `critical`
**Prerequisites:** Python, Math for ML refresher
**Unlocks:** Deep learning & PyTorch, MLOps fundamentals, Quantum-AI hybrids
**Resources:**
- **Best match:** Coursera: **Machine Learning Specialization**, Andrew Ng, Stanford (Coursera Plus)
- Book: *Hands-On Machine Learning*, Aurélien Géron (paid, ~$50). Best practical reference.
- fast.ai Practical Deep Learning for Coders (free)
**Study approach:** Andrew Ng's spec for theory baseline (top-down concepts). Then *Hands-On ML* chapters 1-9 for practical implementation. Skip the theory courses if already comfortable with the math.
**Project:** End-to-end ML pipeline on a custom dataset: collect/scrape → clean → train → evaluate → ship as a FastAPI endpoint. Public on GitHub with a README that explains every choice. Aim for top-30% on a relevant Kaggle leaderboard with the same model.

### Docker & CI/CD `critical`
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** MLOps fundamentals, Real-time streaming, Jetson & edge deploy, LLM serving & inference, Distributed systems, Kubernetes for ML
**Resources:**
- **Best match:** Docker official getting-started (free)
- Coursera: **IBM DevOps & SWE** (Coursera Plus)
- GitHub Actions docs (free)
**Study approach:** Docker getting-started in one day. Then containerize a real Python service to internalize Dockerfile patterns (multi-stage builds, layer caching, slim base images).
**Project:** Containerize the ML pipeline above. Add GitHub Actions for build/test/push to GHCR. Multi-stage Dockerfile with image under 200 MB. Document the CI workflow in the README.

### ROS2 `critical`
**Prerequisites:** C++, Python, Linux & CLI
**Unlocks:** NVIDIA Isaac Sim, Capstone: Physical AI
**Resources:**
- **Best match:** Udemy: **ROS2 for Beginners (ROS Jazzy, 2026)**, Edouard Renard (paid, ~$15 on sale)
- The Construct: theconstruct.ai (free tier). Browser-based robot labs, no hardware needed.
- Official docs: docs.ros.org (free)
- Book: *A Concise Introduction to Robot Programming with ROS2*, Martín Rico (paid, ~$40, 2024 edition)
**Study approach:** Udemy course on sale for structure. Pair with The Construct for hands-on without hardware. Use Martín Rico book as the desk reference. Learn both C++ and Python ROS2 nodes: the ecosystem is mixed. It sits in Phase 1 of the robotics track so every later perception and policy project can run inside a ROS 2 graph.
**Project:** Build a small autonomous robot (sim is fine, Gazebo) with the Nav2 stack: SLAM, path planning, obstacle avoidance. Public on GitHub with a recorded Gazebo demo and a README explaining the navigation pipeline.

### Data pipelines & SQL `critical`
**Prerequisites:** Python, Linux & CLI
**Unlocks:** Lakehouse & warehouse, Real-time streaming
**Resources:**
- **Best match:** Data Engineering Zoomcamp, DataTalks.Club (free)
- Book: *Fundamentals of Data Engineering*, Reis & Housley (paid)
- dbt docs (free): the standard for tested, version-controlled transforms
**Study approach:** Zoomcamp end-to-end as the hands-on backbone (ingestion, orchestration, warehouse, batch). Read *Fundamentals of Data Engineering* alongside it for the lifecycle vocabulary. Learn SQL window functions and query plans properly; most pipeline bugs are SQL bugs. Add dbt tests from the first transform rather than retrofitting them.
**Project:** A scheduled pipeline that ingests a public, messy dataset (sensor logs or a transit feed), lands it raw, transforms it with dbt into tested tables, and runs under Airflow or Dagster with data-quality checks that fail the run. Public repo with a lineage diagram.

### AI-assisted dev workflows `desirable`
**Prerequisites:** Linux & CLI, Git & version control, Python
**Unlocks:** none in this graph; cross-cutting, it accelerates work on every later node
**Resources:**
- **Best match:** Anthropic Claude Code documentation: docs.anthropic.com/claude-code (free). Primary reference: hooks, slash commands, sub-agents, settings, MCP integration.
- Anthropic prompt engineering guide: docs.anthropic.com (free)
- Model Context Protocol (MCP) documentation: modelcontextprotocol.io (free)
- Anthropic Academy, including the *Claude Code in Action* course (free)
**Study approach:** Skim the Claude Code docs end-to-end first to know the surface area (hooks, slash commands, sub-agents, settings, MCP). Then learn by doing: configure it for a real repo and iterate. Read the prompt-engineering guide *after* hands-on experience; the abstract advice lands better with concrete failures behind it. Treat this as a productivity layer over the rest of the roadmap, not a replacement for understanding the underlying code or the domain. Distinct from *building* agents (LangGraph/CrewAI), which the Applied AI roadmap covers; this node is about using a coding assistant.
**Project:** Configure Claude Code on a non-trivial repo: a `CLAUDE.md`, at least one custom slash command, one hook, and one MCP server connecting an external system (issue tracker, monitoring, internal docs). Ship a non-trivial PR co-authored with the assistant and write up the workflow: prompts that worked, prompts that failed, and which guardrails (hooks, sub-agents, scoped permissions) actually mattered.

---

## PHASE 2: DL & Operations

### Deep learning & PyTorch `critical`
**Prerequisites:** Machine learning
**Unlocks:** ONNX & model export, Computer vision, LLM fundamentals, AI evaluation, RL & imitation learning, Domain vertical, Data engine & synthetic data, AI safety & governance, Cloud ML platforms
**Resources:**
- **Best match:** Coursera: **Deep Learning Specialization**, Andrew Ng (Coursera Plus). 5 courses.
- fast.ai Practical Deep Learning (free, course.fast.ai). More code-first.
- PyTorch tutorials (free)
**Study approach:** Pick one of {Andrew Ng spec, fast.ai} based on style: Ng is bottom-up math, fast.ai is top-down code. Read selected chapters of Goodfellow's *Deep Learning* (6-9) for backprop and regularization theory.
**Project:** Train a non-trivial CV model on a custom dataset (50+ classes or unusual domain). Document architecture choices, ablations, and failure modes. Public repo with reproducible training scripts and benchmarks.

### MLOps fundamentals `critical`
**Prerequisites:** Machine learning, Docker & CI/CD
**Unlocks:** AI evaluation, Functional safety for ML, Feature store & training data, Domain vertical, Data engine & synthetic data, Distributed systems, AI governance engineering, Kubernetes for ML, Cloud ML platforms
**Resources (ranked, most important first):**
- **Best match:** Book: **Designing Machine Learning Systems**, Chip Huyen (paid, ~$50). **Must-read.** Canonical text; everything else fills in around it.
- **MLOps Zoomcamp**: DataTalks.Club (free). Best free hands-on, end-to-end course. Project-based.
- **Made With ML**: Goku Mohandas (free, madewithml.com). End-to-end MLOps with strong software-engineering rigor (FastAPI serving, MLflow, Ray, testing).
- Coursera: **Machine Learning in Production**, DeepLearning.AI / Andrew Ng. A single course, the successor to the retired MLOps Specialization (its other three courses no longer exist). Well structured Coursera introduction.
- Coursera: **MLOps Specialization, Duke University** (Coursera Plus). Lighter alternative: use it since it's already paid for, but don't rely on it alone.
- **Full Stack Deep Learning**: fullstackdeeplearning.com (free). Berkeley/UW lectures on YouTube. Especially strong on the non-modeling parts (data, evaluation, deployment, team workflows).
- **Eugene Yan's blog**: eugeneyan.com (free). Reference, not a course. High-signal posts on production patterns (recsys design, eval harnesses, online vs offline metrics).
**Study approach:** *Designing ML Systems* is the spine: read it first if buying time matters, since the courses largely follow it. Pair with MLOps Zoomcamp or Made With ML for hands-on reps. Use Duke (already paid for) and DeepLearning.AI's *Machine Learning in Production* as structured lecture supplements if you want a guided pace. Full Stack DL and Eugene Yan are reference material: dip in when a specific topic (deployment, eval, recsys) needs depth.
**Project:** Take the Phase 1 ML project and add: experiment tracking (MLflow), data versioning (DVC), model registry, drift monitoring, CI/CD for retraining. Architecture diagram in README.

### CUDA & GPU computing `desirable`
**Prerequisites:** C++, Math for ML refresher
**Unlocks:** GPU kernels & profiling
**Resources:**
- **Best match:** NVIDIA DLI: **Fundamentals of Accelerated Computing with Modern CUDA C++** (paid, ~$90). High signal.
- Coursera: **GPU Programming Specialization**, Johns Hopkins (Coursera Plus)
- Book: *Programming Massively Parallel Processors* (PMPP), Hwu & Kirk (paid, ~$70). The reference text.
**Study approach:** Rated desirable for the path: it is the base of the kernel and compiler courses in the edge track, and optional for readers who stop at TensorRT. NVIDIA DLI Fundamentals course (intensive, paid, worth it). Pair with PMPP textbook for memory-hierarchy depth. Always pair theory with profiling: never write a kernel without measuring it.
**Project:** Implement a matrix-multiplication kernel in CUDA C++. Benchmark against `cuBLAS`. Profile with Nsight Compute. Reach >50% of `cuBLAS` performance for at least one tile size. Public on GitHub with profile traces.

### Lakehouse & warehouse `critical`
**Prerequisites:** Data pipelines & SQL
**Unlocks:** Feature store & training data
**Resources:**
- **Best match:** Apache Iceberg docs (free)
- Delta Lake docs (free)
- Book: *The Data Warehouse Toolkit*, Kimball (paid): dimensional modelling still underpins every analytical layer
**Study approach:** Iceberg docs first for the table-format concepts (snapshots, partition evolution, time travel), then Delta for comparison; the ideas transfer. Read the opening chapters of Kimball for dimensional modelling. Run everything locally (Spark or DuckDB against object storage) before touching a managed service.
**Project:** Turn the Phase 1 pipeline's output into an Iceberg (or Delta) lakehouse on local object storage (MinIO). Demonstrate schema evolution, time travel to reproduce an old training set, and a partitioning change measured by query time. Document when a plain warehouse would have been the simpler answer.

---

## PHASE 3: Vision, LLMs & Export

### ONNX & model export `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** TensorRT, LiteRT & OpenVINO, ML compilers & runtimes
**Resources:**
- **Best match:** ONNX Runtime docs: onnxruntime.ai (free)
- ONNX GitHub tutorials (free)
- onnx-simplifier on GitHub (free): essential for production export
**Study approach:** ONNX Runtime tutorials in one day. Practice export from PyTorch and TF, then debug operator-coverage gaps with `onnx-simplifier`. Get comfortable reading the ONNX graph in Netron.
**Project:** Export the CV model from Phase 2 to ONNX. Benchmark ONNX Runtime on CPU and GPU vs native PyTorch. Document the conversion workflow including any operator workarounds. Publish as a how-to blog post.

### Computer vision `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** Vision Transformers, Sensor fusion, 3D geometry & SLAM, Functional safety for ML, Perception verification, Bio-digital / medical AI
**Resources:**
- **Best match:** **Hugging Face Computer Vision Course**: huggingface.co/learn/computer-vision-course (free). Covers modern transformer-era CV.
- Stanford CS231n 2024 lectures: YouTube (free). Theory depth.
- Book: *Deep Learning for Vision Systems*, Mohamed Elgendy (paid, ~$50). Chapters 8-12 only.
**Study approach:** HuggingFace CV Course end-to-end (it's already transformer-aware). CS231n for theory depth on convolutions and detection: skip the older chapters that pre-date ViT.
**Project:** Train YOLOv11 (or current SOTA) on a custom dataset with no public benchmarks. Deploy as a real-time webcam demo. Compare against a classical baseline (Haar/HOG). Report mAP, FPS, and a public confusion-matrix breakdown.

### Vision Transformers `critical`
**Prerequisites:** Computer vision
**Unlocks:** Vision-language models
**Resources:**
- **Best match:** Hugging Face CV Course (free): continues from the computer vision node
- Original papers (free, arxiv):
  - ViT: *An Image is Worth 16x16 Words* (Dosovitskiy et al., 2020)
  - CLIP: *Learning Transferable Visual Models from Natural Language Supervision* (Radford et al., 2021)
  - SAM: *Segment Anything* (Kirillov et al., 2023)
**Study approach:** Read the three papers in publication order: it's a natural progression. Pair each paper with the corresponding HuggingFace tutorial to bridge theory → code.
**Project:** Build a CLIP-powered semantic image search over a 10k+ image dataset. Deploy with a vector DB (Chroma or pgvector). Public demo + writeup of the embedding-space exploration (t-SNE visualization, retrieval failure cases).

### LLM fundamentals `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** LLM serving & inference, Domain-specific models, AI safety research
**Resources:**
- **Best match:** Coursera: **Generative AI with Large Language Models**, DeepLearning.AI + AWS (Coursera Plus)
- Andrej Karpathy: *Let's build GPT from scratch*, YouTube (free). Must-watch.
- *Attention is All You Need*, original transformer paper (free, arxiv)
**Study approach:** Karpathy's video first (intuition). Then DeepLearning.AI LLM course for application-level fluency. Read the transformer paper alongside Karpathy: match the math to the code.
**Project:** Implement a small GPT (10-50M params) from scratch in PyTorch (no `transformers` library). Train on TinyShakespeare. Document the math line-by-line in a notebook. Compare your loss curve to nanoGPT.

### Real-time streaming `critical`
**Prerequisites:** Data pipelines & SQL, Docker & CI/CD
**Unlocks:** IoT & time-series data, Capstone: Data platform
**Resources:**
- **Best match:** Apache Flink docs (free)
- Confluent Kafka tutorials (free)
- Book: *Designing Data-Intensive Applications*, Kleppmann (paid, ~$60): the clearest treatment of streams versus tables
**Study approach:** Kafka tutorials first for logs, partitions and consumer groups; then Flink for stateful processing, windows and watermarks. Read the DDIA stream-processing chapter before designing anything. Learn delivery semantics by breaking them: kill consumers mid-run and check what was lost or duplicated.
**Project:** A sensor-to-model stream: simulated device events into Kafka, a Flink job computing windowed features, and a model scoring them, with end-to-end latency measured under load. Include a failure test (broker restart, consumer crash) and document the delivery guarantee you actually achieved.

---

## PHASE 4: Optimization & Specialization

*RAG & vector DBs and LLM fine-tuning moved to the Applied AI roadmap; the edge-relevant part of fine-tuning lives in Domain-specific models (Phase 6).*

### TensorRT `critical`
**Prerequisites:** ONNX & model export, C++
**Unlocks:** Jetson & edge deploy
**Resources:**
- **Best match:** TensorRT official docs and quick-start samples: docs.nvidia.com/deeplearning/tensorrt (free). Primary reference.
- Jetson AI Lab tutorials (free)
- Udemy: **Full Course on TensorRT, ONNX for Development and Production**, Fikrat Gasimov (paid, ~$15 on sale). Covers C++ API, Docker integration, Jetson deployment.
- NVIDIA DLI: **Optimization and Deployment of TensorFlow Models with TensorRT**, courses.nvidia.com (paid, nominal fee). TF-TRT only; optional.
**Certification:** NVIDIA Physical AI Certification (new 2026): nvidia.com/training (paid, ~$50-100 with webinar discount)
**Study approach:** The quick-start samples and the Jetson AI Lab tutorials first. Then Udemy deep dive on sale for the C++ API and Docker integration. Skip Python-only TRT tutorials: the moat is the C++ side.
**Project (KEYSTONE):** Quantize a YOLO model FP32 → FP16 → INT8 with calibration. Deploy on Jetson Orin Nano. Publish a blog post with the full benchmark table (latency, accuracy, model size, power draw). This is the single most career-defining portfolio project for the edge track.

### LiteRT & OpenVINO `desirable`
**Prerequisites:** ONNX & model export
**Unlocks:** Capstone: Edge inference
**Resources:**
- **Best match:** Edge Impulse free tier: edgeimpulse.com
- LiteRT docs, formerly TensorFlow Lite (free)
- OpenVINO docs: docs.openvino.ai (free)
- Book: *TinyML*, Pete Warden (paid, ~$50)
**Study approach:** Edge Impulse hands-on first, with the LiteRT official guide as the reference. Don't skip int8 quantization-aware training (QAT): it's the difference between "barely works" and "production-ready" on MCUs. Safety-track readers: spend more of the time on OpenVINO, since Intel CPUs and industrial PCs are the usual plant-floor target.
**Project:** Deploy a small CV model to a Coral USB accelerator OR Raspberry Pi (CPU). Benchmark against the same model on Jetson. Document the tradeoffs (accuracy vs latency vs power vs cost). Safety track: make the second target an Intel CPU running OpenVINO.

### GPU kernels & profiling `desirable`
**Prerequisites:** CUDA & GPU computing, C++
**Unlocks:** ML compilers & runtimes
**Resources:**
- **Best match:** Triton tutorials: triton-lang.org (free)
- CUTLASS GitHub examples (free)
- NVIDIA Nsight Compute docs (free)
- MIT 6.5940 TinyML and Efficient AI Computing (free lectures): the best structured course on pruning, quantization and distillation
- GPU MODE Discord & YouTube (free): best community for kernel work
**Study approach:** Triton tutorials end-to-end (it's the on-ramp; CUDA C++ for kernels is harder). Then CUTLASS examples for real production matrix work. Pair every kernel with Nsight Compute profiling: never write blind.
**Project (KEYSTONE):** Write a Triton kernel that beats `torch.matmul` on a specific shape (e.g., long sequence × small head dim, common in transformer inference). Profile with Nsight Compute. Publish the kernel + benchmarks + profiling traces. This is the keystone portfolio project for the compiler half of the edge track.

### AI evaluation `critical`
**Prerequisites:** Deep learning & PyTorch, MLOps fundamentals
**Unlocks:** Perception verification, AI governance engineering
**Resources:**
- **Best match:** Book: *AI Engineering*, Chip Huyen (paid): the most practical published treatment of evaluation
- Voxel51 FiftyOne model evaluation docs (free): slice-level metrics for detection and segmentation
- OpenAI Evals repo (free)
**Study approach:** Read the evaluation chapters of *AI Engineering* first for the framing: what to measure, how aggregate metrics mislead, when a judge model can be trusted. Then practise on your own perception model with FiftyOne: slice the test set by lighting, distance or class and find where the aggregate hides failures. From here on, treat every optimization (quantization, pruning, a new runtime) as a change that must pass a regression suite.
**Project:** A regression suite for the Phase 3 CV model: a frozen, sliced test set, per-slice metrics, and a CI job that fails when an INT8 or pruned build loses more than a set tolerance on any slice. If your track works with LLM or VLM outputs, add one LLM-as-judge check and document where it disagrees with human labels.

### Sensor fusion `desirable`
**Prerequisites:** Computer vision, Math for ML refresher
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Coursera: **Self-Driving Cars Specialization**, University of Toronto (Coursera Plus)
- Cyrill Stachniss lectures: YouTube (free). Best free SLAM resource.
- Book: *Probabilistic Robotics*, Thrun, Burgard & Fox (paid, ~$65). Academic gold standard.
**Study approach:** UToronto specialization for Kalman/EKF mechanics. Cyrill Stachniss YouTube playlist for SLAM depth: better than any course on this topic.
**Project:** Implement Kalman filter and EKF from scratch in C++ on simulated GPS+IMU data. Add a particle filter for non-Gaussian cases. Compare your output against a reference solution from Stachniss exercises.

### RL & imitation learning `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** none in this graph; beyond it, modern policy-learning robotics and VLA models
**Resources:**
- **Best match:** Berkeley CS285: Sergey Levine (free, YT). Theory depth.
- OpenAI Spinning Up (free). Hands-on RL.
- DeepMind RL course: David Silver (free, YT)
- Diffusion Policy paper (free, arxiv): current SOTA for manipulation
**Study approach:** Spinning Up for hands-on PPO/SAC fundamentals. Then CS285 for theory depth. Read the Diffusion Policy paper to understand the modern (post-2023) policy-learning stack.
**Project (KEYSTONE):** Train PPO on Pendulum and CartPole. Then train Behavior Cloning + Diffusion Policy on Robomimic. Deploy at least one policy on Isaac Sim or a real robot arm. Public training curves, rollout videos, and ablations.

### 3D geometry & SLAM `critical`
**Prerequisites:** Computer vision, Math for ML refresher
**Unlocks:** Capstone: Physical AI
**Resources:**
- **Best match:** Cyrill Stachniss: Photogrammetry & SLAM lectures, YouTube (free): the clearest free lecture series on the subject
- Gao Xiang: *Introduction to Visual SLAM*, book plus code
- Barfoot: *State Estimation for Robotics*, free PDF: the rigorous reference for pose estimation
**Study approach:** Stachniss lectures in order, implementing each piece as you go: camera model and calibration, then epipolar geometry, then triangulation. Use Gao Xiang's book and code as the implementation companion. Keep Barfoot for when a derivation goes too fast, especially Lie groups for poses.
**Project:** Calibrate a real camera with OpenCV, then build a minimal stereo or monocular visual odometry pipeline on a public dataset (KITTI or TUM RGB-D) and compare its trajectory against ground truth (ATE and RPE). Add bundle adjustment or loop closure and show the drift it removes.

### Functional safety for ML `critical`
**Prerequisites:** MLOps fundamentals, Computer vision
**Unlocks:** ML safety assurance; beyond the graph, senior roles in regulated industries (industrial, medical, automotive)
**Resources:**
- **Best match:** IEC 61508 white papers (free)
- Book: *Functional Safety for Embedded Systems*, Hobbs (paid, ~$80)
- Safety-Critical AI papers (free, arxiv): small but growing field
- ISO 26262 standard (automotive), IEC 62443 (industrial security)
**Study approach:** IEC 61508 white papers first for vocabulary (SIL levels, fault trees, safety integrity). Then Hobbs's book for embedded application. The intersection of ML and functional safety is mostly papers, not yet a textbook field; the ML-specific methods come in Perception verification and ML safety assurance, so this node is about the classical frame they plug into.
**Project:** Write a safety case for a hypothetical industrial ML deployment (e.g., conveyor-belt defect detection at SIL-2). Map model components to IEC 61508 requirements. Identify gaps between current ML practice and standards. Publish as a public document: there are very few examples online, so this alone signals expertise.

### Feature store & training data `desirable`
**Prerequisites:** Lakehouse & warehouse, MLOps fundamentals
**Unlocks:** Capstone: Data platform
**Resources:**
- **Best match:** Feast docs (free)
- Book: *Designing Machine Learning Systems*, Chip Huyen (paid, ~$50): the feature chapter frames the skew problem best
- Databricks feature engineering docs (free): where Tecton's managed feature platform ended up in 2025
**Study approach:** Read the features chapter of *Designing ML Systems* first, so the problem (training/serving skew, point-in-time leakage) is clear before the tool. Then the Feast quickstart against your own lakehouse. Build a leaky training set once, on purpose, and catch it.
**Project:** Feast on top of the Phase 2 lakehouse: offline and online stores, a point-in-time-correct training set, and an online lookup used by a served model. Include a test proving no future data leaks into training, and a backfill after a feature definition changes.

### IoT & time-series data `desirable`
**Prerequisites:** Real-time streaming
**Unlocks:** none in this graph
**Resources:**
- **Best match:** TimescaleDB and InfluxDB docs (free)
- Eclipse Mosquitto MQTT tutorials (free)
- OPC UA specification overview (free): the protocol most plant equipment actually speaks
**Study approach:** MQTT with Mosquitto first (publish/subscribe, QoS levels, retained messages), then OPC UA for the information model plant equipment exposes. Store in TimescaleDB or InfluxDB and learn retention, downsampling and continuous aggregates. Test with the network pulled: edge buffering is where industrial deployments fail.
**Project:** An edge gateway that reads simulated OPC UA tags and MQTT sensors, buffers locally through a network outage, and syncs to a time-series database with downsampled rollups. Show the outage and the recovery on a dashboard.

---

## PHASE 5: Deploy & Build

*Multi-agent systems moved to the Applied AI roadmap.*

### Domain vertical `critical`
**Prerequisites:** Deep learning & PyTorch, MLOps fundamentals
**Unlocks:** OT & industrial security, Domain-specific models, AI systems architecture, Bio-digital / medical AI
**Resources by vertical:**
- **Best match:** Coursera domain specializations for your vertical, as listed below
- Industrial: OPC-UA spec, opcfoundation.org (free), IEC 61508 / IEC 62443 white papers, Coursera **Smart Manufacturing**, UB (Coursera Plus)
- Medical: DICOM standard, HIPAA compliance docs, Coursera **AI for Medicine**, DeepLearning.AI (Coursera Plus)
- Automotive: ISO 26262 white papers, AUTOSAR docs, Coursera **Self-Driving Cars**, UToronto (Coursera Plus)
- Energy: IEC 61850, SCADA basics, time-series forecasting depth
- Industry events for any vertical (paid, varies)
**Study approach:** Pick exactly ONE vertical and go deep: domain knowledge is the moat. Get fluent in the standards, the jargon, and the conferences. Attend at least one in-person industry event per year.
**Project:** A vertical-specific demo that a non-ML expert in that vertical would recognize as their problem. Examples: industrial defect detection on synthetic factory imagery; medical chest X-ray classifier with FDA-aligned evaluation framework; automotive lane-keeping with ISO-26262-style failure-mode docs.

### Jetson & edge deploy `critical`
**Prerequisites:** TensorRT, Docker & CI/CD
**Unlocks:** Vision-language models, NVIDIA Isaac Sim, Capstone: Edge inference, AI fleet architect, Capstone: Physical AI, Neuromorphic computing
**Resources:**
- **Best match:** NVIDIA Jetson tutorials (developer.nvidia.com/blog) and Jetson AI Lab (free). Follow weekly.
- NVIDIA DLI Jetson workshops (paid, ~$30 each)
- Book: *AI at the Edge*, Situnayake & Plunkett (paid, ~$50)
- Hardware: Jetson Orin Nano Super dev kit (~$399)
**Study approach:** NVIDIA developer blog as the rolling reference. AI at the Edge book as the conceptual framing. Real hardware required: emulators don't exercise the same memory/thermal envelope.
**Project:** End-to-end edge deployment pipeline on Jetson: TensorRT-optimized model + DeepStream pipeline + Docker container + remote OTA updates + basic monitoring (Prometheus). Public architecture diagram and a writeup of one production gotcha you discover.

### LLM serving & inference `critical`
**Prerequisites:** LLM fundamentals, Docker & CI/CD
**Unlocks:** none in this graph
**Resources:**
- **Best match:** vLLM docs (free): the reference implementation of paged attention
- SGLang docs (free)
- Book: *AI Engineering*, Chip Huyen (paid)
**Study approach:** Serve an open model with vLLM first and read how paged attention and continuous batching work before tuning anything. Then run SGLang on the same workload. Measure time to first token, tokens per second and memory under concurrent load; every tuning decision should move one of those numbers.
**Project:** Serve a 4-bit quantized open model (AWQ or GPTQ) with vLLM on one GPU, load-test it at increasing concurrency, and publish latency percentiles, throughput and cost per million tokens against the FP16 baseline. Edge-track readers: repeat the measurement on a Jetson and compare.

### ML compilers & runtimes `desirable`
**Prerequisites:** GPU kernels & profiling, ONNX & model export
**Unlocks:** Capstone: Edge inference
**Resources:**
- **Best match:** Machine Learning Compilation course, Tianqi Chen, mlc.ai (free): the one open lecture series that treats ML compilation as a subject
- MLIR Toy tutorial, mlir.llvm.org (free)
- ExecuTorch docs (free)
**Study approach:** Work through the MLC course end-to-end (it is built on Apache TVM) for tensor programs, scheduling and autotuning. Then the MLIR Toy tutorial for how modern compiler stacks lower through dialects. Finish with ExecuTorch or `torch.compile` on a real model so the abstractions land on something you ship. Keep a profiler open throughout: a compiler pass is worth only what it measurably saves.
**Project:** Take one model through two compile paths to the same target (TensorRT and one of TVM or ExecuTorch), compare latency and memory, and explain the difference from the generated kernels or the profiler trace. Bonus: write one custom operator lowering or fusion pass and measure it.

### Data engine & synthetic data `desirable`
**Prerequisites:** Deep learning & PyTorch, MLOps fundamentals
**Unlocks:** none in this graph
**Resources:**
- **Best match:** NVIDIA Omniverse Replicator docs (free)
- Voxel51 FiftyOne (free): the practical tool for curating and slicing image datasets
- Published data-engine talks from AV teams (free)
**Study approach:** Watch one or two published data-engine talks from autonomous-driving teams to see the loop at scale. Then build the small version with FiftyOne: find hard cases by low confidence or model disagreement, send them for labelling, retrain. Add synthetic data with Replicator only where real data cannot cover a case, and measure whether it helped.
**Project:** Close the loop once on your CV model: mine a few hundred hard examples from unlabelled data, label them, retrain, and show the per-slice gain. Then add a synthetic set for one rare case generated with Omniverse Replicator and report whether it improved the real-data test slice.

### Perception verification `critical`
**Prerequisites:** Computer vision, AI evaluation
**Unlocks:** ML safety assurance
**Resources:**
- **Best match:** Book: *Introduction to Neural Network Verification*, Aws Albarghouthi (free, verifieddeeplearning.com and arXiv): the clearest entry to formal methods for networks
- Angelopoulos & Bates: *A Gentle Introduction to Conformal Prediction and Distribution-Free Uncertainty Quantification*, arXiv (free)
- Hendrycks & Dietterich: *Benchmarking Neural Network Robustness to Common Corruptions and Perturbations* (free)
**Study approach:** Start with corruption robustness (the Hendrycks and Dietterich benchmark), because it is the test most perception models fail first. Then conformal prediction, to give each output a calibrated uncertainty set, and out-of-distribution detection, to know when not to trust it. Read Albarghouthi last for what formal verification can and cannot prove today: it scales to small networks and local properties, not to a full detector.
**Project:** A verification report for your CV model: accuracy under a corruption suite matched to the site (dust, glare, low light), an OOD detector with its false-alarm rate, conformal prediction sets at a stated coverage, and one formally verified local robustness property on a small classifier head. Write it as evidence a safety case could cite.

### OT & industrial security `critical`
**Prerequisites:** Domain vertical
**Unlocks:** Capstone: Safety case
**Resources:**
- **Best match:** ISA/IEC 62443 overview material (free)
- CISA ICS advisories (free): real incidents beat abstract threat models
- Book: *Industrial Network Security*, Knapp & Langill (paid)
**Study approach:** Learn the Purdue model and the 62443 vocabulary (zones, conduits, security levels) first. Then read a dozen CISA ICS advisories for equipment in your vertical to see how real attacks land. Knapp and Langill for depth on protocols and segmentation. Keep the line with functional safety explicit: a safety case argues about faults, a security case about an adversary, and the two need separate evidence.
**Project:** A zone-and-conduit design for an ML inference box added to a plant cell: threat model, target security levels, segmentation, update path and remote-access policy, mapped to IEC 62443-3-3 requirements. Include how a compromised model or camera feed would be detected.

### AI safety & governance `desirable`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** none in this graph; background for AI governance engineering in Phase 6
**Why:** EU AI Act is in force. Vocabulary tier: pair with the implementation-oriented *AI governance engineering* node in Phase 6 for the full profile.
**Resources:**
- **Best match:** Ethics of AI, University of Helsinki (free)
- ISO/IEC 42001 AI Management System: white papers
- Coursera: AI Ethics courses (Coursera Plus, various)
- Adversarial ML papers (free, arxiv): start with Madry, Goodfellow
**Study approach:** Ethics of AI course for the governance vocabulary. Read the EU AI Act high-risk system requirements directly: most courses paraphrase them poorly. Then pivot to adversarial ML papers for technical depth.
**Project:** Red-team an open model for adversarial inputs: prompt injection on an LLM, or an adversarial patch against your perception model. Document successful attacks, propose mitigations, validate them with an eval harness. Public writeup. Bonus: contribute a finding to a public AI red-teaming benchmark.

---

## PHASE 6: Integration

### Distributed systems `critical`
**Prerequisites:** MLOps fundamentals, Docker & CI/CD
**Unlocks:** AI systems architecture
**Resources:**
- **Best match:** Book: **Designing Data-Intensive Applications**, Martin Kleppmann (paid, ~$60). **Most important technical book in this roadmap.** Read in Year 2.
**Study approach:** DDIA cover-to-cover over 2-3 months. Implement small examples of each pattern as you read (replication log, leader election, vector clocks). Don't skim: this book rewards depth.
**Project:** Design (in writing) a distributed inference system for 1000 concurrent users with sub-100ms latency. Cover replication, partitioning, drift detection, OTA model updates. Submit for peer review on a forum (e.g., HackerNews's "Show HN", or a serious engineering blog).

### Vision-language models `critical`
**Prerequisites:** Vision Transformers, Jetson & edge deploy
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Jetson AI Lab: TensorRT Edge-LLM tutorial (free): the fastest path to a VLM on real hardware
- TensorRT Edge-LLM docs, nvidia.github.io/TensorRT-Edge-LLM (free): the C++ runtime for LLMs and VLMs on Jetson
- NVIDIA blog: *Getting Started with Edge AI on Jetson, LLMs, VLMs, Foundation Models* (free)
**Study approach:** Get a VLM running with the Jetson AI Lab tutorial first, then the NVIDIA Edge AI blog series end-to-end. The Edge-LLM SDK docs are sparse: be ready to read source code. Cross-reference with HuggingFace inference recipes for the model side.
**Project:** Deploy a recent VLM (Florence-2, LLaVA-NeXT-OneVision, or current SOTA) on Jetson Orin with the TensorRT Edge-LLM SDK. Benchmark prompt-to-output latency and memory under realistic loads. Document end-to-end on a blog post.

### Domain-specific models `desirable`
**Prerequisites:** LLM fundamentals, Domain vertical
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Hugging Face PEFT docs: huggingface.co/docs/peft (free): LoRA and QLoRA are what you will actually run
- DeepLearning.AI short courses on fine-tuning (free)
- Hugging Face fine-tuning guides: huggingface.co/docs (free)
- Domain-specific datasets and benchmarks on HuggingFace Hub (free), plus 2-3 recent domain-adaptation papers (free, arxiv) in your chosen vertical
**Study approach:** Free DeepLearning.AI short course for LoRA basics, then the PEFT documentation for production patterns (QLoRA, DoRA, adapter merging). Read 2-3 domain-adaptation papers in your vertical to see what is already published. Choose a model that fits the target device from the start (a small language model or VLM that fits in Jetson memory), and plan the quantization step together with the fine-tune: an adapter that only works in FP16 does not ship. General LLM fine-tuning for applications (instruction tuning, RLHF) is covered in the Applied AI roadmap.
**Project:** Fine-tune a small open LLM or VLM (1-4B parameters) with LoRA on a curated domain dataset, build a custom domain eval, and compare against the base model. Then quantize the adapted model, deploy it on Jetson, and report the accuracy retained and the latency. Open everything (dataset, training code, eval results, model card) on HuggingFace Hub.

### NVIDIA Isaac Sim `desirable`
**Prerequisites:** ROS2, Jetson & edge deploy
**Unlocks:** none in this graph
**Resources:**
- **Best match:** NVIDIA DLI: Introduction to Robotic Simulations in Isaac Sim (paid)
- Isaac Lab on GitHub: isaac-sim.github.io/IsaacLab (free)
- Isaac GR00T deployment guide: github.com/NVIDIA/Isaac-GR00T (free)
**Study approach:** DLI Isaac Sim workshop for structure. Then Isaac Lab examples: production-quality reference code. Sim2real is the hard part; budget extra time for it.
**Project:** Train a manipulation policy in Isaac Sim, deploy on Jetson with TensorRT, evaluate on a real or simulated robot arm. Document sim2real transfer challenges in a writeup (domain randomization, observation gap, action delay).

### ML safety assurance `critical`
**Prerequisites:** Functional safety for ML, Perception verification
**Unlocks:** Capstone: Safety case
**Resources:**
- **Best match:** AMLAS guidance, University of York (free): a published end-to-end method for an ML safety case, with patterns you can reuse
- ISO/PAS 8800:2024, Road vehicles: Safety and artificial intelligence (paid)
- ISO/IEC TR 5469:2024, Functional safety and AI systems (paid)
**Study approach:** Read AMLAS end-to-end: its six stages (assurance scoping, safety requirements, data management, model learning, model verification, model deployment) give the structure everything else hangs on. Then the frame for your vertical: ISO/PAS 8800 together with ISO 21448 (SOTIF) for road vehicles, ISO/IEC TR 5469 for AI inside industrial safety functions. The standards are paid; read published summaries first and buy only the one your vertical needs.
**Project:** An AMLAS-structured safety case for the perception function you verified in Phase 5: safety requirements traced to data and model requirements, the verification report as evidence, a runtime monitor with a defined safe state, and an explicit list of residual risks.

### AI governance engineering `critical`
**Prerequisites:** MLOps fundamentals, AI evaluation
**Unlocks:** none in this graph; beyond it, compliance engineering roles in regulated industries, where the EU AI Act's high-risk obligations (Dec 2027 / Aug 2028) make this work a legal requirement
**Why:** Regulation-driven and durable. EU AI Act high-risk system requirements take full effect between Dec 2027 and Aug 2028; ISO/IEC 42001 adoption is accelerating; NIST AI RMF is being baked into US federal procurement. Every company shipping AI under these regimes needs engineers who can *implement* the standards, not just cite them.
**Resources:**
- **Best match:** ISO/IEC 42001:2023 standard, AI Management Systems (paid, ~$150 official; summaries free)
- EU AI Act, Annex IV: technical documentation requirements for high-risk systems (free, eur-lex.europa.eu)
- NIST AI Risk Management Framework + Playbook (free, nist.gov/itl/ai-risk-management-framework)
- OECD AI Policy Observatory (free): cross-jurisdiction tracker
- Coursera: AI Ethics & Governance tracks (Coursera Plus)
**Study approach:** Read EU AI Act Articles 9-15 directly: these define the technical obligations (risk management, data governance, technical documentation, record-keeping, transparency, human oversight, accuracy/robustness). Map each to an engineering control (model registry, audit log, eval harness, drift monitor). NIST AI RMF Playbook for the operational side. Treat ISO 42001 as the management-system overlay on top.
**Project:** Build a reference governance stack for a single ML model: a model registry with provenance metadata, an audit log of deployment decisions, an eval harness mapped to specific Annex IV requirements, and a written conformity-assessment document. Public repo + a writeup explaining how each component maps to a specific clause of the EU AI Act or ISO 42001. Examples in this space are scarce, so a working reference is high-signal.

### Kubernetes for ML `critical`
**Prerequisites:** Docker & CI/CD, MLOps fundamentals
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Coursera: **Architecting with Google Kubernetes Engine Specialization** (Coursera Plus)
- KubeFlow docs: kubeflow.org (free)
- Book: *Kubernetes in Action*, Marko Lukša (paid, ~$55)
**Study approach:** Minikube for local practice before any cloud cluster. Then GKE/EKS free-tier for real distributed work. KubeFlow for ML-specific patterns (KFServing, training operators).
**Project:** Deploy ML serving on Kubernetes with autoscaling (HPA), model rollout (Argo Rollouts), and observability (Prometheus + Grafana). Run on a free-tier GKE/EKS cluster. Document the cost vs latency tradeoffs.

### AI safety research `desirable`
**Prerequisites:** LLM fundamentals
**Unlocks:** none in this graph; beyond it, frontier-lab research engineering and model evaluations roles
**Why:** Distinct from governance (compliance) and red-teaming (adversarial probing). Research-grade safety = understanding model internals and measuring dangerous capabilities. Hiring concentrated at Anthropic, OpenAI, DeepMind, plus a growing tier of evals-focused orgs (METR, Apollo, MATS alumni).
**Resources:**
- **Best match:** Anthropic interpretability papers (free, arxiv): start with *Toy Models of Superposition*, *Scaling Monosemanticity*, *Sleeper Agents*
- ARENA curriculum: arena.education (free). The de-facto on-ramp for alignment research engineering.
- Apollo Research papers (free): deceptive alignment, scheming evaluations
- METR evaluation reports (free): capability evaluation methodology
- MATS program: matsprogram.org (stipended; competitive). Research mentorship pipeline into top labs.
**Study approach:** ARENA end-to-end is the single highest-signal use of time. Pair with Anthropic's interpretability papers in publication order: the field is small enough that ~30 papers cover the state of the art. Implement at least one mechanistic interpretability technique (probing, SAEs, or circuits) yourself; reading without coding does not transfer.
**Project:** Reproduce one published interpretability or evals result on a small open model. Examples: train sparse autoencoders on a tiny transformer and verify monosemantic features; build a capability-eval harness measuring a specific behavior. Public repo with notebooks, plus a writeup framing the result against the original paper.

---

## PHASE 7: Architecture & Capstones

### AI systems architecture `critical`
**Prerequisites:** Distributed systems, Domain vertical
**Unlocks:** Technical leadership, AI fleet architect
**Resources:**
- **Best match:** Book: *System Design Interview* Vol 1 & 2, Alex Xu (paid, ~$40 each). Essential for senior/staff interviews.
- Coursera: **Software Architecture**, University of Alberta (Coursera Plus)
- Book: *Building Machine Learning Powered Applications*, Emmanuel Ameisen (paid, ~$45)
**Study approach:** Both volumes of Alex Xu cover-to-cover. UAlberta course as supplement for non-ML architecture vocabulary. Practice writing system designs by hand: interview prep doubles as real-world practice.
**Project:** Design (in writing) an edge-cloud system for a fleet of 10k devices. Cover fleet management, federated learning, OTA model updates, drift detection, observability. Submit for peer review (interactive review on EngineeringBlogs or similar).

### Technical leadership `desirable`
**Prerequisites:** AI systems architecture
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Book: *Staff Engineer: Leadership Beyond the Management Track*, Will Larson (paid, ~$30)
- Book: *The Manager's Path*, Camille Fournier (paid, ~$35). Even if not going into management.
**Study approach:** Both books alongside the capstone. *Staff Engineer* if staying IC; *The Manager's Path* for management-adjacent skills (1:1s, performance feedback, hiring). Both are also useful for working *with* leadership.
**Project:** Write 6 technical blog posts in 12 months, all on your own domain expertise. Speak at one meetup or conference (NVIDIA GTC, PyDay/PyCon Latam, local AI meetup). Make one substantive open-source contribution to a project you actually use.

### Capstone: Edge inference `critical`
**Prerequisites:** Jetson & edge deploy, LiteRT & OpenVINO, ML compilers & runtimes
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Publish the benchmark table (latency, accuracy, memory, power) and the profiler traces behind every optimization.
**Study approach:** Reuse the TensorRT keystone model so the time goes into depth rather than setup. Fix the accuracy budget first, from your AI evaluation suite, then optimize against it. Every claimed speed-up needs a profiler trace.
**Project:** One model taken from a training checkpoint to measured deployments on two targets (a Jetson plus a CPU, NPU or MCU target through LiteRT, OpenVINO or ExecuTorch): exported, quantized, profiled, with a custom kernel or compiler pass where the profiler shows it pays. Public repo, benchmark table, and a writeup of what did not pay off. The proof for an edge inference and compilers profile.

### AI fleet architect `frontier`
**Prerequisites:** AI systems architecture, Jetson & edge deploy
**Unlocks:** none in this graph
**Why:** Once single-device deployment works, the next problem is the fleet: rolling out models and updates to many robots or edge devices, monitoring them, sharing what one learns with the rest, and keeping the whole fleet inside its safety case. Emerging role, no formal courses yet.
**Resources:**
- **Best match:** No formal courses; build through projects, open source, and industry experience
- Open-RMF: open-rmf.org (free). Open-source robot fleet manager.
- NASA / Mars rover postmortems (free)
- ROS2 fleet management packages on GitHub (free)
**Study approach:** No courses exist for this role. Build through projects, open source, and industry experience. Read NASA postmortems as the gold-standard reference for fleet operations under hard constraints.
**Project:** Contribute to Open-RMF OR build a simulated fleet of 5+ robots with central orchestration (task allocation, charging coordination, failure recovery). Edge-track alternative: a fleet of edge devices with staged over-the-air model rollout and automatic rollback. Document architecture decisions. Open-source the result.

### Capstone: Physical AI `critical`
**Prerequisites:** Jetson & edge deploy, ROS2, 3D geometry & SLAM
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Ship it, document it publicly, and report the numbers that matter: latency, accuracy, power draw, and what broke.
**Study approach:** Pick a task with a physical outcome you can measure (pick-and-place, following, inspection with a reject actuator). Start from the ROS 2 graph and the calibration, not the model: most failures here are timing and geometry.
**Project:** One deployed perception-to-action system on real hardware: a calibrated sensor rig, an optimized model on Jetson, a ROS 2 control or decision loop, and measured latency and failure behaviour. Video, repo and a writeup of what broke. The proof for a Physical AI profile.

### Capstone: Safety case `critical`
**Prerequisites:** ML safety assurance, OT & industrial security
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Publish the safety case and the evidence behind it, and state plainly which claims the evidence does not yet support.
**Study approach:** Build on the Phase 6 safety case rather than starting over; the capstone adds the target hardware, the security design and the runtime behaviour. Ask someone who works in functional safety to review it: outside review is the test a safety case exists to pass.
**Project:** One assured perception function on an industrial edge target (OpenVINO or LiteRT on an industrial PC): a hazard analysis, an ML safety case built with AMLAS, verification evidence from your own test suite, an IEC 62443 zone and conduit design for the device, and a runtime monitor with a defined safe state. Published as a document plus repo. The proof for an industrial safety and ML assurance profile.

### Cloud ML platforms `critical`
**Prerequisites:** MLOps fundamentals, Deep learning & PyTorch
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Coursera: **Google Cloud Machine Learning Engineer Certificate** (Coursera Plus)
- AWS ML Specialty prep (paid, ~$300 for exam; study materials free)
- Azure ML docs (free)
**Study approach:** Pick the certification path of one cloud (the one closest to your job). Spend at least 20 hours hands-on per cloud: passive course-watching does not generate operational knowledge.
**Project:** Deploy a complete training + serving pipeline on AWS, GCP, or Azure. Document costs, gotchas, and vendor lock-in points. Bonus: build the same pipeline on a second cloud and write a comparison.

### Capstone: Data platform `critical`
**Prerequisites:** Feature store & training data, Real-time streaming
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Ship it as infrastructure-as-code with the data-quality tests running in CI.
**Study approach:** Assemble the platform projects into one slice rather than building new parts: the work is in the seams (data contracts, orchestration, monitoring).
**Project:** One end-to-end platform slice: ingestion to lakehouse to features to a served model, orchestrated, tested and monitored, with documented data contracts. Infrastructure-as-code, CI running the data tests, and a runbook for one failure. The proof for a Data and AI platform profile.

### Neuromorphic computing `frontier`
**Prerequisites:** C++, Jetson & edge deploy
**Unlocks:** none in this graph
**Why:** Event-driven spiking hardware targets power budgets that conventional edge accelerators cannot reach. It suits an electronics, C++ and embedded background, and the tooling is still young, so treat it as a long bet rather than an established job category.
**Resources:**
- **Best match:** snnTorch: snntorch.readthedocs.io (free). Actively maintained SNN framework, the practical sandbox now.
- Lava framework: github.com/lava-nc (free, archived by Intel in May 2026; still readable, no longer developed. A successor SDK for the next Loihi is promised but unreleased).
- Intel Neuromorphic Research Community (INRC): intel.com/neuromorphic. Gave access to Loihi 2 hardware; verify it still accepts members before planning around it.
- Book: *Neuromorphic Engineering*, Indiveri et al., Springer (paid, ~$100). Academic reference.
**Study approach:** Build in snnTorch first; treat Lava as read-only reference material while Intel's tooling is in limbo. Indiveri's book for theory depth. Read recent Loihi 2 papers: the field publishes mostly in conference proceedings, not journals.
**Project:** Implement a small SNN model in snnTorch. If you get hardware access through INRC, deploy on Loihi 2. Publish on a niche blog or arxiv. The community is small enough that one good blog post gets noticed.

### Quantum-AI hybrids `frontier`
**Prerequisites:** Math for ML refresher, Machine learning
**Unlocks:** none in this graph
**Why:** An alternative frontier bet to neuromorphic computing. See the Quantum AI roadmap for the full path.
**Resources:**
- **Best match:** IBM Quantum Learning: quantum.cloud.ibm.com/learning (free; it absorbed the retired Qiskit Textbook)
- Qiskit docs: quantum.cloud.ibm.com/docs (free)
- Book: *Quantum Computation and Quantum Information*, Nielsen & Chuang (paid, ~$75)
**Study approach:** IBM Quantum Learning for hands-on. Nielsen & Chuang as the multi-year reference. Be honest about the time horizon: practical commercial impact is 5-10 years out, possibly longer.
**Project:** Implement Grover's search and a quantum-classical hybrid optimization (QAOA) in Qiskit. Run on free IBM Quantum hardware. Blog the experience including the gap between theory and current hardware noise.

### Bio-digital / medical AI `frontier`
**Prerequisites:** Computer vision, Domain vertical
**Unlocks:** none in this graph
**Why:** An alternative frontier bet. Healthcare informatics > $127B by 2034. High moat from domain compliance.
**Resources:**
- **Best match:** Coursera: **AI for Medicine Specialization**, DeepLearning.AI (Coursera Plus)
- MIT OpenCourseWare: Computational Biology, ocw.mit.edu (free)
- MONAI framework: monai.io (free)
**Study approach:** AI for Medicine spec as the on-ramp. MIT OCW for computational biology depth. Don't underestimate the regulatory side: FDA compliance is the moat, not the model.
**Project:** Train a medical imaging classifier on a public dataset (e.g., NIH ChestX-ray). Document with an FDA-aligned evaluation framework (intended use, performance metrics by subgroup, failure modes). Optional: contribute to MONAI or similar open medical AI project.

---

## CERTIFICATIONS: PRIORITY ORDER

### Tier 1, High signal:
1. **NVIDIA Physical AI Certification** (new 2026): paid, ~$50-100 with webinar discount.
2. **NVIDIA Jetson AI Specialist**: free, project-based. Low effort, decent signal.
3. **NVIDIA Certified Associate: AI Infrastructure and Operations**, paid, ~$100. Good second cert.

### Tier 2, Good signal, included in Coursera Plus:
4. **Duke MLOps Specialization**: Finish first.
5. **Google Cloud Machine Learning Engineer**: After MLOps; platform track first.

The IBM RAG and Agentic AI Professional Certificate moved with the RAG and agent courses to the Applied AI roadmap.

### Tier 3, Optional:
6. AWS ML Specialty: only if using AWS at work.
7. Cambridge B2 First (English): high signal for international jobs.
8. ISO 42001 awareness: for governance roles.

---

## CRITICAL PATH (Summary)

In priority order; these are the courses and projects that matter most:

1. **Finish Duke MLOps** (Phase 2)
2. **TensorRT** (Phase 4): edge and robotics tracks
3. **Transformer CV: ViT/CLIP/SAM** (Phase 3): modern transformer-era CV
4. **Perception verification and ML safety assurance** (Phases 5 and 6): required for the safety track
5. **English B2** (continuous from Phase 0): highest ROI non-technical
6. **Read Chip Huyen's *Designing ML Systems*** (Phase 2)
7. **ROS2** (Phase 1): required for the robotics path
8. **Read Kleppmann's *Designing Data-Intensive Applications*** (Phase 6)
9. **NVIDIA Physical AI Certification**: take the 2026 exam with webinar discount

Everything else is supporting material.

---

## BOOKS: ESSENTIAL READING LIST

In priority order:

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Designing Machine Learning Systems**, Chip Huyen | P2 | critical | ~$50 | Production ML lifecycle. The first book to read. |
| 2 | **Designing Data-Intensive Applications**, Kleppmann | P6 | critical | ~$60 | Most important technical book in this roadmap. Read Year 2. |
| 3 | **System Design Interview Vol 1 & 2**, Alex Xu | P7 | desirable | ~$80 | Essential for senior/staff interviews. Buy before job hunting. |
| 4 | **AI at the Edge**, Situnayake & Plunkett | P5 | desirable | ~$50 | Good reference for non-NVIDIA edge stacks. Skim if Jetson is your default. |
| 5 | **Deep Learning for Vision Systems**, Elgendy | P3 | desirable | ~$50 | Bridge to transformer-era CV. Chapters 8-12 only. |
| 6 | **Staff Engineer**, Will Larson | P7 | desirable | ~$30 | For IC leadership path. Read alongside the capstone. |
| 7 | **A Tour of C++**, Stroustrup | P0 | desirable | ~$40 | Modern C++17/20 refresh. For TensorRT C++ API. |
| 8 | **Functional Safety for Embedded Systems**, Hobbs | P4 | desirable | ~$80 | Safety-track essential. |
| 9 | **A Concise Intro to ROS2**, Martín Rico | P1 | desirable | ~$40 | Best ROS2 book. Companion to Udemy course. |
| 10 | **Probabilistic Robotics**, Thrun et al. | P4 | frontier | ~$65 | Only if going deep into SLAM. Academic. |
| 11 | **Quantum Computation**, Nielsen & Chuang | P7 | frontier | ~$75 | Only for the quantum frontier path. |

---

## COST ESTIMATE

| Category | Cost | Notes |
|----------|------|-------|
| Coursera Plus | varies | Covers ~70% of online courses |
| Essential books (first 3-4) | ~$160 | Chip Huyen + Kleppmann + Alex Xu + one CV book |
| Udemy courses (TensorRT + ROS2) | ~$30 | Buy on sale only ($12-15 each) |
| NVIDIA DLI courses (2-3) | ~$60-90 | Self-paced with GPU labs |
| NVIDIA certifications (Physical AI + Jetson AI) | ~$50-100 | With webinar 50% discount |
| italki English tutoring (6 months, 1hr/week) | ~$240-360 | **Highest ROI investment** |
| Cambridge B2 First exam | ~$200-250 | Optional, formal credential |
| **Total: first cycle (Phase 0-2)** | **~$740-990** | |

**Money-saving tips:**
- Udemy courses go on sale every 2-3 weeks (~$12-15 each). Never pay full price.
- O'Reilly Learning subscription ($49/month) gives digital access to Chip Huyen, Kleppmann, and most O'Reilly books. Consider 2-3 months to cover the reading list.
- DeepLearning.AI short courses are all free.
- NVIDIA DLI often free for auditing; pay only for certification exams.

---

## TIME ALLOCATION: WEEKLY BUDGET

Assuming 10-15 hours/week outside work, which is what makes each phase about a quarter:

### Phase 1-2
| Activity | Hours/week |
|----------|-----------|
| Finish Duke MLOps cert | 3 |
| Chip Huyen book (2 chapters/week) | 2 |
| Deep learning course (Andrew Ng or fast.ai) | 3 |
| italki English (1hr/week) | 1 |
| Build first portfolio project (ML pipeline, then containerized) | 2 |
| Total | ~11 |

### Phase 3-4
| Activity | Hours/week |
|----------|-----------|
| Hugging Face CV Course | 3 |
| TensorRT quick-start samples, then the Udemy deep dive | 2 |
| NVIDIA Physical AI cert prep | 2 |
| italki English | 1 |
| TensorRT keystone: INT8 YOLO on Jetson | 2 |
| Write first English blog post | 1 |
| Total | ~11 |

### Phase 5-6 (edge track shown)
| Activity | Hours/week |
|----------|-----------|
| Jetson deployment pipeline (DeepStream, OTA) | 3 |
| Machine Learning Compilation course (mlc.ai) | 2 |
| Domain vertical: standards and one industry event | 2 |
| Deploy a VLM on Jetson | 3 |
| italki English | 1 |
| Total | ~11 |

The other tracks swap the track-specific rows for their own Phase 5-6 courses at the same hours: data engine and Isaac Sim for robotics, perception verification and ML safety assurance for safety, LLM serving and Kubernetes for platform.

---

*Compiled: 2026. Reassess and update every 6 months.*
*Sources: demand evidence as cited in the Executive Summary (WEF Future of Jobs Report 2025, BLS Employment Projections 2025-35, McKinsey Technology Trends Outlook 2026, Gartner Top Strategic Technology Trends 2026 for technology direction only, Stanford AI Index 2026, CENIA and ECLAC ILIA 2025, Consejo de Competencias Mineras and Fundación Chile 2025-2034); course resources from NVIDIA DLI, Coursera and the verified platforms listed per node.*
