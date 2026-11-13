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
- **LLM serving & inference** (Edge inference & compilers): the same McKinsey outlook counts AI infrastructure postings up 47% in 2024 to 2025, nearly triple their 2022 level.
- **Domain vertical, Jetson & edge deploy, OT & industrial security** (Chile, large-scale mining): the [Consejo de Competencias Mineras and Fundación Chile workforce study 2025 to 2034](https://ccm-eleva.cl/wp-content/uploads/2025/12/Estudio-Fuerza-Laboral-de-la-Gran-Mineria-2025-2034.pdf) (Dec 2025) projects autonomous haul trucks growing from 178 to about 550 by 2034, with AI implemented or piloted by 44% to 54% of respondents depending on the operating area, and cybersecurity in place in every integrated operations centre surveyed (nine company responses). Chile also had the region's highest AI human-talent score in [ILIA 2025](https://www.cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence-though) (CENIA and ECLAC, Oct 2025), and 2.4% of its 2025 job postings mentioned AI skills, against 2.6% in the US ([Stanford AI Index 2026, Lightcast data](https://lightcast.io/resources/research/stanford-ai-index-2026)).

*Counter-signals:* the same WEF survey expects robots and autonomous systems to be the largest net displacer of jobs by 2030 (about 5 million globally): the demand is for the people who build, deploy and maintain them, not for the work they replace. McKinsey notes robotics postings are still below earlier highs. Most of the 36,895 new mining workers the Chilean study projects to 2034 are replacement hires for technicians and operators; the engineering opening is the advanced maintenance, digital support and technology management that it says autonomy creates.

*Long term (5 to 15 years):* no quantitative forecast reaches past 2035. McKinsey's [Agents, Robots, and Us](https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/agents%20robots%20and%20us%20skill%20partnerships%20in%20the%20age%20of%20ai/agents-robots-and-us-skill-partnerships-in-the-age-of-ai.pdf) (Nov 2025, US) estimates that robots could technically take on activities in about 13% of US work hours, against 44% for software agents; that is technical potential, not a forecast of job losses. Read the rest as a scenario argument rather than a projection: whichever of the WEF's [Four Futures](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026) arrives, a model running on a vehicle, robot or plant still needs someone accountable for its latency, power and failure behaviour on real hardware.

**Three priority levels throughout:**
- `critical`: Minimum needed to *understand* a node, given the track you choose. Non-negotiable for that track.
- `desirable`: Competitive edge. Significant ROI but not blocking.
- `frontier`: Future bets. Long-term positioning.

**Three specializations** (pick one or more in the malla; the doc explains the study material for each node):
- **Edge inference & compilers**: ONNX export, TensorRT, LiteRT and OpenVINO, Jetson, GPU kernels and ML compilers, VLMs on device
- **Robotics / Physical AI**: ROS2, RL and imitation learning, sensor fusion, 3D geometry and SLAM, Isaac Sim, fleet
- **Industrial safety & ML assurance**: IEC 61508 and ISO 26262, perception verification, ML safety cases (AMLAS, SOTIF, ISO/PAS 8800), IEC 62443 OT security, industrial edge targets

The LLM-application courses (RAG and vector databases, multi-agent systems, general LLM fine-tuning) live in the Applied AI roadmap. This path keeps only the edge-relevant slice: adapting small models for a device, folded into *Domain-specific models*. The data and ML platform work (pipelines, lakehouse, streaming, feature stores, Kubernetes and cloud ML) was a fourth specialization here and now has its own [Data Engineering & Platforms](#/data-roadmap) roadmap, for the same reason: its spine is data, not C++ and model export.

**Resource tagging:**
- **Best match**: the first resource of every node, the same one the graph card leads with
- (free): free
- (paid, ~$N) or (paid): paid, with the cost where known
- (Coursera Plus): included in a Coursera Plus subscription

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Resources`, a `Study approach` and a `Project` (a concrete shippable deliverable). `Study approach` is the knowledge itself: the concepts the course rests on, why each matters and what breaks without it, so you can tell what the course is about before opening anything. Where a resource is a body of material rather than a single finite unit, a `why:` clause names the specific parts to take from it, and sometimes the parts to leave alone. Prerequisites and Unlocks name the graph's courses exactly. The project is the proof of competence: without it, a node is unfinished.

---

## PHASE 0: Foundations (Tools & Math Refresher)

*These have no prerequisites. Verify mastery and skip what you already know.*

### Linux & CLI `critical`
**Prerequisites:** none
**Unlocks:** Docker & CI/CD, ROS2, AI-assisted dev workflows
**Resources:**
- **Best match:** Linux Journey: linuxjourney.com (free), why: the filesystem, permissions, processes and package model, which is the vocabulary every later error message uses
- MIT: The Missing Semester, missing.csail.mit.edu (free), why: the shell as a programming language (pipes, redirection, globbing, exit codes), plus ssh, tmux and regex; the lecture on debugging and profiling is the one that pays off most

**Study approach:** The knowledge here is that a Linux machine is a set of processes holding file descriptors, and the shell is the language for wiring them together. Understand that pipes pass bytes rather than text, that an exit code is how one program tells another it failed, and that a permission is a property of a file and not of an application. Understand enough of ssh and tmux to keep a long job alive on a remote board after your laptop sleeps, because that is how edge hardware is actually worked on. What you do not need is system administration: user management, init systems and distribution packaging are someone else's job until they block you.

**Project:** Personal dotfiles repo on GitHub with a bootstrap script. Use it to set up a fresh VM in under 10 minutes.

### Python `critical`
**Prerequisites:** none
**Unlocks:** Machine learning, ROS2, AI-assisted dev workflows
**Resources:**
- **Best match:** Coursera: **Python for Everybody**, University of Michigan (Coursera Plus)
- Book: *Automate the Boring Stuff*, automatetheboringstuff.com (free)
- Modern Python: realpython.com tutorials (free), why: type hints, dataclasses, context managers and async/await; these four are what separate script-writing from code other people can run

**Study approach:** Python is the language the whole ML stack is driven from, so the knowledge that matters is not syntax but the object model: that names are references to objects, that mutable default arguments are a trap because the default is created once, and that a generator yields values lazily so a dataset larger than memory can still be streamed. Understand type hints as documentation the tooling can check rather than as a runtime guarantee, context managers as the mechanism that releases a file or a device handle even when something raises, and the import system well enough to know why a project needs a package layout and a virtual environment. Numerical performance in Python comes from staying inside vectorized library calls; understanding that explains most of the optimization work later in this path.

**Project:** A small CLI tool with `argparse`, type hints, `pytest` tests, and a `pyproject.toml`. Publish to PyPI as a learning exercise.

### C++ `critical`
**Prerequisites:** none
**Unlocks:** ROS2, CUDA & GPU computing, TensorRT, GPU kernels & profiling, Neuromorphic computing
**Resources:**
- **Best match:** Book: *A Tour of C++*, Bjarne Stroustrup (paid, ~$40). Modern C++17/20 focus.
- learncpp.com (free), why: ownership, references versus pointers, RAII and the rule of five, explained slowly enough to actually land
- Coursera: **C++ for C Programmers**, UC Santa Cruz: only if you come from C

**Study approach:** C++ earns its place on this path because TensorRT, ROS2 and every GPU kernel expose their real interface in it, and the knowledge that matters is memory ownership. Understand RAII: an object acquires a resource in its constructor and releases it in its destructor, which is why C++ needs no garbage collector and why a leak is a design error rather than an accident. Understand the difference between copying, moving and referring to an object, because that is what move semantics and `std::move` exist to express, and it is the cause of most performance surprises. Understand why `unique_ptr` and `shared_ptr` replace raw `new` and `delete`, what undefined behaviour means and why it makes a bug appear far from its cause, and how templates let a container work for any type at compile time. Legacy idioms, manual memory management and the deeper corners of template metaprogramming are not the point.

**Project:** Implement a thread-safe queue with a producer/consumer benchmark in C++17. CMake build, GitHub Actions CI, valgrind/sanitizer-clean. *Why:* TensorRT's native C++ API is the differentiator over Python-only ML engineers.

### Math for ML refresher `critical`
**Prerequisites:** none
**Unlocks:** Machine learning, CUDA & GPU computing, Sensor fusion, 3D geometry & SLAM, Quantum-AI hybrids
**Resources:**
- **Best match:** Coursera: **Mathematics for Machine Learning Specialization**, Imperial College London (Coursera Plus). Linear algebra, multivariate calculus and PCA in one sequence.
- 3Blue1Brown: *Essence of Linear Algebra* and *Essence of Calculus*, YouTube (free)
- Book: *Think Stats*, Allen Downey (free, thinkstats2.com)
- MIT 18.06: Strang lectures (free), why: problem practice on the four fundamental subspaces, eigendecomposition and SVD, for the parts where your algebra has gone rusty

**Study approach:** This is a refresher, so the goal is not coverage but a small set of ideas held geometrically. From linear algebra: a matrix is a linear map, so matrix multiplication is composition of maps, rank is how many dimensions survive it, and eigenvectors are the directions it only stretches. That view is what makes a neural network layer, PCA and an embedding space the same object seen three ways. From calculus: a gradient is the direction of steepest increase, and the chain rule composes local derivatives, which is backpropagation in one sentence rather than a separate topic to learn later. From probability: a distribution describes what you expect to see, maximum likelihood is why a loss function has the shape it does, and Bayes' rule is how evidence updates a belief, which is the framing that fits sensor fusion and model uncertainty downstream. Proofs and hand computation are not the point: you need to read an equation in a paper and know what it is doing.

**Project:** Three small builds in one NumPy repo. Linear regression and PCA from scratch, verified against scikit-learn within numerical tolerance. Backpropagation by hand for a 2-layer MLP without autograd, trained on XOR, with the learned weights checked against the expected geometry. A Bayesian A/B test calculator (CLI is fine), validated against a known closed-form result.

### Git & version control `critical`
**Prerequisites:** none
**Unlocks:** Docker & CI/CD, AI-assisted dev workflows
**Resources:**
- **Best match:** git-scm.com tutorial (free), why: the commit graph, branching, merge versus rebase and what the index actually is
- GitHub Skills (free), why: pull requests, review and the automation hooks CI later plugs into

**Study approach:** The knowledge that makes Git stop being frightening is its data model: a commit is an immutable snapshot plus a pointer to its parents, a branch is just a movable label on one commit, and nothing is lost until garbage collection. Once you hold that, merge and rebase stop being rival rituals and become what they are, one creating a commit with two parents and the other rewriting your commits on top of someone else's. Understand the staging area as a deliberate space between your files and your history, and understand `bisect` as a binary search over that history, which is the fastest way to find the commit that broke a model's accuracy. Rewriting shared history is the one genuinely dangerous operation; knowing why is more useful than memorizing flags.

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
- Write one technical blog post per month in English (free), why: active production rather than consumption, and a portfolio in the same move
- BBC Learning English, EnglishClass101 (free). Listening + grammar.
- Cambridge B2 First or IELTS certification (paid, ~$200-250). Formal credential when ready.

**Study approach:** What is being acquired is not grammar but production under time pressure: the ability to explain a technical decision out loud, in a second language, while someone waits. That is why output matters more than study here, and why an hour of conversation a week beats several hours of exercises. The vocabulary worth deliberate attention is the one this field actually runs on, the words for latency, throughput, trade-off, root cause, deadline and risk, because those are what a design discussion is made of. Treat reading documentation and watching talks in English as the normal way to work rather than as practice: the goal is that the language stops being a layer between you and the material.

**Project:** Public-facing portfolio in English: blog posts, GitHub READMEs, a recorded conference talk. Volume matters more than perfection.

---

## PHASE 1: Core ML & Tools

### Machine learning `critical`
**Prerequisites:** Python, Math for ML refresher
**Unlocks:** Deep learning & PyTorch, MLOps fundamentals, Quantum-AI hybrids
**Resources:**
- **Best match:** Coursera: **Machine Learning Specialization**, Andrew Ng, Stanford (Coursera Plus)
- Book: *Hands-On Machine Learning*, Aurélien Géron (paid, ~$50), why: chapters 1 to 9 are the practical core, covering the end-to-end project checklist, training pitfalls, regularization and ensembles; the later deep-learning half is superseded by the next node
- fast.ai Practical Deep Learning for Coders (free), why: the opposite order of explanation, results first and theory afterwards, which is the better fit if abstract material does not stick for you

**Study approach:** The one idea this course exists to install is generalization: a model is judged on data it has never seen, so every technique here is a way of controlling the gap between training error and test error. Understand the bias and variance decomposition as the reason that gap exists, overfitting as a model memorizing noise, and regularization, cross-validation and held-out splits as the instruments that measure and limit it. Understand that a loss function is a claim about what counts as a mistake, and that accuracy is the wrong metric the moment classes are imbalanced, which is why precision, recall and the shape of the confusion matrix matter more than a single number. Understand feature engineering and leakage, because a feature that quietly contains the answer produces a brilliant model that fails in production, and this is the single most common way an ML project dies. Algorithms themselves are secondary: gradient-boosted trees and linear models are worth knowing well because they are the baseline every deep model must beat.

**Project:** End-to-end ML pipeline on a custom dataset: collect/scrape → clean → train → evaluate → ship as a FastAPI endpoint. Public on GitHub with a README that explains every choice. Aim for top-30% on a relevant Kaggle leaderboard with the same model.

### Docker & CI/CD `critical`
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** MLOps fundamentals, Jetson & edge deploy, LLM serving & inference, Distributed systems
**Resources:**
- **Best match:** Docker official getting-started (free), why: images versus containers, layers and caching, volumes and the networking model; the Swarm orchestration material is dead weight
- Coursera: **IBM DevOps & SWE** (Coursera Plus), why: the pipeline stages and the reasoning behind continuous integration, if the practice is new to you
- GitHub Actions docs (free), why: workflow triggers, jobs and steps, matrix builds, caching and secrets handling; skip the marketplace catalogue

**Study approach:** A container is not a small virtual machine. Understand that it is a process on the host kernel with its own view of the filesystem and network, because that single fact explains why containers start in milliseconds, why a GPU or a camera has to be passed through explicitly, and why an image built for x86 will not run on an ARM board without being built for it, which is exactly the problem edge deployment hands you. Understand an image as an ordered stack of immutable layers: that is why instruction order in a Dockerfile determines build time, why a multi-stage build can leave the compiler behind and ship only the artifact, and why a 4 GB image is usually a mistake rather than a necessity. Understand continuous integration as the claim that the build and the tests are reproducible on a machine that is not yours, and treat the pipeline as the place where tests, linting and image publication become automatic rather than remembered.

**Project:** Containerize the ML pipeline above. Add GitHub Actions for build/test/push to GHCR. Multi-stage Dockerfile with image under 200 MB. Document the CI workflow in the README.

### ROS2 `critical`
**Prerequisites:** C++, Python, Linux & CLI
**Unlocks:** NVIDIA Isaac Sim, Capstone: Physical AI
**Resources:**
- **Best match:** Udemy: **ROS2 for Beginners (ROS Jazzy, 2026)**, Edouard Renard (paid, ~$15 on sale)
- The Construct: theconstruct.ai (free tier), why: browser-based robots, so you can exercise the full node, topic and launch cycle before owning hardware
- Official docs: docs.ros.org (free), why: the concept pages on nodes, topics, services, actions, parameters, QoS profiles and tf2 frames, plus the `colcon` and launch-file reference you will return to constantly
- Book: *A Concise Introduction to Robot Programming with ROS2*, Martín Rico (paid, ~$40, 2024 edition), why: how a real robot's nodes are decomposed and made to behave, which the tutorials never address

**Study approach:** ROS2 is a set of conventions for building a robot out of separate processes that pass messages, and understanding those conventions is the whole course. Understand the publish and subscribe model and why it decouples a camera driver from whatever consumes images, then understand when it is the wrong tool: a service for a request that needs an answer, an action for a long-running goal that can be monitored and cancelled. Understand quality-of-service settings as a statement about what should happen when a subscriber is too slow, since a mismatched profile is the most common reason two correct nodes never talk to each other. Understand coordinate frames and tf2 deeply, because almost every robotics bug is a transform applied in the wrong frame or at the wrong time, and understand that messages carry timestamps precisely so data from sensors running at different rates can be aligned. Expect to read both C++ and Python nodes: the ecosystem is mixed and you do not get to choose. This sits early in the robotics track so that every later perception and policy project can live inside a ROS2 graph rather than in a notebook.

**Project:** Build a small autonomous robot (sim is fine, Gazebo) with the Nav2 stack: SLAM, path planning, obstacle avoidance. Public on GitHub with a recorded Gazebo demo and a README explaining the navigation pipeline.

### AI-assisted dev workflows `desirable`
**Prerequisites:** Linux & CLI, Git & version control, Python
**Unlocks:** none in this graph; cross-cutting, it accelerates work on every later node
**Resources:**
- **Best match:** Anthropic Claude Code documentation: docs.anthropic.com/claude-code (free), why: the extension points that make an assistant repo-aware rather than generic, namely project memory files, custom slash commands, hooks on tool calls, sub-agents and permission settings
- Anthropic prompt engineering guide: docs.anthropic.com (free), why: why context placement, explicit success criteria and worked examples change an answer's quality, which is the transferable part across any model
- Model Context Protocol (MCP) documentation: modelcontextprotocol.io (free), why: the tool, resource and prompt primitives, so you understand how an assistant is given access to a system it was not trained on
- Anthropic Academy, including the *Claude Code in Action* course (free), why: worked sessions on a real repository, which is faster than inferring a workflow from reference pages

**Study approach:** The knowledge worth having here is about context, not about prompts. A coding assistant is a model that only knows what it has been shown, so its failures are almost always missing or misleading context: a stale convention, an unstated constraint, a file it never read. Understand that a project memory file, a custom command and a hook are three ways of making the right context arrive automatically instead of being retyped, and understand a hook as a deterministic check the model cannot talk its way past, which is what makes the arrangement safe to use on real code. Understand why delegating a self-contained investigation to a sub-agent keeps the main thread clear, and the cost of that handoff: the sub-agent only knows what its brief says. Understand what you must still verify yourself, because a plausible, confidently wrong change is this tool's characteristic failure and reviewing it is the skill. This is about using an assistant; building agent systems with frameworks is a different subject and lives in the Applied AI roadmap.

**Project:** Configure Claude Code on a non-trivial repo: a `CLAUDE.md`, at least one custom slash command, one hook, and one MCP server connecting an external system (issue tracker, monitoring, internal docs). Ship a non-trivial PR co-authored with the assistant and write up the workflow: prompts that worked, prompts that failed, and which guardrails (hooks, sub-agents, scoped permissions) actually mattered.

---

## PHASE 2: DL & Operations

### Deep learning & PyTorch `critical`
**Prerequisites:** Machine learning
**Unlocks:** ONNX & model export, Computer vision, LLM fundamentals, AI evaluation, RL & imitation learning, Domain vertical, Data engine & synthetic data, AI safety & governance
**Resources:**
- **Best match:** Coursera: **Deep Learning Specialization**, Andrew Ng (Coursera Plus). 5 courses.
- fast.ai Practical Deep Learning (free, course.fast.ai), why: the same material code-first, and the better choice if derivations put you off
- PyTorch tutorials (free), why: autograd, `Dataset` and `DataLoader`, the training loop written out by hand, and `nn.Module`; the deployment pages belong to later nodes
- Book: *Deep Learning*, Goodfellow et al. (free online), why: chapters 6 to 9 for backpropagation and regularization theory, when you want the argument rather than the recipe

**Study approach:** A neural network is a differentiable function fitted by following its gradient, and everything in this course follows from that sentence. Understand automatic differentiation as a graph of operations that can be walked backwards, because that is why PyTorch feels like ordinary Python yet still trains, and why detaching a tensor or forgetting to zero gradients breaks training in ways no error message explains. Understand why depth and nonlinearity buy expressiveness that stacked linear layers cannot, what a convolution assumes about its input (locality and translation invariance) and what attention assumes instead (that any position may matter to any other). Understand the training dynamics you will actually fight: learning rate as the dominant hyperparameter, batch normalization and residual connections as the reason very deep networks converge at all, and vanishing or exploding gradients as the failure they were invented to fix. Finally understand that a model is memory plus arithmetic, since parameter count, activation size and precision are what decide later whether it fits on a device.

**Project:** Train a non-trivial CV model on a custom dataset (50+ classes or unusual domain). Document architecture choices, ablations, and failure modes. Public repo with reproducible training scripts and benchmarks.

### MLOps fundamentals `critical`
**Prerequisites:** Machine learning, Docker & CI/CD
**Unlocks:** AI evaluation, Functional safety for ML, Domain vertical, Data engine & synthetic data, Distributed systems, AI governance engineering
**Resources (ranked, most important first):**
- **Best match:** Book: **Designing Machine Learning Systems**, Chip Huyen (paid, ~$50). **Must-read.** Canonical text; everything else fills in around it.
- **MLOps Zoomcamp**: DataTalks.Club (free). Best free hands-on, end-to-end course. Project-based.
- **Made With ML**: Goku Mohandas (free, madewithml.com). End-to-end MLOps with strong software-engineering rigor (FastAPI serving, MLflow, Ray, testing).
- Coursera: **Machine Learning in Production**, DeepLearning.AI / Andrew Ng. A single course, the successor to the retired MLOps Specialization (its other three courses no longer exist). Well structured Coursera introduction.
- Coursera: **MLOps Specialization, Duke University** (Coursera Plus). Lighter alternative: use it since it's already paid for, but don't rely on it alone.
- **Full Stack Deep Learning**: fullstackdeeplearning.com (free). Berkeley/UW lectures on YouTube. Especially strong on the non-modeling parts (data, evaluation, deployment, team workflows).
- **Eugene Yan's blog**: eugeneyan.com (free), why: reference rather than course; the posts on evaluation harnesses and on offline versus online metrics are the ones that change how you work

**Study approach:** MLOps is the discipline of treating a model as a system that will keep running after you stop looking at it, and the knowledge is mostly about change. Understand that three things version independently, code, data and the trained model, and that reproducing a result means pinning all three, which is why experiment tracking and data versioning exist and why a notebook is not a deliverable. Understand training and serving skew: the same feature computed two different ways in two different places is the classic silent production failure. Understand drift, and the distinction that makes it tractable, data drift meaning the inputs moved and concept drift meaning the relationship moved, because they call for different responses. Understand that an offline metric is a proxy and an online metric is the truth, so a model that improves validation accuracy and degrades the product is a normal outcome rather than a paradox. Understand deployment as a risk-management choice, which is what shadow deployment, canaries and rollback are for, and understand that the monitoring you need is on inputs and predictions, not only on uptime.

**Project:** Take the Phase 1 ML project and add: experiment tracking (MLflow), data versioning (DVC), model registry, drift monitoring, CI/CD for retraining. Architecture diagram in README.

### CUDA & GPU computing `desirable`
**Prerequisites:** C++, Math for ML refresher
**Unlocks:** GPU kernels & profiling
**Resources:**
- **Best match:** NVIDIA DLI: **Fundamentals of Accelerated Computing with Modern CUDA C++** (paid, ~$90). High signal.
- Coursera: **GPU Programming Specialization**, Johns Hopkins (Coursera Plus)
- Book: *Programming Massively Parallel Processors* (PMPP), Hwu & Kirk (paid, ~$70), why: the memory hierarchy, tiling and coalescing chapters, which are where the actual performance knowledge is; it is a reference to work through, not a book to read once

**Study approach:** A GPU is not a fast CPU, and the whole course is about internalizing the difference. Understand the execution model: thousands of threads grouped into warps that execute one instruction together, so a branch taken by only half a warp costs you both paths, and a thread that waits is hidden only if other warps have work ready. Understand that performance is governed by the memory hierarchy rather than by arithmetic: global memory is slow and wants coalesced access, shared memory is fast and must be managed by hand, and tiling exists so data is loaded once and reused many times. Understand the arithmetic-intensity question, whether a kernel is limited by compute or by bandwidth, because it tells you which optimizations can possibly help and which are wasted effort; most deep-learning kernels are bandwidth-bound. Understand that host and device memory are separate and that transfers across the bus often dominate, which is why fusing operations to keep data on the device matters. Never trust a reasoned guess about any of this: a profiler tells you where the time went, and measuring first is the habit the course is really teaching. The node is desirable rather than critical because it underpins the kernel and compiler courses in the edge track and can be skipped by readers who stop at TensorRT.

**Project:** Implement a matrix-multiplication kernel in CUDA C++. Benchmark against `cuBLAS`. Profile with Nsight Compute. Reach >50% of `cuBLAS` performance for at least one tile size. Public on GitHub with profile traces.

---

## PHASE 3: Vision, LLMs & Export

### ONNX & model export `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** TensorRT, LiteRT & OpenVINO, ML compilers & runtimes
**Resources:**
- **Best match:** ONNX Runtime docs: onnxruntime.ai (free), why: the execution-provider model, graph optimization levels and the quantization pages; the language-binding reference is lookup material, not study
- ONNX GitHub tutorials (free), why: real export failures and their fixes, including opset selection and dynamic axes
- onnx-simplifier on GitHub (free), why: what constant folding removes from an exported graph, which teaches you to read the graph as a compiler would

**Study approach:** Export is the moment a model stops being Python and becomes a data structure, and understanding that transition is the point. Understand that a PyTorch model is code executed eagerly, while ONNX is a static graph of typed tensors and operators, so anything decided at runtime, a Python conditional, a shape computed from the data, a loop over a list, either disappears into a fixed value or fails to export at all. Understand the opset as a versioned contract, because an operator your model emits and your runtime does not implement is the single most common export failure and the version number is where you look first. Understand dynamic axes as the declaration of which dimensions may vary, usually batch and sequence, since fixing them accidentally is what makes an exported model reject real input. Understand that the exported graph is then optimized, folding constants and fusing operators, which is why the graph you inspect does not match your source layer for layer, and why reading it visually is a skill worth having. Above all understand numerical verification: an export that runs is not an export that is correct, so compare outputs against the original within a stated tolerance every time.

**Project:** Export the CV model from Phase 2 to ONNX. Benchmark ONNX Runtime on CPU and GPU vs native PyTorch. Document the conversion workflow including any operator workarounds. Publish as a how-to blog post.

### Computer vision `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** Vision Transformers, Sensor fusion, 3D geometry & SLAM, Functional safety for ML, Perception verification, Bio-digital / medical AI
**Resources:**
- **Best match:** **Hugging Face Computer Vision Course**: huggingface.co/learn/computer-vision-course (free). Covers modern transformer-era CV.
- Stanford CS231n 2024 lectures: YouTube (free), why: the lectures on convolution arithmetic, detection architectures and segmentation, for the theory the applied courses skip
- Book: *Deep Learning for Vision Systems*, Mohamed Elgendy (paid, ~$50), why: chapters 8 to 12, on detection and on building a vision project end to end

**Study approach:** Computer vision is about what a model can and cannot infer from a grid of pixels. Understand the convolution as a learned local filter applied everywhere, which is what gives translation invariance and parameter sharing, and understand the receptive field as the reason a network must be deep before it can reason about anything larger than a texture. Understand that the three tasks are genuinely different problems and not difficulty levels: classification answers what is in the image, detection answers what and where with a box, segmentation answers which pixels belong to the object. Understand the detection machinery that follows from that, anchors, non-maximum suppression and intersection over union, and understand mean average precision well enough to know that a confidence threshold moves precision and recall in opposite directions, which is the decision an edge deployment actually turns on. Understand why data augmentation works and what it quietly assumes about your domain, since an augmentation that is physically impossible for your camera teaches the model a lie. Understand that lighting, motion blur, occlusion and distribution shift are the real failure modes, not the architecture choice.

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

**Study approach:** The transition this course covers is the replacement of a built-in assumption with learned attention. Understand that a convolution has locality designed into it, while a vision transformer cuts the image into patches, embeds each one as a token and lets every patch attend to every other from the first layer. That buys global context and costs the inductive bias, which is why vision transformers need far more data or far stronger augmentation to match a convolutional network, and why patch size is a direct trade between detail and compute. Understand that attention is quadratic in the number of patches, since that is what makes high-resolution input expensive and drives the windowed and hierarchical variants. Then understand what contrastive language and image pretraining changes: training images against their captions puts pictures and text in one embedding space, so classification becomes a nearest-neighbour comparison against text prompts and new classes need no retraining at all. That is the whole basis of zero-shot vision and of the retrieval work in the project below. Finally understand promptable segmentation as the same shift applied to masks, a model that segments whatever it is pointed at rather than the categories it was trained on. The three papers in publication order are the cleanest route through this, each read for the assumption it drops.

**Project:** Build a CLIP-powered semantic image search over a 10k+ image dataset. Deploy with a vector DB (Chroma or pgvector). Public demo + writeup of the embedding-space exploration (t-SNE visualization, retrieval failure cases).

### LLM fundamentals `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** LLM serving & inference, Vision-language models, Domain-specific models, AI safety research
**Resources:**
- **Best match:** Coursera: **Generative AI with Large Language Models**, DeepLearning.AI + AWS (Coursera Plus)
- Andrej Karpathy: *Let's build GPT from scratch*, YouTube (free). Must-watch.
- *Attention is All You Need*, original transformer paper (free, arxiv), why: read it beside Karpathy's code so each equation has a line of implementation next to it

**Study approach:** A language model predicts the next token, and almost everything surprising about these systems follows from that one objective. Understand tokenization first, because it explains the practical oddities: why a model counts letters badly, why rare words and other languages cost more tokens, and why a context limit is measured in tokens rather than words. Understand self-attention as learned retrieval, each position forming a query and comparing it against every other position's key to decide what to pull in, and understand why that is quadratic in sequence length, which is the cost that governs every serving decision later. Understand positional encoding as the patch for attention having no inherent sense of order, and the causal mask as the thing that keeps training honest by hiding the future. Understand the training stages and what each one buys: pretraining gives a model that continues text, instruction tuning gives one that follows requests, preference tuning gives one that answers the way people prefer. Understand sampling, temperature and top-p as the controls over output randomness, and understand that the model has no mechanism for knowing when it is wrong, which is why hallucination is a property of the objective rather than a bug to be patched.

**Project:** Implement a small GPT (10-50M params) from scratch in PyTorch (no `transformers` library). Train on TinyShakespeare. Document the math line-by-line in a notebook. Compare your loss curve to nanoGPT.

### Security fundamentals & threat modeling `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** OT & industrial security
**Resources:**
- **Best match:** Book: *Threat Modeling: Designing for Security*, Adam Shostack (paid)
- OWASP Threat Modeling Cheat Sheet (free)
- MITRE ATT&CK for ICS matrix (free), why: the tactics and techniques seen against industrial control systems, as a vocabulary for what an attacker does after getting in; the per-technique detail is reference, not reading

**Study approach:** This course belongs to the safety specialization only, and it is there because safety and security answer different questions about the same system. Safety asks what happens when a component fails at random; security asks what happens when someone makes it fail on purpose, and a hazard analysis that assumes random faults says nothing about an adversary who picks the worst input at the worst moment. The course is built on three ideas. A trust boundary is any place where data or control crosses between parties that should not fully trust each other, and drawing the data-flow diagram of a system with its boundaries marked is the skill everything else hangs on. A structured method, STRIDE or attack trees, turns "what could go wrong" from brainstorming into enumeration, so the result can be reviewed and repeated. And risk ranking decides which of the enumerated threats earn a mitigation, because a list nobody prioritised is not a threat model. For an ML system the diagram gains elements a classic one lacks: the training data, the model file, the camera feed and the update channel are all things an attacker can touch. Cryptographic detail, penetration testing and compliance frameworks are safe to leave alone here; the OT security course two phases later supplies the industrial specifics.

**Project:** A STRIDE threat model of a perception model deployed at the edge: a data-flow diagram from sensor to actuator with trust boundaries, the threats per element (include a poisoned training set, a swapped model file and a spoofed camera), and the five mitigations you would fund first, ranked by risk. Keep it; the OT security course turns it into a zone-and-conduit design.

---

## PHASE 4: Optimization & Specialization

*RAG & vector DBs and LLM fine-tuning moved to the Applied AI roadmap; the edge-relevant part of fine-tuning lives in Domain-specific models (Phase 6).*

### TensorRT `critical`
**Prerequisites:** ONNX & model export, C++
**Unlocks:** Jetson & edge deploy
**Resources:**
- **Best match:** TensorRT official docs and quick-start samples: docs.nvidia.com/deeplearning/tensorrt (free), why: the builder and engine lifecycle, precision flags, calibration for INT8, dynamic shape profiles and layer fusion; the per-layer API listing is reference, not reading
- Jetson AI Lab tutorials (free), why: the same workflow on the device, where memory limits and thermal behaviour change the answer
- Udemy: **Full Course on TensorRT, ONNX for Development and Production**, Fikrat Gasimov (paid, ~$15 on sale). Covers C++ API, Docker integration, Jetson deployment.
- NVIDIA DLI: **Optimization and Deployment of TensorFlow Models with TensorRT**, courses.nvidia.com (paid, nominal fee). TF-TRT only; optional.

**Certification:** NVIDIA Physical AI Certification (new 2026): nvidia.com/training (paid, ~$50-100 with webinar discount)

**Study approach:** TensorRT is a compiler, and understanding it that way is the course. Understand that it takes a graph and a target device and produces an engine specialized to that exact GPU, which is why an engine is not portable and must be rebuilt per device and per TensorRT version, a fact that shapes every deployment pipeline you will build. Understand the optimizations it performs, fusing layers so intermediate tensors never reach memory, selecting kernels by benchmarking candidates on your real shapes, and reducing precision, because knowing them tells you why the speedup appears and why it varies so much by model. Understand reduced precision properly: FP16 usually costs almost no accuracy, while INT8 maps a float range onto 256 levels and therefore needs calibration data to decide that range, and a calibration set that does not resemble production is how a fast model becomes a wrong one. Understand dynamic shapes and optimization profiles, since a model built for one fixed batch size will refuse the input your application actually sends. Understand why the C++ API matters here: it is how the engine is embedded in a real application with controlled memory and no interpreter in the loop, and it is the part of this skill that is scarce. Finally understand that every precision change is an accuracy claim that has to be measured, not assumed.

**Project (KEYSTONE):** Quantize a YOLO model FP32 → FP16 → INT8 with calibration. Deploy on Jetson Orin Nano. Publish a blog post with the full benchmark table (latency, accuracy, model size, power draw). This is the single most career-defining portfolio project for the edge track.

### LiteRT & OpenVINO `desirable`
**Prerequisites:** ONNX & model export
**Unlocks:** Capstone: Edge inference
**Resources:**
- **Best match:** Edge Impulse free tier: edgeimpulse.com, why: the fastest way to feel the whole microcontroller loop, from data capture to a flashed model, without building a toolchain first
- LiteRT docs, formerly TensorFlow Lite (free), why: post-training quantization versus quantization-aware training, the delegate mechanism that offloads to an accelerator, and the operator support list that decides whether your model can run at all
- OpenVINO docs: docs.openvino.ai (free), why: the intermediate representation, the CPU and integrated-GPU plugins, and the post-training optimization tooling; this is the Intel path the safety track needs
- Book: *TinyML*, Pete Warden (paid, ~$50), why: how inference is done when there is no operating system, no heap to speak of and kilobytes of RAM

**Study approach:** This course is about inference where resources are genuinely scarce, and the knowledge is a set of hard constraints rather than a set of techniques. Understand that a microcontroller has no dynamic allocation worth using, so memory is a fixed arena planned in advance, and that the model's size matters less than the peak activation memory a single layer needs. Understand integer quantization as a change of number system: weights and activations become 8-bit integers with a scale and zero point, so arithmetic becomes integer arithmetic, which is what makes it fast on hardware with no floating-point unit. Understand the difference between quantizing after training and training with quantization simulated in the loop, because for small models the second is often the difference between unusable and production-ready. Understand a delegate or plugin as a decision about which operators run on which silicon, and understand that an unsupported operator silently falls back to the slow path, which is the usual explanation for a disappointing benchmark. Understand that the real trade is four-dimensional, accuracy against latency against power against unit cost, and that only the deployment context can resolve it. Readers on the safety track should weight the Intel and OpenVINO material more heavily, because industrial PCs on a plant floor are the usual target there rather than microcontrollers.

**Project:** Deploy a small CV model to a Coral USB accelerator OR Raspberry Pi (CPU). Benchmark against the same model on Jetson. Document the tradeoffs (accuracy vs latency vs power vs cost). Safety track: make the second target an Intel CPU running OpenVINO.

### GPU kernels & profiling `desirable`
**Prerequisites:** CUDA & GPU computing, C++
**Unlocks:** ML compilers & runtimes
**Resources:**
- **Best match:** Triton tutorials: triton-lang.org (free)
- CUTLASS GitHub examples (free), why: how a production matrix multiply is actually structured in tiles and pipelined stages, which no tutorial conveys
- NVIDIA Nsight Compute docs (free), why: the roofline view and the memory-workload and occupancy sections, so you can read a profile instead of guessing
- MIT 6.5940 TinyML and Efficient AI Computing (free lectures), why: the structured treatment of pruning, quantization and distillation, the three ways a model is made cheaper
- GPU MODE Discord & YouTube (free), why: current practice in kernel work, which moves faster than any published course

**Study approach:** Writing a fast kernel is the practice of deciding what lives where in the memory hierarchy, and the knowledge here is mostly about that decision. Understand tiling as the central idea: load a block of data into fast shared memory once, do as much arithmetic on it as possible, then move on, because the alternative is paying global-memory latency repeatedly for the same values. Understand operator fusion as the same thought at graph level, since a chain of elementwise operations that each read and write memory is bandwidth-bound and collapses into one pass. Understand why a domain-specific language like Triton exists: it lets you express the tiling and the memory movement while a compiler handles thread indexing and vectorization, which is where most hand-written CUDA bugs live. Understand occupancy and why more of it is not automatically better, since registers and shared memory are finite and a kernel that uses more of each per thread runs fewer threads at once. Understand the roofline model so you can tell before optimizing whether a kernel is limited by bandwidth or by compute, and therefore which changes could possibly help. The discipline the course is really teaching is that you do not reason about performance, you measure it.

**Project (KEYSTONE):** Write a Triton kernel that beats `torch.matmul` on a specific shape (e.g., long sequence × small head dim, common in transformer inference). Profile with Nsight Compute. Publish the kernel + benchmarks + profiling traces. This is the keystone portfolio project for the compiler half of the edge track.

### AI evaluation `critical`
**Prerequisites:** Deep learning & PyTorch, MLOps fundamentals
**Unlocks:** Perception verification, AI governance engineering
**Resources:**
- **Best match:** Book: *AI Engineering*, Chip Huyen (paid): the most practical published treatment of evaluation
- Voxel51 FiftyOne model evaluation docs (free), why: slice-level metrics for detection and segmentation, and how to find the samples a metric is hiding
- OpenAI Evals repo (free), why: how an evaluation is expressed as code and versioned, so a model change can be judged by running something rather than by opinion

**Study approach:** Evaluation is the discipline of knowing whether a change made the system better, and the knowledge that matters is why a single number almost never answers that. Understand that an aggregate metric averages over a population, so a model can gain two points overall while collapsing on night-time images or on the one class that carries the liability: slicing the test set by the conditions you actually care about is what exposes that. Understand the difference between a frozen evaluation set and a moving one, because a test set that quietly absorbs new data stops being comparable across versions, and that comparability is the entire point. Understand the choice of metric as an encoding of what a mistake costs, since precision and recall trade against each other and only the deployment decides which direction is safe. Understand regression testing applied to models: once a tolerance per slice is written down, quantization, pruning and a runtime change become decisions you can approve or reject automatically instead of arguing about. Where outputs are open-ended text, understand a model used as judge for what it is, a cheap correlated proxy that needs its agreement with human labels measured before it is trusted.

**Project:** A regression suite for the Phase 3 CV model: a frozen, sliced test set, per-slice metrics, and a CI job that fails when an INT8 or pruned build loses more than a set tolerance on any slice. If your track works with LLM or VLM outputs, add one LLM-as-judge check and document where it disagrees with human labels.

### Sensor fusion `desirable`
**Prerequisites:** Computer vision, Math for ML refresher
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Coursera: **Self-Driving Cars Specialization**, University of Toronto (Coursera Plus)
- Cyrill Stachniss lectures: YouTube (free), why: the lectures on Kalman and extended Kalman filtering and on particle filters, derived slowly enough to follow
- Book: *Probabilistic Robotics*, Thrun, Burgard & Fox (paid, ~$65), why: chapters 2 to 4 on recursive state estimation, which is the theory the rest of this node rests on

**Study approach:** Sensor fusion is estimation under uncertainty, and the idea to hold is that a belief about the world is a probability distribution rather than a value. Understand the two-step recursion that follows: a prediction step pushes the belief forward through a motion model and makes it less certain, and an update step pulls it toward a measurement in proportion to how much that measurement is trusted. Understand that the Kalman filter is the exact solution when everything is linear and the noise is Gaussian, that the extended version linearises around the current estimate and therefore drifts or diverges when the system is sharply nonlinear, and that a particle filter abandons the Gaussian assumption entirely and represents the belief with samples, at a cost in compute. Understand the covariance matrix as the honest statement of what you do not know, since a filter that reports tight uncertainty while being wrong is far more dangerous in a vehicle than one that admits doubt. Understand why fusion wins at all: sensors fail in complementary ways, an inertial unit drifts but is fast, GPS is absolute but slow and blocked indoors, a camera is rich but scaleless. Understand time synchronization and frame alignment as first-class concerns, because fusing two correct measurements stamped at different instants produces a confidently wrong answer.

**Project:** Implement Kalman filter and EKF from scratch in C++ on simulated GPS+IMU data. Add a particle filter for non-Gaussian cases. Compare your output against a reference solution from Stachniss exercises.

### RL & imitation learning `critical`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** NVIDIA Isaac Sim; beyond this graph, modern policy-learning robotics and VLA models
**Resources:**
- **Best match:** Berkeley CS285: Sergey Levine (free, YT). Theory depth.
- OpenAI Spinning Up (free). Hands-on RL.
- DeepMind RL course: David Silver (free, YT), why: Markov decision processes, value functions and policy iteration, the vocabulary everything else assumes
- Diffusion Policy paper (free, arxiv), why: how a policy came to be modeled as a denoising process, which is the shift that defines current manipulation work

**Study approach:** Reinforcement learning is what you use when there is no labeled right answer, only a reward that arrives late, and every difficulty in the field comes from that. Understand the Markov decision process as the frame, states, actions, transitions and reward, and understand the credit-assignment problem: when a reward arrives after a hundred actions, deciding which of them deserved it is the whole challenge. Understand a value function as the expected future reward from a state and a policy as the mapping from state to action, then understand why the two families exist, value-based methods learning what is worth doing and policy-gradient methods adjusting behaviour directly, with actor-critic combining them. Understand exploration against exploitation as an unavoidable tension, and understand on-policy against off-policy as a statement about whether old experience can still be learned from, which is exactly why sample efficiency differs so much between algorithms. Understand reward shaping as the most common source of disaster, since an agent optimises the reward you wrote rather than the behaviour you meant. Then understand why robotics largely moved to imitation: on real hardware, random exploration breaks things and samples are expensive, so behaviour cloning learns from demonstrations instead, and modeling the action distribution with a diffusion process is what makes that work for multimodal tasks where several different motions are all correct.

**Project (KEYSTONE):** Train PPO on Pendulum and CartPole. Then train Behavior Cloning + Diffusion Policy on Robomimic. Deploy at least one policy on Isaac Sim or a real robot arm. Public training curves, rollout videos, and ablations.

### 3D geometry & SLAM `critical`
**Prerequisites:** Computer vision, Math for ML refresher
**Unlocks:** Capstone: Physical AI
**Resources:**
- **Best match:** Cyrill Stachniss: Photogrammetry & SLAM lectures, YouTube (free): the clearest free lecture series on the subject
- Gao Xiang: *Introduction to Visual SLAM*, book plus code, why: the implementation companion, with the pose representation, optimization and back-end code written out
- Barfoot: *State Estimation for Robotics*, free PDF, why: the rigorous treatment of Lie groups for poses, for when a derivation elsewhere moves too fast

**Study approach:** This course is about recovering geometry and motion from images, and it rests on a small number of facts about projection. Understand the pinhole camera model and why calibration is non-negotiable: intrinsics turn pixels into rays, and lens distortion left uncorrected bends every straight line in your reconstruction. Understand that a single image cannot give depth, which is why two views are needed, and understand epipolar geometry as the constraint linking them: a point in one image must lie on a known line in the other, and that constraint is what makes matching tractable and triangulation possible. Understand monocular scale ambiguity, that one moving camera recovers the shape of a trajectory but not its size, and why stereo baselines and inertial measurements are the usual cures. Understand pose as an element of a group rather than a vector, because that is why rotations cannot be averaged naively and why Lie-group machinery appears at all. Understand drift as the defining failure: small per-frame errors compound, so a front end tracks locally while a back end optimises globally, and loop closure is the moment the system recognises a place it has been and corrects the accumulated error. Understand why absolute and relative trajectory error are both reported, since one measures global consistency and the other local accuracy.

**Project:** Calibrate a real camera with OpenCV, then build a minimal stereo or monocular visual odometry pipeline on a public dataset (KITTI or TUM RGB-D) and compare its trajectory against ground truth (ATE and RPE). Add bundle adjustment or loop closure and show the drift it removes.

### Functional safety for ML `critical`
**Prerequisites:** MLOps fundamentals, Computer vision
**Unlocks:** ML safety assurance; beyond the graph, senior roles in regulated industries (industrial, medical, automotive)
**Resources:**
- **Best match:** IEC 61508 white papers (free), why: safety integrity levels and how one is assigned, the hazard and risk analysis that precedes any design, and the separation of systematic from random failure
- Book: *Functional Safety for Embedded Systems*, Hobbs (paid, ~$80), why: how these requirements become real engineering, redundancy, diagnostics, watchdogs and documented verification
- Safety-Critical AI papers (free, arxiv), why: the open problems, since there is no textbook yet for the ML part of this
- ISO 26262 (automotive) and IEC 62443 (industrial security), why: the sector-specific framings you will be asked about by name

**Study approach:** Functional safety is an argument, not a feature, and the knowledge is the structure of that argument. Understand that it begins with hazard analysis rather than with design: you identify what harm the system could cause, how severe and how likely it is, and how easily it could be avoided, and only then does a required integrity level follow. Understand the distinction between random failure, a component breaking at a rate you can estimate, and systematic failure, a design being wrong in a way no amount of operating time reveals, because machine learning sits almost entirely in the second category and classical reliability numbers simply do not apply to it. Understand why the standards demand a specification you can verify against, which is precisely what a learned model lacks: its behaviour is defined by its training data, so the usual chain from requirement to test case is broken. Understand the standard mitigations that follow from accepting that, keeping the model outside the safety function, constraining it with a simpler monitor that can be verified, and designing a safe state the system falls into when confidence drops. Understand that documentation and traceability are not bureaucracy here but the deliverable itself. This node teaches the classical frame; the machine-learning methods that plug into it come in *Perception verification* and *ML safety assurance*.

**Project:** Write a safety case for a hypothetical industrial ML deployment (e.g., conveyor-belt defect detection at SIL-2). Map model components to IEC 61508 requirements. Identify gaps between current ML practice and standards. Publish as a public document: there are very few examples online, so this alone signals expertise.

---

## PHASE 5: Deploy & Build

*Multi-agent systems moved to the Applied AI roadmap.*

### Domain vertical `critical`
**Prerequisites:** Deep learning & PyTorch, MLOps fundamentals
**Unlocks:** OT & industrial security, Domain-specific models, AI systems architecture, Bio-digital / medical AI
**Resources by vertical:**
- **Best match:** Coursera domain specializations for your vertical, as listed below
- Industrial: OPC-UA spec, opcfoundation.org (free), why: the information model and the idea that a machine publishes a typed address space rather than raw registers; plus IEC 61508 and IEC 62443 for the safety and security vocabulary, and Coursera **Smart Manufacturing**, UB (Coursera Plus)
- Medical: DICOM standard, why: how an image carries its acquisition metadata and patient identity, which is what makes medical data both usable and legally heavy; plus HIPAA for what may be stored and moved, and Coursera **AI for Medicine**, DeepLearning.AI (Coursera Plus)
- Automotive: ISO 26262 white papers, why: ASIL assignment and the V-model that governs how automotive software is allowed to be built; plus AUTOSAR for the software architecture a car expects, and Coursera **Self-Driving Cars**, UToronto (Coursera Plus)
- Energy: IEC 61850, why: substation data modeling and the real-time constraints of grid telemetry; plus SCADA fundamentals and depth in time-series forecasting
- Industry events for any vertical (paid, varies), why: the unwritten constraints and current anxieties of a sector, which never reach print

**Study approach:** This node exists because the hardest part of applied machine learning is usually not the model but knowing what the data means, and that knowledge is sector-specific. Pick exactly one vertical and understand its physical process well enough to say what a sensor reading physically represents, what a normal day looks like and what an abnormal one costs, because that is what lets you tell a real anomaly from an artifact. Understand who is accountable when the system is wrong and what evidence that person needs, since in every one of these sectors the decision to deploy is made by someone who will answer for it. Understand the regulatory frame as a design input rather than paperwork: it determines what you may log, how long you must keep it and what you must be able to prove afterwards. Understand the vocabulary precisely, not to sound fluent but because the same word means different things in different industries, and a mistranslated requirement is the expensive kind of error. Depth in one vertical is worth more than familiarity with four: it is the part of this profile that no model and no code assistant supplies.

**Project:** A vertical-specific demo that a non-ML expert in that vertical would recognize as their problem. Examples: industrial defect detection on synthetic factory imagery; medical chest X-ray classifier with FDA-aligned evaluation framework; automotive lane-keeping with ISO-26262-style failure-mode docs.

### Jetson & edge deploy `critical`
**Prerequisites:** TensorRT, Docker & CI/CD
**Unlocks:** Vision-language models, NVIDIA Isaac Sim, Capstone: Edge inference, AI fleet architect, Capstone: Physical AI, Neuromorphic computing
**Resources:**
- **Best match:** NVIDIA Jetson tutorials and Jetson AI Lab (free), why: power modes and `jetson_clocks`, unified memory on the module, the container images that match a given JetPack, and DeepStream pipelines; this is a rolling reference rather than a course
- NVIDIA DLI Jetson workshops (paid, ~$30 each), why: a guided pass over the same ground when the self-directed route stalls
- Book: *AI at the Edge*, Situnayake & Plunkett (paid, ~$50), why: the conceptual framing, how an edge deployment is designed around power, connectivity and physical access
- Hardware: Jetson Orin Nano Super dev kit (~$399), why: an emulator cannot reproduce a thermal envelope, and that is where edge projects actually fail

**Study approach:** Deploying to a device is a different discipline from deploying to a server, and the knowledge is the list of things a datacentre quietly gave you for free. Understand that a Jetson shares one memory pool between CPU and GPU, which removes the copy you were used to paying for but makes memory a single hard ceiling your model and your video pipeline must fit inside together. Understand thermal throttling as the defining edge failure: the board meets its latency target for ten minutes and then silently slows down, so a benchmark that was not run to thermal equilibrium is not a benchmark. Understand the power modes as an explicit trade of watts for throughput, because an enclosure or a battery, not the model, usually sets the budget. Understand that the software stack is versioned as a whole, so the JetPack release pins the driver, CUDA and TensorRT versions together, which is why an engine built elsewhere will not load and why containers are how this is kept sane. Understand that the device is physically remote and occasionally unreachable, which makes over-the-air updates, a safe rollback and local buffering during a network outage part of the design rather than later additions. Understand that the camera and decode path often costs more than inference, so the pipeline, not the model, is what you profile first.

**Project:** End-to-end edge deployment pipeline on Jetson: TensorRT-optimized model + DeepStream pipeline + Docker container + remote OTA updates + basic monitoring (Prometheus). Public architecture diagram and a writeup of one production gotcha you discover.

### LLM serving & inference `critical`
**Prerequisites:** LLM fundamentals, Docker & CI/CD
**Unlocks:** none in this graph
**Resources:**
- **Best match:** vLLM docs (free), why: paged attention and continuous batching explained by their reference implementation, plus the scheduler and memory settings that actually move the numbers
- SGLang docs (free), why: prefix caching and structured output, and what changes when many requests share a long common prompt
- Book: *AI Engineering*, Chip Huyen (paid), why: the inference and cost chapters, which put these numbers in the context of a product decision

**Study approach:** Serving a language model is a memory-management problem disguised as a latency problem. Understand that generation has two distinct phases: a prefill pass that processes the whole prompt in parallel and is compute-bound, then decoding that emits one token at a time and is bound by memory bandwidth, which is why time to first token and tokens per second are separate numbers that respond to different fixes. Understand the key-value cache as the dominant consumer of GPU memory: it grows with sequence length and with every concurrent request, so it, not the weights, usually decides how many users one GPU can serve. Understand paged attention as the insight that this cache can be managed in fixed blocks like virtual memory, which removes the fragmentation that made naive serving waste most of its memory. Understand continuous batching as the scheduling counterpart, admitting and retiring requests mid-flight instead of waiting for a batch to finish together, and understand the trade it makes between throughput and tail latency. Understand prefix caching as the reason a shared system prompt should be paid for once. Understand quantization here as a memory decision rather than a speed one, since a smaller model leaves more room for cache and therefore more concurrency. Every tuning choice should move time to first token, tokens per second, or memory under concurrency, and if it moves none of them it was not a tuning choice.

**Project:** Serve a 4-bit quantized open model (AWQ or GPTQ) with vLLM on one GPU, load-test it at increasing concurrency, and publish latency percentiles, throughput and cost per million tokens against the FP16 baseline. Edge-track readers: repeat the measurement on a Jetson and compare.

### ML compilers & runtimes `desirable`
**Prerequisites:** GPU kernels & profiling, ONNX & model export
**Unlocks:** Capstone: Edge inference
**Resources:**
- **Best match:** Machine Learning Compilation course, Tianqi Chen, mlc.ai (free): the one open lecture series that treats ML compilation as a subject
- MLIR Toy tutorial, mlir.llvm.org (free), why: what a dialect is and what happens at each lowering step, which is the structure every modern compiler stack now shares
- ExecuTorch docs (free), why: ahead-of-time export and the delegate and partitioner model, so the abstractions land on something you can actually ship to a device

**Study approach:** An ML compiler turns a description of what to compute into a decision about how, and the knowledge here is that separation. Understand that a model graph says nothing about loop order, tiling, memory layout or which hardware unit runs what, and that a schedule is exactly the set of those choices, which is why the same tensor program can differ by an order of magnitude in speed. Understand the lowering pipeline: a high-level graph is rewritten through progressively more hardware-specific representations until it becomes machine code, with each level able to apply the optimizations only it has the information for. Understand operator fusion and layout transformation as the passes that matter most in practice, because they are what remove memory traffic. Understand autotuning as a search over schedules measured on real hardware rather than predicted, and understand why that search exists at all: performance depends on cache sizes and memory behaviour no model captures. Understand the fundamental tension this field lives with, that a handwritten kernel beats a compiler on the shape it was written for while a compiler covers every other shape, which is why production stacks mix both. Keep a profiler open throughout, since a compiler pass is worth exactly what it measurably saves.

**Project:** Take one model through two compile paths to the same target (TensorRT and one of TVM or ExecuTorch), compare latency and memory, and explain the difference from the generated kernels or the profiler trace. Bonus: write one custom operator lowering or fusion pass and measure it.

### Data engine & synthetic data `desirable`
**Prerequisites:** Deep learning & PyTorch, MLOps fundamentals
**Unlocks:** none in this graph
**Resources:**
- **Best match:** NVIDIA Omniverse Replicator docs (free), why: domain randomization and automatic ground-truth generation, the two reasons synthetic data is worth generating at all
- Voxel51 FiftyOne (free), why: finding mislabeled samples, near-duplicates and low-confidence cases, which is where dataset improvement actually comes from
- Published data-engine talks from autonomous-driving teams (free), why: the shape of the loop at industrial scale, which no tutorial reproduces

**Study approach:** The knowledge here is that a dataset is a system with a lifecycle, not a file you were given. Understand active learning as the core move: the samples worth labeling are the ones the current model is least sure about or that an ensemble disagrees on, so labeling effort is spent where it changes the model rather than uniformly. Understand label quality as a ceiling on achievable accuracy, since inconsistent or wrong labels cap performance no architecture can lift, which is why auditing a sample of labels is worth more than another training run. Understand near-duplicate and redundancy analysis, because a dataset that looks large and is actually one scene photographed repeatedly teaches far less than its size suggests. Understand the sim-to-real gap and why domain randomization addresses it: a model trained across wildly varied textures, lighting and camera poses is forced to rely on features that survive the change to reality. Understand that synthetic data's real advantage is perfect, free ground truth for things a human cannot label well, exact depth, segmentation masks, object poses, and its real limitation is that it only contains the failure modes you thought to simulate. Understand why every addition must be measured on a held-out real test slice: synthetic data that improves nothing is the normal outcome, and only measurement separates it from the case that works.

**Project:** Close the loop once on your CV model: mine a few hundred hard examples from unlabelled data, label them, retrain, and show the per-slice gain. Then add a synthetic set for one rare case generated with Omniverse Replicator and report whether it improved the real-data test slice.

### Perception verification `critical`
**Prerequisites:** Computer vision, AI evaluation
**Unlocks:** ML safety assurance
**Resources:**
- **Best match:** Book: *Introduction to Neural Network Verification*, Aws Albarghouthi (free, verifieddeeplearning.com and arXiv): the clearest entry to formal methods for networks
- Angelopoulos & Bates: *A Gentle Introduction to Conformal Prediction and Distribution-Free Uncertainty Quantification*, arXiv (free), why: how to turn any model's scores into prediction sets with a guaranteed coverage rate, with no assumption about the model
- Hendrycks & Dietterich: *Benchmarking Neural Network Robustness to Common Corruptions and Perturbations* (free), why: the corruption taxonomy and the finding that accuracy on clean data says little about accuracy in weather, blur and noise

**Study approach:** This course answers a question evaluation cannot: not how often the model is right, but when its output may be relied upon. Understand calibration first, and the uncomfortable fact that a network's softmax score is not a probability, since modern networks are systematically overconfident and a reported 0.99 does not mean right ninety-nine times in a hundred. Understand conformal prediction as the repair: using a held-out set to convert raw scores into a set of labels that provably contains the truth at a chosen rate, where the width of that set, rather than a point prediction, is the honest statement of uncertainty. Understand out-of-distribution detection as a separate problem from accuracy, because the dangerous case is not a wrong answer on a familiar scene but a confident answer on a scene unlike anything in training, and a system that can say it does not know can fall back to a safe state. Understand corruption robustness as the operational version of the same concern, which is why a corruption suite should be matched to the site's real conditions rather than taken from a benchmark. Understand what formal verification can prove today and what it cannot: local robustness properties on small networks, not a global guarantee about a detector, so it is one piece of evidence in a safety argument rather than the argument itself.

**Project:** A verification report for your CV model: accuracy under a corruption suite matched to the site (dust, glare, low light), an OOD detector with its false-alarm rate, conformal prediction sets at a stated coverage, and one formally verified local robustness property on a small classifier head. Write it as evidence a safety case could cite.

### OT & industrial security `critical`
**Prerequisites:** Domain vertical, Security fundamentals & threat modeling
**Unlocks:** Capstone: Safety case
**Resources:**
- **Best match:** ISA/IEC 62443 overview material (free), why: zones, conduits and security levels, and the division of responsibility between asset owner, integrator and product supplier
- CISA ICS advisories (free), why: how real attacks on real plant equipment actually land, which beats any abstract threat model
- Book: *Industrial Network Security*, Knapp & Langill (paid), why: the industrial protocols and the segmentation designs that contain them

**Study approach:** Operational technology security is not enterprise security with different equipment, and understanding why is the course. Understand that the priorities invert: in an office, confidentiality usually comes first, while on a plant floor availability and safety come first, because stopping a process can be more dangerous than leaking data, and that single inversion explains why you cannot patch on a schedule, reboot for updates or run an intrusive scan on a live line. Understand the Purdue model as the layered picture of a plant, from sensors and controllers up through supervisory systems to the business network, and understand zones and conduits as the formalization of it: group assets by required security level and make every crossing an explicit, inspected path. Understand that industrial protocols were designed for trusted networks, so many carry no authentication at all, which is why segmentation and monitoring do the work that authentication cannot. Understand the realistic attack paths, remote maintenance access, an engineering workstation, the supply chain and a contractor's laptop, rather than the dramatic ones. Understand where machine learning changes the picture: an inference box is a new network participant with an update channel and often a camera feed, so a poisoned model or a spoofed feed becomes a plant-floor concern. Keep the distinction from functional safety explicit, since a safety case argues about faults and a security case argues about an adversary, and each needs its own evidence.

**Project:** A zone-and-conduit design for an ML inference box added to a plant cell: threat model, target security levels, segmentation, update path and remote-access policy, mapped to IEC 62443-3-3 requirements. Include how a compromised model or camera feed would be detected.

### AI safety & governance `desirable`
**Prerequisites:** Deep learning & PyTorch
**Unlocks:** none in this graph; background for AI governance engineering in Phase 6
**Why:** EU AI Act is in force. Vocabulary tier: pair with the implementation-oriented *AI governance engineering* node in Phase 6 for the full profile.
**Resources:**
- **Best match:** Ethics of AI, University of Helsinki (free)
- ISO/IEC 42001 AI Management System: white papers, why: what an auditable AI management system is required to contain, which is how governance becomes a process rather than a statement
- Coursera: AI Ethics courses (Coursera Plus, various), why: the fairness and accountability vocabulary, if the subject is new to you
- Adversarial ML papers (free, arxiv), why: Goodfellow for why adversarial examples exist at all, Madry for adversarial training as the main defence and for why most others fail
- EU AI Act, high-risk system requirements, read directly, why: the obligations themselves, since secondary summaries paraphrase them badly

**Study approach:** The knowledge here has two halves that are usually taught apart and belong together. On the governance side, understand that regulation is organised by risk rather than by technology: a use case is classified, and that classification, not the model, determines the obligations, which is why the same network can be unregulated in one product and high-risk in another. Understand the recurring requirements across frameworks, data governance, documentation, human oversight, accuracy and robustness claims, logging, and post-market monitoring, because they are the same list in different wording and they mostly amount to being able to show afterwards what the system did and why. On the technical side, understand adversarial examples as a direct consequence of high-dimensional decision boundaries: a perturbation too small to see can cross one, so this is a property of the models rather than a bug in a particular one. Understand that adversarial training is the defence that holds up and that it costs accuracy, and understand data poisoning and prompt injection as the same lesson at different layers, that any input a model treats as instruction is an attack surface. Understand why these halves meet: the robustness claim a regulation requires you to make is exactly the one adversarial work shows is hard to support.

**Project:** Red-team an open model for adversarial inputs: prompt injection on an LLM, or an adversarial patch against your perception model. Document successful attacks, propose mitigations, validate them with an eval harness. Public writeup. Bonus: contribute a finding to a public AI red-teaming benchmark.

---

## PHASE 6: Integration

### Distributed systems `critical`
**Prerequisites:** MLOps fundamentals, Docker & CI/CD
**Unlocks:** AI systems architecture
**Resources:**
- **Best match:** Book: **Designing Data-Intensive Applications**, Martin Kleppmann (paid, ~$60), why: read for its whole argument, but chapters 5 to 9 on replication, partitioning, transactions and the trouble with distributed systems are the ones that change how you think; the storage-engine and batch-processing chapters are useful context

**Study approach:** The knowledge here is a short list of impossibilities, and everything else in distributed systems is a response to them. Understand that a network can neither be trusted nor be distinguished from a slow machine, so a node cannot tell a dead peer from a late one, which is why timeouts are guesses and why consensus protocols exist at all. Understand replication as a trade rather than a feature: copying data buys availability and read capacity and costs you a single truth, which is what consistency models are for, and understand why strong consistency means coordination and therefore latency while eventual consistency means answering fast and reconciling later. Understand partitioning as the only way to scale writes, along with the costs it brings, a key that must be chosen well, hot spots when it is not, and queries that must now reach many nodes. Understand idempotency and at-least-once delivery, because a retry you cannot distinguish from a duplicate is the most common data-corrupting bug in a pipeline. Understand why time is unreliable across machines, which is why ordering is established with logical clocks rather than timestamps. Then read the whole of it with the edge case in mind: thousands of devices on bad networks, each with a local model, is the hardest version of every problem in the book.

**Project:** Design (in writing) a distributed inference system for 1000 concurrent users with sub-100ms latency. Cover replication, partitioning, drift detection, OTA model updates. Submit for peer review on a forum (e.g., HackerNews's "Show HN", or a serious engineering blog).

### Vision-language models `critical`
**Prerequisites:** Vision Transformers, Jetson & edge deploy, LLM fundamentals
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Jetson AI Lab: TensorRT Edge-LLM tutorial (free), why: the fastest route to a vision-language model on real hardware, with the memory and quantization settings that make it fit
- TensorRT Edge-LLM docs, nvidia.github.io/TensorRT-Edge-LLM (free), why: the C++ runtime, the KV-cache configuration and the supported model list; the pages are sparse, so expect to read source
- NVIDIA blog: *Getting Started with Edge AI on Jetson, LLMs, VLMs, Foundation Models* (free), why: how the vision encoder and the language model are assembled into one pipeline, which the reference pages assume you know

**Study approach:** A vision-language model is two models joined by a projection, and understanding that join is what makes its behaviour and its cost predictable. Understand that a vision encoder turns an image into a set of tokens, a small learned projection maps them into the language model's embedding space, and the language model then treats them as if they were words, which is why an image can cost hundreds or thousands of tokens of context and why resolution is a direct cost decision rather than a quality setting. Understand what that buys at the edge: open-ended questions about a scene without a trained class list, which is exactly what classical detection cannot do. Understand the three resources that bind on a device, weights, key-value cache and the vision encoder's activations, competing for one memory pool, and understand why the usual response is an aggressively quantized language model paired with a reduced number of image tokens. Understand the latency structure, a largely fixed cost to encode the image and then token-by-token generation, so prompt-to-first-word and words-per-second are separate measurements. Understand the honest limits before building on it: these models hallucinate detail that is not in the image, read small text poorly and give no calibrated confidence, which is why they belong in assistive and triage roles rather than in a control loop.

**Project:** Deploy a recent VLM (Florence-2, LLaVA-NeXT-OneVision, or current SOTA) on Jetson Orin with the TensorRT Edge-LLM SDK. Benchmark prompt-to-output latency and memory under realistic loads. Document end-to-end on a blog post.

### Domain-specific models `desirable`
**Prerequisites:** LLM fundamentals, Domain vertical
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Hugging Face PEFT docs: huggingface.co/docs/peft (free), why: LoRA and QLoRA are what you will actually run, so read the pages on rank and target-module selection, on adapter merging, and on saving and loading adapters
- DeepLearning.AI short courses on fine-tuning (free), why: the mechanics of a low-rank adapter in a couple of hours, before the vocabulary gets heavier
- Hugging Face fine-tuning guides (free), why: dataset formatting, the training loop and the evaluation hooks, which is where most of the practical difficulty sits
- Domain-specific datasets and benchmarks on HuggingFace Hub (free), plus two or three recent domain-adaptation papers in your vertical, why: to see which adaptation already exists and what counts as a result in your field

**Study approach:** Fine-tuning changes how a model talks, rarely what it knows, and understanding that distinction saves most of the wasted effort in this subject. Understand parameter-efficient tuning concretely: a low-rank adapter freezes the original weights and learns a small pair of matrices alongside them, which is why it needs a fraction of the memory, produces an artifact of megabytes rather than gigabytes, and can be swapped or merged per domain. Understand that quantized training pushes this further by holding the base model in 4-bit while the adapter stays in higher precision, which is what puts this work on one ordinary GPU. Understand catastrophic forgetting and why adapters mitigate it, since the base weights are never touched. Understand how to decide whether you need this at all: a better prompt or retrieval usually fixes missing facts, while fine-tuning is the right instrument for format, tone, a specialized vocabulary and a task the base model performs inconsistently. Understand that the dataset is the project, because a few thousand clean, consistent, in-domain examples beat a large noisy set, and that you need a domain evaluation written before training or you cannot tell whether anything improved. For this path, understand the deployment constraint from the start: pick a model that fits the target device, and plan the quantization step together with the fine-tune, because an adapter that only works in FP16 never ships. General instruction tuning and preference tuning for applications live in the Applied AI roadmap.

**Project:** Fine-tune a small open LLM or VLM (1-4B parameters) with LoRA on a curated domain dataset, build a custom domain eval, and compare against the base model. Then quantize the adapted model, deploy it on Jetson, and report the accuracy retained and the latency. Open everything (dataset, training code, eval results, model card) on HuggingFace Hub.

### NVIDIA Isaac Sim `desirable`
**Prerequisites:** ROS2, Jetson & edge deploy, RL & imitation learning
**Unlocks:** none in this graph
**Resources:**
- **Best match:** NVIDIA DLI: Introduction to Robotic Simulations in Isaac Sim (paid)
- Isaac Lab on GitHub: isaac-sim.github.io/IsaacLab (free), why: the environment and task definitions, domain-randomization configuration and the vectorized training setup, as production-quality reference code
- Isaac GR00T deployment guide: github.com/NVIDIA/Isaac-GR00T (free), why: how a policy trained in simulation is packaged and run on a real robot

**Study approach:** Simulation exists because robot learning needs far more experience than real hardware can safely or affordably supply, and the knowledge here is about the price that bargain carries. Understand why GPU-accelerated physics changes the economics: thousands of environments stepping in parallel turn years of robot time into hours, which is what makes reinforcement learning viable for manipulation at all. Understand the reality gap precisely rather than as a slogan: contact and friction are the parts physics engines model worst, sensor noise and latency are usually absent, and actuators in simulation respond instantly while real ones lag, so a policy that exploits any of these learns something that does not exist. Understand domain randomization as the standard answer, varying masses, friction, lighting and textures during training so the policy is forced to rely on what survives the move to hardware, and understand that randomizing too narrowly transfers nothing while randomizing too widely trains a policy too cautious to be useful. Understand the observation and action gaps as engineering problems in their own right: the real robot must produce the same observation vector in the same units and frames, and the control delay the simulation lacked has to be modeled or compensated. Understand why evaluation must happen on hardware, because simulated success rates are optimistic by construction. Budget more time for transfer than for training, since that is where the work actually is.

**Project:** Train a manipulation policy in Isaac Sim, deploy on Jetson with TensorRT, evaluate on a real or simulated robot arm. Document sim2real transfer challenges in a writeup (domain randomization, observation gap, action delay).

### ML safety assurance `critical`
**Prerequisites:** Functional safety for ML, Perception verification
**Unlocks:** Capstone: Safety case
**Resources:**
- **Best match:** AMLAS guidance, University of York (free): a published end-to-end method for an ML safety case, with patterns you can reuse
- ISO/PAS 8800:2024, Road vehicles: Safety and artificial intelligence (paid)
- ISO/IEC TR 5469:2024, Functional safety and AI systems (paid)

**Study approach:** A safety case is a structured argument that a system is acceptably safe in a stated context, supported by evidence, and this course teaches how that argument is built when part of the system was learned rather than specified. Understand the chain that AMLAS makes explicit: a system-level safety requirement is decomposed into requirements on the machine-learning component, those become requirements on the data and on the model, and every stage must be traceable back up, because a claim with no evidence behind it is where a safety case fails review. Understand why the data is treated as a safety artifact: its coverage of the operating conditions, its relevance, its balance and its completeness are the real argument about when the model will work, which is why dataset documentation carries weight here that it carries nowhere else. Understand the distinction that separates this from classical safety: the hazard is usually not a broken component but a correct component with an insufficient specification, performing exactly as trained in a situation nobody anticipated, which is what safety of the intended functionality names and why it needs its own treatment. Understand the operational design domain as the honest boundary of the claim, and runtime monitoring plus a defined safe state as what you do when the system leaves it. Understand that residual risk is stated rather than eliminated: a credible safety case says plainly what it has not shown. Read published summaries of the paid standards first and buy only the one your vertical needs.

**Project:** An AMLAS-structured safety case for the perception function you verified in Phase 5: safety requirements traced to data and model requirements, the verification report as evidence, a runtime monitor with a defined safe state, and an explicit list of residual risks.

### AI governance engineering `critical`
**Prerequisites:** MLOps fundamentals, AI evaluation
**Unlocks:** none in this graph; beyond it, compliance engineering roles in regulated industries, where the EU AI Act's high-risk obligations (Dec 2027 / Aug 2028) make this work a legal requirement
**Why:** Regulation-driven and durable. EU AI Act high-risk system requirements take full effect between Dec 2027 and Aug 2028; ISO/IEC 42001 adoption is accelerating; NIST AI RMF is being baked into US federal procurement. Every company shipping AI under these regimes needs engineers who can *implement* the standards, not just cite them.
**Resources:**
- **Best match:** ISO/IEC 42001:2023 standard, AI Management Systems (paid, ~$150 official; summaries free), why: the clauses on roles, risk treatment, documented information and internal audit, which define what an auditable AI management system must contain
- EU AI Act, Annex IV (free, eur-lex.europa.eu), why: the itemized list of what technical documentation for a high-risk system must include, which is the specification for your model card and registry
- NIST AI Risk Management Framework and Playbook (free, nist.gov), why: the govern, map, measure and manage functions, and the Playbook's suggested actions, which translate the framework into tasks
- OECD AI Policy Observatory (free), why: how obligations differ across jurisdictions, when a system ships to more than one
- Coursera: AI Ethics & Governance tracks (Coursera Plus)

**Study approach:** This node is about turning legal text into running software, and the knowledge is the mapping between the two. Understand that the technical obligations in Articles 9 to 15 of the EU AI Act are each satisfiable by an engineering artifact rather than by a policy document: continuous risk management by a register tied to releases, data governance by dataset documentation and lineage, technical documentation by a model card generated from the training run, record-keeping by an immutable audit log of inputs, outputs and deployment decisions, human oversight by an interface that lets a person actually intervene rather than merely watch, and accuracy and robustness by an evaluation suite whose thresholds are written down. Understand why provenance is the hard part: to answer which model version produced a given decision, on what data it was trained and who approved its release, the registry and the log must be built before the question is asked, never after. Understand the difference in kind between the frameworks, that ISO/IEC 42001 is a management system describing how an organisation governs this work and the AI Act is law imposing obligations on a product, which is why the first is an overlay on the second rather than an alternative. Understand post-market monitoring as the recognition that compliance is continuous: a model that drifts out of its stated accuracy is a compliance event, not just an engineering one. Understand conformity assessment as the deliverable all of this feeds, and read the Act's articles directly, because secondary summaries lose exactly the specificity you need.

**Project:** Build a reference governance stack for a single ML model: a model registry with provenance metadata, an audit log of deployment decisions, an eval harness mapped to specific Annex IV requirements, and a written conformity-assessment document. Public repo + a writeup explaining how each component maps to a specific clause of the EU AI Act or ISO 42001. Examples in this space are scarce, so a working reference is high-signal.

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

**Study approach:** This field asks what a model is actually computing, and the knowledge is a small set of findings that reframe the question. Understand superposition first: a network represents more features than it has neurons by encoding them in overlapping directions, which is why a single neuron is usually not interpretable and why early attempts to read one failed. Understand sparse autoencoders as the response, learning an overcomplete basis in which those directions separate into features that mean one thing, and understand the honest caveats, that the number of features is chosen rather than discovered and that a feature's label is a human interpretation of what activates it. Understand a circuit as a claim about mechanism, a path through specific attention heads and layers that implements a behaviour, and understand why such a claim must be tested causally, by ablating or patching an activation and seeing whether the behaviour disappears, since correlation with an output proves nothing. Understand probing as the cheap version of the same question: train a small classifier on internal activations to ask whether some property is represented there at all. On the evaluation side, understand that measuring a dangerous capability is a question about an upper bound on what the model can be made to do, which is why elicitation effort matters and why a negative result is weak evidence. Understand that behaviour under training can diverge from behaviour at deployment, which is what the backdoored-model work demonstrates and why interpretability is treated as a safety tool rather than a curiosity. Reading without implementing does not transfer here: build one technique yourself.

**Project:** Reproduce one published interpretability or evals result on a small open model. Examples: train sparse autoencoders on a tiny transformer and verify monosemantic features; build a capability-eval harness measuring a specific behavior. Public repo with notebooks, plus a writeup framing the result against the original paper.

---

## PHASE 7: Architecture & Capstones

### AI systems architecture `critical`
**Prerequisites:** Distributed systems, Domain vertical
**Unlocks:** Technical leadership, AI fleet architect
**Resources:**
- **Best match:** Book: *System Design Interview* Vol 1 & 2, Alex Xu (paid, ~$40 each). Essential for senior/staff interviews.
- Coursera: **Software Architecture**, University of Alberta (Coursera Plus), why: the architectural vocabulary, patterns and quality attributes, so a design discussion has shared terms in it
- Book: *Building Machine Learning Powered Applications*, Emmanuel Ameisen (paid, ~$45), why: how a model becomes a product, including the parts around it that decide whether it is useful

**Study approach:** Architecture is the practice of choosing which problems to have, and the knowledge is about trade-offs rather than components. Understand that every quality attribute trades against another: latency against cost, consistency against availability, flexibility against simplicity, and that a design with no stated trade-off has simply not been thought through. Understand what makes an architecture an ML architecture rather than a web one, that the model is a dependency which degrades silently rather than failing loudly, so the system needs evaluation, monitoring and a defined fallback as first-class parts, and that training and serving are two systems with different shapes sharing one definition of a feature. Understand where the boundaries go and why: what runs on the device, what runs at the edge, what runs in the cloud, decided by latency requirements, bandwidth cost, privacy and what must keep working when the network does not. Understand the update problem as the one unique to a fleet, that models and software versions must roll out gradually with a way back, because a bad model reaching ten thousand devices at once is the failure that defines this role. Understand that the deliverable is a written document someone can disagree with, naming the requirements, the options rejected and the reasons, which is why writing designs by hand is the actual exercise here and why interview preparation and real practice are the same activity.

**Project:** Design (in writing) an edge-cloud system for a fleet of 10k devices. Cover fleet management, federated learning, OTA model updates, drift detection, observability. Submit for peer review (interactive review on EngineeringBlogs or similar).

### Technical leadership `desirable`
**Prerequisites:** AI systems architecture
**Unlocks:** none in this graph
**Resources:**
- **Best match:** Book: *Staff Engineer: Leadership Beyond the Management Track*, Will Larson (paid, ~$30)
- Book: *The Manager's Path*, Camille Fournier (paid, ~$35), why: read it for what the other side of the table is optimizing for, even if you never manage anyone

**Study approach:** Technical leadership is influence without authority, and the knowledge is about where that influence comes from. Understand that the senior individual contributor's output is other people's decisions, which means the work is choosing which problems the team should have and making the reasoning behind a direction legible enough that others can act on it without you in the room. Understand writing as the primary instrument: a design document, a postmortem or a well-argued proposal scales across time and people in a way a conversation does not, which is why the engineers who are listened to are usually the ones who write. Understand that technical disagreement is mostly a disagreement about priorities or about unstated assumptions, so surfacing the assumption resolves more arguments than being right does. Understand the trap specific to this field, that a technically superior solution nobody adopts has produced nothing, so adoption cost is part of the design. Understand what you are accountable for when a system you argued for fails, and understand mentoring and review as leverage rather than overhead. Both books are worth reading alongside the capstone rather than before it, because the ideas only land against a real situation.

**Project:** Write 6 technical blog posts in 12 months, all on your own domain expertise. Speak at one meetup or conference (NVIDIA GTC, PyDay/PyCon Latam, local AI meetup). Make one substantive open-source contribution to a project you actually use.

### Capstone: Edge inference `critical`
**Prerequisites:** Jetson & edge deploy, LiteRT & OpenVINO, ML compilers & runtimes
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Publish the benchmark table (latency, accuracy, memory, power) and the profiler traces behind every optimization.

**Study approach:** A capstone teaches a different kind of knowledge from a course: how the parts interact, and which of your beliefs about them were wrong. Understand that the point of taking one model to two different targets is that the optimizations do not transfer, since what wins on a Jetson's GPU is not what wins on a CPU or an NPU, and discovering that first-hand is the lesson. Understand that the accuracy budget has to be fixed before any optimization begins, because deciding afterwards how much accuracy was acceptable is how a project talks itself into a result. Understand why a profiler trace must sit behind every claimed speed-up: in a real pipeline the decode, the preprocessing or a memory copy often costs more than inference, so an optimization applied to the wrong stage changes nothing while appearing to be work. Reuse the TensorRT keystone model so the time goes into depth rather than setup, and treat what did not pay off as a result worth publishing, because it is the part nobody else writes down.

**Project:** One model taken from a training checkpoint to measured deployments on two targets (a Jetson plus a CPU, NPU or MCU target through LiteRT, OpenVINO or ExecuTorch): exported, quantized, profiled, with a custom kernel or compiler pass where the profiler shows it pays. Public repo, benchmark table, and a writeup of what did not pay off. The proof for an edge inference and compilers profile.

### AI fleet architect `frontier`
**Prerequisites:** AI systems architecture, Jetson & edge deploy
**Unlocks:** none in this graph
**Why:** Once single-device deployment works, the next problem is the fleet: rolling out models and updates to many robots or edge devices, monitoring them, sharing what one learns with the rest, and keeping the whole fleet inside its safety case. Emerging role, no formal courses yet.
**Resources:**
- **Best match:** No formal courses; the knowledge is assembled from projects, open source and industry experience
- Open-RMF: open-rmf.org (free), why: task allocation across heterogeneous robots and shared-resource negotiation for lifts, doors and charging, which is the core problem of the role
- NASA and Mars rover postmortems (free), why: operating autonomous machines you cannot reach, with latency, limited power and no second chance; the best available model of disciplined fleet operation
- ROS2 fleet management packages on GitHub (free), why: the current state of the practice, which is still unsettled and worth seeing honestly

**Study approach:** A fleet is not a device multiplied, and the knowledge is the set of problems that only appear above one unit. Understand that the fundamental resource is shared: robots compete for the same corridors, lifts, charging points and network bandwidth, so coordination and task allocation become the system's real intelligence while each robot's autonomy becomes a component. Understand staged rollout as the central safety mechanism, that a model or firmware update must reach a small cohort first, be measured against a defined health signal, and roll back automatically when that signal degrades, because the alternative is one bad artifact bricking every unit at once. Understand that devices will be offline, half-updated and running different versions simultaneously, so the fleet's true state is a distribution rather than a value and every operation has to be safe to retry and safe to interrupt. Understand observability at this scale as an aggregation problem: per-device logs are unusable, so the useful signals are fleet-wide distributions and per-cohort comparisons that reveal the one site behaving differently. Understand that learning from the fleet, whether through central retraining on mined hard cases or through federated updates, must respect bandwidth, privacy and the safety case the fleet was approved under. Understand why postmortem discipline matters here more than anywhere else: a fault that occurs once per device per year occurs daily across ten thousand of them.

**Project:** Contribute to Open-RMF OR build a simulated fleet of 5+ robots with central orchestration (task allocation, charging coordination, failure recovery). Edge-track alternative: a fleet of edge devices with staged over-the-air model rollout and automatic rollback. Document architecture decisions. Open-source the result.

### Capstone: Physical AI `critical`
**Prerequisites:** Jetson & edge deploy, ROS2, 3D geometry & SLAM
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Ship it, document it publicly, and report the numbers that matter: latency, accuracy, power draw, and what broke.

**Study approach:** This capstone exists to teach the thing simulation cannot: that in a physical system the model is rarely what fails. Understand that end-to-end latency, not inference latency, is what the robot experiences, and that it accumulates across exposure, transfer, preprocessing, inference and actuation, so a fast model inside a slow loop still misses the object. Understand that timing and geometry cause most failures here, a transform in the wrong frame, a timestamp from the wrong clock, a camera calibration that drifted, and that these produce behaviour that looks like a bad model and is not. Understand why the failure behaviour has to be designed rather than discovered: the system must have a defined response to a dropped frame, a late detection and a low-confidence output, because a physical actuator acting on a stale decision is the hazard. Pick a task with a physical outcome you can measure, start from the ROS2 graph and the calibration rather than the model, and record what broke, since that account is the evidence that you have actually done this.

**Project:** One deployed perception-to-action system on real hardware: a calibrated sensor rig, an optimized model on Jetson, a ROS 2 control or decision loop, and measured latency and failure behaviour. Video, repo and a writeup of what broke. The proof for a Physical AI profile.

### Capstone: Safety case `critical`
**Prerequisites:** ML safety assurance, OT & industrial security
**Unlocks:** none in this graph
**Resources:**
- **Best match:** No course. Publish the safety case and the evidence behind it, and state plainly which claims the evidence does not yet support.

**Study approach:** The knowledge this capstone adds is that a safety argument is about a specific system in a specific place, not about a model. Understand that moving the function onto its real industrial target changes the claims you can support, because the hardware's timing, its failure modes and its update path are now part of the argument, and an assurance claim made against a development machine does not transfer. Understand why the security design belongs in the same document: an adversary who can reach the device can invalidate every safety claim made about it, which is why the zone and conduit design is evidence rather than an appendix. Understand the runtime monitor as the part that makes the whole case tractable, since a bounded, verifiable check with a defined safe state lets you argue about the system even where you cannot argue about the model. Understand that stating residual risk plainly strengthens the case rather than weakening it. Build on the Phase 6 safety case rather than starting over, and have someone who works in functional safety review it, because outside review is the test a safety case exists to pass.

**Project:** One assured perception function on an industrial edge target (OpenVINO or LiteRT on an industrial PC): a hazard analysis, an ML safety case built with AMLAS, verification evidence from your own test suite, an IEC 62443 zone and conduit design for the device, and a runtime monitor with a defined safe state. Published as a document plus repo. The proof for an industrial safety and ML assurance profile.

### Neuromorphic computing `frontier`
**Prerequisites:** C++, Jetson & edge deploy
**Unlocks:** none in this graph
**Why:** Event-driven spiking hardware targets power budgets that conventional edge accelerators cannot reach. It suits an electronics, C++ and embedded background, and the tooling is still young, so treat it as a long bet rather than an established job category.
**Resources:**
- **Best match:** snnTorch: snntorch.readthedocs.io (free). Actively maintained SNN framework, the practical sandbox now.
- Lava framework: github.com/lava-nc (free, archived by Intel in May 2026; still readable, no longer developed), why: how a computation is expressed as asynchronous processes exchanging spikes, which is the programming model even without live tooling
- Intel Neuromorphic Research Community (INRC): intel.com/neuromorphic. Gave access to Loihi 2 hardware; verify it still accepts members before planning around it
- Book: *Neuromorphic Engineering*, Indiveri et al., Springer (paid, ~$100), why: the device physics and circuit basis, for why this hardware reaches power budgets conventional accelerators cannot
- Recent Loihi 2 papers (free), why: the field publishes in conference proceedings rather than journals, so the current state of the art is there and nowhere else

**Study approach:** Neuromorphic computing replaces the clocked, dense arithmetic of a conventional accelerator with something closer to how nervous systems compute, and understanding that difference is the whole bet. Understand the spiking neuron model: a unit accumulates input until it crosses a threshold, emits a single event and resets, so information is carried in the timing and rate of discrete events rather than in continuous activation values. Understand why that is the source of the power advantage, because a neuron that is not spiking costs almost nothing, so energy scales with activity rather than with model size, which is the opposite of a GPU running at a fixed rate whatever the input. Understand event-driven sensing as the natural partner, since an event camera reports only pixels that changed and so produces almost no data from a static scene, and the pairing is where the real latency and power wins have been demonstrated. Understand the central difficulty honestly: a spike is not differentiable, so ordinary backpropagation does not apply, and the field works around it with surrogate gradients or by converting a conventional network, both of which give up something. Understand why this is marked frontier rather than desirable: the tooling is immature and Intel's framework is archived, so treat it as a long bet justified by an electronics and embedded background rather than by a current job market.

**Project:** Implement a small SNN model in snnTorch. If you get hardware access through INRC, deploy on Loihi 2. Publish on a niche blog or arxiv. The community is small enough that one good blog post gets noticed.

### Quantum-AI hybrids `frontier`
**Prerequisites:** Math for ML refresher, Machine learning
**Unlocks:** none in this graph
**Why:** An alternative frontier bet to neuromorphic computing. See the Quantum AI roadmap for the full path.
**Resources:**
- **Best match:** IBM Quantum Learning: quantum.cloud.ibm.com/learning (free; it absorbed the retired Qiskit Textbook)
- Qiskit docs: quantum.cloud.ibm.com/docs (free), why: circuit construction, transpilation to a device's real gate set and connectivity, and how a job is submitted and its results read
- Book: *Quantum Computation and Quantum Information*, Nielsen & Chuang (paid, ~$75), why: a multi-year reference rather than a course; chapters 1 to 6 carry the model and the canonical algorithms

**Study approach:** The knowledge worth having at this level is where a quantum advantage could possibly come from and why it is so hard to realise. Understand superposition and entanglement as statements about the state space: n qubits carry a state described by 2 to the n amplitudes, but you cannot read those amplitudes, you can only sample from them, which is why the whole game is arranging interference so the amplitude concentrates on the answer before you measure. Understand that measurement collapses the state and destroys the rest of the information, which is why algorithms are designed to be measured once at the end. Understand the shape of the known speedups and their limits: a quadratic improvement for unstructured search, exponential only for narrowly structured problems such as factoring and certain simulations, and essentially nothing for loading a large classical dataset, which is the constraint that quietly defeats most proposed quantum machine learning. Understand decoherence and gate error as the binding limit today, which is why circuits must be shallow, why transpilation to a real device's limited connectivity inflates depth, and why error correction is the field's central project rather than a detail. Understand variational algorithms as the current compromise, a shallow quantum circuit optimized by a classical loop, and understand the barren-plateau problem as the reason that compromise does not simply scale. Be honest about the horizon: this is a frontier bet, and the full path is the Quantum AI roadmap.

**Project:** Implement Grover's search and a quantum-classical hybrid optimization (QAOA) in Qiskit. Run on free IBM Quantum hardware. Blog the experience including the gap between theory and current hardware noise.

### Bio-digital / medical AI `frontier`
**Prerequisites:** Computer vision, Domain vertical
**Unlocks:** none in this graph
**Why:** An alternative frontier bet. Healthcare informatics > $127B by 2034. High moat from domain compliance.
**Resources:**
- **Best match:** Coursera: **AI for Medicine Specialization**, DeepLearning.AI (Coursera Plus)
- MIT OpenCourseWare: Computational Biology (free), why: the sequence and structure material, when the work moves past imaging into biological data
- MONAI framework: monai.io (free), why: medical imaging transforms, the handling of 3D volumes and DICOM input, and the evaluation metrics clinicians actually read

**Study approach:** Medical AI is ordinary machine learning under unusual constraints, and the constraints are the subject. Understand why evaluation differs most: a clinical decision is asymmetric, since a missed cancer and a false alarm are not comparable errors, so sensitivity at a fixed specificity is the meaningful number and overall accuracy is close to meaningless on a dataset where disease prevalence is low. Understand that calibration matters more here than almost anywhere, because a predicted probability is used to decide what happens to a person. Understand the characteristic data traps: a model that learns the scanner rather than the disease, a label derived from a report rather than from a confirmed outcome, and subgroup performance that varies by age, sex or skin tone in ways an aggregate metric conceals, which is why stratified reporting is required rather than advisable. Understand that medical images are 3D volumes with physical spacing and acquisition metadata attached, so standard 2D pipelines quietly discard information that matters. Understand the regulatory frame as the real differentiator in this field: intended use is a formal statement that bounds the claim, validation must be prospective and on data from sites the model never saw, and a model that updates itself is a regulatory problem rather than a feature. Understand that clinical adoption turns on workflow and on whether a clinician can see why the output is what it is, not on a benchmark score.

**Project:** Train a medical imaging classifier on a public dataset (e.g., NIH ChestX-ray). Document with an FDA-aligned evaluation framework (intended use, performance metrics by subgroup, failure modes). Optional: contribute to MONAI or similar open medical AI project.

---

## CERTIFICATIONS: PRIORITY ORDER

### Tier 1, High signal:
1. **NVIDIA Physical AI Certification** (new 2026): paid, ~$50-100 with webinar discount.
2. **NVIDIA Jetson AI Specialist**: free, project-based. Low effort, decent signal.
3. **NVIDIA Certified Associate: AI Infrastructure and Operations**, paid, ~$100. Good second cert.

### Tier 2, Good signal, included in Coursera Plus:
4. **Duke MLOps Specialization**: Finish first.
5. **Google Cloud Machine Learning Engineer**: After MLOps, and only if your edge work also trains or serves models in the cloud.

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

The other tracks swap the track-specific rows for their own Phase 5-6 courses at the same hours: data engine and Isaac Sim for robotics, perception verification and ML safety assurance for safety.

---

*Compiled: 2026. Reassess and update every 6 months.*
*Sources: demand evidence as cited in the Executive Summary (WEF Future of Jobs Report 2025, BLS Employment Projections 2025-35, McKinsey Technology Trends Outlook 2026, Gartner Top Strategic Technology Trends 2026 for technology direction only, Stanford AI Index 2026, CENIA and ECLAC ILIA 2025, Consejo de Competencias Mineras and Fundación Chile 2025-2034); course resources from NVIDIA DLI, Coursera and the verified platforms listed per node.*
